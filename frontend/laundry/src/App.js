import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Login from "./components/login.js";
import AboutUS from "./components/aboutus";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
}

export default App;
