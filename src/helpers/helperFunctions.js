const scrollToSection = (pageSection) => {
  const section = document.querySelector(`#${pageSection}`);
  section.scrollIntoView({ behavior: "smooth", block: "start" });
};

export { scrollToSection };
