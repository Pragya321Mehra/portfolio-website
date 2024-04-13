import './App.css'
import C1 from './Component1.jsx'
import C2 from './Component2.jsx'
import C3 from './Component3.jsx'

function App() {
 

  return (
    <>
       <div className="boss">
      <C1/>
      <div className="sep"></div>
       <C2/>
      <div className="sep"></div>
      <C3/>
       </div>
    </>
  )
}

export default App
