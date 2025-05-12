import UserDAO from "../core/dao/UserDAO";
import createDataContext from "./createDataContext";

const userDao = new UserDAO();

const userReducer = (state, action) => {
  switch (action.type) {
    case "insert":
      return { ...state, error: null };
    case "update":
      return { ...state, error: null };
    case "delete":
      return { ...state, error: null };
    case "select":
      return { ...state, user: action.payload, error: null };
    case "selectAll":
      return { ...state, users: action.payload, error: null };
    case "error":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const insert = (dispatch) => async (user) => {
  const error = await userDao.insert(user);
  if (error) {
    dispatch({ type: "error", payload: error });
  } else {
    dispatch({ type: "insert", payload: error });
  }
};

const select = (dispatch) => async (id) => {
  const user = await userDao.select(id);
  dispatch({ type: "select", payload: user });
};

const selectAll = (dispatch) => async () => {
  const users = await userDao.selectAll();
  dispatch({ type: "selectAll", payload: users });
};

const update = (dispatch) => async (user) => {
  const error = await userDao.update(user);
  if (error) {
    dispatch({ type: "error", payload: error });
  } else {
    dispatch({ type: "update", payload: error });
  }
};

const deleted = (dispatch) => async (id) => {
  const error = await userDao.delete(id);
  if (error) {
    dispatch({ type: "error", payload: error });
  } else {
    dispatch({ type: "delete", payload: error });
  }
};

export const { Provider, Context } = createDataContext(
  userReducer,
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
