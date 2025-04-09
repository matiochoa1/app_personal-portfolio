import Heading from "@/components/common/Heading";
import { experiences } from "@/data/index";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
	return (
		<>
			<section id="experience" className="py-20">
				<div className="section-container">
					<Heading
						title="My Experience"
						subtitle="Take a look at my professional journey"
					/>

					<div className="relative space-y-8">
						<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

						{experiences.map((experience, index) => (
							<div
								key={index}
								className="relative flex flex-col items-center sm:flex-row sm:even:flex-row-reverse">
								<div className="absolute w-4 h-4 transform -translate-x-1/2 rounded-full left-1/2 bg-primary"></div>

								<div className="flex-1 p-8 sm:w-1/2 sm:pb-0 sm:px-8">
									{index % 2 === 0 ? (
										<div className="justify-end hidden sm:flex">
											<div className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-sky-100">
												<Calendar size={14} className="mr-2" />
												{experience.period}
											</div>
										</div>
									) : (
										<div className="justify-start hidden sm:flex">
											<div className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-sky-100">
												<Calendar size={14} className="mr-2" />
												{experience.period}
											</div>
										</div>
									)}
								</div>

								<div className="w-full cursor-pointer sm:w-1/2 sm:px-8">
									<div className="h-full transition-shadow border rounded-lg shadow-sm border-border hover:shadow-md bg-card text-card-foreground">
										<div className="flex flex-col space-y-1.5 p-6 pb-2">
											<div className="flex items-start justify-between">
												<div>
													<h3 className="text-xl font-bold">
														{experience.title}
													</h3>
													<div className="flex items-center text-muted-foreground">
														<Briefcase size={14} className="mr-1" />
														{experience.company}
													</div>
												</div>

												<div className="inline-flex items-center px-3 py-1 text-sm rounded-full sm:hidden bg-primary text-sky-100">
													{experience.period}
												</div>
											</div>
										</div>

										<div className="p-6 pt-0">
											<p className="mb-4">{experience.description}</p>
											<div className="flex flex-wrap gap-2">
												{experience.tags?.map((tag) => (
													<span
														key={tag}
														className="px-2 py-1 text-xs rounded-full bg-slate-300 text-slate-700">
														{tag}
													</span>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
