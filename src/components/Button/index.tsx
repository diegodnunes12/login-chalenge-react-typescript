import React from 'react'
import { ButtonStyle } from './styles'
import { IButtonProps } from './type';


const Button = ({...props}: IButtonProps) => {
  return (
    <ButtonStyle {...props}>Entrar</ButtonStyle>
  )
}

export default Button;