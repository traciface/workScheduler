var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");

var time = moment().hours();
var meetings;
var hourSpan;


function initPage() {

  var time9 = JSON.parse(localStorage.getItem("09:00 am"));
  nineAm.val(time9);

  var time10 = JSON.parse(localStorage.getItem("10:00 am"))
  tenAm.val(time10);
  
  var time11 = JSON.parse(localStorage.getItem("11:00 am"))
  elevenAm.val(time11);
  
  var time12 = JSON.parse(localStorage.getItem("12:00 pm"))
  twelvePm.val(time12);
  
  var time1 = JSON.parse(localStorage.getItem("01:00 pm"))
  onePm.val(time1);
  
  var time2 = JSON.parse(localStorage.getItem("02:00 pm"))
  twoPm.val(time2);
  
  var time3 = JSON.parse(localStorage.getItem("03:00 pm"))
  threePm.val(time3);
 
  var time4 = JSON.parse(localStorage.getItem("04:00 pm"))
  fourPm.val(time4);
  
  var time5 = JSON.parse(localStorage.getItem("05:00 pm"))
  fivePm.val(time5);
  
  var time6 = JSON.parse(localStorage.getItem("06:00 pm"))
  sixPm.val(time6);
} 

{  
  $(".form-control").each(function () {
      var timeTest = parseInt($(this).attr("id"));
      time = parseInt(time);

      if (time > timeTest) {
          $(this).addClass("past");
      } else if (time < timeTest) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}

$(document).ready(function(){
  initPage()

  $(".saveBtn").on("click", function(){
    meetings = $(this).siblings(".form-control").val().trim();
    console.log(meetings);
    hourSpan = $(this).siblings(".scheduleBox").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(meetings));
  })

  $("#clearAll").on("click", function(){
    localStorage.clear();
    initPage()
  }) 
})
