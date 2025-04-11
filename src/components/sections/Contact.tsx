import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import Heading from "../common/Heading";
import { socialLinks } from "@/data/index";

export default function Contact() {
	return (
		<>
			<section id="contact" className="py-20 bg-secondary/20">
				<div className="section-container">
					<Heading
						title="Get in touch"
						subtitle="Have a question or want to know more about me?"
					/>

					<div className="flex flex-col justify-center">
						<div className="flex flex-col items-center md:items-end">
							<h3 className="mb-2 text-2xl font-bold ">Let's connect</h3>

							<p className="mb-2 text-sm md:text-md md:mb-0">
								I'm always open to discuss projects, ideas or opportunities.
								Feel free to reach out!
							</p>
						</div>

						<div className="flex items-center my-4">
							<MapPin className="mr-2 text-primary" />
							<span>Madrid, Spain</span>
						</div>

						<div className="flex items-center mb-6">
							<Mail className="mr-2 text-primary" />
							<span>matiasmochoa@outlook.es</span>
						</div>

						<div className="space-y-4">
							{socialLinks.map((link) => (
								<button
									key={link.label}
									className={`border border-border h-10 px-4 py-2 w-full justify-start ${link.color} text-white `}>
									<a
										href={link.href}
										rel="noopener noreferrer"
										target="_blank"
										className="flex justify-items-center-safe">
										<link.icon className="flex items-center" size={20} />
										<span className="ml-2">{link.label}</span>
										<ArrowUpRight className="w-4 h-4 ml-auto" />
									</a>
								</button>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
