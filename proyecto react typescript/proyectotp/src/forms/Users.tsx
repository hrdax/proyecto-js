import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export type UserFormState = {
    name: string;
    username: string;
}

const InitialValue = {
    name: '',
    username: '',
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
      }

      return(
        <>
            <Input value={form.name}  name='name' placeholder='Nombre' handleChange={ handleChange } />
            <Input value={form.username} name='username' placeholder='Usuario' handleChange={ handleChange } /><br/><br/>
            <Button handleCLick={ handleClick }>Enviar</Button>
        </>
      )
}