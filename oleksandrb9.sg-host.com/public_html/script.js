// function use () {
//     let openButton = document.getElementById('jsPurchase');
//     console.log(openButton);
//     openButton.click();
// }
// let test = document.querySelectorAll("#test");
// test.onclick = use;

$(function() {
    $('.jsPurchase').on('click touch', function (e) {
        // console.log('click', $(this).find('a'));
        $(this).find('a').trigger('click');
    });
    $('a').on('click', function(e) {
        // console.log('click inside');
        e.stopPropagation();
    });
});