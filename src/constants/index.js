import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `As a dedicated and eager Software developer, I am passionate about learning and building applications. Although I am just starting my journey, I have gained a strong foundation and honed my skills in technologies like React, Next.js, Node.js, HTML, CSS , JavaScript. I am excited to continue growing my skills and contribute to creating innovative solutions that enhance user experiences and support business objectives.`;

export const ABOUT_TEXT = `As an enthusiastic and adaptable aspiring Software developer, I am passionate about building efficient and user-friendly web applications. Though I am just beginning my professional journey, I have developed a solid understanding of technologies like React and Node.js. My interest in development started from a deep curiosity about how things work, and I am excited to continue learning and growing. I thrive in team settings, enjoy tackling challenges, and aim to contribute to meaningful projects. Outside of coding, I love exploring new technologies and staying engaged with the latest trends in development.
With a strong commitment to continuous improvement, I am always looking for opportunities to grow both technically and personally. I am confident that my dedication and willingness to learn will make me a valuable contributor to any team. I look forward to contributing fresh ideas and energy to create impactful solutions in the fast-evolving world of development.`;

export const EXPERIENCES = [
  {
    year: "Oct 2023 - Nov 2023",
    role: "Full Stack Web Development",
    company: "Take It Smart",
    description: `Led a project to design a e-commerce platform. Performance Optimization.
Implemented caching strategies, database
indexing and reducing page load`,
    technologies: ["Javascript", "Django", "Html", "CSS", "MySql"],
  },
  {
    year: "Sept 2023 - Oct 2023",
    role: "Software Engineering Job Simulation",
    company: "JP Morgan Chase & Co. -Forage",
    description: `Interface with a stock price data feed. Use JPMorgan chase and Co. frameworks and tools. Display data visuality for traders.Contrubuting to the Open Source Community`,
    technologies: ["Python3", "Git", "Basic Programming"],
  },
  {
    year: "Oct 2022 - Oct 2022",
    role: "Python programming & Application Projects",
    company: "Indoskill",
    description: `Supported various program activities, assisting with administrative tasks. Assisted with support and execution of virtual engagements. Wrote procedures, reports and technical documents in easy-to-easy
understand terminology. Implemented strategies to take advantage of new opportunities.`,
    technologies: ["Python", "Django", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Healo",
    image: project1,
    description:
      "Designed and developed a scalable, secure decentralized token system on blockchain using solidity. Developed 'Healo' an innovative platform promoting sustainable fashion and circular economy by enabling fabric donations, upcycling, and tracking carbon footprints. Led code review sessions to ensure maintainable architecture and system design. Work Built on top of a widely adopted blockchain protocol using solidity , ReactJS, Supabase Database, HTML , CSS , JavaScript. Deployed on Netlify.",
    technologies: ["HTML", "CSS", "JavaScript", "React" ,"Solidity" ,"SupaBase"],
  },
  {
    title: "AI- Interview Simulator ",
    image: project2,
    description:
      "Designed and implemented an 'AI Job Simulator,' a platform based on  Artificial intelligence to simulate real-world job scenarios for skill assessment and career guidance. Used Tech Stack as NextJs14 , Clerk for authentication , Neon database , Drizzle ORM, HTML , CSS, JavaScript. Participated in code reviews to improve code quality and maintainability. Managed project version control using GitHub and deployed testing environments.",
    technologies: ["NextJs", "NeonDB","Clerk", "HTML", "CSS", "Drizzle-ORM"],
  },
  {
    title: "Personal Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information. Managed project version control using GitHub and deployed using vercel. ",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "34 Ranka Nagar, RT Nagar , Bangalore , India ",
  phoneNo: "+91 8296224860",
  email: "ummeaiman262@gmail.com",
  linkedin: "LinkedIn"
};
