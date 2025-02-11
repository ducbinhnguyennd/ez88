import './FooterMB.scss'
function FooterMB ({ activemenu, setactivemenu }) {
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
      <div className='footermb_item'>
        <img src='/images/trangchu.webp' alt='' width={22} height={22} />
        <span>Trang chủ</span>
      </div>
      <div className='footermb_item'>
        <img src='/images/khuyenmai.webp' alt='' width={22} height={22} />
        <span>Hoa hồng</span>
      </div>
      <div className='footermb_item'>
        <img src='/images/canhan.webp' alt='' width={22} height={22} />
        <span>Cá nhân</span>
      </div>
    </div>
  )
}

export default FooterMB
