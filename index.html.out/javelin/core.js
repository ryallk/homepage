// Compiled by ClojureScript 1.8.40 {}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = cljs.core.atom.call(null,(0));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
javelin.core.bf_seq = (function javelin$core$bf_seq(branch_QMARK_,children,root){
var walk = (function javelin$core$bf_seq_$_walk(queue){
var temp__4425__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4425__auto__){
return (function (){
return cljs.core.cons.call(null,node,javelin$core$bf_seq_$_walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
});})(node,temp__4425__auto__))
,null,null));
} else {
return null;
}
});
return walk.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root));
});
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.peek.call(null,pri_map));
if(cljs.core.truth_(temp__4425__auto__)){
var next = temp__4425__auto__;
var popq = cljs.core.pop.call(null,pri_map);
var old = next.prev;
var new$ = (function (){var temp__4423__auto__ = next.thunk;
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null);
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.call(null,new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches.call(null,next,old,new$);
} else {
}

var G__8326 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__8324_SHARP_,p2__8325_SHARP_){
return cljs.core.assoc.call(null,p1__8324_SHARP_,p2__8325_SHARP_,p2__8325_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__8326;
continue;
} else {
return null;
}
break;
}
});
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.call(null,javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cell__GT_pm = (function javelin$core$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.call(null,c,c.rank);
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return cljs.core.swap_BANG_.call(null,javelin.core._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.call(null,c,i);
}catch (e8328){if((e8328 instanceof Error)){
var _ = e8328;
return null;
} else {
throw e8328;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__8331 = c;
javelin.core.add_sync_BANG_.call(null,G__8331);

return G__8331;
} else {
var G__8332 = c;
javelin.core.propagate_STAR_.call(null,javelin.core.cell__GT_pm.call(null,G__8332));

return G__8332;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__7585__auto__ = [];
var len__7578__auto___8341 = arguments.length;
var i__7579__auto___8342 = (0);
while(true){
if((i__7579__auto___8342 < len__7578__auto___8341)){
args__7585__auto__.push((arguments[i__7579__auto___8342]));

var G__8343 = (i__7579__auto___8342 + (1));
i__7579__auto___8342 = G__8343;
continue;
} else {
}
break;
}

var argseq__7586__auto__ = ((((1) < args__7585__auto__.length))?(new cljs.core.IndexedSeq(args__7585__auto__.slice((1)),(0),null)):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7586__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__8335){
var vec__8336 = p__8335;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__8336,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__8337 = cljs.core.seq.call(null,srcs);
var chunk__8338 = null;
var count__8339 = (0);
var i__8340 = (0);
while(true){
if((i__8340 < count__8339)){
var src = cljs.core._nth.call(null,chunk__8338,i__8340);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__8344 = seq__8337;
var G__8345 = chunk__8338;
var G__8346 = count__8339;
var G__8347 = (i__8340 + (1));
seq__8337 = G__8344;
chunk__8338 = G__8345;
count__8339 = G__8346;
i__8340 = G__8347;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8337);
if(temp__4425__auto__){
var seq__8337__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8337__$1)){
var c__7320__auto__ = cljs.core.chunk_first.call(null,seq__8337__$1);
var G__8348 = cljs.core.chunk_rest.call(null,seq__8337__$1);
var G__8349 = c__7320__auto__;
var G__8350 = cljs.core.count.call(null,c__7320__auto__);
var G__8351 = (0);
seq__8337 = G__8348;
chunk__8338 = G__8349;
count__8339 = G__8350;
i__8340 = G__8351;
continue;
} else {
var src = cljs.core.first.call(null,seq__8337__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__8352 = cljs.core.next.call(null,seq__8337__$1);
var G__8353 = null;
var G__8354 = (0);
var G__8355 = (0);
seq__8337 = G__8352;
chunk__8338 = G__8353;
count__8339 = G__8354;
i__8340 = G__8355;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq8333){
var G__8334 = cljs.core.first.call(null,seq8333);
var seq8333__$1 = cljs.core.next.call(null,seq8333);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8334,seq8333__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__7585__auto__ = [];
var len__7578__auto___8374 = arguments.length;
var i__7579__auto___8375 = (0);
while(true){
if((i__7579__auto___8375 < len__7578__auto___8374)){
args__7585__auto__.push((arguments[i__7579__auto___8375]));

var G__8376 = (i__7579__auto___8375 + (1));
i__7579__auto___8375 = G__8376;
continue;
} else {
}
break;
}

var argseq__7586__auto__ = ((((1) < args__7585__auto__.length))?(new cljs.core.IndexedSeq(args__7585__auto__.slice((1)),(0),null)):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7586__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__8360){
var vec__8361 = p__8360;
var f = cljs.core.nth.call(null,vec__8361,(0),null);
var sources = cljs.core.nth.call(null,vec__8361,(1),null);
javelin.core.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__8362_8377 = cljs.core.seq.call(null,this$.sources);
var chunk__8363_8378 = null;
var count__8364_8379 = (0);
var i__8365_8380 = (0);
while(true){
if((i__8365_8380 < count__8364_8379)){
var source_8381 = cljs.core._nth.call(null,chunk__8363_8378,i__8365_8380);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_8381))){
source_8381.sinks = cljs.core.conj.call(null,source_8381.sinks,this$);

if((source_8381.rank > this$.rank)){
var seq__8366_8382 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__8362_8377,chunk__8363_8378,count__8364_8379,i__8365_8380,source_8381,vec__8361,f,sources){
return (function (p1__8356_SHARP_){
return p1__8356_SHARP_.sinks;
});})(seq__8362_8377,chunk__8363_8378,count__8364_8379,i__8365_8380,source_8381,vec__8361,f,sources))
,source_8381));
var chunk__8367_8383 = null;
var count__8368_8384 = (0);
var i__8369_8385 = (0);
while(true){
if((i__8369_8385 < count__8368_8384)){
var dep_8386 = cljs.core._nth.call(null,chunk__8367_8383,i__8369_8385);
dep_8386.rank = javelin.core.next_rank.call(null);

var G__8387 = seq__8366_8382;
var G__8388 = chunk__8367_8383;
var G__8389 = count__8368_8384;
var G__8390 = (i__8369_8385 + (1));
seq__8366_8382 = G__8387;
chunk__8367_8383 = G__8388;
count__8368_8384 = G__8389;
i__8369_8385 = G__8390;
continue;
} else {
var temp__4425__auto___8391 = cljs.core.seq.call(null,seq__8366_8382);
if(temp__4425__auto___8391){
var seq__8366_8392__$1 = temp__4425__auto___8391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8366_8392__$1)){
var c__7320__auto___8393 = cljs.core.chunk_first.call(null,seq__8366_8392__$1);
var G__8394 = cljs.core.chunk_rest.call(null,seq__8366_8392__$1);
var G__8395 = c__7320__auto___8393;
var G__8396 = cljs.core.count.call(null,c__7320__auto___8393);
var G__8397 = (0);
seq__8366_8382 = G__8394;
chunk__8367_8383 = G__8395;
count__8368_8384 = G__8396;
i__8369_8385 = G__8397;
continue;
} else {
var dep_8398 = cljs.core.first.call(null,seq__8366_8392__$1);
dep_8398.rank = javelin.core.next_rank.call(null);

var G__8399 = cljs.core.next.call(null,seq__8366_8392__$1);
var G__8400 = null;
var G__8401 = (0);
var G__8402 = (0);
seq__8366_8382 = G__8399;
chunk__8367_8383 = G__8400;
count__8368_8384 = G__8401;
i__8369_8385 = G__8402;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__8403 = seq__8362_8377;
var G__8404 = chunk__8363_8378;
var G__8405 = count__8364_8379;
var G__8406 = (i__8365_8380 + (1));
seq__8362_8377 = G__8403;
chunk__8363_8378 = G__8404;
count__8364_8379 = G__8405;
i__8365_8380 = G__8406;
continue;
} else {
var temp__4425__auto___8407 = cljs.core.seq.call(null,seq__8362_8377);
if(temp__4425__auto___8407){
var seq__8362_8408__$1 = temp__4425__auto___8407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8362_8408__$1)){
var c__7320__auto___8409 = cljs.core.chunk_first.call(null,seq__8362_8408__$1);
var G__8410 = cljs.core.chunk_rest.call(null,seq__8362_8408__$1);
var G__8411 = c__7320__auto___8409;
var G__8412 = cljs.core.count.call(null,c__7320__auto___8409);
var G__8413 = (0);
seq__8362_8377 = G__8410;
chunk__8363_8378 = G__8411;
count__8364_8379 = G__8412;
i__8365_8380 = G__8413;
continue;
} else {
var source_8414 = cljs.core.first.call(null,seq__8362_8408__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_8414))){
source_8414.sinks = cljs.core.conj.call(null,source_8414.sinks,this$);

if((source_8414.rank > this$.rank)){
var seq__8370_8415 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__8362_8377,chunk__8363_8378,count__8364_8379,i__8365_8380,source_8414,seq__8362_8408__$1,temp__4425__auto___8407,vec__8361,f,sources){
return (function (p1__8356_SHARP_){
return p1__8356_SHARP_.sinks;
});})(seq__8362_8377,chunk__8363_8378,count__8364_8379,i__8365_8380,source_8414,seq__8362_8408__$1,temp__4425__auto___8407,vec__8361,f,sources))
,source_8414));
var chunk__8371_8416 = null;
var count__8372_8417 = (0);
var i__8373_8418 = (0);
while(true){
if((i__8373_8418 < count__8372_8417)){
var dep_8419 = cljs.core._nth.call(null,chunk__8371_8416,i__8373_8418);
dep_8419.rank = javelin.core.next_rank.call(null);

var G__8420 = seq__8370_8415;
var G__8421 = chunk__8371_8416;
var G__8422 = count__8372_8417;
var G__8423 = (i__8373_8418 + (1));
seq__8370_8415 = G__8420;
chunk__8371_8416 = G__8421;
count__8372_8417 = G__8422;
i__8373_8418 = G__8423;
continue;
} else {
var temp__4425__auto___8424__$1 = cljs.core.seq.call(null,seq__8370_8415);
if(temp__4425__auto___8424__$1){
var seq__8370_8425__$1 = temp__4425__auto___8424__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8370_8425__$1)){
var c__7320__auto___8426 = cljs.core.chunk_first.call(null,seq__8370_8425__$1);
var G__8427 = cljs.core.chunk_rest.call(null,seq__8370_8425__$1);
var G__8428 = c__7320__auto___8426;
var G__8429 = cljs.core.count.call(null,c__7320__auto___8426);
var G__8430 = (0);
seq__8370_8415 = G__8427;
chunk__8371_8416 = G__8428;
count__8372_8417 = G__8429;
i__8373_8418 = G__8430;
continue;
} else {
var dep_8431 = cljs.core.first.call(null,seq__8370_8425__$1);
dep_8431.rank = javelin.core.next_rank.call(null);

var G__8432 = cljs.core.next.call(null,seq__8370_8425__$1);
var G__8433 = null;
var G__8434 = (0);
var G__8435 = (0);
seq__8370_8415 = G__8432;
chunk__8371_8416 = G__8433;
count__8372_8417 = G__8434;
i__8373_8418 = G__8435;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__8436 = cljs.core.next.call(null,seq__8362_8408__$1);
var G__8437 = null;
var G__8438 = (0);
var G__8439 = (0);
seq__8362_8377 = G__8436;
chunk__8363_8378 = G__8437;
count__8364_8379 = G__8438;
i__8365_8380 = G__8439;
continue;
}
} else {
}
}
break;
}

