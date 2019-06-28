function phimLen(){
let element=document.getElementById("nobita");
element.style.top=parseInt(element.style.top)- 5 +'px';
}
function phimXuong() {
    let element=document.getElementById("nobita");
    element.style.top=parseInt((element.style.top))+ 5 +'px';
}
function sangTrai() {

    let element=document.getElementById("nobita");
    element.style.left=parseInt((element.style.left))- 5 +'px';
}
function sangPhai() {
    let element=document.getElementById("nobita");
    element.style.left=parseInt((element.style.left))+ 5 +'px';

}
function nhanPhim(evt) {
    switch(evt.key){
        case "a":
            sangTrai();
        break;
        case "w":
            phimLen();
        break;
        case "d":
            sangPhai();
        break;
        case "s":
            phimXuong();
            break;
    }


}
function doReady() {
    window.addEventListener('keydown',nhanPhim);
    
}