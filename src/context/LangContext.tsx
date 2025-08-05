// ThemeContext.ts
'use client'
import { createContext } from 'react';
export interface LangContextType {
  lang: 'english' | 'french';
  toggleLang: () => void;
}


export const LangContext = createContext<LangContextType>({
  lang: 'english',
  toggleLang: () => console.warn('no lang provider'), // Placeholder for default value
});