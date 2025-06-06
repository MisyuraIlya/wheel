"use client";
import {
    FC,
    createContext,
    useContext,
    ReactNode,
  } from 'react'
 
  interface ModalContextType {
  }
  const ModalContext = createContext<ModalContextType | null>(null)
  
  const useAuthProvider = () => {
    const context = useContext(ModalContext)
    if (!context) {
      throw new Error('Can not run without "Auth Context Provider"')
    }
    return context
  }
  
  interface AuthProviderProps {
    children: ReactNode
  }
  const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const value = {
    }
  
    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  }
  
  export { useAuthProvider, AuthProvider }
  