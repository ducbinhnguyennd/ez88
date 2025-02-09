import { useMediaQuery } from 'react-responsive'

import { TrangChuLayout } from '../Layout/LayoutLapTop/TrangChuLayout'
import { TrangChuMB } from '../Layout/LayoutMobile/TrangChuMB'
const IsMobile = () => {
  return useMediaQuery({ query: '(max-width: 767px)' })
}

const publicRoutes = [
    {
    path: '/',
    component: () => {
      const isMobile = IsMobile()
      return isMobile ? <TrangChuMB /> : <TrangChuLayout />
    }
  }

]
const privateRoutes = []
export { publicRoutes, privateRoutes }
