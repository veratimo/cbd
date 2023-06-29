import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: '/assets/images/work/02.png',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: '/assets/images/work/03.png',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: '/assets/images/work/04.png',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: '/assets/images/work/06.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]

const Work = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                    width={500}
                    height={500}
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work