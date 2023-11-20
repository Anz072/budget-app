import { createContext, useContext, useState } from "react";

const NumberContext = createContext();

export const MyProvider = ({ children }) => {
  const [trackableValue, setTrackableValue] = useState("0");
  const [recordType, setrecordType] = useState("EXPENSE");

  const updateNumber = (newValue) => {
    trackableValue === "0"
      ? setTrackableValue(newValue)
      : setTrackableValue((prevValue) => `${prevValue}${newValue}`);
  };

  const removeLastNumber = () => {
    setTrackableValue((prevValue) => {
      if (prevValue.length === 1) {
        return `0`;
      }
      return `${prevValue.slice(0, -1)}`;
    });
  };

  const resetNumber = () => {
    setTrackableValue("0");
  };

  const setrecordTypeHandler = (selectedType) => {
    setrecordType(selectedType);
  };

  return (
    <NumberContext.Provider
      value={{
        trackableValue,
        updateNumber,
        removeLastNumber,
        resetNumber,
        setrecordTypeHandler,
        recordType,
      }}
    >
      {children}
    </NumberContext.Provider>
  );
};

export const useNumberContext = () => {
  return useContext(NumberContext);
};
