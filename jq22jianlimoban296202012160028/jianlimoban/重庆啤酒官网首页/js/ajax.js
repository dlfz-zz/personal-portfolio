function ajaxFun(dataurl,id, fn){
    // 1. 创建请求对象 
    let  req = new XMLHttpRequest();
    req.open("get", dataurl);
    req.send();
    // 2. 监听 readystatechange 事件
    req.addEventListener("readystatechange", function(){
         if( req.readyState == 4 && req.status == 200){
             let data = JSON.parse(req.responseText);  // 对字符串转为 JSON
             // 对数据进行处理
             fn(id,data);
         }
    });
}

//  function 本质是一个形参，是一个函数表达式，是在定义一个函数
ajaxFun("https://mock.apipark.cn/m1/4705588-4357676-default/getdata", "news",function(id,data){
    data.forEach(function(item, index){
        // 选择要插入内容的容器


// 遍历JSON数组并创建HTML元素
    // 创建新的新闻容器div
    let newDiv = document.createElement('div');
    newDiv.className = 'new';
    

    // 创建图片容器div
    let picDiv = document.createElement('div');
    picDiv.className = 'pic'; 

    // 创建图片a标签
    let imgA = document.createElement('a');
    imgA.href = (item.weburl);

    // 创建图片img标签并设置属性
    let img = document.createElement('img');
    img.src = item.src;
    img.style.width = '365.66px';
    imgA.appendChild(img);

    // 将图片a标签添加到图片容器div
    picDiv.appendChild(imgA);

    // 创建文本容器div
    let textDiv = document.createElement('a');
    textDiv.className = 'text2';
    textDiv.href=(item.weburl);
    


    // 添加新闻标题
    let title = document.createTextNode(item.title);
    textDiv.appendChild(title);

    // 添加日期
    let dateP = document.createElement('p');
    dateP.textContent = item.date;
    textDiv.appendChild(dateP);

    // 将图片和文本容器添加到新闻容器div
    newDiv.appendChild(picDiv);
    newDiv.appendChild(textDiv);

    // 将新闻容器div添加到主容器
    let container = document.querySelector(".news");
    container.appendChild(newDiv);
});
    });