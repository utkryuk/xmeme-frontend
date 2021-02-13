import './App.css';
import Header from './components/Header'
import AddMemeButton from './components/AddMemeButton'
import Main from './components/Main'

const App = () => {
  
  return (
    <div className="App">
      <Header/>
      <AddMemeButton />
      <Main />
      <Header />
    </div>
  );
}

export default App;
