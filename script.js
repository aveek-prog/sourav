// Director portrait animation
gsap.from(".director-portrait", { 
  rotation: 360, 
  duration: 2, 
  scrollTrigger: {
    trigger: ".hero",
    start: "top top"
  }
});

// Timeline audio buttons
document.querySelectorAll('.reveal-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const audioFile = e.target.closest('.timeline-item').querySelector('.timeline-knot').getAttribute('data-audio');
    new Audio(audioFile).play();
  });
});

// Initialize ScrollMagic
const controller = new ScrollMagic.Controller();

// Animate timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
  new ScrollMagic.Scene({
    triggerElement: item,
    triggerHook: 0.8
  })
  .setTween(gsap.from(item, { opacity: 0, y: 50, duration: 0.5 }))
  .addTo(controller);
});
