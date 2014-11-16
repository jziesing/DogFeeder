/*!CK:453812970!*//*1401708757,178138431*/

if (self.CavalryLogger) { CavalryLogger.start_js(["748pv"]); }

__d("EventsCreateDialog",["AsyncRequest","DOMQuery","Run","fbt"],function(a,b,c,d,e,f,g,h,i,j){var k={showDialog:function(l){new g().setURI(l).send();},initDialog:function(l,m){var n=false;if(l.isShown)n=true;l.subscribe('show',function(){n=true;});l.subscribe(['submit','hide'],function(){n=false;});i.onBeforeUnload(function(){if(n){var o=h.find(m,'input.eventTitle');if(o.value)return ("You haven't finished creating your event yet. Do you want to leave without finishing?");}});}};e.exports=k;},null);