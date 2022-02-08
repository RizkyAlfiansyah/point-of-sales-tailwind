import React from 'react';
import CoinIcon from '../public/icons/coin.svg';
import ArrowUpIcon from '../public/icons/arrow-up.svg'
import ArrowDownIcon from '../public/icons/arrow-down.svg';
import OrderIcon from '../public/icons/order.svg';
import CustomerIcon from '../public/icons/customer.svg';
 
const StatsCard = () => {
    const stats = [
        {
            id: 1,
            title: "Total Revenue",
            percentage: "+32.40%",
            value: "$10,243.00",
            status: "up",
            icon: <CoinIcon />,
        },
        {
            id: 2,
            title: "Total Dish Ordered",
            percentage: "-12.40%",
            value: "23,456",
            status: "down",
            icon: <OrderIcon/>,
        },
        {
            id: 3,
            title: "Total Customer",
            percentage: "+2.40%",
            value: "1,234",
            status: "up",
            icon: <CustomerIcon/>,
        },
    ];
    return (
        <>
            <div className='flex gap-6'>
                {stats.map((stat, index) => (
                <div data-index={index} key={stat.id} className='flex flex-col p-4 w-1/3 bg-gray-900 rounded-lg gap-y-3'>
                    <div className='flex items-center gap-x-3'>
                        <div className='p-2 bg-gray-800 rounded-lg'>
                            {stat.icon}
                        </div>
                        <span className={stat.status == "up" ? "text-xs font-medium text-accent-green" : "text-xs font-medium text-accent-red"}> {stat.percentage} </span>
                        <div className='p-0.5 rounded-full bg-accent-green/20'>
                            { (() => { if (stat.status == "up") {
                                return (
                                    <ArrowUpIcon className='fill-current text-accent-green'/>
                             )                                  
                            } else {
                                return (
                                    <ArrowDownIcon className='fill-current text-accent-red'/>
                                )
                            }
                        })()}
                        </div>
                    </div>
                    <div className='text-3xl font-semibold text-white'>{stat.value}</div>
                    <div className='text-sm tracking-wide text-gray-500'>{stat.title}</div>
                </div>
                ))}
            </div>
        </>
    )
}
 
export default StatsCard