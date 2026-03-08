import { NextPage } from 'next'
import React from 'react'

import BlankLayout from 'src/view/layouts/BlankLayout'
import LoginPage from 'src/view/page/login'

type TProps = {}

const Login: NextPage<TProps> = () => {
  return <LoginPage/>
}

export default Login

Login.getLayout = (page: React.ReactNode) => (
  <BlankLayout>{page}</BlankLayout>
)