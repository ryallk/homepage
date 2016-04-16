// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
javelin.core.bf_seq = (function javelin$core$bf_seq(branch_QMARK_,children,root){
var walk = (function javelin$core$bf_seq_$_walk(queue){
var temp__4425__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4425__auto__){
return (function (){
return cljs.core.cons(node,javelin$core$bf_seq_$_walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : branch_QMARK_.call(null,node)))?(children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(node) : children.call(null,node)):null))));
});})(node,temp__4425__auto__))
,null,null));
} else {
return null;
}
});
return walk(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,root));
});
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4425__auto__ = cljs.core.first(cljs.core.peek(pri_map));
if(cljs.core.truth_(temp__4425__auto__)){
var next = temp__4425__auto__;
var popq = cljs.core.pop(pri_map);
var old = next.prev;
var new$ = (function (){var temp__4423__auto__ = next.thunk;
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches(next,old,new$);
} else {
}

var G__12621 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__12619_SHARP_,p2__12620_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12619_SHARP_,p2__12620_SHARP_,p2__12620_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__12621;
continue;
} else {
return null;
}
break;
}
});
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : javelin.core.cell_QMARK_.call(null,x)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cell__GT_pm = (function javelin$core$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([c,c.rank], 0));
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(javelin.core._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
}catch (e12623){if((e12623 instanceof Error)){
var _ = e12623;
return null;
} else {
throw e12623;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__12626 = c;
javelin.core.add_sync_BANG_(G__12626);

return G__12626;
} else {
var G__12627 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__12627));

return G__12627;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__7585__auto__ = [];
var len__7578__auto___12636 = arguments.length;
var i__7579__auto___12637 = (0);
while(true){
if((i__7579__auto___12637 < len__7578__auto___12636)){
args__7585__auto__.push((arguments[i__7579__auto___12637]));

var G__12638 = (i__7579__auto___12637 + (1));
i__7579__auto___12637 = G__12638;
continue;
} else {
}
break;
}

