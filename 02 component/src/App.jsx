import Card from "./components/Card"
import Navbar from "./components/Navbar"
const App = () => {
  const name = "Kushagra"
  return (
    <>
      <div className="cards-container">
        <h1>Learning React Components</h1>
        <div id="card">
          <h1>my name is {name} and now  I&apos;m learning React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, itaque.</p>
        </div>
        <Card />
      </div>
        <Navbar />
    </>
  )

}

export default App