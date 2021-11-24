$(document).ready(() => {
    // adding form to document
    $("body").append(`<div id="leftContainer"></div>`);
    $("body").append(`<div id="rightContainer"></div>`);
    $("#leftContainer").append(`<form id="myForm"></form>`);
    $("#myForm").append(`<label for="noteText">New Note</label><br>`);
    $('#myForm').append(`<label for="color">Pick your note color</label>`);
    $('#myForm').append(`<input type="color" id="color" name="color"><br><br>`);
    $("#myForm").append(`<textarea id="textArea" type="textarea" name="noteText" rows="5" cols="35" placeholder="Write your message here....."></textarea><br>`);
    $("#myForm").append(`<input id="submit" type="submit" value="Add Note"> `);
    $("#myForm").append(`<input id="reset" type="reset" value="Reset Form"`);
    $("#rightContainer").append(`<ul id="list"></ul>`);
     
    // styling for form and page
    $('#color').css("margin-left", "10px");
    $("body").css("background-color", "aliceblue");
    
    //  creating note when click add note button 
    $("#submit").click((e) => {
        e.preventDefault();
        let $noteContent = $("#textArea").val();
        let $color = $('#color').val();
        var $li = $('<li className"lis" id="li"></li>');
        var $para = $(`<p></p>`);
        var $button = $(`<button class="buttons"><img id="image" src="assets/trashClear.png" alt="Trash Can logo" width="15px" height="15px"></button><br>`);
        $li.css("background-color", "yellow");
        $li.css("list-style", "none");
        $li.css("list-style", "none");
        $li.css("width", "150px");
        $li.css("height", "150px");
        $li.css("margin", "20px");
        $li.css("border", "1px solid grey");
        $('#list').css("display", "flex");
        $li.css("flex-direction", "row");
        $li.css("background-color", $color);
        $li.css("position", "relative");
        $li.css("overflow-wrap", "break-word");
        $li.css("box-shadow", "5px 5px 5px grey");
        $button.css("background-color", $color);
        $button.css("border", "1px dotted white");
        $button.css("position", "absolute");
        $button.css("right", "0px");
        $button.css("margin-bottom", "10px");
        $button.css("box-shadow", "1px 1px 1px black");
        $('#image').css("margin-right", "5px");
        $para.css("margin-top", "3px");
        $('#list').append($li);
        // $($li).append($noteContent, $button);
        $($para).append($noteContent);
        $($li).append($button, $para);
        
        // clearing form inputs when done
        $('#textArea').val('');
        
        // event to remove the selected note
       $('.buttons').click((event) => {
            event.target.parentElement.parentElement.remove();
            });
             
    });
});