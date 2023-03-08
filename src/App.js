import './App.css';
import { useState, useEffect, useRef } from 'react'
import logo from './logo.svg'
// import Counter from './components/Counter/Counter';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import NavBar from './components/NavBar/NavBar'

// const Layout = (props) => {
//   console.log(props)

//   return (
//     <div style={{ backgroundColor: 'orange'}}>
//       <h1>{props.title}</h1>
//       {props.children}
//     </div>
//   )
// }

// function App() {
//   const [view, setView] = useState(null)

//   return (
//     <div className="App">
//       <div>
//         <button onClick={() => setView('parrafo')}>parrafo</button>
//         <button onClick={() => setView('imagen')}>imagen</button>
//       </div>
//       <Layout title="Titulo del Parrafo">
//         {view === 'parrafo' && <p>Esto es un parrafo</p> } 
//         {view === 'imagen' && <img src={logo} alt='logo'/>}
//       </Layout>
//     </div>
//   );
// }

// const Count = () => {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     console.log('cambio el titulo')
//     document.title = `Contador: ${count}`

//     // return () => document.title = 'React App'
//   }, [count])

//   return (
//     <div>
//       <h1>Contador {count}</h1>
//       <button onClick={() => setCount(count => count + 1)}>contar</button>
//     </div>
//   )
// }

// const App = () => {
//   const [view, setView] = useState('count')

//   return (
//     <div>
//         <div>
//           <button onClick={() => setView('count')}>count</button>
//           <button onClick={() => setView('imagen')}>imagen</button>
//         </div>
//         {view === 'count' &&  <Count /> } 
//         {view === 'imagen' && <img src={logo} alt='logo'/>}
//     </div>
//   )
// }

const App = () => {
  const [vueltas, setVueltas] = useState(0)
  const [tiempoEnSegundos, setTiempoEnSegundos] = useState(0)
  const [listadoDeVuelta, setListadoDeVueltas] = useState([])

  useEffect(() => {
    console.log('efecto')
    setTiempoEnSegundos(0)
    const intervalId = setInterval(() => {
      setTiempoEnSegundos(tiempoEnSegundos => tiempoEnSegundos + 1)
    }, 1000)

    return () => {
      console.log('limpieza')
      clearInterval(intervalId)
    }
  }, [vueltas])

  const finalizarVuelta = () => {
    const objVuelta = {
      nroVuelta: vueltas,
      tiempo: tiempoEnSegundos
    }

    setListadoDeVueltas(listadoDeVuelta => [...listadoDeVuelta, objVuelta])
    setVueltas(vueltas => vueltas + 1)
  }

  return (
    <div>
      <h1>Vueltas: {vueltas}</h1>
      <h2>Tiempo en segundos: {tiempoEnSegundos} </h2>
      <button onClick={finalizarVuelta}>Finalizar Vuelta</button>

      {
        listadoDeVuelta.map(vuelta => {
          console.log(vuelta)
          return (
            <div key={vuelta.id}>
              <p>Vuelta: {vuelta.nroVuelta}</p>
              <p>Tiempo: {vuelta.tiempo}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default App;
