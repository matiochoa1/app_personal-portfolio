import { categories, skills } from "@/data/index";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Skill } from "types";
import Heading from "../common/Heading";
import Progress from "../ui/Progress";

export default function Skills() {
	const [activeCategory, setActiveCategory] =
		useState<Skill["category"]>("frontend");
	const [progressValues, setProgressValues] = useState<{
		[key: string]: number;
	}>({});

	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

	useEffect(() => {
		if (isInView) {
			const timer = setTimeout(() => {
				const values = skills.reduce((acc, skill) => {
					acc[skill.name] = skill.level;
					return acc;
				}, {} as { [key: string]: number });
				setProgressValues(values);
			}, 200);

			return () => clearTimeout(timer);
		}
	}, [isInView]);

	const filteredSkills = skills.filter(
		(skill) => skill.category === activeCategory
	);

	return (
		<>
			<section className="py-20" id="skills">
				<motion.div
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: { opacity: 1, y: 0 },
					}}
					className="w-full">
					<div className="section-container" ref={sectionRef}>
						<Heading
							title="Skills"
							subtitle="My technical skills and competencies"
						/>

						<motion.div
							className="flex flex-wrap justify-center gap-2 mb-10"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}>
							{categories.map((category, index) => (
								<motion.button
									key={category.key}
									onClick={() => setActiveCategory(category.key)}
									className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
										activeCategory === category.key
											? "bg-primary text-primary-foreground"
											: "bg-secondary text-secondary-foreground hover:bg-sky-300 "
									}`}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.1 * index }}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}>
									{" "}
									{category.name}
								</motion.button>
							))}
						</motion.div>

						<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
							{filteredSkills.map((skill, index) => (
								<motion.div
									key={skill.name}
									className="space-y-2"
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.4, delay: 0.1 * index }}>
									<div className="flex items-center justify-between">
										<span className="font-medium">{skill.name}</span>
										<span className="text-sm text-muted-foreground">
											{progressValues[skill.name] || 0}
										</span>
									</div>

									<Progress value={progressValues[skill.name] || 0} />
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			</section>
		</>
	);
}
