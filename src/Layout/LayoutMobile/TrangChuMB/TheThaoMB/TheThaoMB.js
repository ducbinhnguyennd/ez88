import './TheThaoMB.scss'
function TheThaoMB () {
  const games = [
    {
      img: '/images/saba.webp',
      name: 'SABA Sports'
    },
    {
      img: '/images/bti.webp',
      name: 'BTI Sports'
    },
    {
      img: '/images/panda.webp',
      name: 'PANDA Sports'
    },
    {
      img: '/images/afb.webp',
      name: 'AFB Sports'
    },
    {
      img: '/images/cockfight.webp',
      name: 'CockFight'
    }
  ]
  return (
    <div className='thethaomenumb_container'>
      <div className='mainlivethethao_container'>
        <div className='mainlivethethao'>
          <div>
            <div className='mainlivethethao_list'>
              <div className='GridColumn_container__QbIKO GridColumn_col_5__H4lCj GridColumn_sm__eo_P2 GridColumn_px_0__CR9zN'>
                {games.map((game, index) => (
                  <div className='GotoGame_container__azuAM' key={index}>
                    <div className='CardGame_container__NneKf'>
                      <img src={`${game.img}`} alt='' width={600} height={90} />
                    </div>
                    <div className='texthethaomb'>{game.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheThaoMB
