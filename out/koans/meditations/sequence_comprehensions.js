// Compiled by ClojureScript 0.0-2014
goog.provide('koans.meditations.sequence_comprehensions');
goog.require('cljs.core');
koans.meditations.sequence_comprehensions.koans = cljs.core.list("Sequence comprehensions can bind each element in turn to a symbol",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Symbol(null,"for","for",-1640429950,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"index","index",-1540185461,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1532251402,null),6)], true),new cljs.core.Symbol(null,"index","index",-1540185461,null))),"They can easily emulate mapping",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",-1532577739,null),cljs.core.list(0,1,4,9,16,25)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"index","index",-1540185461,null)], true),cljs.core.list(new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,"index","index",-1540185461,null),new cljs.core.Symbol(null,"index","index",-1540185461,null))),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1532251402,null),6)),cljs.core.list(new cljs.core.Symbol(null,"for","for",-1640429950,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"index","index",-1540185461,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1532251402,null),6)], true),new cljs.core.Keyword(null,"__","__",1013907282))),"And also filtering",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",-1532577739,null),cljs.core.list(1,3,5,7,9)),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",1379943729,null),new cljs.core.Symbol(null,"odd?","odd?",-1637125463,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1532251402,null),10)),cljs.core.list(new cljs.core.Symbol(null,"for","for",-1640429950,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"index","index",-1540185461,null),new cljs.core.Keyword(null,"__","__",1013907282),new cljs.core.Keyword(null,"when","when",1017552556),cljs.core.list(new cljs.core.Symbol(null,"odd?","odd?",-1637125463,null),new cljs.core.Symbol(null,"index","index",-1540185461,null))], true),new cljs.core.Symbol(null,"index","index",-1540185461,null))),"Combinations of these transformations is trivial",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",-1532577739,null),cljs.core.list(1,9,25,49,81)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"index","index",-1540185461,null)], true),cljs.core.list(new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,"index","index",-1540185461,null),new cljs.core.Symbol(null,"index","index",-1540185461,null))),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",1379943729,null),new cljs.core.Symbol(null,"odd?","odd?",-1637125463,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1532251402,null),10))),cljs.core.list(new cljs.core.Symbol(null,"for","for",-1640429950,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"index","index",-1540185461,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1532251402,null),10),new cljs.core.Keyword(null,"when","when",1017552556),new cljs.core.Keyword(null,"__","__",1013907282)], true),new cljs.core.Keyword(null,"__","__",1013907282))),"More complex transformations simply take multiple binding forms",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"top","top",1014019271),new cljs.core.Keyword(null,"left","left",1017222009)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"top","top",1014019271),new cljs.core.Keyword(null,"middle","middle",4234530055)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"top","top",1014019271),new cljs.core.Keyword(null,"right","right",1122416014)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"middle","middle",4234530055),new cljs.core.Keyword(null,"left","left",1017222009)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"middle","middle",4234530055),new cljs.core.Keyword(null,"middle","middle",4234530055)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"middle","middle",4234530055),new cljs.core.Keyword(null,"right","right",1122416014)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"bottom","bottom",3925642653),new cljs.core.Keyword(null,"left","left",1017222009)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"bottom","bottom",3925642653),new cljs.core.Keyword(null,"middle","middle",4234530055)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"bottom","bottom",3925642653),new cljs.core.Keyword(null,"right","right",1122416014)], true)], true),cljs.core.list(new cljs.core.Symbol(null,"for","for",-1640429950,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"row","row",-1640418413,null),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"top","top",1014019271),new cljs.core.Keyword(null,"middle","middle",4234530055),new cljs.core.Keyword(null,"bottom","bottom",3925642653)], true),new cljs.core.Symbol(null,"column","column",1299598607,null),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"middle","middle",4234530055),new cljs.core.Keyword(null,"right","right",1122416014)], true)], true),new cljs.core.Keyword(null,"__","__",1013907282))));

//# sourceMappingURL=sequence_comprehensions.js.map