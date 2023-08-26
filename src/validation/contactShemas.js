import * as Yup from 'yup'

const regForPhone = /^\+?3?8?(0[\s-]?\d{2}[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2})$/

export const contactShema = Yup.object().shape({
  firstName: Yup.string()
    .required("Це обов'язкове поле")
    .min(2, 'Мінімум 2 літери')
    .max(256, 'Максимум 256 літери'),
  email: Yup.string()
    .required("Це обов'язкове поле")
    .email('Еmail введен невірно'),
  phone: Yup.string()
    .required("Це обов'язкове поле")
    .matches(regForPhone, 'Телефон введен невірно'),
  body: Yup.string().min(10, 'Мінімум 10 літер')
})
