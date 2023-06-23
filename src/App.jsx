import Layout from './pages/Layout';
import { ThemeContextProvider } from './pages/darkModeContext';

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Layout />
      </ThemeContextProvider>
    </>
  );
}

export default App;
