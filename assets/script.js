$(document).ready(function () {

    $("#currentDay").text(moment().format('MMMM Do YYYY'));
    hourSet();

    function hourSet() {
        var hour = moment().hour();
        console.log(hour);

        $(".time-block").each(function () {
            var timeInDay = parseInt($(this).attr("id").split("time")[1]);
            console.log(timeInDay);
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
});