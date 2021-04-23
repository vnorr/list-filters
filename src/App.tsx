import React from "react";
import "./App.scss";
import json from "./data.json";
import Filter from "./Filter";
import Products from "./Products";

export interface DataModel {
  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  name: string;
  phone: string;
  address: string;
  about: string;
  tags: string[];
  category: string[];
  availableFor: string[];
}

function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [filters, setFilters] = React.useState<string[]>([]);

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const setFilter = (value: string) => {
    let currentFilters = filters;
    currentFilters.find((x) => x === value)
      ? (currentFilters = currentFilters.filter((x) => x !== value))
      : (currentFilters = currentFilters.concat([value]));
    setFilters(currentFilters);
  };

  const data = (json as unknown) as DataModel[];
  let tags = Array.from(new Set(data.map((x) => x.tags).flat()));
  let categories = Array.from(new Set(data.map((x) => x.category).flat()));
  let availableFor = Array.from(
    new Set(data.map((x) => x.availableFor).flat())
  );

  return (
    <div className="if main">
      <div className="if block">
        <div className="if grid">
          <div className="if row">
            <div className="if col-3--xs">
              <Filter
                tags={tags}
                categories={categories}
                availableFor={availableFor}
                dimensions={dimensions}
                setFilter={(val: string) => setFilter(val)}
              />
            </div>
            <div
              className={`if col-${dimensions.width < 700 ? "12" : "9"}--xs`}
            >
              <Products data={data} dimensions={dimensions} filters={filters} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
