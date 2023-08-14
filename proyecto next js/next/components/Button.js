
const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 5px 5px rgb(0,0,0,0.3)',
        display: 'block',
        margin: 'auto',
        marginTop: '20px',
    }
}

const Button = ({ children }) => {
    return (
        <button style={styles.button}>{ children } </button>
    )
}
export default Button