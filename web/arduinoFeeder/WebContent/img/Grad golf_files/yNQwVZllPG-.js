/*!CK:738409870!*//*1401125392,178175299*/

if (self.CavalryLogger) { CavalryLogger.start_js(["gUT2O"]); }

__d("ComposerXPages",["DOM","DOMScroll","URI","Event","ge"],function(a,b,c,d,e,f,g,h,i,j,k){var l={initScrollToComposer:function(m){var n=k('pagelet_timeline_recent');j.listen(m,'click',function(){this._scrollAndFocus(n);}.bind(this));},scrollToComposer:function(m){if(!i.getRequestURI().getQueryData().scroll_to_composer)return;j.listen(window,'load',function(){this._scrollAndFocus(m);}.bind(this));},_scrollAndFocus:function(m){h.scrollTo(m,500,false,false,0,function(){g.find(m,'textarea.input').focus();});}};e.exports=l;},null);
__d("InlineFriendInviter",["Event","AsyncRequest","CSS","$","DOM","DataStore","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n={init:function(o,p,q){g.listen(o,'click',function(event){i.addClass(q,'yellow');i.hide(q);});g.listen(p,'click',function(event){i.addClass(q,'yellow');i.hide(q);});},sendInvite:function(o,p,q,r,s){new h().setURI('/ajax/pages/invite/send_single/').setData({page_id:o,invitee:p,elem_id:q,action:r,ref:s}).send();i.addClass(q,'yellow');i.hide(k.find(j(q),'.button'));},setupScrollEvents:function(o,p,q,r){var s=k.find(o,'div.uiScrollableAreaWrap');g.listen(s,'scroll',function(event){this.onScrollEvent(o,p,q,r);}.bind(this));},onScrollEvent:function(o,p,q,r){var s=l.get(o,'ScrollableArea');if(s&&!s.requestPending&&!s.noMoreResults&&s.isScrolledToBottom()){s.requestPending=true;var t=m(o,'.uiMorePager'),u=k.find(o,'.inlineFriendInviterList'),v=u.getAttribute('meta');new h().setURI('/ajax/pages/invite/get.php').setData({pageID:p,offset:v,ref:q,is_admin:r}).setStatusElement(t).setHandler(this.onRequestFinished.bind(this,o)).setErrorHandler(this.onRequestFinished.bind(this,o)).send();}},onRequestFinished:function(o,p){var q=l.get(o,'ScrollableArea');q.requestPending=false;var r=p.getPayload();q.noMoreResults=r.noMoreResults;if(r.offset){var s=k.find(o,'.inlineFriendInviterList');s.setAttribute('meta',r.offset);}}};e.exports=n;},null);
__d("PlaceActionLink",["AsyncRequest","Dialog"],function(a,b,c,d,e,f,g,h){var i={start_claim_link:function(j){var k=new g().setMethod('POST').setURI('/ajax/places/claim/start_claim.php').setData({id:j});new h().setAsync(k).show();return false;},refer_claim_link:function(j){var k=new g().setMethod('POST').setURI('/ajax/places/claim/refer_claim.php').setData({id:j});new h().setAsync(k).show();return false;}};e.exports=i;},null);
__d("legacy:place-action-link",["PlaceActionLink"],function(a,b,c,d){a.PlaceActionLink=b('PlaceActionLink');},3);
__d("TimelineCurationControl",["CSS","Parent","SelectorDeprecated"],function(a,b,c,d,e,f,g,h,i){i.subscribe('open',function(j,k){var l=k.selector,m=k.clone||l,n=h.byClass(m,'fbTimelineCurationControl');if(n){g.addClass(n,'editControlsMenuOpen');var o=i.subscribe('close',function(p,q){if(q.selector==l){i.unsubscribe(o);setTimeout(g.removeClass.bind(null,n,'editControlsMenuOpen'),0);}});}});},null);
__d("TimelineNavigation",["Event","Arbiter","DOM","CSS","PageTransitions","Parent","TimelineController","TimelineURI","URI","$","createArrayFrom","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s=4,t=110,u=20,v=119,w=328,x=10,y=3,z=false,aa=21,ba,ca,da,ea=[],fa=[],ga,ha=0,ia,ja=0,ka=0,la,ma=s,na=false,oa=false,pa=null,qa,ra=false,sa,ta,ua=false;function va(jb,kb,lb){if(!kb.firstChild){i.remove(kb);return;}fa.push(kb);ya(lb.recent);j.removeClass(l.byTag(kb,'li'),'empty');if(ga&&(ja>s||ka>0))j.removeClass(ga,'notready');xa();if(lb.async){cb();eb();}}function wa(jb,kb,lb){i.remove(l.byTag(kb,'li'));if(!lb.async){la++;}else{ja--;cb();eb();}xa();}function xa(){var jb=ga?0:aa;if(ja<=s){var kb=w+v*Math.max(0,s-ja)+jb;if(ia)ia.style.width=kb+'px';ma=ja;za();}}function ya(jb){if(jb){ka++;}else ja++;za();}function za(){if(!sa)return;var jb=Math.max(0,ja-s)+ka;if(ha&&ga){i.setContent(ha,jb===0?" ":jb);j.conditionClass(ga,'fbTimelineMoreButtonZero',jb===0);if(!na)j.conditionShow(ga,jb>0);}}function ab(){var jb=i.scry(p('fbTimelineNavTopRow'),'li.tile'),kb=0,lb=0,mb=Math.max(0,s-ma),nb=false;for(var ob=0;ob<jb.length;ob++){if(jb[ob]==ia||jb[ob]==ga)continue;nb=((kb+mb)%s===0);j.conditionClass(jb[ob],'leftMost',(kb!==0&&nb));if(!j.hasClass(jb[ob],'empty'))lb=kb;kb++;}nb=((lb+1+mb)%s===0);var pb=jb.length-1-mb;if(nb){if(na&&(lb+1+mb)/s<y){pb=Math.min(pb,lb+s);oa=true;}else pb=lb;}else{var qb=((lb+1+mb)%s);pb=lb+(s-qb);oa=false;}ob=0;for(ob=0;ob<=pb;ob++)if(jb[ob]&&(jb[ob]==ia||jb[ob]==ga)){pb++;}else jb[ob]&&j.hasClass(jb[ob],'empty')&&j.removeClass(jb[ob],'hidden_elem');}function bb(jb,kb,lb){var mb=i.scry(jb,'li.tile');if(!kb)kb=0;var nb=false;for(var ob=kb;ob<mb.length;ob++){nb=((ob-lb)%s===0);var pb=mb[ob];j.conditionClass(pb,'leftMost',nb);if(j.hasClass(pb,'empty'))j.removeClass(pb,'hidden_elem');}}function cb(){ab();var jb=r('fbTimelineNavSecondaryRow');jb&&bb(jb,0,0);}function db(){if(!ga)return;if(j.hasClass(ga,'notready'))return;j.toggleClass(ga,'fbTimelineMoreButtonOpen');var jb=r('fbRecentAppTitle');jb&&j.conditionClass(jb,'hidden_elem',ka===0);if(j.hasClass(ga,'fbTimelineMoreButtonOpen')){cb();}else za();eb();}function eb(){if(ga&&!j.hasClass(ga,'fbTimelineMoreButtonOpen')){ba.style.height='';j.removeClass(ba,'expanded');}else{var jb=ja+(s-ma),kb=((ka>0)?x:0)+t*(Math.ceil(ka/s))+t*(Math.ceil(jb/s))+t*(oa?1:0)+u;j.addClass(ba,'expanded');ba.style.height=kb+'px';}}function fb(jb){var kb=jb==n.TIMELINE_KEY||jb==n.WALL_KEY,lb=l.byClass(ba,'fbTimelineTopSectionBase'),mb=r('timeline_tour_toolbar');if(ga){j.removeClass(ga,'fbTimelineMoreButtonOpen');eb();}mb&&j.conditionShow(mb,kb);if(lb)j.conditionClass(lb,'collapsedHead',!kb);}function gb(event){if(ua)return true;if(!l.byTag(event.getTarget(),'a')){var jb=o(i.find(ia,'a.title').href);if(o(location).getSubdomain()=="business")jb.setSubdomain("business");k.go(jb.toString());}}function hb(){if(ga)setTimeout(function(){ga.removeAttribute('ajaxify');ga.removeAttribute('rel');},0);pa&&pa.remove();}var ib={UPDATE_PAGE:'TimelineNavigation/updatePage',init:function(jb,kb,lb,mb){if(z)return;z=true;ba=jb;ga=kb;ca=o.getRequestURI();ia=i.scry(ba,'li.about')[0];fb(m.getCurrentKey());na=mb;h.inform(ib.UPDATE_PAGE);if(ga){ha=i.find(ga,'div.text');pa=g.listen(ga,'click',hb);}qa=p('fbTimelineNavigationLoadContainer');i.appendContent(p('content'),qa);if(ia)ta=g.listen(ia,'click',gb);ea.forEach(function(ob){if(!ob[2].remove){va.apply(this,ob);}else wa.apply(this,ob);});ea=[];var nb=l.byClass(jb,'fbTimelineSection');if(nb)i.scry(nb,'ul.uiButtonGroup').forEach(function(ob){q(ob.childNodes).forEach(function(pb){pb.childNodes.length||i.remove(pb);});if(ob.firstChild){j.addClass(ob.firstChild,'firstItem');}else i.remove(ob);});m.register(m.NAV,ib);},reset:function(){ta&&ta.remove();ta=null;sa&&sa.remove();sa=null;z=false;ba=null;da=null;fa=[];ga=null;ha=null;ia=null;ja=0;ka=0;la=0;ma=s;na=false;oa=false;qa=null;ra=false;ua=false;},initializeMorePager:function(){if(sa)return;if(ga)sa=g.listen(ga,'click',db);},registerNav:function(jb,kb,lb){z?(lb.remove?wa.apply(this,arguments):va.apply(this,arguments)):ea.push(arguments);},redraw:function(){cb();eb();},setEditMode:function(jb){ua=jb;}};e.exports=ib;},null);
__d("TimelinePageMostRecent",["CSS","DOMQuery","Parent","Style","TimelineCapsule","$"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={init:function(n,o){if(!g.shown(n)){g.show(n);var p=l(o);j.set(h.find(p,'div.sArea'),'height',(p.offsetHeight||0)+'px');k.balanceCapsule(i.byClass(l(n),'fbTimelineCapsule'));}}};e.exports=m;},null);
__d("SubMenu",["Arbiter","CSS","Event","copyProperties"],function(a,b,c,d,e,f,g,h,i,j){function k(){"use strict";}k.prototype.init=function(l,m,n,o){"use strict";this._subMenu=l;this._mainMenu=m;this._forward=n;this._backward=o;g.subscribe('SubMenu/Reset',this._goToMainMenu.bind(this));i.listen(n,'click',this._goToSubMenu.bind(this));i.listen(o,'click',this._goToMainMenu.bind(this));};k.prototype.initAsyncChildMenu=function(l){"use strict";i.listen(this._forward,'click',function(){this._goToSubMenu();l.load();}.bind(this));};k.prototype._goToMainMenu=function(){"use strict";h.hide(this._subMenu);h.show(this._mainMenu);};k.prototype._goToSubMenu=function(){"use strict";h.hide(this._mainMenu);h.show(this._subMenu);};j(k.prototype,{_subMenu:null,_mainMenu:null,_forward:null,_backward:null});e.exports=k;},null);
__d("legacy:ui-submenu",["SubMenu"],function(a,b,c,d){a.SubMenu=b('SubMenu');},3);
__d("AsyncMenu",["AsyncRequest","copyProperties","emptyFunction"],function(a,b,c,d,e,f,g,h,i){function j(k,l){"use strict";this._uri=k;this._elem=l;}j.prototype.load=function(){"use strict";this.load=i;g.bootstrap(this._uri,this._elem);};h(j.prototype,{_uri:null,_elem:null});e.exports=j;},null);
__d("TypeaheadPreventSubmitOnEnter",["Event","Keys","copyProperties"],function(a,b,c,d,e,f,g,h,i){function j(k){"use strict";this._typeahead=k;}j.prototype.enable=function(){"use strict";var k=this._typeahead.getCore().getElement();this._listener=g.listen(k,'keypress',function(l){if(g.getKeyCode(l)==h.RETURN)l.kill();});};j.prototype.disable=function(){"use strict";this._listener.remove();this._listener=null;};i(j.prototype,{_listener:null});e.exports=j;},null);