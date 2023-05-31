import '../styles/globals.css'
import { GlobalNav } from '../ui/global-nav'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-y-scroll bg-gray-300 pb-36">
        <GlobalNav />
        <div>{children}</div>
      </body>
    </html>
  )
}
