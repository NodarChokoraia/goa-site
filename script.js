let down = document.getElementById('down');
let up = document.getElementById('up');
let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let div4 = document.getElementById('div4');
let div5 = document.getElementById('div5');
let arr = [div1,div2,div3,div4,div5]
let num = 0;
let video1 =  document.getElementById('video')


function down1(){
    
    num--
    if(num == 0){
        div1.style.display = 'flex'
        div2.style.display = 'none'
        div3.style.display = 'none'
        div4.style.display = 'none'
        div5.style.display = 'none'
    }else if(num == 1){
        div1.style.display = 'none'
        div2.style.display = 'flex'
        div3.style.display = 'none'
        div4.style.display = 'none'
        div5.style.display = 'none'
    }else if(num == 2){
        div1.style.display = 'none'
        div2.style.display = 'none'
        
        div4.style.display = 'none'
        div5.style.display = 'none'
        div3.style.display = 'flex'
    }else if(num == 3){
        div1.style.display = 'none'
        div2.style.display = 'none'
        div3.style.display = 'none'
        
        div5.style.display = 'none'
        div4.style.display = 'flex'
    }else if(num == 4){
        div1.style.display = 'none'
        div2.style.display = 'none'
        div3.style.display = 'none'
        div4.style.display = 'none'
        
        div5.style.display = 'flex'
    }else if(num <0){
        num = 4
        div1.style.display = 'none'
        div2.style.display = 'none'
        div3.style.display = 'none'
        div4.style.display = 'none'
        
        div5.style.display = 'flex'
    }
}
function up1(){
    
    num++
    if(num == 0){
        div1.style.display = 'flex'
        div2.style.display = 'none'
        div3.style.display = 'none'
        div4.style.display = 'none'
        div5.style.display = 'none'
    }else if(num == 1){
        div1.style.display = 'none'
        div2.style.display = 'flex'
        div3.style.display = 'none'
        div4.style.display = 'none'
        div5.style.display = 'none'
    }else if(num == 2){
        div1.style.display = 'none'
        div2.style.display = 'none'
        
        div4.style.display = 'none'
        div5.style.display = 'none'
        div3.style.display = 'flex'
    }else if(num == 3){
        div1.style.display = 'none'
        div2.style.display = 'none'
        div3.style.display = 'none'
        
        div5.style.display = 'none'
        div4.style.display = 'flex'
    }else if(num == 4){
        div1.style.display = 'none'
        div2.style.display = 'none'
        div3.style.display = 'none'
        div4.style.display = 'none'
        
        div5.style.display = 'flex'
    }else if(num >4){
        num = 0
        div1.style.display = 'flex'
        div2.style.display = 'none'
        div3.style.display = 'none'
        div4.style.display = 'none'
        
        div5.style.display = 'none'
    }
}
down.addEventListener('click',down1)


up.addEventListener('click',up1)

document.addEventListener('keydown',function(e){
    if(e.key === "ArrowLeft" ){
        down1()
    }else if(e.key === "ArrowRight"){
        up1()
    }
})


video1.addEventListener('mouseover',function(){
    
    video1.controls = true

})


  
