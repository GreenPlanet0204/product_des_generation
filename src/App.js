import "./App.scss";
import Layout from "./components/Layout";
import Generate from "./pages/Generate";
import ImageGeneration from "./pages/ImageGeneration";
import Translate from "./pages/Translate";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path="/" element={<Translate />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/image" element={<ImageGeneration />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
