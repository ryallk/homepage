// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



cljs.core.enable_console_print_BANG_();
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__13169_SHARP_,p2__13170_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13169_SHARP_,p2__13170_SHARP_.getAttribute("static-id"),p2__13170_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
/**
 * Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args13171 = [];
var len__7578__auto___13176 = arguments.length;
var i__7579__auto___13177 = (0);
while(true){
if((i__7579__auto___13177 < len__7578__auto___13176)){
args13171.push((arguments[i__7579__auto___13177]));

var G__13178 = (i__7579__auto___13177 + (1));
i__7579__auto___13177 = G__13178;
continue;
} else {
}
break;
}

var G__13173 = args13171.length;
switch (G__13173) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13171.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__13174_13180 = init;
var G__13175_13181 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13174_13180,G__13175_13181) : f.call(null,G__13174_13180,G__13175_13181));

cljs.core.add_watch(ref,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;
/**
 * Experimental.
 */
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__13184 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13184,(0),null);
var more = cljs.core.nthnext(vec__13184,(1));
var vec__13185 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13185,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13185,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("7ff88f5999ab48778a10527703c7348c")].join(''),f2], null)))));
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__6509__auto__ = (function (){var and__6497__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__6497__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__6497__auto__;
}
})();
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
var G__13186 = (i + (1));
var G__13187 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__13186;
ret = G__13187;
continue;
}
break;
}
});
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(typeof x === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(x) : hoplon.core.$text.call(null,x));
} else {
if(typeof x === 'number'){
var G__13189 = [cljs.core.str(x)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__13189) : hoplon.core.$text.call(null,G__13189));
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
var new$__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(new$));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__13200 = new$__$1;
var vec__13202 = G__13200;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13202,(0),null);
var xs = cljs.core.nthnext(vec__13202,(1));
var G__13201 = hoplon.core.child_vec(this$);
var vec__13203 = G__13201;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13203,(0),null);
var ks = cljs.core.nthnext(vec__13203,(1));
var kids = vec__13203;
var G__13200__$1 = G__13200;
var G__13201__$1 = G__13201;
while(true){
var vec__13204 = G__13200__$1;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13204,(0),null);
var xs__$1 = cljs.core.nthnext(vec__13204,(1));
var vec__13205 = G__13201__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13205,(0),null);
var ks__$1 = cljs.core.nthnext(vec__13205,(1));
var kids__$1 = vec__13205;
if(cljs.core.truth_((function (){var or__6509__auto__ = x__$1;
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return k__$1;
}
})())){
var G__13206 = xs__$1;
var G__13207 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,hoplon.core.__GT_node(x__$1));

return ks__$2;
})():((cljs.core.not(x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(k__$1) : new_QMARK_.call(null,k__$1)))){
} else {
hoplon.core.removeChild.call(this$,hoplon.core.__GT_node(k__$1));
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,hoplon.core.__GT_node(x__$1),hoplon.core.__GT_node(k__$1));

return kids__$2;
})()
)));
G__13200__$1 = G__13206;
G__13201__$1 = G__13207;
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
var kids_13210 = (function (){var G__13209 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13209) : cljs.core.atom.call(null,G__13209));
})();
this$__$1.hoplonKids = kids_13210;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_13210,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

var kids_13213 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_13214 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_13213) : cljs.core.deref.call(null,kids_13213)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_13213,i_13214,x__$1,this$__$1){
return (function (p1__13212_SHARP_,p2__13211_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_13213,cljs.core.assoc,i_13214,p2__13211_SHARP_);
});})(kids_13213,i_13214,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_13213,cljs.core.assoc,i_13214,x__$1);
}

return x__$1;
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__13215_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__13215_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

