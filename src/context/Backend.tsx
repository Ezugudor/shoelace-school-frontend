import axios from "axios";
import React, { createContext, FC, ReactNode, useState } from "react";

export interface BackendProviderState {
  loading: boolean;
  errors: [];
}

export interface BackendProviderProps {
  children: ReactNode;
}

export interface BackendProps extends BackendProviderState {
  fetchSchools: () => Promise<void>;
  fetchSchool: (schoolId: string) => Promise<void>;
}

const BackendContext = createContext<BackendProps>({} as BackendProps);

const [backendState, setBackendState] = useState<BackendProviderState>({
  loading: false,
  errors: []
} as BackendProviderState);

const fetchSchools = (): Promise<void> => {
  return new Promise(() => {});
};

const fetchSchool = (schoolId: string): Promise<void> => {
  return new Promise(() => {});
};

const BackendProvider: FC<BackendProviderProps> = props => {
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
