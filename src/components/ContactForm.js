import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { contactShema } from '../validation/contactShemas'
import './ContactForm.css'

const ContactForm = () => {
  const handleSubmit = (values, formikBag) => {
    console.log(values)
    formikBag.resetForm()
  }
  const initialValues = {
    firstName: '',
    email: '',
    phone: '',
    body: ''
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={contactShema}
    >
      {formikProps => (
        <Form className='form'>
          <label>
            Ваше ім'я *
            <Field type='text' name='firstName' />
            <ErrorMessage name='firstName'>
              {msg => <p className='input-error'>{msg}</p>}
            </ErrorMessage>
          </label>
          <label>
            Email *
            <Field type='email' name='email' />
            <ErrorMessage name='firstName'>
              {msg => <p className='input-error'>{msg}</p>}
            </ErrorMessage>
          </label>
          <label>
            Телефон *
            <Field type='phone' name='phone' />
            <ErrorMessage name='firstName'>
              {msg => <p className='input-error'>{msg}</p>}
            </ErrorMessage>
          </label>
          <label>
            Консультація
            <Field
              as='textarea'
              name='body'
              rows='6'
              placeholder='Задайте Ваше питання'
            />
          </label>
          <button type='submit' className='btn'>
            Отримати Консультацію
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
