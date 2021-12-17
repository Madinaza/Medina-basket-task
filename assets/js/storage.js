let row = document.querySelector(".row");

if(
    localStorage.getItem("basket")===null||
    localStorage.getItem("basket")=="[]"
    
){
    localStorage.setItem("basket", JSON.stringify([]));
let div=document.createElement("div");
let p=document.createElement("p");

p.innerText="Your basket is empty.";
p.style.fontSize="80px"
p.style.textAlign="center"
div.appendChild(p);
row.append(div)

}
else{
    let basket=JSON.parse(localStorage.getItem("basket"));

    basket.forEach(p => {
        let div=document.createElement("div")
        let image=document.createElement("img");
        let pCOUNT=document.createElement("p");
        let pPrice=document.createElement("p");
        let pModel=document.createElement("p")

        div.classList="col-lg-5"
        div.style.border="1px"
        div.style.borderColor="rgb(203 213 225)"
        div.style.borderStyle="solid"
        div.style.margin="10px"

        
        image.style.width="528px"
        image.src=p.image;
        // image.style.marginLeft="10px"
        image.style.marginBottom="20px"
        image.style.marginTop="20px"

        pModel.innerText=p.model;
        pModel.style.fontSize="25px"
        pModel.style.textAlign="center"



        pCOUNT.innerText="Count:" + p.count;
        pCOUNT.style.fontSize="25px"
        pCOUNT.style.textAlign="center"



        pPrice.innerText="Price:"+p.price+"$";
        pPrice.style.fontSize="25px"
        pPrice.style.textAlign="center"
        pPrice.classList="fw-bold"

        div.append(image,pModel, pCOUNT,pPrice);
        
        row.append(div);


    });



    
}




