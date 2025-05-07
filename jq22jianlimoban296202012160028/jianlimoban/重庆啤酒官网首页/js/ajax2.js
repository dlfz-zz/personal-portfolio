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

ajaxFun("https://mock.apipark.cn/m1/4705588-4357676-default/getdData", "baogao",function(id,data){
    data.forEach(function(item, index){
    let ul = document.querySelector("#baogao");
    // ul.className = 'baogao';
    // ul.append(ul)
    
    // 创建列表项li
    let li = document.createElement('li');
    li.className = 'bg1';
    li.style.lineHeight = '65px';
    // console.log(li);

    // 创建图片容器div
    let bgpic = document.createElement('div');
    bgpic.className = 'bgpic';
    let img = document.createElement('img');
    img.src = item.image;
   // console.log(  img.src = item.image)
    img.style.height = '65px';
    bgpic.appendChild(img);

    // 创建标题div
    let flag = document.createElement('div');
    flag.className = 'flag';
    flag.textContent = item.title;

    // 将图片容器和标题添加到列表项li中
    li.appendChild(bgpic);
    li.appendChild(flag);

    // 创建锚点a并设置href属性
    let a = document.createElement('a');
    a.href = item.weburl;
    console.log(a)
    a.appendChild(li);
    // 将锚点a添加到ul元素中
    ul.appendChild(a);
});
});