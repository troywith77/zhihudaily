Template.registerHelper('showImg', function(url) {
    var frameid = 'frameimg' + Math.ceil(Math.random() * 10 );
    window.iframeId = frameid;
    window.img = '<img id="img" src=' + url + '?' + Math.random() + ' /><script>window.onload = function() { parent.document.getElementById(""+parent.iframeId+"").height = document.getElementById("img").height+"px"; }<'+'/script>';
    return ('<iframe id="'+frameid+'" src="javascript:parent.img;" frameBorder="0" scrolling="no" width="100%"></iframe>');
})