if(cljs.core.not(y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__13216_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__13216_SHARP_], 0)));
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
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (y__$1,this$__$1){
return (function (p1__13217_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__13217_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_13218 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_13219 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__13220 = (function (){var and__6497__auto__ = attr_13219;
if(cljs.core.truth_(and__6497__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_13219) : cljs.core.deref.call(null,attr_13219)),kk_13218);
} else {
return and__6497__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__13220)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_13219,cljs.core.assoc,kk_13218,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__13221_SHARP_){
return p1__13221_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__13222_SHARP_){
return p1__13222_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__13223_SHARP_){
return p1__13223_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__13224_SHARP_){
return p1__13224_SHARP_.hoplonKids;
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
return (m__7173__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7173__auto__.cljs$core$IFn$_invoke$arity$3(this$,k,v) : m__7173__auto__.call(null,this$,k,v));
} else {
var m__7173__auto____$1 = (hoplon.core._set_attribute_BANG_["_"]);
if(!((m__7173__auto____$1 == null))){
return (m__7173__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7173__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,k,v) : m__7173__auto____$1.call(null,this$,k,v));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-attribute!",this$);
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
return (m__7173__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7173__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7173__auto__.call(null,this$,child));
} else {
var m__7173__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__7173__auto____$1 == null))){
return (m__7173__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7173__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7173__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-append-child!",this$);
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
return (m__7173__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7173__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7173__auto__.call(null,this$,child));
} else {
var m__7173__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__7173__auto____$1 == null))){
return (m__7173__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7173__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7173__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-remove-child!",this$);
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
return (m__7173__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7173__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7173__auto__.call(null,this$,new$,existing));
} else {
var m__7173__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__7173__auto____$1 == null))){
return (m__7173__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7173__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7173__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-replace-child!",this$);
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
return (m__7173__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7173__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7173__auto__.call(null,this$,new$,existing));
} else {
var m__7173__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__7173__auto____$1 == null))){
return (m__7173__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7173__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7173__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(this$,child);
});
hoplon.core.set_attribute_BANG_ = (function hoplon$core$set_attribute_BANG_(this$,k,v){
return hoplon.core._set_attribute_BANG_(this$,k,v);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(this$,new$,existing);
});
hoplon.core.is_ie8 = cljs.core.not((window["Node"]));
hoplon.core.node_QMARK_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__13225_SHARP_){
return (p1__13225_SHARP_ instanceof Node);
}):(function (p1__13226_SHARP_){
try{return p1__13226_SHARP_.nodeType;
}catch (e13227){if((e13227 instanceof Error)){
var _ = e13227;
return null;
} else {
throw e13227;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__13228_SHARP_){
try{return cljs.core.vector_QMARK_(p1__13228_SHARP_);
}catch (e13229){if((e13229 instanceof Error)){
var _ = e13229;
return null;
} else {
throw e13229;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__13230_SHARP_){
try{return cljs.core.seq_QMARK_(p1__13230_SHARP_);
}catch (e13231){if((e13231 instanceof Error)){
var _ = e13231;
return null;
} else {
throw e13231;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args13232 = [];
var len__7578__auto___13236 = arguments.length;
var i__7579__auto___13237 = (0);
while(true){
if((i__7579__auto___13237 < len__7578__auto___13236)){
args13232.push((arguments[i__7579__auto___13237]));

var G__13238 = (i__7579__auto___13237 + (1));
i__7579__auto___13237 = G__13238;
continue;
} else {
}
break;
}

var G__13234 = args13232.length;
switch (G__13234) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13232.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e13235){if((e13235 instanceof Error)){
var _ = e13235;
return not_found;
} else {
throw e13235;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args13240 = [];
var len__7578__auto___13243 = arguments.length;
var i__7579__auto___13244 = (0);
while(true){
if((i__7579__auto___13244 < len__7578__auto___13243)){
args13240.push((arguments[i__7579__auto___13244]));

var G__13245 = (i__7579__auto___13244 + (1));
i__7579__auto___13244 = G__13245;
continue;
} else {
}
break;
}

var G__13242 = args13240.length;
switch (G__13242) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13240.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;
hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((function hoplon$core$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(hoplon$core$when_dom_$_doit,(20));
}
}));
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__13255 = args;
var vec__13256 = G__13255;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13256,(0),null);
var args__$1 = cljs.core.nthnext(vec__13256,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__13255__$1 = G__13255;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__13257 = G__13255__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13257,(0),null);
var args__$2 = cljs.core.nthnext(vec__13257,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__13258 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__13255__$1,attr__$2,kids__$2,vec__13257,arg__$1,args__$2,attr,kids,G__13255,vec__13256,arg,args__$1){
return (function (p1__13247_SHARP_,p2__13248_SHARP_,p3__13249_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__13247_SHARP_,p2__13248_SHARP_,p3__13249_SHARP_);
});})(attr__$1,kids__$1,G__13255__$1,attr__$2,kids__$2,vec__13257,arg__$1,args__$2,attr,kids,G__13255,vec__13256,arg,args__$1))
,attr__$2,arg__$1);
var G__13259 = kids__$2;
var G__13260 = args__$2;
attr__$1 = G__13258;
kids__$1 = G__13259;
G__13255__$1 = G__13260;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__13261 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__13262 = kids__$2;
var G__13263 = cljs.core.rest(args__$2);
attr__$1 = G__13261;
kids__$1 = G__13262;
G__13255__$1 = G__13263;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__13264 = attr__$2;
var G__13265 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__13266 = args__$2;
attr__$1 = G__13264;
kids__$1 = G__13265;
G__13255__$1 = G__13266;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__13267 = attr__$2;
var G__13268 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__13269 = args__$2;
attr__$1 = G__13267;
kids__$1 = G__13268;
G__13255__$1 = G__13269;
continue;
} else {
var G__13270 = attr__$2;
var G__13271 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__13272 = args__$2;
attr__$1 = G__13270;
kids__$1 = G__13271;
G__13255__$1 = G__13272;
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
cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
var this$__$3 = this$__$2;
if(cljs.core.truth_(javelin.core.cell_QMARK_(v))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(v,((function (this$__$3,this$__$1){
return (function (p1__13274_SHARP_,p2__13273_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,p2__13273_SHARP_) : hoplon.core.do_BANG_.call(null,this$__$3,k,p2__13273_SHARP_));
});})(this$__$3,this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(v)){
(hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,v) : hoplon.core.on_BANG_.call(null,this$__$3,k,v));
} else {
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,v) : hoplon.core.do_BANG_.call(null,this$__$3,k,v));

}
}

