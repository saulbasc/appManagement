import React, { useReducer } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export default (reducer, actions, defaultValue) => {
  const Context = React.createContext();

  function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {};
    Object.keys(actions).forEach((key) => {
      boundActions[key] = actions[key](dispatch);
    });

    return (
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  }
  Provider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return { Context, Provider };
};
