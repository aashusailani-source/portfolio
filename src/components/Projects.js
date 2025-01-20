// Import images from assets
import ezyeatsImage from '../assets/ezyeats-ss.png';
import blogAppImage from '../assets/blog-app-ss.png';
import nexChatImage from '../assets/nexchat-ss.png';

const projects = [
  {
    id: 1,
    title: "EzyEats",
    description: "EzyEats is a food delivery platform that lets customers browse menus, place orders, and track deliveries, with secure payments powered by Stripe. Admins can manage orders and update menus through a simple dashboard",
    image: ezyeatsImage, // Using the imported image
    liveLink: "https://ezyeats-client.onrender.com",
    githubLink: "https://github.com/aashusailani-source/ezyeats",
  },
  {
    id: 2,
    title: "NexChat",
    description: "NexChat is a real-time chat application powered by Socket.io, allowing users to instantly send and receive messages. With its seamless interface, users can engage in private and group chats, ensuring real-time communication.",
    image: nexChatImage, // Using the imported image
    liveLink: "https://dev-projects-stack-monorepo-9rr7.vercel.app/",
    githubLink: "https://github.com/aashusailani-source/dev-projects-stack-monorepo/tree/main/blog-app",
  },
  {
    id: 3,
    title: "BlogApp",
    description: "BlogApp is a blogging platform with secure user authentication, allowing users to sign up, log in, and manage their posts. With a user-friendly interface, users can create, edit, and delete blog posts, all while enjoying a secure, personalized experience.",
    image: blogAppImage, // Using the imported image
    liveLink: "https://chatapplication-3zbe.onrender.com",
    githubLink: "https://github.com/aashusailani-source/chatApplication",
  },
];

export default projects;