return this$__$3;
});})(this$__$1))
,this$__$1,attr);

return this$__$1;
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__13275){
var vec__13281 = p__13275;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13281,(0),null);
var _ = cljs.core.nthnext(vec__13281,(1));
var kids = vec__13281;
var this$__$1 = this$;
var seq__13282_13286 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__13283_13287 = null;
var count__13284_13288 = (0);
var i__13285_13289 = (0);
while(true){
if((i__13285_13289 < count__13284_13288)){
var x_13290 = chunk__13283_13287.cljs$core$IIndexed$_nth$arity$2(null,i__13285_13289);
var temp__4425__auto___13291 = hoplon.core.__GT_node(x_13290);
if(cljs.core.truth_(temp__4425__auto___13291)){
var x_13292__$1 = temp__4425__auto___13291;
hoplon.core.append_child_BANG_(this$__$1,x_13292__$1);
} else {
}

var G__13293 = seq__13282_13286;
var G__13294 = chunk__13283_13287;
var G__13295 = count__13284_13288;
var G__13296 = (i__13285_13289 + (1));
seq__13282_13286 = G__13293;
chunk__13283_13287 = G__13294;
count__13284_13288 = G__13295;
i__13285_13289 = G__13296;
continue;
} else {
var temp__4425__auto___13297 = cljs.core.seq(seq__13282_13286);
if(temp__4425__auto___13297){
var seq__13282_13298__$1 = temp__4425__auto___13297;
if(cljs.core.chunked_seq_QMARK_(seq__13282_13298__$1)){
var c__7320__auto___13299 = cljs.core.chunk_first(seq__13282_13298__$1);
var G__13300 = cljs.core.chunk_rest(seq__13282_13298__$1);
var G__13301 = c__7320__auto___13299;
var G__13302 = cljs.core.count(c__7320__auto___13299);
var G__13303 = (0);
seq__13282_13286 = G__13300;
chunk__13283_13287 = G__13301;
count__13284_13288 = G__13302;
i__13285_13289 = G__13303;
continue;
} else {
var x_13304 = cljs.core.first(seq__13282_13298__$1);
var temp__4425__auto___13305__$1 = hoplon.core.__GT_node(x_13304);
if(cljs.core.truth_(temp__4425__auto___13305__$1)){
var x_13306__$1 = temp__4425__auto___13305__$1;
hoplon.core.append_child_BANG_(this$__$1,x_13306__$1);
} else {
}

var G__13307 = cljs.core.next(seq__13282_13298__$1);
var G__13308 = null;
var G__13309 = (0);
var G__13310 = (0);
seq__13282_13286 = G__13307;
chunk__13283_13287 = G__13308;
count__13284_13288 = G__13309;
i__13285_13289 = G__13310;
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
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__13317__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__13312 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13312,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13312,(1),null);
var G__13313 = this$;
hoplon.core.add_attributes_BANG_(G__13313,attr);

hoplon.core.add_children_BANG_(G__13313,kids);

return G__13313;
};
var G__13317 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__13318__i = 0, G__13318__a = new Array(arguments.length -  1);
while (G__13318__i < G__13318__a.length) {G__13318__a[G__13318__i] = arguments[G__13318__i + 1]; ++G__13318__i;}
  args = new cljs.core.IndexedSeq(G__13318__a,0);
} 
return G__13317__delegate.call(this,self__,args);};
G__13317.cljs$lang$maxFixedArity = 1;
G__13317.cljs$lang$applyTo = (function (arglist__13319){
var self__ = cljs.core.first(arglist__13319);
var args = cljs.core.rest(arglist__13319);
return G__13317__delegate(self__,args);
});
G__13317.cljs$core$IFn$_invoke$arity$variadic = G__13317__delegate;
return G__13317;
})()
;

Element.prototype.apply = (function (self__,args13311){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args13311)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__13320__delegate = function (args){
var this$ = this;
var vec__13314 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13314,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13314,(1),null);
var G__13315 = this$;
hoplon.core.add_attributes_BANG_(G__13315,attr);

hoplon.core.add_children_BANG_(G__13315,kids);

return G__13315;
};
var G__13320 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13321__i = 0, G__13321__a = new Array(arguments.length -  0);
while (G__13321__i < G__13321__a.length) {G__13321__a[G__13321__i] = arguments[G__13321__i + 0]; ++G__13321__i;}
  args = new cljs.core.IndexedSeq(G__13321__a,0);
} 
return G__13320__delegate.call(this,args);};
G__13320.cljs$lang$maxFixedArity = 0;
G__13320.cljs$lang$applyTo = (function (arglist__13322){
var args = cljs.core.seq(arglist__13322);
return G__13320__delegate(args);
});
G__13320.cljs$core$IFn$_invoke$arity$variadic = G__13320__delegate;
return G__13320;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 = (function (this$,k,v){
var this$__$1 = this;
var _ = null;
var k_13323__$1 = cljs.core.name(k);
var e_13324 = jQuery(this$__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e_13324.removeAttr(k_13323__$1);
} else {
e_13324.attr(k_13323__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_13323__$1:v));
}

return _;
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e13316){if((e13316 instanceof Error)){
var _ = e13316;
return null;
} else {
throw e13316;

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
var G__13327__delegate = function (args){
var vec__13326 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13326,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13326,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
elem.hoplonKids = null;

elem.innerHTML = null;

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__13327 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13328__i = 0, G__13328__a = new Array(arguments.length -  0);
while (G__13328__i < G__13328__a.length) {G__13328__a[G__13328__i] = arguments[G__13328__i + 0]; ++G__13328__i;}
  args = new cljs.core.IndexedSeq(G__13328__a,0);
} 
return G__13327__delegate.call(this,args);};
G__13327.cljs$lang$maxFixedArity = 0;
G__13327.cljs$lang$applyTo = (function (arglist__13329){
var args = cljs.core.seq(arglist__13329);
return G__13327__delegate(args);
});
G__13327.cljs$core$IFn$_invoke$arity$variadic = G__13327__delegate;
return G__13327;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__13330__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),args);
};
var G__13330 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13331__i = 0, G__13331__a = new Array(arguments.length -  0);
while (G__13331__i < G__13331__a.length) {G__13331__a[G__13331__i] = arguments[G__13331__i + 0]; ++G__13331__i;}
  args = new cljs.core.IndexedSeq(G__13331__a,0);
} 
return G__13330__delegate.call(this,args);};
G__13330.cljs$lang$maxFixedArity = 0;
G__13330.cljs$lang$applyTo = (function (arglist__13332){
var args = cljs.core.seq(arglist__13332);
return G__13330__delegate(args);
});
G__13330.cljs$core$IFn$_invoke$arity$variadic = G__13330__delegate;
return G__13330;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__7585__auto__ = [];
var len__7578__auto___13335 = arguments.length;
var i__7579__auto___13336 = (0);
while(true){
if((i__7579__auto___13336 < len__7578__auto___13335)){
args__7585__auto__.push((arguments[i__7579__auto___13336]));

var G__13337 = (i__7579__auto___13336 + (1));
i__7579__auto___13336 = G__13337;
continue;
} else {
}
break;
}

