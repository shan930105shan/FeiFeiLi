window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var imageContainers = document.querySelectorAll('.image-container, .image-container2, .image-container3');
    var windowHeight = window.innerHeight;

    imageContainers.forEach(function(imageContainer) {
        var containerPosition = imageContainer.offsetTop;

        if (scrollPosition > containerPosition - windowHeight && scrollPosition < containerPosition + windowHeight) { // 在可視範圍內時
            imageContainer.classList.add('visible'); // 添加 visible 類，使圖片和文字浮出
        } else {
            imageContainer.classList.remove('visible'); // 移除 visible 類，使圖片和文字隱藏
        }
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
