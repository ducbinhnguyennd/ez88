import './ViTien.scss'

function ViTien () {
  return (
    <div className='vitien_container'>
      <div className='vitien_body'>
        <img src='/images/vnd.webp' alt='' width={24} height={24}></img>
        <div className='vitien_text'>VND</div>
        <div className='vitien_tien'>0</div>
      </div>
      <div className='vitien_body'>
        <img src='/images/usdt.svg' alt=''></img>
        <div className='vitien_text'>USD</div>
        <div className='vitien_tien'>$0</div>
      </div>
    </div>
  )
}

export default ViTien
