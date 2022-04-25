// Store cart items in local storage with key: "items"

let url="https://grocery-masai.herokuapp.com/items"

fetch(url)
.then(function(res){
    return res.json()
})
.then(function(res){
    console.log(res.data)
    products(res.data)
})
.catch(function(err){
    console.log(err)
})


function products(data){
    let parent=document.getElementById("items")
    data.map(function(ele){
        let div=document.createElement("div")
        div.id="div1"
        let name=document.createElement("h2")
        let img=document.createElement("img")
        let price=document.createElement("p")
        let btn=document.createElement("button")

        name.innerText=ele.name
        name.id="name"
        img.src=ele.image
        img.id="img1"
        price.innerText=ele.price
        price.id="price"
        btn.innerText="Add to cart"
        btn.id="btn"
        
        btn.addEventListener("click",function(){
            addtocart(ele)
           
        })


        div.append(name,img,price,btn)
        parent.append(div)


       
    })

   
}
cartdata=JSON.parse(localStorage.getItem("items"))||[]

function addtocart(ele){
    cartdata.push(ele)
    localStorage.setItem("items",JSON.stringify(cartdata))
  
  
console.log(ele)
}

let count1=document.getElementById("cnt")
cartdata=JSON.parse(localStorage.getItem("items"))

let out1=cartdata.reduce(function(sum,ele,index){
return sum=sum+index
},0)

count1.innerText=out1




