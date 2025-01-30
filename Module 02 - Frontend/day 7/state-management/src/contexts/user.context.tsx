<<<<<<< HEAD
=======
/** @format */

>>>>>>> 79f708c950eb1bb5ae327d64377807df43d70eb2
import { createContext, Dispatch, SetStateAction } from "react";

export interface IUserContext {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
}

export const UserContext = createContext<IUserContext | null>(null);
