//import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  let cities = ["New York", "Kansas", "San Francisco", "Texas", "Denver"];

  const [selectedCities, setSelectedCities] = useState(-1);
  //cities = [];

  /*  if (cities.length === 0) {
    return (
      <>
        <h1>List</h1>
        <p>No items found</p>;
      </>
    );
  } */

  /*  const getMesssage = () => {
    return cities.length === 0 ? <p>No items found</p> : null;
  }; */

  //  Event handler
  //const handleClick = (event: MouseEvent) => console.log(event);

  cities.map((el) => <li>{el}</li>);
  return (
    <>
      <h1>{heading}</h1>
      {/* {cities.length === 0 ? <p>No items found</p> : null} */}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {cities.map((el, index) => (
          <li
            className={
              selectedCities === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedCities(index), onSelectItem(el);
            }}
            key={el}
          >
            {el}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
