// Fade-in animation
export const fadeIn = {
  initial: { opacity: 0 }, // Start invisible
  open: {
    opacity: 1, // Fade in to visible
    transition: { duration: 1 }, // Animation duration
  },
  closed: { opacity: 0, transition: { duration: 0.5 } },
};
