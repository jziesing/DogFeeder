/*!CK:1486929786!*//*1401160808,178167347*/

if (self.CavalryLogger) { CavalryLogger.start_js(["eDTE1"]); }

__d("PubContentTrendingUnitTruncation",["DOM","LitestandEllipsis","Style","csx"],function(a,b,c,d,e,f,g,h,i,j){var k,l={truncate:function(m){var n=g.scry(m,"._5v9v")[0];if(n){if(typeof k==='undefined'){var o=g.find(m,"._uhk");k=i.getFloat(o,'maxHeight');}var p=g.find(m,"._5r--");h.add(n,k,p);}}};e.exports=l;},null);
__d("PubcontentTrendingUnitToggle",["CSS","DOM","Event","PubContentTrendingUnitTruncation","Run","csx"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m=false,n={listenForToggle:function(o,p){var q=i.listen(o,'click',function(){q.remove();q=null;m=true;g.hide(o);h.scry(p,"._5my1").forEach(function(r){g.show(r);j.truncate(r);});});k.onLeave(function(){q&&q.remove();});},isToggled:function(){return m;}};e.exports=n;},null);
__d("XPubcontentTrendingReplaceTrendsControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f,g){e.exports=g.create("\/pubcontent\/trending\/trending_unit\/",{is_expanded:{type:"Bool"}});},null);
__d("PubcontentTrendingUnitRefresh",["AsyncRequest","PubcontentTrendingUnitToggle","XPubcontentTrendingReplaceTrendsControllerURIBuilder"],function(a,b,c,d,e,f,g,h,i){var j={refreshTrendingUnitWithDelay:function(k){var l=k*1000;setTimeout(function(){var m=h.isToggled(),n=(new i()).setBool('is_expanded',m).getURI();new g().setURI(n).send();},l);}};e.exports=j;},null);
__d("TrendingRHCLogger",["AsyncSignal","CSS","Event","Parent","Run","BanzaiScuba","TrendingRHCConfig","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s;function t(x,y){var z=x.getAttribute('data-position');if(!z)return;var aa=new l('trending_rhc',null,{sampleRate:m.sample_rate});aa.addNormal('country',s);aa.addNormal('post_search_trending_feeds',m.post_search_trending_feeds);aa.addNormal('event',y);aa.addNormal('position',z);aa.addNormal('qe_group',p);aa.addNormal('source',q);aa.post();}function u(event){var x=null,y=event.getTarget();if(!h.hasClass(y,"_5my2")){x=j.byClass(y,"_4_nl");y=j.byClass(y,"_5my2");}if(!y||x||h.hasClass(event.getTarget(),"_19_3"))return;t(y,'click');var z=y.getAttribute('data-position');if(z==='seemore')v();}function v(){if(!o)return;new g('/ajax/pubcontent/trending_rhc/log_hidden',{keys:JSON.stringify(o),source:q}).send();o=null;}var w={init:function(x,y,z,aa,ba,ca,da){q=y;p=aa;s=ba;o=ca;r=da;var ea=i.listen(x,'click',u);k.onLeave(function(){ea.remove();});},logImpression:function(x){t(x,'imp');},getSource:function(){return q;},getQueryID:function(){return r;}};e.exports=w;},null);
__d("XPubcontentTrendingHideConfirmControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f,g){e.exports=g.create("\/pubcontent\/trending\/hide_confirm\/",{hidden_topic_id:{type:"Int",required:true},position:{type:"Int"},reason:{type:"Int",required:true},source:{type:"String"},query_id:{type:"Int"}});},null);
__d("XPubcontentTrendingInsertItemControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f,g){e.exports=g.create("\/pubcontent\/trending\/hide_options\/",{num_removed_topics:{type:"Int"},trending_topic_id:{type:"Int",required:true},topic_ids:{type:"IntVector"}});},null);
__d("TrendingRHCHide",["AsyncRequest","CSS","DOM","DOMQuery","Event","PubContentTrendingUnitTruncation","TrendingRHCLogger","URI","XPubcontentTrendingHideConfirmControllerURIBuilder","XPubcontentTrendingInsertItemControllerURIBuilder","cx","csx","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t,u,v=false,w=['webkitAnimationEnd','animationend','mozAnimationEnd','oAnimationEnd','MSAnimationEnd'];function x(da){h.removeClass(da,"_4_ni");}function y(da){da.sort(function(ea,fa){var ga=Number(ea.getAttribute('data-position')),ha=Number(fa.getAttribute('data-position'));if(ga&&ha)return ga<ha?-1:1;return 0;});return da;}function z(da,ea){var fa=j.scry(da,"._5my2"),ga=fa.filter(function(ia){var ja=Number(ia.getAttribute('data-position'));return ja>=ea;}),ha=[];ga.forEach(function(ia){var ja=Number(ia.getAttribute('data-position'));ia.setAttribute('data-position',ja-1);var ka=j.scry(ia,"._7ge");ka.forEach(function(la){var ma=n(la.getAttribute('href')).addQueryData('position',ja-1);ha.push({link:la,uri:ma.toString()});});});ha.forEach(function(ia){var ja=ia.link;ja.setAttribute('href',ia.uri);});u++;}function aa(da,ea){var fa=da[0],ga=da.filter(function(ha){return !h.hasClass(ha,"_5my1");});if(ga&&ga[0])h.addClass(ga[0],"_5my1");h.addClass(fa,"_4_ni");h.show(fa);m.logImpression(fa);w.forEach(function(event){fa.addEventListener(event,function(){l.truncate(fa);});});}function ba(da,ea){var fa=j.find(da,"^._5mym"),ga=j.scry(fa,"._5my2.hidden_elem");ga=y(ga);var ha=j.find(da,"^._5my2"),ia=i.create('div',{className:"_4_nj"});if(ga.length>=1){aa(ga,ha);if(ga.length==1){var ja=j.scry(fa,"._5my9");if(ja&&ja.length>0&&!h.hasClass(ja[0],'hidden_elem'))h.addClass(ja[0],"_4_nk");}}var ka=Number(ha.getAttribute('data-position'));z(fa,ka);i.replace(ha,ia);var la=(new o()).setInt('reason',da.firstChild.value).setInt('hidden_topic_id',ea).setInt('position',ka);if(m.getSource())la.setString('source',m.getSource());if(m.getQueryID())la.setInt('query_id',m.getQueryID());var ma=la.getURI();new g().setURI(ma).setRelativeTo(da).send();}var ca={initializeTrendingTopics:function(da){t=da;u=0;},addTopicID:function(da){if(t)t.push(da);},confirmHide:function(da,ea){var fa=false;s(k.listen(da,'click',function(){setTimeout(function(){if(fa)return;fa=true;ba(da,ea);},100);}));},listenForHide:function(da,ea){s(k.listen(da,'click',function(){var fa=j.find(da,"^._5my2");x(fa);var ga=j.find(fa,"._4_nl"),ha=j.find(fa,"._4_nm");h.hide(ha);h.show(ga);if(!v){v=true;var ia=(new p()).setInt('trending_topic_id',ea).setIntVector('topic_ids',t).setInt('num_removed_topics',u).getURI();new g().setURI(ia).setRelativeTo(da).setHandler(function(){v=false;}).send();}}));},listenForUndo:function(da){var ea=j.find(da,"._4_nn");s(k.listen(ea,'click',function(){var fa=j.find(da,"^._5my2 ._4_nm");h.hide(da);h.show(fa);}));}};e.exports=ca;},null);