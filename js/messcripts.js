$(document).ready(function () {
    
    $(document).ready(function () {
        $("#navbar").load("navbar.html");
    })
    
    /* Pour les galleries de npcs */
    $(".card-img-top").on('click', function (event) {
        $('#viewerModal').css('display','block');
        $('#imgModal').attr('src', this.src);
        $('#modal-caption').text(this.alt);
    })
    $("#viewerModal").on('click', function (event) {
        $('#viewerModal').css('display','none');
    })
});
