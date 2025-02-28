import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from './libs/react-router-dom/route'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './libs/react-query/error-fallback'

const queryClient = new QueryClient({})

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Suspense fallback={<div>로딩 중...</div>}>
                    <RouterProvider router={router} />
                </Suspense>
            </ErrorBoundary>
        </QueryClientProvider>
    )
}

export default App
