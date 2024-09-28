import { createContext, useContext } from 'react';
import { fullpageApi } from '@fullpage/react-fullpage';

export interface Context {
  fullpageApi: fullpageApi
}

const FullpageContext = createContext<Context | null>(null);
export const FullpageProvider = FullpageContext.Provider;

export const useFullpage = () => {
  const context = useContext(FullpageContext);
  if (!context) {
    throw new Error('useFullpage must be used within a FullpageProvider');
  }
  return context;
}
