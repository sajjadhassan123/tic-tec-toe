function closeForm() {
    var nameForm = document.getElementById('name-form');
    nameForm.style.display = 'none';
    document.querySelector('.main').style.display = 'block';
    document.getElementById('start-button').style.display = 'block';
}

document.getElementById('start-button').addEventListener('click', function () {
    var nameForm = document.getElementById('name-form');
    nameForm.style.display = 'block';
    document.querySelector('.main').style.display = 'none';
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('player-name').focus();
});

document.getElementById('submit-button').addEventListener('click', function () {
    const playerName = document.getElementById('player-name').value.trim();
    if (playerName) {
        window.location.href = `game.html?name=${playerName}`;
    } else {
        alert('Ahmed Tic-Tac-Toe Game Says,\nPlease enter your name to start the game.');
    }
});

$(document).ready(function() {
    // Function to show the form with a fade-in effect
    function showForm() {
        $(".name-form").fadeIn(3000);
        $(".main, .game-info, #start-button").hide();
        $("#player-name").focus();
    }

    // Attach the showForm function to the click event of the "Start Game" button
    $("#start-button").on("click", showForm);

    // Function to close the form and show the main content and start button
    function closeForm() {
        $(".name-form").fadeOut();
        $(".main, .game-info, #start-button").show();
    }

    // Attach the closeForm function to the click event of the close button and submit button
    $("#close-button, #submit-button").on("click", closeForm);

});

