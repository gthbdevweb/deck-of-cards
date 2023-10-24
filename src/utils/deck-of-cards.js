import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

const getDeck = async () => {
  try {
    const res = await axios.get(`${API}deck/new/shuffle/?deck_count=1`);
    return res.data;
  } catch(err) {
    console.error(err);
  }
};

const getCards = async (deckId) => {
  try {
    const res = await axios.get(`${API}deck/${deckId}/draw/?count=1`);
    return res.data;
  } catch(err) {
    console.error(err);
  }
};

export {
  getDeck,
  getCards,
};
