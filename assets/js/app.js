// (A.+) - try

//
let lines = [
      "Hello world from the novice learner!",
      "This is line one.",
      "This is another line.",
      "This is the final line."
    ];

    let typewriter = document.getElementById("typewriter");

    let lineIndex = 0;
    let charIndex = 0;
    let typingSpeed = 100;      // ms per character
    let pauseBetweenLines = 1500; // ms pause after line

    function typeLine() {
      if (charIndex < lines[lineIndex].length) {
        typewriter.textContent += lines[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeLine, typingSpeed);
      } else {
        setTimeout(() => {
          typewriter.textContent = "";
          charIndex = 0;
          lineIndex = (lineIndex + 1) % lines.length;  // Loop back to 0
          setTimeout(typeLine, typingSpeed);
        }, pauseBetweenLines);
      }
    }

    // Start the infinite type loop
    typeLine();