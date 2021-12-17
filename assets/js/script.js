let addBasket=document.querySelectorAll(".addToCard")
let cartList=document.querySelector(".shopping-card-list")
let shopButton=document.querySelector(".shopListButon ")

if(localStorage.getItem("basket") === null){
   localStorage.setItem("basket",JSON.stringify([]));
}

class Shopping{
    constructor(price,model,image){
        this.image=image;
        this.model=model;
        this.price=price;
       
    }

}

class Cart{
    addToCart( shopping){
        const listItem=document.createElement("div")
        listItem.classList="list-item";

     listItem.innerHTML =
     `
     <div class="row align-items-center text-danger-50">
     <div class="col-md-3">
         <img src="${shopping.image}" width="80px" alt="product">
     </div>
     <div class="col-md-5">
         <div class="title">${shopping.model}</div>
     </div>
     <div class="col-md-2">
         <div class="price">${shopping.price}</div>
     </div>
     <div class="col-md-2">
         <button class="btn btn-delete">
             <i class="fas fa-trash-alt text-danger"></i>
         </button>
     </div>
     
    


    

 </div>
 


     `
     cartList.append(listItem);
 
           
            
        

        
       
        

    }

    removeCard(){
        let btnRemove=document.getElementsByClassName("btn-delete")
        let remove=this;
      for (let i = 0; i < btnRemove.length; i++) {
          btnRemove[i].addEventListener("click",function(){
            //   let permission=confirm("ARE YOU SURE DELETE THIS PRODUCT?")
            // if(permission){
            this.parentElement.parentElement.parentElement.remove();
              
            // }
            
          })
      }
    }
}

addBasket.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        e.preventDefault();
        
        if(localStorage.getItem("basket")===null){
            localStorage.setItem("basket",JSON.stringify([]))
         }

        let basket=JSON.parse(localStorage.getItem("basket"));

        
        let price=this.previousElementSibling.children[0].innerText;
        // console.log(price)
        let model=this.parentElement.children[0].innerText;
        // console.log(model)
        let image=this.parentElement.previousElementSibling.src;
        // console.log(image)

        let Id=this.getAttribute("data-id");
        // console.log(Id)
        

        let existProduct=basket.find(p=>p.Id==Id)
      
        let shopping= new Shopping(price,model,image)

        let cart=new Cart();
        cart.addToCart(shopping);
        cart.removeCard();
        // console.log(existProduct)
        if(existProduct==undefined){

            let product ={
                Id,
                price,
                model,
                image,
                count: 1,
            };
            basket.push(product);
        }
        else{
            existProduct.count++;
        }
    
        localStorage.setItem("basket",JSON.stringify(basket)); 
        // console.log(basket)
        productCount();
        totalPrice();
  
    });
});

productCount();
function productCount(){
let basket=JSON.parse(localStorage.getItem("basket"));
let countElement=document.querySelector(".countProduct")
let count=0;
basket.forEach((p)=>{
    count +=p.count;

});
countElement.innerText=count;
}
totalPrice();

function totalPrice() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    let priceElement = document.querySelector(".totalPrice")
    //   let total = 0;
    //   basket.forEach((p) => {
    //     total += +p.price * p.count;
    //   });
  
    let total = basket.reduce((total, p) => {
      return (total += p.price * p.count);
    }, 0);
    priceElement.innerText = total;
    console.log()
  }

Toggle();
function Toggle(){
    shopButton.addEventListener("click",function(){
        cartList.classList.toggle("d-none")
    })

}

 
 

















































  

    
  

