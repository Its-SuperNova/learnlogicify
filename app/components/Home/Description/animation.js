// animation.js

// Slide up animation for title
export const slideUp = {
  initial: { y: "100%" }, // Start below the view
  open: (i) => ({
    y: "0%", // Move to normal position
    transition: { duration: 0.5, delay: i * 0.1 }, // Delay each word's reveal
  }),
  closed: { y: "100%", transition: { duration: 0.5 } },
};

// Fade-in animation for description
export const fadeIn = {
  initial: { opacity: 0 }, // Start invisible
  open: {
    opacity: 1, // Fade in to visible
    transition: { duration: 1 }, // Animation duration
  },
  closed: { opacity: 0, transition: { duration: 0.5 } },
};
