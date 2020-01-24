$(function () {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var devouredState = {
            devoured: 1
        };

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function () {
                console.log("changed devoured to", newDevour);
                location.reload();
            }
        );
    });
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#bur").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});
