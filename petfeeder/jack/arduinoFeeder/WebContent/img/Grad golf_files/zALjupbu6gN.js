/*!CK:2562781405!*//*1402007188,178134343*/

if (self.CavalryLogger) { CavalryLogger.start_js(["hr0WA"]); }

__d("AdblockDetector",["CSS"],function(a,b,c,d,e,f,g){var h='data-adblock-hash',i={},j=0;function k(l,m){var n=l.getAttribute(h);if(!n){n=++j;l.setAttribute(h,n);}else if(i[n]){clearTimeout(i[n]);i[n]=null;}i[n]=setTimeout(function(){i[n]=null;if(!l.offsetHeight){var o=l,p=document.getElementsByTagName('body')[0];while(o&&o!==p){if(!o.style||g.hasClass(o,'hidden_elem')||o.style.display==='none'||o.style.height==='0px'||o.style.height===0||o.style.height==='0'||o.childNodes.length===0)return;o=o.parentNode;}if(o===p)m&&m(l);}},3000);}f.assertUnblocked=k;},null);
__d("AdblockDetectorLogging",["AdblockDetector","EagleEye"],function(a,b,c,d,e,f,g,h){function i(j){g.assertUnblocked(j,h.log.bind(h,'ads',{event:'ads_blocked'}));}f.assertUnblocked=i;},null);
__d("EmuController",["AsyncRequest","DataStore","URI","copyProperties","emptyFunction","ge","goURI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(o,p){"use strict";var q=l(o);if(!q)return null;this.impression=p;this.containerId=o;h.set(q,'emuController',this);return this;}n.prototype.event=function(o,p,q,r){"use strict";var s={eid:this.impression,f:0,ui:this.containerId,en:o,a:1};if(p)s.ed=JSON.stringify(p);if(!r)r=k;var t=new g().setURI(this.EVENT_HANDLER_PATH).setData(s).setErrorHandler(r);if(q)t.setHandler(q);t.send();};n.prototype.redirect=function(){"use strict";var o={eid:this.impression,f:0,ui:this.containerId,en:this.CLICK,a:0,sig:Math.floor(Math.random()*65535)+65536},p=new i(this.EVENT_HANDLER_PATH);p.setQueryData(o);m(p);};n.fromContainer=function(o){"use strict";var p=l(o);if(!p)return null;return h.get(p,'emuController');};n.getEventClass=function(o){"use strict";return "emuEvent"+String(o).trim();};j(n.prototype,{EVENT_HANDLER_PATH:'/ajax/emu/end.php',CLICK:1,FAN:"fad_fan"});e.exports=n;},null);
__d("legacy:ad-units-base-js",["EmuController"],function(a,b,c,d){a.EmuController=b('EmuController');},3);
__d("PixelNumConverter",[],function(a,b,c,d,e,f){var g={pixelValue:function(h){return h!==null?Number(h)+'px':'auto';},numValue:function(h){return Number(h.replace("px",""));}};e.exports=g;},null);
__d("DesktopHscrollUnit",["Arbiter","CSS","DOM","DOMQuery","Locale","PixelNumConverter","Style","csx","cx","getStyleProperty","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r="_2_tg",s=300,t="_2_th",u="_2_ti",v="_2_tj",w="_hy9",x="_1kf5",y='DesktopHScrollUnit/itemInserted',z='DesktopHScrollUnit/itemShown';function aa(ba,ca,da,ea,fa,ga,ha,ia){"use strict";this.$DesktopHscrollUnit0=ba;this.$DesktopHscrollUnit1=ca;this.$DesktopHscrollUnit2=da;this.$DesktopHscrollUnit3=ea;this.$DesktopHscrollUnit4=ga;this.$DesktopHscrollUnit5=0;this.$DesktopHscrollUnit6=1+ga.length;this.$DesktopHscrollUnit7=[fa];this.$DesktopHscrollUnit8=ha;this.$DesktopHscrollUnit9=new g();this.$DesktopHscrollUnita=0;this.$DesktopHscrollUnitb=j.find(ba,"^div._5jmm");this.$DesktopHscrollUnitc=this.$DesktopHscrollUnitb.getAttribute('data-ft');this.$DesktopHscrollUnit2.initPager(this,this.$DesktopHscrollUnit3);ia.forEach(function(ja){ja.init(this);},this);h.addClass(fa.ad,t);if(fa.subheader)this.$DesktopHscrollUnitd(fa.subheader);this.$DesktopHscrollUnite(this.$DesktopHscrollUnit5);h.addClass(this.$DesktopHscrollUnitb,"_sf6");h.conditionClass(this.$DesktopHscrollUnitb,"_2_tl",this.$DesktopHscrollUnit8);this.$DesktopHscrollUnitf();}aa.prototype.getArbiter=function(){"use strict";return this.$DesktopHscrollUnit9;};aa.prototype.getAdContainer=function(){"use strict";return this.$DesktopHscrollUnit0;};aa.prototype.getPager=function(){"use strict";return this.$DesktopHscrollUnit2;};aa.prototype.getSelectedItem=function(){"use strict";return this.$DesktopHscrollUnit7[this.$DesktopHscrollUnit5];};aa.prototype.getSelectedIndex=function(){"use strict";return this.$DesktopHscrollUnit5;};aa.prototype.getNumItems=function(){"use strict";return this.$DesktopHscrollUnit6;};aa.prototype.getID=function(){"use strict";return this.$DesktopHscrollUnitb.id;};aa.prototype.scrollNext=function(){"use strict";if(this.$DesktopHscrollUnit5+1<this.$DesktopHscrollUnit6)this.$DesktopHscrollUnitg(this.$DesktopHscrollUnit5+1);};aa.prototype.scrollPrevious=function(){"use strict";if(this.$DesktopHscrollUnit5-1>=0)this.$DesktopHscrollUnitg(this.$DesktopHscrollUnit5-1);};aa.prototype.addOffscreenItems=function(ba){"use strict";this.$DesktopHscrollUnit4.push.apply(this.$DesktopHscrollUnit4,ba);this.$DesktopHscrollUnit6+=ba.length;this.$DesktopHscrollUnit9.inform('onAdditionalItemsAdded',{});};aa.prototype.$DesktopHscrollUnite=function(ba){"use strict";var ca=this.$DesktopHscrollUnit7[ba];if(this.$DesktopHscrollUnit8&&ca.subheader){i.remove(ca.subheader);i.appendContent(this.$DesktopHscrollUnit1,ca.subheader);this.$DesktopHscrollUnit1.offsetHeight;}this.$DesktopHscrollUnit7.forEach(function(da,ea){var fa=ea==ba;h.conditionClass(da.ad,v,fa);h.conditionClass(da.ad,w,!fa);if(da.subheader)h.conditionClass(da.subheader,v,fa);});this.$DesktopHscrollUnit9.inform('onShow',{item:ca,index:ba},g.BEHAVIOR_EVENT);g.inform(z);};aa.prototype.$DesktopHscrollUnitg=function(ba){"use strict";this.$DesktopHscrollUnit9.inform('onBeforeTransition',{item:this.$DesktopHscrollUnit7[this.$DesktopHscrollUnit5]},g.BEHAVIOR_EVENT);while(this.$DesktopHscrollUnit4.length>0&&ba>=this.$DesktopHscrollUnit7.length)this.$DesktopHscrollUnith(this.$DesktopHscrollUnit4.shift());this.$DesktopHscrollUnite(ba);if(this.$DesktopHscrollUnit8){this.$DesktopHscrollUnita++;h.addClass(this.$DesktopHscrollUnit0,r);setTimeout(function(){if(--this.$DesktopHscrollUnita===0)h.removeClass(this.$DesktopHscrollUnit0,r);}.bind(this),s);this.$DesktopHscrollUnit9.inform('onAnimate',{item:this.$DesktopHscrollUnit7[ba]},g.BEHAVIOR_EVENT);var ca,da;q(function(){ca=l.numValue(p(this.$DesktopHscrollUnit0,'padding-bottom'));da=this.$DesktopHscrollUnit0.offsetHeight;}.bind(this),function(){m.set(this.$DesktopHscrollUnit0,'min-height',h.hasClass(this.$DesktopHscrollUnit7[ba].ad,x)?'0px':l.pixelValue(da-ca));m.set(this.$DesktopHscrollUnit7[0].ad,k.isRTL()?'margin-right':'margin-left',(ba*-100)+'%');}.bind(this));}this.$DesktopHscrollUnit5=ba;this.$DesktopHscrollUnitf();};aa.prototype.$DesktopHscrollUnith=function(ba){"use strict";h.addClass(ba.ad,t);i.appendContent(this.$DesktopHscrollUnit0,ba.ad);g.inform(y);if(ba.subheader){this.$DesktopHscrollUnitd(ba.subheader);i.appendContent(this.$DesktopHscrollUnit1,ba.subheader);}this.$DesktopHscrollUnit7.push(ba);};aa.prototype.$DesktopHscrollUnitf=function(){"use strict";var ba=JSON.parse(this.$DesktopHscrollUnit7[this.$DesktopHscrollUnit5].ad.getAttribute('data-ft')),ca=JSON.parse(this.$DesktopHscrollUnitc);for(var da in ba)ca[da]=ba[da];this.$DesktopHscrollUnitb.setAttribute('data-ft',JSON.stringify(ca));g.inform('FeedAdsClickLogger/refreshTrackingData',{});};aa.prototype.$DesktopHscrollUnitd=function(ba){"use strict";h.addClass(ba,u);if(this.$DesktopHscrollUnit8){var ca=i.create('div');h.addClass(ca,"_2_tm");i.appendContent(ba,ca);}};aa.HSCROLL_ITEM_SHOWN_EVENT=z;aa.HSCROLL_ITEM_INSERTED_EVENT=y;e.exports=aa;},null);
__d("Visibility",["mixInEventEmitter"],function(a,b,c,d,e,f,g){var h,i;if(typeof document.hidden!=='undefined'){h='hidden';i='visibilitychange';}else if(typeof document.mozHidden!=='undefined'){h='mozHidden';i='mozvisibilitychange';}else if(typeof document.msHidden!=='undefined'){h='msHidden';i='msvisibilitychange';}else if(typeof document.webkitHidden!=='undefined'){h='webkitHidden';i='webkitvisibilitychange';}function j(){return h?document[h]:false;}var k={HIDDEN:'hidden',VISIBLE:'visible',isHidden:j};g(k,{visible:true,hidden:true});if(document.addEventListener&&i)document.addEventListener(i,function l(){k.emit(j()?k.HIDDEN:k.VISIBLE);});e.exports=k;},null);
__d("ViewableImpressionHeatmapLogger",["Banzai"],function(a,b,c,d,e,f,g){h.logFromViewableImpressionTracker=function(i,j){"use strict";var k=new h(j);k.subscribeToTrackerEvents(i);};function h(i){"use strict";this.loggingDurationMS=i;this.trackingEntries={};this.previouslyTrackedIDs={};}h.prototype.subscribeToTrackerEvents=function(i){"use strict";this.visibleSubscription=i.addListener('visible',this.onElementVisible,this);this.hiddenSubscription=i.addListener('hidden',this.onElementHidden,this);};h.prototype.onElementVisible=function(i){"use strict";var j=this.getCurrentTimestamp(),k=this.trackingEntries[i.id];if(!k&&!this.previouslyTrackedIDs[i.id]){k=this.createTrackingEntry(i);this.beginTracking(i.id,k);j=k.startedTrackingTS;}k.viewportProgressEvents.push({timestamp:j,percentInViewport:i.percentInViewport.toFixed(2)});};h.prototype.onElementHidden=function(i){"use strict";var j=this.getCurrentTimestamp(),k=this.trackingEntries[i.id];if(!k)return;k.viewportProgressEvents.push({timestamp:j,percentInViewport:0});};h.prototype.onTrackingCompleted=function(i){"use strict";var j=this.trackingEntries[i];if(this.$ViewableImpressionHeatmapLogger0())this.$ViewableImpressionHeatmapLogger1(i,j);this.logToServer(j);this.visibleSubscription.remove();this.hiddenSubscription.remove();delete this.trackingEntries[i];};h.prototype.logToServer=function(i){"use strict";g.post('xtrackable:heatmap',i);};h.prototype.beginTracking=function(i,j){"use strict";this.trackingEntries[i]=j;this.previouslyTrackedIDs[i]=true;setTimeout(function(){this.onTrackingCompleted(i);}.bind(this),this.loggingDurationMS);};h.prototype.createTrackingEntry=function(i){"use strict";return {token:i.token,startedTrackingTS:this.getCurrentTimestamp(),viewportProgressEvents:[]};};h.prototype.getCurrentTimestamp=function(){"use strict";return (Date.now()/1000).toFixed(2);};h.prototype.$ViewableImpressionHeatmapLogger0=function(){"use strict";return 0;};h.prototype.$ViewableImpressionHeatmapLogger1=function(i,j){"use strict";var k='Completed tracking for id '+i+' token='+j.token+' startedTrackingTS='+j.startedTrackingTS+'\n';j.viewportProgressEvents.forEach(function(l){k+='% in view: '+l.percentInViewport+' timestamp='+l.timestamp+'\n';});};e.exports=h;},null);
__d("ViewableImpressionTracker",["Banzai","copyProperties","DOM","getElementPosition","getViewportDimensions","mixInEventEmitter","Style","URI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){function o(p,q,r){"use strict";this.id=p;this.element=q;this.config=r;this.iframe=null;this.viewableTimeout=null;this.clearSubsequentTimeout=null;this.waitForSubsequent=false;this.waitForLogged=false;this.isNonViewableLogged=false;this.isVisible=false;}o.prototype.getID=function(){"use strict";return this.id;};o.prototype.getPercentInViewport=function(){"use strict";var p=k(),q=j(this.element);if(q.x<p.width&&q.x+q.width>0&&q.y<p.height&&q.y+q.height>0&&m.get(this.element,'visibility')!=='hidden'){var r=Math.max(q.x,0),s=Math.min(q.x+q.width,p.width),t=Math.max(q.y,0),u=Math.min(q.y+q.height,p.height);if((q.height*q.width)===0)return 100;var v=100*(s-r)*(u-t)/(q.height*q.width);return v;}return 0;};o.prototype.onVisible=function(){"use strict";this.isVisible=true;var p=this.getPercentInViewport(),q=p>this.config.pixel_in_percentage;this.emit('visible',{id:this.getID(),token:this.getToken(),percentInViewport:p});if(!q){this.$ViewableImpressionTracker0();return;}if(this.isLogged()){this.$ViewableImpressionTracker1();}else this.$ViewableImpressionTracker2();if(!this.waitForLogged&&!this.isLogged()){this.waitForLogged=true;this.viewableTimeout=setTimeout(function(){this.waitForLogged=false;var r=this.getPercentInViewport(),s=r>this.config.pixel_in_percentage;if(!s){this.$ViewableImpressionTracker3();return;}this.logImpression(1,{});this.$ViewableImpressionTracker1();}.bind(this),this.config.duration_in_ms);}};o.prototype.onHidden=function(){"use strict";this.emit('hidden',{id:this.getID(),token:this.getToken()});if(this.config.log_initial_nonviewable&&!this.isLogged()&&!this.isNonViewableLogged){this.logNonViewableImpression();}else if(!this.config.log_initial_nonviewable&&!this.isLogged()&&this.isVisible)this.logNonViewableImpression();this.isVisible=false;if(this.waitForLogged){this.waitForLogged=false;clearTimeout(this.viewableTimeout);}if(this.isLogged()&&!this.waitForSubsequent&&this.config.subsequent_gap_in_ms>=0){this.waitForSubsequent=true;this.clearSubsequentTimeout=setTimeout(function(){this.waitForSubsequent=false;this.reset();if(this.isVisible)this.onVisible();}.bind(this),this.config.subsequent_gap_in_ms);}this.$ViewableImpressionTracker3();};o.prototype.onRemoved=function(){"use strict";this.isVisible=false;};o.prototype.getToken=function(){"use strict";return this.element.getAttribute('data-xt');};o.prototype.logImpression=function(p,q){"use strict";if(this.iframe)return;var r=this.getToken(),s=h({xt:r,isv:p,cts:Math.floor(Date.now()/1000)},q);this.iframe=i.create('iframe',{src:new n('/xti.php').addQueryData(s),width:0,height:0,frameborder:0,scrolling:'no',className:'fbEmuTracking'});this.iframe.setAttribute('aria-hidden','true');i.appendContent(this.element,this.iframe);};o.prototype.logNonViewableImpression=function(){"use strict";var p=this.getToken();g.post('xtrackable:nonviewable',{xt:p});this.isNonViewableLogged=true;};o.prototype.isLogged=function(){"use strict";return this.iframe!==null;};o.prototype.reset=function(){"use strict";if(this.iframe){i.remove(this.iframe);this.iframe=null;}this.isNonViewableLogged=false;this.isVisible=false;this.waitForLogged=false;this.waitForSubsequent=false;};o.prototype.$ViewableImpressionTracker4=function(){"use strict";return 0;};o.prototype.$ViewableImpressionTracker0=function(){"use strict";if(this.$ViewableImpressionTracker4())m.set(this.element,'background-color','#abab9a');};o.prototype.$ViewableImpressionTracker2=function(){"use strict";if(this.$ViewableImpressionTracker4())m.set(this.element,'background-color','#e4f70a');};o.prototype.$ViewableImpressionTracker3=function(){"use strict";if(this.$ViewableImpressionTracker4())m.set(this.element,'background-color',null);};o.prototype.$ViewableImpressionTracker1=function(){"use strict";if(this.$ViewableImpressionTracker4())m.set(this.element,'background-color','#047515');};l(o,{visible:true,hidden:true});e.exports=o;},null);
__d("VisibilityTrackingHelper",["Arbiter","DesktopHscrollUnit","getViewportDimensions","Event"],function(a,b,c,d,e,f,g,h,i,j){var k={getEventListeners:function(l){return [j.listen(document,'DOMContentLoaded',l),j.listen(window,'scroll',l),j.listen(window,'resize',l),g.subscribe(h.HSCROLL_ITEM_SHOWN_EVENT,l)];},getViewportInfo:function(){return i();}};e.exports=k;},null);
__d("VisibilityTracking",["Banzai","ErrorUtils","ScriptPath","SubscriptionsHandler","Visibility","VisibilityTrackingHelper","collectDataAttributes","copyProperties","getElementPosition","pageID","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r='visibility_tracking',s='[data-vistracking]',t=500,u=50,v=50,w=50,x=50,y={VISIBLE:'visible',HIDDEN:'hidden'},z={DEFAULT:'default',REMOVED:'removed'},aa={name:y.VISIBLE,cause:z.DEFAULT},ba={name:y.HIDDEN,cause:z.DEFAULT},ca={name:y.HIDDEN,cause:z.REMOVED},da=0;function ea(fa){"use strict";fa=fa||{};if(!fa.bypass_banzai_check&&!g.isEnabled(r))return;this.visibleElementInfo={};this.getDataFromConfig(fa);k.addListener(k.VISIBLE,h.guard(this.fireEvent,'VisibilityTracking:visible',this));if(!this.skipVisibilityHiddenEvents)k.addListener(k.HIDDEN,h.guard(this.clearAllVisibleElements,'VisibilityTracking:hidden',this));i.subscribe(h.guard(this.updateVisibleElements,'VisibilityTracking:scriptPath',this));g.subscribe(g.SHUTDOWN,h.guard(this.onUnload,'VisibilityTracking:banzaiShutdown',this));this.fireEventCallback=q.acrossTransitions(h.guard(this.fireEvent,'VisibilityTracking:fireEventCallback',this),this.timeout,this);this.listeners=new j();l.getEventListeners(this.fireEventCallback).forEach(function(ga){this.listeners.addSubscriptions(ga);},this);if(this.extraInit)h.applyWithGuard(this.extraInit.bind(this));}ea.prototype.getDataFromConfig=function(fa){"use strict";this.config=fa;this.root=fa.root||document.documentElement;this.selector=fa.selector||s;this.timeout=(typeof fa.timeout!=='undefined')?fa.timeout:t;this.minOffsetVisibleFromBottom=(typeof fa.minOffsetVisibleFromBottom!=='undefined')?fa.minOffsetVisibleFromBottom:u;this.minOffsetVisibleFromTop=(typeof fa.minOffsetVisibleFromTop!=='undefined')?fa.minOffsetVisibleFromTop:v;this.minOffsetVisibleFromLeft=(typeof fa.minOffsetVisibleFromLeft!=='undefined')?fa.minOffsetVisibleFromLeft:w;this.minOffsetVisibleFromRight=(typeof fa.minOffsetVisibleFromRight!=='undefined')?fa.minOffsetVisibleFromRight:x;this.handleAllHiddenEvents=(typeof fa.handleAllHiddenEvents!=='undefined')?fa.handleAllHiddenEvents:false;this.handleAllVisibleEvents=(typeof fa.handleAllVisibleEvents!=='undefined')?fa.handleAllVisibleEvents:false;this.skipVisibilityHiddenEvents=(typeof fa.skipVisibilityHiddenEvents!=='undefined')?fa.skipVisibilityHiddenEvents:false;this.cacheTrackedElements=(typeof fa.cacheTrackedElements!=='undefined')?fa.cacheTrackedElements:false;};ea.prototype.getAllTrackedElements=function(){"use strict";if(!this.allTrackedElements){this.allTrackedElements={};if(this.root.querySelectorAll){var fa=this.root.querySelectorAll(this.selector);for(var ga=0;ga<fa.length;ga++){var ha=this.getElementID(fa[ga]);this.allTrackedElements[ha]=fa[ga];}}}return this.allTrackedElements;};ea.prototype.refreshAllTrackedElements=function(){"use strict";delete this.allTrackedElements;return this.getAllTrackedElements();};ea.prototype.getDataToLog=function(fa){"use strict";var ga=n(m(fa,['gt']).gt,{client_time:Date.now()/1000,time_spent_id:p,script_path:i.getScriptPath()});return ga;};ea.prototype.getElementID=function(fa){"use strict";var ga=fa.$VisibilityTracking0;if(ga)return ga;fa.$VisibilityTracking0=++da;return da;};ea.prototype.sendDataToLog=function(fa){"use strict";g.post(r,fa);};ea.prototype.fireEvent=function(){"use strict";var fa=this.cacheTrackedElements?this.allTrackedElements:this.refreshAllTrackedElements();for(var ga in fa){var ha=fa[ga],ia=l.getViewportInfo(),ja=this.isVisible(ha,ia);if(!ja&&(ga in this.visibleElementInfo||this.handleAllHiddenEvents)){this.handleEvent(ha,ba);}else if(ja&&(!(ga in this.visibleElementInfo)||this.handleAllVisibleEvents))this.handleEvent(ha,aa);}this.clearUntrackedVisibleElements();};ea.prototype.isVisible=function(fa,ga){"use strict";var ha=o(fa);return (ha.x||ha.y||ha.width||ha.height)&&(ha.y+ha.height>=this.minOffsetVisibleFromTop)&&(ha.y<=ga.height-this.minOffsetVisibleFromBottom)&&(ha.x+ha.width>=this.minOffsetVisibleFromLeft)&&(ha.x<=ga.width-this.minOffsetVisibleFromRight);};ea.prototype.handleEvent=function(fa,event){"use strict";var ga=this.getElementID(fa),ha=this.getDataToLog(fa),ia;if(event.name===y.VISIBLE){var ja=Math.floor(Date.now()/1000);ia=p.concat(":",ja.toString(),":",this.getElementID(fa).toString());this.visibleElementInfo[ga]={visibility_id:ia,elem:fa};}else if(event.name===y.HIDDEN)if(ga in this.visibleElementInfo){ia=this.visibleElementInfo[ga].visibility_id;delete this.visibleElementInfo[ga];}this.sendDataToLog(n(ha,{event:event.name,visibility_id:ia}));};ea.prototype.clearUntrackedVisibleElements=function(){"use strict";var fa=this.getAllTrackedElements();for(var ga in this.visibleElementInfo)if(!(ga in fa)){var ha=this.visibleElementInfo[ga];if(ha.elem)this.handleEvent(ha.elem,ca);}};ea.prototype.clearAllVisibleElements=function(){"use strict";var fa=this.getAllTrackedElements();for(var ga in fa)if(ga in this.visibleElementInfo)this.handleEvent(fa[ga],ba);this.clearUntrackedVisibleElements();};ea.prototype.updateVisibleElements=function(){"use strict";this.clearAllVisibleElements();this.fireEvent();};ea.prototype.onUnload=function(){"use strict";this.clearAllVisibleElements();if(this.listeners){this.listeners.release();this.listeners=null;}if(this.extraCleanup)h.applyWithGuard(this.extraCleanup.bind(this));};ea.init=function(fa){"use strict";new ea(fa);};ea.EVENT=y;ea.CAUSE=z;e.exports=ea;},null);
__d("ViewableImpressionEventHandler",["ViewableImpressionHeatmapLogger","ViewableImpressionTracker","VisibilityTracking"],function(a,b,c,d,e,f,g,h,i){var j=1;for(var k in i)if(i.hasOwnProperty(k))m[k]=i[k];var l=i===null?null:i.prototype;m.prototype=Object.create(l);m.prototype.constructor=m;m.__superConstructor__=i;function m(){"use strict";if(i!==null)i.apply(this,arguments);}m.prototype.extraInit=function(){"use strict";this.impressionTrackers={};};m.prototype.getDataFromConfig=function(n){"use strict";l.getDataFromConfig.call(this,n);this.doHeatmapLogging=n.doHeatmapLogging;this.heatmapLoggingDurationMS=n.heatmapLoggingDurationMS;};m.prototype.getImpressionTracking=function(n){"use strict";var o=this.getElementID(n),p=this.getConfigFromElement(n),q=this.impressionTrackers[o];if(!q){q=new h(o,n,p);this.impressionTrackers[o]=q;if(this.doHeatmapLogging)g.logFromViewableImpressionTracker(q,this.heatmapLoggingDurationMS);}return q;};m.prototype.refreshAndFireEvent=function(){"use strict";this.refreshAllTrackedElements();this.fireEventCallback();};m.prototype.handleEvent=function(n,event){"use strict";var o=this.getImpressionTracking(n);if(!o)return;if(event.name===i.EVENT.VISIBLE){o.onVisible();if(!this.visibleElementInfo[o.getID()])this.visibleElementInfo[o.getID()]={elem:n};}else if(event.name===i.EVENT.HIDDEN)if(event.cause===i.CAUSE.DEFAULT){o.onHidden();delete this.visibleElementInfo[o.getID()];}else if(event.cause===i.CAUSE.REMOVED){o.onRemoved();delete this.visibleElementInfo[o.getID()];delete this.impressionTrackers[o.getID()];}};m.prototype.getConfigFromElement=function(n){"use strict";return JSON.parse(n.getAttribute('data-xt-vimp'));};m.prototype.getElementID=function(n){"use strict";if(!n.getAttribute('id'))n.setAttribute('id','xt_uniq_'+j++);return n.getAttribute('id');};e.exports=m;},null);
__d("legacy:async-signal",["AsyncSignal"],function(a,b,c,d){a.AsyncSignal=b('AsyncSignal');},3);
__d("LitestandStreamUnloader",["Event","Arbiter","DOM","DOMQuery","LitestandMessages","LitestandStoryInsertionStatus","LitestandStream","Run","$","csx","getElementPosition","queryThenMutateDOM","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t=false,u=false,v,w,x,y,z={},aa=[];function ba(){n.onLeave(ca);aa=[h.subscribe(k.STORIES_INSERTED,ea)];u=true;}function ca(){aa.forEach(h.unsubscribe);aa=[];u=false;}function da(){var ga=false,ha=[],ia=[],ja=[];clearTimeout(w);w=setTimeout(function(){if(!l.canInsert())return;r(function(){var ka=Math.abs(Math.min(q(v).y,0));if(ka===0){ga=true;ha=i.scry(x,m.getStoriesSelector());if(t){ia=i.scry(x,".unread_session");ja=i.scry(x,".unseenStoriesHeader");}}},function(){if(ha.length>z.oldStoriesLimit){ha.slice(z.oldStoriesLimit).forEach(i.remove);t&&ja.forEach(i.remove);t&&ia.forEach(i.remove);h.inform(k.STORIES_REMOVED);}if(ga){y&&y.remove();y=null;}},'LitestandStreamUnloader/removeOldStories');},z.oldStoriesDelay);}function ea(){da();if(!y&&m.getVisibleStoryCount(x)>z.oldStoriesLimit)y=g.listen(window,'scroll',s(da));}var fa={register:function(ga,ha){u||ba();z=m.getStreamConfig(ha);x=o(ga);v=j.scry(document.body,"._li")[0];},setIfUnloadUnreadSession:function(ga){t=ga;}};e.exports=fa;},null);
__d("ViewableImpressionTracking",["Arbiter","DesktopHscrollUnit","ErrorUtils","LitestandMessages","Run","ViewableImpressionEventHandler","ViewableImpressionConfig"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n={init:function(){if(typeof l.instance==='undefined'){l.instance=new l(m);l.instance.listeners.addSubscriptions(g.subscribe([j.STORIES_INSERTED,j.STORIES_REMOVED,'AdsRefreshHandler/AdsLoaded','PhotoSnowliftAds/displayUnits','WebMessengerAdsControl/adjustAds',h.HSCROLL_ITEM_INSERTED_EVENT],i.guard(function(){l.instance.refreshAndFireEvent();},'ViewableImpressionTracking')));}k.onLoad(function(){l.instance.refreshAndFireEvent();});}};e.exports=n;},null);
__d("EgoUnitSlideInsert",["Animation","CSS","DataStore","DOM","Ease","Event","Parent","TidyArbiterMixin","cx","copyProperties","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r='sliding',s="EgoSlider/End",t=p({isSliding:function(u){return i.get(u,r);},runAfterSlide:function(u,v){var w=q(t.subscribe(s,function(x,y){if(y===u){w&&w.unsubscribe();v();}}));},registerSlide:function(u,v){l.listen(u,'click',function(w){var x=m.byClass(w.getTarget(),"_5cl_");if(!x)return;var y=m.byClass(u,'ego_unit'),z=0,aa=m.byClass(y,'ego_unit_container'),ba=j.scry(aa,'.ego_unit')[0];if(ba===y)if(y.nextSibling){y.nextSibling.style.paddingTop='0px';y.nextSibling.style.borderTop='0px';}h.addClass(y,"_5cl-");i.set(y,r,true);new g(y).to('height',0).to('padding-top',z).to('padding-bottom',0).to('margin',0).from('opacity',1).to('opacity',0).ease(k.circOut).duration(300).checkpoint(1,function(){j.appendContent(aa,y);j.prependContent(y,v);i.remove(y,r);}).to('height',12).to('opacity',1).to('margin-bottom',10).duration(0).checkpoint(2,function(){t.inform(s,y);}).go();});}},n);e.exports=t;},null);
__d("NetEgo",["Animation","Arbiter","cx","CSS","DOM","EgoUnitSlideInsert","PageLikeButton","Parent","URI","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q={setup:function(r){h.subscribe([m.LIKED,'FriendRequest/sending'],function(s,t){if((r==t.profile_id&&t.origin=='hovercard')||r==t.uid){var u=p(document.body,'.ego_unit_container');if(u){var v=k.scry(u,'.ego_unit'),w=v.length;for(var x=0;x<w;x++){var y=v[x].getAttribute('data-ego-fbid');if(y==r){var z=k.scry(v[x],'.ego_action a')[0];if(z)z.click();break;}}}}});},updateXids:function(r,s){if(r.length==0&&s.length==0)return;var t=function(da){return function(ea){var fa=ea.getAttribute(da);if(!fa)return false;var ga=new o(fa).getQueryData();return !!ga.xids;};},u=k.scry(document.body,'.ego_unit a');u=u.filter(t('ajaxify'));if(u.length==0)return;var v=new o(u[0].getAttribute('ajaxify')),w=v.getQueryData();if(!w.xids)return;try{var y=JSON.parse(w.xids);}catch(x){return;}for(var z=0;z<r.length;++z)delete y[r[z]];for(z=0;z<s.length;++z)y[s[z]]=1;var aa=JSON.stringify(y),ba=function(da,ea){v=new o(da.getAttribute(ea));w=v.getQueryData();w.xids=aa;v.setQueryData(w);da.setAttribute(ea,v.toString());};for(z=0;z<u.length;++z)ba(u[z],'ajaxify');var ca=k.scry(document.body,'.ego_unit form');ca=ca.filter(t('action'));for(z=0;z<ca.length;++z)ba(ca[z],'action');},replaceUnit:function(r,s,t,u){q.replaceUnitCheckParent(r,s,t,u,false);},replaceUnitCheckParent:function(r,s,t,u,v){var w=n.byClass(r,'ego_unit_container');if(w&&l.isSliding(r)){var x=k.appendContent(w,s);x.forEach(j.hide);l.runAfterSlide(r,q._replaceUnitElement.bind(null,r,x,v));}else q._replaceUnit(r,s,t,u,v);},_replaceUnit:function(r,s,t,u,v){var w=k.insertAfter(r,s);w.forEach(j.hide);if(u!==undefined&&u!==null){setTimeout(function(){q._replaceUnitFadeout(r,w,t,v);},u);}else q._replaceUnitFadeout(r,w,t,v);},_replaceUnitFadeout:function(r,s,t,u){if(t){new g(r).from('opacity',1).to('opacity',0).duration(t).checkpoint(1,function(){q._replaceUnitElement(r,s,u);}).go();}else q._replaceUnitElement(r,s,u);},_replaceUnitElement:function(r,s,t){var u=null;if(t){var v=j.hasClass(r,'ego_unit')?r.parentNode:null;if(v){var w=n.byClass(r,'ego_feed_column');if(w)u=n.byClass(w,"_4-u2");}}k.remove(r);s.forEach(j.show);h.inform('netego_replacedUnit');q.clearHeader();if(u&&!v.childNodes.length)j.hide(u);},clearHeader:function(){var r=k.scry(document.body,'.ego_column'),s=[];for(var t=0;t<r.length;++t)s=s.concat(k.scry(r[t],'.uiHeader'));for(t=0;t<s.length;++t){var u=s[t].nextSibling;if(!u||u.childNodes.length===0){k.remove(s[t]);}else if(u.childNodes.length===1){var v=u.childNodes[0];if(j.hasClass(v,'ego_appended_units')&&v.childNodes.length===0)k.remove(s[t]);}}}};e.exports=q;},null);
__d("PubcontentPageTimelineChainingController",["Arbiter","AsyncRequest","DOM","LitestandEllipsis","PageLikeButton","PageTransitions","PubcontentPageTimelineChainingConfig","Style","XPubcontentChainedSuggestionsControllerURIBuilder"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){"use strict";var p=100,q='fbSuggestionsPlaceHolder';r.initWithContext=function(s){if(!this.$PubcontentPageTimelineChainingController0)this.$PubcontentPageTimelineChainingController0=new r();if(m.trigger_on_load){this.onExplicitChain(s,p);}else l.registerCompletionCallback(this.$PubcontentPageTimelineChainingController0.onExplicitChain.bind(this.$PubcontentPageTimelineChainingController0,s,0));};function r(){this.$PubcontentPageTimelineChainingController1={};this.$PubcontentPageTimelineChainingController2=m;g.subscribe(k.LIKED,this.onLike.bind(this));}r.prototype.onLike=function(s,t){this.$PubcontentPageTimelineChainingController3(t.profile_id);this.$PubcontentPageTimelineChainingController4(t.target,{origin:t.origin,profile_id:t.profile_id});};r.prototype.onExplicitChain=function(s,t){setTimeout(this.$PubcontentPageTimelineChainingController4.bind(this,undefined,s),t);};r.prototype.$PubcontentPageTimelineChainingController5=function(){var s=i.scry(document,'#'+q);return s.length?s[0]:null;};r.prototype.$PubcontentPageTimelineChainingController6=function(s){return (s in this.$PubcontentPageTimelineChainingController1);};r.prototype.$PubcontentPageTimelineChainingController7=function(s){if(!s)return false;var t=this.$PubcontentPageTimelineChainingController2.origins;if(!t||!t[s.origin])return false;return true;};r.prototype.$PubcontentPageTimelineChainingController3=function(s){this.$PubcontentPageTimelineChainingController1[s]=true;};r.prototype.$PubcontentPageTimelineChainingController8=function(s){delete this.$PubcontentPageTimelineChainingController1[s];};r.prototype.$PubcontentPageTimelineChainingController4=function(s,t){var u=t.profile_id;if(!this.$PubcontentPageTimelineChainingController6(u))return false;if(!this.$PubcontentPageTimelineChainingController7(t))return false;var v=this.$PubcontentPageTimelineChainingController5();if(!v)return;var w=(new o()).setInt('pageid',u).getURI();new h().setErrorHandler(this.$PubcontentPageTimelineChainingController8.bind(this,u)).setRelativeTo(v).setURI(w).send();};r.truncateName=function(s){var t=i.scry(s,'.nameText')[0];if(t){var u=n.getFloat(s,'lineHeight')*2;j.add(t,u,s);}};e.exports=r;},null);
__d("BookmarksPopoverMenu",["Arbiter","DOM","CSS","Parent"],function(a,b,c,d,e,f,g,h,i,j){function k(l){this.popoverMenu=l;}k.init=function(l,m){var n=l.popoverMenu,o=function(){n.getMenu().subscribe('itemclick',function(p,q){g.inform('sideNavPopoverMenuItemClicked',{bookmarkNode:m,menuItemNode:q.item.getRoot(),menuNode:n.getMenu().getRoot()});});};n.getPopover().subscribeOnce('show',o);n.getPopover().subscribe('show',function(){g.inform('sideNavPopoverMenuCheckFavorite',{bookmarkNode:m,menuNode:n.getMenu().getRoot()});var p=j.byClass(m,'homeSideNav'),q=h.find(n.getMenu().getRoot(),'.rearrange');if(p&&p.getAttribute('id')!='pinnedNav'){i.addClass(q,'hidden_elem');}else i.removeClass(q,'hidden_elem');});};e.exports=k;},null);