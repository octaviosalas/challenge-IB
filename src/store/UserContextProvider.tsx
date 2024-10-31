import {useReducer } from "react";
import { UserContext } from "./UserContext";
import { UserReducer } from "./UserReducer"; 
import { UserState } from "../Types/UserContextTypes";

interface Props { 
    children: JSX.Element | JSX.Element[];
}

const initialState: UserState = { 
    userId: null,
    userToken: null
};

const UserContextProvider = ({ children }: Props) => {
    
    const [state, dispatch] = useReducer(UserReducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;