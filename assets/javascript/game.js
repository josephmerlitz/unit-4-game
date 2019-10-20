$(document).ready(function () {
    init();
    var winCount = 0;
    var lossCount = 0;
    $(".crystal").on("click", function () {
        $("#score").text(parseInt($("#score").text()) + parseInt($(this).attr("random-val")));
        if (parseInt($("#score").text()) == parseInt($("#target").text())) {
            $("#winCount").text(++winCount);
            init();
        }
        if (parseInt($("#score").text()) > parseInt($("#target").text())) {
            $("#lossCount").text(++lossCount);
            init();
        }
    });

    function init() {
        $("#target").text(Math.floor(Math.random() * 50) + 5);
        console.log("target: " + $("#target").text());
        $("#score").text(0);
        $("#crystal1").attr("random-val", Math.ceil(Math.random() * 12));
        console.log("crystal1 val: " + $("#crystal1").attr("random-val"));
        $("#crystal2").attr("random-val", Math.ceil(Math.random() * 12));
        console.log("crystal2 val: " + $("#crystal2").attr("random-val"));
        $("#crystal3").attr("random-val", Math.ceil(Math.random() * 12));
        console.log("crystal3 val: " + $("#crystal3").attr("random-val"));
        $("#crystal4").attr("random-val", Math.ceil(Math.random() * 12));
        console.log("crystal4 val: " + $("#crystal4").attr("random-val"));
    }

});