import { Component } from 'react'
import Productos from './components/Productos'

class App extends Component {
  state ={
    productos : [
      {name: 'Tomate', price: 1500, img: '/productos/tomate.png'},
      {name: 'Arbejas', price: 2500, img: '/productos/arbejas.png'},
      {name: 'Lechuga', price: 500, img: '/productos/lechuga.png'},
    ]
  }
  render() {
    return (
      <div>
        <Productos 
          agregarAlCarro={() => console.log('mmmm')}
          productos={this.state.productos}
        />
      </div>
    )
  }
}

export default App
