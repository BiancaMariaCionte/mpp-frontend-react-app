import { createContext } from 'react';

import { UsersContextType, UsersContextProviderType } from '../types/UsersContextTypes.types';

export const UsersContext = createContext<UsersContextType | null>(null);

function UsersContextProvider({ userContext, children }: UsersContextProviderType) {
    return <UsersContext.Provider value={userContext}>{children}</UsersContext.Provider>;
}

export { UsersContextProvider };

// context is about passing props to the childern without having to
// manually specify them
