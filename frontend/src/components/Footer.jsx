import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, aperiam. Ipsa blanditiis, totam magni atque nisi ullam natus cumque repellendus hic. Recusandae perspiciatis nisi iusto ipsam eligendi, eos aliquid et?
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>DELIVERY</li>
                    <li>PRIVACY POLICY</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+92-000-0000000</li>
                    <li>thestreetnest@gmail.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@thestreetnest.com - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer