import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import {Cube} from './3js_assets/Cube'
import {Plane} from './3js_assets/Plane'


function App() {

  return (
    <>
      <Canvas 
        dpr={[1,2]} 
        shadows
        camera={{position: [-5,5,5], fov: 50}}
        >
            <ambientLight/>
            <spotLight angle={0.25} penumbra={0.5} position={[10, 10, 5]} castShadow />
            <Physics>
              <Plane/>
              <Cube position={[0, 10, 0]} />
              <Cube position={[0.45, 15, -0.25]} />
              <Cube position={[-1.0, 20, 0.25]} />
              <Cube position={[-0.45, 30, 0.25]} />                <Cube position={[-1.0, 20, 0.25]} />
              <Cube position={[-1, 38, 0.25]} />             <Cube position={[-1.0, 20, 0.25]} />
              <Cube position={[0.5, 44, 0.25]} />             <Cube position={[-1.0, 20, 0.25]} />
              <Cube position={[-0, 50, 0.25]} />
            </Physics>


      </Canvas>
    </>
  )
}

export default App
