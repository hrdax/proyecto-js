import { Component } from "react"

const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 5px 5px rgb(0,0,0,0.3)'
    }
}


class Button extends Component {
    render() {
        return (
            <button style={styles.button} { ...this.props} />
        )
    }
}

export default Button