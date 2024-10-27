
import Header from '../component/header/Header'
import { Outlet } from 'react-router-dom'
import Offer from '../component/offers/Offer'

function Layout() {
  return (
    <>
    <Header/>
    <Offer/>
    <Outlet />
    
    </>
  )
}

export default Layout