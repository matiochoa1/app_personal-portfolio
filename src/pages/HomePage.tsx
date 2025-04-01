import AboutMe from "@/components/sections/AboutMe";
import { motion } from "framer-motion";

export default function HomePage() {
	return (
		<>
			<motion.div
				className="mt-16"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}>
				<AboutMe />
			</motion.div>
		</>
	);
}
