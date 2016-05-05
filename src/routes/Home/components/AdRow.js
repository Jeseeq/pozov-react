import React from 'react'
import {Button} from 'react-bootstrap'
import './HomeView.scss'

export const AdRow = () => (
  <div className='purchase'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 animated fadeInLeft'>
          <span>Те чого ви так довго чекали</span>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus
          ui blanditiis praesentium voluptatum deleniti atque corrupti
          quos dolores et quas molestias excepturi  vehicula sem ut volutpat.
          Ut non libero magna fusce condimentum eleifend enim a feugiat corrupti quos.</p>
        </div>
        <div className='col-md-4 btn-buy animated fadeInRight'>
          <Button className='btn-lg btn-a rounded-2x'>
            <i className='fa fa-cloud-download'></i> Конструктор документов
          </Button>
          <div className='margin-bottom-10'></div>
        </div>
      </div>
    </div>
  </div>
)
export default AdRow
