import React, { useState } from "react"
import AppContext from "./AppContext"
import RouterContainer from "./containers/RouterContainer"

import { createRoot } from 'react-dom/client';
const container = document.getElementById('application');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const items = [
  {
    url: 'https://4.imimg.com/data4/TT/IK/IMOB-11906735/image-500x500.jpeg',
    price: 38,
    description: 'Cake',
    id: '1'
  },
  {
    url: 'https://5.imimg.com/data5/SELLER/Default/2020/8/UF/OY/WJ/2410371/bakery-products-1000x1000.png',
    price: 29,
    description: 'Croissant',
    id: '2'
  },
  {
    url: 'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/how-sweet-it.jpg?itok=IOyK92Fc',
    price: 19,
    description: 'Donuts',
    id: '3'
  },
  {
    url: 'https://4.imimg.com/data4/TT/IK/IMOB-11906735/image-500x500.jpeg',
    price: 38,
    description: 'Cake',
    id: '4'
  },
  {
    url: 'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/how-sweet-it.jpg?itok=IOyK92Fc',
    price: 19,
    description: 'Donuts',
    id: '5'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bread_in_the_Hellenic_Republic.jpg/1200px-Bread_in_the_Hellenic_Republic.jpg',
    price: 19,
    description: 'Bread',
    id: '6'
  },
  {
    url: 'https://5.imimg.com/data5/SELLER/Default/2020/8/UF/OY/WJ/2410371/bakery-products-1000x1000.png',
    price: 29,
    description: 'Croissant',
    id: '7'
  },
]

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
    return <AppContext.Provider value={{ productsList: items, selectedItems, setSelectedItems }}>
      <RouterContainer/>
    </AppContext.Provider>
}

root.render(<App />);