import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import './App.css'
import HomePage from './components/HomePage'
import Page1 from "./components/Page1"
import Page2 from "./components/Page2"

function App() {


  return (

    <Router>
      <>

        <div className="App text-white sm:mx-5 mx-1 ">
          <Routes>



            <Route exact path="/" element={<div className="md:mx-32 mx-3"><HomePage /></div>} />
            <Route exact path="/Page1" element={<div className="md:mx-32 mx-3">< Page1 /></div>} />
            <Route exact path="/Page2" element={<div className="md:mx-32 mx-3">< Page2 /></div>} />
            {/* <Route exact path="/WS/Tree" element={<div className="md:mx-32 mx-3"><Tree /></div>} />
          <Route exact path="/WS/File" element={<div className="md:mx-32 mx-3"><File /></div>} />
          <Route exact path="/WS/Directory" element={<div className="md:mx-32 mx-3"><Directory /></div>} />
          <Route exact path="/WS/Cat" element={<div className="md:mx-32 mx-3"><Cat /></div>} />
         */}

          </Routes>
        </div>
      </>

    </Router >
  )


  // return (
  //   <div >
  //     <HomePage />
  //   </div>
  // )
}

export default App
