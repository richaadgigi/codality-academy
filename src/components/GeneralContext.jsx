/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
    const [ user, setUser ] = useState({});
    
    return (
        <GeneralContext.Provider value={{ user, setUser }}>
            {children}
        </GeneralContext.Provider>
    );
};

export default GeneralContext;
