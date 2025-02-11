import { NapTien } from '../NapTien'
import { RutTien } from '../RutTien'
import { ViTien } from '../ViTien'
import './TongQuatViTien.scss'
import { useState } from 'react'

function TongQuatViTien ({
  name,
  setactivetab,
  lichuy,
  tieudechuy,
  settieudechuy,
  setlichuy
}) {
  const tabs = [
    {
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
      name: 'Rút tiền',
      h2: 'Chú ý:',
      li: [
        'Nhập đúng số tài khoản, tên chủ tài khoản',
        'Các giao dịch sai tên tài khoản sẽ k được hoàn tiền',
        'Sau khi rút xin đợi 1 khoảng thời gian để xử lý',
        'Để đảm bảo quyền lợi của mình , hội viên vui lòng sử dụng tài khoản ngân hàng chính chủ để giao dịch với hệ thống . không liên kết 1 tài khoản ngân hàng cho 2 hoặc nhiều tài khoản game .'
      ]
    },
    {
      name: 'Ví tiền',
      h2: 'Chú ý',
      li: [
        'Hệ thống không thu phí khi chuyển tiền giữa các ví.',
        'Sử dụng chức năng Rút hết về ví chính để rút toàn bộ các ví game về ví chính',
        'Mỗi ví game sẽ có tỷ giá quy đổi khác nhau.',
        'Hội viên vui lòng liên hệ CSKH để được hỗ trợ'
      ]
    }
  ]

  return (
    <div className='tongquatvitien_container'>
      <div className='tongquatvitien_tong'>
        <div className='tongquatvitien_header'>
          {tabs.map((tab, index) => (
            <div
              className={`tongquatvitien_header_item ${
                name === tab.name ? 'tongquatvitien_header_item_active' : ''
              }`}
              key={index}
              onClick={() => {
                setactivetab(tab.name)
                setlichuy(tab.li)
                settieudechuy(tab.h2)
              }}
            >
              {tab.name}
            </div>
          ))}
        </div>
        <div className='tongquavitien_body'>
          {name === 'Nạp tiền' && <NapTien />}
          {name === 'Rút tiền' && <RutTien />}
          {name === 'Ví tiền' && <ViTien />}
        </div>
      </div>
      <div className='tongquatvitien_chuy'>
        <h3 className='tieude_chuy'>{tieudechuy}</h3>

        <ul>
          {lichuy.map((chuy, index) => (
            <li key={index}>{chuy}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TongQuatViTien
