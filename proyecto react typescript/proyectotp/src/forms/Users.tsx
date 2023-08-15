import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

type UserFormState = {
    name: string;
    lastName: string;
}

const InitialValue = {
    name: '',
    lastName: '',
}

export default function UserForm() {
    const [form, setForm] = useState(InitialValue)
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const name = e.target.name as keyof UserFormState;
        setForm({ ...form, [name]: e.target.value })
      }
    
      const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        console.log(form);
      }

      return(
        <>
            <Input name='name' placeholder='Nombre' handleChange={ handleChange } />
            <Input name='lastname' placeholder='Apellido' handleChange={ handleChange } />
            <Button handleCLick={ handleClick }>Probando componente</Button>
        </>
      )
}