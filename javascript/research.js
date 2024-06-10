// scripts.js

document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('loopingVideo');
    const pauseArea = document.getElementById('pause-area');
    const infoBox = document.getElementById('info-box');

    pauseArea.addEventListener('mouseenter', () => {
        video.pause();
        infoBox.style.display = 'block';
        pauseArea.style.cursor = 'pointer'; //鼠標懸停
    });

    pauseArea.addEventListener('mouseleave', () => {
        video.play();
        infoBox.style.display = 'none';
    });
});
// 創建大圈圈
const outerCube = document.createElement('div');
outerCube.classList.add('outer-cube');

// 創建小圈圈
const innerCube = document.createElement('div');
innerCube.classList.add('inner-cube');

// 創建鼠標容器
const cursor = document.createElement('div');
cursor.classList.add('cursor');
cursor.appendChild(outerCube);
cursor.appendChild(innerCube);
document.body.appendChild(cursor);

// 監聽滑鼠移動事件
document.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
});

// 監聽滑鼠點擊事件
document.addEventListener('mousedown', () => {
    cursor.classList.add('click');
});

// 監聽滑鼠釋放事件
document.addEventListener('mouseup', () => {
    cursor.classList.remove('click');
});