import { Component } from "react"
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
        boxShadow: '1px 3px 3px rgb(0,0,0,0.3)'
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20
    }
}

class Carro extends Component {
    render() {
        const { carro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return (
            <div>
                <span style={ styles.bubble }>
                    { cantidad !== 0
                        ? <BubbleAlert value={ cantidad }/>
                        : null
                    }
                </span>
                <button style={ styles.carro }>
                    Carro
                </button>
                <DetallesCarro carro={ carro }/>
            </div>
        )
    }
}

export default Carro