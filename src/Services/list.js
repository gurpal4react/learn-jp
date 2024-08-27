import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL + "list/";

// Letters
const hiraganaUrl = baseUrl + "hiragana";
const katakanaUrl = baseUrl + "katakana";
const katakanaReadingUrl = baseUrl + "katakana-reading";

// Grammar
const adverbUrl = baseUrl + "adverbs";
const eAdjectiveUrl = baseUrl + "e-adjective";
const naAdjectiveUrl = baseUrl + "na-adjective";
const particleUrl = baseUrl + "particles";

// Vocabulary
const vocabularyUrl = baseUrl + "vocabulary";

// Kanji
const kanjiUrl = baseUrl + "kanji";

// Common
const timeUrl = baseUrl + "common/time";
const countingUrl = baseUrl + "common/counting";
const directionsUrl = baseUrl + "common/directions";

// Letters
const listService = {
  getHiragana: async () => {
    try {
      const data = await axios.get(hiraganaUrl);
      return data;
    } catch (error) {
      console.error({ error });
      return [];
    }
  },

  getKatakana: async () => {
    try {
      const data = await axios.get(katakanaUrl);
      return data;
    } catch (error) {
      console.error({ error });
      return [];
    }
  },

  getKatakanaReading: async () => {
    try {
      const data = await axios.get(katakanaReadingUrl);
      return data;
    } catch (error) {
      console.error({ error });
      return [];
    }
  },

  // Grammar
  getAdverbs: async (level) => {
    try {
      let url = adverbUrl;
      if (level) url += `?level=${level}`;
      const data = await axios.get(url);
      return data;
    } catch (error) {
      console.error({ error });
      return [];
    }
  },

  getEAdjective: async (level) => {
    try {
      let url = eAdjectiveUrl;
      if (level) url += `?level=${level}`;
      const data = await axios.get(url);
      return data;
    } catch (error) {
      console.error({ error });
      return [];
    }
  },

  getNaAdjective: async (level) => {
    try {
      let url = naAdjectiveUrl;
      if (level) url += `?level=${level}`;
      const data = await axios.get(url);
      return data;
    } catch (error) {
      console.error({ error });
      return [];
    }
  },

  getParticles: async (level) => {
    try {
      let url = particleUrl;
      if (level) url += `?level=${level}`;
      const data = await axios.get(url);
      return data;
    } catch (error) {
      console.error({ error });
      return [];
    }
  },

  // Vocabulary
  getVocabulary: async (level, lesson) => {
    try {
      let url = vocabularyUrl;
      if (level) {
        url += `?level=${level}`;
        if (lesson) url += `&lesson=${lesson}`;
      }
      const data = await axios.get(url);
      return data;
    } catch (error) {
      console.error({ error });
      return [];
    }
  },

  // Kanji
  getKanji: async (level) => {
    try {
      let url = kanjiUrl;
      if (level) url += `?level=${level}`;
      const data = await axios.get(url);
      return data;
    } catch (error) {
      console.error({ error });
      return [];
    }
  },

  // Common
  getTime: async (level) => {
    try {
      let url = timeUrl;
      if (level) url += `?level=${level}`;
      const data = await axios.get(url);
      return data;
    } catch (error) {
      console.error({ error });
      return [];
    }
  },

  getCounting: async (level) => {
    try {
      let url = countingUrl;
      if (level) url += `?level=${level}`;
      const data = await axios.get(url);
      return data;
    } catch (error) {
      console.error({ error });
      return [];
    }
  },

  getDirections: async (level) => {
    try {
      let url = directionsUrl;
      if (level) url += `?level=${level}`;
      const data = await axios.get(url);
      return data;
    } catch (error) {
      console.error({ error });
      return [];
    }
  },
};

export default listService;
