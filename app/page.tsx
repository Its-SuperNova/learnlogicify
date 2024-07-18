// app/page.tsx
import HomePage from "./components/Home";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import dynamic from "next/dynamic";

// Dynamically import the ScrollHandler component
const ScrollHandler = dynamic(
  () => import("./components/Home/ScrollHandler"),
  { ssr: false }
);

const Home: React.FC = () => {
  return (
    <>
      <ScrollHandler />
      <Header />
      <HomePage />
      <Footer />
    </>
  );
};

export default Home;
