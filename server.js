const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 8000

app.use(cors())

app.listen(PORT,() => {
console.log(`connected to Port ${PORT}`)
})
const username = "chebs";
const password = "Revolt2022" 


try {
    const body = {
             "source":"amazon_search",
             "domain":"com",
             "query":"deal of the day",
             "parse":true,
             "pages":1
    }
    const response = await fetch('https://realtime.oxylabs.io/v1/queries', {
        method: 'post',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
        }
    })
    console.log(await response.json())
} catch (error) {
    console.log(error)
}

//"{"source": "universal_ecommerce", "url": "https://sandbox.oxylabs.io/products/1", "geo-location": "United States", "render": "html"}",
// "Basic" = Buffer.from(`${username}:${password}`).toString("base64")