import { Header } from './Header'
import { Footer } from './Footer'
import './DefaultLayout.scss'
function DefaultLayout ({ children }) {
  return (
    <div className='baselayout_container'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default DefaultLayout