var argseq__7586__auto__ = ((((0) < args__7585__auto__.length))?(new cljs.core.IndexedSeq(args__7585__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__7586__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__13334 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13334,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13334,(1),null);
return hoplon.core.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq13333){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13333));
});
hoplon.core.body = hoplon.core.make_singleton_ctor("body");
hoplon.core.head = hoplon.core.make_singleton_ctor("head");
hoplon.core.a = hoplon.core.make_elem_ctor("a");
hoplon.core.abbr = hoplon.core.make_elem_ctor("abbr");
hoplon.core.acronym = hoplon.core.make_elem_ctor("acronym");
hoplon.core.address = hoplon.core.make_elem_ctor("address");
hoplon.core.applet = hoplon.core.make_elem_ctor("applet");
hoplon.core.area = hoplon.core.make_elem_ctor("area");
hoplon.core.article = hoplon.core.make_elem_ctor("article");
hoplon.core.aside = hoplon.core.make_elem_ctor("aside");
hoplon.core.audio = hoplon.core.make_elem_ctor("audio");
hoplon.core.b = hoplon.core.make_elem_ctor("b");
hoplon.core.base = hoplon.core.make_elem_ctor("base");
hoplon.core.basefont = hoplon.core.make_elem_ctor("basefont");
hoplon.core.bdi = hoplon.core.make_elem_ctor("bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor("bdo");
hoplon.core.big = hoplon.core.make_elem_ctor("big");
hoplon.core.blockquote = hoplon.core.make_elem_ctor("blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor("br");
hoplon.core.button = hoplon.core.make_elem_ctor("button");
hoplon.core.canvas = hoplon.core.make_elem_ctor("canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor("caption");
hoplon.core.center = hoplon.core.make_elem_ctor("center");
hoplon.core.cite = hoplon.core.make_elem_ctor("cite");
hoplon.core.code = hoplon.core.make_elem_ctor("code");
hoplon.core.col = hoplon.core.make_elem_ctor("col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor("colgroup");
hoplon.core.command = hoplon.core.make_elem_ctor("command");
hoplon.core.data = hoplon.core.make_elem_ctor("data");
hoplon.core.datalist = hoplon.core.make_elem_ctor("datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor("dd");
hoplon.core.del = hoplon.core.make_elem_ctor("del");
hoplon.core.details = hoplon.core.make_elem_ctor("details");
hoplon.core.dfn = hoplon.core.make_elem_ctor("dfn");
hoplon.core.dialog = hoplon.core.make_elem_ctor("dialog");
hoplon.core.dir = hoplon.core.make_elem_ctor("dir");
hoplon.core.div = hoplon.core.make_elem_ctor("div");
hoplon.core.dl = hoplon.core.make_elem_ctor("dl");
hoplon.core.dt = hoplon.core.make_elem_ctor("dt");
hoplon.core.em = hoplon.core.make_elem_ctor("em");
hoplon.core.embed = hoplon.core.make_elem_ctor("embed");
hoplon.core.eventsource = hoplon.core.make_elem_ctor("eventsource");
hoplon.core.fieldset = hoplon.core.make_elem_ctor("fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor("figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor("figure");
hoplon.core.font = hoplon.core.make_elem_ctor("font");
hoplon.core.footer = hoplon.core.make_elem_ctor("footer");
hoplon.core.form = hoplon.core.make_elem_ctor("form");
hoplon.core.frame = hoplon.core.make_elem_ctor("frame");
hoplon.core.frameset = hoplon.core.make_elem_ctor("frameset");
hoplon.core.h1 = hoplon.core.make_elem_ctor("h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor("h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor("h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor("h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor("h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor("h6");
hoplon.core.header = hoplon.core.make_elem_ctor("header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor("hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor("hr");
hoplon.core.i = hoplon.core.make_elem_ctor("i");
hoplon.core.iframe = hoplon.core.make_elem_ctor("iframe");
hoplon.core.img = hoplon.core.make_elem_ctor("img");
hoplon.core.input = hoplon.core.make_elem_ctor("input");
hoplon.core.ins = hoplon.core.make_elem_ctor("ins");
hoplon.core.isindex = hoplon.core.make_elem_ctor("isindex");
hoplon.core.kbd = hoplon.core.make_elem_ctor("kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor("keygen");
hoplon.core.label = hoplon.core.make_elem_ctor("label");
hoplon.core.legend = hoplon.core.make_elem_ctor("legend");
hoplon.core.li = hoplon.core.make_elem_ctor("li");
hoplon.core.link = hoplon.core.make_elem_ctor("link");
hoplon.core.main = hoplon.core.make_elem_ctor("main");
hoplon.core.html_map = hoplon.core.make_elem_ctor("map");
hoplon.core.mark = hoplon.core.make_elem_ctor("mark");
hoplon.core.menu = hoplon.core.make_elem_ctor("menu");
hoplon.core.menuitem = hoplon.core.make_elem_ctor("menuitem");
hoplon.core.html_meta = hoplon.core.make_elem_ctor("meta");
hoplon.core.meter = hoplon.core.make_elem_ctor("meter");
hoplon.core.nav = hoplon.core.make_elem_ctor("nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor("noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor("noscript");
hoplon.core.object = hoplon.core.make_elem_ctor("object");
hoplon.core.ol = hoplon.core.make_elem_ctor("ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor("optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor("option");
hoplon.core.output = hoplon.core.make_elem_ctor("output");
hoplon.core.p = hoplon.core.make_elem_ctor("p");
hoplon.core.param = hoplon.core.make_elem_ctor("param");
hoplon.core.pre = hoplon.core.make_elem_ctor("pre");
hoplon.core.progress = hoplon.core.make_elem_ctor("progress");
hoplon.core.q = hoplon.core.make_elem_ctor("q");
hoplon.core.rp = hoplon.core.make_elem_ctor("rp");
hoplon.core.rt = hoplon.core.make_elem_ctor("rt");
hoplon.core.rtc = hoplon.core.make_elem_ctor("rtc");
hoplon.core.ruby = hoplon.core.make_elem_ctor("ruby");
hoplon.core.s = hoplon.core.make_elem_ctor("s");
hoplon.core.samp = hoplon.core.make_elem_ctor("samp");
hoplon.core.script = hoplon.core.make_elem_ctor("script");
hoplon.core.section = hoplon.core.make_elem_ctor("section");
hoplon.core.select = hoplon.core.make_elem_ctor("select");
hoplon.core.small = hoplon.core.make_elem_ctor("small");
hoplon.core.source = hoplon.core.make_elem_ctor("source");
hoplon.core.span = hoplon.core.make_elem_ctor("span");
hoplon.core.strike = hoplon.core.make_elem_ctor("strike");
hoplon.core.strong = hoplon.core.make_elem_ctor("strong");
hoplon.core.style = hoplon.core.make_elem_ctor("style");
hoplon.core.sub = hoplon.core.make_elem_ctor("sub");
hoplon.core.summary = hoplon.core.make_elem_ctor("summary");
hoplon.core.sup = hoplon.core.make_elem_ctor("sup");
hoplon.core.table = hoplon.core.make_elem_ctor("table");
hoplon.core.tbody = hoplon.core.make_elem_ctor("tbody");
hoplon.core.td = hoplon.core.make_elem_ctor("td");
hoplon.core.textarea = hoplon.core.make_elem_ctor("textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor("tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor("th");
hoplon.core.thead = hoplon.core.make_elem_ctor("thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor("time");
hoplon.core.title = hoplon.core.make_elem_ctor("title");
hoplon.core.tr = hoplon.core.make_elem_ctor("tr");
hoplon.core.track = hoplon.core.make_elem_ctor("track");
hoplon.core.tt = hoplon.core.make_elem_ctor("tt");
hoplon.core.u = hoplon.core.make_elem_ctor("u");
hoplon.core.ul = hoplon.core.make_elem_ctor("ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor("var");
hoplon.core.video = hoplon.core.make_elem_ctor("video");
hoplon.core.wbr = hoplon.core.make_elem_ctor("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__13338_SHARP_){
return document.createTextNode(p1__13338_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__13339_SHARP_){
return document.createComment(p1__13339_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
var G__13347 = (function (){
var G__13348 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__13349 = (0);
return setTimeout(G__13348,G__13349);
});
return jQuery(G__13347);
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return jQuery(document).trigger("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return jQuery(document).on("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return jQuery("body").on("submit",(function (p1__13350_SHARP_){
var e = (function (){var G__13351 = p1__13350_SHARP_.target;
return jQuery(G__13351);
})();
if(cljs.core.truth_((function (){var or__6509__auto__ = e.attr("action");
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__13350_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(var_args){
var args13352 = [];
var len__7578__auto___13355 = arguments.length;
var i__7579__auto___13356 = (0);
while(true){
if((i__7579__auto___13356 < len__7578__auto___13355)){
args13352.push((arguments[i__7579__auto___13356]));

var G__13357 = (i__7579__auto___13356 + (1));
i__7579__auto___13356 = G__13357;
continue;
} else {
}
break;
}

var G__13354 = args13352.length;
switch (G__13354) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13352.length)].join('')));

}
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1(e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.core.text_val_BANG_.cljs$lang$maxFixedArity = 2;
hoplon.core.check_val_BANG_ = (function hoplon$core$check_val_BANG_(var_args){
var args13359 = [];
var len__7578__auto___13362 = arguments.length;
var i__7579__auto___13363 = (0);
while(true){
if((i__7579__auto___13363 < len__7578__auto___13362)){
args13359.push((arguments[i__7579__auto___13363]));

var G__13364 = (i__7579__auto___13363 + (1));
i__7579__auto___13363 = G__13364;
continue;
} else {
}
break;
}

var G__13361 = args13359.length;
switch (G__13361) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13359.length)].join('')));

}
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$(v));
});

hoplon.core.check_val_BANG_.cljs$lang$maxFixedArity = 2;
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__7433__auto__ = (function (){var G__13366 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13366) : cljs.core.atom.call(null,G__13366));
})();
var prefer_table__7434__auto__ = (function (){var G__13367 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13367) : cljs.core.atom.call(null,G__13367));
})();
var method_cache__7435__auto__ = (function (){var G__13368 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13368) : cljs.core.atom.call(null,G__13368));
})();
var cached_hierarchy__7436__auto__ = (function (){var G__13369 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13369) : cljs.core.atom.call(null,G__13369));
})();
var hierarchy__7437__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__7433__auto__,prefer_table__7434__auto__,method_cache__7435__auto__,cached_hierarchy__7436__auto__,hierarchy__7437__auto__){
return (function (elem,key,val){
return key;
});})(method_table__7433__auto__,prefer_table__7434__auto__,method_cache__7435__auto__,cached_hierarchy__7436__auto__,hierarchy__7437__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__7437__auto__,method_table__7433__auto__,prefer_table__7434__auto__,method_cache__7435__auto__,cached_hierarchy__7436__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__13370 = elem;
var G__13371 = cljs.core.cst$kw$attr;
var G__13372 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__13370,G__13371,G__13372) : hoplon.core.do_BANG_.call(null,G__13370,G__13371,G__13372));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__13373__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__13373 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__13374__i = 0, G__13374__a = new Array(arguments.length -  2);
while (G__13374__i < G__13374__a.length) {G__13374__a[G__13374__i] = arguments[G__13374__i + 2]; ++G__13374__i;}
  args = new cljs.core.IndexedSeq(G__13374__a,0);
} 
return G__13373__delegate.call(this,elem,_,args);};
G__13373.cljs$lang$maxFixedArity = 2;
G__13373.cljs$lang$applyTo = (function (arglist__13375){
var elem = cljs.core.first(arglist__13375);
arglist__13375 = cljs.core.next(arglist__13375);
var _ = cljs.core.first(arglist__13375);
var args = cljs.core.rest(arglist__13375);
return G__13373__delegate(elem,_,args);
});
G__13373.cljs$core$IFn$_invoke$arity$variadic = G__13373__delegate;
return G__13373;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__13376 = cljs.core.seq(kvs);
var chunk__13377 = null;
var count__13378 = (0);
var i__13379 = (0);
while(true){
if((i__13379 < count__13378)){
var vec__13380 = chunk__13377.cljs$core$IIndexed$_nth$arity$2(null,i__13379);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13380,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13380,(1),null);
var k_13382__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_13382__$1);
} else {
e.attr(k_13382__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_13382__$1:v));
}

var G__13383 = seq__13376;
var G__13384 = chunk__13377;
var G__13385 = count__13378;
var G__13386 = (i__13379 + (1));
seq__13376 = G__13383;
chunk__13377 = G__13384;
count__13378 = G__13385;
i__13379 = G__13386;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13376);
if(temp__4425__auto__){
var seq__13376__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13376__$1)){
var c__7320__auto__ = cljs.core.chunk_first(seq__13376__$1);
var G__13387 = cljs.core.chunk_rest(seq__13376__$1);
var G__13388 = c__7320__auto__;
var G__13389 = cljs.core.count(c__7320__auto__);
var G__13390 = (0);
seq__13376 = G__13387;
chunk__13377 = G__13388;
count__13378 = G__13389;
i__13379 = G__13390;
continue;
} else {
var vec__13381 = cljs.core.first(seq__13376__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13381,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13381,(1),null);
var k_13391__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_13391__$1);
} else {
e.attr(k_13391__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_13391__$1:v));
}

