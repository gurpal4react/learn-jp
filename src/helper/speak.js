export const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP"; // Set the language to Japanese

  // Fetch available voices and filter for Japanese voices
  let voices = window.speechSynthesis.getVoices();
  const japaneseVoices = voices.filter((voice) => voice.lang === "ja-JP");

  // Set a Japanese voice if available
  if (japaneseVoices.length > 0) {
    utterance.voice = japaneseVoices[0]; // Using the first Japanese voice available
  }

  // Optional: Adjust pitch and rate for more natural sounding speech
  utterance.pitch = 1.2; // Slightly higher pitch
  utterance.rate = 0.9; // Slightly slower rate to mimic natural speaking pace

  window.speechSynthesis.speak(utterance);
};
