import logo from "./logo.svg";
import "./App.css";
import "./styles/iconfont.css";
import "./styles/index.less";
import "./styles/a.css";
import "./styles/b.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <img src={logo} className="App-logo" alt="logo" />
      <div id="box1"></div>
      <div id="box2"></div>
      <span className="iconfont icon-all"></span>
      <img src="./images/react.jpeg" alt="" />
      <div id="pic"></div>
    </div>
  );
}

export default App;
