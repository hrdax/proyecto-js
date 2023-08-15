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

interface UserFormProps {
    handleSubmit: (user: UserFormState) => void;
}

export default function UserForm({ handleSubmit }: UserFormProps) {
    const [form, setForm] = useState(InitialValue)
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const name = e.target.name as keyof UserFormState;
        setForm({ ...form, [name]: e.target.value })
      }
    
      const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        handleSubmit(form);
        setForm(InitialValue);
        console.log(form);
      }

      return(
        <>
            <Input value={form.name}  name='name' placeholder='Nombre' handleChange={ handleChange } />
            <Input value={form.lastName} name='lastName' placeholder='Apellido' handleChange={ handleChange } />
            <Button handleCLick={ handleClick }>Probando componente</Button>
        </>
      )
}