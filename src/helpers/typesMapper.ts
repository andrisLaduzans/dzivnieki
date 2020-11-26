import { AnimalType } from "../pages/Animals";

export const typesMapper = (
  rawData: {
    id: number;
    type: string;
    description: string;
    name: string;
  }[]
): AnimalType[] => {
  const allTypes = rawData.map((item) => item.type);

  const uniqueTypes: string[] = [];

  for (let i = 0; i < allTypes.length; i++) {
    const thisType = allTypes[i];

    const existingUnique = uniqueTypes.find((element) => element === thisType);

    if (!existingUnique) {
      uniqueTypes.push(thisType);
    }
  }
  const typeObj = uniqueTypes.map((typeString) => ({
    name: typeString,
    isChecked: false,
  }));

  return typeObj;
};
