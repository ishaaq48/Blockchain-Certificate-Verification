import express from "express";

const PORT = 3000
const app = express()

app.get("/", () => {
    console.log("hello")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})