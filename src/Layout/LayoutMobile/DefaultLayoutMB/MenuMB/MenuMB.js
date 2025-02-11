import './MenuMB.scss'
function MenuMB ({ activemenu, setactivemenu }) {
  return (
    <div className={`menumb_container ${activemenu ? 'active' : ''}`}>
      <div className='headermb_header'>
        <div className='headermb'>
          <div className='headermb_groupcontrol'>
            <div className='headermb_control_left'>
              <a href='/'>
                <img
                  src='/images/logo.webp'
                  alt=''
                  width={100}
                  height={40}
                  className='imglogo_mb'
                />
              </a>
            </div>
            <div className='headermb_control_right'>
              <div className='headermb_groupbtn'>
                <div className='Button_container__By3IT Button_maxContent__29WwM'>
                  <div className='Button_textLight__bOO84 Button_bold__oPRj9 Button_rounded_4__aAM9e Button_maxContent__29WwM Button_small__ZiSjz Button_btn__z_3IU'>
                    <div className='Button_text__FcN3u'>Đăng nhập</div>
                  </div>
                </div>
                <div class='Button_container__By3IT Button_maxContent__29WwM'>
                  <div class='Button_bold__oPRj9 Button_primaryLight__xb5yf Button_rounded_4__aAM9e Button_maxContent__29WwM Button_small__ZiSjz Button_p_8_8__lQMC1 Button_btn__z_3IU'>
                    <div class='Button_text__FcN3u'>Tham gia ngay</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='menumb_header_tong'>
        <div className='menumb_header'>
          <div className='divTieng'>
            <i>
              <img src='/images/vn.webp' alt='' width={24} height={24} />
            </i>
            Tiếng Việt
          </div>
          <div className='divsangtoi'>
            <div className='divsang'>
              <div className={`diviconsang`}>
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
              <div className={`divicontoi`}>
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
          <div class='Button_container__By3IT'>
            <div class='Button_hight_light__1zxVb Button_rounded_4__aAM9e Button_p_8_12___NQEY Button_w_fit__CkozB Button_btn__z_3IU'>
              <div class='Button_text__FcN3u'>
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
                <p class='MenuMobile_text_color__DIsiN'>VIP Club</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuMB
