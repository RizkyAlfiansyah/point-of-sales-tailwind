import React from 'react';
import StatsCard from '../components/StatsCard';
import Sidebar from '../components/sidebar';
import MostOrdered from '../components/MostOrdered';
import MostTypeOfOrder from '../components/MostTypeOfOrder';
import OrderReport from '../components/OrderReport';

export default function Home() {
  return (
    <>
    <div className="flex w-full min-h-screen font-sans bg-gray-800">
      <Sidebar />
    <main className='flex flex-col flex-1 gap-6 p-4'>
      <header>
        <h1 className="text-3xl font-semibold leading-loose text-white">Dashboard</h1>
        <div className="text-gray-200">Tuesday 2 Feb, 2021</div>
      </header>
      <hr className="border-gray-700" />
      <StatsCard />
      <OrderReport />
    </main>
    <aside className="flex flex-col gap-y-6 pt-6 pr-6 w-96">
      <MostOrdered />
      <MostTypeOfOrder />
    </aside>    
    </div>
    </>
  )
}