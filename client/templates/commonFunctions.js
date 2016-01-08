Template.registerHelper('showImg', function(url) {
    var frameid = 'frameimg' + Math.ceil(Math.random() * 10 );
    window.iframeId = frameid;
    window.img = '<img id="img" src=' + url + '?' + Math.random() + 
    ' style="height:100%" /><script>window.onload = function() { document.getElementsByTagName("body")[0].style.margin="0" }<'+'/script>';
    return ('<iframe id="'+frameid+'" src="javascript:parent.img;" frameBorder="0" scrolling="no" width="100%" height="100%"></iframe>');
})

Template.registerHelper('showOpenImg', function(url) {
    var frameid = 'frameimg' + Math.ceil(Math.random() * 10 );
    window.iframeId = frameid;
    window.img = '<img id="img" src=' + url + '?' + Math.random() + 
    ' style="height:100%;width:100%" /><script>window.onload = function() { document.getElementsByTagName("body")[0].style.margin="0" }<'+'/script>';
    return ('<iframe id="'+frameid+'" src="javascript:parent.img;" frameBorder="0" scrolling="no" width="100%" height="100%"></iframe>');
})