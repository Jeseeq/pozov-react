import React from 'react'
import data from './QuestionsData'
import Question from '../components/Question'

export default class Page extends React.Component {
  render () {
    return (
      <div className='margin-top-30'>
        {data.map((question) => {
          return (
            <Question key={question.id} {...question} />
          )
        })}
      </div>
      )
  }
}
