import { createContext, useContext, useState } from 'react'
import { Client } from '../../api/types'

export type ActiveClientType = {
  activeClient: Client
  setActiveClient: (activeClient: Client) => void
}

const initialActiveClient: ActiveClientType = {
  activeClient: {} as Client,
  setActiveClient: () => {},
}

export const ActiveClientContext = createContext<ActiveClientType>(initialActiveClient)

export const ActiveClientProvider = ({ children }: any): JSX.Element => {
  const [activeClient, setActiveClient] = useState<Client>(initialActiveClient.activeClient)
  return (
    <ActiveClientContext.Provider value={{ activeClient, setActiveClient }}>{children}</ActiveClientContext.Provider>
  )
}

export const useActiveClient = () => {
  const context = useContext(ActiveClientContext)

  if (context === undefined) throw new Error('useContextSession must be used within a SessionProvider')

  return context
}
