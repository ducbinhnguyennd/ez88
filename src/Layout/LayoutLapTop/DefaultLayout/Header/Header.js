import './Header.scss'
function Header () {
  return (
    <div>
      <div className='header'>
        <div className='divheader'>
          <div className='divlogotieng'>
            <a href='/'>
              <img src='/images/logo.webp' alt='' width={140} height={40} />
            </a>
            <div className='divTieng'>
              <i>
                <img src='/images/vn.webp' alt='' width={24} height={24} />
              </i>
              Tiếng Việt
            </div>
            <div className='divsangtoi'>
              <div className='divsang'>
                <div className='diviconsang'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    stroke-width='0'
                    viewBox='0 0 24 24'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z'></path>
                  </svg>
                </div>
                <div className='divicontoi'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    stroke-width='0'
                    viewBox='0 0 24 24'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z'></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className='GroupControlHeader_group_chat__ZQeHs'>
            <div className='GroupAuth_groupBtn__HWS4v'>
              <div className='Button_container__By3IT Button_maxContent__29WwM'>
                <div className='Button_textLight__bOO84 Button_bold__oPRj9 Button_rounded_4__aAM9e Button_maxContent__29WwM Button_small__ZiSjz Button_btn__z_3IU'>
                  <div className='Button_text__FcN3u'>Đăng nhập</div>
                </div>
              </div>
              <div className='Button_container__By3IT Button_maxContent__29WwM'>
                <div className='Button_bold__oPRj9 Button_primaryLight__xb5yf Button_rounded_4__aAM9e Button_maxContent__29WwM Button_small__ZiSjz Button_btn__z_3IU'>
                  <div className='Button_text__FcN3u'>Tham gia ngay</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='headermenu'>
        <div className='divheadermenu'>
          <div className='headermainmenu'>
            <ul role='menu' className='headerlist'>
              <li>
                <a href='/' className='headeritem'>
                  <img
                    width={24}
                    height={24}
                    src='/images/trangchu.webp'
                    alt=''
                  />
                  <span>Trang Chủ</span>
                </a>
              </li>
              <li>
                <a href='/' className='headeritem'>
                  <img
                    width={24}
                    height={24}
                    src='/images/trangchu.webp'
                    alt=''
                  />
                  <span>Thể thao</span>
                </a>
              </li>

              <li>
                <a href='/' className='headeritem'>
                  <img
                    width={24}
                    height={24}
                    src='/images/trangchu.webp'
                    alt=''
                  />
                  <span>Casino</span>
                </a>
              </li>

              <li>
                <a href='/' className='headeritem'>
                  <img
                    width={24}
                    height={24}
                    src='/images/trangchu.webp'
                    alt=''
                  />
                  <span>Slots</span>
                </a>
              </li>

              <li>
                <a href='/' className='headeritem'>
                  <img
                    width={24}
                    height={24}
                    src='/images/trangchu.webp'
                    alt=''
                  />
                  <span>Bắn cá</span>
                </a>
              </li>

              <li>
                <a href='/' className='headeritem'>
                  <img
                    width={24}
                    height={24}
                    src='/images/trangchu.webp'
                    alt=''
                  />
                  <span>Xổ số</span>
                </a>
              </li>

              <li>
                <a href='/' className='headeritem'>
                  <img
                    width={24}
                    height={24}
                    src='/images/trangchu.webp'
                    alt=''
                  />
                  <span>Khuyến mãi</span>
                </a>
              </li>
            </ul>
            <div style={{ marginLeft: 'auto' }}>
              <div className='Button_container__By3IT'>
                <div className='Button_w_fit__CkozB Button_p_8_12___NQEY Button_rounded_4__aAM9e Button_green_outline_2__zX_0j'>
                  <div className='Button_text__FcN3u'>
                    <i>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 512 512'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M256 112a56 56 0 1 0-56-56 56 56 0 0 0 56 56zm176 336H80a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm72.87-263.84l-28.51-15.92c-7.44-5-16.91-2.46-22.29 4.68a47.59 47.59 0 0 1-47.23 18.23C383.7 186.86 368 164.93 368 141.4a13.4 13.4 0 0 0-13.4-13.4h-38.77c-6 0-11.61 4-12.86 9.91a48 48 0 0 1-93.94 0c-1.25-5.92-6.82-9.91-12.86-9.91H157.4a13.4 13.4 0 0 0-13.4 13.4c0 25.69-19 48.75-44.67 50.49a47.5 47.5 0 0 1-41.54-19.15c-5.28-7.09-14.73-9.45-22.09-4.54l-28.57 16a16 16 0 0 0-5.44 20.47L104.24 416h303.52l102.55-211.37a16 16 0 0 0-5.44-20.47z'></path>
                      </svg>
                    </i>
                    <p className='pvipclub'>VIP Club</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='headersupport'>
              <img width={24} height={24} src='/images/support.webp' alt='' />
              <span>Hỗ trợ trực tuyến</span>
            </div>
          </div>
        </div>
      </div>
      <div className='headernotifi'>
        <div className='baselayout'>
          <div className='headermainnotifi'>
            <div className='headertextnotifi'>
              <i>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 1024 1024'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.6c-3.7 11.6-5.6 23.9-5.6 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1z'></path>
                </svg>
              </i>
              <div className='chuchay rfm-marquee-container'>
                <div></div>
                <div className='divchu rfm-marquee'>
                  <div className='rfm-initial-child-container'>
                    <div className='rfm-child'>
                      <p className='pvipclub1'>
                        EZ88 - Nhà cái uy tín số một thị trường Châu Á, Hỗ trợ
                        đa dạng các cổng thanh toán: ATM, Banking, MOMO,
                        USDT,... Khuyến mãi ngập tràn theo tháng, thỏa sức cá
                        cược. CSKH hỗ trợ nhiệt tình 24h/7.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='divchu rfm-marquee'>
                  <div className='rfm-child'>
                    <p className='pvipclub1'>
                      EZ88 - Nhà cái uy tín số một thị trường Châu Á, Hỗ trợ đa
                      dạng các cổng thanh toán: ATM, Banking, MOMO, USDT,...
                      Khuyến mãi ngập tràn theo tháng, thỏa sức cá cược. CSKH hỗ
                      trợ nhiệt tình 24h/7.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class='headerclocknotifi'>00:40:05 GMT+7</div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
