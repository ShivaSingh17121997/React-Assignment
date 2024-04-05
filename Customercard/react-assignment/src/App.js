import './App.css';
import Home from './Pages/Home';
import MainRoutes from './Pages/Routes';


function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }} className="App">

      <div className='component1' ><Home /></div>
      <div className='component2' > <MainRoutes /></div>

    </div>
  );
}



export default App;
