let table = $("#employees");

$(document).ready(() => {
    $.ajax({
        url: 'http://dummy.restapiexample.com/api/v1/employees',
        type: "GET",
        dataType: 'json',
        success: (result) => {
            fillTable(result)
        },
        error: (xhr, resp, text) => {
            console.log(xhr, resp, text);
        }
    })
});

function fillTable(data) {
    data.data.forEach(employee => {
        table.find('tbody')
            .append($("<tr>")
                .append($("<td>")
                    .text(employee.id))
                .append($("<td>")
                    .text(employee.employee_name))
                .append($("<td>")
                    .text(employee.employee_salary))
                .append($("<td>")
                    .text(employee.employee_age))
            );
    })
}