var argseq__7586__auto__ = ((((1) < args__7585__auto__.length))?(new cljs.core.IndexedSeq(args__7585__auto__.slice((1)),(0),null)):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7586__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__12630){
var vec__12631 = p__12630;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12631,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__12632 = cljs.core.seq(srcs);
var chunk__12633 = null;
var count__12634 = (0);
var i__12635 = (0);
while(true){
if((i__12635 < count__12634)){
var src = chunk__12633.cljs$core$IIndexed$_nth$arity$2(null,i__12635);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__12639 = seq__12632;
var G__12640 = chunk__12633;
var G__12641 = count__12634;
var G__12642 = (i__12635 + (1));
seq__12632 = G__12639;
chunk__12633 = G__12640;
count__12634 = G__12641;
i__12635 = G__12642;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12632);
if(temp__4425__auto__){
var seq__12632__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12632__$1)){
var c__7320__auto__ = cljs.core.chunk_first(seq__12632__$1);
var G__12643 = cljs.core.chunk_rest(seq__12632__$1);
var G__12644 = c__7320__auto__;
var G__12645 = cljs.core.count(c__7320__auto__);
var G__12646 = (0);
seq__12632 = G__12643;
chunk__12633 = G__12644;
count__12634 = G__12645;
i__12635 = G__12646;
continue;
} else {
var src = cljs.core.first(seq__12632__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__12647 = cljs.core.next(seq__12632__$1);
var G__12648 = null;
var G__12649 = (0);
var G__12650 = (0);
seq__12632 = G__12647;
chunk__12633 = G__12648;
count__12634 = G__12649;
i__12635 = G__12650;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq12628){
var G__12629 = cljs.core.first(seq12628);
var seq12628__$1 = cljs.core.next(seq12628);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12629,seq12628__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__7585__auto__ = [];
var len__7578__auto___12669 = arguments.length;
var i__7579__auto___12670 = (0);
while(true){
if((i__7579__auto___12670 < len__7578__auto___12669)){
args__7585__auto__.push((arguments[i__7579__auto___12670]));

var G__12671 = (i__7579__auto___12670 + (1));
i__7579__auto___12670 = G__12671;
continue;
} else {
}
break;
}

var argseq__7586__auto__ = ((((1) < args__7585__auto__.length))?(new cljs.core.IndexedSeq(args__7585__auto__.slice((1)),(0),null)):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7586__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__12655){
var vec__12656 = p__12655;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12656,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12656,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__12657_12672 = cljs.core.seq(this$.sources);
var chunk__12658_12673 = null;
var count__12659_12674 = (0);
var i__12660_12675 = (0);
while(true){
if((i__12660_12675 < count__12659_12674)){
var source_12676 = chunk__12658_12673.cljs$core$IIndexed$_nth$arity$2(null,i__12660_12675);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_12676) : javelin.core.cell_QMARK_.call(null,source_12676)))){
source_12676.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_12676.sinks,this$);

if((source_12676.rank > this$.rank)){
var seq__12661_12677 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__12657_12672,chunk__12658_12673,count__12659_12674,i__12660_12675,source_12676,vec__12656,f,sources){
return (function (p1__12651_SHARP_){
return p1__12651_SHARP_.sinks;
});})(seq__12657_12672,chunk__12658_12673,count__12659_12674,i__12660_12675,source_12676,vec__12656,f,sources))
,source_12676));
var chunk__12662_12678 = null;
var count__12663_12679 = (0);
var i__12664_12680 = (0);
while(true){
if((i__12664_12680 < count__12663_12679)){
var dep_12681 = chunk__12662_12678.cljs$core$IIndexed$_nth$arity$2(null,i__12664_12680);
dep_12681.rank = javelin.core.next_rank();

var G__12682 = seq__12661_12677;
var G__12683 = chunk__12662_12678;
var G__12684 = count__12663_12679;
var G__12685 = (i__12664_12680 + (1));
seq__12661_12677 = G__12682;
chunk__12662_12678 = G__12683;
count__12663_12679 = G__12684;
i__12664_12680 = G__12685;
continue;
} else {
var temp__4425__auto___12686 = cljs.core.seq(seq__12661_12677);
if(temp__4425__auto___12686){
var seq__12661_12687__$1 = temp__4425__auto___12686;
if(cljs.core.chunked_seq_QMARK_(seq__12661_12687__$1)){
var c__7320__auto___12688 = cljs.core.chunk_first(seq__12661_12687__$1);
var G__12689 = cljs.core.chunk_rest(seq__12661_12687__$1);
var G__12690 = c__7320__auto___12688;
var G__12691 = cljs.core.count(c__7320__auto___12688);
var G__12692 = (0);
seq__12661_12677 = G__12689;
chunk__12662_12678 = G__12690;
count__12663_12679 = G__12691;
i__12664_12680 = G__12692;
continue;
} else {
var dep_12693 = cljs.core.first(seq__12661_12687__$1);
dep_12693.rank = javelin.core.next_rank();

var G__12694 = cljs.core.next(seq__12661_12687__$1);
var G__12695 = null;
var G__12696 = (0);
var G__12697 = (0);
seq__12661_12677 = G__12694;
chunk__12662_12678 = G__12695;
count__12663_12679 = G__12696;
i__12664_12680 = G__12697;
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

var G__12698 = seq__12657_12672;
var G__12699 = chunk__12658_12673;
var G__12700 = count__12659_12674;
var G__12701 = (i__12660_12675 + (1));
seq__12657_12672 = G__12698;
chunk__12658_12673 = G__12699;
count__12659_12674 = G__12700;
i__12660_12675 = G__12701;
continue;
} else {
var temp__4425__auto___12702 = cljs.core.seq(seq__12657_12672);
if(temp__4425__auto___12702){
var seq__12657_12703__$1 = temp__4425__auto___12702;
if(cljs.core.chunked_seq_QMARK_(seq__12657_12703__$1)){
var c__7320__auto___12704 = cljs.core.chunk_first(seq__12657_12703__$1);
var G__12705 = cljs.core.chunk_rest(seq__12657_12703__$1);
var G__12706 = c__7320__auto___12704;
var G__12707 = cljs.core.count(c__7320__auto___12704);
var G__12708 = (0);
seq__12657_12672 = G__12705;
chunk__12658_12673 = G__12706;
count__12659_12674 = G__12707;
i__12660_12675 = G__12708;
continue;
} else {
var source_12709 = cljs.core.first(seq__12657_12703__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_12709) : javelin.core.cell_QMARK_.call(null,source_12709)))){
source_12709.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_12709.sinks,this$);

if((source_12709.rank > this$.rank)){
var seq__12665_12710 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__12657_12672,chunk__12658_12673,count__12659_12674,i__12660_12675,source_12709,seq__12657_12703__$1,temp__4425__auto___12702,vec__12656,f,sources){
return (function (p1__12651_SHARP_){
return p1__12651_SHARP_.sinks;
});})(seq__12657_12672,chunk__12658_12673,count__12659_12674,i__12660_12675,source_12709,seq__12657_12703__$1,temp__4425__auto___12702,vec__12656,f,sources))
,source_12709));
var chunk__12666_12711 = null;
var count__12667_12712 = (0);
var i__12668_12713 = (0);
while(true){
if((i__12668_12713 < count__12667_12712)){
var dep_12714 = chunk__12666_12711.cljs$core$IIndexed$_nth$arity$2(null,i__12668_12713);
dep_12714.rank = javelin.core.next_rank();

var G__12715 = seq__12665_12710;
var G__12716 = chunk__12666_12711;
var G__12717 = count__12667_12712;
var G__12718 = (i__12668_12713 + (1));
seq__12665_12710 = G__12715;
chunk__12666_12711 = G__12716;
count__12667_12712 = G__12717;
i__12668_12713 = G__12718;
continue;
} else {
var temp__4425__auto___12719__$1 = cljs.core.seq(seq__12665_12710);
if(temp__4425__auto___12719__$1){
var seq__12665_12720__$1 = temp__4425__auto___12719__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12665_12720__$1)){
var c__7320__auto___12721 = cljs.core.chunk_first(seq__12665_12720__$1);
var G__12722 = cljs.core.chunk_rest(seq__12665_12720__$1);
var G__12723 = c__7320__auto___12721;
var G__12724 = cljs.core.count(c__7320__auto___12721);
var G__12725 = (0);
seq__12665_12710 = G__12722;
chunk__12666_12711 = G__12723;
count__12667_12712 = G__12724;
i__12668_12713 = G__12725;
continue;
} else {
var dep_12726 = cljs.core.first(seq__12665_12720__$1);
dep_12726.rank = javelin.core.next_rank();

var G__12727 = cljs.core.next(seq__12665_12720__$1);
var G__12728 = null;
var G__12729 = (0);
var G__12730 = (0);
seq__12665_12710 = G__12727;
chunk__12666_12711 = G__12728;
count__12667_12712 = G__12729;
i__12668_12713 = G__12730;
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

var G__12731 = cljs.core.next(seq__12657_12703__$1);
var G__12732 = null;
var G__12733 = (0);
var G__12734 = (0);
seq__12657_12672 = G__12731;
chunk__12658_12673 = G__12732;
count__12659_12674 = G__12733;
i__12660_12675 = G__12734;
continue;
}
} else {
}
}
break;
}

