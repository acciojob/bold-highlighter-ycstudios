const strong=document.querySelectorAll("strong")

function highlight() {
for(let i=0;i<strong.length;i++){
    
    strong[i].style.color="rgb(0, 128, 0)"

}};


function return_normal() {
    for(let i=0;i<strong.length;i++){
    
        strong[i].style.color="rgb(0, 0, 0)"
    
    }

    
};
