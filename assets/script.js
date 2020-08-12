$(document).ready(function () {

    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm'));

    hourSet();

    $("#time9 .description").val(localStorage.getItem("time9"));
    $("#time10 .description").val(localStorage.getItem("time10"));
    $("#time11 .description").val(localStorage.getItem("time11"));
    $("#time12 .description").val(localStorage.getItem("time12"));
    $("#time13 .description").val(localStorage.getItem("time13"));
    $("#time14 .description").val(localStorage.getItem("time14"));
    $("#time15 .description").val(localStorage.getItem("time15"));
    $("#time16 .description").val(localStorage.getItem("time16"));
    $("#time17 .description").val(localStorage.getItem("time17"));
    $("#time18 .description").val(localStorage.getItem("time18"));

    function hourSet() {
        var hour = moment().hour();

        $(".time-block").each(function () {
            var timeInDay = parseInt($(this).attr("id").split("time")[1]);

            if (timeInDay < hour) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            } else if (timeInDay === hour) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            } else {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
        });
    }

    $(".saveBtn").on("click", function () {
        var userInput = $(this).siblings(".description").val();
        console.log(userInput);
        var workDayTime = $(this).parent().attr("id");

        localStorage.setItem(workDayTime, userInput);
        console.log(localStorage);
    });
});