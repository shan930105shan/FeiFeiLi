document.addEventListener('DOMContentLoaded', () => {
    const cube = document.querySelector('.cube');
    const flipButton = document.getElementById('flipCube');
    let isFlipped = false;
    let rotateX = 0;
    let rotateY = 0;

    document.addEventListener('mousemove', (event) => {
        const xDiff = event.clientX - window.innerWidth / 2;
        const yDiff = event.clientY - window.innerHeight / 2;

        rotateX = yDiff * 0.1;
        rotateY = xDiff * 0.1;

        updateCubeRotation();
    });

    flipButton.addEventListener('click', () => {
        isFlipped = !isFlipped;
        updateCubeRotation();
    });

    function updateCubeRotation() {
        const flipAngle = isFlipped ? 180 : 0;
        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY + flipAngle}deg)`;
    }
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
const carouselInner = document.querySelector('.carousel-inner');
let currentIndex = 0;

function updateCarousel() {
    const width = carouselInner.clientWidth;
    carouselInner.style.transform = `translateX(-${currentIndex * width}px)`;
}

function nextImage() {
    const totalImages = carouselInner.querySelectorAll('img').length;
    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}

window.addEventListener('resize', updateCarousel);

// 自動播放
setInterval(nextImage, 3000); // 每3秒切換一次圖片
