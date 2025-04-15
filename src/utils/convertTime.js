export const convertTime = (time) => {
    const amPm = time > 12 ? 'PM' : 'AM';
    time = time % 12 || 12;
    return `${time} ${amPm}`;
};
