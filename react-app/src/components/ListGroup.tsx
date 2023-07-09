import { Fragment, useState } from "react";
//import { MouseEvent } from "react";
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void; //onClick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //let selectedIndex = 0;
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //const [name, setName] = useState("");
  //arr[0]; // variable (selectedIndex)
  //arr[1]; // updater function
  //items = [];

  heading = "";

  //EventHandler
  //const handleClick = (event: MouseEvent) => console.log(event);

  const message = items.length === 0 ? <p>No item found</p> : null;

  return (
    <>
      <h1>{heading}</h1>
      {message}
      {/*items.length === 0 && <p>No tiem found</p>*/}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
