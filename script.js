function addCart(){
    var number=parseInt(document.getElementById(code).value);
    var name=itemList[code].name;
    if(number==0)return;
    if(typeof localStorage[code] === "undefined"){
    window.localStorage.setItem(code,number);
    }else{
    var current=parseInt(window.localStorage.getItem(code));
    if(current+number>100)
    {
    window.localStorage.setItem(code,100);
    alert("Mỗi mặt hàng chỉ có thể đặt 100 sản phẩm cho mỗi đơn hàng. Bạn đã
    đặt 100 sản phẩm của "+name+" này.");
    return;
    }
    else
    window.localStorage.setItem(code,current+number);
    }
    alert("Đã cập nhật sản phẩm "+name+" với số lượng "+number+" vào giỏ hàng. Số lượng
    sản phẩm "+name+" đã đặt là "+parseInt(window.localStorage.getItem(code))+"."); 
}
function openCart()
{
    window.location.href="donhang.html";
}
function showCart(){
    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
        });
        var
        container=document.getElementById("cartDetail").getElementsByTagName('tbody')[0];
        container.innerHTML="";
        7
        var sum=0;
        var totalPreTax=0;
        var discountRate=getDiscountRate();
        var taxRate=0.1;
        var discount=0;
        var tax=0;
        for(var i=0;i<window.localStorage.length;i++)
        {
            if(typeof itemList[localStorage.key(i)] === "undefined")
            continue;
            var tr=document.createElement("tr");
            var photoCell=document.createElement("td");
            var nameCell=document.createElement("td");
            var priceCell=document.createElement("td");
            var numberCell=document.createElement("td");
            var sumCell=document.createElement("td");
            var removeCell=document.createElement("td");
            var removeLink=document.createElement("a");
            var item=itemList[localStorage.key(i)];
            var number=localStorage.getItem(localStorage.key(i));
            photoCell.style.textAlign="center";
            photoCell.innerHTML="<img src='"+item.photo+"' class='round-figure'
            width='100px'/>";
            nameCell.innerHTML=item.name;
            priceCell.innerHTML=formatter.format(item.price);
            priceCell.style.textAlign="right";
            numberCell.innerHTML=number;
            numberCell.style.textAlign="right";
            sum=number*item.price;
            sumCell.innerHTML=formatter.format(sum);
            sumCell.style.textAlign="right";
            removeLink.innerHTML="<i class='fa fa-trash icon-pink'></i>";
            removeLink.setAttribute("href","#");
            removeLink.setAttribute("data-code",localStorage.key(i));
            removeLink.onclick=function(){
            removeCart(this.dataset.code);};
            removeCell.style.textAlign="center";
            removeCell.appendChild(removeLink);
            tr.appendChild(photoCell);
            tr.appendChild(nameCell);
            tr.appendChild(numberCell);
            tr.appendChild(priceCell);
            8
            tr.appendChild(sumCell);
            tr.appendChild(removeCell);
            container.appendChild(tr);
            totalPreTax+=sum;
            }
            var discount=totalPreTax*discountRate;
            var tax=(totalPreTax-discount)*taxRate;
            document.getElementById("bill_pre_tax_total").innerHTML=formatter.format(totalPr
            eTax);
            document.getElementById("bill_discount").innerHTML=discountRate+" x A =
            "+formatter.format(discount);
            document.getElementById("bill_tax").innerHTML=formatter.format(tax);
            document.getElementById("bill_total").innerHTML=formatter.format(totalPreTaxdiscount+tax);
        
}
function removeCart(){
if(typeof window.localStorage(sp001)!=="underfined")
{
    window.localStorage.removeItem(sp001);
    document.getElementById("cartDetail").getElementsByTagName('tbody')[0].innerHTML="";
    showCart();
}
}
window.onstorage = ()=>{
    showCart();
};
function getDiscountRate()
{
var d=new Date();
var weekday=d.getDay();
var totalMins=d.getHours()*60+d.getMinutes();
if(weekday>=1&&weekday<=3&&((totalMins>=420&&totalMins<=660)||(totalMins>=780&&tota
lMins<=1020)))
return 0.1;
return 0;
}
var itemList={   
    "sp001":{ 	"name":"Sữa Chua Vị Kiwi", 
 "price":21000, 
 "photo":"images/sanpham/kiwi.jpg"}, 
