import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { ReactNode } from "react"

const theme = createTheme({
  palette: {
    mode: "dark",
  },
})
const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default AppProvider
