import { FormEvent, useState } from 'react'
import { Envelope, Lock } from 'phosphor-react'
import axios from 'axios'

import { Button } from './../../components/Button'
import { Checkbox } from './../../components/Checkbox'
import { Heading } from './../../components/Heading'
import { Logo } from './../../components/Logo'
import { Text } from './../../components/Text'
import { TextInput } from './../../components/TextInput'

export const SignIn = () => {
  const [isUserSignedIn, setIsuserSignedIn] = useState(false)

  const handleSignIn = async (event: FormEvent) => {
    event.preventDefault()
    await axios.post('/sessions', {
      email: 'bruce@email.com',
      password: '123456'
    })
    setIsuserSignedIn(true)
  }

  return (
    <main className="flex flex-col items-center justify-center text-gray-100 h-screen w-screen bg-gray-900">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Design System
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className="flex flex-col items-stretch gap-4 mt-10 w-full max-w-sm"
      >
        {isUserSignedIn && <Text>Login realizado com sucesso</Text>}

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope size={16} />
            </TextInput.Icon>
            <TextInput.Input type="email" placeholder="Digite seu e-mail" id="email" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3 mt-4">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock size={16} />
            </TextInput.Icon>
            <TextInput.Input type="password" placeholder="****************" id="password" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex flex-row gap-2 mt-4">
          <Checkbox id="remember" />
          <Text size="sm">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Create account
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm" asChild>
          <a href="#" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text size="sm" asChild>
          <a href="#" className="text-gray-400 underline hover:text-gray-200">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </main>
  )
}
