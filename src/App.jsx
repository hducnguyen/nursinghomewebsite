import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;