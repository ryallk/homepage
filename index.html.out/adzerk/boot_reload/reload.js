// Compiled by ClojureScript 1.8.40 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__7806_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__7806_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__7811 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__7812 = null;
var count__7813 = (0);
var i__7814 = (0);
while(true){
if((i__7814 < count__7813)){
var s = cljs.core._nth.call(null,chunk__7812,i__7814);
var temp__4425__auto___7815 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7815)){
var sheet_7816 = temp__4425__auto___7815;
var temp__4425__auto___7817__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7816.href,changed);
if(cljs.core.truth_(temp__4425__auto___7817__$1)){
var href_uri_7818 = temp__4425__auto___7817__$1;
sheet_7816.ownerNode.href = href_uri_7818.makeUnique().toString();
} else {
}
} else {
}

var G__7819 = seq__7811;
var G__7820 = chunk__7812;
var G__7821 = count__7813;
var G__7822 = (i__7814 + (1));
seq__7811 = G__7819;
chunk__7812 = G__7820;
count__7813 = G__7821;
i__7814 = G__7822;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7811);
if(temp__4425__auto__){
var seq__7811__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7811__$1)){
var c__7320__auto__ = cljs.core.chunk_first.call(null,seq__7811__$1);
var G__7823 = cljs.core.chunk_rest.call(null,seq__7811__$1);
var G__7824 = c__7320__auto__;
var G__7825 = cljs.core.count.call(null,c__7320__auto__);
var G__7826 = (0);
seq__7811 = G__7823;
chunk__7812 = G__7824;
count__7813 = G__7825;
i__7814 = G__7826;
continue;
} else {
var s = cljs.core.first.call(null,seq__7811__$1);
var temp__4425__auto___7827__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7827__$1)){
var sheet_7828 = temp__4425__auto___7827__$1;
var temp__4425__auto___7829__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7828.href,changed);
if(cljs.core.truth_(temp__4425__auto___7829__$2)){
var href_uri_7830 = temp__4425__auto___7829__$2;
sheet_7828.ownerNode.href = href_uri_7830.makeUnique().toString();
} else {
}
} else {
}

var G__7831 = cljs.core.next.call(null,seq__7811__$1);
var G__7832 = null;
var G__7833 = (0);
var G__7834 = (0);
seq__7811 = G__7831;
chunk__7812 = G__7832;
count__7813 = G__7833;
i__7814 = G__7834;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__7839 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__7840 = null;
var count__7841 = (0);
var i__7842 = (0);
while(true){
if((i__7842 < count__7841)){
var s = cljs.core._nth.call(null,chunk__7840,i__7842);
var temp__4425__auto___7843 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7843)){
var image_7844 = temp__4425__auto___7843;
var temp__4425__auto___7845__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7844.src,changed);
if(cljs.core.truth_(temp__4425__auto___7845__$1)){
var href_uri_7846 = temp__4425__auto___7845__$1;
image_7844.src = href_uri_7846.makeUnique().toString();
} else {
}
} else {
}

var G__7847 = seq__7839;
var G__7848 = chunk__7840;
var G__7849 = count__7841;
var G__7850 = (i__7842 + (1));
seq__7839 = G__7847;
chunk__7840 = G__7848;
count__7841 = G__7849;
i__7842 = G__7850;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7839);
if(temp__4425__auto__){
var seq__7839__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7839__$1)){
var c__7320__auto__ = cljs.core.chunk_first.call(null,seq__7839__$1);
var G__7851 = cljs.core.chunk_rest.call(null,seq__7839__$1);
var G__7852 = c__7320__auto__;
var G__7853 = cljs.core.count.call(null,c__7320__auto__);
var G__7854 = (0);
seq__7839 = G__7851;
chunk__7840 = G__7852;
count__7841 = G__7853;
i__7842 = G__7854;
continue;
} else {
var s = cljs.core.first.call(null,seq__7839__$1);
var temp__4425__auto___7855__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7855__$1)){
var image_7856 = temp__4425__auto___7855__$1;
var temp__4425__auto___7857__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7856.src,changed);
if(cljs.core.truth_(temp__4425__auto___7857__$2)){
var href_uri_7858 = temp__4425__auto___7857__$2;
image_7856.src = href_uri_7858.makeUnique().toString();
} else {
}
} else {
}

