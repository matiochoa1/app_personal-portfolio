import { socialLinks } from "@/data/index";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<footer className="py-8 bg-secondary">
				<div className="section-container">
					<div className="flex flex-col items-center justify-between md:flex-row">
						<div className="mb-4 text-center md:text-left md:mb-0">
							<span className="text-lg font-bold">
								Matias<span className="text-primary">Dev</span>
							</span>
							<p className="mt-2 text-sm text-muted-foreground">
								Full Stack Developer & Service Engineer
							</p>
						</div>

						<div className="flex items-center space-x-4">
							{socialLinks.map((link) => (
								<a
									key={link.label}
									href={link.href}
									className="transition-colors text-foreground/70 hover:text-primary"
									aria-label={link.label}
									target="_blank"
									rel="noopener noreferrer">
									<link.icon size={24} />
								</a>
							))}
						</div>
					</div>

					<div className="pt-8 mt-8 text-sm text-center border-t border-border/30 text-muted-foreground">
						<p>© {currentYear} Matias. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</>
	);
}
