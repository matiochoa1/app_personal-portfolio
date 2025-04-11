import { ArrowDown, Download } from "lucide-react";

export default function AboutMe() {
	return (
		<>
			<section className="flex items-center min-h-screen pt-24 pb-16">
				<div className="container max-w-6xl px-4 mx-auto sm:px-6">
					<div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
						<div className="flex flex-col animate-fade-in">
							<h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
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

							<div className="flex flex-wrap gap-4 mt-8">
								<button
									type="button"
									className="h-10 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90">
									<a href="#contact">Get in Touch</a>
								</button>

								<button
									type="button"
									className="h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
									<a
										href="/files/Matias_Ochoa_CV.pdf"
										download
										className="flex items-center">
										<Download className="w-4 h-4 mr-2" />
										Download CV
									</a>
								</button>
							</div>
						</div>

						<div className="flex justify-center animate-scale-in">
							<div className="relative">
								<div className="w-64 h-64 overflow-hidden border-4 rounded-full md:w-80 md:h-80 border-slate-900/20">
									<img
										src="/pic.jpg"
										alt="Image of Matias"
										loading="lazy"
										className="object-fill w-full h-full transition-transform duration-300 transform rounded-full shadow-lg hover:scale-105 hover:shadow-xl"
									/>
								</div>
								<div className="absolute flex items-center justify-center w-20 h-20 font-bold text-white rounded-full -bottom-2 -right-2 bg-sky-600/80">
									Matias
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-center mt-16">
						<a href="#about" className="animate-bounce">
							<ArrowDown className="w-6 h-6 text-primary" />
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
