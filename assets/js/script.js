$("#currentDay").text(moment().format("dddd, MMMM Do"));

for (i = 9; i < 18; i++) {
    if (moment().format("H") < 8) {
        $("#" + i).addClass("future");
    } else {
        if (i < moment().format("H")){
            $("#" + i).addClass("past");
        } else if (i = moment().format("H")) {
            $("#" + i).addClass("present");
        } else {
            $("#" + i).addClass("future");
        }
    }
}

