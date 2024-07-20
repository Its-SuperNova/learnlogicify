// app/page.tsx
import HomePage from "./components/Home";
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
      <HomePage />
      <Footer />
    </>
  );
};

export default Home;
