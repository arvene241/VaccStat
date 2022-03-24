import './App.css';
import { Navbar } from './components/index';
import { Header, Statistics, Certificate, Footer } from './container/index';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Statistics />
      <Certificate />
      <Footer />
    </>
  );
}

export default App;
