import { motion } from "framer-motion";
import Heading from "@/components/common/Heading";

export default function AboutMain() {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="section-container"
				id="about">
				<Heading
					title="About Me"
					subtitle="Learn more about myself and what inspires me"
				/>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					<div className="flex justify-center md:justify-end">
						<motion.div
							initial={{ x: -50, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="relative w-full max-w-md h-96">
							<img
								src="dev.jpg"
								alt="Imagen de Matias"
								className="object-cover w-full h-full rounded-lg shadow-lg"
							/>

							<motion.div
								className="absolute p-4 border rounded-lg shadow-md -bottom-4 -right-4 bg-background border-border"
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								viewport={{ once: true }}>
								<p className="font-medium">
									Creative, Analytical and Passionate{" "}
								</p>
							</motion.div>
						</motion.div>
					</div>

					<motion.div
						className="flex flex-col justify-center mr-0 md:mr-10"
						initial={{ x: 50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}>
						<h3 className="mb-4 text-2xl font-bold text-center md:text-left">
							Service Engineer & Full Stack Developer
						</h3>

						<p className="mb-4">
							I'm a passionate Full Stack Developer and Service Engineer at
							Microsoft with nearly 4 years of professional experience,
							dedicated to building efficient and user-friendly applications.
						</p>

						<p className="mb-4">
							My journey in technology began at Xandr, working as a Product
							Support Engineer I noticed there were repetitive tasks. This
							curiosity evolved into a career focused on developing internal
							tools that optimize processes and drive business value.
						</p>

						<p className="mb-4">
							At Microsoft, I've contributed to various projects in the AdTech
							industry, leveraging my technical expertise to solve complex
							challenges and enhance stakeholder experiences.
						</p>

						<p className="mb-4">
							When I'm not coding, you can find me exploring new technologies,
							expanding my skill set, and collaborating with talented
							individuals to push the boundaries of what's possible.
						</p>
					</motion.div>
				</div>
			</motion.div>
		</>
	);
}
