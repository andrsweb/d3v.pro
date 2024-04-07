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
		DENSITY_DISSIPATION: 0,
		VELOCITY_DISSIPATION: 0.2,
		PRESSURE: 0.5,
		PRESSURE_ITERATIONS: 1,
		CURL: 130,
		INITIAL: true,
		SPLAT_AMOUNT: 5,
		SPLAT_RADIUS: 0.35,
		SPLAT_FORCE: 6000,
		SPLAT_KEY: 'Space',
		SHADING: false,
		COLORFUL: true,
		COLOR_UPDATE_SPEED: 10,
		COLOR_PALETTE: [],
		HOVER: true,
		BACK_COLOR: '#000000',
		TRANSPARENT: false,
		BRIGHTNESS: 0.6,
		BLOOM: false,
		BLOOM_ITERATIONS: 4,
		BLOOM_RESOLUTION: 64,
		BLOOM_INTENSITY: 0.4,
		BLOOM_THRESHOLD: 0.6,
		BLOOM_SOFT_KNEE: 0,
		SUNRAYS: false
    })
  }, [])

  return <canvas ref={canvasRef} style={{ width: "100vw", height: "100dvh" }} />
}

export default FluidSim
