import { createContext, useContext } from "react";
import type { AuthContextType } from "../types";

const AuthContext = createContext<AuthContextType | null>(null);

