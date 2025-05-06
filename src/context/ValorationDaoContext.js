import ValorationDAO from '../core/dao/ValorationDAO';
import createDataContext from './createDataContext';

const valorationDao = new ValorationDAO();

const valorationReducer = (state, action) => {
  switch (action.type) {
    case 'clear':
      return { ...state, valoration: null, valorations: [] };
    case 'insert':
      return { ...state, error: null };
    case 'update':
      return { ...state, error: null };
    case 'delete':
      return { ...state, error: null };
    case 'select':
      return { ...state, valoration: action.payload, error: null };
    case 'selectAll':
      return { ...state, valorations: action.payload, error: null };
    case 'error':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const clearValoration = (dispatch) => () => {
  dispatch({ type: 'clear' });
};

const insert = (dispatch) => async (valoration) => {
  const error = await valorationDao.insert(valoration);
  if (error) {
    dispatch({ type: 'error', payload: error });
  } else {
    dispatch({ type: 'insert', payload: error });
  }
};

const select = (dispatch) => async (userId, courseId) => {
  const valoration = await valorationDao.select([courseId, userId]);
  dispatch({ type: 'select', payload: valoration });
};

const selectAll = (dispatch) => async () => {
  const valorations = await valorationDao.selectAll();
  dispatch({ type: 'selectAll', payload: valorations });
};

const update = (dispatch) => async (valoration) => {
  const error = await valorationDao.update(valoration);
  if (error) {
    dispatch({ type: 'error', payload: error });
  } else {
    dispatch({ type: 'update', payload: error });
  }
};

const deleted = (dispatch) => async (id) => {
  const error = await valorationDao.delete(id);
  if (error) {
    dispatch({ type: 'error', payload: error });
  } else {
    dispatch({ type: 'delete', payload: error });
  }
};

export const { Provider, Context } = createDataContext(
  valorationReducer,
  {
    clearValoration,
    insert,
    select,
    selectAll,
    update,
    deleted,
  },
  {
    error: null,
    valoration: null,
    valorations: [],
  },
);
