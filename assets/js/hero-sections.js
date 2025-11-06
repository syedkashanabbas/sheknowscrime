// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Load GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Select all video sections
    const videoSections = gsap.utils.toArray('.video-section');
    
    // Set initial positions for overlap effect
    gsap.set(videoSections, {
        y: 100,
        opacity: 0,
        scale: 0.9
    });
    
    // Create the scroll trigger animation
    let scrollTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.video-scroll-container',
            start: 'top top',
            end: '+=3000',
            scrub: 1,
            pin: true,
            anticipatePin: 1
        }
    });
    
    // Animate each video section
    videoSections.forEach((section, index) => {
        // Entry animation
        scrollTl.to(section, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out"
        }, index * 0.5);
        
        // Exit animation (overlap)
        if (index < videoSections.length - 1) {
            scrollTl.to(section, {
                y: -100,
                opacity: 0,
                scale: 0.8,
                duration: 1,
                ease: "power2.in"
            }, (index * 0.5) + 0.8);
        }
    });
    
    // Add hover effects
    videoSections.forEach(section => {
        const image = section.querySelector('.video-image');
        
        section.addEventListener('mouseenter', () => {
            gsap.to(image, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        section.addEventListener('mouseleave', () => {
            gsap.to(image, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
});