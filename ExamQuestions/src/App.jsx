import './App.css'
import List1 from './List1'
import ProductGrid from './ProductGrid'
import UserList from './UserList'
import Alert4 from './Alert4'
import Counter5 from './Counter5'
import UserName6 from './UserName6'
import Password7 from './Password7'
import ShoppersAssistant8 from './ShoppersAssistant8'
import Itemlist9 from './Itemlist9'
import Authentication10 from './Authentication10'
import Input11 from './Input11'
import images from './assets/images.jpeg'
import images2 from './assets/images2.jpeg'
import images3 from './assets/images3.jpeg'


function App() {

  let ShopList = ["Potato","Tomato","Flower"]
  let Itemlist = ["Pen","Eraser","Sharpner"]

  let fruit = [
    { Name: "Apple", price: "100" },
    { Name: "Banana", price: "120" },
    { Name: "Pineapple", price: "130" },
    { Name: "Guava", price: "120" },
    { Name: "Coconut", price: "80" }
  ]
  
  let Vegetable = [
  { Name: "Cabbage", price: "100" },
  { Name: "Cauliflower", price: "120" },
  { Name: "Brocolli", price: "450" },
  { Name: "Mushroom", price: "120" },
  { Name: "Spinach", price: "80" }
  ]

  const products = [
    { image: images, name: "Product1", price: "Price: 100$" },
    { image: images2, name: "Product2", price: "Price: 200$" },
    { image: images3, name: "Product3", price: "Price: 300$" },
  ];

  let userDetails = [
  { Name: "Jash", Email: "jash@gmail.com", Address: "Surat" },
  { Name: "Akshit", Email: "akshit@gmail.com", Address: "Surat" },
  { Name: "Jatin", Email: "jatin@gmail.com", Address: "Ahmedabad" }
  ]



  return (
    <>
      <div>
        <h4>1</h4><List1 Fruits={fruit} Vegetables={Vegetable}>  </List1>
        <h4>2</h4><ProductGrid product={products}></ProductGrid>
        <h4>3</h4><UserList userDetails={userDetails}></UserList>
        <h4>4</h4><Alert4 showAlert={false}></Alert4><br /><br /><br />
        <h4>5</h4><Counter5></Counter5><br /><br /><br />
        <h4>6</h4><UserName6></UserName6><br /><br /><br />
        <h4>7</h4><Password7></Password7><br /><br /><br />
        <h4>8</h4><ShoppersAssistant8 list={ShopList}></ShoppersAssistant8><br /><br /><br />
        <h4>9</h4>{Itemlist.length === 0 ? "No items to Display" : <Itemlist9 item={Itemlist}></Itemlist9>}<br /><br /><br />
        <h4>10</h4><Authentication10 status = {false}></Authentication10><br /><br /><br />
        <h4>11</h4><Input11 value="Akshit" />
      </div>
    </>
  )
}

export default App
