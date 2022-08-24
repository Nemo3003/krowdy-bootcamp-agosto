import React, { useReducer, createContext } from 'react';
import PropTypes from 'prop-types';


export const AppContext = createContext(null);

export const AppProvider = ({children}:any) => {
    const [state, dispatch] = useReducer()
    

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node,
};

