import { Component } from "react"

const styles ={
    logo: {
        fontWeight: '700',
        fontSize: '2rem',
    },
    img: {
        width: '100px',
        height: '100px',
        borderRadius: '50%'
    }
}

class Logo extends Component {
    render() {
        return (
            <div style={ styles.logo }>
                <img style={ styles.img } alt="Shop" src="logo/logo.jpg" />
            </div>
        )
    }
}

export default Logo