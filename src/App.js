import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MUITheme from './MUITheme/Theme';
import Home from './Pages/Home/Home';


const theme = createTheme(MUITheme);

function App(data) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
};

export default App;
