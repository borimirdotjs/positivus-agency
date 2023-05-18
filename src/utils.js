export const handleScroll = (ref) => {
  const yOffset = -130;
  const y =
    ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};
