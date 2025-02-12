import { useMediaQuery } from 'react-responsive'

import { TrangChuLayout } from '../Layout/LayoutLapTop/TrangChuLayout'
import { TrangChuMB } from '../Layout/LayoutMobile/TrangChuMB'
import { TheThaoLayout } from '../Layout/LayoutLapTop/TheThaoLayout'
import { TheThaoLayoutMB } from '../Layout/LayoutMobile/TheThaoLayoutMB'
import { CasinoLayout } from '../Layout/LayoutLapTop/CasinoLayout'
import { CasinoLayoutMB } from '../Layout/LayoutMobile/CasinoLayoutMB'
import { BanCaLayout } from '../Layout/LayoutLapTop/BanCaLayout'
import { BanCaLayoutMB } from '../Layout/LayoutMobile/BanCaLayoutMB'
import { NoHuLayout } from '../Layout/LayoutLapTop/NoHuLayout'
import { NoHuLayoutMB } from '../Layout/LayoutMobile/NoHuLayoutMB'
import { HoaHongLayout } from '../Layout/LayoutLapTop/HoaHongLayout'
import { ThongTinLayout } from '../Layout/LayoutLapTop/ThongTinLayout'
import { KhuyenMaiLayout } from '../Layout/LayoutMobile/KhuyenMaiLayout'
import {ThongTinLayoutMB} from '../Layout/LayoutMobile/ThongTinLayoutMB'
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
  },
  {
    path: '/casino',
    component: () => {
      const isMobile = IsMobile()
      return isMobile ? <CasinoLayoutMB /> : <CasinoLayout />
    }
  },
  {
    path: '/banca',
    component: () => {
      const isMobile = IsMobile()
      return isMobile ? <BanCaLayoutMB /> : <BanCaLayout />
    }
  },
  {
    path: '/nohu',
    component: () => {
      const isMobile = IsMobile()
      return isMobile ? <NoHuLayoutMB /> : <NoHuLayout />
    }
  },
  {
    path: '/hoahong',
    component: HoaHongLayout
  },
  {
    path: '/thongtin',
    component: () => {
      const isMobile = IsMobile()
      return isMobile ? <ThongTinLayoutMB /> : <ThongTinLayout />
    }
  }
  ,
  {
    path: '/khuyenmai',
    component: KhuyenMaiLayout
  }
]
const privateRoutes = []
export { publicRoutes, privateRoutes }
