document.addEventListener('DOMContentLoaded',function(){
    //今日，昨日，近7天，本月
    var orbtn=document.getElementsByClassName("or_btn");
    //初始化
    orbtn[0].classList.add('br');
    for(var i=0;i<orbtn.length;i++){
        orbtn[i].onclick=function(){
            for(var j=0;j<orbtn.length;j++){
                orbtn[j].classList.remove('br');
            }
            this.classList.add('br');
        }
    }
})