import logo from "./logo.svg";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AddForm from "./Pages/AddForm/AddForm";
import HomePage from "./Pages/Homepage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addForm" element={<AddForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
