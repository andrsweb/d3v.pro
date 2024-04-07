import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import About from "./Components/About/About"
import FluidSim from "./Components/FluidSim/FluidSim"

const App = () => {
  return (
    <div className="App">
		<FluidSim />
        <Header />
		<Hero />
		<About />
    </div>
  )
}

export default App
