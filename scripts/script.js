// Particles.js Initialization
particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#00ffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 1,
          color: "#00ffff",
        },
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00ffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("background-music");
    const button = document.getElementById("start-music-button");
  
    if (!music) {
      console.error("Error: Music element is missing in the DOM.");
      return;
    }
  
    if (!button) {
      console.error("Error: Button element is missing in the DOM.");
      return;
    }
  
    // Add click event listener to play music and redirect
    button.addEventListener("click", () => {
      music.play()
        .then(() => {
          console.log("Music started successfully");
          window.location.href = "main.html";
        })
        .catch((error) => {
          console.error("Error playing music:", error);
          window.location.href = "main.html"; // Redirect even if music fails
        });
    });
  });
  