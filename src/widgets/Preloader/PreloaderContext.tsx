'use client'

import { createContext, useContext } from 'react'

export const PreloaderContext = createContext(true)

export function usePreloaderReady() {
  return useContext(PreloaderContext)
}
