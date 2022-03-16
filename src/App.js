import { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Cell from "./Cell";
import Board from "./Board";

class App extends Component {
  render() {
    return (
      // "" จะมองเป็น string ทั้งหมด {} จะมองเป็น ตัวแปร value
      <div className="App">
        <Board></Board>
      </div>
    );
  }
}

export default App;
