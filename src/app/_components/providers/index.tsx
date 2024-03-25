'use client'
import { SnackbarProvider } from '@src/context/snackbar-context'

interface Props {
  children: React.ReactNode
}

const Providers = ({ children }: Props) => {
  return <SnackbarProvider>{children}</SnackbarProvider>
}

export default Providers
