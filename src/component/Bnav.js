import React from 'react'
import BottomNavigation from 'reactjs-bottom-navigation'
import { Link } from 'react-router-dom'
import 'reactjs-bottom-navigation/dist/index.css'
import {AiOutlineHome} from 'react-icons/ai'
import {IoPersonOutline,IoBagHandleOutline,IoHeartOutline} from 'react-icons/io5'

const Bnav = () => 

{

    const bottomNavItems = [
        {
          title: 'Home',
          icon: <AiOutlineHome style={{ fontSize: '18px' }} />,
          activeIcon: <AiOutlineHome style={{ fontSize: '18px' }} />
        },
        {
          title: 'Profile',
          icon: <IoPersonOutline style={{ fontSize: '18px' }} />,
          activeIcon: <IoPersonOutline style={{ fontSize: '18px'  }} />
        },
        {
          title: 'Wishlist',
          icon: <IoHeartOutline style={{ fontSize: '18px' }} />,
          activeIcon: <IoHeartOutline style={{ fontSize: '18px' }} />
        },
        {
         
          title: 'Bag',
          icon: <IoBagHandleOutline style={{ fontSize: '18px' }} />,
          activeIcon: <IoBagHandleOutline style={{ fontSize: '18px', color: '#fff' }} />,
          Link:  <Link to="/Addtocart"> <IoBagHandleOutline/> </Link>
        }
      ]

  return (
    <div className='lg:hidden'>
    <BottomNavigation
      items={bottomNavItems}
      defaultSelected={0}
      onItemClick={(item) => console.log(item)}
     
    />
  
</div>
  )
}

export default Bnav
