import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp.js";

import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import DisplayNotes from "./components/displayNotes.js";
import Alert from "./components/Alert";
import Login from "./components/Login";
function App() {
  return (
    <div>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            ></Route>
            <Route
              exact
              path="/about"
              element={
                <>
                  <About />
                </>
              }
            ></Route>
            <Route
              exact
              path="/displaynotes"
              element={
                <>
                  < DisplayNotes/>
                </>
              }
            ></Route>
            <Route
              exact
              path="/createaccount"
              element={
                <>
                  <SignUp/>
                </>
              }
            ></Route>
            <Route
              exact
              path="/login"
              element={
                <>
                  <Login/>
                </>
              }
            ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
