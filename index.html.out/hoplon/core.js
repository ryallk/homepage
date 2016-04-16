// Compiled by ClojureScript 1.8.40 {}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljsjs.jquery');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



cljs.core.enable_console_print_BANG_.call(null);
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.call(null,(function (p1__8790_SHARP_,p2__8791_SHARP_){
return cljs.core.assoc.call(null,p1__8790_SHARP_,p2__8791_SHARP_.getAttribute("static-id"),p2__8791_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
/**
 * Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args8792 = [];
var len__7578__auto___8795 = arguments.length;
var i__7579__auto___8796 = (0);
while(true){
if((i__7579__auto___8796 < len__7578__auto___8795)){
args8792.push((arguments[i__7579__auto___8796]));

var G__8797 = (i__7579__auto___8796 + (1));
i__7579__auto___8796 = G__8797;
continue;
} else {
}
break;
}

var G__8794 = args8792.length;
switch (G__8794) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8792.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.call(null,ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.call(null);
f.call(null,init,cljs.core.deref.call(null,ref));

cljs.core.add_watch.call(null,ref,k,((function (k){
return (function (_,___$1,old,new$){
return f.call(null,old,new$);
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;
/**
 * Experimental.
 */
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__8801 = cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\//));
var f = cljs.core.nth.call(null,vec__8801,(0),null);
var more = cljs.core.nthnext.call(null,vec__8801,(1));
var vec__8802 = clojure.string.split.call(null,f,/\./,(2));
var f1 = cljs.core.nth.call(null,vec__8802,(0),null);
var f2 = cljs.core.nth.call(null,vec__8802,(1),null);
return clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.conj.call(null,more,clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("a708f23f10014e63a046cb4367645d52")].join(''),f2], null)))));
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var or__6509__auto__ = (function (){var and__6497__auto__ = cljs.core._EQ_.call(null,i,l);
if(and__6497__auto__){
return cljs.core.persistent_BANG_.call(null,ret);
} else {
return and__6497__auto__;
}
})();
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
var G__8803 = (i + (1));
var G__8804 = cljs.core.conj_BANG_.call(null,ret,x.item(i));
i = G__8803;
ret = G__8804;
continue;
}
break;
}
});
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(typeof x === 'string'){
return hoplon.core.$text.call(null,x);
} else {
if(typeof x === 'number'){
return hoplon.core.$text.call(null,[cljs.core.str(x)].join(''));
} else {
return x;

}
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,old,new$){
var new$__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,new$));
var new_QMARK_ = cljs.core.set.call(null,new$__$1);
var G__8815 = new$__$1;
var vec__8817 = G__8815;
var x = cljs.core.nth.call(null,vec__8817,(0),null);
var xs = cljs.core.nthnext.call(null,vec__8817,(1));
var G__8816 = hoplon.core.child_vec.call(null,this$);
var vec__8818 = G__8816;
var k = cljs.core.nth.call(null,vec__8818,(0),null);
var ks = cljs.core.nthnext.call(null,vec__8818,(1));
var kids = vec__8818;
var G__8815__$1 = G__8815;
var G__8816__$1 = G__8816;
while(true){
var vec__8819 = G__8815__$1;
var x__$1 = cljs.core.nth.call(null,vec__8819,(0),null);
var xs__$1 = cljs.core.nthnext.call(null,vec__8819,(1));
var vec__8820 = G__8816__$1;
var k__$1 = cljs.core.nth.call(null,vec__8820,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__8820,(1));
var kids__$1 = vec__8820;
if(cljs.core.truth_((function (){var or__6509__auto__ = x__$1;
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return k__$1;
}
})())){
var G__8821 = xs__$1;
var G__8822 = ((cljs.core._EQ_.call(null,x__$1,k__$1))?ks__$1:((cljs.core.not.call(null,k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,hoplon.core.__GT_node.call(null,x__$1));

return ks__$2;
})():((cljs.core.not.call(null,x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_(new_QMARK_.call(null,k__$1))){
} else {
hoplon.core.removeChild.call(this$,hoplon.core.__GT_node.call(null,k__$1));
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,hoplon.core.__GT_node.call(null,x__$1),hoplon.core.__GT_node.call(null,k__$1));

return kids__$2;
})()
)));
G__8815__$1 = G__8821;
G__8816__$1 = G__8822;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_8823 = cljs.core.atom.call(null,hoplon.core.child_vec.call(null,this$__$1));
this$__$1.hoplonKids = kids_8823;

