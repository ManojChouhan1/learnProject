import Link from "next/link"
const ErrorPage = () => {
  return (
    <>
      <h1>Costum error page </h1>
      <p>404 Error : Page not found</p>
      <button> <Link href='/'>Go to home page</Link> </button>
    </>
  )
}

export default ErrorPage
