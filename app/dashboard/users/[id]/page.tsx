import React from 'react'

const page = async ({params}: {params :Promise<{id: string}>}) => {
    const {id} = await params;
  return (
    <div>
      <h1 className='text-3xl'>User: {id}</h1>
    </div>
  )
}

export default page
