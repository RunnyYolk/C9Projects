function average(arr){
    var sum = arr.reduce(
        function(a,b){
            return a + b }
        )
    //sum = the sum of the array
    //divide sum of the array by array length
    var avg = Math.round(sum / arr.length)
    console.log(avg)
    }
    
var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);