import { type } from "os";
import React, { FC, useEffect, useState } from "react";
import FilterButton from "../components/buttons/FilterButton";
import Card from "../components/card/Card";
import { typesMapper } from "../helpers/typesMapper";

const data = [
  {
    id: 0,
    type: "suns",
    description: "rej",
    name: "Reksis",
  },
  {
    id: 3,
    type: "suns",
    description: "super detektīvs",
    name: "Muhtars",
  },
  {
    id: 1,
    type: "kaķis",
    description: "ņaud",
    name: "Minka",
  },
  {
    id: 2,
    type: "kaija",
    description: "neļauj gulēt!!!",
    name: "Maija",
  },
];

export interface AnimalType {
  name: string;
  isChecked: boolean;
}

const Animals: FC = () => {
  const [types, setTypes] = useState<AnimalType[]>([]);

  useEffect(() => {
    const uniqueTypes = typesMapper(data);
    setTypes(uniqueTypes);
  }, []);

  const handleCheck = (checkedItem: AnimalType) => {
    const newTypes = types.map((animalType) => {
      if (checkedItem.name === animalType.name) {
        return {
          name: checkedItem.name,
          isChecked: !checkedItem.isChecked,
        };
      }
      return animalType;
    });
    setTypes([...newTypes]);
  };

  return (
    <div>
      <h1>Hello Animals</h1>

      <div style={{ display: "flex" }}>
        {types.map((animalType, idx) => {
          return (
            <FilterButton
              key={animalType.name}
              item={animalType}
              onClick={handleCheck}
            />
          );
        })}
      </div>

      {/* TODO: refactor functionality to top of return */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {data.map((animal) => {
          const checked = types.find((type) => type.name === animal.type);
          if (checked && checked.isChecked) {
            return <Card item={animal} />;
          }
          return null;
        })}
        
      </div>
    </div>
  );
};

export default Animals;

// const sum = (a: number, b: number) => {
//   console.log(a + b);
// };

// const anotherFunction = (callback: (a: number, b: number) => void) => {
//   callback(2, 3);
// };

// anotherFunction(sum);
