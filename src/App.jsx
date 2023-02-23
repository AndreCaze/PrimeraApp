import Horario from "./Horario"
import Portada from "./Portada"
import Contador from "./Contador"

function App() {

  return (
    <div>
      <Portada 
      titulo='Primera Pagina'
      fecha='20 febrero 2023'
      />
      <Horario/>
      <Contador
      contador = {4}
     />
    </div>
  )
}


export default App
