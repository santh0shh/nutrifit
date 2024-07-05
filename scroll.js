let prevpos = window.scrollY;
let navbar = document.getElementById("header");
window.onscroll = function(){
    curpos = window.scrollY;
    if(window.innerWidth >= 750){
        if(curpos > prevpos){
            navbar.style.top="-75px";
        }
        else{
            navbar.style.top="0";
        }
        prevpos = curpos;
    }

    let h = document.getElementById('abtus').scrollHeight;
    i=0;
    if(curpos>200){
        // let newMaxHeight = Math.min(paragraph[0].scrollHeight, curpos);
        // paragraph[0].style.maxHeight = newMaxHeight + 'px';
        // i++;
        h += document.getElementById('bmi').scrollHeight;
    }
    
    if(curpos >  h){
        // document.getElementsByClassName("bmi")[0].style.transform = 'translateX(calc(50vw - 50%))';
        document.getElementsByClassName("bmi")[0].style.opacity = '100%';
        h += 500;
    }
    
    if(curpos > h){
        for(i=0;i<4;i++){
            document.getElementsByTagName('li')[i].style.paddingLeft = '0';
        }
        h += document.getElementById('diet').scrollHeight;
    }
    if(curpos > h){
        for(i=0;i<11;i++){
            document.getElementsByClassName('temp')[i].style.margin = '30px';
        }
        h += document.getElementById('exer').scrollHeight;
        if(document.innerWidth > 1000 && document.innerWidth < document.innerHeight){
            h += 400;
            alert("hi);
        }
    }
    if(curpos > h){
        document.getElementsByClassName('myimg')[0].style.transform = "rotateY(0deg)";
    }
}
