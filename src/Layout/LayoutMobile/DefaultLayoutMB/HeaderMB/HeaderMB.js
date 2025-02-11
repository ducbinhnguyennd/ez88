import './HeaderMB.scss'
function HeaderMB () {
  return (
    <header className='headermb_container'>
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
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderMB
