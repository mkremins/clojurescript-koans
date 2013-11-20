// Compiled by ClojureScript 0.0-2014
goog.provide('koans.meditations.destructuring');
goog.require('cljs.core');
koans.meditations.destructuring.koans = cljs.core.list("Destructuring is an arbiter: it breaks up arguments",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"a","a",-1640531430,null),new cljs.core.Symbol(null,"b","b",-1640531429,null)], true)], true),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1640417302,null),new cljs.core.Symbol(null,"b","b",-1640531429,null),new cljs.core.Symbol(null,"a","a",-1640531430,null))),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"foo","foo",1014005816),new cljs.core.Keyword(null,"bar","bar",1014001541)], true))),"Whether in function definitions",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1640417302,null),"First comes love, ","then comes marriage, ","then comes Clojure with the baby carriage"),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"a","a",-1640531430,null),new cljs.core.Symbol(null,"b","b",-1640531429,null),new cljs.core.Symbol(null,"c","c",-1640531428,null)], true)], true),new cljs.core.Keyword(null,"__","__",1013907282)),cljs.core.PersistentVector.fromArray(["love","marriage","Clojure"], true))),"Or in let expressions",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"Rich Hickey aka The Clojurer aka Go Time aka Macro Killah",cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"first-name","first-name",-1847692991,null),new cljs.core.Symbol(null,"last-name","last-name",326414619,null),new cljs.core.Symbol(null,"&","&",-1640531489,null),new cljs.core.Symbol(null,"aliases","aliases",1739901111,null)], true),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1637209513,null),"Rich","Hickey","The Clojurer","Go Time","Macro Killah")], true),new cljs.core.Keyword(null,"__","__",1013907282))),"You can regain the full argument if you like arguing",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"original-parts","original-parts",1508854614),cljs.core.PersistentVector.fromArray(["Steven","Hawking"], true),new cljs.core.Keyword(null,"named-parts","named-parts",3767724734),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"first","first",1111344674),"Steven",new cljs.core.Keyword(null,"last","last",1017218568),"Hawking"], true)], true),cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"first-name","first-name",-1847692991,null),new cljs.core.Symbol(null,"last-name","last-name",326414619,null),new cljs.core.Keyword(null,"as","as",1013907364),new cljs.core.Symbol(null,"full-name","full-name",931083458,null)], true),cljs.core.PersistentVector.fromArray(["Steven","Hawking"], true)], true),new cljs.core.Keyword(null,"__","__",1013907282))),"Break up maps by key",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"123 Test Lane, Testerville, TX",cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"street-address","street-address",-508127773,null),new cljs.core.Keyword(null,"street-address","street-address",2146307996),new cljs.core.Symbol(null,"city","city",-1637477596,null),new cljs.core.Keyword(null,"city","city",1016958173),new cljs.core.Symbol(null,"state","state",-1530773942,null),new cljs.core.Keyword(null,"state","state",1123661827)], true),new cljs.core.Symbol(null,"test-address","test-address",-1021473934,null)], true),new cljs.core.Keyword(null,"__","__",1013907282))),"Or more succinctly",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"123 Test Lane, Testerville, TX",cljs.core.list(new cljs.core.Symbol(null,"let","let",-1640424492,null),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"keys","keys",1017192806),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"street-address","street-address",-508127773,null),new cljs.core.Keyword(null,"__","__",1013907282)], true)], true),new cljs.core.Symbol(null,"test-address","test-address",-1021473934,null)], true),new cljs.core.Keyword(null,"__","__",1013907282))),"All together now!",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"Test Testerson, 123 Test Lane, Testerville, TX",cljs.core.list(new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.PersistentVector.fromArray(["Test","Testerson"], true),new cljs.core.Symbol(null,"test-address","test-address",-1021473934,null))));
koans.meditations.destructuring.fns = cljs.core.PersistentVector.fromArray([cljs.core.list(new cljs.core.Symbol(null,"def","def",-1640432194,null),new cljs.core.Symbol(null,"test-address","test-address",-1021473934,null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"street-address","street-address",2146307996),"123 Test Lane",new cljs.core.Keyword(null,"city","city",1016958173),"Testerville",new cljs.core.Keyword(null,"state","state",1123661827),"TX"], true))], true);

//# sourceMappingURL=destructuring.js.map