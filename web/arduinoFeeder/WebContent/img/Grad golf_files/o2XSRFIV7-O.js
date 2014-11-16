/*!CK:522635694!*//*1400956581,178198863*/

if (self.CavalryLogger) { CavalryLogger.start_js(["GWnyW"]); }

__d("HomeRHCAdsBasicRefresh",["AdsRefreshHandler","Arbiter","NavigationMessage","Run","SubscriptionsHandler","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p;function q(){m.cleanup();m=null;n.release();n=null;o=null;}function r(){var u=l(p);if(u&&o){u.appendChild(o);o=null;}}function s(u,v){o=v;m&&m.forceLoadIfEnoughTimePassed(0);}var t={init:function(u,v,w){p=u;m=new g(l(u),v,w).subscribeDefaultEventsForRefresh();n=new k();n.addSubscriptions(h.subscribe(i.NAVIGATION_BEGIN,q),h.subscribe('ProfileQuestionAnswered',s),h.subscribe('AdsRefreshHandler/AdsLoaded',r));j.onLeave(q);}};e.exports=t;},null);
__d("GroupsMemberCountUpdater",["Arbiter","DOM"],function(a,b,c,d,e,f,g,h){function i(){}i.subscribeMemberCount=function(j){g.subscribe('GroupsMemberCount/changeText',function(k,l){h.setContent(j,l);});};i.subscribeNewMemberCount=function(j){g.subscribe('GroupsMemberCount/changeNewMembersText',function(k,l){h.setContent(j,l);});};e.exports=i;},null);
__d("NotificationsSelector",["Parent","submitForm","AsyncRequest"],function(a,b,c,d,e,f,g,h,i){function j(l,m,n){m.subscribe('change',function(o,p){n.value=p.value;var q=g.byTag(l,'form');q&&h(q);});}function k(l,m,n,o){m.subscribe('change',function(p,q){new i().setURI('/ajax/groups/notifications/update.php').setData({setting:q.value,group_id:o}).setMethod('POST').send();});}e.exports.bindForm=j;e.exports.updateNotif=k;},null);
__d("GroupSearchBox",["CSS","DOM","Event","Input","Parent"],function(a,b,c,d,e,f,g,h,i,j,k){var l={init:function(m,n){var o=h.find(n,'.inputtext'),p=k.byClass(o,'searchBoxToggle');i.listen(m,'click',function(){g.show(n);o.focus();p&&g.addClass(p,'searchBoxVisible');});i.listen(o,'blur',function(){if(!j.getValue(o)){g.hide(n);p&&g.removeClass(p,'searchBoxVisible');}});}};e.exports=l;},null);
__d("GroupsAddTypeaheadView",["Arbiter","ContextualTypeaheadView"],function(a,b,c,d,e,f,g,h){for(var i in h)if(h.hasOwnProperty(i))k[i]=h[i];var j=h===null?null:h.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=h;function k(){"use strict";if(h!==null)h.apply(this,arguments);}k.prototype.select=function(l){"use strict";var m=this.results[this.index];g.inform('GroupsMemberSuggestion/remove',m.uid);if(m.is_member){this.reset();}else j.select.call(this,l);};e.exports=k;},null);
__d("GroupsAddMemberTypeahead",["Arbiter","DOM","Typeahead","copyProperties","ge"],function(a,b,c,d,e,f,g,h,i,j,k){function l(m,n){if(m&&n)this.init(m,n);}j(l.prototype,{init:function(m,n){m.subscribe('select',function(o,p){g.inform('GroupsAddMemberTypeahead/add',{gid:n,uid:p.selected.uid,name:p.selected.text,photo:p.selected.photo});var q=m.getData().getExclusions();q.push(p.selected.uid);m.getData().setExclusions(q);});g.subscribe('GroupsAddMemberTypeahead/updateGroupToken',this.resetTypeaheadCaches.bind(this));},resetTypeaheadCaches:function(m,n){var o=h.scry(k('pagelet_group_'),'.uiTypeahead:not(.uiPlacesTypeahead)');for(var p=0;p<o.length;p++){var q=i.getInstance(o[p]);if(q){var r=q.getData();r.updateToken(n.token);q.getCore().subscribe('focus',r.bootstrap.bind(r));}}}});e.exports=l;},null);
__d("legacy:GroupsAddMemberTypeahead",["GroupsAddMemberTypeahead"],function(a,b,c,d){a.GroupsAddMemberTypeahead=b('GroupsAddMemberTypeahead');},3);
__d("LitestandRHCAds",["AdsRefreshHandler","Arbiter","DOM","Event","LitestandMessages","NavigationMessage","Run","SubscriptionsHandler","csx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q,r,s,t,u;function v(){r&&r.forceLoadIfEnoughTimePassed(0);}function w(){var ba=i.scry(s,"._5f85 a")[0];if(ba)q.addSubscriptions(j.listen(ba,'click',v));}function x(){var ba=p(t);if(ba&&u){ba.appendChild(u);u=null;}}function y(){if(r){r.cleanup();r=null;}if(q){q.release();q=null;}u=null;}function z(ba,ca){u=ca;v();}var aa={init:function(ba,ca,da){s=p(ba);t=ba;r=new g(s,ca,da).subscribeDefaultEventsForRefresh();q=new n();q.addSubscriptions(h.subscribe(l.NAVIGATION_BEGIN,y),h.subscribe('AdsRefreshHandler/AdsLoaded',w),h.subscribe('AdsRefreshHandler/AdsLoaded',x),h.subscribe('ProfileQuestionAnswered',z));w();m.onLeave(y);}};e.exports=aa;},null);
__d("PopoverMenuDynamicIcon",["Button","CSS","DOM","DOMQuery","copyProperties","csx"],function(a,b,c,d,e,f,g,h,i,j,k,l){function m(n){"use strict";this._popoverMenu=n;}m.prototype.enable=function(){"use strict";this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',this._onSetMenu.bind(this));};m.prototype.disable=function(){"use strict";this._popoverMenu.unsubscribe(this._setMenuSubscription);this._setMenuSubscription=null;this._removeChangeSubscription();};m.prototype._onSetMenu=function(){"use strict";this._removeChangeSubscription();this._menu=this._popoverMenu.getMenu();this._changeSubscription=this._menu.subscribe('change',function(n,o){var p=o.item;if(o[0])p=o[0].item;if(!p)return;var q=p.getIcon();q=q?q.cloneNode(true):null;var r=this._popoverMenu.getTriggerElem(),s=j.scry(r,"span._55pe")[0];if(s){var t=s.firstChild;if(h.hasClass(t,'img')){i.replace(t,q);}else i.prependContent(s,q);}else g.setIcon(r,q);}.bind(this));};m.prototype._removeChangeSubscription=function(){"use strict";if(this._changeSubscription){this._menu.unsubscribe(this._changeSubscription);this._changeSubscription=null;}};k(m.prototype,{_setMenuSubscription:null,_changeSubscription:null});e.exports=m;},null);
__d("DockingElement",["ArbiterMixin","CSS","DOM","DOMDimensions","Event","Run","Style","SubscriptionsHandler","getElementPosition","mixin","queryThenMutateDOM","removeFromArray"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s,t=[],u=p(g);for(var v in u)if(u.hasOwnProperty(v))x[v]=u[v];var w=u===null?null:u.prototype;x.prototype=Object.create(w);x.prototype.constructor=x;x.__superConstructor__=u;function x(y){"use strict";this.$DockingElement0=y;this.$DockingElement1=0;if(!t.length){var z=q.bind(null,function(){for(var aa=0,ba=t.length;aa<ba;aa++)t[aa].getRect();},function(){for(var aa=0,ba=t.length;aa<ba;aa++)t[aa].updateWithCache();},'DockingElement');s=new n();s.addSubscriptions(k.listen(window,'scroll',z),k.listen(window,'resize',z));l.onLeave(function(){while(t.length)t.pop().destroy();});}t.push(this);this.update();}x.prototype.getRect=function(){"use strict";var y=this.$DockingElement2?this.getPlaceholder():this.$DockingElement0;this.$DockingElement3=o(y);this.$DockingElement4=j.getElementDimensions(y);this.$DockingElement5=h.hasClass(document.documentElement,'tinyViewport');};x.prototype.updateWithCache=function(){"use strict";var y=this.$DockingElement1,z=this.getPlaceholder();if(!this.$DockingElement5&&this.$DockingElement3.y<=y){if(!this.$DockingElement2){if(!this.$DockingElement6){i.insertAfter(this.$DockingElement0,z);this.$DockingElement6=true;}h.addClass(this.$DockingElement0,'fixed_elem');h.show(z);this.$DockingElement2=true;}var aa;if(this.$DockingElement7!==y){aa={};aa.top=y+'px';this.$DockingElement7=y;}var ba=this.$DockingElement4.width;if(ba!==this.$DockingElement8){aa=aa||{};aa.width=ba+'px';this.$DockingElement8=ba;}aa&&m.apply(this.$DockingElement0,aa);var ca=this.$DockingElement4.height;if(ca!==this.$DockingElement9){m.set(z,'height',ca+'px');this.$DockingElement9=ca;this.inform('changedheight');}}else if(this.$DockingElement2){m.apply(this.$DockingElement0,{top:'',width:''});h.removeClass(this.$DockingElement0,'fixed_elem');h.hide(z);this.$DockingElement2=false;this.$DockingElement8=null;this.$DockingElement7=null;}};x.prototype.update=function(){"use strict";this.getRect();this.updateWithCache();};x.prototype.getPlaceholder=function(){"use strict";if(!this.$DockingElementa)this.$DockingElementa=i.create('div');return this.$DockingElementa;};x.prototype.destroy=function(){"use strict";if(t.indexOf(this)===-1)return;r(t,this);if(this.$DockingElementa&&this.$DockingElementa.parentNode){i.remove(this.$DockingElementa);this.$DockingElementa=null;}if(!t.length){s.release();s=null;}};x.prototype.setOffset=function(y){"use strict";this.$DockingElement1=y;this.update();return this;};e.exports=x;},null);
__d("StickyRHC",["Arbiter","DockingElement","DOM","DOMDimensions","Event","LitestandMessages","Run","SubscriptionsHandler","ViewportBounds","$","csx","ge","getElementPosition","removeFromArray","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var v=[],w;function x(ba,ca){if(!ca||!ca.dom_id){v.forEach(y);return;}var da=p(ca.dom_id);for(var ea=0;ea<v.length;ea++)if(i.contains(v[ea].getRoot(),da)){y(v[ea]);return;}}function y(ba){var ca=ba.getRoot(),da=ba.updateOffset.bind(ba),ea=i.scry(ca,'img.img');ea.forEach(function(fa){if(fa.complete||fa.getAttribute('height')||(typeof fa.naturalHeight!=='undefined'&&fa.naturalHeight!==0))return;var ga=function(){da();ha.remove();ia.remove();ja.remove();},ha=k.listen(fa,'load',ga),ia=k.listen(fa,'error',ga),ja=k.listen(fa,'abort',ga);});da();}function z(){v.forEach(function(ba){ba.updateOffset();});}function aa(ba){"use strict";this.$StickyRHC0=ba;this.$StickyRHC1=new h(ba);this.$StickyRHC2=0;this.$StickyRHC1.subscribe('changedheight',this.updateOffset.bind(this));this.updateOffset();y(this);if(!v.length){w=new n();w.addSubscriptions(g.subscribe('header_loaded',z),g.subscribe('netego_loaded',x),g.subscribe(l.RHC_RELOADED,function(){z();v.forEach(y);}),k.listen(window,'resize',u(z)));}m.onLeave(this.destroy.bind(this));v.push(this);}aa.prototype.getRoot=function(){"use strict";return this.$StickyRHC0;};aa.prototype.destroy=function(){"use strict";this.$StickyRHC1.destroy();t(v,this);if(!v.length){w.release();w=null;}};aa.prototype.updateOffset=function(){"use strict";var ba=i.scry(this.$StickyRHC0,"._4-u2"),ca=i.scry(this.$StickyRHC0,"._4-u3"),da=i.scry(this.$StickyRHC0,"._5eh2"),ea=i.scry(this.$StickyRHC0,'.uiHeader'),fa=i.scry(this.$StickyRHC0,'.ego_unit'),ga=[].concat(ba,ca,da,ea,fa),ha=[];ga.forEach(function(ra){ha.push(s(ra).y);});ha.sort(function(ra,sa){return ra-sa;});var ia=s(this.$StickyRHC0).y,ja=j.getElementDimensions(this.$StickyRHC0).height;ja+=this.$StickyRHC2;var ka=o.getTop(),la=j.getViewportDimensions().height-ka;if(typeof this.$StickyRHC3==='undefined'){var ma=r('pageFooter');this.$StickyRHC3=ma?j.getElementDimensions(ma).height:0;}la-=this.$StickyRHC3;var na=la-ja;if(ja<la){na=ka;}else for(var oa=0,pa=ha.length;oa<pa;oa++){var qa=ha[oa]-ia;if(ja-qa<la){na=ka-qa;break;}}this.$StickyRHC1.setOffset(na+this.$StickyRHC2);};aa.prototype.setOffset=function(ba){"use strict";this.$StickyRHC2=ba;this.updateOffset();};e.exports=aa;},null);
__d("TypeaheadSubmitOnSelect",["Form","copyProperties"],function(a,b,c,d,e,f,g,h){function i(j){"use strict";this._typeahead=j;}i.prototype.enable=function(){"use strict";this._subscription=this._typeahead.subscribe('select',function(){var j=this._typeahead.getCore().getElement().form;if(j)j.getAttribute('rel')=='async'?g.bootstrap(j):j.submit();}.bind(this));};i.prototype.disable=function(){"use strict";this._typeahead.unsubscribe(this._subscription);this._subscription=null;};h(i.prototype,{_subscription:null});e.exports=i;},null);
__d("legacy:SubmitOnSelectTypeaheadBehavior",["TypeaheadSubmitOnSelect"],function(a,b,c,d,e,f,g){if(!a.TypeaheadBehaviors)a.TypeaheadBehaviors={};a.TypeaheadBehaviors.submitOnSelect=function(h){h.enableBehavior(g);};},3);