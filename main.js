function multiplyNumeric(obj){
    const menu = {
       width: 200,
       height: 300,
       title: 'My menu'
     }
     menu.width*=obj
     menu.height*=obj
     return menu
 }
 let res = multiplyNumeric(2)
 console.log(res);