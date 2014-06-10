/*!CK:1870806827!*//*1402009044,178198825*/

if (self.CavalryLogger) { CavalryLogger.start_js(["BahiG"]); }

__d("CookieCore",[],function(a,b,c,d,e,f){var g={set:function(h,i,j,k,l){document.cookie=h+"="+encodeURIComponent(i)+"; "+(j?"expires="+(new Date(Date.now()+j)).toGMTString()+"; ":"")+"path="+(k||'/')+"; domain="+window.location.hostname.replace(/^.*(\.facebook\..*)$/i,'$1')+(l?"; secure":"");},clear:function(h,i){i=i||'/';document.cookie=h+"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; "+"path="+i+"; domain="+window.location.hostname.replace(/^.*(\.facebook\..*)$/i,'$1');},get:function(h){var i=document.cookie.match('(?:^|;\\s*)'+h+'=(.*?)(?:;|$)');return (i?decodeURIComponent(i[1]):i);}};e.exports=g;},null);
__d("Cookie",["CookieCore","Env","copyProperties"],function(a,b,c,d,e,f,g,h,i){function j(l,m,n,o,p){if(h.no_cookies&&l!='tpa')return;g.set(l,m,n,o,p);}var k=i({},g);k.set=j;e.exports=k;},null);