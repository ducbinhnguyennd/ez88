import { useState } from 'react'
import './HoaHongLayout.scss'
import { GioiThieuLayout } from './GioiThieuLayout'
import { MangluoiLayout } from './MangluoiLayout'

function HoaHongLayout () {
  const [activeTab, setActiveTab] = useState('Giới thiệu')

  const tabs = ['Giới thiệu', 'Mạng lưới']

  return (
    <div className='divhoahong_container'>
      <div className='tab_list'>
        {tabs.map(tab => (
          <div
            key={tab}
            className={`tab_item ${activeTab === tab ? 'tab_item_active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            <div className='tab_itemtext'>{tab}</div>
          </div>
        ))}
      </div>
      <div>
        {activeTab === 'Giới thiệu' && <GioiThieuLayout />}
        {activeTab === 'Mạng lưới' && <MangluoiLayout />}
      </div>
    </div>
  )
}

export default HoaHongLayout
