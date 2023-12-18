import express from "express"
import {handler} from "./build/handler.js"

const app = express()
app.use(handler)
app.listen(3000, "0.0.0.0", () => {
    console.log(`[server] running on http://localhost:3000`)
})
