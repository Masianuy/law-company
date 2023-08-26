import React from 'react'
import { Link } from 'react-router-dom'
import './PricingSection.css'

const Pricing = () => {
  function Card (props) {
    return (
      <div className='card'>
        <h3 className='card-title'>{props.title}</h3>
        <span className='bar'></span>
        <p>{props.one}</p>
        <p>{props.two}</p>
        <p>{props.three}</p>
        <p>{props.four}</p>
        <p>{props.five}</p>
        <Link to='/contact' className='btn'>
          Запитати
        </Link>
      </div>
    )
  }
  return (
    <div className='pricing'>
      <div className='card-container'>
        <Card
          title='Цивільні справи'
          one='Сімейні спори'
          two='Земельні спори'
          three='Трудові спори'
          four='Спадкові спори'
          five='Кредитні спори'
        />
        <Card
          title='Захист бізнесу'
          one='Своєчасний та комплексний захист бізнесу'
          two='Зняття арешту з майна'
          three='Супровід при проведенні слідчих дій (обшук, огляд, допит)'
          four='Повернення вилучених речей під час обшуку та огляду'
          five='Оформлення договорів конфіденційності з працівниками'
        />
        <Card
          title='Кримінальне право та процес'
          one='Захист підозрюваного'
          two='Захист обвинуваченого'
          three='Робота зі свідками та збір доказів'
          four='Представництво у правоохоронних органах'
          five='Супровід при проведенні слідчих дій (обшук, допит)'
        />
      </div>
    </div>
  )
}

export default Pricing
