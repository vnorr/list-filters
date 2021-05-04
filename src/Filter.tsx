import React, { useState } from "react";

interface Props {
  tags: string[];
  categories: string[];
  availableFor: string[];
  dimensions: {
    width: number;
    height: number;
  };
  setFilter: any;
  filters: string[];
}

function Filter(props: Props) {
  const { categories, availableFor, dimensions, setFilter, filters } = props;
  const [showFilters, setShowFilters] = useState(false);

  const content = (
    <>
      <div>
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
                      checked={filters.indexOf(x) !== -1}
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
                      checked={filters.indexOf(x) !== -1}
                      onChange={() => setFilter(x)}
                    />
                    <label htmlFor={ctrl}>{x}</label>
                  </div>
                );
              })}
          </div>
        </form>
      </div>
    </>
  );

  if (dimensions.width <= 700) {
    return (
      <div className="filter-mobile">
        <div className="header" onClick={() => setShowFilters(!showFilters)}>
          <h3 className="if">{`Filter By ${
            filters.length > 0 ? `- (${filters.length})` : ""
          }`}</h3>
          <i
            className={`if icon ui chevron-${showFilters ? "down" : "left"}`}
          ></i>
        </div>
        {showFilters && <>{content}</>}
      </div>
    );
  }

  return (
    <div className="if col-3--xs">
      <div className="filter">{content}</div>
    </div>
  );
}

export default Filter;
