import {
	hcl,
	quest,
	css,
	docker,
	git,
	html,
	javascript,
	mongodb,
	reactjs,
	java,
	sql,
	aws,
	kubernetes,
	wevote,
	synchrodoc,
	unnati,
  } from "../assets";
  
  
  export const navLinks = [
	{
	  id: "about",
	  title: "About",
	},
	{
	  id: "work",
	  title: "Work",
	},
	{
	  id: "contact",
	  title: "Contact",
	},
  ];
  
  const services = [
	{
	  title: "Java",
	  icon: java,
	},
	{
	  title: "HTML",
	  icon: html,
	},
	{
	  title: "CSS",
	  icon: css,
	},
	{
		title: "SQL",
		icon: sql,
    },
	{
	  title: "Docker",
	  icon: docker,
	},
	{
		title: "MongoDB",
		icon: mongodb,
	},
	{
		title: "ReactJS",
		icon: reactjs,
	},
	{
		title: "JavaScript",
		icon: javascript,
	},
	{
		title: "Kubernetes",
		icon: kubernetes,
	},
	{
		title: "AWS",
		icon: aws,
	},
	{
		title: "Git",
		icon: git,
	}
  ];
  
  const experiences = [
	{
		title: "Software Engineer",
		company_name: "HCL Tech",
		icon: hcl,
		iconBg: "#E6DEDD",
		date: "Jan 2021 - Present",
		points: [
		  "Developed and maintained automated deployment processes.",
		  "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		  "Designed and implemented intuitive user interfaces with interactive features.",
		  "Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
	  title: "Graduate Trainee Engineer",
	  company_name: "QuEST Global",
	  icon: quest,
	  iconBg: "#383E56",
	  date: "Nov 2019 - Oct 2020",
	  points: [
		"Developing and maintaining web applications using frameworks and other related technologies.",
		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		"Acquired knowledge of containerization technologies like Docker and Kubernetes, supporting containerized application deployments.",
		"Participating in code reviews and providing constructive feedback to other developers.",
	  ],
	},
  ];
  

  const projects = [
	{
	  name: "We-Vote",
	  description:
		" The project aims to improve voter turnout and accessibility, and provide a platform for seamless and accurate vote counting.",
	  tags: [
		{
		  name: "Java, Servlets",
		  color: "blue-text-gradient",
		},
		{
		  name: "SQL",
		  color: "green-text-gradient",
		},
		{
		  name: "HTML",
		  color: "pink-text-gradient",
		},
	  ],
	  image: wevote,
	  source_code_link: "https://github.com/Manojemjay/We-Vote",
	},
	{
	  name: "SynchroDoc",
	  description:
		"Google Docs simulation with real-time collaboration ",
	  tags: [
		{
		  name: "JavaScript",
		  color: "blue-text-gradient",
		},
		{
		  name: "React",
		  color: "green-text-gradient",
		},
		{
		  name: "MongoDB",
		  color: "pink-text-gradient",
		},
	  ],
	  image: synchrodoc,
	  source_code_link: "https://github.com/Manojemjay/SynchroDoc",
	},
	{
	  name: "E-commerce Website",
	  description:
		"An e-commerce website that serves as a one-stop catalogue for the Agricultural products and services",
	  tags: [
		{
		  name: "HTML",
		  color: "blue-text-gradient",
		},
		{
		  name: "CSS",
		  color: "green-text-gradient",
		},
		{
		  name: "JavaScript",
		  color: "pink-text-gradient",
		},
	  ],
	  image: unnati,
	  source_code_link: "https://github.com/Manojemjay/UnnatiAgroTech-website",
	},
  ];
  
  export { services, experiences, projects };