import './FluidSim.css'
import { useEffect, useRef } from 'react'
import webGLFluidEnhanced from 'webgl-fluid-enhanced'

const FluidSim = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    webGLFluidEnhanced.simulation(canvasRef.current, {
		SIM_RESOLUTION: 64,
		DYE_RESOLUTION: 64,
		CAPTURE_RESOLUTION: 32,
		DENSITY_DISSIPATION: 0.05,
		VELOCITY_DISSIPATION: 1,
		PRESSURE: 0.5,
		PRESSURE_ITERATIONS: 0.1,
		CURL: 148,
		INITIAL: true,
		SPLAT_AMOUNT: 3,
		SPLAT_RADIUS: 0.3,
		SPLAT_FORCE: 500,
		SPLAT_KEY: 'Space',
		SHADING: false,
		COLORFUL: true,
		COLOR_UPDATE_SPEED: 10,
		COLOR_PALETTE: [],
		HOVER: true,
		BACK_COLOR: '#150b04',
		TRANSPARENT: false,
		BRIGHTNESS: 0.7,
		BLOOM: false,
		SUNRAYS: false
    })
  }, [])

  return <canvas className='fluid' ref={canvasRef} style={{ width: "100vw", height: "100dvh" }} />
}

export default FluidSim
