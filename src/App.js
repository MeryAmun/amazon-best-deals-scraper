import React, { useState, useEffect } from "react";
import { Header, Card } from "./components/index.js";
const App = () => {
  const [deals, setDeals] = useState(null);

  const getDeals = async () => {
    try {
      const response = await fetch("http://localhost:8000/deals", {
        method: "GET",
      });
      const data = await response.json();
      setDeals(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDeals();
  }, []);
  return (
    <div className="app">
      <Header />
      <nav>
        <button className="primary">Amazon</button>
        <button className="primary" disabled>
          AliExpress
        </button>
        <button className="primary" disabled>
          Ebay
        </button>
        <button className="primary" disabled>
          Etsy
        </button>
        <button className="primary" disabled>
          AliBaba
        </button>
      </nav>
      <div className="">
        <h2>Best Deals!</h2>
      </div>
      <div className="feed">
        {deals?.map((deal) => (
          <Card item={deal} key={deal.pos} />
        ))}
      </div>
    </div>
  );
};

export default App;
