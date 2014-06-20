/**
 * TODO: jsdoc
 */
(function(doc){
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
  
  function setC(key, val, expiresSec, path, domain, secure) {
    var cookie = key + "=" + val;
    if (expiresSec || expiresSec == 0) {
      cookie += "; max-age=" + expiresSec;
    }
    if (path){
      cookie += "; path=" + path;
    }
    if (domain){
      cookie += "; domain=" + domain;
    }
    if (secure){
      cookie += "; secure";
    }
    doc.cookie = cookie;
  }
})(document);
