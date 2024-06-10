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

// 打字效果的元素
const textElements = [
    document.getElementById('typewriter-text1'),
    document.getElementById('typewriter-text2')
];

// 文本数组
const textArray = [
    ["AI Female Scientist", "Top 100 AI Influencers", "About Dr. Li Feifei"],
    ["Computer vision...", "Machine learning...", "Artificial Intelligence..."]
];

// 索引数组
let arrayIndices = [0, 0]; // 文本数组的索引
let charIndices = [0, 0]; // 当前字符的索引

// 打字函数
function type(index) {
    const textElement = textElements[index];
    const text = textArray[index][arrayIndices[index]];

    if (charIndices[index] < text.length) {
        textElement.innerHTML += text.charAt(charIndices[index]);
        charIndices[index]++;
        setTimeout(() => type(index), 100); // 设置打字速度
    } else {
        setTimeout(() => erase(index), 2000); // 文本显示完成后等待一段时间再开始删除
    }
}

// 删除函数
function erase(index) {
    const textElement = textElements[index];
    const text = textArray[index][arrayIndices[index]];

    if (charIndices[index] > 0) {
        textElement.innerHTML = text.substring(0, charIndices[index] - 1);
        charIndices[index]--;
        setTimeout(() => erase(index), 50); // 设置删除速度
    } else {
        arrayIndices[index] = (arrayIndices[index] + 1) % textArray[index].length;
        setTimeout(() => type(index), 500); // 等待一段时间后重新开始打字
    }
}

// 启动打字效果
type(0);
type(1);

// 在页面加载完成后启动打字效果
document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(type, 1000); // 页面加载完成后等待一秒钟开始打字
});