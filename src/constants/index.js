import {
    ipact,
    tunisair
  } from "../assets";
  
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const experiences = [
    {
      title: "Front-end developer (internship)",
      company_name: "Ipact Consult Inc",
      icon: ipact,
      iconBg: "#383E56",
      date: "July 2023 - September 2023",
      points: [
        "Developing  a web application using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews.",
      ],
    },
    {
      title: "Full-stack mobile developer (internship)",
      company_name: "Tunisair",
      icon: tunisair,
      iconBg: "#E6DEDD",
      date: "July 2024 - September 2024",
      points: [
        "Developing a backend with express.js and JWT authentication",
        "Implementing real-time notification system using websockets",
        "Developing a mobile application using React Native and Expo"
      ],
    },
  ];
  
  
  export { navLinks, experiences };