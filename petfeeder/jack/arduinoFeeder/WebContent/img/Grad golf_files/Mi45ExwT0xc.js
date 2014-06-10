/*!CK:2025746917!*//*1401578071,178167327*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ofmtL"]); }

__d("TagExpansionButtonConfig",[],function(a,b,c,d,e,f){e.exports={FRIENDS_OF_TAGGED:"friends_of_tagged",TAGGED_ONLY:"tagged_only"};},null);
__d("PrivacySelectorOptionNew",["CSS","DOM","DOMQuery","JSXDOM","MenuSelectableItem","PrivacyConst","csx","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){for(var p in k)if(k.hasOwnProperty(p))r[p]=k[p];var q=k===null?null:k.prototype;r.prototype=Object.create(q);r.prototype.constructor=r;r.__superConstructor__=k;function r(s){"use strict";k.call(this,s);this.updateAfterTagExpansion(this._data.hasTags);}r.prototype.getTooltip=function(){"use strict";return this._data.tooltip;};r.prototype.getPostParam=function(){"use strict";return this._data.postParam;};r.prototype.getTriggerIcon=function(){"use strict";return this._data.triggerIcon;};r.prototype.isPublic=function(){"use strict";return this.getPostParam()===l.PostParam.EVERYONE;};r.prototype.isBasicOption=function(){"use strict";return true;};r.prototype.isCustomOption=function(){"use strict";return false;};r.prototype.getTagExpansionBehavior=function(){"use strict";return this._data.tagExpansionBehavior;};r.prototype.getBaseValue=function(){"use strict";return this._data.baseValue;};r.prototype.getIndex=function(){"use strict";return this._data.value;};r.prototype.getLoggingEventName=function(){"use strict";switch(this.getPostParam()){case l.PostParam.FRIENDS:return 'click_friends';case l.PostParam.EVERYONE:return 'click_everyone';case l.PostParam.ONLY_ME:return 'click_only_me';case l.PostParam.FRIENDS_MINUS_ACQUAINTANCES:return 'click_friends_except_acquaintances';case l.PostParam.FB_ONLY:return 'click_fb_only';default:return 'click_other';}};r.prototype.updateAfterTagExpansion=function(s){"use strict";var t=this._data.baseLabel;if(s&&this._data.showPlusOnTagExpansion)t=o._("{privacyLabel} (+)",[o.param("privacyLabel",this._data.baseLabel)]);this._setLabel(t);if(s){this._setSubtitle(this._data.optionSubtitleWithTags);}else this._setSubtitle(this._data.optionSubtitle);};r.prototype._setLabel=function(s){"use strict";if(!s)return;var t=i.find(this.getRoot(),"._54nh");t&&h.setContent(t,s);this._data.label=s;};r.prototype._setSubtitle=function(s){"use strict";if(!s)return;var t=i.find(this.getRoot(),"._48u1");t&&h.setContent(t,s);};r.prototype.render=function(){"use strict";var s=q.render.call(this);if(!this._data.isPrimaryOption)return s;var t=i.find(s,"._54nc");t&&g.addClass(t,"_48t_");var u=h.find(s,"._54nh");u&&g.addClass(u,"_48u0");var v=j.div({className:"_48u1"},this._data.optionSubtitle);h.appendContent(t,v);return s;};e.exports=r;},null);
__d("XPrivacySelectorLoggingControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f,g){e.exports=g.create("\/privacy\/selector\/log\/",{event:{type:"Enum",required:true},render_location:{type:"Int",required:true},content_type:{type:"String",required:true}});},null);
__d("PrivacySelectorCustomOption",["Arbiter","AsyncDialog","AsyncRequest","DataStore","PrivacySelectorOptionNew","XPrivacySelectorLoggingControllerURIBuilder","XPrivacyCustomDialogControllerURIBuilder"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){for(var n in k)if(k.hasOwnProperty(n))p[n]=k[n];var o=k===null?null:k.prototype;p.prototype=Object.create(o);p.prototype.constructor=p;p.__superConstructor__=k;function p(q){"use strict";k.call(this,q);}p.prototype.isBasicOption=function(){"use strict";return false;};p.prototype.isCustomOption=function(){"use strict";return true;};p.prototype.getSelector=function(){"use strict";return this._selector;};p.prototype.setPostParam=function(q){"use strict";this._data.postParam=q;};p.prototype.getLoggingEventName=function(){"use strict";return 'click_custom';};p.prototype.openDialog=function(q){"use strict";if(typeof this._selector==='undefined')this._selector=q;j.set(this._data.id,'PrivacySelectorCustomOption',this);var r=new m().setString('option_id',this._data.id).setString('id',this._data.privacyfbid.toString()).setString('post_param',q.getPostParam()).setString('content_type',q.getContentType()).setInt('render_location',q.getRenderLocation()).setIntVector('tags',q.getTags()).setBool('autosave',this._data.autosave).setBool('limit_community',this._data.limitcommunity).setBool('limit_facebook',this._data.limitfacebook).setBool('limit_fof',this._data.limitfof).setBool('limit_tagexpand',this._data.limittagexpand).setBool('is_new_privacy_selector',true).setString('tag_expansion_button',q.getTagExpansionButton()).getURI(),s=new i(r);h.send(s,function(t){var u=function(v){var w=new l().setEnum('event',v).setInt('render_location',document.getElementsByName('render_location')[0].value).setString('content_type',document.getElementsByName('content_type')[0].value).getURI();new i().setURI(w).send();};t.subscribe('hide',function(){g.inform('PrivacySelectorCustomOption/hide',{selector:q});});t.subscribe('success',function(){g.inform('PrivacySelectorCustomOption/success',{selector:q});u('custom_save');});t.subscribe('cancel',function(){g.inform('PrivacySelectorCustomOption/cancel',{selector:q});u('custom_cancel');});});};p.customPrivacySave=function(q,r,s){"use strict";var t=j.get(q,'PrivacySelectorCustomOption');t.getSelector().updateDataForItemIndex(t.getIndex(),r,s);t.getSelector().setValue(t.getIndex());j.remove(q,'PrivacySelectorCustomOption');};e.exports=p;},null);
__d("PrivacySelectableMenu",["AsyncRequest","CSS","DOM","Ease","PrivacySelectorCustomOption","PrivacySelectorOptionNew","SelectableMenu","SelectableMenuUtils","XPrivacySelectorLoggingControllerURIBuilder","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){for(var r in m)if(m.hasOwnProperty(r))t[r]=m[r];var s=m===null?null:m.prototype;t.prototype=Object.create(s);t.prototype.constructor=t;t.__superConstructor__=m;function t(u,v){"use strict";m.call(this,u,v);}t.prototype.getItemForIndex=function(u){"use strict";for(var v=0;v<this._items.length;v++){var w=this._items[v];if(w instanceof l&&w.getIndex()==u)return w;}return null;};t.prototype.selectOption=function(u){"use strict";var v=null,w=this._items.some(function(x){if(x instanceof l&&!x.isCustomOption()&&x.getPostParam()==u){this.setValue(x.getIndex());return true;}if(x instanceof k){v=x;return false;}if(this._isMoreOption(x)){this.expandMenu(x.getRoot());return false;}},this);if(!w&&v){v.setPostParam(u);this.setValue(v.getIndex());}};t.prototype._isMoreOption=function(u){"use strict";return h.hasClass(u.getRoot(),"_2myv");};t.prototype._handleItemClick=function(u,v){"use strict";if(!n.doesItemSupportSelect(u))return s._handleItemClick.call(this,u,v);if(this._isMoreOption(u)){this._logMoreClick();this.expandMenu(u.getRoot());return;}this._logOptionClick(u);var w=this.inform('itemclick',{item:u,event:v});if(w)return;if(!n.isSelected(u)&&!u.isCustomOption()&&u.select()!==false){this._items.forEach(function(x){if(n.isSelected(x)&&x!==u)x.deselect();});this.inform('change',this._getSelection());}this.done();return u.handleClick();};t.prototype._logMoreClick=function(){"use strict";var u=new o().setEnum('event','more_options').setInt('render_location',this._config.renderlocation).setString('content_type',this._config.contenttype).getURI();new g().setURI(u).send();};t.prototype._logOptionClick=function(u){"use strict";var v=new o().setEnum('event',u.getLoggingEventName()).setInt('render_location',this._config.renderlocation).setString('content_type',this._config.contenttype).getURI();new g().setURI(v).send();};t.prototype.expandMenu=function(u){"use strict";if(!u)u=i.scry(this._items[0].getRoot().parentNode,"._2myv")[0];this.forEachItem(function(v){h.removeClass(v.getRoot(),'hidden_elem');});h.addClass(u,'hidden_elem');};t.prototype.collapseMenu=function(){"use strict";this.forEachItem(function(u){var v=h.hasClass(u.getRoot(),"privacySelectorOptions/belowFold");h.conditionClass(u.getRoot(),'hidden_elem',v);});};t.prototype.updateOptionsAfterTagExpansion=function(u){"use strict";this.forEachItem(function(v){if(v instanceof l)v.updateAfterTagExpansion(u);});};t.prototype.onPopoverOpen=function(u){"use strict";if(this._items.indexOf(u)>=15)setTimeout(function(){this._scrollableArea.scrollToBottom(true,{duration:1000,ease:j.sineOut});}.bind(this),250);};e.exports=t;},null);
__d("PopoverButton",["DOM","DOMQuery","csx"],function(a,b,c,d,e,f,g,h,i){var j={setLabel:function(k,l){var m=h.find(k,"._55pe"),n=m.childNodes;for(var o=0;o<n.length;o++)if(h.isTextNode(n[o])){g.replace(n[o],l);return;}g.appendContent(m,l);}};e.exports=j;},null);
__d("PrivacySelectorNewDispatcher",["Dispatcher","copyProperties","merge"],function(a,b,c,d,e,f,g,h,i){var j='selector',k=h(new g(),{handleUpdateFromSelector:function(l){this.dispatch(i({payloadSource:j},l));}});e.exports=k;},null);
__d("PrivacySelectorDataStore",["ArbiterMixin","merge","PrivacySelectorNewDispatcher","KeyedCallbackManager"],function(a,b,c,d,e,f,g,h,i,j){var k=new j(),l=h(g,{get:function(m,n){k.executeOrEnqueue(m,n);}});i.register(function(m){if(m.selector_type){var n={};n[m.selector_type]={post_param:m.post_param,unique_id:m.unique_id};k.addResourcesAndExecute(n);l.inform('change');}});e.exports=l;},null);
__d("XPrivacySelectorUpdateControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f,g){e.exports=g.create("\/privacy\/selector\/update\/",{privacy_fbid:{type:"Int",required:true},post_param:{type:"String",required:true},tags:{type:"IntVector"},render_location:{type:"Int",required:true},is_saved_on_select:{type:"Bool"},should_return_tooltip:{type:"Bool"},ent_id:{type:"Int",required:true},tag_expansion_button:{type:"String"}});},null);
__d("PrivacySelectorBase",["ArbiterMixin","AsyncRequest","Button","CSS","CurrentUser","Input","MenuSelectableItem","PopoverButton","PrivacySelectorNewDispatcher","PrivacySelectorDataStore","PrivacySelectableMenu","TagExpansionButtonConfig","Tooltip","XPrivacySelectorLoggingControllerURIBuilder","XPrivacySelectorUpdateControllerURIBuilder","bind","csx","fbt","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){var z=y(g);for(var aa in z)if(z.hasOwnProperty(aa))ca[aa]=z[aa];var ba=z===null?null:z.prototype;ca.prototype=Object.create(ba);ca.prototype.constructor=ca;ca.__superConstructor__=z;function ca(da,ea,fa,ga,ha){"use strict";this._button=da;this._menu=ea;this._popoverMenu=ga;this._input=fa;this._isSavedOnSelect=ha.is_saved_on_select;this._privacyFBID=ha.privacy_fbid;this._contentType=ha.content_type;this._renderLocation=ha.render_location;this._supportsTagExpansion=ha.supports_tag_expansion;this._shouldDisplayLabel=ha.should_display_label;this._tags=ha.tagged_uids;this._hasTags=!!this._tags;this._entID=ha.ent_id;this._popover=this._popoverMenu.getPopover();this._receivingUpdate=false;this._initTagExpansionButtonState();if(ha.use_async_menu){this._popoverMenu.subscribe('setMenu',function(){this._menu=this._popoverMenu.getMenu();if(!(this._menu instanceof q))return;this._onMenuLoad();this._onPopoverOpen();}.bind(this));}else this._onMenuLoad();if(ha.selector_sync_key){this._selectorSyncKey=ha.selector_sync_key.toString();p.subscribe('change',function(){p.get(this._selectorSyncKey,function(ia){if(ia.unique_id!==this._menu._config.id){this._receivingUpdate=true;this.selectOption(ia.post_param);}}.bind(this));}.bind(this));this._menu.subscribe('change',function(){if(!this._receivingUpdate){var ia=this._getSelectedOption();o.handleUpdateFromSelector({selector_type:this._selectorSyncKey,post_param:ia.getPostParam().toString(),unique_id:this._menu._config.id});}else this._receivingUpdate=false;}.bind(this));}}ca.prototype.getIsPublicSelected=function(){"use strict";return this._selectedOption.isPublic();};ca.prototype.getSelectedBaseValue=function(){"use strict";return this._selectedOption.getBaseValue();};ca.prototype.setValue=function(da){"use strict";this._menu.setValue(da);};ca.prototype.openSelectorExpanded=function(){"use strict";this.openSelector();this._menu.expandMenu();};ca.prototype.openSelector=function(){"use strict";this._popover.showLayer();this.inform('open');};ca.prototype.closeSelector=function(){"use strict";this._popover.hideLayer();};ca.prototype.getPopover=function(){"use strict";return this._popover;};ca.prototype.getTriggerButtonElement=function(){"use strict";return this._button;};ca.prototype.getMenuElement=function(){"use strict";return this._menu.getRoot();};ca.prototype.selectOption=function(da){"use strict";if(!da)return;this.openSelector();this._menu.selectOption(da);this._selectedOption=this._getSelectedOption();this.updateDataForItemIndex(this._selectedOption.getIndex(),this._selectedOption.getPostParam().toString());this.closeSelector();};ca.prototype.setTagExpansionButton=function(da){"use strict";this._tagExpansionButton=da;if(this._hasTags){this._menu.updateOptionsAfterTagExpansion(this._showTagExpansion());this._updateTriggerButtonLabel();this._updateTooltipAfterChange();}};ca.prototype.getTagExpansionButton=function(){"use strict";return this._tagExpansionButton;};ca.prototype._initTagExpansionButtonState=function(){"use strict";this._tagExpansionButton=r.FRIENDS_OF_TAGGED;var da=this._getSelectedOption();if(!da)return;var ea=JSON.parse(da.getPostParam());if(ea.settings&&ea.settings.no_tag_expansion===true){this._tagExpansionButton=r.TAGGED_ONLY;}else this._tagExpansionButton=r.FRIENDS_OF_TAGGED;};ca.prototype._getSelectedOption=function(){"use strict";if(!(this._menu instanceof q))return;var da;this._menu.forEachItem(function(ea){if(ea instanceof m&&ea.isSelected())da=ea;}.bind(this));return da;};ca.prototype._onItemClick=function(da,ea){"use strict";var fa=ea.item;if(fa.isBasicOption()){this.updateDataForItemIndex(fa.getIndex(),fa.getPostParam().toString());}else if(fa.isCustomOption())fa.openDialog(this);this.inform('click',{customSelected:fa.isCustomOption()});};ca.prototype.getContentType=function(){"use strict";return this._contentType;};ca.prototype.getRenderLocation=function(){"use strict";return this._renderLocation;};ca.prototype.getPostParam=function(){"use strict";return this._postParam;};ca.prototype.getTags=function(){"use strict";return this._tags;};ca.prototype.updateDataForItemIndex=function(da,ea,fa){"use strict";if(fa){this._tagExpansionButton=fa;this.inform('CustomTagExpansion',this._tagExpansionButton);}var ga=this._menu.getItemForIndex(da);if(ga.isCustomOption())ga.setPostParam(ea);this._selectedOption=ga;this._postParam=ea;l.setValue(this._input,ea);this._updateTriggerButtonLabel();if(this._supportsTagExpansion){this._updateTooltipAfterChange();}else{if(this._isSavedOnSelect)this._savePrivacy();this._setTooltipValue(this._selectedOption.getTooltip());}this.inform('changed',{post_param:this._postParam,base_value:this.getSelectedBaseValue()});};ca.prototype._savePrivacy=function(){"use strict";this._sendUpdateRequest();};ca.prototype._sendUpdateRequest=function(){"use strict";var da=new u().setInt('privacy_fbid',this._privacyFBID).setString('post_param',this._postParam).setIntVector('tags',this._tags).setInt('render_location',this._renderLocation).setBool('is_saved_on_select',this._isSavedOnSelect).setBool('should_return_tooltip',this._supportsTagExpansion).setInt('ent_id',this._entID).setString('tag_expansion_button',this._tagExpansionButton).getURI();new h().setHandler(v(this,function(ea){var fa=ea&&ea.payload&&ea.payload.tooltip;fa&&this._setTooltipValue(ea.payload.tooltip);})).setURI(da).send();};ca.prototype.informTagsChanged=function(da){"use strict";var ea=this._getTags(da);if(this._hasTags===!ea.length){this._hasTags=!!ea.length;this._menu.updateOptionsAfterTagExpansion(this._showTagExpansion());this._updateTriggerButtonLabel();}if(this._tags.length!==ea.length||this._selectedOption.isCustomOption()){this._tags=ea;this._updateTooltipAfterChange();}};ca.prototype._showTagExpansion=function(){"use strict";return this._hasTags&&(this._tagExpansionButton.valueOf()===r.FRIENDS_OF_TAGGED.valueOf());};ca.prototype._getTags=function(da){"use strict";var ea=[],fa=k.getID();if(da.withTags)for(var ga=0;ga<da.withTags.length;ga++){var ha=da.withTags[ga].info;if(ha.uid!=fa)ea.push(ha.uid);}if(da.mention)for(var ia in da.mention)if(da.mention[ia].type=='user'&&da.mention[ia].uid!=fa)ea.push(da.mention[ia].uid);return ea;};ca.prototype._updateTriggerButtonLabel=function(){"use strict";var da=this._selectedOption.getTriggerIcon();i.setIcon(this._button,da.cloneNode());if(!this._shouldDisplayLabel)return;n.setLabel(this._button,this._selectedOption.getLabel());};ca.prototype._updateTooltipAfterChange=function(){"use strict";var da="Loading...";this._setTooltipValue(da);this._sendUpdateRequest();};ca.prototype._setTooltipValue=function(da){"use strict";da&&s.set(this._button,da);};ca.prototype._onPopoverClose=function(){"use strict";var da=this._getSelectedOption().getRoot(),ea=j.hasClass(da,"privacySelectorOptions/belowFold");if(!ea)this._menu.collapseMenu();this.inform('close');};ca.prototype._onPopoverOpen=function(){"use strict";if(!(this._menu instanceof q))return;this._menu.onPopoverOpen(this._getSelectedOption());var da=new t().setEnum('event','opened').setInt('render_location',this._renderLocation).setString('content_type',this._contentType).getURI();new h().setURI(da).send();};ca.prototype._onMenuLoad=function(){"use strict";this._menu.subscribe('itemclick',this._onItemClick.bind(this));this._popover.subscribe('hide',this._onPopoverClose.bind(this));this._popover.subscribe('show',this._onPopoverOpen.bind(this));this._selectedOption=this._getSelectedOption();this._postParam=this._selectedOption.getPostParam().toString();this._hasTags&&this._updateTriggerButtonLabel();};e.exports=ca;},null);
__d("OnlyMeUI",["AudienceSelectorTags","Arbiter","CSS","DOM","Parent","PrivacySelectorBase","PrivacyConst","SelectorDeprecated","$","tx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){function q(){return [j.create('div',{className:'onlyMeBorder'}),j.create('div',{className:'onlyMeBorder onlyMeBorderBottom'})];}function r(){return j.create('img',{alt:' ',className:'onlyMePrivacyCorner',height:34,src:'/images/profile/timeline/privacy_corner.png',width:34});}function s(z){var aa=j.scry(z,'.photoUnit a.photo');return aa.filter(function(ba){return !j.scry(ba,'.onlyMePrivacyCorner').length;});}function t(z,aa){if(aa instanceof l){if(aa.getTags().length>1)return;}else if(g.hasTags(w(aa)))return;if(i.hasClass(z,'storyContent'))if(!k.byClass(z,'onlyMeWrap')){var ba=j.create('div',{className:'onlyMeWrap'});j.appendContent(k.byClass(z,'uiStreamStory'),ba);j.appendContent(ba,z);z=ba;}else z=k.byClass(z,'onlyMeWrap');i.addClass(z,'storyOnlyMe');if(!(aa instanceof l)&&!i.hasClass(z,'timelineRecentActivityStory'))j.setContent(j.find(aa,'span.uiButtonText'),"Only Me");if(!i.hasClass(z,'storyContent')){var ca=s(z);for(var da=0,ea=ca.length;da<ea;++da)j.appendContent(ca[da],r());}if(!j.scry(z,'div.onlyMeBorder').length){var fa=q();j.prependContent(z,fa[0]);j.appendContent(z,fa[1]);}}function u(z){if(!z)return;var aa=k.byClass(z,'storyContent')||k.byClass(z,'timelineRecentActivityStory')||k.byClass(z,'timelineUnitContainer')||k.byClass(z,'fbTimelineTwoColumn');if(!aa){aa=j.scry(z,'^.permalink_stream .storyContent');aa=aa.length&&aa[0];}else if(i.hasClass(aa,'fbTimelineComposerUnit'))return null;return aa;}function v(z){z=i.hasClass(z,'storyContent')?k.byClass(z,'onlyMeWrap'):z;z&&i.removeClass(z,'storyOnlyMe');}function w(z){var aa=j.scry(z,'*[data-oid]');if(aa.length===0)return '';return aa[0].getAttribute('data-oid');}var x=false,y={listenAdamaTimelineSelector:function(z){var aa=z.getInstance();aa.subscribe('changed',function(event,ba){var ca=aa.getTriggerButtonElement(),da=u(ca);if(!da)return;if(ba.post_param==m.PostParam.ONLY_ME){t(da,aa);}else v(da);});},init:function(){if(x)return;x=true;h.subscribe('AudienceSelector/changed',function(z,aa){if(aa.selector&&i.hasClass(aa.selector,'blacklistOnlyMeUI'))return;var ba=u(aa.selector)||u(aa.clone);if(!ba)return;if(n.getOptionValue(aa.option)==m.BaseValue.SELF){t(ba,aa.selector);}else v(ba);});},setOnlyMe:function(z){if(x)return;y.init();z=j.find(k.byClass(o(z),'uiSelector'),'a.uiSelectorButton');var aa=u(z);aa&&t(aa,z);}};e.exports=y;},null);