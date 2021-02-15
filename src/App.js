import logo from './logo.svg';
import './App.css';
import Stars from './components/Stars';

function App() {

  return (    
    <>
    <Stars/>
    <Stars countStars={0}/>
    <Stars countStars={1}/>
    <Stars countStars={2}/>
    <Stars countStars={3}/>
    <Stars countStars={4}/>
    <Stars countStars={5}/>
    <Stars countStars={6}/>
    </>
  );
}

export default App;
