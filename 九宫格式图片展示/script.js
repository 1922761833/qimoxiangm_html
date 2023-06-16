const images = [
  { url: "images/gx01.png", keywords: ["国画", "梅花"] },
  { url: "images/gx03.png", keywords: ["国画", "莲藕"] },
  { url: "images/gx04.png", keywords: ["国画", "海棠"] },
  { url: "images/gx01.png", keywords: ["国画", "梅花"] },
  { url: "images/gx03.png", keywords: ["国画", "莲藕"] },
  { url: "images/gx04.png", keywords: ["国画", "海棠"] },
  { url: "images/gx01.png", keywords: ["国画", "梅花"] },
  { url: "images/gx03.png", keywords: ["国画", "莲藕"] },
  { url: "images/gx04.png", keywords: ["国画", "海棠"] },
  // 添加更多图片及其关键词
];

function showAllImages() {
  const imageGrid = document.getElementById("imageGrid");
  imageGrid.innerHTML = "";

  for (let i = 0; i < images.length; i++) {
    const image = images[i];

    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    const img = document.createElement("img");
    img.src = image.url;
    img.classList.add("zoomable"); // 添加zoomable类名
    gridItem.appendChild(img);
    imageGrid.appendChild(gridItem);
  }
}

function searchImages() {
  const searchInput = document.getElementById("search");
  const keyword = searchInput.value.toLowerCase();

  const imageGrid = document.getElementById("imageGrid");
  imageGrid.innerHTML = "";

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const keywords = image.keywords.map(kw => kw.toLowerCase());

    if (keyword === "" || keywords.includes(keyword)) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      const img = document.createElement("img");
      img.src = image.url;
      img.classList.add("zoomable"); // 添加zoomable类名
      gridItem.appendChild(img);
      imageGrid.appendChild(gridItem);
    }
  }
}

// 初始加载时显示所有图片
showAllImages();

// 获取所有具有zoomable类名的图片元素
const zoomableImages = document.querySelectorAll(".zoomable");

// 添加鼠标触碰事件监听器
zoomableImages.forEach(image => {
  image.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.2)"; // 图片放大效果
  });

  image.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)"; // 恢复原始大小
  });
});

//页面提示信息
function showMessage(message) {
  var messageContainer = document.getElementById("message-container");
  var messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.textContent = message;
  messageContainer.appendChild(messageElement);
}

showMessage("输入关键词：梅花、海棠、莲藕、国画，筛选图片");

