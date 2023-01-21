import React from "react";
import { ReactNode, createContext, useState } from "react";

export const DaisyContext = createContext({} as {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
  }
)

const DaisyContextProvider = DaisyContext.Provider;

type DaisyProviderProps = {
  children: ReactNode
}

const DaisyProvider = ({children}:DaisyProviderProps) => {
  const [theme, setTheme] = useState("luxury");
  return (
    <DaisyContextProvider value={{ theme, setTheme }}>
      {children}
    </DaisyContextProvider>
  );
};

export default DaisyProvider;
