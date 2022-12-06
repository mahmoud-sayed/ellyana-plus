import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MUITheme from './MUITheme/Theme';
import AppRoutes from './Global/Routes/AppRoutes';

const theme = createTheme(MUITheme);

function App(data) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
