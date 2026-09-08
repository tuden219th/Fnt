import { Suspense } from 'react'
import LoginPage from '@open-mercato/core/modules/auth/frontend/login'
import { DeployedBy } from '@/components/DeployedBy'

export default function LoginRoutePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* LoginPage reads query params with useSearchParams; keep this boundary so
      static builds can prerender the route and hydrate the client-only params. */}
      <Suspense fallback={null}>
        <LoginPage />
      </Suspense>
      <div className="pb-6 pt-3">
        <DeployedBy />
      </div>
    </div>
  )
}
