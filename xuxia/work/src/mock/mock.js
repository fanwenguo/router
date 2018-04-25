var Mock = require('mockjs');
var Random = Mock.Random
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'name': '@cname',
        'addr': Random.city(),
        'tit': Random.cparagraph(1, 3)
    }]
})
module.exports = function(app) {
    app.get('/api/list', (req, res) => {
        res.send(data)
    })
    app.get('/api/detail', (req, res) => {
        let list = data.list.filter((i) => {
            return i.id == req.query.id
        })
        res.send(list)
    })
}