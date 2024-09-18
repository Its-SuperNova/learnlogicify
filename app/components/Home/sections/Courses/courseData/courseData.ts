// allcourses/data/courseData.ts
import { IconType } from "react-icons";
import { FaPython, FaJs, FaJava, FaCode, FaDatabase, FaHtml5 } from "react-icons/fa";

export interface Course {
  url: string;
  Level: string;
  languageId: string;
  topicId: string;
  icon: IconType;
  title: string;
  topics: number;
  videos: number;
  desc: string;
  offer: string;
  price: string;
  originalPrice: string;
  bannerColor: string;
  available: boolean;  // New member added here
}

const coursesData: Course[] = [
  {
    url: "basic-python",
    Level: "Beginner",
    languageId: "python",
    topicId: "problem-solving",
    icon: FaPython,
    title: "Basic Python",
    topics: 10,
    videos: 20,
    desc: "Learn Python from scratch with our beginner-friendly course.",
    offer: "33% OFF",
    price: "₹999",
    originalPrice: "₹1499",
    bannerColor: "#E2D8FC",
    available: true,  // Only Basic Python is available
  },
  {
    url: "basic-c",
    Level: "Beginner",
    languageId: "c",
    topicId: "problem-solving",
    icon: FaCode,
    title: "Basic C",
    topics: 15,
    videos: 25,
    desc: "Learn the fundamentals of C programming in this beginner course.",
    offer: "20% OFF",
    price: "₹1199",
    originalPrice: "₹1499",
    bannerColor: "#FCE2D8",
    available: true,  // Only Basic C is available
  },
  {
    url: "basic-cpp",
    Level: "Beginner",
    languageId: "cpp",
    topicId: "problem-solving",
    icon: FaCode,
    title: "Basic C++",
    topics: 10,
    videos: 20,
    desc: "Understand the basics of C++ programming with this introductory course.",
    offer: "33% OFF",
    price: "₹999",
    originalPrice: "₹1499",
    bannerColor: "#D7FBED",
    available: true,  // Set to false
  },
  {
    url: "basic-java",
    Level: "Beginner",
    languageId: "java",
    topicId: "problem-solving",
    icon: FaJava,
    title: "Basic Java",
    topics: 15,
    videos: 25,
    desc: "Get started with Java programming through our easy-to-follow beginner course.",
    offer: "20% OFF",
    price: "₹1199",
    originalPrice: "₹1499",
    bannerColor: "#EBEBEB",
    available: true,  // Set to false
  },
];

export default coursesData;
