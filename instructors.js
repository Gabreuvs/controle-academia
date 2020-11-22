const fs = require('fs')
const data = require("./data.json")

exports.post = function(req, res ) {
    //req.query
    //req.body

    const keys = Object.keys(req.body)

    for (key of keys ) {
        if (req.body[key] == "") {
            return res.send("Preencha todos os campos!")
        }
    }

    req.body.id = Number(data.instructors.length + 1)

    req.body.birth = Date.parse(req.body.birth)

    req.body.created_at = Date.now()

    data.instructors.push(req.body)

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Arquivo com erro")

        return res.redirect("/instructors")
    })

    // return res.send(req.body)
}