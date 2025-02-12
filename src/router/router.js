import { useMediaQuery } from 'react-responsive'

import { TrangChuLayout } from '../Layout/LayoutLapTop/TrangChuLayout'
import { TrangChuMB } from '../Layout/LayoutMobile/TrangChuMB'
import { TheThaoLayout } from '../Layout/LayoutLapTop/TheThaoLayout'
import { CasinoLayout } from '../Layout/LayoutLapTop/CasinoLayout'
import { BanCaLayout } from '../Layout/LayoutLapTop/BanCaLayout'
import { NoHuLayout } from '../Layout/LayoutLapTop/NoHuLayout'

import { HoaHongLayout } from '../Layout/LayoutLapTop/HoaHongLayout'
import { ThongTinLayout } from '../Layout/LayoutLapTop/ThongTinLayout'
import { KhuyenMaiLayout } from '../Layout/LayoutMobile/KhuyenMaiLayout'
import { ThongTinLayoutMB } from '../Layout/LayoutMobile/ThongTinLayoutMB'
import { RutTien } from '../Layout/LayoutLapTop/ThongTinLayout/RutTien'
import { ViTien } from '../Layout/LayoutLapTop/ThongTinLayout/ViTien'
import { NapTien } from '../Layout/LayoutLapTop/ThongTinLayout/NapTien'
import { ThongTinCaNhan } from '../Layout/LayoutLapTop/ThongTinLayout/ThongTinCaNhan'
import { LichSuCuoc } from '../Layout/LayoutLapTop/ThongTinLayout/LichSuCuoc'
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
    component: TheThaoLayout
  },
  {
    path: '/casino',
    component: CasinoLayout
  },
  {
    path: '/banca',
    component: BanCaLayout
  },
  {
    path: '/nohu',
    component: NoHuLayout
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
  },
  {
    path: '/khuyenmai',
    component: KhuyenMaiLayout
  },
  {
    path: '/vitien',
    component: ViTien
  },
  {
    path: '/ruttien',
    component: RutTien
  },
  {
    path: '/naptien',
    component: NapTien
  }
  ,
  {
    path: '/thongtincanhan',
    component: ThongTinCaNhan
  }
  ,
  {
    path: '/lichsucuoc',
    component: LichSuCuoc
  }
]
const privateRoutes = []
export { publicRoutes, privateRoutes }
