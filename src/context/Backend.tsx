import axios from "axios";
import React, { createContext, FC, ReactNode, useState } from "react";
import { School } from "../models/Schools";

export interface BackendProviderState {
  loading: boolean;
  errors: [];
}

export interface BackendProviderProps {
  children: ReactNode;
}

export interface BackendProps extends BackendProviderState {
  fetchSchools: () => Promise<School[]>;
  fetchSchool: (schoolId: string) => Promise<void>;
}

const BackendContext = createContext<BackendProps>({} as BackendProps);

const fetchSchools = (): Promise<School[]> => {
  return new Promise((resolve, reject) => {
    resolve([
      { id: "abcd", name: "Oxford University", location: "United State" },
      { id: "efgh", name: "Cambride University", location: "United State" },
      { id: "ijkl", name: "University of Nigeria Nsukka", location: "Nigeria" }
    ]);
  });
};

const fetchSchool = (schoolId: string): Promise<void> => {
  return new Promise(() => {});
};

const BackendProvider: FC<BackendProviderProps> = props => {
  const [backendState, setBackendState] = useState<BackendProviderState>({
    loading: false,
    errors: []
  } as BackendProviderState);

  return (
    <BackendContext.Provider
      value={{ ...backendState, fetchSchools, fetchSchool }}
    >
      {props.children}
    </BackendContext.Provider>
  );
};

const BackendConsumer = BackendContext.Consumer;

export { BackendConsumer, BackendContext, BackendProvider };
