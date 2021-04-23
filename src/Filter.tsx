import React from "react";

interface Props {
  tags: string[];
  categories: string[];
  availableFor: string[];
  dimensions: {
    width: number;
    height: number;
  };
  setFilter: any;
}

function Filter(props: Props) {
  const { categories, availableFor, dimensions, setFilter } = props;

  if (dimensions.width <= 700) {
    return null;
  }

  return (
    <div className="filter">
      <div>
        <h3>AVAILABLE FOR USE BY</h3>
        <form className="filter-form">
          <div className="if input-wrapper">
            {availableFor.length > 0 &&
              availableFor.map((x, i) => {
                const ctrl = "availableFor-checkbox-" + i;
                return (
                  <div key={i} className="if selection-controls">
                    <input
                      type="checkbox"
                      id={ctrl}
                      className="if selection-control"
                      name={ctrl}
                      value={x}
                      onChange={() => setFilter(x)}
                    />
                    <label htmlFor={ctrl}>{x}</label>
                  </div>
                );
              })}
          </div>
        </form>
      </div>
      <div>
        <h3>API CATEGORY</h3>
        <form className="filter-form">
          <div className="if input-wrapper">
            {categories.length > 0 &&
              categories.map((x, i) => {
                const ctrl = "category-checkbox-" + i;
                return (
                  <div key={i} className="if selection-controls">
                    <input
                      type="checkbox"
                      id={ctrl}
                      className="if selection-control"
                      name={ctrl}
                      value={x}
                      onChange={() => setFilter(x)}
                    />
                    <label htmlFor={ctrl}>{x}</label>
                  </div>
                );
              })}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Filter;
