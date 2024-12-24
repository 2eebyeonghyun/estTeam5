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

function videoPlay(){
    const video = document.querySelector('.videoBox__video');
    const videoBtn = document.querySelector('.videoBox__btn');
    const videoIcon = document.querySelector('.videoBox__btn .btn-play');

    videoIcon.innerHTML = `<i class="fa-solid fa-play"></i>`;

    videoBtn.addEventListener('click', function(){

        // 만약 videoBtn에 play클래스가 존재하면
        // 버튼 클릭 시 비디오를 재생시킨다.
        // 또, play 클래스를 삭제하고 pause 클래스를 추가한다.
        // 그리고 아이콘영역에 폰트어썸아이콘을 가져온다.
        if(videoBtn.classList.contains('play')){
            video.play();
            videoIcon.innerHTML = `<i class="fa-solid fa-pause"></i>`;
            videoBtn.classList.remove('play');
            videoBtn.classList.add('pause');
        } else if (videoBtn.classList.contains('pause')) {
            video.pause();
            videoIcon.innerHTML = `<i class="fa-solid fa-play"></i>`;
            videoBtn.classList.remove('pause');
            videoBtn.classList.add('play');
        }
    });
}

menuBtn();
videoPlay();