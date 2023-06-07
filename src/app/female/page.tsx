import React from 'react'
import { getFemaleProducts } from '../../../sanity/lib/client'
import { urlForImage } from '../../../sanity/lib/image'
import Link from 'next/link'
import Image from 'next/image'

export default async function page() {
    const product=await getFemaleProducts()
  return (
    <>
     <div className="place-items-center  grid md:grid-cols-2 lg:grid-cols-3 mt-20 mb-20 m-10 gap-10 ">
          {product.map((prod) => (
            <Link className="text-center" href={`/products/${prod.slug}`} key={prod._id}>
              <Image
                src={`${urlForImage(prod.image)}`}
                alt=""
                width={250}
                height={0}
              />
              <p className='font-bold text-md'>{prod.name}</p>
              <p className='font-semibold text-xl'>{prod.price}</p>
            </Link>
          ))}
        </div>
    
    
    
    </>
  )
}
