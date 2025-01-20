// Import images from assets
import ezyeatsImage from '../assets/ezyeats-ss.png';
import blogAppImage from '../assets/blog-app-ss.png';
import nexChatImage from '../assets/nexchat-ss.png';

const projects = [
  {
    id: 1,
    title: "EzyEats",
    description: "A description of Project 1 goes here. This project uses various technologies.",
    image: ezyeatsImage, // Using the imported image
    liveLink: "https://ezyeats-client.onrender.com",
    githubLink: "https://github.com/aashusailani-source/ezyeats",
  },
  {
    id: 2,
    title: "NexChat",
    description: "A description of Project 2 goes here. This project uses different technologies.",
    image: nexChatImage, // Using the imported image
    liveLink: "https://dev-projects-stack-monorepo-9rr7.vercel.app/",
    githubLink: "https://github.com/aashusailani-source/dev-projects-stack-monorepo/tree/main/blog-app",
  },
  {
    id: 3,
    title: "BlogApp",
    description: "A description of Project 3 goes here. This project utilizes cutting-edge technologies.",
    image: blogAppImage, // Using the imported image
    liveLink: "https://chatapplication-3zbe.onrender.com",
    githubLink: "https://github.com/aashusailani-source/chatApplication",
  },
];

export default projects;
