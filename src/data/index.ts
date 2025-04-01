import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

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
