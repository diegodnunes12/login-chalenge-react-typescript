import React from 'react'
import { InputText } from './styles'
import { IInputProps } from './type';
import { Controller } from 'react-hook-form';


const Input = ({name, control, ...props}: IInputProps) => {
  return (
    <Controller 
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => <InputText {...props} onChange={onChange} onBlur={onBlur} value={value} ref={ref} />} 
    />
    
  )
}

export default Input;