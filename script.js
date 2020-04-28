var dt = new Date();
var time = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
document.getElementById("currentDay").innerHTML = time;

$(document).ready(function () {
  var d = new Date();
  var n = parseInt(d.getHours());
   
  $("div.row").each(function (index)  {
    if (index < n) {
      $(this).addClass("past");
    } else if (index == n) {
      $(this).addClass("present");
    } else if (index > n) {
      $(this).addClass("future");
    }
  });
  
  

  $(".saveBtn").on("click", function () {
    
    let data = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");

  
    localStorage.setItem(time, data);
  });

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));


});
