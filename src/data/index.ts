import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { ExperienceItem, Skill, SkillCategory } from "types";

// I'm using barrels for easier exporting and importing of types but in larger projects a barrel file can be a bad idea
// because it can lead to circular dependencies. In this case, it's fine because the types are not dependent on each other.

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

export const skills: Skill[] = [
	// Frontend
	{ name: "HTML/CSS", level: 95, category: "frontend" },
	{ name: "JavaScript", level: 90, category: "frontend" },
	{ name: "TypeScript", level: 85, category: "frontend" },
	{ name: "React", level: 85, category: "frontend" },
	{ name: "TailwindCSS", level: 85, category: "frontend" },

	// Backend
	{ name: "Node.js", level: 80, category: "backend" },
	{ name: "Java", level: 55, category: "backend" },
	{ name: "Python", level: 65, category: "backend" },
	{ name: "SQL", level: 85, category: "backend" },
	{ name: "REST APIs", level: 85, category: "backend" },

	// Tools
	{ name: "Git", level: 95, category: "tools" },
	{ name: "ADO", level: 80, category: "tools" },
	{ name: "Bitbucket", level: 80, category: "tools" },
	{ name: "JIRA", level: 85, category: "tools" },
	{ name: "Agile", level: 90, category: "tools" },

	// Cloud
	{ name: "Azure App Services", level: 80, category: "cloud" },
	{ name: "Azure Functions", level: 65, category: "cloud" },
	{ name: "Azure DevOps", level: 80, category: "cloud" },
	{ name: "CI/CD Pipelines", level: 65, category: "cloud" },
];

export const categories: SkillCategory[] = [
	{ name: "Frontend", key: "frontend" },
	{ name: "Backend", key: "backend" },
	{ name: "Tools & Methodologies", key: "tools" },
	{ name: "Cloud & DevOps", key: "cloud" },
];
