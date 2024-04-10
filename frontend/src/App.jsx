import "./App.css"
import Workers from "./components/Workers"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Edit from "./components/Edit"
import Tag from "./components/Tag"
import Home from "./components/Home"
import Login from "./components/Login"
function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path={"/"} element={<Workers />} />
          <Route path={"/edit/:id"} element={<Edit />} />
          <Route path={"/add"} element={<Edit />} />
          <Route path={"/tags"} element={<Tag />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
