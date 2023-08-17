import {ReactNode} from 'react'

interface EmptyLayoutProps {
  children: ReactNode;
}

const EmptyLayout = ({children}: EmptyLayoutProps) => {
  return (
    <div className="min-h-full">
      <main>
        <div className="mx-auto max-w-screen-2xl">{children}</div>
      </main>
    </div>
  )
}

export default EmptyLayout
