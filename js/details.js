document.getElementsByClassName("price")[0].innerHTML = "$----";
// ------------------------------------

var xxhr = new XMLHttpRequest ;
xxhr.open('GET',"https://fakestoreapi.com/products" ,true)
xxhr.onreadystatechange = ()=>{
    if(xxhr.readyState==4 && xxhr.status==200){
        var data = JSON.parse(xxhr.responseText)
        document.getElementById("imgId").src =data[localStorage.describtion - 1 ].image
        document.querySelector("#se2 h1").innerHTML = data[localStorage.describtion - 1 ].title
        document.querySelector(".price").innerHTML = `${data[localStorage.describtion - 1 ].price}$`
        document.querySelector(".greenP").innerHTML = `category : ${data[localStorage.describtion - 1 ].category}`
        document.querySelector(".descrip").innerHTML = data[localStorage.describtion - 1 ].description
    }
}
xxhr.send() 

function added(){
    document.getElementById("AddToCart").innerHTML = "Added <img src='../image/icons8-check-circle-48.png'>"
    document.getElementById("AddToCart").style.cssText = "background:red ; color:white ; cursor:default"
    document.getElementById("AddToCart").disabled = true  
}

document.getElementById("AddToCart").onclick = ()=>{
    if(!window.localStorage.allProducts){
    window.localStorage.allProducts =[] //لو  allProducts مش موجوده هيكريتها 
    }

    var x = window.localStorage.allProducts;
    x =x.split(",").filter((el)=>{
        return el !=""
    })
    x.push(localStorage.describtion); // بيعمل بوش لرقم id بتاع ال المنتج بتاخده وتحطه ف ال allProducts
    x = [...new Set(x)];

    window.localStorage.productNum = x.length;
    document.getElementById("prductNum").innerHTML = localStorage.productNum ;
    window.localStorage.allProducts = x ;

    added()    
}

if(localStorage.productNum){
    for ( x of localStorage.allProducts.split(",")) {
        if(x == localStorage.describtion ){
            added()
        }
    }
}