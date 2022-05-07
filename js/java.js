function search(se){
    var xhr_1 = new XMLHttpRequest ;
    xhr_1.open('GET',`https://fakestoreapi.com/products` ,true)
    xhr_1.onreadystatechange = ()=>{
    if(xhr_1.readyState == 4 && xhr_1.status == 200){
        var data = JSON.parse(xhr_1.responseText)
        var arr = [];
        for (x in data){
            arr.push(data[x].title)
        }
        arr.map((el , index )=>{
           if ( arr[index].toLocaleLowerCase().startsWith(se) && $("input[type='search']").val() != "" && $("input[type='search']").val() != " " ){
            $(".search_res").append(`<a href="../details.html" class="d_block" id='${index + 1 }' <li class="no">${arr[index]}</li></a>`)
           }
        })
        }

        document.querySelectorAll(".d_block").forEach((el) => {
            el.onclick=()=>{
                window.localStorage.describtion = el.id
            }
        });
    }
    xhr_1.send()
}


document.addEventListener("keydown" , (event)=>{
    if (event.keyCode == 27) {
        $("body").css("overflow", "unset");
        $(".black").css("z-index","-1")
        $(".search_res").html('') ;
    }
});

$("input[type='search']").on("keyup",()=>{
    $(".search_res").html('') ;
    search($("input[type='search']").val())
})


$("input[type='search']").on("click",()=>{
    $("body").css("overflow", "hidden");
    $(".black").css("z-index","5")
})

var xhr = new XMLHttpRequest ;
xhr.open('GET',"https://fakestoreapi.com/products" ,true)
xhr.onreadystatechange = ()=>{
    if(xhr.readyState==4 && xhr.status==200){
        var data = JSON.parse(xhr.responseText)
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




if(localStorage.productNum){
    document.getElementById("prductNum").innerHTML = localStorage.productNum
}
