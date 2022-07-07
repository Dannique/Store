import { useState, useEffect } from "react"
import storage from "local-storage-fallback"

const safeJsonParse = (data, fallback) => {
  try {
    return JSON.parse(data)
  } catch (error) {
    return fallback
  }
}

const getInitialTheme = () => {
  const savedTheme = storage.getItem("theme")
  return safeJsonParse(savedTheme, { mode: "light " })
}

export default function useTheme(defaultTheme = { mode: "light" }) {
  const [theme, _setTheme] = useState(getInitialTheme())

  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  return {
    ...theme,
    setTheme: ({ setTheme, ...theme }) => _setTheme(theme),
  }
}