var G__7859 = cljs.core.next.call(null,seq__7839__$1);
var G__7860 = null;
var G__7861 = (0);
var G__7862 = (0);
seq__7839 = G__7859;
chunk__7840 = G__7860;
count__7841 = G__7861;
i__7842 = G__7862;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__7865){
var map__7868 = p__7865;
var map__7868__$1 = ((((!((map__7868 == null)))?((((map__7868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7868):map__7868);
var on_jsload = cljs.core.get.call(null,map__7868__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__7868,map__7868__$1,on_jsload){
return (function (p1__7863_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7863_SHARP_,".js");
});})(map__7868,map__7868__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__7868,map__7868__$1,on_jsload){
return (function (p1__7864_SHARP_){
return goog.Uri.parse(p1__7864_SHARP_).makeUnique();
});})(js_files,map__7868,map__7868__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__7868,map__7868__$1,on_jsload){
return (function() { 
var G__7870__delegate = function (_){
return on_jsload.call(null);
};
var G__7870 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__7871__i = 0, G__7871__a = new Array(arguments.length -  0);
while (G__7871__i < G__7871__a.length) {G__7871__a[G__7871__i] = arguments[G__7871__i + 0]; ++G__7871__i;}
  _ = new cljs.core.IndexedSeq(G__7871__a,0);
} 
return G__7870__delegate.call(this,_);};
G__7870.cljs$lang$maxFixedArity = 0;
G__7870.cljs$lang$applyTo = (function (arglist__7872){
var _ = cljs.core.seq(arglist__7872);
return G__7870__delegate(_);
});
G__7870.cljs$core$IFn$_invoke$arity$variadic = G__7870__delegate;
return G__7870;
})()
;})(js_files,map__7868,map__7868__$1,on_jsload))
,((function (js_files,map__7868,map__7868__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__7868,map__7868__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__7877_7881 = cljs.core.seq.call(null,things_to_log);
var chunk__7878_7882 = null;
var count__7879_7883 = (0);
var i__7880_7884 = (0);
while(true){
if((i__7880_7884 < count__7879_7883)){
var t_7885 = cljs.core._nth.call(null,chunk__7878_7882,i__7880_7884);
console.log(t_7885);

var G__7886 = seq__7877_7881;
var G__7887 = chunk__7878_7882;
var G__7888 = count__7879_7883;
var G__7889 = (i__7880_7884 + (1));
seq__7877_7881 = G__7886;
chunk__7878_7882 = G__7887;
count__7879_7883 = G__7888;
i__7880_7884 = G__7889;
continue;
} else {
var temp__4425__auto___7890 = cljs.core.seq.call(null,seq__7877_7881);
if(temp__4425__auto___7890){
var seq__7877_7891__$1 = temp__4425__auto___7890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7877_7891__$1)){
var c__7320__auto___7892 = cljs.core.chunk_first.call(null,seq__7877_7891__$1);
var G__7893 = cljs.core.chunk_rest.call(null,seq__7877_7891__$1);
var G__7894 = c__7320__auto___7892;
var G__7895 = cljs.core.count.call(null,c__7320__auto___7892);
var G__7896 = (0);
seq__7877_7881 = G__7893;
chunk__7878_7882 = G__7894;
count__7879_7883 = G__7895;
i__7880_7884 = G__7896;
continue;
} else {
var t_7897 = cljs.core.first.call(null,seq__7877_7891__$1);
console.log(t_7897);

var G__7898 = cljs.core.next.call(null,seq__7877_7891__$1);
var G__7899 = null;
var G__7900 = (0);
var G__7901 = (0);
seq__7877_7881 = G__7898;
chunk__7878_7882 = G__7899;
count__7879_7883 = G__7900;
i__7880_7884 = G__7901;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__7902_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__7902_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__7904 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__7904);

adzerk.boot_reload.reload.reload_css.call(null,G__7904);

adzerk.boot_reload.reload.reload_img.call(null,G__7904);

return G__7904;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map