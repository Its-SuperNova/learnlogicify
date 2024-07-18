"use client";
import React from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import Image, { StaticImageData } from "next/image";
import shape_1 from "@/public/images/shapes/banner-plus.png";
import shape_2 from "@/public/images/shapes/banner-joystick.png";
import shape_3 from "@/public/images/shapes/banner-guy.png";
import shape_4 from "@/public/images/shapes/banner-file.png";
import shape_5 from "@/public/images/shapes/banner-megaphone.png";
import WellcomeShape from "../../common/SVG/wellcome_shape";
import ViewCourseBtn from "../../common/buttons/viewCoursesBtn";
import "./styles.css"; // Import the CSS file

interface shapes_img_type {
  img: StaticImageData;
  cls: string;
  data_depth: string;
}

const shapes_img: shapes_img_type[] = [
  { img: shape_1, cls: "one", data_depth: "0.3" },
  { img: shape_2, cls: "two", data_depth: "0.4" },
  { img: shape_3, cls: "three", data_depth: "0.2" },
  { img: shape_4, cls: "four", data_depth: "0.2" },
  { img: shape_5, cls: "five", data_depth: "0.3" },
];

const hero_banner_content = {
  sub_title: "Welcome To",
  sm_des: (
    <>
      Discover a Wide Range of Coding Courses Tailored to Enhance Your Skills,
      Accelerate Your Career, and Boost Your Success.
    </>
  ),
};

const { sub_title, sm_des } = hero_banner_content;

const HeroPage = () => {
  return (
    <MouseParallaxContainer>
        <div className="container"></div>
    </MouseParallaxContainer>
  );
};

export default HeroPage;
