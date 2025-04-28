import { createContext, useState} from 'react'

//creamos el contexto
export const UserContext = createContext()

//Creamos el proveedor
export function UserProvider({ children }) {
  const [nombreUsuario, setNombreUsuario] = useState('')

  return(
    <UserContext.Provider value={{ nombreUsuario, setNombreUsuario }}>
      {children}
    </UserContext.Provider>
  )
}
