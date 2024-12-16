"use strict"

function menuBtn(){
    // menuBtn 변수선언
    const menuBtn = document.querySelectorAll('.btn-menu');
    const sideBar = document.querySelector('.sideMenu');

    // 변수에 클릭이벤트를 주어 클릭 시 active클래스가 추가/제거 되도록 만듬
    // toggle : 클릭할때마다 active가 추가/제거 됨
    menuBtn.forEach(btn => {
        btn.addEventListener('click', function(){
            sideBar.classList.toggle('--active');
        });
    });
}

menuBtn();