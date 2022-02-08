import StoreICon from '../public/icons/store.svg';
import HomeIcon from '../public/icons/home.svg';
import MessageIcon from '../public/icons/message.svg';
import NotificationIcon from '../public/icons/notification.svg';
import LogoutIcon from '../public/icons/logout.svg';
import DiscountIcon from '../public/icons/discount.svg';
import GraphIcon from '../public/icons/graph.svg';
import SettingsIcon from '../public/icons/settings.svg';

const Sidebar = () => {
    return (
        <>
            <div className="flex flex-col gap-y-4 items-center py-8 w-24 bg-gray-900">
                <button className="p-2 bg-opacity-20 rounded-xl bg-primary">
                    <StoreICon />
                </button>
                <div className='flex flex-col gap-y-4 items-end self-end'>
                    <div className='bg-gray-800 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top  after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom'>
                        <button className='p-4 my-4 mr-4 ml-3 rounded-xl bg-primary '>
                            <HomeIcon />
                        </button>
                    </div>
                    <button className='p-4 my-4 mr-4 ml-3 rounded-xl '>
                            <DiscountIcon />
                    </button>
                    <button className='p-4 my-4 mr-4 ml-3 rounded-xl '>
                            <GraphIcon />
                    </button>
                    <button className='p-4 my-4 mr-4 ml-3 rounded-xl '>
                            <MessageIcon />
                    </button>
                    <button className='p-4 my-4 mr-4 ml-3 rounded-xl text-white '>
                            <NotificationIcon />
                    </button>
                    <button className='p-4 my-4 mr-4 ml-3 rounded-xl '>
                            <SettingsIcon />
                    </button>
                    <button className='p-4 my-4 mr-4 ml-3 rounded-xl '>
                            <LogoutIcon />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar;