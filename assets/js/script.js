var rootEl = $('#root');
var clock = document.getElementById("clock")
var nineBlockInput = document.getElementById("nineBlock")
var nineBlockBtn = document.getElementById("9-Btn")
var tenBlockInput =document.getElementById("tenBlock")
var tenBlockBtn = document.getElementById("10-Btn")
var elevenBlockInput =document.getElementById("elevenBlock")
var elevenBlockBtn = document.getElementById("11-Btn")
var twelveBlockInput =document.getElementById("twelveBlock")
var twelveBlockBtn = document.getElementById("12-Btn")
var thirteenBlockInput =document.getElementById("oneBlock")
var thirteenBlockBtn = document.getElementById("1-Btn")
var fourteenBlockInput =document.getElementById("twoBlock")
var fourteenBlockBtn = document.getElementById("2-Btn")
var fifteenBlockInput =document.getElementById("threeBlock")
var fifteenBlockBtn = document.getElementById("3-Btn")
var sixteenBlockInput =document.getElementById("fourBlock")
var sixteenBlockBtn = document.getElementById("4-Btn")
var seventeenBlockInput =document.getElementById("fiveBlock")
var seventeenBlockBtn = document.getElementById("5-Btn")

var nineTimeLabel = document.getElementById("09").id
var tenTimeLabel = document.getElementById("10").id
var elevenTimeLabel = document.getElementById("11").id
var twelveTimeLabel = document.getElementById("12").id
var thirteenTimeLabel = document.getElementById("13").id
var fourteenTimeLabel = document.getElementById("14").id
var fifteenTimeLabel = document.getElementById("15").id
var sixteenTimeLabel = document.getElementById("16").id
var seventeenTimeLabel = document.getElementById("17").id

var today = moment();
$("#clock").text(today.format("MMM Do, YYYY"));




//initial function that parses the local data, checks to see if null and then puts existing data into input fields
function init(){
    console.log(moment().format("HH"))
    var nineBlockStored = JSON.parse(localStorage.getItem("9am"))
    if(nineBlockStored !== null){
        nineBlockInput.value = nineBlockStored.task
    }else{
        return
    }

    var tenBlockStored = JSON.parse(localStorage.getItem("10am"))
    if(tenBlockStored !== null){
        tenBlockInput.value = tenBlockStored.task
    }else{
        return
    }

    var elevenBlockStored = JSON.parse(localStorage.getItem("11am"))
    if(elevenBlockStored !== null){
        elevenBlockInput.value = elevenBlockStored.task
    }else{
        return
    }

    var twelveBlockStored = JSON.parse(localStorage.getItem("12PM"))
    if(twelveBlockStored !== null){
        twelveBlockInput.value = twelveBlockStored.task
    }else{
        return
    }

    var oneBlockStored = JSON.parse(localStorage.getItem("1PM"))
    if(oneBlockStored !== null){
        thirteenBlockInput.value = oneBlockStored.task
    }else{
        return
    }

    var twoBlockStored = JSON.parse(localStorage.getItem("2PM"))
    if(twoBlockStored !== null){
        fourteenBlockInput.value = twoBlockStored.task
    }else{
        return
    }

    var threeBlockStored = JSON.parse(localStorage.getItem("3PM"))
    if(threeBlockStored !== null){
        fifteenBlockInput.value = threeBlockStored.task
    }else{
        return
    }

    var fourBlockStored = JSON.parse(localStorage.getItem("4PM"))
    if(fourBlockStored !== null){
        sixteenBlockInput.value = fourBlockStored.task
    }else{
        return
    }

    var fiveBlockStored = JSON.parse(localStorage.getItem("5PM"))
    if(fiveBlockStored !== null){
        seventeenBlockInput.value = fiveBlockStored.task
    }else{
        return
    }

//if statement to compare the value inside the text box to moment. Then sets CSS class based off that.
    //var ninePlaceholder = moment().format("HH")
    if(nineTimeLabel == moment().format("HH")){
        nineBlockInput.classList.add("present")
    }else if(nineTimeLabel < moment().format("HH")){
        nineBlockInput.classList.add("past")
    }else if(nineTimeLabel > moment().format("HH")){
        nineBlockInput.classList.add("future")
    }

    if(tenTimeLabel == moment().format("HH")){
        tenBlockInput.classList.add("present")
    }else if(tenTimeLabel < moment().format("HH")){
        tenBlockInput.classList.add("past")
    }else if(tenTimeLabel > moment().format("HH")){
        tenBlockInput.classList.add("future")
    }

    if(elevenTimeLabel == moment().format("HH")){
        elevenBlockInput.classList.add("present")
    }else if(elevenTimeLabel < moment().format("HH")){
        elevenBlockInput.classList.add("past")
    }else if(elevenTimeLabel > moment().format("HH")){
        elevenBlockInput.classList.add("future")
    }

        if(twelveTimeLabel == moment().format("HH")){
        twelveBlockInput.classList.add("present")
    }else if(twelveTimeLabel < moment().format("HH")){
        twelveBlockInput.classList.add("past")
    }else if(twelveTimeLabel > moment().format("HH")){
        twelveBlockInput.classList.add("future")
    }

    if(thirteenTimeLabel == moment().format("HH")){
        thirteenBlockInput.classList.add("present")
    }else if(thirteenTimeLabel < moment().format("HH")){
        thirteenBlockInput.classList.add("past")
    }else if(thirteenTimeLabel > moment().format("HH")){
        thirteenBlockInput.classList.add("future")
    }

    if(fourteenTimeLabel == moment().format("HH")){
        fourteenBlockInput.classList.add("present")
    }else if(fourteenTimeLabel < moment().format("HH")){
        fourteenBlockInput.classList.add("past")
    }else if(fourteenTimeLabel > moment().format("HH")){
        fourteenBlockInput.classList.add("future")
    }

    if(fifteenTimeLabel == moment().format("HH")){
        fifteenBlockInput.classList.add("present")
    }else if(fifteenTimeLabel < moment().format("HH")){
        fifteenBlockInput.classList.add("past")
    }else if(fifteenTimeLabel > moment().format("HH")){
        fifteenBlockInput.classList.add("future")
    }

    if(sixteenTimeLabel == moment().format("HH")){
        sixteenBlockInput.classList.add("present")
    }else if(sixteenTimeLabel < moment().format("HH")){
        sixteenBlockInput.classList.add("past")
    }else if(sixteenTimeLabel > moment().format("HH")){
        sixteenBlockInput.classList.add("future")
    }

    if(seventeenTimeLabel == moment().format("HH")){
        seventeenBlockInput.classList.add("present")
    }else if(seventeenTimeLabel < moment().format("HH")){
        seventeenBlockInput.classList.add("past")
    }else if(seventeenTimeLabel > moment().format("HH")){
        seventeenBlockInput.classList.add("future")
    }





    
    
}

