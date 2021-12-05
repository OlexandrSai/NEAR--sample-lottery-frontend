import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const ContractProvider = ({ children }) => {
  const defaultContractId = process.env.REACT_APP_CONTRACT_ID;
  const [data, setData] = useState(localStorage.getItem('CONTRACT_ID') ?? defaultContractId);

  const setContractId = (contractId) => {
    localStorage.setItem('CONTRACT_ID', contractId);
    setData(contractId);
  };

  return <DataContext.Provider value={{ contractId: data, setContractId }}>{children}</DataContext.Provider>;
};

export const useContract = () => useContext(DataContext);
