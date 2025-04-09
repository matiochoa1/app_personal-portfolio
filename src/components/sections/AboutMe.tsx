import { ArrowDown, Download } from "lucide-react";

export default function AboutMe() {
	return (
		<>
			<section className="min-h-screen flex items-center pt-24 pb-16">
				<div className="container max-w-6xl mx-auto px-4 sm:px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						<div className="flex flex-col animate-fade-in">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
								<span className="text-primary">hey there,</span> I'm{" "}
								<span className="text-sky-500">Matias!</span>
							</h1>

							<p className="mt-4 text-md text-muted-foreground">
								Service Engineer at Microsoft and Full Stack Developer.
							</p>

							<p className="mt-6 text-md">
								+3 years of Experience. From Madrid, Spain.
							</p>

							<p className="mt-4 text-md">
								Specialized in the AdTech industry and full stack developer of
								internal tools to optimize time efficiency.
							</p>

							<div className="mt-8 flex flex-wrap gap-4">
								<button
									type="button"
									className="border border-gray-300 rounded-md lg:rounded-lg p-3 text-sm lg:text-md font-medium bg-gray-50/80 shadow-md hover:bg-gray-100/90 transition-colors cursor-pointer">
									<a href="#contact">Get in Touch</a>
								</button>

								<button
									type="button"
									className="border border-gray-300 rounded-md lg:rounded-lg p-3 text-sm lg:text-md font-medium bg-sky-100/80 shadow-md hover:bg-sky-150/90 transition-colors cursor-pointer">
									<a href="/resume.pdf" download className="flex items-center">
										<Download className="mr-2 h-4 w-4" />
										Download CV
									</a>
								</button>
							</div>
						</div>

						<div className="flex justify-center animate-scale-in">
							<div className="relative">
								<div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-900/20">
									<img
										src="/pic.jpg"
										alt="Image of Matias"
										loading="lazy"
										className="w-full h-full object-fill rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
									/>
								</div>
								<div className="absolute -bottom-2 -right-2 w-20 h-20 bg-sky-600/80 rounded-full flex items-center justify-center text-white font-bold">
									Matias
								</div>
							</div>
						</div>
					</div>

					<div className="mt-16 flex justify-center">
						<a href="#about" className="animate-bounce">
							<ArrowDown className="h-6 w-6 text-primary" />
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
