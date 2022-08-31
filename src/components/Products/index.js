import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import BakeryIcon from './BakeryIcon';
import './styles.css'

const Products = () => {
  const { productsList, selectedItems, setSelectedItems } = useContext(AppContext);

  const onAddToCartClick = (id) => {
    setSelectedItems([...selectedItems, id])
  }

  const onRemoveItemClick = (id) => {
    const index = selectedItems.indexOf(id);
    selectedItems.splice(index, 1);
    setSelectedItems([...selectedItems])
  }

  return <div className="productsContainer">
    <div className="header">
      <div style={{ fontWeight: 'bold' }}>NEW PRODUCTS</div>
      <BakeryIcon/>
    </div>
    <div className="productList">
      {productsList.map((product) => {
        const {url, price, id, description } = product;
        const isAlreadyAdded = selectedItems.includes(id)
        return <div className="itemContainer" key={id}>
          <img src={url} style={{ width: '100%', height: '100%' }}></img>
          <div className="itemDetails">
            <div className="description">{description}</div>
            <div className="amount">&#x20B9; {price}</div>
          </div>
          <div onClick={() => { isAlreadyAdded ? onRemoveItemClick(id) : onAddToCartClick(id) }} className="add_to_cart">{isAlreadyAdded ? 'Remove' : 'Add to Cart'}</div>
        </div>
      })}
    </div>
  </div>
}

export default Products;