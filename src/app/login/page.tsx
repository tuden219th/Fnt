import { Suspense } from 'react'
import FntLoginPage from '@/components/auth/FntLoginPage'
import { DeployedBy } from '@/components/DeployedBy'

export default function LoginRoutePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* Keep the client-only auth query handling in a Suspense boundary. */}
      <Suspense fallback={null}>
        <FntLoginPage />
      </Suspense>
      <div className="pb-6 pt-3">
        <DeployedBy />
      </div>
    </div>
  )
}
