/*!CK:551040807!*//*1401473376,178187583*/

if (self.CavalryLogger) { CavalryLogger.start_js(["l4Q4d"]); }

__d("CensorLogger",["Event","Banzai","DOM","debounce","ge","Keys"],function(a,b,c,d,e,f,g,h,i,j,k){var l=10*60*1000,m=b('Keys').RETURN,n=function(q){var r=(q.target||q.srcElement).id,s=(q.target||q.srcElement).value.trim().length,t=o.tracker(r);if(!t)return;if(s>5&&!t.submitted){if(t.type=='comment'&&t.parent_fbid=='unknown'){if(!o.syncTrackerWithForm(r))o.snowliftSync(r);t=o.tracker(r);}h.post('censorlogger',{impid:t.impid,clearcounter:t.clearcounter,instrument:t.type,elementid:r,parent_fbid:(t.parent_fbid=='unknown'?null:t.parent_fbid),version:"original"},h.VITAL);o.setSubmitted(r,true);}else if(s===0&&t.submitted&&q.which!=m){o.debouncers[r]=p(r);o.debouncers[r]();}else if(s>0&&t.submitted)if(o.debouncers[r])o.debouncers[r].reset();},o={init:function(q){this.impressionID=q;for(var r in this.trackedElements)if(!k(r))this.stopTracking(r);for(var s in this.unmatchedForms)if(!k(s))delete this.unmatchedForms[s];},trackElement:function(q,r,s){var t,u,v;this.debouncers=this.debouncers||{};this.trackedElements=this.trackedElements||{};this.unmatchedForms=this.unmatchedForms||{};r=r.toLowerCase();if(r=='composer'){t=(s?i.find(q,'div.uiMetaComposerMessageBox textarea.input'):i.find(q,'div.uiComposerMessageBox textarea.input'));u=i.find(q,'form.attachmentForm');var w=i.scry(q,'input[name="xhpc_targetid"]')[0];if(w)v=w.value;}else if(r=='comment')t=i.find(q,'div.commentBox textarea.textInput');if(t==null)return;var x=i.getID(t);if(u)this.addJoinTableInfoToForm(u,i.getID(t));g.listen(t,'keyup',n.bind(this));this.trackedElements[x]={submitted:false,clearcounter:0,type:r,impid:this.impressionID,parent_fbid:v||'unknown',formID:(u?i.getID(u):null)};if(r=='comment')this.syncTrackerWithForm(x);},registerForm:function(q,r){this.unmatchedForms=this.unmatchedForms||{};this.unmatchedForms[q]=r;},syncTrackerWithForm:function(q){for(var r in this.unmatchedForms){var s=k(r);if(s){var t=i.scry(s,'div.commentBox textarea.textInput')[0];if(t){var u=i.getID(t);if(u&&u==q){this.trackedElements[q].parent_fbid=this.unmatchedForms[r];this.trackedElements[q].formID=r;this.addJoinTableInfoToForm(s,q);delete this.unmatchedForms[r];return true;}}}}return false;},snowliftSync:function(q){var r,s=k(q);if(s&&(r=i.scry(s,'^.fbPhotosSnowboxFeedbackInput')[0])){var t=i.find(r,'input[name="feedback_params"]'),u=JSON.parse(t.value).target_fbid;this.trackedElements[q].parent_fbid=u;this.trackedElements[q].formID=r.id;this.addJoinTableInfoToForm(r,q);return true;}return false;},stopTracking:function(q){delete this.trackedElements[q];if(this.debouncers[q]){this.debouncers[q].reset();delete this.debouncers[q];}},tracker:function(q){return this.trackedElements[q];},getSubmitted:function(q){return (this.trackedElements[q]?this.trackedElements[q].submitted:false);},setSubmitted:function(q,r){if(this.trackedElements[q])this.trackedElements[q].submitted=r;},incrementClearCounter:function(q){if(!this.tracker(q))return;this.trackedElements[q].clearcounter++;this.trackedElements[q].submitted=false;var r=i.scry(k(this.trackedElements[q].formID),'input[name="clp"]')[0];if(r)r.value=JSON.stringify({censorlogger_impid:this.trackedElements[q].impid,clearcounter:this.trackedElements[q].clearcounter,element_id:q});},addJoinTableInfoToForm:function(q,r){i.prependContent(q,i.create('input',{type:'hidden',name:'clp',value:JSON.stringify({censorlogger_impid:this.impressionID,clearcounter:0,element_id:r,version:"original"})}));}},p=function(q){return j(function(){o.incrementClearCounter(q);},l,o);};e.exports=o;},null);
__d("legacy:ScrollAwareDOM",["ScrollAwareDOM"],function(a,b,c,d){a.ScrollAwareDOM=b('ScrollAwareDOM');},3);
__d("FeedTrackingAsync",["Arbiter","collectDataAttributes","copyProperties"],function(a,b,c,d,e,f,g,h,i){function j(){g.subscribe('AsyncRequest/send',function(k,l){var m=l.request,n=m.getRelativeTo();if(n){var o=m.getData(),p=h(n,['ft']);if(Object.keys(p.ft).length)i(o,p);}});}e.exports={init:j};},null);
__d("FbFeedCommentUFIScroller",["Arbiter","DOMScroll","containsNode","ge"],function(a,b,c,d,e,f,g,h,i,j){g.subscribe('comment/focus',function(k,l){var m=l.element,n=j('content');if(n&&i(n,m))h.ensureVisible(m,null,60,250);});e.exports={};},null);
__d("Hovercard",["AccessibleLayer","Arbiter","AsyncRequest","ContextualDialog","ContextualDialogXUITheme","ContextualThing","DOM","Event","JSXDOM","LayerAutoFocus","Parent","Rect","Style","Vector","clickRefAction","csx","cx","tx","userAction"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){var z={},aa={},ba=null,ca=null,da=null,ea=null,fa=150,ga=700,ha=1000,ia=250,ja=50,ka=null,la=null,ma=null,na=null;function oa(event){var fb=q.byTag(event.getTarget(),'a');eb.processNode(fb)&&event.stop();}function pa(fb){ca=fb;if(!qa(fb)){var gb;if(!fb||!(gb=ra(fb))||cb(fb)){aa.moveToken&&aa.moveToken.remove();aa={};return false;}if(aa.node!=fb){aa.moveToken&&aa.moveToken.remove();aa={node:fb,endpoint:gb,pos:null};}}return true;}function qa(fb){return fb&&ba&&aa.node==fb;}function ra(fb){return fb.getAttribute('data-hovercard');}function sa(fb){var gb=m.scry(fb,"^._5jmm ._2orz").length;if(gb)return;var hb=n.listen(fb,'mouseleave',function(){clearTimeout(ka);clearTimeout(la);hb.remove();ca=null;if(!eb.contains(fb))eb.hide();});if(!aa.moveToken)aa.moveToken=n.listen(fb,'mousemove',function(event){aa.pos=t.getEventPosition(event);});clearTimeout(ka);clearTimeout(la);clearTimeout(na);var ib=fa,jb=ba?ia:ga;if(fb.getAttribute('data-hovercard-instant'))ib=jb=ja;ka=setTimeout(xa.bind(null,fb),ib);la=setTimeout(ta.bind(null,fb),jb);}function ta(fb,gb){if(aa.node!=fb)return;var hb=z[ra(fb)];if(hb){va(hb);}else if(gb){va(ab());}else{var ib=ba?ia:ga;ma=setTimeout(ta.bind(null,fb,true),ha-ib);}}function ua(){eb.hide(true);clearTimeout(la);}function va(fb){var gb=aa.node,hb=ba,ib=hb!=gb;if(ea){var jb=ea.getContentRoot();if(!l.containsIncludingLayers(jb,gb))ea.hide();}if(!m.contains(document.body,gb)){eb.hide(true);return;}ba=gb;ea=fb;fb.setContextWithBounds(gb,wa(gb)).show();if(ib)setTimeout(function(){u('himp',ba,null,'FORCE',{ft:{evt:39}});y('hovercard',ba).uai('show');},0);}function wa(fb){var gb=aa.pos,hb=fb.getClientRects();if(!gb||hb.length===0)return r.getElementBounds(fb);var ib,jb=false;for(var kb=0;kb<hb.length;kb++){var lb=new r(Math.round(hb[kb].top),Math.round(hb[kb].right),Math.round(hb[kb].bottom),Math.round(hb[kb].left),'viewport').convertTo('document'),mb=lb.getPositionVector(),nb=mb.add(lb.getDimensionVector());if(!ib||(mb.x<=ib.l&&mb.y>ib.t)){if(jb)break;ib=new r(mb.y,nb.x,nb.y,mb.x,'document');}else{ib.t=Math.min(ib.t,mb.y);ib.b=Math.max(ib.b,nb.y);ib.r=nb.x;}if(lb.contains(gb))jb=true;}return ib;}function xa(fb){if(fb.id&&z[fb.id]!=null)return;var gb=ra(fb);if(z[gb]!=null)return;ya(gb);var hb=function(){eb.dirty(gb);ua();};new i(gb).setData({endpoint:gb}).setMethod('GET').setReadOnly(true).setErrorHandler(hb).setTransportErrorHandler(hb).send();}function ya(fb){z[fb]=false;}function za(fb){var gb=aa.node.getAttribute('data-hovercard-offset-x')||0;fb.setOffsetX(parseInt(gb,10));var hb=aa.node.getAttribute('data-hovercard-offset-y')||0;fb.setOffsetY(parseInt(hb,10));}var ab=function(){if(!da){da=new j({width:275,theme:k},o.div({className:"_7lk"},"Loading..."));da.disableBehavior(g).disableBehavior(p);bb(da);}za(da);return da;};function bb(fb){var gb=[fb.subscribe('mouseenter',function(){clearTimeout(na);ca=aa.node;}),fb.subscribe('mouseleave',function(){fb.hide();ca=null;}),fb.subscribe('destroy',function(){while(gb.length)gb.pop().unsubscribe();gb=null;})];}function cb(fb){return (q.byClass(fb,"_7lu")!==null);}var db=true,eb={hide:function(fb){if(!ba)return;if(fb){if(ea)ea.hide();ca=null;ba=null;ea=null;}else{var gb=aa.node.getAttribute('data-hovercard-instant')?ja:ia;na=setTimeout(eb.hide.bind(null,true),gb);}},setDialog:function(fb,gb){gb.disableBehavior(g).disableBehavior(p);z[fb]=gb;bb(gb);if(aa.endpoint==fb&&ca==aa.node){ab().hide();var hb=aa.node.getAttribute('data-hovercard-position');hb&&gb.setPosition(hb);za(gb);va(gb);}},getDialog:function(fb){return z[fb];},contains:function(fb){if(ea)return l.containsIncludingLayers(ea.getContentRoot(),fb);return false;},dirty:function(fb){var gb=z[fb];if(gb){gb.destroy();delete z[fb];}},dirtyAll:function(){for(var fb in z){var gb=z[fb];gb&&eb.dirty(fb);}h.inform('Hovercard/dirty');},processNode:function(fb){if(fb&&pa(fb)){sa(fb);return true;}return false;},setDirtyAllOnPageTransition:function(fb){db=fb;}};(function(){n.listen(document.documentElement,'mouseover',oa);n.listen(window,'scroll',function(){if(ba&&s.isFixed(ba))eb.hide(true);});h.subscribe('page_transition',function(){ua();db&&eb.dirtyAll();},h.SUBSCRIBE_NEW);})();e.exports=eb;},null);
__d("ButtonGroupX",["ArbiterMixin","copyProperties","mixin"],function(a,b,c,d,e,f,g,h,i){var j=i(g);for(var k in j)if(j.hasOwnProperty(k))m[k]=j[k];var l=j===null?null:j.prototype;m.prototype=Object.create(l);m.prototype.constructor=m;m.__superConstructor__=j;function m(n,o){"use strict";o=o||{};this._root=n;this._radioButtons=o.radioButtons||[];this._selected=o.selected;this.initButtonListeners();}m.prototype.initButtonListeners=function(){"use strict";var n=this._radioButtons.length;while(n--){var o=this._radioButtons[n];o.subscribe('select',this.selectButton.bind(this,o));}};m.prototype.getSelected=function(){"use strict";return this._selected;};m.prototype.getSelectedValue=function(){"use strict";return this._selected?this._selected.getValue():null;};m.prototype.selectButton=function(n){"use strict";if(this._selected!==n){this.setSelected(n);this.inform('change',{selected:n});}return this;};m.prototype.setSelected=function(n){"use strict";if(this._selected!==n){if(this._selected)this._selected.setSelected(false);n.setSelected(true);this._selected=n;}return this;};m.prototype.setSelectedValue=function(n){"use strict";var o=this._radioButtons.length;while(o--){var p=this._radioButtons[o];if(p.getValue()===n)return this.setSelected(p);}return this;};e.exports=m;},null);