/**
 * Created by Tu on 22/2/2015.
 */

var dayOfWeek = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
var linkAPI = "https://script.google.com/macros/s/AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec?tz=Asia/Ho_Chi_Minh";

var now = new Date(0);
$.getJSON(linkAPI, function (data) {
    if (data.status == "ok") {
        now = new Date(data.year, data.month, data.day, data.hours, data.minutes, data.seconds, data.millis);
    }
    else {
        alert("Xin lỗi! Đã có lỗi xảy ra :[");
    }
});

function incrementTime() {
    now = new Date(now.getTime() + 1000);
}

function loadTime() {
    $("#hour").text(now.getHours());
    $("#minute").text(now.getMinutes());
    $("#second").text(now.getSeconds());
    $("#dayofweek").text(dayOfWeek[now.getDay() - 3]);
    $("#date").text(now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear());

    incrementTime();
    setTimeout("loadTime()", 1000);
}
