document.addEventListener("DOMContentLoaded", function() {
    console.log("BBQ 웹사이트 준비 완료!");
    
    // 박스를 클릭했을 때 알림창 띄우기
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
        box.addEventListener('click', function() {
            alert('이 메뉴를 선택하셨습니다!');
        });
    });
});