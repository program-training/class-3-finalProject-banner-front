import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HelloWorld from "./components/TestHelloWorld/TestHelloWorld";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HelloWorld />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
