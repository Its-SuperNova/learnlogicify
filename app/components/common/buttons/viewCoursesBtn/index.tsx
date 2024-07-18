import React from "react";
import styled, { keyframes } from "styled-components";

// Define the keyframes
const anime = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Styled button component with adjusted styles
const Button = styled.button`
  width: 200px; /* Adjusted width */
  height: 50px; /* Adjusted height */
  font-size: 18px; /* Adjusted font size */
  text-align: center;
  line-height: 40px; /* Center the text vertically */
  color: rgba(255, 255, 255, 0.9);
  border-radius: 40px; /* Adjusted border radius */
  background: linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5);
  background-size: 600%;
  animation: ${anime} 16s linear infinite;
`;

// Functional component rendering the button
const HeroSearchForm = () => {
  return <Button>View Courses</Button>;
};

export default HeroSearchForm;
