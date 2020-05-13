

    do {
function getDay() {

        var date = new Date();
        var second = date.getSeconds();
        var minute = date.getMinutes();
        var hour = date.getHours();

        var late = (hour + ":" + minute + ":" + second);
        console.log(late);
        return late;
}
var time = "Time: "
var bread = time + late;
console.log(bread);

document.getElementById("time1").innerHTML = bread;
        }
      while (x = 0)