import {ReactNode} from 'react'

import Header from './Header'

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({children}: BaseLayoutProps) => {

  return (
    <div className="relative w-full h-full min-h-screen bg-app-gray-200">
      <Header />
      <main>
        <div className="w-full">{children}</div>
      </main>
    </div>
  )
}

export default BaseLayout
