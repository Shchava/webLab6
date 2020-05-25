const timeout = 40;

const goText = "GO";
const continueText = "CONTINUE";
const stopText = "STOP";

let start;
let elapsedTime;
let executing = false;

$(document).ready(function () {
    let goStopButton = $("#goStopButton");

    let screen = $("#screen");

    goStopButton.click(() => {
        if (executing) {
            executing = false;
            goStopButton.text(continueText);
            elapsedTime = Date.now() - start;

        } else {
            executing = true;
            goStopButton.text(stopText);
            if (!start) {
                start = Date.now();
            }

            if (elapsedTime) {
                start = Date.now() - elapsedTime;
            }
        }
    });

    $("#resetButton").click(() => {
        start = null;
        elapsedTime = null;
        executing = false;
        goStopButton.text(goText);
        screen.text("00:00");
    });

    window.setInterval(updateTimer, timeout);

    function updateTimer() {
        if (executing) {
            screen.text(moment(Date.now() - start).format('mm:ss'));
        }
    }
});

