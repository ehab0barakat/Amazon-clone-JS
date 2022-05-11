$("body").css("overflow", "hidden");

var xxhr = new XMLHttpRequest ;
xxhr.open('GET',"https://fakestoreapi.com/products" ,true)
xxhr.onreadystatechange = ()=>{
    if(xxhr.readyState==4 && xxhr.status==200){
        var data = JSON.parse(xxhr.responseText)
        var allproduct = window.localStorage.allProducts.split(",")
        var allPrices = 0  ;
        $(".allll").fadeOut();
        $("body").css("overflow", "unset");

        $(".haha").append(`
                                <div class="row_right">
                                <p> Add <span style="color: rgb(224, 10, 10);">EGP 165.05 </span>of eligible items to your order to
                                    qualify for FREE Shipping.<a href="">
                                        See details
                                    </a></p>

                                <div class="ba_box">
                                    <h2 style="font-size: 18px;margin:20px 10px;padding: 0 10px 0;">Subtotal (0 item):
                                        <span style="font-weight: bold;font-size:18px;font-family: Verdana;">EGP 0</span>
                                    </h2>
                                    <input type="submit" value="Proceed to Buy" class="ba_btn">

                                </div>
                            </div>`);
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
                            <li style="color:rgb(117, 115, 115)">${x.price < 165 ? "Not":""} Eligible for FREE delivery</li>
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
                                <a href="#" id = "${x.id}" price= "${x.price}" class="delete" >Delete</a>
                            </span>
                            <span class="ba_link3">
                                <a href="#">Save for leter</a>
                            </span>
                         
                        </div>
                    </div>
                </div>`);
                allPrices += x.price ;
                }
                $(".ba_box h2").html(`Subtotal (${localStorage.productNum} item):<span style="font-weight: bold;font-size:18px;font-family: Verdana;">EGP ${allPrices.toFixed(2)}</span>`)
            }
        }

        document.querySelectorAll(".delete").forEach((el)=>{
            var abstractPrices = 0;
            el.onclick = (x)=>{
                localStorage.allProducts = localStorage.allProducts.split(",").filter((el)=>{
                    return el != x.target.id  // عاوزين ترجع الارقام كلها م عدا  الرقم للى اتعمله delete
                })


                localStorage.productNum -= 1 // تعديل عدد المنتجات 
                document.getElementById("prductNum").innerHTML = localStorage.productNum
                abstractPrices += +$(x.target).attr("price")

                $(".ba_box h2").html(`Subtotal (${localStorage.productNum} item):<span style="font-weight: bold;font-size:18px;font-family: Verdana;">EGP ${(allPrices - abstractPrices).toFixed(2)}</span>`)
                $(el).closest(".row_left").fadeOut();
            }
        })
    }
}
xxhr.send()
