$(function () {
    Webcam.set({
        width: 640,
        height: 480,
        image_format: 'jpeg',
        jpeg_quality: 90
    });
    Webcam.attach('#webcam');
    $('.captured').hide();
    var captured = false;
    $("#btnCapture").click(function () {
        Webcam.snap(function (data_uri) {
            $("#imgCapture")[0].src = data_uri;
            $("#btnUpload").removeAttr("disabled");
        });
        $('.captured').show();
        $('.live').hide();

    });
    $('#retry').click(()=>{
        $('.captured').hide();
        $('.live').show();
    })
    $("#btnUpload").click(function () {
        $.ajax({
            type: "POST",
            url: "",
            data: "{data: '" + $("#imgCapture")[0].src + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (r) { }
        });
    });
});
