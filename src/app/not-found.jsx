import Link from "next/link";

function NotFound() {
  return(
    <section className='flex h-screen justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold cursor-default'>
          Page not found
        </h1>
        <Link href='/'
        className='text-xl pt-3 text-slate-500'>
        Back Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound;