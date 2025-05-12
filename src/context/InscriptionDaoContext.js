import InscriptionDAO from "../core/dao/InscriptionDAO";
import createDataContext from "./createDataContext";

const inscriptionDao = new InscriptionDAO();

const inscriptionReducer = (state, action) => {
  switch (action.type) {
    case "insert":
      return { ...state, error: null };
    case "update":
      return { ...state, error: null };
    case "delete":
      return { ...state, error: null };
    case "select":
      return { ...state, inscription: action.payload, error: null };
    case "selectAll":
      return { ...state, inscriptions: action.payload, error: null };
    case "error":
      return { ...state, error: action.payload };
    case "isSuscribed":
      return { ...state, suscribed: action.payload, error: null };
    case "totalInscriptions":
      return { ...state, totalInscriptions: action.payload };
    default:
      return state;
  }
};

const insert = (dispatch) => async (inscription) => {
  const error = await inscriptionDao.insert(inscription);
  if (error) {
    dispatch({ type: "error", payload: error });
  } else {
    dispatch({ type: "insert", payload: error });
  }
};

const select = (dispatch) => async (id) => {
  const inscription = await inscriptionDao.select(id);
  dispatch({ type: "select", payload: inscription });
};

const selectAll = (dispatch) => async (userId) => {
  const inscriptions = await inscriptionDao.selectAllWithID(userId);
  dispatch({ type: "selectAll", payload: inscriptions });
};

const update = (dispatch) => async (inscription) => {
  const error = await inscriptionDao.update(inscription);
  if (error) {
    dispatch({ type: "error", payload: error });
  } else {
    dispatch({ type: "update", payload: error });
  }
};

const remove = (dispatch) => async (courseId, userId) => {
  const error = await inscriptionDao.remove([courseId, userId]);
  if (error) {
    dispatch({ type: "error", payload: error });
  } else {
    dispatch({ type: "delete", payload: error });
  }
};

const isSuscribed = (dispatch) => async (courseId, userId) => {
  const suscribed = await inscriptionDao.isSuscribed(courseId, userId);
  dispatch({ type: "isSuscribed", payload: suscribed });
};

const totalInscriptions = (dispatch) => async () => {
  const total = await inscriptionDao.totalInscriptions();
  dispatch({ type: "totalInscriptions", payload: total });
};

export const { Provider, Context } = createDataContext(
  inscriptionReducer,
  {
    insert,
    select,
    selectAll,
    update,
    remove,
    isSuscribed,
    totalInscriptions,
  },
  {
    error: null,
    user: null,
    users: [],
    suscribed: null,
  },
);
