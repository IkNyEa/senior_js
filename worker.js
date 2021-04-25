function fabinac(n) { //处理函数
    return n <= 2 ? 1 : fabinac(n - 1) + fabinac(n - 2);

}

var onmessage = function(event) {
    var number = event.data;
    console.log('分线程接受到来自主线程的数据:' + number);
    var result = fabinac(number);
    postMessage(result);
    console.log('分线程向主线程返回接收到的数据：' + result);

}