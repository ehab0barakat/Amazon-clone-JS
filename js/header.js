function search(se){
    var xhr_1 = new XMLHttpRequest ;
    xhr_1.open('GET',`https://fakestoreapi.com/products` ,true)
    xhr_1.onreadystatechange = ()=>{
    if(xhr_1.readyState == 4 && xhr_1.status == 200){
        var data = JSON.parse(xhr_1.responseText)
        var arr = [];
        $(".search_res").html('') ;
        for (x in data){
            arr.push(data[x].title)
        }
        arr.map((el , index )=>{
           if ( arr[index].toLocaleLowerCase().includes(se) && $("input[type='search']").val() != "" && $("input[type='search']").val() != " " ){

            string = `<div> ${arr[index]}</div>`
            x = `<span style="color:white ; background:grey" >${se}</span>`

            pp = string.toLocaleLowerCase().replace(se,x).split(' ').map((el)=>{
                return el[0].toUpperCase() + el.substring(1)
            }).join(' ');

            
            $(".search_res").append(`<a href="../details.html" class="d_block" id='${index + 1}' <li class="no">${pp}</li></a>`)

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



document.addEventListener("keydown",(event)=>{
    if (event.keyCode == 27) {
        $("body").css("overflow", "unset");
        $(".black").css("z-index","-1")
        $(event.target).blur();
    }
});

$("input[type='search']").on("keyup",(x)=>{
    $(".search_res").html('') ;
    search($(x.target).val())
})

$("input[type='search']").on("click",()=>{
    $("body").css("overflow", "hidden");
    $(".black").css("z-index","5")
})

if(localStorage.productNum){
    document.getElementById("prductNum").innerHTML = localStorage.productNum
}