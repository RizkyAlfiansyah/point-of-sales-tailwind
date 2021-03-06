import React from 'react';
import OptionsIcon from '../public/icons/options.svg';
import Image from 'next/image';

const OrderReport = () => {
    const orders = [
        {
            id: 1,
            avatar: "avatar-1.png",
            name: "Eren Jaegar",
            menu: "Spicy seasoned seafood noodles",
            total: "$125",
            status: "completed",
        },
        {
            id: 2,
            avatar: "avatar-2.png",
            name: "Reiner Braunn",
            menu: "Salted Pasta with mushroom sauce",
            total: "$145",
            status: "preparing",
        },
        {
            id: 3,
            avatar: "avatar-3.png",
            name: "Levi Ackerman",
            menu: "Beef dumpling in hot and sour soup",
            total: "$105",
            status: "pending",
        },
        {
            id: 4,
            avatar: "avatar-4.png",
            name: "Historia Reiss",
            menu: "Hot spicy fried rice with omelet",
            total: "$45",
            status: "completed",
        },
        {
            id: 5,
            avatar: "avatar-5.png",
            name: "Armin Arlert",
            menu: "Spicy seasoned seafood noodles",
            total: "$125",
            status: "completed",
        },
        {
            id: 6,
            avatar: "avatar-6.png",
            name: "Hanji Zoe",
            menu: "Hot spicy fried rice with omelet",
            total: "$245",
            status: "completed",
        },
    ];
    return (
        <>
            <div className='p-6 bg-gray-900 rounded-lg'>
                <div className='flex justify-between items-center pb-4'>
                    <h2 className='text-xl font-semibold leading-loose text-white'> Order Report </h2>
                    <button className="flex py-3 px-4 rounded-lg border border-gray-700 gap-x-2.5">
                        <OptionsIcon />
                        <span className="text-sm text-white">Filter order</span>
                    </button>
                </div>
                <table className='w-full'>
                    <thead>
                        <tr className="text-sm font-semibold text-white">
                        <td className="py-4 border-b border-gray-700">Customer</td>
                        <td className="py-4 border-b border-gray-700">Menu</td>
                        <td className="py-4 border-b border-gray-700 text-right">Total Payment</td>
                        <td className="py-4 border-b border-gray-700 text-center">Status</td>
                        </tr>
                    </thead>
                    <tbody>
                    {orders.map((order, index) => (
                        <tr data-index={index} key={order.id} className="text-sm text-gray-500">
                        <td className="py-4">
                            <div className="flex gap-4 items-center">
                            <Image width= {32} height={32} src= {`/../public/img/${order.avatar}`} alt="" />
                            <span> { order.name } </span>
                            </div>
                        </td>
                        <td className="py-4">{order.menu}</td>
                        <td className="py-4 tabular-nums text-right">{order.total}</td>
                        <td className="py-4 flex justify-center">
                        <span className={
                             order.status == 'completed' ? "flex justify-center py-1 w-24 font-medium capitalize rounded-full bg-accent-green/20 text-accent-green" : 
                             order.status == 'preparing'? "flex justify-center py-1 w-24 font-medium capitalize rounded-full bg-accent-purple/20 text-accent-purple" : 
                             "flex justify-center py-1 w-24 font-medium capitalize rounded-full bg-accent-orange/20 text-accent-green"}>{order.status}</span>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default OrderReport;