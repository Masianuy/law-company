import React from 'react'
import { Link } from 'react-router-dom'
import {company} from '../../db.json'
import './Training.css'

const Training = () => {
  const {practice} = company;
  const renderDeal = (array) => {
    return array.map(item => <p key={item}>{item}</p>)
  }
  const Card =  ({title, deal}) => {
    return (
      <div className='card'>
        <h4 className='card-title'>{title}</h4>
        <span className='bar'></span>
        {deal}
        <Link to='/contact' className='btn'>
          Запитати
        </Link>
      </div>
    )
  }
  return (
    <div className='training'>
      <div className='card-container'>
        {practice.map(({title, deal}) => <Card key={title} title={title} deal={renderDeal(deal)} />)}
      </div>
    </div>
  )
}

export default Training
