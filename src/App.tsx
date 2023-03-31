import './App.css';
import GlobalContextProvider from 'context/GlobalContext';
import Layout from 'components/Layout';

const App = () => {
  return (
    <GlobalContextProvider>
      <Layout />
    </GlobalContextProvider>
  );
}

export default App;