import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { ExperienceItem, Skill, SkillCategory, Project } from "types";

// I'm using barrels for easier exporting and importing of types but in larger projects a barrel file can be a bad idea
// because it can lead to circular dependencies. In this case, it's fine because the types are not dependent on each other.

export const socialLinks = [
	{
		icon: FaGithub,
		href: import.meta.env.VITE_GITHUB_URL,
		label: "Github",
		color: "bg-[#24292e] hover:bg-[#24292e]/90",
	},
	{
		icon: FaLinkedin,
		href: import.meta.env.VITE_LINKEDIN_URL,
		label: "LinkedIn",
		color: "bg-[#0A66C2] hover:bg-[#0A66C2]/90",
	},
	{
		icon: FaInstagram,
		href: import.meta.env.VITE_INSTAGRAM_URL,
		label: "Instagram",
		color: "bg-gradient-to-r from-[#f09433] to-[#e6683c] hover:opacity-90",
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
			" Develop automated solutions to streamline internal tasks, improving efficiency. Full Stack Development for internal tools. Service engineering and incident management. Data analysis for product improvement. Continue responsibilities from the previous role.",
		tags: [
			"Software Development",
			"React",
			"TypeScript",
			"Azure App Service",
			"ADO",
			"API",
			"Python",
			"Flask",
			"Databases",
			"AdTech",
			"Support",
		],
	},
	{
		title: "Technical Support Engineer",
		company: "Microsoft",
		period: "2023-2024",
		description:
			"Provided support to top-tier clients. Managed and resolved incidents efficiently. Conducted data analysis for troubleshooting and reporting. Developed front-end solutions for an internal hub. Participated in on-call rotations for larger incidents.",
		tags: [
			"Support",
			"Automation",
			"Documentation",
			"Incident Management",
			"Data Analysis",
			"AdTech",
		],
	},
	{
		title: "Sr Analyst Product Support",
		company: "Xandr",
		period: "2021-2023",
		description:
			"Provided technical support to clients. Analyzed case trends to identify recurring issues. Led pilot projects for new products before production release. Troubleshot and debugged client campaigns",
		tags: [
			"Support",
			"Debugging",
			"Data Analysis",
			"Troubleshooting",
			"AdTech",
		],
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

export const projects: Project[] = [
	{
		title: "UpTask App",
		description:
			"Task management app with authentication and real-time updates with React, TypeScript, Node.js, and MongoDB.",
		image: "uptask.png",
		tags: ["React", "Node.js", "MongoDB", "TypeScript", "TailwindCSS", "MVC"],
		github: "https://github.com/matiochoa1/app_upstack-frontend",
		live: "https://app-uptask-frontend.vercel.app/auth/login",
		type: "personal",
	},
	{
		title: "Automation Platform",
		description:
			"Frontend Dev Lead and Full Stack Developer for an internal automation platform. With more than 35 tools to automate tasks and improve efficiency. ",
		image: "automation-platform.jpg",
		tags: [
			"React",
			"Typescript",
			"TailwindCSS",
			"Automation",
			"Python",
			"API",
			"Agile",
			"ADO",
			"CI/CD",
			"Azure",
			"DevOps",
			"MySQL",
			"Log Level Data",
			"Data Analysis",
			"Documentation",
		],
		type: "professional",
	},
	{
		title: "Take Away App",
		description:
			"This is a Next.js project built with the App Router and Prisma, designed to manage a kiosk system. It includes features such as product management, order handling, and dynamic UI components.",
		image: "quiosco-app.png",
		tags: ["React", "Next.js", "Prisma", "TypeScript", "TailwindCSS", "ORM"],
		github: "https://github.com/matiochoa1/app_quiosco-nextjs",
		live: "https://app-quiosco-nextjs.vercel.app/",
		type: "personal",
	},
	{
		title: "Drink Recipe Searcher",
		description:
			"This is React Project for Drink Recipes Recommendations App built using Vite and TypeScript, Tailwind CSS, RESTFul API, Zustand, React Router, ZOD, Headless UI for modals and heroicons to handle notifications.",
		image: "project-cocktail-receipe.png",
		tags: [
			"React",
			"TypeScript",
			"TailwindCSS",
			"Zustand",
			"Zod",
			"Headless UI",
		],
		github: "https://github.com/matiochoa1/app_drinks-react-ts",
		live: "https://drinks-recipe-searcher-m.netlify.app/",
		type: "personal",
	},
	{
		title: "Crypto Tracker",
		description:
			"Crypto Currency Tracker is a web application that allows users to track the prices of various cryptocurrencies in real-time. It provides a user-friendly interface to view the current prices, historical data, and market trends of different cryptocurrencies. ",
		image: "project-crypto-searcher.png",
		tags: ["React", "TypeScript", "TailwindCSS", "Zustand"],
		github: "https://github.com/matiochoa1/app_crypto-react-ts",
		live: "https://crypto-react-ts-mat.netlify.app/",
		type: "personal",
	},
	{
		title: "Ez Report API",
		description:
			"Ez Report API is a tool I created to automate the generation of reports for internal stakeholders via API without the need of having the technical knowledge to do it. It provided a UI where they could build the JSON structure and fill a form to generate the request. ",
		image: "ezreport-api.jpg",
		tags: ["Python", "Flask", "Databases", "Automation", "JavaScript"],
		type: "professional",
	},
	{
		title: "On Call Duty",
		description:
			"I participate in on-call duty for the AdTech team, where I am responsible for monitoring and maintaining the health of our systems. I use various tools to ensure that our systems are running smoothly and to troubleshoot any issues that arise.",
		image: "outage.jpg",
		tags: [
			"On Call",
			"Troubleshooting",
			"Client comms",
			"Debugging",
			"Incident Management",
		],
		type: "professional",
	},
	{
		title: "Expenses App",
		description:
			"Expenses App is a web application that allows to submit a form and keep track of expenses. You can submit your budget and see how much you have spent according to certain categories. ",
		image: "expenses-app.png",
		tags: ["React", "TypeScript", "TailwindCSS", "useReducer", "ContextAPI"],
		github: "https://github.com/matiochoa1/control-de-gastos-ts-react",
		live: "https://control-gastos-mat.netlify.app/",
		type: "personal",
	},
];
