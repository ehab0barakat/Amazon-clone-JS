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






document.getElementById("AddToCart").onclick = (e)=>{
    if(!window.localStorage.allProducts){
    window.localStorage.allProducts =[]
}
    var x = window.localStorage.allProducts;
    x =x.split(",").map((el)=>{
        if( el != "" ){
            return el
        }
    })
    x.push(localStorage.describtion);
    x = [...new Set(x)];
    window.localStorage.productNum = x.length - 1 ;
    document.getElementById("prductNum").innerHTML = localStorage.productNum ;
    window.localStorage.allProducts = x ;
    document.getElementById("AddToCart").innerHTML = "Added <img src='../image/icons8-check-circle-48.png'>"
    document.getElementById("AddToCart").style.background = "red"
    document.getElementById("AddToCart").style.color = "white"
    document.getElementById("AddToCart").style.cursor = "default"
    document.getElementById("AddToCart").disabled = true
    
}


for ( x of localStorage.allProducts.split(",")) {
    if(x == localStorage.describtion ){
        document.getElementById("AddToCart").innerHTML = "Added <img src='../image/icons8-check-circle-48.png'>"
        document.getElementById("AddToCart").style.background = "red"
        document.getElementById("AddToCart").style.color = "white"
        document.getElementById("AddToCart").style.cursor = "default"
        document.getElementById("AddToCart").disabled = true    
    }
}