hoplon.core.do_watch.call(null,kids_8823,cljs.core.partial.call(null,hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

var kids_8826 = kidfn.call(null,this$__$1);
var i_8827 = cljs.core.count.call(null,cljs.core.deref.call(null,kids_8826));
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,x__$1))){
hoplon.core.do_watch.call(null,x__$1,((function (kids_8826,i_8827,x__$1,this$__$1){
return (function (p1__8825_SHARP_,p2__8824_SHARP_){
return cljs.core.swap_BANG_.call(null,kids_8826,cljs.core.assoc,i_8827,p2__8824_SHARP_);
});})(kids_8826,i_8827,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.call(null,kids_8826,cljs.core.assoc,i_8827,x__$1);
}

return x__$1;
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__8828_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x__$1),p1__8828_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

if(cljs.core.not.call(null,y)){
cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.call(null,x__$1,y)){
cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__8829_SHARP_){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,p1__8829_SHARP_));
});})(x__$1,this$__$1))
);
} else {
}
}

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (y__$1,this$__$1){
return (function (p1__8830_SHARP_){
return cljs.core.mapv.call(null,((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__8830_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_8831 = cljs.core.keyword.call(null,k);
var attr_8832 = attrfn.call(null,this$__$1);
var has_QMARK__8833 = (function (){var and__6497__auto__ = attr_8832;
if(cljs.core.truth_(and__6497__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,attr_8832),kk_8831);
} else {
return and__6497__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__8833)){
cljs.core.swap_BANG_.call(null,attr_8832,cljs.core.assoc,kk_8831,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_.call(null,Element.prototype,(function (p1__8834_SHARP_){
return p1__8834_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_.call(null,Element.prototype,(function (p1__8835_SHARP_){
return p1__8835_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_.call(null,Element.prototype,(function (p1__8836_SHARP_){
return p1__8836_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_.call(null,Element.prototype,(function (p1__8837_SHARP_){
return p1__8837_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.ICustomElement = function(){};

hoplon.core._set_attribute_BANG_ = (function hoplon$core$_set_attribute_BANG_(this$,k,v){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3(this$,k,v);
} else {
var x__7172__auto__ = (((this$ == null))?null:this$);
var m__7173__auto__ = (hoplon.core._set_attribute_BANG_[goog.typeOf(x__7172__auto__)]);
if(!((m__7173__auto__ == null))){
return m__7173__auto__.call(null,this$,k,v);
} else {
var m__7173__auto____$1 = (hoplon.core._set_attribute_BANG_["_"]);
if(!((m__7173__auto____$1 == null))){
return m__7173__auto____$1.call(null,this$,k,v);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-set-attribute!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__7172__auto__ = (((this$ == null))?null:this$);
var m__7173__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__7172__auto__)]);
if(!((m__7173__auto__ == null))){
return m__7173__auto__.call(null,this$,child);
} else {
var m__7173__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__7173__auto____$1 == null))){
return m__7173__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__7172__auto__ = (((this$ == null))?null:this$);
var m__7173__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__7172__auto__)]);
if(!((m__7173__auto__ == null))){
return m__7173__auto__.call(null,this$,child);
} else {
var m__7173__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__7173__auto____$1 == null))){
return m__7173__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__7172__auto__ = (((this$ == null))?null:this$);
var m__7173__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__7172__auto__)]);
if(!((m__7173__auto__ == null))){
return m__7173__auto__.call(null,this$,new$,existing);
} else {
var m__7173__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__7173__auto____$1 == null))){
return m__7173__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__7172__auto__ = (((this$ == null))?null:this$);
var m__7173__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__7172__auto__)]);
if(!((m__7173__auto__ == null))){
return m__7173__auto__.call(null,this$,new$,existing);
} else {
var m__7173__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__7173__auto____$1 == null))){
return m__7173__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_.call(null,this$,child);
});
hoplon.core.set_attribute_BANG_ = (function hoplon$core$set_attribute_BANG_(this$,k,v){
return hoplon.core._set_attribute_BANG_.call(null,this$,k,v);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_.call(null,this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_.call(null,this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_.call(null,this$,new$,existing);
});
hoplon.core.is_ie8 = cljs.core.not.call(null,(window["Node"]));
hoplon.core.node_QMARK_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?(function (p1__8838_SHARP_){
return (p1__8838_SHARP_ instanceof Node);
}):(function (p1__8839_SHARP_){
try{return p1__8839_SHARP_.nodeType;
}catch (e8840){if((e8840 instanceof Error)){
var _ = e8840;
return null;
} else {
throw e8840;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__8841_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__8841_SHARP_);
}catch (e8842){if((e8842 instanceof Error)){
var _ = e8842;
return null;
} else {
throw e8842;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__8843_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__8843_SHARP_);
}catch (e8844){if((e8844 instanceof Error)){
var _ = e8844;
return null;
} else {
throw e8844;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args8845 = [];
var len__7578__auto___8849 = arguments.length;
var i__7579__auto___8850 = (0);
while(true){
if((i__7579__auto___8850 < len__7578__auto___8849)){
args8845.push((arguments[i__7579__auto___8850]));

var G__8851 = (i__7579__auto___8850 + (1));
i__7579__auto___8850 = G__8851;
continue;
} else {
}
break;
}

var G__8847 = args8845.length;
switch (G__8847) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8845.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.call(null,coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e8848){if((e8848 instanceof Error)){
var _ = e8848;
return not_found;
} else {
throw e8848;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args8853 = [];
var len__7578__auto___8856 = arguments.length;
var i__7579__auto___8857 = (0);
while(true){
if((i__7579__auto___8857 < len__7578__auto___8856)){
args8853.push((arguments[i__7579__auto___8857]));

var G__8858 = (i__7579__auto___8857 + (1));
i__7579__auto___8857 = G__8858;
continue;
} else {
}
break;
}

var G__8855 = args8853.length;
switch (G__8855) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8853.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.call(null,f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;
hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return f.call(null);
} else {
return hoplon.core.timeout.call(null,(function hoplon$core$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return f.call(null);
} else {
return hoplon.core.timeout.call(null,hoplon$core$when_dom_$_doit,(20));
}
}));
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var G__8868 = args;
var vec__8869 = G__8868;
var arg = cljs.core.nth.call(null,vec__8869,(0),null);
var args__$1 = cljs.core.nthnext.call(null,vec__8869,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__8868__$1 = G__8868;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__8870 = G__8868__$1;
var arg__$1 = cljs.core.nth.call(null,vec__8870,(0),null);
var args__$2 = cljs.core.nthnext.call(null,vec__8870,(1));
if(cljs.core.not.call(null,arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__8871 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__8868__$1,attr__$2,kids__$2,vec__8870,arg__$1,args__$2,attr,kids,G__8868,vec__8869,arg,args__$1){
return (function (p1__8860_SHARP_,p2__8861_SHARP_,p3__8862_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__8860_SHARP_,p2__8861_SHARP_,p3__8862_SHARP_);
});})(attr__$1,kids__$1,G__8868__$1,attr__$2,kids__$2,vec__8870,arg__$1,args__$2,attr,kids,G__8868,vec__8869,arg,args__$1))
,attr__$2,arg__$1);
var G__8872 = kids__$2;
var G__8873 = args__$2;
attr__$1 = G__8871;
kids__$1 = G__8872;
G__8868__$1 = G__8873;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__8874 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__8875 = kids__$2;
var G__8876 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__8874;
kids__$1 = G__8875;
G__8868__$1 = G__8876;
continue;
} else {
if(cljs.core.truth_(hoplon.core.seq_QMARK__STAR_.call(null,arg__$1))){
var G__8877 = attr__$2;
var G__8878 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__8879 = args__$2;
attr__$1 = G__8877;
kids__$1 = G__8878;
G__8868__$1 = G__8879;
continue;
} else {
if(cljs.core.truth_(hoplon.core.vector_QMARK__STAR_.call(null,arg__$1))){
var G__8880 = attr__$2;
var G__8881 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__8882 = args__$2;
attr__$1 = G__8880;
kids__$1 = G__8881;
G__8868__$1 = G__8882;
continue;
} else {
var G__8883 = attr__$2;
var G__8884 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__8885 = args__$2;
attr__$1 = G__8883;
kids__$1 = G__8884;
G__8868__$1 = G__8885;
continue;

}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
var this$__$1 = this$;
cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (this$__$2,k,v){
var this$__$3 = this$__$2;
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,v))){
hoplon.core.do_watch.call(null,v,((function (this$__$3,this$__$1){
return (function (p1__8887_SHARP_,p2__8886_SHARP_){
return hoplon.core.do_BANG_.call(null,this$__$3,k,p2__8886_SHARP_);
});})(this$__$3,this$__$1))
);
} else {
if(cljs.core.fn_QMARK_.call(null,v)){
hoplon.core.on_BANG_.call(null,this$__$3,k,v);
} else {
hoplon.core.do_BANG_.call(null,this$__$3,k,v);

}
}

return this$__$3;
});})(this$__$1))
,this$__$1,attr);

return this$__$1;
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__8888){
var vec__8894 = p__8888;
var child_cell = cljs.core.nth.call(null,vec__8894,(0),null);
var _ = cljs.core.nthnext.call(null,vec__8894,(1));
var kids = vec__8894;
var this$__$1 = this$;
var seq__8895_8899 = cljs.core.seq.call(null,cljs.core.flatten.call(null,kids));
var chunk__8896_8900 = null;
var count__8897_8901 = (0);
var i__8898_8902 = (0);
while(true){
if((i__8898_8902 < count__8897_8901)){
var x_8903 = cljs.core._nth.call(null,chunk__8896_8900,i__8898_8902);
var temp__4425__auto___8904 = hoplon.core.__GT_node.call(null,x_8903);
if(cljs.core.truth_(temp__4425__auto___8904)){
var x_8905__$1 = temp__4425__auto___8904;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_8905__$1);
} else {
}

var G__8906 = seq__8895_8899;
var G__8907 = chunk__8896_8900;
var G__8908 = count__8897_8901;
var G__8909 = (i__8898_8902 + (1));
seq__8895_8899 = G__8906;
chunk__8896_8900 = G__8907;
count__8897_8901 = G__8908;
i__8898_8902 = G__8909;
continue;
} else {
var temp__4425__auto___8910 = cljs.core.seq.call(null,seq__8895_8899);
if(temp__4425__auto___8910){
var seq__8895_8911__$1 = temp__4425__auto___8910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8895_8911__$1)){
var c__7320__auto___8912 = cljs.core.chunk_first.call(null,seq__8895_8911__$1);
var G__8913 = cljs.core.chunk_rest.call(null,seq__8895_8911__$1);
var G__8914 = c__7320__auto___8912;
var G__8915 = cljs.core.count.call(null,c__7320__auto___8912);
var G__8916 = (0);
seq__8895_8899 = G__8913;
chunk__8896_8900 = G__8914;
count__8897_8901 = G__8915;
i__8898_8902 = G__8916;
continue;
} else {
var x_8917 = cljs.core.first.call(null,seq__8895_8911__$1);
var temp__4425__auto___8918__$1 = hoplon.core.__GT_node.call(null,x_8917);
if(cljs.core.truth_(temp__4425__auto___8918__$1)){
var x_8919__$1 = temp__4425__auto___8918__$1;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_8919__$1);
} else {
}

var G__8920 = cljs.core.next.call(null,seq__8895_8911__$1);
var G__8921 = null;
var G__8922 = (0);
var G__8923 = (0);
seq__8895_8899 = G__8920;
chunk__8896_8900 = G__8921;
count__8897_8901 = G__8922;
i__8898_8902 = G__8923;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});

Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__8930__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__8925 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__8925,(0),null);
var kids = cljs.core.nth.call(null,vec__8925,(1),null);
var G__8926 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__8926,attr);

