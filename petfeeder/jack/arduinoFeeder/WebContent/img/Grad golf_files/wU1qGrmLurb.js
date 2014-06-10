/*!CK:1101302652!*//*1401204435,178175299*/

if (self.CavalryLogger) { CavalryLogger.start_js(["TNbwO"]); }

__d("EventProfileChooserUtils",["CSS"],function(a,b,c,d,e,f,g){var h={listenForSelectionLimit:function(i,j,k,l){i.subscribe('updateCheckableCount',function(m,n){if(n.count<l){g.show(k);g.hide(j);}else{g.show(j);g.hide(k);}});}};e.exports=h;},null);