import React from 'react'
import { ErrorText, InputText } from './styles'
import { IInputProps } from './type';
import { Controller } from 'react-hook-form';


const Input = ({name, errorMessage, control, ...props}: IInputProps) => {
  return (
    <>
      <Controller 
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => <InputText {...props} onChange={onChange} onBlur={onBlur} value={value} ref={ref} />} 
      />
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}

export default Input;