// OOP DOCUMENTATION WITHOUT THIS

var purchase = {
    value: 200,
    tax: 2.4,
    totalPrice: function (){
        var result = purchase.value + purchase.tax;
        console.log('Final price', result);
    }
}
purchase.totalPrice();

// OOP USING THIS KEYWORD
var purchase = {
    value: 200,
    tax: 2.4,
    totalPrice: function (){
        var result = this.value + this.tax;
        console.log('Final price', result);
    }
}
purchase.totalPrice();