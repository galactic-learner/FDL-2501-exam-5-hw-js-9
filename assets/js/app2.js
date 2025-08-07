// (A.+) - try

//
let lines = [
      "Hello world from the novice learner!",
      "This is line one.",
      "This is another line.",
      "This is the final line."
    ];

    let typewriter = document.getElementById("typewriter");

    let lineIndex = 0;           // Current line
    let charIndex = 0;           // Current character
    let typingSpeed = 100;     // Speed for typing
    let deletingSpeed = 50;    // Speed for deleting
    
    let isDeleting = false;      // Flag for deleting phase
    let pauseAfterTyping = 1000;   // Pause after full line
    let pauseAfterDeleting = 300;  // Pause before typing next line

    function typeEffect() {
      let currentLine = lines[lineIndex];

      if (isDeleting) {
        // Remove characters one at a time
        typewriter.textContent = currentLine.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false; // Switch to typing next line
          lineIndex = (lineIndex + 1) % lines.length;
          setTimeout(typeEffect, pauseAfterDeleting);
        } else {
          setTimeout(typeEffect, deletingSpeed);
        }

      } else {
        // Add characters one at a time
        typewriter.textContent = currentLine.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentLine.length) {
          isDeleting = true; // Start deleting after pause
          setTimeout(typeEffect, pauseAfterTyping);
        } else {
          setTimeout(typeEffect, typingSpeed);
        }
      }
    }

    // Start typing on page load
    typeEffect();

