import React from 'react'
import './TrainingSectin.css'

import { Link } from 'react-router-dom'

import Foto from '../assets/law-firm.jpg'
import Fabio from '../assets/fabio.jpg'

const TrainingSectin = () => {
  return (
    <div className='training'>
      <div className='training-left'>
        <h1>Вартість адвокатських послуг</h1>
        <p>
          На формування вартості послуг, перш за все, впливає обсяг роботи та
          час, який необхідно витратити на вирішення проблеми. Також, варто
          пам’ятати, що існують типові і нетипові ситуації, які потребують більш
          ретельного вивчення матеріалів справи, збору доказів, аналізу судової
          практики, іншої правової роботи. Окрім цього, як правило, але не
          завжди, виникають супутні витрати: сплата судового збору, оплата за
          висновки експертів, дорожні витрати, поштові послуги тощо.
        </p>
        <p>А тому вартість послуг завжди вираховується індивідуально.</p>
        <Link to='/contact'>
          <button className='btn'>Контакти</button>
        </Link>
      </div>
      <div className='training-right'>
        <div className='img-container'>
          <div className='img-stack top'>
            <img src={Fabio} alt='fabio' className='foto1' />
          </div>
          <div className='img-stack bottom'>
            <img src={Foto} alt='foto' className='foto2' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingSectin
