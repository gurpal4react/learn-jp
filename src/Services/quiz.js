import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL + "quiz/";

// Letters
const lettersUrl = baseUrl + "letters";

// Grammar
const particleUrl = baseUrl + "particles";

// Vocabulary
const vocabularyUrl = baseUrl + "vocabulary";

// Kanji
const kanjiUrl = baseUrl + "kanji";

// Letters
const quizService = {
  getLetters: async (limit) => {
    try {
      let url = lettersUrl;
      if (limit) url += `?limit=${limit}`;
      const data = await axios.get(url);
      return data;
    } catch (error) {
      console.error({ error });
      return [];
    }
  },

  // Grammar
  getParticles: async (level, limit) => {
    try {
      let url = particleUrl;
      if (level) {
        url += `?level=${level}`;
        if (limit) url += `&limit=${limit}`;
      }
      const data = await axios.get(url);
      return data;
    } catch (error) {
      console.error({ error });
      return [];
    }
  },

  // Vocabulary
  getVocabularyMeaningToWord: async (level, lesson) => {
    try {
      let url = vocabularyUrl;
      if (level) {
        url += `?level=${level}&type=mtw`;
        if (lesson) url += `&lesson=${lesson}`;
      }
      const data = await axios.get(url);
      return data;
    } catch (error) {
      console.error({ error });
      return [];
    }
  },
  getVocabularyWordToMeaning: async (level, lesson) => {
    try {
      let url = vocabularyUrl;
      if (level) {
        url += `?level=${level}&type=wtm`;
        if (lesson) url += `&lesson=${lesson}`;
      }
      const data = await axios.get(url);
      return data;
    } catch (error) {
      console.error({ error });
      return [];
    }
  },

  getKanji: async (level, limit) => {
    try {
      let url = kanjiUrl;
      if (level) {
        url += `?level=${level}`;
        if (limit) url += `&limit=${limit}`;
      }
      const data = await axios.get(url);
      return data;
    } catch (error) {
      console.error({ error });
      return [];
    }
  },
};

export default quizService;
