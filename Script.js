const affirmations = {
  1: "I'm deserving of love and respect.",
  2: "I'm growing and evolving every day.",
  3: "I'm in control of my happiness.",
  4: "I'm capable of achieving my goals.",
  5: "I'm worthy of all the good things that happen in my life.",
  6: "I'm resilient and can get through tough times.",
  7: "I'm free to create the life I desire.",
  8: "I'm loved and supported by those around me.",
  9: "I'm strong and independent.",
  10: "I'm constantly improving and bettering myself.",
  11: "I'm surrounded by abundance.",
  12: "I'm full of potential and endless possibilities.",
  13: "I'm in charge of my life and no one else's.",
  14: "I'm worthy of my dreams and aspirations.",
  15: "I'm a positive thinker and only attract positivity.",
  16: "I'm open to new adventures in my life.",
  17: "I'm deserving of financial stability.",
  18: "I'm not defined by my mistakes.",
  19: "I'm filled with endless creativity.",
  20: "I'm a kind and loving person.",
  21: "I'm proud of all I have achieved.",
  22: "I'm not my past or my imperfections.",
  23: "I'm deserving of everything good that comes my way.",
  24: "I'm constantly learning and growing.",
  25: "I'm enough just as I am.",
  26: "I'm a magnet for success and prosperity.",
  27: "I'm focused and persistent.",
  28: "I'm deserving of love, just as everyone else.",
  29: "I'm not alone in my struggles.",
  30: "I'm braver than I believe.",
  31: "I'm a beacon of love and compassion.",
  32: "I'm deserving of the time and space to heal.",
  33: "I'm able to achieve greatness.",
  34: "I'm always headed in the right direction.",
  35: "I'm worthy of love, compassion, and empathy.",
  36: "I'm not defined by the opinions of others.",
  37: "I'm deserving of all the beauty life offers.",
  38: "I'm able to overcome any challenges that come my way.",
  39: "I'm always doing my best and that's enough.",
  40: "I'm deserving of respect and kindness.",
  41: "I'm in charge of my destiny.",
  42: "I'm powerful and capable of great things.",
  43: "I'm surrounded by people who believe in me.",
  44: "I'm a unique and special individual.",
  45: "I'm deserving of all the happiness in the world.",
  46: "I'm stronger than any obstacle in front of me.",
  47: "I'm constantly growing and developing.",
  48: "I'm worthy of respect and admiration.",
  49: "I'm deserving of my place in the world.",
  50: "I'm living my best life every single day.",
  51: "I'm worthy of success and prosperity.",
  52: "I'm open to love and kindness.",
  53: "I'm a beacon of light and hope.",
  54: "I'm loved by those around me.",
  55: "I'm creating the life I deserve.",
  56: "I'm deserving of peace and tranquility.",
  57: "I'm a powerful creator.",
  58: "I'm loved and supported by the universe.",
  59: "I'm deserving of happiness and joy.",
  60: "I'm in charge of how I feel.",
  61: "I'm proud of who I am.",
  62: "I'm loved and cherished.",
  63: "I'm a magnet for love and positivity.",
  64: "I'm stronger than I think.",
  65: "I'm living my best life right now."
};

const affirmationDiv = document.getElementsByTagName("div")[0];
const affirmationButton = document.getElementsByTagName("button")[0];

function displayRandomAffirmation() {
  const randomIndex =
    Math.floor(Math.random() * Object.keys(affirmations).length) + 1;
  affirmationDiv.innerText = affirmations[randomIndex];
}

affirmationButton.addEventListener("click", displayRandomAffirmation);

