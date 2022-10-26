import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MUITheme from './MUITheme/Theme';

const theme = createTheme(MUITheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
};

export default App;
