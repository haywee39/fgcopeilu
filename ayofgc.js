// SECTION OF JS TO DISPLAY THE DIGITAL CLOCK
// function fgcDate() {
//     var day= new Date 
//     var hour= day.getHours()
//     var minute=day.getMinutes()
//     var second=day.getSeconds()
//     if(hour < 10) {
//         hour=  "0" + hour 
//     }

//     if(minute < 10) {
//         minute=  "0" + minute
//     }

//     if(second < 10) {
//         second=  "0" + second 
//     }

//     var time=`${hour} : ${minute} : ${second}`
//     var display=
//     document.getElementById('time').innerHTML= `Time: ${time}`

// }
// setInterval(fgcDate, 1000)

// 


// THIS SECTION IS USED FOR THE DISPLAY OF DAY, MONTH, YEAR FOR CHURCH ACTIVITIES ON THE DIV:class="monthly-theme" 
var today= new Date()
days= today.getDay()
var weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
 nameOfDay = weeks[today.getDay()]
day= today.getDate()
const month= today.toLocaleString('default',{month: 'long'})
const year= today.getFullYear()
formatDate = `${nameOfDay.toUpperCase()}, ${day} ${month.toUpperCase()}  ${year} `
document.getElementById('thisMonth').innerHTML=formatDate





