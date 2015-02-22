/**
 * Created by Tu on 23/2/2015.
 */

var dayOfWeek = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
var linkAPI = "https://script.google.com/macros/s/AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec?tz=Asia/Ho_Chi_Minh";

$.getJSON(linkAPI, function (data) {
    if (data.status == "ok") {
        now = new Date(data.year, data.month, data.day, data.hours, data.minutes, data.seconds, data.millis);
        clock = $(".clock").FlipClock(now, {
            clockFace: 'TwentyFourHourClock'
        });
    }
    else {
        alert("Xin lỗi! Đã có lỗi xảy ra :[");
    }
});
