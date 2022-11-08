
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





