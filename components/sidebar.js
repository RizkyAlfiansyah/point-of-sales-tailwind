import SvgStore from '../public/icons/svgs/Store.js';
import SvgHome from '../public/icons/svgs/Home.js';
import SvgMessage from '../public/icons/svgs/Message.js';
import SvgNotification from '../public/icons/svgs/Notification.js';
import SvgLogout from '../public/icons/svgs/Logout.js';
import SvgDiscount from '../public/icons/svgs/Discount.js';
import SvgGraph from '../public/icons/svgs/Graph.js';
import SvgSettings from '../public/icons/svgs/Settings.js';

const Sidebar = () => {
    return (
        <>
            <div className="flex flex-col gap-y-4 items-center py-8 w-24 bg-gray-900">
                <button className="p-2 bg-opacity-20 rounded-xl bg-primary">
                    <SvgStore />
                </button>
                <div className='flex flex-col gap-y-4 items-end self-end'>
                    <div className='bg-gray-800 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top  after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom'>
                        <button className='p-4 my-4 mr-4 ml-3 rounded-xl hover:bg-primary '>
                            <SvgHome />
                        </button>
                    </div>
                    <button className='p-4 my-4 mr-4 ml-3 rounded-xl hover:bg-primary '>
                            <SvgDiscount />
                    </button>
                    <button className='p-4 my-4 mr-4 ml-3 rounded-xl hover:bg-primary '>
                            <SvgGraph />
                    </button>
                    <button className='p-4 my-4 mr-4 ml-3 rounded-xl hover:bg-primary '>
                            <SvgNotification />
                    </button>
                    <button className='p-4 my-4 mr-4 ml-3 rounded-xl hover:bg-primary '>
                            <SvgSettings />
                    </button>
                    <button className='p-4 my-4 mr-4 ml-3 rounded-xl hover:bg-primary '>
                            <SvgLogout />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar;