import React from "react";

function List1(props) {
  let FruitList = props.Fruits;
  let VegetableList = props.Vegetables;
  return (
    <>
      <br />
      <div className="maindiv">
      <h1>List of Fruits and Vegetables:-</h1>
        {FruitList.length == 0 ? (
          <ol className="ul">
              <h3><b>Vegetables</b></h3>
            {VegetableList.map((item) => (
              <li>
                {item.Name}--
                {item.price}
              </li>
            ))}
          </ol>
        ) : (
          <ol className="ul">
              <h3><b>Fruits</b></h3>
            {FruitList.map((item) => (
              <li>
                {item.Name}--
                {item.price}
              </li>
            ))}
            <ol className="ul2">
            <h3><b>Vegetable</b></h3>
            {VegetableList.map((items)=>(
              <li>
                {items.Name}--
                {items.price}
              </li>
            ))}
            </ol>
          </ol>
          
        )}
      </div>
    </>
  );
}

export default List1;