hoplon.core.add_children_BANG_.call(null,G__8926,kids);

return G__8926;
};
var G__8930 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__8931__i = 0, G__8931__a = new Array(arguments.length -  1);
while (G__8931__i < G__8931__a.length) {G__8931__a[G__8931__i] = arguments[G__8931__i + 1]; ++G__8931__i;}
  args = new cljs.core.IndexedSeq(G__8931__a,0);
} 
return G__8930__delegate.call(this,self__,args);};
G__8930.cljs$lang$maxFixedArity = 1;
G__8930.cljs$lang$applyTo = (function (arglist__8932){
var self__ = cljs.core.first(arglist__8932);
var args = cljs.core.rest(arglist__8932);
return G__8930__delegate(self__,args);
});
G__8930.cljs$core$IFn$_invoke$arity$variadic = G__8930__delegate;
return G__8930;
})()
;

Element.prototype.apply = (function (self__,args8924){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8924)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__8933__delegate = function (args){
var this$ = this;
var vec__8927 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__8927,(0),null);
var kids = cljs.core.nth.call(null,vec__8927,(1),null);
var G__8928 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__8928,attr);

hoplon.core.add_children_BANG_.call(null,G__8928,kids);

return G__8928;
};
var G__8933 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8934__i = 0, G__8934__a = new Array(arguments.length -  0);
while (G__8934__i < G__8934__a.length) {G__8934__a[G__8934__i] = arguments[G__8934__i + 0]; ++G__8934__i;}
  args = new cljs.core.IndexedSeq(G__8934__a,0);
} 
return G__8933__delegate.call(this,args);};
G__8933.cljs$lang$maxFixedArity = 0;
G__8933.cljs$lang$applyTo = (function (arglist__8935){
var args = cljs.core.seq(arglist__8935);
return G__8933__delegate(args);
});
G__8933.cljs$core$IFn$_invoke$arity$variadic = G__8933__delegate;
return G__8933;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 = (function (this$,k,v){
var this$__$1 = this;
var _ = null;
var k_8936__$1 = cljs.core.name.call(null,k);
var e_8937 = jQuery(this$__$1);
if(cljs.core._EQ_.call(null,false,v)){
e_8937.removeAttr(k_8936__$1);
} else {
e_8937.attr(k_8936__$1,((cljs.core._EQ_.call(null,true,v))?k_8936__$1:v));
}

return _;
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not.call(null,hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e8929){if((e8929 instanceof Error)){
var _ = e8929;
return null;
} else {
throw e8929;

}
}}
});

