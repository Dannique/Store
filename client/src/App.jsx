//rfc  'react function component'
//rafc 'react arrow function component'
import { Home } from "./pages/Home"
import {ProductList} from "./pages/ProductList"
import  Product  from "./pages/Product";
import Login from './pages/Login';
import Cart from "./pages/Cart";
import Register from "./pages/Register"
import useTheme from "./components/Theme"
import { ThemeProvider } from "styled-components"
import { createGlobalStyle } from "styled-components"
import style from "styled-theming"

const getBackground = style("mode", {
    dark: "#282c34",
    light: "#FCFBFB",
  })

  const getForeground = style("mode", {
    dark: "#fff",
    light: "#282c34",
  })
  
  const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${getBackground};
      color: ${getForeground};
    }
    .App-header {
      background-color: ${getBackground};
      color: ${getForeground};
    }
    .App-toggle-dark-mode {
      color: ${getForeground};
      background-color: ${getBackground};
    }`


const App = () => {
  const theme = useTheme()
  return (
<ThemeProvider theme={theme}>
<GlobalStyle />
   <Login/>
</ThemeProvider>
 )};

export default App;