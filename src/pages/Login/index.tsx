import React from 'react'
import { Form, Title, Wrapper } from './styles'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { IFormData, defaultValues } from './type'
import Input from '../../components/Input'
import Button from '../../components/Button'


const schema = yup.object({
  email: yup.string().email("Por favor, digite um e-mail válido").required("Por favor, preencha esse campo"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Por favor, preencha esse campo"),
}).required();

const Login = () => {
  const {
    setValue,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange"
  })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <Wrapper>
        <Title>Login</Title>
        <Form onSubmit={onSubmit}>
          <Input name='email' control={control} placeholder='E-mail' errorMessage={errors?.email?.message} />
          <Input name='password' control={control} placeholder='Senha' type='password' errorMessage={errors?.password?.message} />
          <Button disabled={!isValid} />
        </Form>
    </Wrapper>
  )
}

export default Login;
