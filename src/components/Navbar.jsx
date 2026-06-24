import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='bg-slate-600 p-2 flex justify-between text-white'>
                <span className='text-3xl'>Todo-App</span>
                <ul className='flex gap-3 px-4 items-center'>
                    <li className='cursor-pointer hover:text-[18px] transition-all duration-75'>Home</li>
                    <li className='cursor-pointer hover:text-[18px] transition-all duration-75'>Task</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
