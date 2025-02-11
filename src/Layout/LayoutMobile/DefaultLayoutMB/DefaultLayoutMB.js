import { HeaderMB } from './HeaderMB'
import { FooterMB } from './FooterMB'
import { MenuMB } from './MenuMB'
import {useState} from 'react'
function DefaultLayoutMB ({ children }) {
    const [activemenu,setactivemenu] = useState(false)
  return (
    <div>
      <HeaderMB />
      <MenuMB activemenu={activemenu} setactivemenu={setactivemenu}/>
      {children}
      <FooterMB activemenu={activemenu} setactivemenu={setactivemenu}/>
    </div>
  )
}

export default DefaultLayoutMB
