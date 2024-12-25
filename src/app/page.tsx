import React from 'react'
import Link from 'next/link'
export default async function Home() {
  const url = await fetch("https://simple-books-api.glitch.me/books")
  const res = await url.json()
  console.log(res)
  return (
    <div>
      {
        res.map((book:any)=>(
          <div>
            <Link href={`${book.id}`}>
          <h1 className='text-5xl'>
             {book.name}
          </h1>
          </Link>
          </div>
        ))
      }
    
    </div>
  )
}
