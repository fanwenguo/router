var Mock=require('mockjs');
var Random=Mock.Random;
var list=Mock.mock({
    'list|1-20':[{
        'id|+1':1,
        'name':'@cname',
        'addr':'@city',
        'content':'@cparagraph'
    }]
})
module.exports=list