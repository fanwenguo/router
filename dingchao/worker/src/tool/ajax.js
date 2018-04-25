function $ajax(opt){
    let {
        url,
        type,
        data
    }=opt
    return new Promise((resolve,reject)=>{
        var xml = new XMLHttpRequest()
        if(type="post"){
            xml.open(type,url)
            xml.setRequestHeader('content-type','application/x-www-form-urlencoded')
            xml.send(data)
        }else{
            if(data){
                Object.entries(data).forEach(function(i,index){
                    if(index == 0){
                        url += `?${i[0]}=${i[1]}`
                    }else{
                        url += `&${i[0]}=${i[1]}`
                    }
                })
            }
           xml.open(type,url)
           xml.send() 
        }
        xml.onreadystatechange = function(){
            if(xml.readyState == 4){
                if(xml.status == 200){
                    resolve(JSON.parse(xml.responseText))
                }
                else{
                    reject ("status="+xml.status)
                }
            }
        }
    })
}



export default $ajax