Element.prototype.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.make_singleton_ctor = (function hoplon$core$make_singleton_ctor(tag){
return (function() { 
var G__8940__delegate = function (args){
var vec__8939 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__8939,(0),null);
var kids = cljs.core.nth.call(null,vec__8939,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
hoplon.core.add_attributes_BANG_.call(null,elem,attrs);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(attrs))){
elem.hoplonKids = null;

elem.innerHTML = null;

return hoplon.core.add_children_BANG_.call(null,elem,kids);
} else {
return null;
}
};
var G__8940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8941__i = 0, G__8941__a = new Array(arguments.length -  0);
while (G__8941__i < G__8941__a.length) {G__8941__a[G__8941__i] = arguments[G__8941__i + 0]; ++G__8941__i;}
  args = new cljs.core.IndexedSeq(G__8941__a,0);
} 
return G__8940__delegate.call(this,args);};
G__8940.cljs$lang$maxFixedArity = 0;
G__8940.cljs$lang$applyTo = (function (arglist__8942){
var args = cljs.core.seq(arglist__8942);
return G__8940__delegate(args);
});
G__8940.cljs$core$IFn$_invoke$arity$variadic = G__8940__delegate;
return G__8940;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__8943__delegate = function (args){
return cljs.core.apply.call(null,hoplon.core.ensure_kids_BANG_.call(null,document.createElement(tag)),args);
};
var G__8943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8944__i = 0, G__8944__a = new Array(arguments.length -  0);
while (G__8944__i < G__8944__a.length) {G__8944__a[G__8944__i] = arguments[G__8944__i + 0]; ++G__8944__i;}
  args = new cljs.core.IndexedSeq(G__8944__a,0);
} 
return G__8943__delegate.call(this,args);};
G__8943.cljs$lang$maxFixedArity = 0;
G__8943.cljs$lang$applyTo = (function (arglist__8945){
var args = cljs.core.seq(arglist__8945);
return G__8943__delegate(args);
});
G__8943.cljs$core$IFn$_invoke$arity$variadic = G__8943__delegate;
return G__8943;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__7585__auto__ = [];
var len__7578__auto___8948 = arguments.length;
var i__7579__auto___8949 = (0);
while(true){
if((i__7579__auto___8949 < len__7578__auto___8948)){
args__7585__auto__.push((arguments[i__7579__auto___8949]));

var G__8950 = (i__7579__auto___8949 + (1));
i__7579__auto___8949 = G__8950;
continue;
} else {
}
break;
}

