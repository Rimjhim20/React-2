import "./App.css";
import Nameage from "./Nameage";
import Counter from "./Counter";
function App() {
  return (
    <div className="App">
      <div className="box1">
      <Nameage />
      </div>
     <hr className="new"></hr>
     <div className="box2">
      <Counter/>
      </div>
    </div>
  );
}

export default App;
