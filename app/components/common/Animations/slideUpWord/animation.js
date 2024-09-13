// Slide up animation for words
export const slideUp = {
  initial: { y: "100%" }, // Start below the view
  open: (i) => ({
    y: "0%", // Move to normal position
    transition: { duration: 0.5, delay: i * 0.1 }, // Delay each word's reveal
  }),
  closed: { y: "100%", transition: { duration: 0.5 } },
};
