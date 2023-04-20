import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TermsOfUse from "./components/TermsOfUse";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/terms-of-use" element={<TermsOfUse />}>
          {/* <Route index element={<Splash />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
