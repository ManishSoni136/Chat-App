import React, { useEffect, useRef, useState } from 'react'
import { Divider } from 'rsuite'
import DashboardToggle from '../dashboard/DashboardToggle'
import CreateRoomBtnModal from './CreateRoomBtnModal'
import ChatRoomList from './rooms/ChatRoomList'

const Sidebar = () => {
    const topSidebarRef = useRef();
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if(topSidebarRef.current) {
            setHeight(topSidebarRef.current.scrollHeight);
        }
    }, [topSidebarRef])

    return (
        <div className='h-100 pt-2'>
            <div>
                <DashboardToggle />
                <CreateRoomBtnModal />
                <Divider>Join conversation</Divider>
            </div>
            <ChatRoomList aboveElHeight={height}/>

            bottom
        </div>
    )
}

export default Sidebar