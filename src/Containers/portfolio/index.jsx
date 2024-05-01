import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/page-header";
import "./style.scss";
import data from "../../projectsList.json";

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
  {
    filterId: 4,
    label: "3D Models",
  },
];

const Portfolio = () => {
  const [filteredValue, setfilteredValue] = useState(1);
  const [hoveredValue, sethoveredValue] = useState(null);

  const handleFilter = (currentId) => {
    setfilteredValue(currentId);
  };

  const handleHover = (index) => {
    sethoveredValue(index);
  };
  const filteredItems =
    filteredValue === 1
      ? data
      : data.filter((item) => item.id === filteredValue);

  console.log(hoveredValue);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeader
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio_content">
        <ul className="portfolio_content_filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio_content_cards">
          {filteredItems.map((item, i) => (
            <div
              className="portfolio_content_cards_item"
              key={i}
              onMouseEnter={() => handleHover(i)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio_content_cards_item_img-wrapper">
                <img src={item.img} alt="" />
              </div>
              <div className="overlay">
                {item.sid - 1 === hoveredValue && (
                  <div>
                    <p>{item.title}</p>
                    
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
