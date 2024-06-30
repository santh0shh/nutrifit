let btn = document.getElementsByTagName("button");
btn[0].style.backgroundColor="lightblue";
btn[1].style.backgroundColor="lightgreen";
btn[2].style.backgroundColor="orange";
btn[3].style.backgroundColor="red";

let ex = document.getElementsByClassName("temp");

function w(c, setclr){
    let u = [ [8], [0, 1, 2, 3, 7], [0, 8, 9], [0, 2, 8, 9, 10] ];
    let j=0;
    let tmp;
    for(i=0;i<=10;i++){
        if(i == u[c][j]){
            tmp = setclr;
            j++;
        }
        else if(i == 4 || i == 5 || i ==6){
            tmp = setclr;
        }
        else{
            tmp = "white";
        }
        ex[i].style.backgroundColor=tmp;
    }
}



