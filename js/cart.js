var xxhr = new XMLHttpRequest ;
xxhr.open('GET',"https://fakestoreapi.com/products" ,true)
xxhr.onreadystatechange = ()=>{
    if(xxhr.readyState==4 && xxhr.status==200){
        var data = JSON.parse(xxhr.responseText)

        var allproduct = window.localStorage.allProducts.split(",")
        for (x of data) {
            for (y of allproduct) {
                if (x.id == y){

                    $(".haha").append(`         
                    <div class="row_left">
                    <div class="side1">
                        <img src="${x.image}" alt="">
                    </div>
                    <div class="side2">
                        <ul class="ba_paragraph">
                            <li style="font-size: 20px;">${x.title}</li>
                            <li><span style="font-weight: bold;font-size:18px;font-family: Verdana;">EGP ${x.price}</span></li>
                            <li style="color:#007185">${x.category}</li>
                            <li style="color:rgb(117, 115, 115)">Eligible for FREE delivery</li>
                        </ul>
                        <div class="side3">
                            <span>
                                <select class="selectbox">
                                    <option style="font-weight: bold;">Qty : 0</option>
                                    <option style="font-weight: bold;" selected>Qty : 1</option>
                                    <option style="font-weight: bold;">Qty : 2</option>
                                    <option style="font-weight: bold;">Qty : 3</option>
                                    <option style="font-weight: bold;">Qty : 4</option>
                                    <option style="font-weight: bold;">Qty : 5</option>
                                    <option style="font-weight: bold;">Qty : 6</option>
                                    <option style="font-weight: bold;">Qty : 7</option>
                                    <option style="font-weight: bold;">Qty : 8</option>
                                    <option style="font-weight: bold;">Qty : 9</option>
                                    <option style="font-weight: bold;">Qty : 10</option>
                                </select>
                            </span>
                            <span class="ba_link2">
                                <a href="#" id = "${x.id}" class="delete" >Delete</a>
                            </span>
                            <span class="ba_link3">
                                <a href="#">Save for leter</a>
                            </span>
                         
                        </div>
                    </div>
                </div>`);
                }
            }
        }

        document.querySelectorAll(".delete").forEach((el)=>{
            el.onclick = (x)=>{
                el.closest(".row_left").remove()

                localStorage.allProducts = localStorage.allProducts.split(",").filter((el)=>{
                    return el != x.target.id
                })

                localStorage.productNum -= 1
                document.getElementById("prductNum").innerHTML = localStorage.productNum
            }
        })
    }
}
xxhr.send()


