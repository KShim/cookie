(function(doc){
  function setC(key, val, expires) {
    expires = expires + ';' || '';
    doc.cookie = key + '=' + val + ';' + expires;
  }
  
  function getC(key){
    if(doc.cookie){
      var aryC = doc.cookie.split(';');
      for (var i = 0, len = aryC.length; i < len; i++) {
        var strC = aryC[i];
        var aryKey = strC.replace(/^\s+|\s+$/g, '').split('=');
        if (aryKey.length && aryKey[0] === key) {
          return aryKey[1];
        }
      }
    }
    return '';
  }
})(document);