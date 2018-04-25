var Mock = require("mockjs");
var Random = Mock.Random;
var data = Mock.mock({
    'list|1-100': [{
        'id|+1': 1,
        'name': '@cname',
        "addr": '@city',
        "img": "@image('100','#fb0a2a')",
        "price": "@integer(10,100)",
        "infomation": '@cparagraph(1,2)'
    }]
})
module.exports = function(app) {
    app.get("/api/list", function(req, res, next) {
        res.send(data)
    })
    app.get("/api/detail", function(req, res, next) {
        let dea = data.list.filter((i) => {
            return i.id == req.query.id;
        })
        res.send(dea)
    })
}