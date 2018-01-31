/*
* @Author: Administrator
* @Date:   2018-01-28 14:43:56
* @Last Modified by:   Administrator
* @Last Modified time: 2018-02-01 00:57:12
*/
// window.onload=function () {
// 	let lis=document.querySelectorAll('.banner2 li');
// 	let box=document.querySelectorAll('.phoneka hha')
// 	lis.forEach(function (m,n) {
//         m.onmouseover=function () {
//             lis.forEach(function (val,index) {
//                 val.className='';

//             });
//             m.className='active';
//             box.forEach(function (val,index) {
//                 val.className='';
//             });
//             box[n].className="active";
//         }
//     })
// }
//轮播
window.onload=function () {
    let ul=document.querySelectorAll('.xxk li.blok');
    let  ce=document.querySelectorAll('.banner ul.banner2 li');
    let  bt=document.querySelector('div.banner');
         for(let i=0;i<ce.length;i++){
             ce[i].onmouseover=function(){
                 ul[i].style.display='block';
             }
             ce[i].onmouseout=function(){
                 ul[i].style.display='none';
             }
             ul[i].onmouseover=function () {
                 ul[i].style.display='block';
             }
             ul[i].onmouseout=function () {
                 ul[i].style.display='none';
             }
         };




    let div=document.querySelector('.banner');
    let banner=document.querySelectorAll('.banner1 li');
    let left=document.querySelector('.banner3_left');
    let right=document.querySelector('.banner3_right');
    let dian=document.querySelectorAll('.lun li')
    let n=0;
    function move() {
        if(n==banner.length){
            n=0;
        }
        banner.forEach(function (value,index) {
            value.classList.remove('active');
            dian[index].classList.remove('active');
        })
        banner[n].className='active';
        dian[n].classList.add('active');
        n++;
    }
    let time=setInterval(move,2000);
    div.onmouseover=function () {
        clearInterval(time);
    }
    div.onmouseout=function () {
        time=setInterval(move,2000);
    }
    right.onclick=function () {
        n++;
        if(n==banner.length){
            n=0;
        }
        banner.forEach(function (value,index) {
            value.classList.remove('active');
            dian[index].classList.remove('active');
        })
        banner[n].className='active';
        dian[n].classList.add('active');
    }
    left.onclick=function () {
        n--;
        if(n<0){
            n=banner.length-1;
        }
        banner.forEach(function (value) {
            value.classList.remove('active');
        })
        banner[n].className='active';
    }
    dian.forEach(function(val,ind){
        val.onclick=function(){
            dian.forEach(function(i,j){
                i.classList.remove('active')
                banner[n].classList.remove('active')
            })
            this.classList.add('active');
            banner[ind].classList.add('active');
            n=ind;
        }
    })

        function change(a,b) {
        let chose=document.querySelectorAll(a);
        let main=document.querySelectorAll(b);
        chose.forEach(function (dom,index) {
            dom.onmouseover=function () {
                chose.forEach(function (val,ind) {
                    val.classList.remove('active_');
                    main[ind].classList.remove('active_');
                })
                this.classList.add('active_');
                main[index].classList.add('active_');
            }
        })
        
    }
    change('.box1 .box1_top .box1_right1 .box1_right','.box1 .box1_bottom .box1_2');
    change('.box1zn .box1_top .box1_right1 .box1_right','.box1zn .box1_bottom .box1_2');
    change('.box1nn .box1_top .box1_right1 .box1_right','.box1nn .box1_bottom .box1_2');
    change('.box1hh .box1_top .box1_right1 .box1_right','.box1hh .box1_bottom .box1_2');
    change('.box1gg .box1_top .box1_right1 .box1_right','.box1gg .box1_bottom .box1_2');

function nrlb(nr){
    let now=0;
    let next=0;
    let content=nr.querySelectorAll('.neirong_bottom_1')
    let width=parseInt(getComputedStyle(nr,null).width);
    let nrleft=nr.querySelector('.xiaoleft');
    let nrright=nr.querySelector('.xiaoright');
    let nrdian=nr.querySelectorAll('.lunbo a')
    function nrmove(){
        next=now+1;
        if(next>=content.length){
            next=0;
        }
        content[next].style.left="100%";
        animate(content[now],{left:-width});
        animate(content[next],{left:0});
        nrdian[now].classList.remove('dbh');
        nrdian[next].classList.add('dbh')
        now=next;
    }
    t=setInterval(nrmove,2000)
    nr.onmouseover=function(){
        clearInterval(t);
    }
    nr.onmouseout=function(){
        t=setInterval(nrmove,2000);
    }
    nrleft.onclick=function(){
        next=now-1;
        if(next<0){
            next=content.length-1;
        }
        content[next].style.left="-100%";
        animate(content[now],{left:width});
        animate(content[next],{left:0});
        nrdian[now].classList.remove('dbh');
        nrdian[next].classList.add('dbh')
        now=next;
    }
    nrright.onclick=function(){
        next=now+1;
        if(next>=content.length){
            next=0;
        }
        content[next].style.left="100%";
        animate(content[now],{left:-width});
        animate(content[next],{left:0});
        nrdian[now].classList.remove('dbh');
        nrdian[next].classList.add('dbh')
        now=next;
    }
    nrdian.forEach(function(i,j){
        i.onclick=function(){
            if(j<now){
                next=j;
                content[next].style.left="-100%";
                animate(content[now],{left:width});
                animate(content[next],{left:0});
                nrdian[now].classList.remove('dbh');
                nrdian[next].classList.add('dbh')
                now=next; 
            }else if(j>now){
                next=j;
                content[next].style.left="100%";
                animate(content[now],{left:-width});
                animate(content[next],{left:0});
                nrdian[now].classList.remove('dbh');
                nrdian[next].classList.add('dbh')
                now=next;
            }
        }
        
    })
    }
    let nrs=document.querySelectorAll('.neirong_bot');
    nrs.forEach(function(value){
        nrlb(value);
    });


    let mxzj=document.querySelector('.box_right1');
let mxyj=document.querySelector('.box_right2');
let mxdp=document.querySelectorAll('.box_bbg');
mxzj.onclick=function(){
	mxs--
	if(mxs<0){
		mxs=mxdp.length-1
	}
	mxdp.forEach(function(val,ind){
		val.classList.remove('active')
	})
	mxdp[mxs].classList.add('active')
}
mxyj.onclick=function(){
	dong()
}

let mxs=0
function dong (){
	mxs++
	if(mxs>1){
		mxs=0
	}
	mxdp.forEach(function(val,ind){
		val.classList.remove('active')
	})
	mxdp[mxs].classList.add('active')
}
let mxt=setInterval(dong,3000)
mxdp.forEach(function(val){
	val.onmouseover=function(){
		clearInterval(mxt)
	}
})
mxdp.forEach(function(val){
	val.onmouseout=function(){
		mxt=setInterval(dong,3000)
	}
})
}






