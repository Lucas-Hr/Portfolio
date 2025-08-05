// LangProvider.tsx
'use client'

import React, { useState, ReactNode } from 'react';
import { LangContext, LangContextType } from './LangContext';

interface LangProviderProps {
  children: ReactNode;
}

export const LangProvider = ({ children }: LangProviderProps) => {
  const [lang, setLang] = useState<'english' | 'french'>('english');

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === 'english' ? 'french' : 'english'));
  };

  const contextValue: LangContextType = { lang, toggleLang };

  return (
    <LangContext.Provider value={contextValue}>
      {children}
    </LangContext.Provider>
  );
};