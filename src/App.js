import Navbar from "./components/navbar/Navbar";
import Product from "./components/product/Product";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path = '/' element = {<Product/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
