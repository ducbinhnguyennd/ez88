/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
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
          <div>
            <div className='divTieng'>
              <i>
                <img src='/images/vn.webp' alt='' width={24} height={24} />
              </i>
              Tiếng Việt
            </div>
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
                    height='20'
                    width='20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M256 112a56 56 0 1 0-56-56 56 56 0 0 0 56 56zm176 336H80a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm72.87-263.84l-28.51-15.92c-7.44-5-16.91-2.46-22.29 4.68a47.59 47.59 0 0 1-47.23 18.23C383.7 186.86 368 164.93 368 141.4a13.4 13.4 0 0 0-13.4-13.4h-38.77c-6 0-11.61 4-12.86 9.91a48 48 0 0 1-93.94 0c-1.25-5.92-6.82-9.91-12.86-9.91H157.4a13.4 13.4 0 0 0-13.4 13.4c0 25.69-19 48.75-44.67 50.49a47.5 47.5 0 0 1-41.54-19.15c-5.28-7.09-14.73-9.45-22.09-4.54l-28.57 16a16 16 0 0 0-5.44 20.47L104.24 416h303.52l102.55-211.37a16 16 0 0 0-5.44-20.47z'></path>
                  </svg>
                </i>
                <p class='MenuMobile_text_color__DIsiN'>VIP Club</p>
              </div>
            </div>
          </div>
          <div class='Button_container__By3IT'>
            <div class='Button_hight_light__1zxVb Button_rounded_4__aAM9e Button_p_8_12___NQEY Button_w_fit__CkozB Button_btn__z_3IU'>
              <div class='Button_text__FcN3u'>
                <i>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.1191 13.3643L11.126 13.7607H12.9443V13.4805C12.9443 12.8311 13.1973 12.4893 14.1064 11.9629C15.0703 11.3955 15.5693 10.6777 15.5693 9.65234V9.64551C15.5693 8.08008 14.2705 7 12.3223 7C10.2236 7 9.05469 8.18262 9 9.78906V9.85742H10.8525L10.8594 9.80273C10.9004 9.09863 11.4131 8.58594 12.1992 8.58594C12.9717 8.58594 13.498 9.05078 13.498 9.70703V9.71387C13.498 10.3496 13.2314 10.6914 12.3496 11.2178C11.4062 11.7715 11.0508 12.3936 11.1191 13.3643ZM10.9482 15.9619C10.9482 16.5635 11.4473 17.0352 12.0625 17.0352C12.6846 17.0352 13.1836 16.5635 13.1836 15.9619C13.1836 15.3604 12.6846 14.8887 12.0625 14.8887C11.4473 14.8887 10.9482 15.3604 10.9482 15.9619Z'
                      fill='#FF7E1E'
                    ></path>
                    <path
                      d='M11.126 13.7607L11.1191 13.3643C11.0508 12.3936 11.4062 11.7715 12.3496 11.2178C13.2314 10.6914 13.498 10.3496 13.498 9.71387V9.70703C13.498 9.05078 12.9717 8.58594 12.1992 8.58594C11.4131 8.58594 10.9004 9.09863 10.8594 9.80273L10.8525 9.85742H9V9.78906C9.05469 8.18262 10.2236 7 12.3223 7C14.2705 7 15.5693 8.08008 15.5693 9.64551V9.65234C15.5693 10.6777 15.0703 11.3955 14.1064 11.9629C13.1973 12.4893 12.9443 12.8311 12.9443 13.4805V13.7607H11.126ZM12.0625 17.0352C11.4473 17.0352 10.9482 16.5635 10.9482 15.9619C10.9482 15.3604 11.4473 14.8887 12.0625 14.8887C12.6846 14.8887 13.1836 15.3604 13.1836 15.9619C13.1836 16.5635 12.6846 17.0352 12.0625 17.0352Z'
                      fill='white'
                    ></path>
                  </svg>
                </i>
                <p class='MenuMobile_text_color__DIsiN'>Về EZ88</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='menumb_gamecontainer'>
        <div className='grid wide'>
          <div className='menumb_game'>
            <a href='' className='menumb_game_item'></a>
            <a href='' className='menumb_game_item'></a>
            <a href='' className='menumb_game_item'></a>
            <a href='' className='menumb_game_item'></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuMB
