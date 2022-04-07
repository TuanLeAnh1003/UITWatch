import React from 'react'
import './CategoryItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function CategoryItem({title, contentList}) {
  return (
    <div className="sale__category-item">
      <div className="sale__category-item-title-wrap">
        <div className="sale__category-item-title">{title}</div>
        {/* <FontAwesomeIcon className="sale__category-item-title-icon" icon="fa-solid fa-angle-down" /> */}
        <FontAwesomeIcon className="sale__category-item-title-icon" icon={solid('angle-up')} />
      </div>
      {contentList.map((element, index) => (
        <a key={index} href="/" className="sale__category-item-content">{element}</a>
      ))}
    </div>
  )
}

export default CategoryItem
