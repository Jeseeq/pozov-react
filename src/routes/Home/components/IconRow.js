import React from 'react'

const ContentBox = ({children}) => (
  <div className='row content-boxes margin-bottom-20'>
    {children}
  </div>
)
const BoxItem = ({children, text}) => (
  <div className='col-md-4 md-margin-bottom-20'>
    <h4 className='heading-sm'>
      {children}
    </h4>
    <p className='text-justify'>{text}</p>
  </div>
)
export const IconRow = () => (
  <div className='margin-top-30'>
    <ContentBox>
      <BoxItem text='Система вопрос-ответ понятна и удобна пользователям без юридической подготовки.'>
        <a href='#'>
          <i className='icon-custom fa fa-thumbs-o-up'></i>
          <span>Стягнення з/п</span>
        </a>
      </BoxItem>
      <BoxItem text='Договор за 10-15 минут в любое удобное для Вас время.'>
        <a href='#'>
          <i className='icon-custom fa fa-thumbs-o-up'></i>
          <span>Поновлення на роботі</span>
        </a>
      </BoxItem>
      <BoxItem text='Договор создается индивидуально под Ваши условия. Мы исключили любую шаблонность. '>
        <a href='#'>
          <i className='icon-custom fa fa-thumbs-o-up'></i>
          <span>Відмова у прийнятті на роботу</span>
        </a>
      </BoxItem>
    </ContentBox>
    <ContentBox>
      <BoxItem text='Составить онлайн-договор стоит всего 800 грн..'>
        <a href='#'>
          <i className='icon-custom fa fa-thumbs-o-up'></i>
          <span>Зміна дати і формулювання причини звільнння</span>
        </a>
      </BoxItem>
      <BoxItem text='Вы получаете юридически грамотные и полностью легитимные документы.'>
        <a href='#'>
          <i className='icon-custom fa fa-thumbs-o-up'></i>
          <span>Оплата за час вимушеного прогулу</span>
        </a>
      </BoxItem>
      <BoxItem text='Только последние версии документов.'>
        <a href='#'>
          <i className='icon-custom fa fa-thumbs-o-up'></i>
          <span>Інше</span>
        </a>
      </BoxItem>
    </ContentBox>
  </div>
)
export default IconRow
