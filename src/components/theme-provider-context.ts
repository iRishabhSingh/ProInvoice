import { createContext } from "react";

import { initialState, ThemeProviderState } from "@/types/themeProvider";

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);
