let cartdata=JSON.parse(localStorage.getItem("items"))



let total=document.getElementById("cart_total")

let out=cartdata.reduce(function(sum,ele){
    
    return sum=sum+Number(ele.price)
},0)

total.innerText=out

    let parentcart=document.getElementById("cart")
    cartdata.map(function(ele,index){
        let div=document.createElement("div")
        div.id="div2"
        let name=document.createElement("h2")
        let img=document.createElement("img")
        let price=document.createElement("p")
        let btn=document.createElement("button")

        name.innerText=ele.name
        name.id="name1"
        img.src=ele.image
        img.id="img2"
        price.innerText=ele.price
        price.id="price1"

        
        btn.innerText="Remove"
        btn.id="remove"
        
        btn.addEventListener("click",function(){
            Remove(index)
           
        })


        div.append(name,img,price,btn)
        parentcart.append(div)


       
    })

    function Remove(index){
        cartdata.splice(index,1)
        localStorage.setItem("items",JSON.stringify(cartdata))
        window.location.reload()
    }

    function checkout(){
        window.location.href="checkout.html"
    }

