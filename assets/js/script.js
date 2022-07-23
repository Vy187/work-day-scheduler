$("#currentDay").text(moment().format("dddd, MMMM Do"));

for (i = 9; i < 18; i++) {
    if (moment().format("H") < 8) {
        $("#" + i).addClass("future");
    } else {
        if (i < moment().format("H")) {
            $("#" + i).addClass("past");
        } else if (i == moment().format("H")) {
            $("#" + i).addClass("present");
        } else {
            $("#" + i).addClass("future");
        }
    }
}

if (localStorage.getItem("plans") == null) {
    plans = ["", "", "", "", "", "", "", "", ""];
    localStorage.setItem("plans", JSON.stringify(plans));
} else {
    data = JSON.parse(localStorage.getItem("plans"));
    for (j = 0, k = 9; k < 18; j++, k++) {
        $("#" + k).val(data[j]);
    }
}

$(".container").on("click", ".saveBtn",function (event){
    tempPlans = JSON.parse(localStorage.getItem("plans"));
    tempPlans[$(event.target).data("position")] = $("#" + $(event.target).data("id")).val();
    localStorage.setItem("plans", JSON.stringify(tempPlans));
})