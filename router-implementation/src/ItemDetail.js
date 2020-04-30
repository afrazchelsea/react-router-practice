//import React, { useState, useEffect } from "react";
import React from "react";
import "./App.css";

function ItemDetail({ match }) {
  //   useEffect(() => {
  //     fetchItem();
  //     console.log(match);
  //   }, []);

  //   const [item, setItem] = useState({
  //     // images: {},
  //   });

  //   const fetchItem = async () => {
  //     const itemid = match.params.id;
  //     const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${itemid}
  //     `);
  //     const item = await fetchItem.json();
  //     setItem(item);
  //     console.log(item);
  //   };

  //   return (
  //     <div>
  //       <h1>{item.name}</h1>
  //       <img src={item.images} alt="" />
  //     </div>
  //   );
  // }

  return (
    <div>
      <h1>Item Page</h1>
    </div>
  );
}

export default ItemDetail;
