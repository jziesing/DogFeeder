/*!CK:1420472211!*//*1401158697,178167347*/

if (self.CavalryLogger) { CavalryLogger.start_js(["CbB0E"]); }

__d("EventsWeatherInfo",["Event","AsyncRequest","DOM","CSS"],function(a,b,c,d,e,f,g,h,i,j){var k={init:function(l,m){if(l!=null){g.listen(l,'mouseleave',this.updateWeatherData.bind(this));g.listen(l,'focusout',this.updateWeatherData.bind(this));}if(m!=null){g.listen(m,'mouseleave',this.updateWeatherData.bind(this));g.listen(m,'focusout',this.updateWeatherData.bind(this));}this.updateWeatherData();},updateWeatherData:function(){var l=document.getElementsByName("location_id")[0].value,m=new Date(document.getElementsByName("when_date")[0].value),n=Date.UTC(m.getFullYear(),m.getMonth(),m.getDate());if(l===""||l==null){j.addClass(document.getElementById('weather_row'),'hidden_elem');return;}new h().setURI('/events/weather').setData({location_id:l,timestamp:n}).send();},replaceWeatherData:function(l){var m=document.getElementById('weather_row');if(m==null)return;if(l){var n=i.scry(m,'.data')[0].firstChild;i.replace(n,l);j.removeClass(m,'hidden_elem');}else j.addClass(m,'hidden_elem');}};e.exports=k;},null);
__d("legacy:EventsAdminsInput",["EventsAdminsInput"],function(a,b,c,d){a.EventsAdminsInput=b('EventsAdminsInput');},3);