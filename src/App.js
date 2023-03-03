import React from 'react'
import './App.css';
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'

function App() {
  console.log('render de App')

  return (
    <div className="App">
        {/* <NavBar /> */}
        {/* {React.createElement(Counter, { title: 'Manzanas', initial: 1, stock: 10}, [])} */}
        <Counter title={"manzanas"} initial={1} stock={5}/>
        {/* <Counter title={"naranjas"} initial={1} stock={6}/> */}
        {/* <ItemListContainer greeting={"Bienvenidos a mi Ecommerce"}/> */}
    </div>
  );
}

export default App;
