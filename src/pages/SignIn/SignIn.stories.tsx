import { Meta, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'

import { SignIn } from './'

export default {
  title: 'Pages/SignIn',
  component: SignIn,
  args: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado com sucesso',
            user: {
              emai: 'bruce@email.com'
            },
            token: 'kdsnjaiofhdsaifh.dusahfudhsufhufhuhf-fkdsnfjbasjbfuiabfu'
          }))
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'bruce@email.com')
    userEvent.type(canvas.getByPlaceholderText('****************'), '123456')
    userEvent.click(canvas.getByRole('button'))
    await waitFor(() => {
      return expect(canvas.getByText('Login realizado com sucesso')).toBeInTheDocument()
    })
  }
}
