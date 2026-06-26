import {
  ContactsProps,
  countUpItemsProps,
  NavLink,
  ProjectProps,
  ServiceProps,
} from '../Type'
import React from "react";
import { BsVectorPen, BsCode } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";

const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

const services: ServiceProps[] = [
  { id: 1, title: "UI/UX Design", icon: <BsVectorPen />, finished: 20 },
  { id: 2, title: "Web Developmemt", icon: <BsCode />, finished: 35 },
  { id: 3, title: "Web Research", icon: <HiMagnifyingGlass />, finished: 50 },
  { id: 4, title: "Marketing", icon: <FiBarChart />, finished: 45 },
];
const countUpItems: countUpItemsProps[] = [
  {
    id: 1,
    number: 4,
    text: "Years of Experience",
  },
  {
    id: 2,
    number: 50,
    text: "Satisfied Customers",
  },
  {
    id: 3,
    number: 42,
    text: "Design Items",
  },
  {
    id: 4,
    number: 50,
    text: "Clients Served",
  },
];

const projects: ProjectProps[] = [
  {
    id: 1,
    img: "/project1.png",
    name: "Random Password Generator",
    tools: ["React", "Typescript", "Tailwind CSS"],
    liveUrl: "https://password-generator-minimal.vercel.app",
    githubUrl: "https://github.com/kay-y/",


  },
  {
    id: 2,
    img: "/project2.webp",
    name: "React E-commerce Website",
    tools: ["React", "Tailwind CSS"],
    liveUrl: "https://e-commerce-website.vercel.app",
    githubUrl: "https://github.com/kay-y/",
  },
  {
    id: 3,
    img: "/project3.jpg",
    name: "Shopping Cart",
    tools: ["React", "Redux-Toolkit", "Tailwind CSS"],
    liveUrl: "https://password-generator-minimal.vercel.app",
    githubUrl: "https://github.com/kay-y/",
  },
  {
    id: 4,
    img: "/project4.jpg",
    name: "Autocomplete SearchBar",
    tools: ["React", "Typescript", "Tailwind CSS"],
    liveUrl: "https://password-generator-minimal.vercel.app",
    githubUrl: "https://github.com/kay-y/",
  },
];

const skills = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 70 },
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "ReactJS", level: 95 },
  { name: "NextJS", level: 95 },
];

const contacts: ContactsProps[] = [
  { id: 1, title: "Address", text: "Lagos, Nigeria" },
  { id: 2, title: "Phone", text: "09093430400" },
  { id: 3, title: "Email", text: "kayodeolanrewaju53@gmail.com" },
];

export { navLinks, projects, countUpItems, services, skills, contacts };