var compute_12735 = ((function (vec__12656,f,sources){
return (function (p1__12652_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__12652_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__12652_SHARP_)));
});})(vec__12656,f,sources))
;
this$.thunk = ((function (compute_12735,vec__12656,f,sources){
return (function (){
return this$.state = compute_12735(this$.sources);
});})(compute_12735,vec__12656,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq12653){
var G__12654 = cljs.core.first(seq12653);
var seq12653__$1 = cljs.core.next(seq12653);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12654,seq12653__$1);
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
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.array_seq(["#<Cell: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.state], 0)),">"], 0));
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
if(cljs.core.truth_((javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.lens_QMARK_.call(null,this$__$1)))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_((javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.input_QMARK_.call(null,this$__$1)))){
this$__$1.state = x;

javelin.core.propagate_BANG_(this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var G__12737 = this$__$1;
var G__12738 = (function (){var G__12739 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12739) : f.call(null,G__12739));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12737,G__12738) : cljs.core.reset_BANG_.call(null,G__12737,G__12738));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__12742 = this$__$1;
var G__12743 = (function (){var G__12744 = this$__$1.state;
var G__12745 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12744,G__12745) : f.call(null,G__12744,G__12745));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12742,G__12743) : cljs.core.reset_BANG_.call(null,G__12742,G__12743));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__12749 = this$__$1;
var G__12750 = (function (){var G__12751 = this$__$1.state;
var G__12752 = a;
var G__12753 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12751,G__12752,G__12753) : f.call(null,G__12751,G__12752,G__12753));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12749,G__12750) : cljs.core.reset_BANG_.call(null,G__12749,G__12750));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__12754 = this$__$1;
var G__12755 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12754,G__12755) : cljs.core.reset_BANG_.call(null,G__12754,G__12755));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__12756 = cljs.core.seq(self__.watches);
var chunk__12757 = null;
var count__12758 = (0);
var i__12759 = (0);
while(true){
if((i__12759 < count__12758)){
var vec__12760 = chunk__12757.cljs$core$IIndexed$_nth$arity$2(null,i__12759);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12760,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12760,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__12762 = seq__12756;
var G__12763 = chunk__12757;
var G__12764 = count__12758;
var G__12765 = (i__12759 + (1));
seq__12756 = G__12762;
chunk__12757 = G__12763;
count__12758 = G__12764;
i__12759 = G__12765;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12756);
if(temp__4425__auto__){
var seq__12756__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12756__$1)){
var c__7320__auto__ = cljs.core.chunk_first(seq__12756__$1);
var G__12766 = cljs.core.chunk_rest(seq__12756__$1);
var G__12767 = c__7320__auto__;
var G__12768 = cljs.core.count(c__7320__auto__);
var G__12769 = (0);
seq__12756 = G__12766;
chunk__12757 = G__12767;
count__12758 = G__12768;
i__12759 = G__12769;
continue;
} else {
var vec__12761 = cljs.core.first(seq__12756__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12761,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12761,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__12770 = cljs.core.next(seq__12756__$1);
var G__12771 = null;
var G__12772 = (0);
var G__12773 = (0);
seq__12756 = G__12770;
chunk__12757 = G__12771;
count__12758 = G__12772;
i__12759 = G__12773;
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
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta,cljs.core.cst$sym$state,cljs.core.cst$sym$rank,cljs.core.cst$sym$prev,cljs.core.cst$sym$sources,cljs.core.cst$sym$sinks,cljs.core.cst$sym$thunk,cljs.core.cst$sym$watches,cljs.core.cst$sym$update], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__7115__auto__,writer__7116__auto__,opt__7117__auto__){
return cljs.core._write(writer__7116__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__6497__auto__ = javelin.core.cell_QMARK_(c);
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
if(cljs.core.truth_((function (){var and__6497__auto__ = javelin.core.cell_QMARK_(c);
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
if(cljs.core.truth_((function (){var and__6497__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__6497__auto__)){
return cljs.core.not(javelin.core.formula_QMARK_(c));
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

return javelin.core.set_formula_BANG_(c);
});
javelin.core.formula = (function javelin$core$formula(f){
return (function() { 
var G__12774__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$javelin$core_SLASH_none) : javelin.core.cell.call(null,cljs.core.cst$kw$javelin$core_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__12774 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__12775__i = 0, G__12775__a = new Array(arguments.length -  0);
while (G__12775__i < G__12775__a.length) {G__12775__a[G__12775__i] = arguments[G__12775__i + 0]; ++G__12775__i;}
  sources = new cljs.core.IndexedSeq(G__12775__a,0);
} 
return G__12774__delegate.call(this,sources);};
G__12774.cljs$lang$maxFixedArity = 0;
G__12774.cljs$lang$applyTo = (function (arglist__12776){
var sources = cljs.core.seq(arglist__12776);
return G__12774__delegate(sources);
});
G__12774.cljs$core$IFn$_invoke$arity$variadic = G__12774__delegate;
return G__12774;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args12777 = [];
var len__7578__auto___12785 = arguments.length;
var i__7579__auto___12786 = (0);
while(true){
if((i__7579__auto___12786 < len__7578__auto___12785)){
args12777.push((arguments[i__7579__auto___12786]));

var G__12787 = (i__7579__auto___12786 + (1));
i__7579__auto___12786 = G__12787;
continue;
} else {
}
break;
}

var G__12781 = args12777.length;
switch (G__12781) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7597__auto__ = (new cljs.core.IndexedSeq(args12777.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7597__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__12782){
var map__12783 = p__12782;
var map__12783__$1 = ((((!((map__12783 == null)))?((((map__12783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12783):map__12783);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12783__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq12778){
var G__12779 = cljs.core.first(seq12778);
var seq12778__$1 = cljs.core.next(seq12778);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__12779,seq12778__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__12789_SHARP_){
var _STAR_tx_STAR_12793 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__12794 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12794) : cljs.core.atom.call(null,G__12794));
})();

try{return (p1__12789_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__12789_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__12789_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_12793;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_12795 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_12795;
}});})(bind))
;
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
return bind(((function (bind,prop){
return (function (){
(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));

return prop();
});})(bind,prop))
);
}
});
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
var args__7585__auto__ = [];
var len__7578__auto___12803 = arguments.length;
var i__7579__auto___12804 = (0);
while(true){
if((i__7579__auto___12804 < len__7578__auto___12803)){
args__7585__auto__.push((arguments[i__7579__auto___12804]));

var G__12805 = (i__7579__auto___12804 + (1));
i__7579__auto___12804 = G__12805;
continue;
} else {
}
break;
}

var argseq__7586__auto__ = ((((0) < args__7585__auto__.length))?(new cljs.core.IndexedSeq(args__7585__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7586__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__12802 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12802) : cljs.core.atom.call(null,G__12802));
})();
var tag_neq = ((function (olds){
return (function (p1__12796_SHARP_,p2__12797_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__12796_SHARP_,p2__12797_SHARP_),p2__12797_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__12799_SHARP_,p2__12798_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__12799_SHARP_,p2__12798_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__12806__delegate = function (rest__12800_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__12800_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__12800_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__12800_SHARP_));

return news;
};
var G__12806 = function (var_args){
var rest__12800_SHARP_ = null;
if (arguments.length > 0) {
var G__12807__i = 0, G__12807__a = new Array(arguments.length -  0);
while (G__12807__i < G__12807__a.length) {G__12807__a[G__12807__i] = arguments[G__12807__i + 0]; ++G__12807__i;}
  rest__12800_SHARP_ = new cljs.core.IndexedSeq(G__12807__a,0);
} 
return G__12806__delegate.call(this,rest__12800_SHARP_);};
G__12806.cljs$lang$maxFixedArity = 0;
G__12806.cljs$lang$applyTo = (function (arglist__12808){
var rest__12800_SHARP_ = cljs.core.seq(arglist__12808);
return G__12806__delegate(rest__12800_SHARP_);
});
G__12806.cljs$core$IFn$_invoke$arity$variadic = G__12806__delegate;
return G__12806;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq12801){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12801));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__12809_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__12809_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__12810_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__12810_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__12817_12823 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__12818_12824 = null;
var count__12819_12825 = (0);
var i__12820_12826 = (0);
while(true){
if((i__12820_12826 < count__12819_12825)){
var i_12827 = chunk__12818_12824.cljs$core$IIndexed$_nth$arity$2(null,i__12820_12826);
var G__12821_12828 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_12827) : ith_item__$1.call(null,i_12827));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__12821_12828) : f__$1.call(null,G__12821_12828));

var G__12829 = seq__12817_12823;
var G__12830 = chunk__12818_12824;
var G__12831 = count__12819_12825;
var G__12832 = (i__12820_12826 + (1));
seq__12817_12823 = G__12829;
chunk__12818_12824 = G__12830;
count__12819_12825 = G__12831;
i__12820_12826 = G__12832;
continue;
} else {
var temp__4425__auto___12833 = cljs.core.seq(seq__12817_12823);
if(temp__4425__auto___12833){
var seq__12817_12834__$1 = temp__4425__auto___12833;
if(cljs.core.chunked_seq_QMARK_(seq__12817_12834__$1)){
var c__7320__auto___12835 = cljs.core.chunk_first(seq__12817_12834__$1);
var G__12836 = cljs.core.chunk_rest(seq__12817_12834__$1);
var G__12837 = c__7320__auto___12835;
var G__12838 = cljs.core.count(c__7320__auto___12835);
var G__12839 = (0);
seq__12817_12823 = G__12836;
chunk__12818_12824 = G__12837;
count__12819_12825 = G__12838;
i__12820_12826 = G__12839;
continue;
} else {
var i_12840 = cljs.core.first(seq__12817_12834__$1);
var G__12822_12841 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_12840) : ith_item__$1.call(null,i_12840));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__12822_12841) : f__$1.call(null,G__12822_12841));

var G__12842 = cljs.core.next(seq__12817_12834__$1);
var G__12843 = null;
var G__12844 = (0);
var G__12845 = (0);
seq__12817_12823 = G__12842;
chunk__12818_12824 = G__12843;
count__12819_12825 = G__12844;
i__12820_12826 = G__12845;
continue;
}
} else {
}
}
break;
}

return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(cur_count__$1) : reset_pool_size_BANG_.call(null,cur_count__$1));
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
