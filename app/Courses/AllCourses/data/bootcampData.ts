// allcourses/data/courseData.ts
import { IconType } from "react-icons";
import { FaPython, FaJs, FaJava, FaCode, FaDatabase, FaHtml5 } from "react-icons/fa";

export interface Bootcamp {
  icon: IconType;
  title: string;
  Problems: number;
  Courses: number;
  desc: string;
  offer: string;
  price: string;
  originalPrice: string;
  bannerColor: string;
}

const BootcampData: Bootcamp[] = [
  {
    icon: FaPython,
    title: "Python Bootcamp",
    Problems: 500,
    Courses: 6,
    desc: "Master Python from basics to advanced concepts with our comprehensive bootcamp. Gain hands-on experience in programming, data structures, algorithms, OOP concepts, data analysis, and web development.",
    offer: "33% OFF",
    price: "₹999",
    originalPrice: "₹1499",
    bannerColor: "#E2D8FC",
  },
  {
    icon: FaCode,
    title: "C Bootcamp",
    Problems: 400,
    Courses: 5,
    desc: "Learn C programming from scratch to advanced level. This bootcamp covers all essential topics including data structures, algorithms, and system programming.",
    offer: "25% OFF",
    price: "₹899",
    originalPrice: "₹1199",
    bannerColor: "#FCE2D8",
  },
  {
    icon: FaCode,
    title: "C++ Bootcamp",
    Problems: 450,
    Courses: 5,
    desc: "Become proficient in C++ with our intensive bootcamp. Learn object-oriented programming, advanced data structures, algorithms, and more.",
    offer: "30% OFF",
    price: "₹999",
    originalPrice: "₹1399",
    bannerColor: "#D7FBED",
  },
  {
    icon: FaJava,
    title: "Java Bootcamp",
    Problems: 600,
    Courses: 7,
    desc: "Comprehensive Java bootcamp that takes you from basics to advanced topics. Covers programming, data structures, algorithms, OOP concepts, and web development.",
    offer: "35% OFF",
    price: "₹1099",
    originalPrice: "₹1699",
    bannerColor: "#EBEBEB",
  },
  {
    icon: FaHtml5,
    title: "Web Development Bootcamp",
    Problems: 700,
    Courses: 8,
    desc: "Master web development with our extensive bootcamp. Learn HTML, CSS, JavaScript, front-end frameworks, and back-end technologies.",
    offer: "40% OFF",
    price: "₹1199",
    originalPrice: "₹1999",
    bannerColor: "#F5E6CC",
  },
];

export default BootcampData;
