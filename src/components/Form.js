import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='form'>
      <form>
        <label>Ваше ім'я *</label>
        <input type='text' />
        <label>Email</label>
        <input type='email' />
        <label>Телефон *</label>
        <input type='phone' />
        <label>Консультація</label>
        <textarea rows='6' placeholder='Задайте Ваше питання' />
        <button className='btn'>Отримати Консультацію</button>
      </form>
    </div>
  )
}

export default Form
