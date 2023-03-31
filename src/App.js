import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Nav />
        <Content />
      </div>

    </div >
  );
}

export default App;
