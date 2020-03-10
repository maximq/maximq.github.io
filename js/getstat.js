function drawProgress(n, t) {
    var u = n,
        i = {
            percent: u.getAttribute("data-percent") || 0,
            size: u.getAttribute("data-size") || 55,
            lineWidth: u.getAttribute("data-line") || 3,
            rotate: u.getAttribute("data-rotate") || 0
        },
        r, e, f;
    typeof G_vmlCanvasManager != "undefined" && G_vmlCanvasManager.initElement(t);
    r = t.getContext("2d");
    t.width = t.height = i.size;
    u.appendChild(t);
    r.translate(i.size / 2, i.size / 2);
    r.rotate((-1 / 2 + i.rotate / 180) * Math.PI);
    e = (i.size - i.lineWidth) / 2;
    f = function (n, t, i) {
        i = Math.min(Math.max(-1, i || 0), 1);
        r.beginPath();
        r.arc(0, 0, e, 0, Math.PI * 2 * i, !1);
        r.strokeStyle = n;
        r.lineCap = "round";
        r.lineWidth = t;
        r.stroke()
    };
    f("#efefef", i.lineWidth, 1);
    i.percent != 0 && f("#546E7A", i.lineWidth, i.percent / 100)
};
function getStat(){
    $.get( "https://cors-anywhere.herokuapp.com/https://www.sololearn.com/Profile/4523689", function( data ) {
        var re = new RegExp(/src="\/Icons\/Courses\/\d{4}.png"/gi);
        var html = $.parseHTML(data);
        var userCourses = $(html).find('.userCourses');
        $('.userCourses').html(userCourses.html().replace(/\/Icons\/Courses\/\d{4}.png"/gi, 'https://www.sololearn.com/'+'$&'))
    });
}
function startDraw(){
    if ($('.courseWrapper').length > 0) {
        $(".chart").each(function () {
            drawProgress(this, $(this).children("canvas")[0])
        });
        clearInterval(timerID)
    }
}
getStat();
let timerID = setInterval(startDraw, 1000);
