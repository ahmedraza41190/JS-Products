var olx = [
    {
        id: 01,
        prod_name: "Revo",
        prod_price: 10000000,
        prod_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1OcT8g62nirye_LZScjRlG0Cq7tifsQ9gA&usqp=CAU"
    },
    {
        id: 02,
        prod_name: "Audi",
        prod_price: 10000000,
        prod_image: "https://i.ytimg.com/vi/jwC061bKG2Y/maxresdefault.jpg"
    },{
        id: 03,
        prod_name: "Civc",
        prod_price: 9000000,
        prod_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSccpJo2OEPTGsorI_KjyAN1G-p_Gvbt2JdGA&usqp=CAU"
    }
]





function foo(){
    olx.forEach(function(a){

        var a1 = document.createElement('img');
        a1.src = a.prod_image;
    
        a2 = document.getElementById('d1');
    
        b = document.createElement('div');
    
        c = document.createElement('div');
        c.innerHTML = 'Product Name: ' + a.prod_name + " " + "Product Id: " + a.id;
       
        b.appendChild(a1)
        b.appendChild(c)
        a2.appendChild(b)
        
    })
}