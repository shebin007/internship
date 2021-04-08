// var x = 0;
// document.getElementById('readmore').addEventListener('click', function() {
//     x++;
//     document.getElementById('banner-head').innerHTML = x;
// })

document.getElementById('reset').addEventListener('click', function() {
    x = 0;
    document.getElementById('banner-head').innerHTML = x;
})

document.getElementById('addition').addEventListener('submit', function(e) {
    e.preventDefault();
    var val1;
    var val2;
    val1 = document.getElementById('value1').value;
    val2 = document.getElementById('value2').value;
    var sum = parseInt(val1) + parseInt(val2);
    document.getElementById('ans').innerHTML = sum;

})