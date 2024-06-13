import { useEffect } from 'react';
import './App.css';
import Main from './components/Main';

function App() {
  
  useEffect(()=>{
    document.title='Co & Bake'
})

  return (
    <div className='background-hero'>
      <Main />
    </div>
  );
}

export default App;
