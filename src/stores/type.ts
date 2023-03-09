export interface Link {
	name: string;
	icon: string;
	value: string;
}

export interface Base {
	name: string;
	data: string[];
}

export interface Project {
	id: string;
	name: string;
}

export interface CompanyList {
	name: string;
	time: string;
	intro: string;
	projects: Project[];
	content: string;
}

export interface ProjectList {
	id: string;
	name: string;
	skill: string[];
	time: string;
	difficulty: string;
	intro: string;
	content: string;
}

export interface RootObject {
	name: string;
	worker: string;
	links: Link[];
	bases: Base[];
	about: string[];
	companyList: CompanyList[];
	projectList: ProjectList[];
	thanks: string;
}