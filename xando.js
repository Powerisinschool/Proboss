﻿function turnp() {
    $("#tt").html("Total Moves: " + moveCount), mode == 2 ? $("#turn").show() : $("#turn").hide();
    mode == 1 ? $("#turnc").show() : $("#turnc").hide(); 0 == turn ? ($("#p2").show(), $("#p1").hide()) : ($("#p1").show(), $("#p2").hide());
    0 == turn ? ($("#yt").show(), $("#ct").hide()) : ($("#ct").show(), $("#yt").hide())
}
function mode() {
    $("#mode").change(function () {
        $("#screen").hide(), mode = $("#mode").val(), mode == 2 ? $("#turn").show() : $("#turn").hide();
        mode == 1 ? $("#turnc").show() : $("#turnc").hide()
    })
}
function btn1() {
    "     " == $("#b1").val() && 0 == turn && 1 == mode ? ($("#b1").attr("value", " X "), sqr1T = 1, turn = 1, turrn(), check()) : "     " == $("#b1").val() && 1 == turn && 2 == mode ? ($("#b1").attr("value", " X "), sqr1T = 1, turn = 0, turrn(), p1c()) : "     " == $("#b1").val() && 0 == turn && 2 == mode && ($("#b1").attr("value", " O "), sqr1T = 1, turn = 1, turrn(), p1c()), drawCheck()
}
function btn2() { "     " == $("#b2").val() && 0 == turn && 1 == mode ? ($("#b2").attr("value", " X "), sqr2T = 1, turn = 1, turrn(), check()) : "     " == $("#b2").val() && 1 == turn && 2 == mode ? ($("#b2").attr("value", " X "), sqr2T = 1, turn = 0, turrn(), p1c()) : "     " == $("#b2").val() && 0 == turn && 2 == mode && ($("#b2").attr("value", " O "), sqr2T = 1, turn = 1, turrn(), p1c()), drawCheck() }
function btn3() {
    "     " == $("#b3").val() && 0 == turn && 1 == mode ? ($("#b3").attr("value", " X "), sqr3T = 1, turn = 1, turrn(), check()) : "     " == $("#b3").val() && 1 == turn && 2 == mode ? ($("#b3").attr("value", " X "), sqr3T = 1, turn = 0, turrn(), p1c()) : "     " == $("#b3").val() && 0 == turn && 2 == mode && ($("#b3").attr("value", " O "), sqr3T = 1, turn = 1, turrn(), p1c()), drawCheck()
}
function btn4() {
    "     " == $("#b4").val() && 0 == turn && 1 == mode ? ($("#b4").attr("value", " X "), sqr4T = 1, turn = 1, turrn(), check()) : "     " == $("#b4").val() && 1 == turn && 2 == mode ? ($("#b4").attr("value", " X "), sqr4T = 1, turn = 0, turrn(), p1c()) : "     " == $("#b4").val() && 0 == turn && 2 == mode && ($("#b4").attr("value", " O "), sqr4T = 1, turn = 1, turrn(), p1c()), drawCheck()
}
function btn5() {
    "     " == $("#b5").val() && 0 == turn && 1 == mode ? ($("#b5").attr("value", " X "), sqr5T = 1, turn = 1, turrn(), check()) : "     " == $("#b5").val() && 1 == turn && 2 == mode ? ($("#b5").attr("value", " X "), sqr5T = 1, turn = 0, turrn(), p1c()) : "     " == $("#b5").val() && 0 == turn && 2 == mode && ($("#b5").attr("value", " O "), sqr5T = 1, turn = 1, turrn(), p1c()), drawCheck()
} function btn6() { "     " == $("#b6").val() && 0 == turn && 1 == mode ? ($("#b6").attr("value", " X "), sqr6T = 1, turn = 1, turrn(), check()) : "     " == $("#b6").val() && 1 == turn && 2 == mode ? ($("#b6").attr("value", " X "), sqr6T = 1, turn = 0, turrn(), p1c()) : "     " == $("#b6").val() && 0 == turn && 2 == mode && ($("#b6").attr("value", " O "), sqr6T = 1, turn = 1, turrn(), p1c()), drawCheck() }
function btn7() {
    "     " == $("#b7").val() && 0 == turn && 1 == mode ? ($("#b7").attr("value", " X "), sqr7T = 1, turn = 1, turrn(), check()) : "     " == $("#b7").val() && 1 == turn && 2 == mode ? ($("#b7").attr("value", " X "), sqr7T = 1, turn = 0, turrn(), p1c()) : "     " == $("#b7").val() && 0 == turn && 2 == mode && ($("#b7").attr("value", " O "), sqr7T = 1, turn = 1, turrn(), p1c()), drawCheck()
}
function btn8() {
    "     " == $("#b8").val() && 0 == turn && 1 == mode ? ($("#b8").attr("value", " X "), sqr8T = 1, turn = 1, turrn(), check()) : "     " == $("#b8").val() && 1 == turn && 2 == mode ? ($("#b8").attr("value", " X "), sqr8T = 1, turn = 0, turrn(), p1c()) : "     " == $("#b8").val() && 0 == turn && 2 == mode && ($("#b8").attr("value", " O "), sqr8T = 1, turn = 1, turrn(), p1c()), drawCheck()
} function btn9() {
    "     " == $("#b9").val() && 0 == turn && 1 == mode ? ($("#b9").attr("value", " X "), sqr9T = 1, turn = 1, turrn(), check()) : "     " == $("#b9").val() && 1 == turn && 2 == mode ? ($("#b9").attr("value", " X "), sqr9T = 1, turn = 0, turrn(), p1c()) : "     " == $("#b9").val() && 0 == turn && 2 == mode && ($("#b9").attr("value", " O "), sqr9T = 1, turn = 1, turrn(), p1c()), drawCheck()
} function turrn() { sqr1 = $("#b1").val(), sqr2 = $("#b2").val(), sqr3 = $("#b3").val(), sqr4 = $("#b4").val(), sqr5 = $("#b5").val(), sqr6 = $("#b6").val(), sqr7 = $("#b7").val(), sqr8 = $("#b8").val(), sqr9 = $("#b9").val() }
function check() {
    " X " == sqr1 && " X " == sqr2 && " X " == sqr3 ? (wb(), reset()) : " X " == sqr4 && " X " == sqr5 && " X " == sqr6 ? (wb(), reset()) : " X " == sqr7 && " X " == sqr8 && " X " == sqr9 ? (wb(), reset()) : " X " == sqr1 && " X " == sqr5 && " X " == sqr9 ? (wb(), reset()) : " X " == sqr1 && " X " == sqr4 && " X " == sqr7 ? (wb(), reset()) : " X " == sqr2 && " X " == sqr5 && " X " == sqr8 ? (wb(), reset()) : " X " == sqr3 && " X " == sqr6 && " X " == sqr9 ? (wb(), reset()) : " X " == sqr1 && " X " == sqr5 && " X " == sqr9 ? (wb(), reset()) : " X " == sqr3 && " X " == sqr5 && " X " == sqr7 ? (wb(), reset()) : (winCheck(), check2(), drawCheck())
}
function check2() {
    turrn(), drawCheck(), " O " == sqr1 && " O " == sqr2 && " O " == sqr3 ? (lb(), reset()) : " O " == sqr4 && " O " == sqr5 && " O " == sqr6 ? (lb(), reset()) : " O " == sqr7 && " O " == sqr8 && " O " == sqr9 ? (lb(), reset()) : " O " == sqr1 && " O " == sqr5 && " O " == sqr9 ? (lb(), reset()) : " O " == sqr1 && " O " == sqr4 && " O " == sqr7 ? (lb(), reset()) : " O " == sqr2 && " O " == sqr5 && " O " == sqr8 ? (lb(), reset()) : " O " == sqr3 && " O " == sqr6 && " O " == sqr9 ? (lb(), reset()) : " O " == sqr1 && " O " == sqr5 && " O " == sqr9 ? (lb(), reset()) : " O " == sqr3 && " O " == sqr5 && " O " == sqr7 && (lb(), reset())
}
function p1c() {
    " X " == sqr1 && " X " == sqr2 && " X " == sqr3 ? (p1w(), reset()) : " X " == sqr4 && " X " == sqr5 && " X " == sqr6 ? (p1w(), reset()) : " X " == sqr7 && " X " == sqr8 && " X " == sqr9 ? (p1w(), reset()) : " X " == sqr1 && " X " == sqr5 && " X " == sqr9 ? (p1w(), reset()) : " X " == sqr1 && " X " == sqr4 && " X " == sqr7 ? (p1w(), reset()) : " X " == sqr2 && " X " == sqr5 && " X " == sqr8 ? (p1w(), reset()) : " X " == sqr3 && " X " == sqr6 && " X " == sqr9 ? (p1w(), reset()) : " X " == sqr1 && " X " == sqr5 && " X " == sqr9 ? (p1w(), reset()) : " X " == sqr3 && " X " == sqr5 && " X " == sqr7 ? (p1w(), reset()) : (p2c(), drawCheck())
}
function p2c() {
    turrn(), drawCheck(), " O " == sqr1 && " O " == sqr2 && " O " == sqr3 ? (p2w(), reset()) : " O " == sqr4 && " O " == sqr5 && " O " == sqr6 ? (p2w(), reset()) : " O " == sqr7 && " O " == sqr8 && " O " == sqr9 ? (p2w(), reset()) : " O " == sqr1 && " O " == sqr5 && " O " == sqr9 ? (p2w(), reset()) : " O " == sqr1 && " O " == sqr4 && " O " == sqr7 ? (p2w(), reset()) : " O " == sqr2 && " O " == sqr5 && " O " == sqr8 ? (p2w(), reset()) : " O " == sqr3 && " O " == sqr6 && " O " == sqr9 ? (p2w(), reset()) : " O " == sqr1 && " O " == sqr5 && " O " == sqr9 ? (p2w(), reset()) : " O " == sqr3 && " O " == sqr5 && " O " == sqr7 && (p2w(), reset())
}
function drawCheck() {
    turnp(), turrn(), 9 == (moveCount = sqr1T + sqr2T + sqr3T + sqr4T + sqr5T + sqr6T + sqr7T + sqr8T + sqr9T) && (reset(), db())
}
function winCheck() {
    check2(), " O " == sqr1 && " O " == sqr2 && 0 == sqr3T && 1 == turn ? ($("#b3").attr("value", " O "), sqr3T = 1, turn = 0) : " O " == sqr2 && " O " == sqr3 && 0 == sqr1T && 1 == turn ? ($
        ("#b1").attr("value", " O "), sqr1T = 1, turn = 0) : " O " == sqr4 && " O " == sqr5 && 0 == sqr6T && 1 == turn ? ($
        ("#b6").attr("value", " O "), sqr6T = 1, turn = 0) : " O " == sqr5 && " O " == sqr6 && 0 == sqr4T && 1 == turn ? ($
        ("#b4").attr("value", " O "), sqr4T = 1, turn = 0) : " O " == sqr7 && " O " == sqr8 && 0 == sqr9T && 1 == turn ? ($
        ("#b9").attr("value", " O "), sqr9T = 1, turn = 0) : " O " == sqr8 && " O " == sqr9 && 0 == sqr7T && 1 == turn ? ($
        ("#b7").attr("value", " O "), sqr7T = 1, turn = 0) : " O " == sqr1 && " O " == sqr5 && 0 == sqr9T && 1 == turn ? ($
        ("#b9").attr("value", " O "), sqr9T = 1, turn = 0) : " O " == sqr5 && " O " == sqr9 && 0 == sqr1T && 1 == turn ? ($
        ("#b1").attr("value", " O "), sqr1T = 1, turn = 0) : " O " == sqr3 && " O " == sqr5 && 0 == sqr7T && 1 == turn ? ($
        ("#b7").attr("value", " O "), sqr7T = 1, turn = 0) : " O " == sqr7 && " O " == sqr5 && 0 == sqr3T && 1 == turn ? ($
        ("#b3").attr("value", " O "), sqr3T = 1, turn = 0) : " O " == sqr1 && " O " == sqr3 && 0 == sqr2T && 1 == turn ? ($
        ("#b2").attr("value", " O "), sqr2T = 1, turn = 0) : " O " == sqr4 && " O " == sqr6 && 0 == sqr5T && 1 == turn ? ($
        ("#b5").attr("value", " O "), sqr5T = 1, turn = 0) : " O " == sqr7 && " O " == sqr9 && 0 == sqr8T && 1 == turn ? ($
        ("#b8").attr("value", " O "), sqr8T = 1, turn = 0) : " O " == sqr1 && " O " == sqr7 && 0 == sqr4T && 1 == turn ? ($
        ("#b4").attr("value", " O "), sqr4T = 1, turn = 0) : " O " == sqr2 && " O " == sqr8 && 0 == sqr5T && 1 == turn ? ($
        ("#b5").attr("value", " O "), sqr5T = 1, turn = 0) : " O " == sqr3 && " O " == sqr9 && 0 == sqr6T && 1 == turn ? ($
        ("#b6").attr("value", " O "), sqr6T = 1, turn = 0) : " O " == sqr1 && " O " == sqr5 && 0 == sqr9T && 1 == turn ? ($
        ("#b9").attr("value", " O "), sqr9T = 1, turn = 0) : " O " == sqr4 && " O " == sqr7 && 0 == sqr1T && 1 == turn ? ($
        ("#b1").attr("value", " O "), sqr1T = 1, turn = 0) : " O " == sqr5 && " O " == sqr8 && 0 == sqr2T && 1 == turn ? ($
        ("#b2").attr("value", " O "), sqr2T = 1, turn = 0) : " O " == sqr6 && " O " == sqr9 && 0 == sqr3T && 1 == turn ? ($
        ("#b3").attr("value", " O "), sqr3T = 1, turn = 0) : " O " == sqr1 && " O " == sqr4 && 0 == sqr7T && 1 == turn ? ($
        ("#b7").attr("value", " O "), sqr7T = 1, turn = 0) : " O " == sqr2 && " O " == sqr5 && 0 == sqr8T && 1 == turn ? ($
        ("#b8").attr("value", " O "), sqr8T = 1, turn = 0) : " O " == sqr3 && " O " == sqr6 && 0 == sqr9T && 1 == turn ? ($
        ("#b9").attr("value", " O "), sqr9T = 1, turn = 0) : " O " == sqr1 && " O " == sqr9 && 0 == sqr5T && 1 == turn ? ($
        ("#b5").attr("value", " O "), sqr5T = 1, turn = 0) : " O " == sqr3 && " O " == sqr7 && 0 == sqr5T && 1 == turn ? ($
        ("#b5").attr("value", " O "), sqr5T = 1, turn = 0) : computer(), check2()
}
function computer() {
    check2(), " X " == sqr1 && " X " == sqr2 && 0 == sqr3T && 1 == turn ? ($("#b3").attr("value", " O "), sqr3T = 1, turn = 0) : " X " == sqr2 && " X " == sqr3 && 0 == sqr1T && 1 == turn ? ($
        ("#b1").attr("value", " O "), sqr1T = 1, turn = 0) : " X " == sqr4 && " X " == sqr5 && 0 == sqr6T && 1 == turn ? ($
        ("#b6").attr("value", " O "), sqr6T = 1, turn = 0) : " X " == sqr5 && " X " == sqr6 && 0 == sqr4T && 1 == turn ? ($
        ("#b4").attr("value", " O "), sqr4T = 1, turn = 0) : " X " == sqr7 && " X " == sqr8 && 0 == sqr9T && 1 == turn ? ($
        ("#b9").attr("value", " O "), sqr9T = 1, turn = 0) : " X " == sqr8 && " X " == sqr9 && 0 == sqr7T && 1 == turn ? ($
        ("#b7").attr("value", " O "), sqr7T = 1, turn = 0) : " X " == sqr1 && " X " == sqr5 && 0 == sqr9T && 1 == turn ? ($
        ("#b9").attr("value", " O "), sqr9T = 1, turn = 0) : " X " == sqr5 && " X " == sqr9 && 0 == sqr1T && 1 == turn ? ($
        ("#b1").attr("value", " O "), sqr1T = 1, turn = 0) : " X " == sqr3 && " X " == sqr5 && 0 == sqr7T && 1 == turn ? ($
        ("#b7").attr("value", " O "), sqr7T = 1, turn = 0) : " X " == sqr7 && " X " == sqr5 && 0 == sqr3T && 1 == turn ? ($
        ("#b3").attr("value", " O "), sqr3T = 1, turn = 0) : " X " == sqr1 && " X " == sqr3 && 0 == sqr2T && 1 == turn ? ($
        ("#b2").attr("value", " O "), sqr2T = 1, turn = 0) : " X " == sqr4 && " X " == sqr6 && 0 == sqr5T && 1 == turn ? ($
        ("#b5").attr("value", " O "), sqr5T = 1, turn = 0) : " X " == sqr7 && " X " == sqr9 && 0 == sqr8T && 1 == turn ? ($
        ("#b8").attr("value", " O "), sqr8T = 1, turn = 0) : " X " == sqr1 && " X " == sqr7 && 0 == sqr4T && 1 == turn ? ($
        ("#b4").attr("value", " O "), sqr4T = 1, turn = 0) : " X " == sqr2 && " X " == sqr8 && 0 == sqr5T && 1 == turn ? ($
        ("#b5").attr("value", " O "), sqr5T = 1, turn = 0) : " X " == sqr3 && " X " == sqr9 && 0 == sqr6T && 1 == turn ? ($
        ("#b6").attr("value", " O "), sqr6T = 1, turn = 0) : " X " == sqr1 && " X " == sqr5 && 0 == sqr9T && 1 == turn ? ($
        ("#b9").attr("value", " O "), sqr9T = 1, turn = 0) : " X " == sqr4 && " X " == sqr7 && 0 == sqr1T && 1 == turn ? ($
        ("#b1").attr("value", " O "), sqr1T = 1, turn = 0) : " X " == sqr5 && " X " == sqr8 && 0 == sqr2T && 1 == turn ? ($
        ("#b2").attr("value", " O "), sqr2T = 1, turn = 0) : " X " == sqr6 && " X " == sqr9 && 0 == sqr3T && 1 == turn ? ($
        ("#b3").attr("value", " O "), sqr3T = 1, turn = 0) : " X " == sqr1 && " X " == sqr4 && 0 == sqr7T && 1 == turn ? ($
        ("#b7").attr("value", " O "), sqr7T = 1, turn = 0) : " X " == sqr2 && " X " == sqr5 && 0 == sqr8T && 1 == turn ? ($
        ("#b8").attr("value", " O "), sqr8T = 1, turn = 0) : " X " == sqr3 && " X " == sqr6 && 0 == sqr9T && 1 == turn ? ($
        ("#b9").attr("value", " O "), sqr9T = 1, turn = 0) : " X " == sqr1 && " X " == sqr9 && 0 == sqr5T && 1 == turn ? ($
        ("#b5").attr("value", " O "), sqr5T = 1, turn = 0) : " X " == sqr3 && " X " == sqr7 && 0 == sqr5T && 1 == turn ? ($
        ("#b5").attr("value", " O "), sqr5T = 1, turn = 0) : AI(), check2()
}
function AI() {
    turrn(), "     " == $
        ("#b5").val() && 1 == turn ? ($
        ("#b5").attr("value", " O "), turn = 0, sqr5T = 1) : "     " == $
        ("#b1").val() && 1 == turn ? ($("#b1").attr("value", " O "), turn = 0, sqr1T = 1) : "     " == $
        ("#b9").val() && 1 == turn ? ($("#b9").attr("value", " O "), turn = 0, sqr9T = 1) : "     " == $
        ("#b6").val() && 1 == turn ? ($("#b6").attr("value", " O "), turn = 0, sqr6T = 1) : "     " == $
        ("#b2").val() && 1 == turn ? ($("#b2").attr("value", " O "), turn = 0, sqr2T = 1) : "     " == $
        ("#b8").val() && 1 == turn ? ($("#b8").attr("value", " O "), turn = 0, sqr8T = 1) : "     " == $
        ("#b3").val() && 1 == turn ? ($("#b3").attr("value", " O "), turn = 0, sqr3T = 1) : "     " == $
        ("#b7").val() && 1 == turn ? ($("#b7").attr("value", " O "), turn = 0, sqr7T = 1) : "     " == $
        ("#b4").val() && 1 == turn && ($("#b4").attr("value", " O "), turn = 0, sqr4T = 1), check2()
}
function resetclick() {
    $("#b1").attr("value", "     "), $("#b2").attr("value", "     "), $("#b3").attr("value", "     "), $("#b4").attr("value", "     "), $("#b5").attr("value", "     "), $("#b6").attr("value", "     "), $("#b7").attr("value", "     "), $("#b8").attr("value", "     "), $("#b9").attr("value", "     "), $("#win").hide(), $("#loss").hide(), $("#p1win").hide(), $("#p2win").hide(), $("#draw").hide(), $("#reset").hide(), $("#resetbtn").hide(), sqr1T = 0, sqr2T = 0, sqr3T = 0, sqr4T = 0, sqr5T = 0, sqr6T = 0, sqr7T = 0, sqr8T = 0, sqr9T = 0, turrn(), turn = 0, moveCount = 0
} function reset() {
    turnp(), $("#reset").show(), $("#resetbtn").show(), $("#turn").hide(), 0 == turn ? ($("#p2").show(), $("#p1").hide()) : ($("#p1").show(), $("#p2").hide())
}
function wb() {
    $("#win").show()
}
function p1w() {
    $("#p1win").show()
}
function p2w() {
    $("#p2win").show()
}
function lb() {
    $("#loss").show()
}
function db() {
    $("#draw").show()
}
function resetter() {
    reset()
} var sqr1, sqr2, sqr3, sqr4, sqr5, sqr6, sqr7, sqr8, sqr9, sqr1T = 0, sqr2T = 0, sqr3T = 0, sqr4T = 0, sqr5T = 0, sqr6T = 0, sqr7T = 0, sqr8T = 0, sqr9T = 0, moveCount = 0, turn = 0;