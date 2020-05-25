$(document).ready(() => {
    $("#messageForm").submit(e => {
        e.preventDefault();

        if(validate()) {
            $.ajax({
                url: 'http://google.com',
                type: "POST",
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(getFormData($("#messageForm"))),
                success: (result) => {
                    console.log(result);
                },
                error: (xhr, resp, text) => {
                    console.log(xhr, resp, text);
                }
            })
        }
    });
});

const emailPattern =  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const namePattern = /^\w*$/i;

function validate(form) {
    let passed = true;

    let name = $("#name").val();
    if(name.trim() === "") {
        $("#missingNameFeedBack").show();
        passed = false;
    } else {
        $("#missingNameFeedBack").hide();
    }

    if(!namePattern.test(name)) {
        $("#wrongNameFeedBack").show();
        passed = false;
    } else {
        $("#wrongNameFeedBack").hide();
    }


    let email = $("#email").val();
    if(email.trim() === "") {
        $("#missingEmailFeedBack").show();
        passed = false;
    } else {
        $("#missingEmailFeedBack").hide();
    }

    if(!emailPattern.test(email)) {
        $("#wrongEmailFeedBack").show();
        passed = false;
    } else {
        $("#wrongEmailFeedBack").hide();
    }


    if($("#message").val().trim() === "") {
        $("#missingMessageFeedBack").show();
        passed = false;
    } else {
        $("#missingMessageFeedBack").hide();
    }

    return passed;
}

function getFormData(form) {
    let indexed_array = form.serializeArray();
    let unindexed_array = {};

    indexed_array.forEach(row => {
        unindexed_array[row['name']] = row['value'];
    });

    return unindexed_array;
}