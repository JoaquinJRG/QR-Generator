import { createContext, useState } from "react"

export const InputValueContext = createContext()

export function InputValueProvider({ children }) {

  const [inputValue, setInputValue] = useState("https://example.com")

  return (
    <InputValueContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputValueContext.Provider>
  )
}