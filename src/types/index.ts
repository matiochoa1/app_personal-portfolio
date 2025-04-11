export type links = {
	title: string;
	href: string;
};

export type ExperienceItem = {
	title: string;
	company: string;
	period: string;
	description: string;
	tags?: string[];
};

export type Skill = {
	name: string;
	level: number;
	category: "frontend" | "backend" | "tools" | "cloud";
};

export type SkillCategory = {
	name: string;
	key: "frontend" | "backend" | "tools" | "cloud";
};

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	github?: string;
	live?: string;
	type: "personal" | "professional";
};
