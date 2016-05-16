import React from 'react'
import {Panel, ListGroup} from 'react-bootstrap'
import CategoryItem from './CategoryItem'
import './category.scss'

export const Category = ({header, subdocuments}) =>
  <Panel collapsible header={header}>
    <ListGroup fill>
      {subdocuments.map((item) =>
        <CategoryItem key={item.id} {...item} />
      )}
    </ListGroup>
  </Panel>

export default Category
