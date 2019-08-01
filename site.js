$("document").ready(function () {
    $("#Button1").click(function () {
        DoLongTask($("#inputValue").val(),
            function (result, data) {
                if (result == "SUCCESS")
                    alert(data + " is a Success");
                else

                    alert(data + " is a fail");
            });
    });
});
function DoLongTask(n, f) {
    if (n < 10)
        f("SUCCESS", n);
    else
        f("FAIL",n)
}

