import { FaCode } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { IoCubeOutline } from "react-icons/io5";
import { PiMathOperationsBold } from "react-icons/pi";
import { FaQuestion } from "react-icons/fa";
import { RiLoopLeftFill } from "react-icons/ri";
import { TbMathFunction } from "react-icons/tb";
import { FaRegFolderOpen } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
interface SyllabusModule {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  topics: string[];
}

export const syllabusData: SyllabusModule[] = [
  {
    icon: FaCode,
    title: "Module 1",
    subtitle: "Introduction to Computers and Programming",
    topics: [
      "Overview of computer systems",
      "The role of Programming Language",
      "Understanding binary and data representation",
      "Number Conversions",
    ],
  },
  {
    icon: FaPython,
    title: "Module 2",
    subtitle: "Introduction to Python",
    topics: [
      "Overview of Python",
      "Setting up the Python environment",
      "Writing and running your first Python program",
      "Understanding Python’s syntax and structure",
    ],
  },
  {
    icon: IoCubeOutline,
    title: "Module 3",
    subtitle: "Variables and Data Types",
    topics: [
      "Introduction to Variables",
      "Primitive Data Types",
      "Composite Data Types",
      "Type Conversion",
      "Mutable and Immutable Types",
    ],
  },
  {
    icon: PiMathOperationsBold,
    title: "Module 4",
    subtitle: "Operators and Expressions",
    topics: [
      "Arithmetic Operators",
      "Comparison Operators",
      "Logical Operators",
      "Bitwise Operators",
      "Expressions in Python",
    ],
  },
  {
    icon: FaQuestion,
    title: "Module 5",
    subtitle: "Conditional Statements",
    topics: [
      "The if Statement",
      "The else Statement",
      "The elif Statement",
      "Nested Conditionals",
      "Ternary Operators",
    ],
  },
  {
    icon: RiLoopLeftFill,
    title: "Module 6",
    subtitle: "Loops",
    topics: [
      "The for Loop",
      "The while Loop",
      "Nested Loops",
      "Loop Control Statements",
      "Iterators",
    ],
  },
  {
    icon: TbMathFunction,
    title: "Module 7",
    subtitle: "Functions",
    topics: [
      "Defining Functions",
      "Function Arguments",
      "Return Values",
      "Scope and Lifetime",
      "Lambda Functions",
    ],
  },
  {
    icon: FaCode,
    title: "Module 8",
    subtitle: "Number Crunching",
    topics: [
      "Mathematical Functions",
      "Random Numbers",
      "Statistics",
      "NumPy Library",
    ],
  },
  {
    icon: FaCode,
    title: "Module 9",
    subtitle: "Patterns",
    topics: [
      "Pattern Matching",
      "Regular Expressions",
      "Wildcards",
      "String Patterns",
    ],
  },
  {
    icon: FaCode,
    title: "Module 10",
    subtitle: "Arrays",
    topics: [
      "Introduction to Arrays",
      "Array Operations",
      "Multidimensional Arrays",
      "Array Libraries",
    ],
  },
  {
    icon: FaCode,
    title: "Module 11",
    subtitle: "2D Arrays",
    topics: [
      "Introduction to 2D Arrays",
      "2D Array Operations",
      "Matrix Manipulations",
      "Applications of 2D Arrays",
    ],
  },
  {
    icon: FaCode,
    title: "Module 12",
    subtitle: "Strings",
    topics: [
      "Introduction to Strings",
      "String Operations",
      "String Methods",
      "String Formatting",
    ],
  },
  {
    icon: FaCode,
    title: "Module 13",
    subtitle: "Tuples",
    topics: [
      "Introduction to Tuples",
      "Tuple Operations",
      "Nested Tuples",
      "Applications of Tuples",
    ],
  },
  {
    icon: FaCode,
    title: "Module 14",
    subtitle: "Dictionaries",
    topics: [
      "Introduction to Dictionaries",
      "Dictionary Operations",
      "Nested Dictionaries",
      "Applications of Dictionaries",
    ],
  },
  {
    icon: FaCode,
    title: "Module 15",
    subtitle: "Sets",
    topics: [
      "Introduction to Sets",
      "Set Operations",
      "Set Methods",
      "Applications of Sets",
    ],
  },
  {
    icon: FaCode,
    title: "Module 16",
    subtitle: "Working with Modules",
    topics: [
      "Introduction to Modules",
      "Importing Modules",
      "Creating Modules",
      "Using Standard Library Modules",
    ],
  },
  {
    icon: FaRegFolderOpen,
    title: "Module 17",
    subtitle: "File Handling",
    topics: [
      "Introduction to File Handling",
      "Reading Files",
      "Writing to Files",
      "Working with CSV Files",
    ],
  },
  {
    icon: AiOutlineExclamationCircle,
    title: "Module 18",
    subtitle: "Exception Handling",
    topics: [
      "Introduction to Exception Handling",
      "Try and Except Blocks",
      "Handling Multiple Exceptions",
      "Creating Custom Exceptions",
    ],
  },
];
