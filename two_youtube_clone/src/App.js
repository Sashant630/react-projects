import './App.css';
import Header from './components/Header/Header';
import RecommendedVideo from './components/RecommendedVideo/RecommendedVideo';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    // BEM class naming convention
    <div className="App">
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideo />
      </div>

    </div>
  );
}

export default App;
