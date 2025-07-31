

const product = {
    plainBurger:{
        name: 'Гамбургер простой',
        price: 25000,
        kcall: 400,
        amount: 0,
        get Psuma(){
            return this.price * this.amount;
        },
        get Ksuma(){
            return this.kcall * this.amount;
        },
    },
    freshBurger:{
        name: 'Гамбургер FRESH',
        price: 40000,
        kcall: 600,
        amount: 0,
        get Psuma(){
            return this.price * this.amount;
        },
        get Ksuma(){
            return this.kcall * this.amount;
        },
    },
    freshCombo:{
        name: 'FRESH COMBO',
        price: 55000,
        kcall: 800,
        amount: 0,
        get Psuma(){
            return this.price * this.amount;
        },
        get Ksuma(){
            return this.kcall * this.amount;
        },
    },
}

const btnPlorMn = document.querySelectorAll('.main__product-btn') 

for (let i = 0; i < btnPlorMn.length; i++) {
    btnPlorMn[i].addEventListener('click', function () {
        PluseOrMinus(this);
    })
}

function PluseOrMinus(element) {
    let parentID = element.closest('.main__product').getAttribute('id');
    
    out = element.closest('.main__product').querySelector('.main__product-num');
    price = element.closest('.main__product').querySelector('.main__product-price span');
    kcall = element.closest('.main__product').querySelector('.main__product-call span');
    
    if (element.getAttribute('data-symbol') == '+' && product[parentID].amount < 15 ) {
        product[parentID].amount++;
    }
    
    else if (element.getAttribute('data-symbol') == '-' && product[parentID].amount > 0) {
        product[parentID].amount--;
    }
    
    
    out.innerHTML = product[parentID].amount;
    price.innerHTML = product[parentID].Psuma;
    kcall.innerHTML = product[parentID].Ksuma;
    
}


const addCart = document.querySelector('.addCart');
const receipt = document.querySelector('.receipt');
const receipt__window = document.querySelector('.receipt__window');


addCart.addEventListener('click' , function () {
    receipt.classList.add('active');
    receipt__window.classList.add('active');
    
    setInterval(() => {
        receipt__window.classList.add('active1')
    }, 100);
})

const Pay = document.querySelector('.receipt__window-btn');

Pay.addEventListener('click', function () {
    receipt.classList.remove('active');
    receipt__window.classList.remove('active' , 'active1');
    
})