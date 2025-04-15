export const handleScroll = (e) => {
    const element = e.target;
    const scrollClasses = ['early', 'amber', 'noon', 'amber', 'early'];
    const scrollY = element.scrollTop / 120;
    element.classList.remove(...scrollClasses);
    if (scrollY === 0) return;

    const style = scrollClasses[Math.ceil(scrollY) - 1];
    style && element.classList.add(style);
};
