import React, { FC } from "react";
import { AnimalType } from "../../pages/Animals";

interface Props {
  item: AnimalType;
  onClick: (item: AnimalType) => void;
}

const FilterButton: FC<Props> = ({ item, onClick }) => {
  return (
    <div>
      <div style={{ flex: 1 }}>
        <button onClick={() => onClick(item)}>
          {item.isChecked ? (
            <input type="checkbox" checked={true} />
          ) : (
            <input type="checkbox" checked={false} />
          )}

          <h1>{item.name}</h1>
        </button>
      </div>
    </div>
  );
};

export default FilterButton;