var G__13392 = cljs.core.next(seq__13376__$1);
var G__13393 = null;
var G__13394 = (0);
var G__13395 = (0);
seq__13376 = G__13392;
chunk__13377 = G__13393;
count__13378 = G__13394;
i__13379 = G__13395;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__13396_SHARP_){
return cljs.core.zipmap(p1__13396_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__13397 = cljs.core.seq(clmap);
var chunk__13398 = null;
var count__13399 = (0);
var i__13400 = (0);
while(true){
if((i__13400 < count__13399)){
var vec__13401 = chunk__13398.cljs$core$IIndexed$_nth$arity$2(null,i__13400);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13401,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13401,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__13403 = seq__13397;
var G__13404 = chunk__13398;
var G__13405 = count__13399;
var G__13406 = (i__13400 + (1));
seq__13397 = G__13403;
chunk__13398 = G__13404;
count__13399 = G__13405;
i__13400 = G__13406;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13397);
if(temp__4425__auto__){
var seq__13397__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13397__$1)){
var c__7320__auto__ = cljs.core.chunk_first(seq__13397__$1);
var G__13407 = cljs.core.chunk_rest(seq__13397__$1);
var G__13408 = c__7320__auto__;
var G__13409 = cljs.core.count(c__7320__auto__);
var G__13410 = (0);
seq__13397 = G__13407;
chunk__13398 = G__13408;
count__13399 = G__13409;
i__13400 = G__13410;
continue;
} else {
var vec__13402 = cljs.core.first(seq__13397__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13402,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13402,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__13411 = cljs.core.next(seq__13397__$1);
var G__13412 = null;
var G__13413 = (0);
var G__13414 = (0);
seq__13397 = G__13411;
chunk__13398 = G__13412;
count__13399 = G__13413;
i__13400 = G__13414;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__13415 = cljs.core.seq(kvs);
var chunk__13416 = null;
var count__13417 = (0);
var i__13418 = (0);
while(true){
if((i__13418 < count__13417)){
var vec__13419 = chunk__13416.cljs$core$IIndexed$_nth$arity$2(null,i__13418);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13419,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13419,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__13421 = seq__13415;
var G__13422 = chunk__13416;
var G__13423 = count__13417;
var G__13424 = (i__13418 + (1));
seq__13415 = G__13421;
chunk__13416 = G__13422;
count__13417 = G__13423;
i__13418 = G__13424;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13415);
if(temp__4425__auto__){
var seq__13415__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13415__$1)){
var c__7320__auto__ = cljs.core.chunk_first(seq__13415__$1);
var G__13425 = cljs.core.chunk_rest(seq__13415__$1);
var G__13426 = c__7320__auto__;
var G__13427 = cljs.core.count(c__7320__auto__);
var G__13428 = (0);
seq__13415 = G__13425;
chunk__13416 = G__13426;
count__13417 = G__13427;
i__13418 = G__13428;
continue;
} else {
var vec__13420 = cljs.core.first(seq__13415__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13420,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13420,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__13429 = cljs.core.next(seq__13415__$1);
var G__13430 = null;
var G__13431 = (0);
var G__13432 = (0);
seq__13415 = G__13429;
chunk__13416 = G__13430;
count__13417 = G__13431;
i__13418 = G__13432;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
var G__13433 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__13434 = (0);
return setTimeout(G__13433,G__13434);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$focus,v) : hoplon.core.do_BANG_.call(null,elem,cljs.core.cst$kw$focus,v));

return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$select,v) : hoplon.core.do_BANG_.call(null,elem,cljs.core.cst$kw$select,v));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__7433__auto__ = (function (){var G__13435 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13435) : cljs.core.atom.call(null,G__13435));
})();
var prefer_table__7434__auto__ = (function (){var G__13436 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13436) : cljs.core.atom.call(null,G__13436));
})();
var method_cache__7435__auto__ = (function (){var G__13437 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13437) : cljs.core.atom.call(null,G__13437));
})();
var cached_hierarchy__7436__auto__ = (function (){var G__13438 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13438) : cljs.core.atom.call(null,G__13438));
})();
var hierarchy__7437__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__7433__auto__,prefer_table__7434__auto__,method_cache__7435__auto__,cached_hierarchy__7436__auto__,hierarchy__7437__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__7433__auto__,prefer_table__7434__auto__,method_cache__7435__auto__,cached_hierarchy__7436__auto__,hierarchy__7437__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__7437__auto__,method_table__7433__auto__,prefer_table__7434__auto__,method_cache__7435__auto__,cached_hierarchy__7436__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__13439 = this$__$1.target;
return jQuery(G__13439);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
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
var on_deck = (function (){var G__13454 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13454) : cljs.core.atom.call(null,G__13454));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__13455,G__13456){
return (G__13455.cljs$core$IFn$_invoke$arity$1 ? G__13455.cljs$core$IFn$_invoke$arity$1(G__13456) : G__13455.call(null,G__13456));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__13440_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__13458,G__13459,G__13457){
return (G__13457.cljs$core$IFn$_invoke$arity$2 ? G__13457.cljs$core$IFn$_invoke$arity$2(G__13458,G__13459) : G__13457.call(null,G__13458,G__13459));
});})(on_deck,items_seq))
).call(null,items_seq,p1__13440_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__13441_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__13441_SHARP_) : cljs.core.deref.call(null,p1__13441_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__13441_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__13460 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__13461 = null;
var count__13462 = (0);
var i__13463 = (0);
while(true){
if((i__13463 < count__13462)){
var i = chunk__13461.cljs$core$IIndexed$_nth$arity$2(null,i__13463);
var e_13466 = (function (){var or__6509__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
var G__13464 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__13464) : tpl.call(null,G__13464));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_13466);

var G__13467 = seq__13460;
var G__13468 = chunk__13461;
var G__13469 = count__13462;
var G__13470 = (i__13463 + (1));
seq__13460 = G__13467;
chunk__13461 = G__13468;
count__13462 = G__13469;
i__13463 = G__13470;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13460);
if(temp__4425__auto__){
var seq__13460__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13460__$1)){
var c__7320__auto__ = cljs.core.chunk_first(seq__13460__$1);
var G__13471 = cljs.core.chunk_rest(seq__13460__$1);
var G__13472 = c__7320__auto__;
var G__13473 = cljs.core.count(c__7320__auto__);
var G__13474 = (0);
seq__13460 = G__13471;
chunk__13461 = G__13472;
count__13462 = G__13473;
i__13463 = G__13474;
continue;
} else {
var i = cljs.core.first(seq__13460__$1);
var e_13475 = (function (){var or__6509__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
var G__13465 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__13465) : tpl.call(null,G__13465));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_13475);

