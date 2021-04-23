import React from "react";
import { DataModel } from "./App";

interface Props {
  data: DataModel[];
  dimensions: {
    width: number;
    height: number;
  };
  filters: string[];
}

function Products(props: Props) {
  const { data, dimensions, filters } = props;
  const [filteredData, setFilteredData] = React.useState<DataModel[]>([]);

  React.useEffect(() => {
    if (filters.length === 0) {
      setFilteredData(data);
      return;
    }

    const filtered = data.filter((x) => {
      const vals = x.category.concat(x.availableFor);
      if (filters.every((x) => vals.includes(x))) {
        return true;
      }
      return false;
    });

    setFilteredData(filtered);
  }, [filters, data]);

  return (
    <div className="if grid across">
      <div className="if row">
        {filteredData.map((x, i) => {
          return (
            <div
              key={i}
              className={`if col-${
                dimensions.width > 960 ? "4" : "6"
              }--smlr product`}
            >
              <div>
                <h3>{x.name}</h3>
                <p>{x.about.slice(0, 100)}</p>
              </div>
              <div>
                <a className="if standalone">Overview</a>
                <a className="if standalone">Docs</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