//function that updates time using moment API






//EVENT LISTENERS FOR EVERY SAVE BUTTON
//9AM
nineBlockBtn.addEventListener("click", function(event){
    event.preventDefault();

    var nine = {
        task: nineBlockInput.value
    }

    localStorage.setItem("9am", JSON.stringify(nine))
})

//10AM
tenBlockBtn.addEventListener("click", function(event){
    event.preventDefault();

    var ten = {
        task: tenBlockInput.value
    }

    localStorage.setItem("10am", JSON.stringify(ten))
})

//11AM
elevenBlockBtn.addEventListener("click", function(event){
    event.preventDefault();

    var eleven = {
        task: elevenBlockInput.value
    }

    localStorage.setItem("11am", JSON.stringify(eleven))
})

//12PM
twelveBlockBtn.addEventListener("click", function(event){
    event.preventDefault();

    var twelve = {
        task: twelveBlockInput.value
    }

    localStorage.setItem("12PM", JSON.stringify(twelve))
})

//1PM
thirteenBlockBtn.addEventListener("click", function(event){
    event.preventDefault();

    var one = {
        task: oneBlockInput.value
    }

    localStorage.setItem("1PM", JSON.stringify(one))
})

//2PM
fourteenBlockBtn.addEventListener("click", function(event){
    event.preventDefault();

    var two = {
        task: fourteenBlockInput.value
    }

    localStorage.setItem("2PM", JSON.stringify(two))
})

//3PM
fifteenBlockBtn.addEventListener("click", function(event){
    event.preventDefault();

    var three = {
        task: fifteenBlockInput.value
    }

    localStorage.setItem("3PM", JSON.stringify(three))
})

//4PM
sixteenBlockBtn.addEventListener("click", function(event){
    event.preventDefault();

    var four = {
        task: sixteenBlockInput.value
    }

    localStorage.setItem("4PM", JSON.stringify(four))
})

//5PM
seventeenBlockBtn.addEventListener("click", function(event){
    event.preventDefault();

    var five = {
        task: seventeenBlockInput.value
    }

    localStorage.setItem("5PM", JSON.stringify(five))
})



init();