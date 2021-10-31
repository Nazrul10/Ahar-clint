import React, { createContext } from 'react';
import UseFirebase from '../../Hooks/UseFirebase';
export const useContexts = createContext()
const AuthContext = ({children}) => {
    const AllContext = UseFirebase()
    return (
        <useContexts.Provider value={AllContext}>
            {children}
        </useContexts.Provider>
    );
};

export default AuthContext;