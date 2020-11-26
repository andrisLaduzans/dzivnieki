import React, { FC, useState } from "react";
import "./Card.css";

interface Props {
  item: {
    id: number;
    type: string;
    description: string;
    name: string;
  };
}

const Card: FC<Props> = ({ item }) => {
  const [showName, setShowName] = useState(true);

  return (
    <div
      className="card"
      style={{
        width: '200px',
        height: "120px",
        border: "1px solid #333",
        marginBottom: "2rem",
      }}
      onClick={() => setShowName(!showName)}
    >
      <h1 className="underlay">{item.name}</h1>

      <div className={!showName ? "overlay" : "hidden"}>
        <h1>{item.description}</h1>
      </div>
    </div>
  );
};

export default Card;

/* {showName ? (
        <div>
          <h1>{item.name}</h1>
        </div>
      ) : (
        <div>
          <h1>{item.description}</h1>
        </div>
      )}

      {showName && <h1>{item.description}</h1>} */
