import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "SQL",
    type: "Database",
  },
  // {
  //     imageUrl: motion,
  //     name: "Motion",
  //     type: "Animation",
  // },
  // {
  //     imageUrl: mui,
  //     name: "Material-UI",
  //     type: "Frontend",
  // },
  // {
  //     imageUrl: nextjs,
  //     name: "Next.js",
  //     type: "Frontend",
  // },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  // {
  //     imageUrl: redux,
  //     name: "Redux",
  //     type: "State Management",
  // },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  // {
  //     imageUrl: typescript,
  //     name: "TypeScript",
  //     type: "Frontend",
  // }
];

export const experiences = [
  {
    title: "Full Stack Mern Developer",
    company_name: "Octanet",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "1st May 2024 - 1st July 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Java Developer",
    company_name: "Universal",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "10th May 2024 - 9th July 2022",
    points: [
      "Developing and maintaining web applications using Hibernate, Spring and other related technologies.",
      "Worked under a faculty member at a coaching institute, assisting in developing and improving educational content and technical solutions.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "tanishqjalandra@gmail.com",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/tanishq-sm",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/tanishq-jalandra-721505264/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Portfolio Website",
    description:
      "A dynamic portfolio website built with React and Three.js, featuring interactive 3D elements and smooth animations. Showcases projects, skills, and experience in a visually engaging way. Styled with Tailwind CSS and enhanced using Framer Motion for seamless transitions. Includes a contact form for easy communication.",
    link: "https://github.com/tanishq-sm/MyPortfolio",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "BharatStore",
    description:
      "A seamless shopping platform with secure payments, easy navigation, and product management tools. Features inventory tracking, promotions, personalized recommendations, and customer reviews. Built with Spring Boot 3.0, Spring Security 6.0, Thymeleaf, Bootstrap, and MySQL.",
    link: "https://github.com/tanishq-sm/BharatStore",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Welding works ",
    description:
      "A professional website for a welding shop, offering various welding services with easy online inquiries. Features service listings, contact forms, image galleries, and customer testimonials. Built using Spring MVC, HTML, CSS, and JavaScript for a dynamic user experience.",
    link: "https://github.com/tanishq-sm/WeldingWorks",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Security Services",
    description:
      "A professional platform offering security services to customers with online service booking and inquiries. Features service listings, customer testimonials, and a contact form for easy communication. Built using Spring, HTML, CSS, and JavaScript for a responsive and secure experience. ",
    link: "https://github.com/tanishq-sm/SecurityApp",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "StichIt",
    description:
      "Online Tailoring Platform, A web platform connecting users with tailors, offering order tracking, reviews, and profile management. Ensures seamless service with efficient communication and real-time updates. Built using JSP, Servlets, Sessions, Cookies, and MySQL",
    link: "https://github.com/tanishq-sm/StichIt",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Chatterbox",
    description:
      "A peer-to-peer messaging app enabling offline communication without internet dependency. Uses RMI for secure authentication and socket programming for direct messaging, ensuring privacy and network autonomy. Built with Java (JDK 21), RMI, and Socket Programming.",
    link: "https://github.com/tanishq-sm/ChatterBox",
  },
];
