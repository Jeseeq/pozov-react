import React from 'react'
import './HomeView.scss'


export const IconRow = () => (
  <div className='margin-top-30'>
    <div className='row content-boxes margin-bottom-20'>
      <div className='col-md-4 md-margin-bottom-30'>
        <h4 className='heading-sm'>
          <a className='link-bg-icon' href='#'>
            <i className='icon-custom fa fa-thumbs-o-up'></i>
            <span>Стягнення з/п</span>
          </a>
        </h4>
        <p className='text-justify'>Система 'вопрос-ответ' понятна и удобна пользователям без юридической подготовки.</p>
      </div>
      <div className='col-md-4 md-margin-bottom-30'>
        <h4 className='heading-sm'>
          <a className='link-bg-icon'>
            <i className='icon-custom fa fa-thumbs-o-up'></i>
            <span>Поновлення на роботі</span>
          </a>
        </h4>
        <p className='text-justify'>Договор за 10-15 минут в любое удобное для Вас время. .</p>
      </div>
      <div className='col-md-4'>
        <h4 className='heading-sm'>
          <a className='link-bg-icon' href='#'>
            <i className='icon-custom fa fa-thumbs-o-up'></i>
            <span>Відмова у прийнятті на роботу</span>
          </a>
        </h4>
        <p className='text-justify'>Договор создается индивидуально под Ваши условия. Мы исключили любую шаблонность. .</p>
      </div>
    </div>
    <div className='row content-boxes margin-bottom-20'>
      <div className='col-md-4 md-margin-bottom-20'>
        <h4 className='heading-sm'>
          <a className='link-bg-icon' href='#'>
            <i className='icon-custom fa fa-thumbs-o-up'></i>
            <span>Зміна дати і формулювання причини звільнння</span>
          </a>
        </h4>
        <p className='text-justify'>Составить онлайн-договор стоит всего 800 грн..</p>
      </div>
      <div className='col-md-4 md-margin-bottom-20'>
        <h4 className='heading-sm'>
          <a className='link-bg-icon' href='#'>
            <i className='icon-custom fa fa-thumbs-o-up'></i>
            <span>Оплата за час вимушеного прогулу</span>
          </a>
        </h4>
        <p className='text-justify'>Вы получаете юридически грамотные и полностью легитимные документы. ..</p>
      </div>
      <div className='col-md-4'>
        <h4 className='heading-sm'>
          <a className='link-bg-icon' href='#'>
            <i className='icon-custom fa fa-thumbs-o-up'></i>
            <span>Інше</span>
          </a>
        </h4>
        <p className='text-justify'>Только последние версии документов.</p>
      </div>
    </div>
  </div>
)
export default IconRow