var compute_8440 = ((function (vec__8361,f,sources){
return (function (p1__8357_SHARP_){
return cljs.core.apply.call(null,javelin.core.deref_STAR_.call(null,cljs.core.peek.call(null,p1__8357_SHARP_)),cljs.core.map.call(null,javelin.core.deref_STAR_,cljs.core.pop.call(null,p1__8357_SHARP_)));
});})(vec__8361,f,sources))
;
this$.thunk = ((function (compute_8440,vec__8361,f,sources){
return (function (){
return this$.state = compute_8440.call(null,this$.sources);
});})(compute_8440,vec__8361,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_.call(null,this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq8358){
var G__8359 = cljs.core.first.call(null,seq8358);
var seq8358__$1 = cljs.core.next.call(null,seq8358);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8359,seq8358__$1);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
})
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.call(null,w,"#<Cell: ",cljs.core.pr_str.call(null,self__.state),">");
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update));
});

javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.lens_QMARK_.call(null,this$__$1))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_(javelin.core.input_QMARK_.call(null,this$__$1))){
this$__$1.state = x;

javelin.core.propagate_BANG_.call(null,this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a,b));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,this$__$1.state,a,b,xs));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__8441 = cljs.core.seq.call(null,self__.watches);
var chunk__8442 = null;
var count__8443 = (0);
var i__8444 = (0);
while(true){
if((i__8444 < count__8443)){
var vec__8445 = cljs.core._nth.call(null,chunk__8442,i__8444);
var key = cljs.core.nth.call(null,vec__8445,(0),null);
var f = cljs.core.nth.call(null,vec__8445,(1),null);
f.call(null,key,this$__$1,o,n);

var G__8447 = seq__8441;
var G__8448 = chunk__8442;
var G__8449 = count__8443;
var G__8450 = (i__8444 + (1));
seq__8441 = G__8447;
chunk__8442 = G__8448;
count__8443 = G__8449;
i__8444 = G__8450;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8441);
if(temp__4425__auto__){
var seq__8441__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8441__$1)){
var c__7320__auto__ = cljs.core.chunk_first.call(null,seq__8441__$1);
var G__8451 = cljs.core.chunk_rest.call(null,seq__8441__$1);
var G__8452 = c__7320__auto__;
var G__8453 = cljs.core.count.call(null,c__7320__auto__);
var G__8454 = (0);
seq__8441 = G__8451;
chunk__8442 = G__8452;
count__8443 = G__8453;
i__8444 = G__8454;
continue;
} else {
var vec__8446 = cljs.core.first.call(null,seq__8441__$1);
var key = cljs.core.nth.call(null,vec__8446,(0),null);
var f = cljs.core.nth.call(null,vec__8446,(1),null);
f.call(null,key,this$__$1,o,n);

var G__8455 = cljs.core.next.call(null,seq__8441__$1);
var G__8456 = null;
var G__8457 = (0);
var G__8458 = (0);
seq__8441 = G__8455;
chunk__8442 = G__8456;
count__8443 = G__8457;
i__8444 = G__8458;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,k);
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"rank","rank",-66196975,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"sinks","sinks",-1243609492,null),new cljs.core.Symbol(null,"thunk","thunk",74255732,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"update","update",-1608859373,null)], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__7115__auto__,writer__7116__auto__,opt__7117__auto__){
return cljs.core._write.call(null,writer__7116__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__6497__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__6497__auto__)){
return c.thunk;
} else {
return and__6497__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__6497__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__6497__auto__)){
return c.update;
} else {
return and__6497__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__6497__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__6497__auto__)){
return cljs.core.not.call(null,javelin.core.formula_QMARK_.call(null,c));
} else {
return and__6497__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_.call(null,c);
});
javelin.core.formula = (function javelin$core$formula(f){
return (function() { 
var G__8459__delegate = function (sources){
return javelin.core.set_formula_BANG_.call(null,javelin.core.cell.call(null,new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)),f,sources);
};
var G__8459 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__8460__i = 0, G__8460__a = new Array(arguments.length -  0);
while (G__8460__i < G__8460__a.length) {G__8460__a[G__8460__i] = arguments[G__8460__i + 0]; ++G__8460__i;}
  sources = new cljs.core.IndexedSeq(G__8460__a,0);
} 
return G__8459__delegate.call(this,sources);};
G__8459.cljs$lang$maxFixedArity = 0;
G__8459.cljs$lang$applyTo = (function (arglist__8461){
var sources = cljs.core.seq(arglist__8461);
return G__8459__delegate(sources);
});
G__8459.cljs$core$IFn$_invoke$arity$variadic = G__8459__delegate;
return G__8459;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula.call(null,cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args8462 = [];
var len__7578__auto___8470 = arguments.length;
var i__7579__auto___8471 = (0);
while(true){
if((i__7579__auto___8471 < len__7578__auto___8470)){
args8462.push((arguments[i__7579__auto___8471]));

var G__8472 = (i__7579__auto___8471 + (1));
i__7579__auto___8471 = G__8472;
continue;
} else {
}
break;
}

var G__8466 = args8462.length;
switch (G__8466) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7597__auto__ = (new cljs.core.IndexedSeq(args8462.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7597__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(null,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__8467){
var map__8468 = p__8467;
var map__8468__$1 = ((((!((map__8468 == null)))?((((map__8468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8468):map__8468);
var meta = cljs.core.get.call(null,map__8468__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(meta,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq8463){
var G__8464 = cljs.core.first.call(null,seq8463);
var seq8463__$1 = cljs.core.next.call(null,seq8463);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__8464,seq8463__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__8474_SHARP_){
var _STAR_tx_STAR_8477 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__8474_SHARP_.call(null);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_8477;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_);
var _STAR_tx_STAR_8478 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_.call(null,tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_8478;
}});})(bind))
;
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return thunk.call(null);
} else {
return bind.call(null,((function (bind,prop){
return (function (){
thunk.call(null);

return prop.call(null);
});})(bind,prop))
);
}
});
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
var args__7585__auto__ = [];
var len__7578__auto___8485 = arguments.length;
var i__7579__auto___8486 = (0);
while(true){
if((i__7579__auto___8486 < len__7578__auto___8485)){
args__7585__auto__.push((arguments[i__7579__auto___8486]));

var G__8487 = (i__7579__auto___8486 + (1));
i__7579__auto___8486 = G__8487;
continue;
} else {
}
break;
}

var argseq__7586__auto__ = ((((0) < args__7585__auto__.length))?(new cljs.core.IndexedSeq(args__7585__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7586__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)));
var tag_neq = ((function (olds){
return (function (p1__8479_SHARP_,p2__8480_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__8479_SHARP_,p2__8480_SHARP_),p2__8480_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__8482_SHARP_,p2__8481_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__8482_SHARP_,p2__8481_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__8488__delegate = function (rest__8483_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__8483_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__8483_SHARP_);

return news;
};
var G__8488 = function (var_args){
var rest__8483_SHARP_ = null;
if (arguments.length > 0) {
var G__8489__i = 0, G__8489__a = new Array(arguments.length -  0);
while (G__8489__i < G__8489__a.length) {G__8489__a[G__8489__i] = arguments[G__8489__i + 0]; ++G__8489__i;}
  rest__8483_SHARP_ = new cljs.core.IndexedSeq(G__8489__a,0);
} 
return G__8488__delegate.call(this,rest__8483_SHARP_);};
G__8488.cljs$lang$maxFixedArity = 0;
G__8488.cljs$lang$applyTo = (function (arglist__8490){
var rest__8483_SHARP_ = cljs.core.seq(arglist__8490);
return G__8488__delegate(rest__8483_SHARP_);
});
G__8488.cljs$core$IFn$_invoke$arity$variadic = G__8488__delegate;
return G__8488;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,javelin.core.formula.call(null,proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq8484){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8484));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__8491_SHARP_){
return javelin.core.formula.call(null,cljs.core.comp.call(null,f,javelin.core.safe_nth)).call(null,cseq,p1__8491_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.call(null,(0));
var cur_count = javelin.core.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__8492_SHARP_){
return javelin.core.formula.call(null,javelin.core.safe_nth).call(null,items_seq,p1__8492_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__8497_8501 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__8498_8502 = null;
var count__8499_8503 = (0);
var i__8500_8504 = (0);
while(true){
if((i__8500_8504 < count__8499_8503)){
var i_8505 = cljs.core._nth.call(null,chunk__8498_8502,i__8500_8504);
f__$1.call(null,ith_item__$1.call(null,i_8505));

var G__8506 = seq__8497_8501;
var G__8507 = chunk__8498_8502;
var G__8508 = count__8499_8503;
var G__8509 = (i__8500_8504 + (1));
seq__8497_8501 = G__8506;
chunk__8498_8502 = G__8507;
count__8499_8503 = G__8508;
i__8500_8504 = G__8509;
continue;
} else {
var temp__4425__auto___8510 = cljs.core.seq.call(null,seq__8497_8501);
if(temp__4425__auto___8510){
var seq__8497_8511__$1 = temp__4425__auto___8510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8497_8511__$1)){
var c__7320__auto___8512 = cljs.core.chunk_first.call(null,seq__8497_8511__$1);
var G__8513 = cljs.core.chunk_rest.call(null,seq__8497_8511__$1);
var G__8514 = c__7320__auto___8512;
var G__8515 = cljs.core.count.call(null,c__7320__auto___8512);
var G__8516 = (0);
seq__8497_8501 = G__8513;
chunk__8498_8502 = G__8514;
count__8499_8503 = G__8515;
i__8500_8504 = G__8516;
continue;
} else {
var i_8517 = cljs.core.first.call(null,seq__8497_8511__$1);
f__$1.call(null,ith_item__$1.call(null,i_8517));

var G__8518 = cljs.core.next.call(null,seq__8497_8511__$1);
var G__8519 = null;
var G__8520 = (0);
var G__8521 = (0);
seq__8497_8501 = G__8518;
chunk__8498_8502 = G__8519;
count__8499_8503 = G__8520;
i__8500_8504 = G__8521;
continue;
}
} else {
}
}
break;
}

return reset_pool_size_BANG_.call(null,cur_count__$1);
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.call(null,cljs.core.reset_BANG_,pool_size));
});

//# sourceMappingURL=core.js.map