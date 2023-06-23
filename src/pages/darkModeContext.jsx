import { createContext, useReducer } from 'react';

export const ThemeGlobalContext = createContext({
  darkMode: true,
});

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'LIGHT': {
          return { darkMode: false };
        }
        case 'DARK': {
          return { darkMode: true };
        }

        case 'TOGGLE': {
          return { darkMode: !state.darkMode };
        }
        default:
          return state;
      }
    },
    { darkMode: true }
  );

  return (
    <ThemeGlobalContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </ThemeGlobalContext.Provider>
  );
};