var G__13476 = cljs.core.next(seq__13460__$1);
var G__13477 = null;
var G__13478 = (0);
var G__13479 = (0);
seq__13460 = G__13476;
chunk__13461 = G__13477;
count__13462 = G__13478;
i__13463 = G__13479;
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
var e_13480 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_13480);

var G__13481 = (_ + (1));
_ = G__13481;
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
var len__7578__auto___13490 = arguments.length;
var i__7579__auto___13491 = (0);
while(true){
if((i__7579__auto___13491 < len__7578__auto___13490)){
args__7585__auto__.push((arguments[i__7579__auto___13491]));

var G__13492 = (i__7579__auto___13491 + (1));
i__7579__auto___13491 = G__13492;
continue;
} else {
}
break;
}

var argseq__7586__auto__ = ((((0) < args__7585__auto__.length))?(new cljs.core.IndexedSeq(args__7585__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__7586__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__13483){
var vec__13484 = p__13483;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13484,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__13484,default$){
return (function (G__13485,G__13487,G__13486){
var or__6509__auto__ = (function (){var and__6497__auto__ = (G__13485.cljs$core$IFn$_invoke$arity$1 ? G__13485.cljs$core$IFn$_invoke$arity$1(G__13486) : G__13485.call(null,G__13486));
if(cljs.core.truth_(and__6497__auto__)){
return G__13486;
} else {
return and__6497__auto__;
}
})();
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return G__13487;
}
});})(c,vec__13484,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__13484,default$){
return (function (){
var G__13488 = c;
var G__13489 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13488,G__13489) : cljs.core.reset_BANG_.call(null,G__13488,G__13489));
});})(_,c,vec__13484,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq13482){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13482));
});
