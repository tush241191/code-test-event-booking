import React, {ReactNode} from 'react'
import {User} from 'src/utils/types'

interface UserContextInterface {
  isAuthenticated: boolean;
  user: User | null;
}

const userContextDefaultValue: UserContextInterface = {
  isAuthenticated: false,
  user: null
}

const UserContext = React.createContext<UserContextInterface>(
  userContextDefaultValue
)

const useUser = () => {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error('useClient must be used within a UserProvider')
  }
  return context
}

type Props = {
  children: ReactNode;
};

const UserProvider = ({children}: Props) => {
  const isAuthenticated = true
  const user: User = {
    id: '1',
    firstName: 'Tushar',
    lastName: 'Kharat'
  }

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        user
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export {UserProvider, useUser}
