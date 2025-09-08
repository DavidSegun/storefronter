import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
}

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center py-24 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700">Page not found</h2>
      <p className="text-gray-600 text-center max-w-md">
        The page you tried to access does not exist.
      </p>
      <Link 
        href="/" 
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Go to homepage
      </Link>
    </div>
  )
}