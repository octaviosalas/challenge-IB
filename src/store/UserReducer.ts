import { UserReducerActionsType } from "../Types/UserContextTypes";
import { UserState } from "../Types/UserContextTypes";

const initialState: UserState = {
    userId: null,
    userToken: null,
};

export const UserReducer = (state: UserState = initialState, action: UserReducerActionsType): UserState => {
    switch (action.type) {
        case "SET_USER_ID":
            console.log("Llego SET_USER_ID", action.payload)
            return {
                ...state,
                userId: action.payload, 
            };
        case "SET_USER_TOKEN":
            console.log("Llego SET_USER_TOKEN", action.payload)
            return {
                ...state,
                userToken: action.payload, 
            };
        default:
            return state; 
    }
};