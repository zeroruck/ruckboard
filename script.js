let selectedFont = document.getElementById("fontSelect").value;

function updateLogo() {
  const text = document.getElementById("logoText").value;
  const startColor = document.getElementById("colorStart").value;
  const endColor = document.getElementById("colorEnd").value;
  const font = document.getElementById("fontSelect").value;

  const logoTextDisplay = document.getElementById("logoTextDisplay");
  logoTextDisplay.textContent = text;
  logoTextDisplay.style.backgroundImage = `linear-gradient(to right, ${startColor}, ${endColor})`;
  logoTextDisplay.style.fontFamily = font;
}

// Initial setup

// Function to create a data URI for image download
function downloadLogo() {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  const logoContainer = document.getElementById("logoContainer");
  const logoTextDisplay = document.getElementById("logoTextDisplay");

  // Get the text width and height
  const textSize = context.measureText(logoTextDisplay.textContent);
  const textWidth = textSize.width;
  const textHeight = textSize.height;

  // Set the canvas dimensions to match the text size
  canvas.width = textWidth;
  canvas.height = textHeight;

  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Draw the text onto the canvas using the font gradient as the fill style
  // context.font = `${font} ${textSize.height}px`;
  context.font = `${selectedFont} ${textSize.height}px`;
  context.fillStyle = logoTextDisplay.style.backgroundImage;
  context.textAlign = "left";
  context.textBaseline = "top";
  context.fillText(logoTextDisplay.textContent, 0, 0);

  // Create a URL for the canvas and download it
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "you_will_work.png";
  a.click();

  // document.body.appendChild(canvas);
}

const downloadButton = document.getElementById("downloadButton");
downloadButton.addEventListener("click", downloadLogo);
