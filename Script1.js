var insults = ['Eric, your face looks like a peanut', 'Eric, you are a dingus']

function main() {
    $('.text').hide()
    $('.text').fadeIn(1000)
    $('.insult-button').next().hide()
    $('.insult-button').on('click', function () {
        $(this).text('Get Another')
        $(this).next().text(getInsult())
        $(this).next().fadeIn(500)
    })
    
        
}

function addInsult() {
    var x = $('#box').val();
    var y = String(x);
    insults.push('Eric, ' + y.toLocaleLowerCase())
    /*window.location.reload()*/
};

    /*Will probably have to change the div class="button" to a button tag
     to recieve the value from input.
     <button onclick="function()">submit</button>
     may also need to create a form using the form tag around the input*/

function getInsult() {
    var arrayPosition = Math.floor(Math.random() * insults.length)
    var insultOut = insults[arrayPosition]
    return insultOut
};

$(document).ready(main);