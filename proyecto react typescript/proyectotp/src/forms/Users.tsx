import { ChangeEventHandler, MouseEventHandler } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export default function UserForm() {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();
        console.log(e.target.value)
      }
    
      const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        console.log('click');
      }
      return(
        <>
            <Input placeholder='Nombre' handleChange={ handleChange } />
            <Input placeholder='Apellido' handleChange={ handleChange } />
            <Button handleCLick={ handleClick }>Probando componente</Button>
        </>
      )
}