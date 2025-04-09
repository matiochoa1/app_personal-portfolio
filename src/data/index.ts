import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { ExperienceItem } from "types";

export const socialLinks = [
	{
		icon: FaGithub,
		href: import.meta.env.VITE_GITHUB_URL,
		label: "Github",
	},
	{
		icon: FaLinkedin,
		href: import.meta.env.VITE_LINKEDIN_URL,
	},
	{
		icon: FaInstagram,
		href: import.meta.env.VITE_INSTAGRAM_URL,
		label: "Instagram",
	},
];

export const navLinks = [
	{ title: "About", href: "#about" },
	{ title: "Experience", href: "#experience" },
	{ title: "Skills", href: "#skills" },
	{ title: "Projects", href: "#projects" },
	{ title: "Contact", href: "#contact" },
];

export const experiences: ExperienceItem[] = [
	{
		title: "Service Engineer",
		company: "Microsoft",
		period: "2024 - Present",
		description:
			"Working in the AdTech industry, maintaining and developing internal tools that enhance efficiency and drive revenue for our platforms. Participating in on-call duties and providing technical support for critical systems.",
		tags: [
			"React",
			"TypeScript",
			"Azure App Service",
			"ADO",
			"API",
			"Databases",
		],
	},
	{
		title: "Technical Support Engineer",
		company: "Microsoft",
		period: "2023-2024",
		description:
			"Providing support to top tier clients on DSPs and SSPs platforms. Incident management and troubleshooting client's issues with features of our platform. Developer of internal tools.",
		tags: ["Test"],
	},
	{
		title: "Sr Analyst Product Support",
		company: "Xandr",
		period: "2021-2023",
		description:
			"Providing support to top tier clients on DSPs and SSPs platforms. Incident management and troubleshooting client's issues with features of our platform. Developer of internal tools.",
		tags: ["Test"],
	},
];
