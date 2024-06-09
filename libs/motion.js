export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  }
}

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  }
}

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  }
}

export const slideIn = (direction, type, delay, duration) => {
  return {
    initial: {
      x: direction === "left" ? -150 : direction === "right" ? 150 : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    whileInView: {
      x: 0,
      y: 0,
      },
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
  }
}

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  }
}
export const variantsSlideIn= {
  left: { x: -150 },
  right: { x: 150 },
  onscreen: {
    x: 0},
    transition: {
      type: "tween",
      delay: 0.5,
      duration: 1,
      ease: "easeOut",
    },
};
