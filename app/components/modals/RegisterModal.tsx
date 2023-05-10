'use client';

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaVk } from "react-icons/fa";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Button from "../Button";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { Zoom, toast } from 'react-toastify'
import { signIn } from "next-auth/react";

const RegisterModal= () => {
  const registerModal = useRegisterModal();
  // const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const { 
    register, 
    handleSubmit, 
    formState: { 
      errors
    } 
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    axios.post('/api/register', data)
      .then(() => {
        registerModal.onClose()
      })
      .catch(error => {
        toast.error('Кажется что-то пошло не так...', {transition: Zoom})
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const bodyContent = (
    <form className="flex flex-col gap-4">
      <Heading
        title="Добро пожаловать на Vi BnB"
        subtitle="Создать аккаунт!"
        center
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        minLengths={3}
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        minLengths={6}
      />
    </form>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button 
        outline 
        label="Войти через Google"
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      <Button 
        outline 
        label="Войти через Github"
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <Button 
        outline 
        label="Войти через Github"
        icon={FaVk}
        colorIcon="blue"
        onClick={() => signIn("vk")}
      />
      <div 
        className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
      >
        <p>Уже есть аккаунт?
          <span 
            onClick={registerModal.onClose} 
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
            > Log in</span>
        </p>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Регистрация"
      actionLabel="Продолжить"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default RegisterModal;