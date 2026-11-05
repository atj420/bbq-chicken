// 외부 플러그인 없이 순수하게 12개 박스의 마우스 오버만 처리하는 기본 스크립트
document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
        box.addEventListener('mouseenter', function() {
            this.style.opacity = '0.9';
        });
        box.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
    });
});
