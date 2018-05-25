import { AsyncStorage } from 'react-native';
import dayjs from 'dayjs';
import { modifiers } from '../utils';

const STORAGE = 'deck-storage';

const getNameStorage = async () => {
  return [
    'Amanda Alves Farias',
    'Ana Carolina de Melo Resende',
    'Ana Letícia Café Nunes',
    'Anderson Solha Fernandes',
    'Ariana Aguilar Barbosa',
    'Daniel Pires Gonçalves',
    'Fernanda Dantes Beirão',
    'Fernanda Fontes Botelho',
    'Flávia Caldeira dos Santos Costa',
    'Gabriela Ketren Luiza de Souza',
    'Glauber Rodrigues de Almeida',
    'Grazielle Oliveira Caetano',
    'Gustavo Teixeira Guimarães',
    'Izabel Nascimento Barbosa',
    'Izabela Thais de Oliveira Lopes',
    'Joana Pacheco Starling Brandão',
    'Joanne de Oliveira Fonseca',
    'João Otavio Bandeira Nunes',
    'Kennedy dos Santos Chaves',
    'Larissa Soares Rios',
    'Leonardo da Cruz Espindola',
    'Lucas Rodrigues Rosa',
    'Luisa Rafaella dos Santos',
    'Luiz Henrique da Silva Cota',
    'Marcos Lenine de Oliveira Gome',
    'Mariana de Freitas Fiorini',
    'Mariana Eyer Cabral de Andrade',
    'Matheus Beirão de Oliveira',
    'Matheus Ferreira Marques',
    'Matheus Silva Soares',
    'Michael Menezes Sodré',
    'Pâmella Fernandes',
    'Pedro Henrique Aredes da Silva',
    'Pedro Luiz Prates Santi',
    'Rafael Augusto Cornachione',
    'Rafaella de Lira Minêu Rocha',
    'Rebeca Alice Penido',
    'Sara Dalila Gonçalves Ferreira',
    'Tacyanne Louise Santos Almeida',
    'Tainá Ferreira da Silva Fonseca',
    'Tamiris Monteiro Silva',
    'Thiago Ferreira Barbosa',
  ]
};

const getStorage = async () => {
  const storage = await AsyncStorage.getItem(STORAGE);
  if (storage) {
    return JSON.parse(storage);
  }

  return {};
};

const createDeck = async (title) => {
  const storage = await getStorage();
  storage[title] = {};
  storage[title].title = title;
  storage[title].createdAt = dayjs().toISOString();
  storage[title].questions = [];
  await AsyncStorage.setItem(STORAGE, JSON.stringify(storage));
  return modifiers.json_to_array(storage);
};

const deleteDeck = async (title) => {
  const storage = await getStorage();
  delete storage[title];
  await AsyncStorage.setItem(STORAGE, JSON.stringify(storage));
  return modifiers.json_to_array(storage);
};

const deleteAll = async () => {
  const emptyStorage = {};
  await AsyncStorage.setItem(STORAGE, JSON.stringify(emptyStorage));
  return [];
};

const addCardToDeck = async (target, card) => {
  const storage = await getStorage();
  storage[target].questions.push(card);
  await AsyncStorage.setItem(STORAGE, JSON.stringify(storage));
  return modifiers.json_to_array(storage);
};

const addHistoryToDeck = async (target, history) => {
  const storage = await getStorage();
  const key = dayjs().diff(createdAt, 'days');

  if (!storage[target].history[key]) {
    storage[target].history[key] = [];
  }

  storage[target].history[key].push(history);
  await AsyncStorage.setItem(STORAGE, JSON.stringify(storage));
  return modifiers.json_to_array(storage);
};

const getDeck = async (title, key = null) => {
  const storage = await getStorage();
  if (key) {
    return storage[title][key];
  }

  return storage[title];
};

const getDecks = async (title, key = null) => {
  const storage = await getStorage();
  return modifiers.json_to_array(storage);
};

const getNames = async (title, key = null) => {
  const storage = await getNameStorage();
  return storage;
  //return modifiers.json_to_array(storage);
};

export default {
  getDecks,
  getNames,
  getDeck,
  addHistoryToDeck,
  addCardToDeck,
  deleteAll,
  deleteDeck,
  createDeck,
}

/* Interface Storage Object
{
  title: 'JavaScript',
  createdAt: '2018-05-15T01:19:44.013Z',
  questions: [
    {
      question: 'What const is for?',
      answer: 'To define a constant',
    },
    {
      question: 'JavaScript has classes?',
      answer: 'No',
    },
  ],
  history: {
    "0": [
      { points: 2, results: [true, true] },
      { points: 2, results: [true, true] },
    ],
    "1": [
      { points: 1, results: [true, false] },
      { points: 0, results: [false, false] },
    ],
  },
}
*/
