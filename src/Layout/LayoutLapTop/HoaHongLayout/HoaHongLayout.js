import { useState } from 'react'
import './HoaHongLayout.scss'
import { TongQuanLayout } from './TongQuanLayout'
import { GioiThieuLayout } from './GioiThieuLayout'
import { QuyTacMoiLayout } from './QuyTacMoiLayout'
import { LichSuLayout } from './LichSuLayout'
import { MangluoiLayout } from './MangluoiLayout'

function HoaHongLayout () {
  const [activeTab, setActiveTab] = useState('Tổng quan')

  const tabs = [
    'Tổng quan',
    'Giới thiệu',
    'Quy tắc mời',
    'Lịch sử',
    'Mạng lưới'
  ]

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
        {activeTab === 'Tổng quan' && <TongQuanLayout />}
        {activeTab === 'Giới thiệu' && <GioiThieuLayout />}
        {activeTab === 'Quy tắc mời' && <QuyTacMoiLayout />}
        {activeTab === 'Lịch sử' && <LichSuLayout />}
        {activeTab === 'Mạng lưới' && <MangluoiLayout />}
      </div>
    </div>
  )
}

export default HoaHongLayout
