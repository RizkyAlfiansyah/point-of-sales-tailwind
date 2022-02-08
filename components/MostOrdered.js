import React from 'react';
import ChevronDownIcon from '../public/icons/chevron-down.svg';
import Image from 'next/image';
 
const MostOrdered = () => {
    const mostOrdered = [
        {
            id : 1,
            name: "Spicy seasoned seafood noodles",
            image: "food-1.png",
            count: 200,
        },
        {
            id : 2,
            name: "Salted pasta with mushroom sauce",
            image: "food-2.png",
            count: 120,
        },
        {
            id : 3,
            name: "Beef dumpling in hot and sour soup",
            image: "food-3.png",
            count: 80,
        },
    ];
    return(
        <>
            <div className='flex flex-col p-6 bg-gray-900 rounded-lg gap-y-6'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-xl font-semibold leading-loose text-white'>Most Ordered</h2>
                    <button className='flex gap-x-2.5 py-3 px-4 rounded-lg border border-gray-700'>
                        <ChevronDownIcon />
                        <span className="text-sm text-white">Today</span>
                    </button>
                </div>
                <hr className="border-gray-700" />
                <div className='flex flex-col gap-y-4'>
                    { mostOrdered.map( (item, index) => (
                    <div data-index = {index} key={item.id} className='flex gap-x-4 items-center'>
                        <Image width={56} height={56} src={`/../public/img/${item.image}`} alt="food-1"/>
                        <div className='flex flex-col gap-y-0.5'>
                            <div className='text-sm font-medium text-white'>{item.name}</div>
                            <div className='text-xs text-gray-500'>{item.count}</div>
                        </div>
                    </div>
                    ))}
                </div>
                <button className='py-3.5 rounded-lg w-full border border-primary text-primary text-sm font-semibold'>
                    View All
                </button>
            </div>
        </>
    )
}
 
export default MostOrdered