// Slide up animation for title (unchanged)
export const slideUp = {
  initial: { y: "100%" }, // Start below the view
  open: (i) => ({
    y: "0%", // Move to normal position
    transition: { duration: 0.5, delay: i * 0.1 }, // Delay each word's reveal
  }),
  closed: { y: "100%", transition: { duration: 0.5 } },
};

// Fade-in animation for description (unchanged)
export const fadeIn = {
  initial: { opacity: 0 }, // Start invisible
  open: {
    opacity: 1, // Fade in to visible
    transition: { duration: 1 }, // Animation duration
  },
  closed: { opacity: 0, transition: { duration: 0.5 } },
};

// Smooth slide-up animation for grid items
export const gridSlideUp = {
  initial: { opacity: 0, y: 30 }, // Start slightly below with opacity 0
  open: {
    opacity: 1,
    y: 0, // Move to normal position
    transition: {
      duration: 0.8,  // Smooth longer duration
      ease: [0.42, 0, 0.58, 1], // Cubic-bezier for smooth easing
    },
  },
  closed: { opacity: 0, y: 30, transition: { duration: 0.5 } }, // Close animation
};

// Smooth fade-in animation for grid item descriptions
export const gridFadeIn = {
  initial: { opacity: 0 }, // Start invisible
  open: {
    opacity: 1, // Fade in to visible
    transition: {
      duration: 0.8,  // Smooth longer duration
      ease: [0.42, 0, 0.58, 1], // Smooth easing
    },
  },
  closed: { opacity: 0, transition: { duration: 0.5 } }, // Close animation
};

// Button reveal animation
export const buttonReveal = {
  initial: { opacity: 0, y: 50 }, // Start below view with opacity 0
  open: {
    opacity: 1,
    y: 0, // Move to normal position
    transition: {
      duration: 0.6, // Smooth and steady reveal
      ease: "easeOut", // Smooth easing
    },
  },
  closed: { opacity: 0, y: 50, transition: { duration: 0.4 } }, // Slide down and fade out
};
