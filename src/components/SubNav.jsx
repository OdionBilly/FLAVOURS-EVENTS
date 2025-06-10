import React from 'react'
import { MdStarRate } from 'react-icons/md'




const DummyProduct = [
    { id: 'p1',
        name: 'queen cake',
        price: 500,
        description:'special cake for kings and queen',
        image: '/flavours/queen-cake.jpg'
    },
    { id: 'p2',
        name: 'meat pie',
        price: 700,
        description:'your favorite meat pie',
        image: '/flavours/meatpie.jpg'
    },
    { id: 'p3',
        name: 'chicken pie',
        price: 700,
        description:'enjoy the amazing taste of oue chicken pie',
        image: '/flavours/chickenpie.jpg'
    },
    { id: 'p4',
        name: 'suasage roll',
        price: 500,
        description:'you would not want to miss this amazing taste',
        image: '/flavours/sausage-roll.jpg'
    },
    { id: 'p5',
        name: 'French fries toast',
        price: 500,
        description:'special cake for kings and queen',
        image: '/src/assets/flavours/french-toast.jpg'
    },
    { id: 'p6',
        name: 'chocolate cake',
        price: 500,
        description:'chocolate cake is a delicious and decadent dessert that is loved by many.',
        image: '/flavours/chocolate-cake.jpg'
    },
    { id: 'p7',
        name: 'burger Bite',
        price: 1000,
        description:'burger bite is a delicious and savory dish that combines the flavors of burger with the convenience of a pie.',
        image: '/flavours/burger.jpg'
    },
    { id: 'p8',
        name: 'pizza Pie',
        price: 800,
        description:'Pizza pie is a delicious and savory dish that combines the flavors of pizza with the convenience of a pie.',
        image: '/flavours/pizza-pie.jpg'
    },

]

export const SubNav = () => {

  return (
    <div className='relative '>
        <div>
            <h1 className='text-center text-3xl font-bold py-5'></h1>
            <p className='text-center text-gray-500'>Explore from our wide range of delicious African  and intercontonental dish that are sure to satisfy your cravings.</p>
        </div>
        <div className='grid max-sm:grid-cols-1 max-lg:grid-cols-2 xl:grid-cols-4 gap-4 px-5 py-[50px] '>
            {DummyProduct.map((product) => (
                <div key={product.id} className='border xl:p-10 group transition duration-300 relative overflow-hidden'>
                    <img src={product.image} alt={product.image} className=' xl:h-[20vh] object-cover group-hover:scale-110 transition duration-300' />

                    {/* buttons */}
                    <div className='absolute top-2 -right-10 group-hover:right-5 bg-[#312d27] p-2 opacity-0 group-hover:opacity-50 transition-all'>
                        <button>
                            <div className='flex justify-center items-center w-8 h-6 text-white'>
                               <MdStarRate className='text-2xl' />
                            </div>
                        </button>
                     </div>  

                      {/*button to addtocart  */}
                      <button className='rounded-full mt-[230px] absolute top-2 -right-[100px] group-hover:right-[30px] bg-[#504b4b] p-1 opacity-0 group-hover:opacity-100 transition-all duration-1000 '>
                            <div className='flex justify-center items-center px-2 py-2 text-white hover:bg-[#3a8da4] rounded-full '>
                              <p>Add TO CART</p>
                            </div>
                     </button>

                    <h2 className='text-[15px] font-primarylato_light mt-[50px] '>{product.name}</h2>
                    {/* <p className='text-gray-600'>{product.description}</p> */}
                    <p className='text-xl font-bold mt-[10px]'>Ksh{product.price}</p>
                </div>
            ))}

        </div>
    </div>
  )
}
