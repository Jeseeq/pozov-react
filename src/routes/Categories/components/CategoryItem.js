import React from 'react'
import {ListGroupItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export const CategoryItem = ({link, title}) => {
  return (
    <LinkContainer to={link}>
      <ListGroupItem bsStyle='success'>{title}</ListGroupItem>
    </LinkContainer>
  )
}
export default CategoryItem
