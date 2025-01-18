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
  
    // Add click event listener to play music only
    button.addEventListener("click", () => {
      music.play()
        .then(() => {
          console.log("Music started successfully");
        })
        .catch((error) => {
          console.error("Error playing music:", error);
        });
    });
  });

  