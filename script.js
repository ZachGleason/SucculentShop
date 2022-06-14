function carting () {
    window.alert("your cart is empty");
}


// function over(element) {
//     document.getElementById("#box2").src = "succulents-2.jpg";
//     element.style.backgroundImage = "succulents-1.jpg";
//     console.log("#box2");
// }

// function out(element) {
//     document.getElementById("#box2").src = "succulents-1.jpg";
//     element.style.backgroundImage = "succulents-1.jpg";
//     console.log("#box2");
// }


// element.style.backgroundImage = "succulents-1.jpg"

function hover(element) {
    element.setAttribute('src', 'assets/succulents-2.jpg');
}

function unhover(element) {
    element.setAttribute('src', 'assets/succulents-1.jpg');
}



function alertconfirm(element){
    customMsgBox("This is my title","how are you?");
}

