import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Page = () => {
  return (
    <div className='bg-slate-600'>
      <Navbar name='Safdar Kashif' msg='Good Evening!    ' />
      <div className='bg-sky-700 flex mx-auto'>
        <div className='font-serif font-bold my-8 mx-auto underline text-3xl text-center'>
          HOOKS IN NEXTJS
        </div>
      </div> 
      <div className='bg-slate-600 w-10/12 text-xs text-center mx-auto'>
        <div className='bg-sky-500 p-4 mb-4 rounded-lg shadow-lg text-lg font-bold'>
          useRouter
        </div>
        <div className='text-sm'>
          Purpose: Access the router object to programmatically navigate or retrieve route parameters.
        </div><br />

        <div className='bg-sky-500 p-4 mb-4 rounded-lg shadow-lg text-lg font-bold'>
          useEffect
        </div>
        <div className='text-sm'>
          Purpose: Similar to React’s useEffect, it’s used for side effects, like fetching data when the component mounts.
        </div><br />

        <div className='bg-sky-500 p-4 mb-4 rounded-lg shadow-lg text-lg font-bold'>
          useSWR
        </div>
        <div className='text-sm'>
          Purpose: A React hook for data fetching that simplifies fetching, caching, and revalidation.
        </div><br />

        <div className='bg-sky-500 p-4 mb-4 rounded-lg shadow-lg text-lg font-bold'>
          useSession (from next-auth)
        </div>
        <div className='text-sm'>
          Purpose: Manage user authentication sessions.
        </div><br />

        <div className='bg-sky-500 p-4 mb-4 rounded-lg shadow-lg text-lg font-bold'>
          useCallback & useMemo
        </div>
        <div className='text-sm'>
          Purpose: Optimize performance by memoizing functions or values.
        </div><br />

        <div className='bg-sky-500 p-4 mb-4 rounded-lg shadow-lg text-lg font-bold'>
          useEffect for Data Fetching
        </div>
        <div className='text-sm'>
          When fetching data on page load, consider using getStaticProps or getServerSideProps for server-side rendering, which may eliminate the need for some useEffect calls.
        </div><br />
      </div>
      <Footer />   
    </div>
  )
}

export default Page
