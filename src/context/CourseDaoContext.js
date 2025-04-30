import CourseDAO from '../core/dao/CourseDAO';
import createDataContext from './createDataContext';

const courseDao = new CourseDAO();

const courseReducer = (state, action) => {
  switch (action.type) {
    case 'insert':
      return { ...state, error: null };
    case 'update':
      return { ...state, error: null };
    case 'delete':
      return { ...state, error: null };
    case 'select':
      return { ...state, course: action.payload, error: null };
    case 'selectAll':
      return { ...state, courses: action.payload, error: null };
    case 'error':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const insert = (dispatch) => async (course) => {
  const error = await courseDao.insert(course);
  if (error) {
    dispatch({ type: 'error', payload: error });
  } else {
    dispatch({ type: 'insert', payload: error });
  }
};

const select = (dispatch) => async (id) => {
  const course = await courseDao.select(id);
  dispatch({ type: 'select', payload: course });
};

const selectAll = (dispatch) => async () => {
  const courses = await courseDao.selectAll();
  dispatch({ type: 'selectAll', payload: courses });
};

const update = (dispatch) => async (course) => {
  const error = await courseDao.update(course);
  if (error) {
    dispatch({ type: 'error', payload: error });
  } else {
    dispatch({ type: 'update', payload: error });
  }
};

const deleted = (dispatch) => async (id) => {
  const error = await courseDao.delete(id);
  if (error) {
    dispatch({ type: 'error', payload: error });
  } else {
    dispatch({ type: 'delete', payload: error });
  }
};

export const { Provider, Context } = createDataContext(
  courseReducer,
  {
    insert,
    select,
    selectAll,
    update,
    deleted,
  },
  {
    error: null,
    user: null,
    users: [],
  },
);
