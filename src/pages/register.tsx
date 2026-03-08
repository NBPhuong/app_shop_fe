import { NextPage } from 'next'
import React from 'react'

//*view
import BlankLayout from 'src/view/layouts/BlankLayout'
import RegisterPage from 'src/view/page/register'

type TProps = {}

const Register: NextPage<TProps> = () => {
  return <RegisterPage/>
}

export default Register

Register.getLayout = (page: React.ReactNode) => (
  <BlankLayout>{page}</BlankLayout>
)