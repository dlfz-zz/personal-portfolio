document.addEventListener('DOMContentLoaded', function() {
    // 获取搜索触发器和搜索框元素
    var searchTrigger = document.getElementById('search-trigger');
    var searchBox = document.getElementById('search-box');

    // 为搜索触发器添加点击事件监听器
    searchTrigger.addEventListener('click', function() {
        // 切换搜索框的 'active' 类名
        searchBox.classList.toggle('active');
    });
});

var swiper = new Swiper(".mySwiper", {
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

  document.getElementById('earth-icon').addEventListener('click', function() {
    showPopup();
});

document.getElementById('popup-close').addEventListener('click', function() {
    closePopup();
});

function showPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block'; // 显示弹出页面
}

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none'; // 隐藏弹出页面
}