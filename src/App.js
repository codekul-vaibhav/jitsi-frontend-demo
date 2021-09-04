import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import {Welcome1,Welcome} from './component/Welcome';
import TestProps from './component/TestProps';
import Count from './component/Count';

let sendMsg = "Pune"
function App() {

  return (
    <div className="App">
      <Count/>
      {/* <Hello />
      
      <Welcome1/> */}
      {/* <TestProps city={sendMsg}/> */}
      {/* <Welcome1/> */}
    </div>
  );
}

export default App;
