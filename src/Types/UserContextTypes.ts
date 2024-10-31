export interface UserState {
    userId: string | null;   
    userToken: string | null; 
 }
 
 export type UserReducerActionsType = 
    | { type: "SET_USER_ID"; payload: string }
    | { type: "SET_USER_TOKEN"; payload: string };
    
 
 export interface UserContextType {
    state: UserState;
    dispatch: React.Dispatch<UserReducerActionsType>;
 }