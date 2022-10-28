import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import './App.css'
import HomePage from './components/HomePage'

function App() {


  return (

    <Router>
      <>


        <Routes>



          <Route exact path="/" element={<HomePage />} />
          {/* <Route exact path="/WS/Introduction" element={<div className="md:mx-32 mx-3">< Introduction /></div>} />
          <Route exact path="/WS/Tree" element={<div className="md:mx-32 mx-3"><Tree /></div>} />
          <Route exact path="/WS/File" element={<div className="md:mx-32 mx-3"><File /></div>} />
          <Route exact path="/WS/Directory" element={<div className="md:mx-32 mx-3"><Directory /></div>} />
          <Route exact path="/WS/Cat" element={<div className="md:mx-32 mx-3"><Cat /></div>} />
         */}

        </Routes>

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
