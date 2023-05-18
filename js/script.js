$(function () {
    $(window).click(function() {
        $('#phone-menu').hide();
    });
    $('.no-shadow').click(function(event) {
        event.stopPropagation();
        $('#phone-menu').show();
    });
    $('#phone-menu').click(function (event) {
        event.stopPropagation();
    });
    // submenu
    let acc = $(".square-plus");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});