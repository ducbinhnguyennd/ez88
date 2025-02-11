/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './ThongTinLayout.scss'
import { ThongTinCaNhan } from './ThongTinCaNhan'
import { LichSuCuoc } from './LichSuCuoc'
import { useState } from 'react'

function ThongTinLayout () {
  const [activeTab, setActiveTab] = useState('Thông tin cá nhân')

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
                  <a href='' className='menuprofile_wallet_item'>
                    <img
                      src='/images/vitien.svg'
                      alt=''
                      width={20}
                      height={20}
                    />
                    <span>Ví tiền</span>
                  </a>
                  <a href='' className='menuprofile_wallet_item'>
                    <img
                      src='/images/naptien.svg'
                      alt=''
                      width={20}
                      height={20}
                    />
                    <span>Nạp tiền</span>
                  </a>

                  <a href='' className='menuprofile_wallet_item'>
                    <img
                      src='/images/ruttien.svg'
                      alt=''
                      width={20}
                      height={20}
                    />
                    <span>Rút tiền</span>
                  </a>
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
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ThongTinLayout
