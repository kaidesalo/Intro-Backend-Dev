// setup ... this is similar to when wee use our default tags in html
const express = require("express")

// Have to use Cors in order to host a frontend and backend on the same device
var cors = require('cors')

// activate or tell this app variable to be an express server
const app = express()
app.use(cors())
const router = express.Router()

// Making an api using routes
// Routes are used to handle browser requests. They look like URLs.
// The difference is that when a browser requests a route, it is dynamically handled by using a function.

// GET or a regular request is when someone goes to http://localhost:3000/hello.
// When using a function on a route, we almost always have a parameter or handle a response and request.

router.get("/songs", function(req, res){
    const songs = [
        {
            title: "Im Sorry Mom",
            artist: "Marino",
            popularity: 7,
            releaseDate: new Date(2026, 6, 12),
            genre: ["alt pop", "contemporary"]
        },
        {
            title: "Orbiter",
            artist: "Noah Kahan",
            popularity: 10,
            releaseDate: new Date(2026, 4, 24),
            genre: ["indie folk", "folk pop"]
        }
    ]

    // turns song into a json product and sends
    res.json(songs)
})

// all requests that usually use an api start with /api... so the url would be localhost:3000/api/songs
app.use("/api", router)
app.listen(3000)