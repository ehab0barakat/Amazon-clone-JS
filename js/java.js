$("body").css("overflow", "hidden");

var xhr = new XMLHttpRequest ;
xhr.open('GET',"https://fakestoreapi.com/products" ,true)
xhr.onreadystatechange = ()=>{
    if(xhr.readyState==4 && xhr.status==200){
        var data = JSON.parse(xhr.responseText)

        $(".allll").fadeOut();
        $("body").css("overflow", "unset");

        for(x in data){
            $(".eh_grid").append(
            `<div class="product" id="${data[x].id}">
            <a href="../details.html" class="overlay"></a>
            <img src="${data[x].image}"  alt="">
            <h4>${data[x].title}</h4>
            <div class="rate">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
            </div>
            <div class="describtion">
              <p>this is awesome product </p>
            </div>
          </div>`
          )
        }
    }
    document.querySelectorAll(".overlay").forEach((element) => {    
        element.onclick=()=>{
            window.localStorage.describtion = element.parentElement.id
        }
        var height = +Number.parseInt($(".eh_grid").css("height"))
        $(".space").css("height", `${height - 280}px`)
    });
}
xhr.send();