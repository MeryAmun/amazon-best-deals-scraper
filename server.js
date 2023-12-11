import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
const app = express();
const PORT = 8000;
import fetch from "node-fetch";
app.use(cors());

app.listen(PORT, () => {
  dotenv.config()
  console.log(`Listening to Port ${PORT}`);
});

// const username = process.env.USERNAME;
// const password = process.env.PASSWORD

app.get("/deals", async (req, res) => {
  try {
    const body = {
      source: "amazon_search",
      domain: "com",
      query: "deal of the day",
      parse: true,
      pages: 1,
    };
    const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
      },
    });
    const data = await response.json();
    const results = data.results[0].content.results.organic;
    const filteredDeals = results.filter((deal) => deal.price_strikethrough);
    const sortedBtBestDeal = filteredDeals.sort(
      (a, b) =>
        ((a.price_strikethrough - a.price) / a.price_strikethrough) * 100 -
        ((b.price_strikethrough - b.price) / b.price_strikethrough) * 100
    );
    console.log("sorted best deals", sortedBtBestDeal);
    res.send(sortedBtBestDeal);
  } catch (error) {
    console.log(error);
  }
});
