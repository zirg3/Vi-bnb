'use client';

import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { signIn } from 'next-auth/react';
import { 
  FieldValues, 
  SubmitHandler, 
  useForm
} from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { FaVk } from "react-icons/fa";
import { useRouter } from "next/navigation";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../Heading";
import Button from "../Button";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    },
  });
  
  const onSubmit: SubmitHandler<FieldValues> = useCallback( async (data) => {
    setIsLoading(true);

    await signIn('credentials', { 
      ...data, 
      redirect: false,
    })
    .then((callback) => {
      setIsLoading(false);

      if (callback?.error) {
        return toast.error('Неправильные данные для входа');
      }

      if (callback?.ok) {
        toast.success('С возвращением');
        router.refresh();
        loginModal.onClose();
      }
    });
  },[])

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="С возвращением"
        subtitle="Войдите в свой аккаунт!"
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
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
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
      <div className="
      text-neutral-500 text-center mt-4 font-light">
        <p>Впервые на ViBnB?
          <span 
            onClick={onToggle} 
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
            > Создайте аккаунт</span>
        </p>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Вход"
      actionLabel="Войти"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)
      }
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default LoginModal;