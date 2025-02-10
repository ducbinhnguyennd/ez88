import { useMediaQuery } from 'react-responsive'

import { TrangChuLayout } from '../Layout/LayoutLapTop/TrangChuLayout'
import { TrangChuMB } from '../Layout/LayoutMobile/TrangChuMB'
import { TheThaoLayout } from '../Layout/LayoutLapTop/TheThaoLayout'
import { TheThaoLayoutMB } from '../Layout/LayoutMobile/TheThaoLayoutMB'
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
  },
  {
    path: '/thethao',
    component: () => {
      const isMobile = IsMobile()
      return isMobile ? <TheThaoLayoutMB /> : <TheThaoLayout />
    }
  }
]
const privateRoutes = []
export { publicRoutes, privateRoutes }
