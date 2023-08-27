import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface AppContextProps {
  bill: string;
  setBill: Dispatch<SetStateAction<string>>;
  custom: string;
  setCustom: Dispatch<SetStateAction<string>>;
  button: number;
  setButton: Dispatch<SetStateAction<number>>;
  noOfPeoples: string;
  setNoOfPeople: Dispatch<SetStateAction<string>>;
  total: number;
  setTotal: Dispatch<SetStateAction<number>>;
  percentage: string;
  setPercentage: Dispatch<SetStateAction<string>>;
}

interface FormProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [bill, setBill] = useState<string>('');
  const [custom, setCustom] = useState<string>('');
  const [button, setButton] = useState<number>(0);
  const [noOfPeoples, setNoOfPeople] = useState<string>('');
  const [total, setTotal] = useState<number>(0.00);
  const [percentage, setPercentage] = useState<string>('0.00');
  return (
    <AppContext.Provider
      value={{
        bill,
        setBill,
        custom,
        setCustom,
        button,
        setButton,
        noOfPeoples,
        setNoOfPeople,
        total,
        setTotal,
        percentage,
        setPercentage

      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return context;
};
export default useGlobalContext;
