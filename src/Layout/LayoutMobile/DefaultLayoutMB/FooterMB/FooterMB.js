/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import './FooterMB.scss'
import { useLocation } from 'react-router-dom'
function FooterMB ({ activemenu, setactivemenu }) {
  const location = useLocation()
  const menus = [
    {
      name: 'Trang chủ',
      img1: '/images/trangchu.webp',
      img2: '/images/trangchu2.webp',
      link: '/'
    },
    {
      name: 'Hoa hồng',
      img1: '/images/khuyenmai.webp',
      img2: '/images/khuyenmai2.webp',
      link: '/hoahong'
    },
    {
      name: 'Cá nhân',
      img1: '/images/canhan.webp',
      img2: '/images/canhan2.webp',
      link: '/thongtin'
    }
  ]
  return (
    <div className='footermb_container'>
      <div
        className={`footermb_item ${activemenu ? 'activefooter' : ''}`}
        onClick={() => setactivemenu(!activemenu)}
      >
        <img
          src={activemenu ? '/images/close.webp' : '/images/menumb.webp'}
          alt=''
          width={22}
          height={22}
        />
        <span>{activemenu ? 'Đóng' : 'Menu'}</span>
      </div>
      {menus.map((menu, index) => (
        <a href={`${menu.link}`} key={index}>
          <div
            className={`footermb_item ${
              location.pathname === menu.link ? 'activefooter' : ''
            }`}
          >
            <img
              src={
                location.pathname === menu.link
                  ? `${menu.img2}`
                  : `${menu.img1}`
              }
              alt=''
              width={22}
              height={22}
            />
            <span>{menu.name}</span>
          </div>
        </a>
      ))}
    </div>
  )
}

export default FooterMB
