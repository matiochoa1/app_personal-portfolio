import { projects } from "@/data/index";
import Heading from "../common/Heading";
import { Tabs } from "../ui/Tabs";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
	const [activeTab, setActiveTab] = useState("all");

	const filteredProjects =
		activeTab === "all"
			? projects
			: projects.filter((project) => project.type === activeTab);

	return (
		<>
			<section className="py-20" id="projects">
				<div className="section-container">
					<Heading
						title="Projects"
						subtitle="A showcase of my personal and professional contributions"
					/>

					<Tabs
						defaultValue="all"
						className="mb-12"
						onValueChange={(value) => setActiveTab(value)}>
						<TabsList className="grid w-full max-w-md grid-cols-3 gap-2 mx-auto">
							<TabsTrigger
								value="all"
								className="p-2 rounded-full bg-secondary hover:bg-sky-100 transition-colors cursor-pointer data-[state=active]:bg-sky-100 data-[state=active]:font-semibold ">
								All Projects
							</TabsTrigger>
							<TabsTrigger
								value="personal"
								className="p-2 rounded-full bg-secondary hover:bg-sky-100 transition-colors cursor-pointer data-[state=active]:bg-sky-100 data-[state=active]:font-semibold">
								Personal
							</TabsTrigger>
							<TabsTrigger
								value="professional"
								className="p-2 rounded-full bg-secondary hover:bg-sky-100 transition-colors cursor-pointer data-[state=active]:bg-sky-100 data-[state=active]:font-semibold ">
								Professional
							</TabsTrigger>
						</TabsList>
					</Tabs>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{filteredProjects.map((project, index) => (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: index * 0.1 }}
								exit={{ opacity: 0, y: -20 }}
								className="flex items-center justify-center">
								<div
									className="flex flex-col h-full overflow-hidden transition-shadow border rounded-lg shadow-sm cursor-pointer bg-card text-card-foreground hover:shadow-lg border-border"
									key={index}>
									<div className="relative h-48 overflow-hidden">
										<img
											src={project.image}
											className="object-fill w-full h-full transition-transform hover:scale-105 hover:rotate-2"
											alt={project.title}
										/>
										<div className="absolute px-3 py-1 text-xs font-medium rounded-full text-foreground top-2 right-2 bg-background/80 backdrop-blur-sm">
											{project.type === "personal"
												? "Personal"
												: "Professional"}
										</div>
									</div>

									<div className="pb-2 flex flex-col space-y-1.5 p-6">
										<h3 className="text-xl font-bold">{project.title}</h3>
									</div>

									<div className="flex-grow p-6 pt-0">
										<p className="mb-4 text-sm text-muted-foreground">
											{project.description}
										</p>
										<div className="flex flex-wrap gap-2">
											{project.tags.map((tag) => (
												<span
													key={tag}
													className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
													{tag}
												</span>
											))}
										</div>
									</div>

									{(project.github || project.live) && (
										<div className="flex items-center gap-4 p-6 pt-0">
											{project.github && (
												<button className="p-2 text-xs rounded-full bg-primary text-secondary hover:bg-sky-400">
													<a
														href={project.github}
														target="_blank"
														rel="noopener noreferrer"
														className="flex items-center gap-2">
														<FaGithub className="w-4 h-4" />
														Code
													</a>
												</button>
											)}

											{project.live && (
												<button className="p-2 text-xs rounded-full bg-primary text-secondary hover:bg-sky-400">
													<a
														href={project.live}
														target="_blank"
														rel="noopener noreferrer"
														className="flex items-center gap-2">
														<ExternalLink className="w-4 h-4" />
														Live Demo
													</a>
												</button>
											)}
										</div>
									)}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
