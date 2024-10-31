import { createContext } from "react";
import { UserContextType } from "../Types/UserContextTypes";

export const UserContext = createContext<UserContextType | undefined>(undefined);