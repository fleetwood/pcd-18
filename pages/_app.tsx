import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function App({ Component, pageProps }: AppProps) {
  const qc = new QueryClient()
  return (
    <QueryClientProvider client={qc}>
        <Component {...pageProps} />
    </QueryClientProvider>
)}
