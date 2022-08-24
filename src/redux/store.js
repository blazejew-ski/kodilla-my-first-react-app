import { createStore } from 'redux';
import initialState from './initialState';
import shortid from "shortid";

// LISTS
export const getAllLists = (state) => {return state.lists;}
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const addList = payload => ({ type: 'ADD_LIST', payload });

// COLUMNS
export const getAllColumns = (state) => {return state.columns;}
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);

// CARDS
export const getFilteredCards = ({ cards, searchString }, columnId) => cards.filter(card => card.columnId === columnId && card.title.toLowerCase().includes(searchString.searchString.toString().toLowerCase()));
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const getFavoriteCards = ({ cards }, isFavorite) => cards.filter(card => card.isFavorite === isFavorite);
export const toggleIsFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });

//SEARCH
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }]};
    case 'ADD_LIST':
      return { ...state, lists: [...state.lists, { ...action.payload, id: shortid() }]};
    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.payload };
    case 'TOGGLE_CARD_FAVORITE':
        return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;