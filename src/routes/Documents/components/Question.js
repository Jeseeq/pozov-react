import React from 'react'
import ReactDOM from 'react-dom'
import {Panel, Overlay, Tooltip} from 'react-bootstrap'
import ModalFirst from '../vidnovlennya/ModalFirst.js'
import ModalSecond from '../vidnovlennya/ModalSecond.js'
import ModalThird from '../vidnovlennya/ModalThird.js'

import Radio from 'antd/lib/radio'
import 'antd/lib/radio/style/index.css'

const RadioGroup = Radio.Group


export default class Question extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tooltipShow: true,
      modalFirstShow: false,
      modalSecondShow: false,
      modalThirdShow: false,
      value: props.defaultChecked
    }
    this.onChange = this.onChange.bind(this)
    this.onClose = this.onClose.bind(this)
  }
  onChange (e, modal) {
    this.setState({
      value: e.target.value,
      tooltipShow: false
    })

    if(modal) {
      this.openModal(e.target.value)
    }
  }
  onClose (){
    this.setState({
      modalFirstShow: false,
      modalSecondShow: false,
      modalThirdShow: false
    })
  }
  openModal (id){
    switch (id) {
      case 1:
        this.setState ({
        modalFirstShow: true
      })
      break
      case 2:
        this.setState({
        modalSecondShow: true
      })
      break
      case 3:
        this.setState({
        modalThirdShow: true
      })
      break
    }
  }
  render () {
    const radioStyle = {
      display: 'block',
      height: 'auto',
      lineHeight: '30px',
      whiteSpace: 'normal'
    }

    let answers = this.props.answers
    const tooltip = <Tooltip id='select-question'> {this.props.tooltip}</Tooltip>;

    const sharedProps = {
      show: this.state.tooltipShow,
      container: this,
      target: () => ReactDOM.findDOMNode(this.refs.target)
    }

    return (
      <Panel collapsible defaultExpanded header={this.props.question}>
        {
          this.props.tooltip ?
            <Overlay placement='right' {...sharedProps} >
              {tooltip}
            </Overlay>
            : null
        }
        <RadioGroup onChange={(e) => this.onChange(e, this.props.modal)} value={this.state.value} ref='target'>
          {
            answers.map((answer) => {
              return (
                <Radio
                  style={radioStyle}
                  key={answer.id}
                  value={answer.id}>
                  {answer.choice}
                </Radio>
              )
            })
          }

        </RadioGroup>
        <ModalFirst showModal={this.state.modalFirstShow} onClose={this.onClose} />
        <ModalSecond showModal={this.state.modalSecondShow} onClose={this.onClose}/>
        <ModalThird showModal={this.state.modalThirdShow} onClose={this.onClose}/>
      </Panel>
    )
  }
}
