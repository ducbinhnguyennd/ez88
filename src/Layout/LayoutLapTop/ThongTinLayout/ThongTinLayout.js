/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './ThongTinLayout.scss'
import { ThongTinCaNhan } from './ThongTinCaNhan'
import { LichSuCuoc } from './LichSuCuoc'
import { useState } from 'react'
import { TongQuatViTien } from './TongQuatViTien'

function ThongTinLayout () {
  const [activeTab, setActiveTab] = useState('Thông tin cá nhân')
  const [tieudechuy, settieudechuy] = useState('')
  const [lichuy, setlichuy] = useState([])

  const tabs = [
    {
      img: '/images/thongtincn.svg',
      name: 'Thông tin cá nhân'
    },
    {
      img: '/images/lichsucuoc.svg',
      name: 'Lịch sử cược'
    },
    {
      img: '/images/dangxuat.svg',
      name: 'Đăng xuất'
    }
  ]
  const wallet = [
    {
      img: '/images/vitien.svg',
      name: 'Ví tiền',
      h2: 'Chú ý',
      li: [
        'Hệ thống không thu phí khi chuyển tiền giữa các ví.',
        'Sử dụng chức năng Rút hết về ví chính để rút toàn bộ các ví game về ví chính',
        'Mỗi ví game sẽ có tỷ giá quy đổi khác nhau.',
        'Hội viên vui lòng liên hệ CSKH để được hỗ trợ'
      ]
    },
    {
      img: '/images/naptien.svg',
      name: 'Nạp tiền',
      h2: 'Quy định:',
      li: [
        'Giới hạn số tiền tùy theo ngân hàng đang sử dụng',
        'Mỗi lần giao dịch chỉ được thực hiện 1 lần duy nhất',
        'Giao dịch trong thời gian quy định',
        'Trong trường hợp khác ngân hàng chỉ nhận giao dịch nhanh 24/7',
        'Phí người chuyển trả',
        'Kiểm tra đúng số tài khoản, nội dung, số tiền trước khi giao dịch',
        'Các giao dịch sai thông tin sẽ không được hoàn trả'
      ]
    },
    {
      img: '/images/ruttien.svg',
      name: 'Rút tiền',
      h2: 'Chú ý:',
      li: [
        'Nhập đúng số tài khoản, tên chủ tài khoản',
        'Các giao dịch sai tên tài khoản sẽ k được hoàn tiền',
        'Sau khi rút xin đợi 1 khoảng thời gian để xử lý',
        'Để đảm bảo quyền lợi của mình , hội viên vui lòng sử dụng tài khoản ngân hàng chính chủ để giao dịch với hệ thống . không liên kết 1 tài khoản ngân hàng cho 2 hoặc nhiều tài khoản game .'
      ]
    }
  ]

  return (
    <main className='thongtin_container'>
      <div className='menuprofile_container'>
        <div className='divthongtintong'>
          <div className='menuprofile_main'>
            <div className='menuprofile_menu'>
              <div className='menuprofile_sidebar'>
                <div className='menuprofile_info'>
                  <div>
                    <div className='avatar_container'>
                      <span>
                        <img src='/images/avatar.webp' alt='' />
                      </span>
                    </div>
                  </div>
                  <div className='menuprofile_grouptext'>
                    <span>tentoila99</span>
                    <div className='menuprofile_vip'>
                      <div className='menuprofile_vip_item'>
                        <i>
                          <img
                            src='/images/hang.png'
                            alt=''
                            width={24}
                            height={24}
                          />
                        </i>
                        VIP 0
                      </div>
                    </div>
                  </div>
                </div>
                <div className='menuprofile_wallet'>
                  {wallet.map((item, index) => (
                    <a
                      href=''
                      className={`menuprofile_wallet_item ${
                        activeTab === item.name
                          ? 'menuprofile_wallet_item_active'
                          : ''
                      }`}
                      key={index}
                      onClick={e => {
                        e.preventDefault()
                        setActiveTab(item.name)
                        settieudechuy(item.h2)
                        setlichuy(item.li)
                      }}
                    >
                      <img src={`${item.img}`} alt='' width={20} height={20} />
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
                <div></div>
                <div className='menuprofile_list'>
                  {tabs.map((tab, index) => (
                    <div
                      className={`menulist_item ${
                        activeTab === tab.name ? 'menulist_item_active' : ''
                      }`}
                      key={index}
                      onClick={() => setActiveTab(tab.name)}
                    >
                      <img
                        src={`${tab.img}`}
                        alt=''
                        width={20}
                        height={20}
                        style={{ color: 'transparent' }}
                      />
                      <span>{tab.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='menuprofile_content'>
              {activeTab === 'Thông tin cá nhân' && <ThongTinCaNhan />}
              {activeTab === 'Lịch sử cược' && <LichSuCuoc />}
              {activeTab === 'Nạp tiền' && (
                <TongQuatViTien
                  name={activeTab}
                  setactivetab={setActiveTab}
                  setlichuy={setlichuy}
                  settieudechuy={settieudechuy}
                  tieudechuy={tieudechuy}
                  lichuy={lichuy}
                />
              )}
              {activeTab === 'Rút tiền' && (
                <TongQuatViTien
                  name={activeTab}
                  setactivetab={setActiveTab}
                  setlichuy={setlichuy}
                  settieudechuy={settieudechuy}
                  tieudechuy={tieudechuy}
                  lichuy={lichuy}
                />
              )}
              {activeTab === 'Ví tiền' && (
                <TongQuatViTien
                  name={activeTab}
                  setactivetab={setActiveTab}
                  setlichuy={setlichuy}
                  settieudechuy={settieudechuy}
                  tieudechuy={tieudechuy}
                  lichuy={lichuy}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ThongTinLayout
