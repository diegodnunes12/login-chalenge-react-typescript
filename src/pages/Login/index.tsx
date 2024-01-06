import React from 'react'
import { Form, Title, Wrapper } from './styles'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { IFormData } from './type'
import Input from '../../components/Input'
import Button from '../../components/Button'


const Login = () => {
  const {
    watch,
    setValue,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<IFormData>()

  const onSubmit = handleSubmit((data) => console.log(data))
  
  const form = watch();
  console.log(form);

  return (
    <Wrapper>
        <Title>Login</Title>
        <Form onSubmit={onSubmit}>
          <Input name='email' control={control} placeholder='E-mail' />
          <Input name='password' control={control} placeholder='Senha' />
          <Button />
        </Form>
        {/* <form onSubmit={onSubmit}>
          <Input />
          <Input />
          <input {...register("email")} />
          <input {...register("password")} />
        </form> */}
    </Wrapper>
  )
}

export default Login;
