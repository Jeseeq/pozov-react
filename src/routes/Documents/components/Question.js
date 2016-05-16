import React from 'react'
import {Panel} from 'react-bootstrap'

// export const Question = ({question, answers}) =>
//   <Panel collapsible defaultExpanded header={question}>
//     {answers.map((answer) =>
//       <Radio value={answer} key={answer.id}>{answer.choice}</Radio>
//     )}
//   </Panel>
//
// export default Question

import { Radio, Input } from 'antd'
import 'antd/lib/radio/style/index.css'
import 'antd/lib/input/style/index.css'

const RadioGroup = Radio.Group

export default class Question extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange (e) {
    console.log('radio checked', e.target.value)
    this.setState({
      value: e.target.value
    })
  }
  render () {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px'
    }
    return (
      <Panel collapsible defaultExpanded header={this.props.question}>
        <RadioGroup onChange={this.onChange} value={this.state.value}>
          <Radio style={radioStyle} key="a" value={1}>Option A</Radio>
          <Radio style={radioStyle} key="b" value={2}>Option B</Radio>
          <Radio style={radioStyle} key="c" value={3}>Option C</Radio>
          <Radio style={radioStyle} key="d" value={4}>
            More...
            {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
          </Radio>
        </RadioGroup>
      </Panel>
    )
  }
}