var argseq__7586__auto__ = ((((0) < args__7585__auto__.length))?(new cljs.core.IndexedSeq(args__7585__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__7586__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__8947 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__8947,(0),null);
var _ = cljs.core.nth.call(null,vec__8947,(1),null);
return hoplon.core.add_attributes_BANG_.call(null,(document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq8946){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8946));
});
hoplon.core.body = hoplon.core.make_singleton_ctor.call(null,"body");
hoplon.core.head = hoplon.core.make_singleton_ctor.call(null,"head");
hoplon.core.a = hoplon.core.make_elem_ctor.call(null,"a");
hoplon.core.abbr = hoplon.core.make_elem_ctor.call(null,"abbr");
hoplon.core.acronym = hoplon.core.make_elem_ctor.call(null,"acronym");
hoplon.core.address = hoplon.core.make_elem_ctor.call(null,"address");
hoplon.core.applet = hoplon.core.make_elem_ctor.call(null,"applet");
hoplon.core.area = hoplon.core.make_elem_ctor.call(null,"area");
hoplon.core.article = hoplon.core.make_elem_ctor.call(null,"article");
hoplon.core.aside = hoplon.core.make_elem_ctor.call(null,"aside");
hoplon.core.audio = hoplon.core.make_elem_ctor.call(null,"audio");
hoplon.core.b = hoplon.core.make_elem_ctor.call(null,"b");
hoplon.core.base = hoplon.core.make_elem_ctor.call(null,"base");
hoplon.core.basefont = hoplon.core.make_elem_ctor.call(null,"basefont");
hoplon.core.bdi = hoplon.core.make_elem_ctor.call(null,"bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor.call(null,"bdo");
hoplon.core.big = hoplon.core.make_elem_ctor.call(null,"big");
hoplon.core.blockquote = hoplon.core.make_elem_ctor.call(null,"blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor.call(null,"br");
hoplon.core.button = hoplon.core.make_elem_ctor.call(null,"button");
hoplon.core.canvas = hoplon.core.make_elem_ctor.call(null,"canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor.call(null,"caption");
hoplon.core.center = hoplon.core.make_elem_ctor.call(null,"center");
hoplon.core.cite = hoplon.core.make_elem_ctor.call(null,"cite");
hoplon.core.code = hoplon.core.make_elem_ctor.call(null,"code");
hoplon.core.col = hoplon.core.make_elem_ctor.call(null,"col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor.call(null,"colgroup");
hoplon.core.command = hoplon.core.make_elem_ctor.call(null,"command");
hoplon.core.data = hoplon.core.make_elem_ctor.call(null,"data");
hoplon.core.datalist = hoplon.core.make_elem_ctor.call(null,"datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor.call(null,"dd");
hoplon.core.del = hoplon.core.make_elem_ctor.call(null,"del");
hoplon.core.details = hoplon.core.make_elem_ctor.call(null,"details");
hoplon.core.dfn = hoplon.core.make_elem_ctor.call(null,"dfn");
hoplon.core.dialog = hoplon.core.make_elem_ctor.call(null,"dialog");
hoplon.core.dir = hoplon.core.make_elem_ctor.call(null,"dir");
hoplon.core.div = hoplon.core.make_elem_ctor.call(null,"div");
hoplon.core.dl = hoplon.core.make_elem_ctor.call(null,"dl");
hoplon.core.dt = hoplon.core.make_elem_ctor.call(null,"dt");
hoplon.core.em = hoplon.core.make_elem_ctor.call(null,"em");
hoplon.core.embed = hoplon.core.make_elem_ctor.call(null,"embed");
hoplon.core.eventsource = hoplon.core.make_elem_ctor.call(null,"eventsource");
hoplon.core.fieldset = hoplon.core.make_elem_ctor.call(null,"fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor.call(null,"figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor.call(null,"figure");
hoplon.core.font = hoplon.core.make_elem_ctor.call(null,"font");
hoplon.core.footer = hoplon.core.make_elem_ctor.call(null,"footer");
hoplon.core.form = hoplon.core.make_elem_ctor.call(null,"form");
hoplon.core.frame = hoplon.core.make_elem_ctor.call(null,"frame");
hoplon.core.frameset = hoplon.core.make_elem_ctor.call(null,"frameset");
hoplon.core.h1 = hoplon.core.make_elem_ctor.call(null,"h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor.call(null,"h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor.call(null,"h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor.call(null,"h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor.call(null,"h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor.call(null,"h6");
hoplon.core.header = hoplon.core.make_elem_ctor.call(null,"header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor.call(null,"hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor.call(null,"hr");
hoplon.core.i = hoplon.core.make_elem_ctor.call(null,"i");
hoplon.core.iframe = hoplon.core.make_elem_ctor.call(null,"iframe");
hoplon.core.img = hoplon.core.make_elem_ctor.call(null,"img");
hoplon.core.input = hoplon.core.make_elem_ctor.call(null,"input");
hoplon.core.ins = hoplon.core.make_elem_ctor.call(null,"ins");
hoplon.core.isindex = hoplon.core.make_elem_ctor.call(null,"isindex");
hoplon.core.kbd = hoplon.core.make_elem_ctor.call(null,"kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor.call(null,"keygen");
hoplon.core.label = hoplon.core.make_elem_ctor.call(null,"label");
hoplon.core.legend = hoplon.core.make_elem_ctor.call(null,"legend");
hoplon.core.li = hoplon.core.make_elem_ctor.call(null,"li");
hoplon.core.link = hoplon.core.make_elem_ctor.call(null,"link");
hoplon.core.main = hoplon.core.make_elem_ctor.call(null,"main");
hoplon.core.html_map = hoplon.core.make_elem_ctor.call(null,"map");
hoplon.core.mark = hoplon.core.make_elem_ctor.call(null,"mark");
hoplon.core.menu = hoplon.core.make_elem_ctor.call(null,"menu");
hoplon.core.menuitem = hoplon.core.make_elem_ctor.call(null,"menuitem");
hoplon.core.html_meta = hoplon.core.make_elem_ctor.call(null,"meta");
hoplon.core.meter = hoplon.core.make_elem_ctor.call(null,"meter");
hoplon.core.nav = hoplon.core.make_elem_ctor.call(null,"nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor.call(null,"noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor.call(null,"noscript");
hoplon.core.object = hoplon.core.make_elem_ctor.call(null,"object");
hoplon.core.ol = hoplon.core.make_elem_ctor.call(null,"ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor.call(null,"optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor.call(null,"option");
hoplon.core.output = hoplon.core.make_elem_ctor.call(null,"output");
hoplon.core.p = hoplon.core.make_elem_ctor.call(null,"p");
hoplon.core.param = hoplon.core.make_elem_ctor.call(null,"param");
hoplon.core.pre = hoplon.core.make_elem_ctor.call(null,"pre");
hoplon.core.progress = hoplon.core.make_elem_ctor.call(null,"progress");
hoplon.core.q = hoplon.core.make_elem_ctor.call(null,"q");
hoplon.core.rp = hoplon.core.make_elem_ctor.call(null,"rp");
hoplon.core.rt = hoplon.core.make_elem_ctor.call(null,"rt");
hoplon.core.rtc = hoplon.core.make_elem_ctor.call(null,"rtc");
hoplon.core.ruby = hoplon.core.make_elem_ctor.call(null,"ruby");
hoplon.core.s = hoplon.core.make_elem_ctor.call(null,"s");
hoplon.core.samp = hoplon.core.make_elem_ctor.call(null,"samp");
hoplon.core.script = hoplon.core.make_elem_ctor.call(null,"script");
hoplon.core.section = hoplon.core.make_elem_ctor.call(null,"section");
hoplon.core.select = hoplon.core.make_elem_ctor.call(null,"select");
hoplon.core.small = hoplon.core.make_elem_ctor.call(null,"small");
hoplon.core.source = hoplon.core.make_elem_ctor.call(null,"source");
hoplon.core.span = hoplon.core.make_elem_ctor.call(null,"span");
hoplon.core.strike = hoplon.core.make_elem_ctor.call(null,"strike");
hoplon.core.strong = hoplon.core.make_elem_ctor.call(null,"strong");
hoplon.core.style = hoplon.core.make_elem_ctor.call(null,"style");
hoplon.core.sub = hoplon.core.make_elem_ctor.call(null,"sub");
hoplon.core.summary = hoplon.core.make_elem_ctor.call(null,"summary");
hoplon.core.sup = hoplon.core.make_elem_ctor.call(null,"sup");
hoplon.core.table = hoplon.core.make_elem_ctor.call(null,"table");
hoplon.core.tbody = hoplon.core.make_elem_ctor.call(null,"tbody");
hoplon.core.td = hoplon.core.make_elem_ctor.call(null,"td");
hoplon.core.textarea = hoplon.core.make_elem_ctor.call(null,"textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor.call(null,"tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor.call(null,"th");
hoplon.core.thead = hoplon.core.make_elem_ctor.call(null,"thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor.call(null,"time");
hoplon.core.title = hoplon.core.make_elem_ctor.call(null,"title");
hoplon.core.tr = hoplon.core.make_elem_ctor.call(null,"tr");
hoplon.core.track = hoplon.core.make_elem_ctor.call(null,"track");
hoplon.core.tt = hoplon.core.make_elem_ctor.call(null,"tt");
hoplon.core.u = hoplon.core.make_elem_ctor.call(null,"u");
hoplon.core.ul = hoplon.core.make_elem_ctor.call(null,"ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor.call(null,"var");
hoplon.core.video = hoplon.core.make_elem_ctor.call(null,"video");
hoplon.core.wbr = hoplon.core.make_elem_ctor.call(null,"wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__8951_SHARP_){
return document.createTextNode(p1__8951_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__8952_SHARP_){
return document.createComment(p1__8952_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = new cljs.core.Keyword("hoplon.core","-->","hoplon.core/-->",1031510657);
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return jQuery((function (){
return setTimeout((function (){
return f.call(null);
}),(0));
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return jQuery(document).trigger("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return jQuery(document).on("page-load",f);
});
hoplon.core.add_initfn_BANG_.call(null,(function (){
return jQuery("body").on("submit",(function (p1__8953_SHARP_){
var e = jQuery(p1__8953_SHARP_.target);
if(cljs.core.truth_((function (){var or__6509__auto__ = e.attr("action");
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__8953_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(var_args){
var args8954 = [];
var len__7578__auto___8957 = arguments.length;
var i__7579__auto___8958 = (0);
while(true){
if((i__7579__auto___8958 < len__7578__auto___8957)){
args8954.push((arguments[i__7579__auto___8958]));

var G__8959 = (i__7579__auto___8958 + (1));
i__7579__auto___8958 = G__8959;
continue;
} else {
}
break;
}

var G__8956 = args8954.length;
switch (G__8956) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8954.length)].join('')));

}
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.call(null,v__$1,hoplon.core.text_val_BANG_.call(null,e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.core.text_val_BANG_.cljs$lang$maxFixedArity = 2;
hoplon.core.check_val_BANG_ = (function hoplon$core$check_val_BANG_(var_args){
var args8961 = [];
var len__7578__auto___8964 = arguments.length;
var i__7579__auto___8965 = (0);
while(true){
if((i__7579__auto___8965 < len__7578__auto___8964)){
args8961.push((arguments[i__7579__auto___8965]));

var G__8966 = (i__7579__auto___8965 + (1));
i__7579__auto___8965 = G__8966;
continue;
} else {
}
break;
}

var G__8963 = args8961.length;
switch (G__8963) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8961.length)].join('')));

}
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$.call(null,v));
});

hoplon.core.check_val_BANG_.cljs$lang$maxFixedArity = 2;
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__7433__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7434__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7435__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7436__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7437__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","do!"),((function (method_table__7433__auto__,prefer_table__7434__auto__,method_cache__7435__auto__,cached_hierarchy__7436__auto__,hierarchy__7437__auto__){
return (function (elem,key,val){
return key;
});})(method_table__7433__auto__,prefer_table__7434__auto__,method_cache__7435__auto__,cached_hierarchy__7436__auto__,hierarchy__7437__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__7437__auto__,method_table__7433__auto__,prefer_table__7434__auto__,method_cache__7435__auto__,cached_hierarchy__7436__auto__));
})();
}
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,key,val){
return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function() { 
var G__8968__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__8968 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__8969__i = 0, G__8969__a = new Array(arguments.length -  2);
while (G__8969__i < G__8969__a.length) {G__8969__a[G__8969__i] = arguments[G__8969__i + 2]; ++G__8969__i;}
  args = new cljs.core.IndexedSeq(G__8969__a,0);
} 
return G__8968__delegate.call(this,elem,_,args);};
G__8968.cljs$lang$maxFixedArity = 2;
G__8968.cljs$lang$applyTo = (function (arglist__8970){
var elem = cljs.core.first(arglist__8970);
arglist__8970 = cljs.core.next(arglist__8970);
var _ = cljs.core.first(arglist__8970);
var args = cljs.core.rest(arglist__8970);
return G__8968__delegate(elem,_,args);
});
G__8968.cljs$core$IFn$_invoke$arity$variadic = G__8968__delegate;
return G__8968;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__8971 = cljs.core.seq.call(null,kvs);
var chunk__8972 = null;
var count__8973 = (0);
var i__8974 = (0);
while(true){
if((i__8974 < count__8973)){
var vec__8975 = cljs.core._nth.call(null,chunk__8972,i__8974);
var k = cljs.core.nth.call(null,vec__8975,(0),null);
var v = cljs.core.nth.call(null,vec__8975,(1),null);
var k_8977__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_8977__$1);
} else {
e.attr(k_8977__$1,((cljs.core._EQ_.call(null,true,v))?k_8977__$1:v));
}

var G__8978 = seq__8971;
var G__8979 = chunk__8972;
var G__8980 = count__8973;
var G__8981 = (i__8974 + (1));
seq__8971 = G__8978;
chunk__8972 = G__8979;
count__8973 = G__8980;
i__8974 = G__8981;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8971);
if(temp__4425__auto__){
var seq__8971__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8971__$1)){
var c__7320__auto__ = cljs.core.chunk_first.call(null,seq__8971__$1);
var G__8982 = cljs.core.chunk_rest.call(null,seq__8971__$1);
var G__8983 = c__7320__auto__;
var G__8984 = cljs.core.count.call(null,c__7320__auto__);
var G__8985 = (0);
seq__8971 = G__8982;
chunk__8972 = G__8983;
count__8973 = G__8984;
i__8974 = G__8985;
continue;
} else {
var vec__8976 = cljs.core.first.call(null,seq__8971__$1);
var k = cljs.core.nth.call(null,vec__8976,(0),null);
var v = cljs.core.nth.call(null,vec__8976,(1),null);
var k_8986__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_8986__$1);
} else {
e.attr(k_8986__$1,((cljs.core._EQ_.call(null,true,v))?k_8986__$1:v));
}

var G__8987 = cljs.core.next.call(null,seq__8971__$1);
var G__8988 = null;
var G__8989 = (0);
var G__8990 = (0);
seq__8971 = G__8987;
chunk__8972 = G__8988;
count__8973 = G__8989;
i__8974 = G__8990;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__8991_SHARP_){
return cljs.core.zipmap.call(null,p1__8991_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var seq__8992 = cljs.core.seq.call(null,clmap);
var chunk__8993 = null;
var count__8994 = (0);
var i__8995 = (0);
while(true){
if((i__8995 < count__8994)){
var vec__8996 = cljs.core._nth.call(null,chunk__8993,i__8995);
var c = cljs.core.nth.call(null,vec__8996,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__8996,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__8998 = seq__8992;
var G__8999 = chunk__8993;
var G__9000 = count__8994;
var G__9001 = (i__8995 + (1));
seq__8992 = G__8998;
chunk__8993 = G__8999;
count__8994 = G__9000;
i__8995 = G__9001;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8992);
if(temp__4425__auto__){
var seq__8992__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8992__$1)){
var c__7320__auto__ = cljs.core.chunk_first.call(null,seq__8992__$1);
var G__9002 = cljs.core.chunk_rest.call(null,seq__8992__$1);
var G__9003 = c__7320__auto__;
var G__9004 = cljs.core.count.call(null,c__7320__auto__);
var G__9005 = (0);
seq__8992 = G__9002;
chunk__8993 = G__9003;
count__8994 = G__9004;
i__8995 = G__9005;
continue;
} else {
var vec__8997 = cljs.core.first.call(null,seq__8992__$1);
var c = cljs.core.nth.call(null,vec__8997,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__8997,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9006 = cljs.core.next.call(null,seq__8992__$1);
var G__9007 = null;
var G__9008 = (0);
var G__9009 = (0);
seq__8992 = G__9006;
chunk__8993 = G__9007;
count__8994 = G__9008;
i__8995 = G__9009;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__9010 = cljs.core.seq.call(null,kvs);
var chunk__9011 = null;
var count__9012 = (0);
var i__9013 = (0);
while(true){
if((i__9013 < count__9012)){
var vec__9014 = cljs.core._nth.call(null,chunk__9011,i__9013);
var k = cljs.core.nth.call(null,vec__9014,(0),null);
var v = cljs.core.nth.call(null,vec__9014,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9016 = seq__9010;
var G__9017 = chunk__9011;
var G__9018 = count__9012;
var G__9019 = (i__9013 + (1));
seq__9010 = G__9016;
chunk__9011 = G__9017;
count__9012 = G__9018;
i__9013 = G__9019;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9010);
if(temp__4425__auto__){
var seq__9010__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9010__$1)){
var c__7320__auto__ = cljs.core.chunk_first.call(null,seq__9010__$1);
var G__9020 = cljs.core.chunk_rest.call(null,seq__9010__$1);
var G__9021 = c__7320__auto__;
var G__9022 = cljs.core.count.call(null,c__7320__auto__);
var G__9023 = (0);
seq__9010 = G__9020;
chunk__9011 = G__9021;
count__9012 = G__9022;
i__9013 = G__9023;
continue;
} else {
var vec__9015 = cljs.core.first.call(null,seq__9010__$1);
var k = cljs.core.nth.call(null,vec__9015,(0),null);
var v = cljs.core.nth.call(null,vec__9015,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9024 = cljs.core.next.call(null,seq__9010__$1);
var G__9025 = null;
var G__9026 = (0);
var G__9027 = (0);
seq__9010 = G__9024;
chunk__9011 = G__9025;
count__9012 = G__9026;
i__9013 = G__9027;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
}),(0));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (elem,_,___$1){
return jQuery(elem).select();
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",1107982934),(function (elem,_,v){
if(cljs.core.truth_(v)){
hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",234677911),v);

return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",1147833503),v);
} else {
return null;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (elem,_,v){
return jQuery(elem).html(v);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__7433__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7434__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7435__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7436__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7437__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","on!"),((function (method_table__7433__auto__,prefer_table__7434__auto__,method_cache__7435__auto__,cached_hierarchy__7436__auto__,hierarchy__7437__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__7433__auto__,prefer_table__7434__auto__,method_cache__7435__auto__,cached_hierarchy__7436__auto__,hierarchy__7437__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__7437__auto__,method_table__7433__auto__,prefer_table__7434__auto__,method_cache__7435__auto__,cached_hierarchy__7436__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return jQuery(this$__$1.target).val();
});
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template tpl is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.call(null,cljs.core.List.EMPTY);
var items_seq = javelin.core.formula.call(null,((function (on_deck){
return (function (G__9039,G__9040){
return G__9039.call(null,G__9040);
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__9028_SHARP_){
return javelin.core.formula.call(null,((function (on_deck,items_seq){
return (function (G__9042,G__9043,G__9041){
return G__9041.call(null,G__9042,G__9043);
});})(on_deck,items_seq))
).call(null,items_seq,p1__9028_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__9029_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__9029_SHARP_));
cljs.core.swap_BANG_.call(null,p1__9029_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.call(null,cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.call(null,items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count.call(null,old_items);
var new$ = cljs.core.count.call(null,new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__9044 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__9045 = null;
var count__9046 = (0);
var i__9047 = (0);
while(true){
if((i__9047 < count__9046)){
var i = cljs.core._nth.call(null,chunk__9045,i__9047);
var e_9048 = (function (){var or__6509__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_9048);

var G__9049 = seq__9044;
var G__9050 = chunk__9045;
var G__9051 = count__9046;
var G__9052 = (i__9047 + (1));
seq__9044 = G__9049;
chunk__9045 = G__9050;
count__9046 = G__9051;
i__9047 = G__9052;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9044);
if(temp__4425__auto__){
var seq__9044__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9044__$1)){
var c__7320__auto__ = cljs.core.chunk_first.call(null,seq__9044__$1);
var G__9053 = cljs.core.chunk_rest.call(null,seq__9044__$1);
var G__9054 = c__7320__auto__;
var G__9055 = cljs.core.count.call(null,c__7320__auto__);
var G__9056 = (0);
seq__9044 = G__9053;
chunk__9045 = G__9054;
count__9046 = G__9055;
i__9047 = G__9056;
continue;
} else {
var i = cljs.core.first.call(null,seq__9044__$1);
var e_9057 = (function (){var or__6509__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_9057);

var G__9058 = cljs.core.next.call(null,seq__9044__$1);
var G__9059 = null;
var G__9060 = (0);
var G__9061 = (0);
seq__9044 = G__9058;
chunk__9045 = G__9059;
count__9046 = G__9060;
i__9047 = G__9061;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__7423__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__7423__auto__)){
var e_9062 = cljs.core.peek.call(null,cljs.core.deref.call(null,current));
cljs.core.swap_BANG_.call(null,current,cljs.core.pop);

cljs.core.swap_BANG_.call(null,on_deck,cljs.core.conj,e_9062);

var G__9063 = (_ + (1));
_ = G__9063;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
/**
 * Defines a cell whose value is the URI fragment.
 */
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__7585__auto__ = [];
var len__7578__auto___9070 = arguments.length;
var i__7579__auto___9071 = (0);
while(true){
if((i__7579__auto___9071 < len__7578__auto___9070)){
args__7585__auto__.push((arguments[i__7579__auto___9071]));

var G__9072 = (i__7579__auto___9071 + (1));
i__7579__auto___9071 = G__9072;
continue;
} else {
}
break;
}

var argseq__7586__auto__ = ((((0) < args__7585__auto__.length))?(new cljs.core.IndexedSeq(args__7585__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__7586__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__9065){
var vec__9066 = p__9065;
var default$ = cljs.core.nth.call(null,vec__9066,(0),null);
var c = javelin.core.cell.call(null,window.location.hash);
var _ = javelin.core.formula.call(null,((function (c,vec__9066,default$){
return (function (G__9067,G__9069,G__9068){
var or__6509__auto__ = (function (){var and__6497__auto__ = G__9067.call(null,G__9068);
if(cljs.core.truth_(and__6497__auto__)){
return G__9068;
} else {
return and__6497__auto__;
}
})();
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return G__9069;
}
});})(c,vec__9066,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__9066,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__9066,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq9064){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9064));
});

//# sourceMappingURL=core.js.map