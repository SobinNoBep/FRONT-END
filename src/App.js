import logo from './logo.svg';
import './App.css';
import Profile from './compontnents/profile';
import 'bootstrap/dist/css/bootstrap.min.css';
  

function App() {
  return (
  
    <div className="App">
        
      <header className="App-header">
          <img src="https://wall.vn/wp-content/uploads/2020/04/anh-dep-viet-nam-2.jpg" />    
       
        <Profile/>
      </header>
    </div>
  );
}

export default App;   
