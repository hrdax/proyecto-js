import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar' 

class App extends Component {
  state ={
    productos : [
      {name: 'Tomate', price: 1500, img: '/productos/tomate.png'},
      {name: 'Arbejas', price: 2500, img: '/productos/arbejas.png'},
      {name: 'Lechuga', price: 500, img: '/productos/lechuga.png'},
    ],
    carro : [
      // {name: 'Tomate', price: 1500, img: '/productos/tomate.png', cantidad: 1},
    ],
  }
  
agregarAlCarro = (producto) => {
  return this.setState({
    carro: this.state.carro.concat({
      ...producto,
      cantidad: 1,
    })
  })
}

  render() {
    console.log(this.state.carro)
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Productos 
            agregarAlCarro={ this.agregarAlCarro }
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App
