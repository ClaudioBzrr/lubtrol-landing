const fs =  require('fs');



function readImgs(){

    var imgs = []
    
    
    fs.readdirSync(dir,(err,files)=>{
        files.forEach(element => {
            console.log(element)
            return imgs.push(element)
        });
    })
    
    console.log(imgs.length)
}
const dir = './images/stock/'
