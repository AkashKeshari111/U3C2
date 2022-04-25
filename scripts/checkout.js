

function myfun(){
    event.preventDefault()
        let name=document.getElementById("name").value
        let num=document.getElementById("number").value
        let address=document.getElementById("address").value
        
        
    
        setTimeout(function(){
        alert("Your order is accepted")
        },0000)
    

        
        setTimeout(function(){
            alert("Your order is being packed")
        
        },3000)



        setTimeout(function(){
            alert("Your order is transit")
            j++
        },8000)

        setTimeout(function(){
            alert("Your order is out for delivery ")
            j++
        },10000)

        setTimeout(function(){
            alert("Order delivered")
            j++
        },12000)


    }