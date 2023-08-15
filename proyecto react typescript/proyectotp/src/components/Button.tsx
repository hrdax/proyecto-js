import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
    children: ReactNode,
    handleCLick: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, handleCLick }: ButtonProps) {
    return(
      <button
        onClick={ handleCLick }
        className='button is-primary'
       >{ children }
       </button>
    )
}