/* eslint-disable @typescript-eslint/no-unused-vars */

// ** Next Imports
import { useRouter } from 'next/router'

// ** React Imports
import { ReactNode, ReactElement, useEffect } from 'react'

// ** config
import { ACCESS_TOKEN, USER_DATA } from 'src/configs/auth'

// ** Hook
import { useAuth } from 'src/hooks/useAuth'

interface GuestGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const GuestGuard = (props: GuestGuardProps) => {
  const { children, fallback } = props
  
    // ** auth
    const authContext = useAuth()
  
    // ** router
    const router = useRouter()
  useEffect(() => {
    if (!router.isReady) {
      return
    }
    if (
      window.localStorage.getItem(ACCESS_TOKEN) &&
      window.localStorage.getItem(USER_DATA)
    ) {
     router.replace('/')
    }
  }, [router.route])

  if(authContext.loading) {
    return fallback
  }
  
return <>{children}</>
}

export default GuestGuard
