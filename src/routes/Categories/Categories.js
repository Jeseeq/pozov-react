import React from 'react'
import CategoriesData from './data/CategoriesData'
import Category from './components/Category'

export default class Documents extends React.Component {
  render () {
    return (
      <div>
        <div className='page-header'><h1>Стоворити документ</h1></div>
        <div className='row'>
          {CategoriesData.map((category) => {
            return (
              <div className='col-xs-12 col-lg-4' key={category.id}>
                <Category {...category} />
              </div>
              )
          })}
        </div>
      </div>
      )
  }
}
