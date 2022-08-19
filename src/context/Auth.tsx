import axios from "axios";
import jwtDecode from "jwt-decode";
import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState
} from "react";
import { UserRole } from "../models/UserRole";

export interface AuthProviderState {
  currentToken: string;
  email: string;
  role: UserRole;
  authenticated: boolean;
  expired: boolean;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface Authentication extends AuthProviderState {
  performLogin: (email: string, password: string) => Promise<void>;
  performLogout: () => void;
}

const AuthContext = createContext<Authentication>({} as Authentication);
const AUTH_STORAGE_KEY = "shoelace_auth";

const getDefaultState = (): AuthProviderState => {
  const currentToken = localStorage.getItem(AUTH_STORAGE_KEY) || "";
  const tokenExist = currentToken.trim().length > 0;
  if (tokenExist) {
    return tokenToState(currentToken);
  }
  return {
    currentToken,
    authenticated: false,
    role: UserRole.NONE,
    email: "",
    expired: false
  };
};

const tokenToState = (token: string): AuthProviderState => {
  const decodedToken: any = jwtDecode(token);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return {
    currentToken: token,
    authenticated: token.length > 0,
    role: decodedToken.role,
    email: decodedToken.email,
    expired: false
  };
};

const performLogin = (email: string, password: string): Promise<void> => {
  return new Promise(() => {});
};

const performLogout = () => {};

const AuthProvider: FC<AuthProviderProps> = props => {
  const [currentUser, setCurrentUser] = useState<AuthProviderState>(
    getDefaultState() as AuthProviderState
  );

  useEffect(() => {
    //TODO: verify that the default token we initially got from Localstorage is still valid
    if (currentUser.currentToken.trim().length > 0) {
      //TODO: hit the network here and verify token
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ ...currentUser, performLogin, performLogout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

const AuthConsumer = AuthContext.Consumer;

export { AuthConsumer, AuthContext, AuthProvider };
