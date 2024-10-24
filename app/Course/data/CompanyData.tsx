import Accenture from "../components/svg/Accenture";
import AccentureMobile from "../components/svg/AccentureMobile";
import Capgemini from "../components/svg/Capgemini";
import TCSNinja from "../components/svg/TcsNinja";
import Amcat from "../components/svg/Amcat";
import Cocubes from "../components/svg/Cocubes";
import InfyTQ from "../components/svg/InfyTQ";
import TCSCodevita from "../components/svg/TcsCodevita";
import CTSGenc from "../components/svg/CTSGenc";

export interface Company {
  title: string;
  desc: string;
  offer: string;
  price: string;
  originalPrice: string;
  bannerColor: string;
  desktopImage: JSX.Element;
  mobileImage: JSX.Element;
  companyId: string;
  category: string;
}

const CompanyData: Company[] = [
  {
    title: "Accenture Mock Test Series",
    desc: "Prepare for Accenture placements with our mock test series to enhance your skills to secure your dream job at Accenture.",
    offer: "33% OFF",
    price: "₹999",
    originalPrice: "₹1499",
    bannerColor: "#F8FBD7",
    desktopImage: <Accenture />,
    mobileImage: <AccentureMobile />,
    companyId: "accenture",
    category: "service-based",
  },
  {
    title: "Capgemini Mock Test Series",
    desc: "Prepare for Capgemini placements with our mock test series to sharpen your skills and secure your dream job.",
    offer: "33% OFF",
    price: "₹999",
    originalPrice: "₹1499",
    bannerColor: "#CCFFF6",
    desktopImage: <Capgemini />,
    mobileImage: <Capgemini />,
    companyId: "capgemini",
    category: "service-based",
  },
  {
    title: "TCS Ninja Test Series",
    desc: "Get ready for TCS Ninja with our test series designed to help you ace the placement process.",
    offer: "33% OFF",
    price: "₹999",
    originalPrice: "₹1499",
    bannerColor: "#D8D9FF",
    desktopImage: <TCSNinja />,
    mobileImage: <TCSNinja />,
    companyId: "tcs-ninja",
    category: "service-based",
  },
  {
    title: "Amcat Mock Test Series",
    desc: "Enhance your AMCAT scores with our mock test series tailored for all major sections.",
    offer: "33% OFF",
    price: "₹999",
    originalPrice: "₹1499",
    bannerColor: "#FBDDCE",
    desktopImage: <Amcat />,
    mobileImage: <Amcat />,
    companyId: "amcat",
    category: "service-based",
  },
  {
    title: "Cocubes Mock Test",
    desc: "Prepare for Cocubes exams with our comprehensive mock test series.",
    offer: "33% OFF",
    price: "₹999",
    originalPrice: "₹1499",
    bannerColor: "#FFC6F2",
    desktopImage: <Cocubes />,
    mobileImage: <Cocubes />,
    companyId: "cocubes",
    category: "service-based",
  },
  {
    title: "InfyTQ Mock Test Series",
    desc: "Ace the InfyTQ certification exam with our specially designed mock test series.",
    offer: "33% OFF",
    price: "₹999",
    originalPrice: "₹1499",
    bannerColor: "#E1F4FE",
    desktopImage: <InfyTQ />,
    mobileImage: <InfyTQ />,
    companyId: "infytq",
    category: "product-based",
  },
  {
    title: "TCS Codevita",
    desc: "Prepare for TCS Codevita with our test series to enhance your coding skills.",
    offer: "33% OFF",
    price: "₹999",
    originalPrice: "₹1499",
    bannerColor: "#D7FBED",
    desktopImage: <TCSCodevita />,
    mobileImage: <TCSCodevita />,
    companyId: "tcs-codevita",
    category: "product-based",
  },
  {
    title: "CTS Genc Mock Test Series",
    desc: "Get ready for CTS Genc with our mock test series designed to secure your placement.",
    offer: "33% OFF",
    price: "₹999",
    originalPrice: "₹1499",
    bannerColor: "#EBEBEB",
    desktopImage: <CTSGenc />,
    mobileImage: <CTSGenc />,
    companyId: "cts-genc",
    category: "service-based",
  },
];

export default CompanyData;
