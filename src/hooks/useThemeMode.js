import { createContext, useState } from "react";

const ThemeModeContext = createContext();

const ThemeModeContextProvider = props => {
  const [state, setState] = useState({
    mode: "light",
    isDark: false,
  });

  const toggleMode = () => {
    const mode = state.mode === "light" ? "dark" : "light";
    const isDark = mode === "dark";
    setState({ ...state, mode, isDark });
  };

  return <ThemeModeContext.Provider value={{ ...state, toggleMode }}>{props.children}</ThemeModeContext.Provider>;
};

export { ThemeModeContext, ThemeModeContextProvider };
