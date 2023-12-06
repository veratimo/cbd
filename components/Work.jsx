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
    {
        id: 5,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc: '/assets/images/work/07.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 6,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: '/assets/images/work/08.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 7,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: '/assets/images/work/09.png',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 8,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '/assets/images/work/10.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 9,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc: '/assets/images/work/11.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 10,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: '/assets/images/work/12.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 11,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: '/assets/images/work/13.png',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 12,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '/assets/images/work/14.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 13,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc: '/assets/images/work/15.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 14,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: '/assets/images/work/16.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 15,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: '/assets/images/work/17.png',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 16,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '/assets/images/work/18.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
  ]

const Work = () => {
  return (
    <div className='container mx-auto pb-0 sm:pb-6 lg:pb-8'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <h2 className="text-3xl sm:text-4xl mt-20">My work</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-20">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2 bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                    width={500}
                    height={500}
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                />
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work