gsap.fromTo("#cinematic-line",
  { scaleX: 0, opacity: 0 },
  {
    scaleX: 1,
    opacity: 1,
    duration: 1.6,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#cinematic-line",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  }
);
