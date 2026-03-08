import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'

import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Typography,
  InputAdornment,
  IconButton,
  useTheme
} from '@mui/material'

import CustomTextField from 'src/components/text-field'
import Icon from 'src/components/Icon'

import { Controller, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { EMAIL_REG, PASSWORD_REG } from 'src/configs/regex'

import LoginDark from '/public/images/login-dark.png'
import LoginLight from '/public/images/login-light.png'

import { useAuth } from 'src/hooks/useAuth'

type TProps = {}

const LoginPage: NextPage<TProps> = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isRemember, setIsRemember] = useState(true)

  const theme = useTheme()

  const { login } = useAuth()

  const schema = yup.object().shape({
    email: yup.string().required("This is required").matches(EMAIL_REG, "Rules_email"),
    password: yup.string().required("This is required").matches(PASSWORD_REG, "Rules_password"),
  })

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: { email: string, password: string }) => {
    if (!Object.keys(errors)?.length) {
      login({ ...data, rememberMe: isRemember })
    }
  }

  return (
    <Box>
      {/* UI giữ nguyên */}
    </Box>
  )
}

export default LoginPage