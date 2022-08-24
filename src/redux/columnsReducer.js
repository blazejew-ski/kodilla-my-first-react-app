import shortid from "shortid";

const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

export const getAllColumns = (state) => {return state.columns;}
export const addColumn = payload => ({ type: ADD_COLUMN, payload });
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);


const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
}

export default columnsReducer;