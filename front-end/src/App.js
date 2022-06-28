import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lab from './Pages/Laboratorio';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className='container-app'>
      <span className='little-crack'></span>
      <div className='screen'>
          <Lab />
      </div>
      </div>
    </div>
  );
}

export default App;

