(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{200:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return s});var r=a(0),i=a.n(r),n=a(339);t.default=function(e){return i.a.createElement(n.a,e)};var s="408253752"},235:function(e,t,a){"use strict";a(24),a(25),a(13),a(94),a(140),a(259);var r=a(16);t.__esModule=!0,t.default=void 0;var i,n=r(a(73)),s=r(a(74)),o=r(a(141)),d=r(a(142)),l=r(a(0)),u=r(a(53)),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=c(e),a=f(t);return g[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,b=m&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function v(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})})}function E(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})})}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)}).join("")+"<img "+l+s+o+a+r+t+n+i+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=l.default.createElement(k,(0,d.default)({src:t},i));return a.length>1?l.default.createElement("picture",null,r(a),n):n},k=l.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,d.default)({sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});k.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!h&&b&&!t.critical&&!a.seenBefore;var r=t.critical||m&&(h||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,p=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,L=e.loading,I=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,d.default)({opacity:R?1:0,transition:V?"opacity "+b+"ms":"none"},o),x="boolean"==typeof m?"lightgray":m,T={transitionDelay:b+"ms"},N=(0,d.default)({opacity:this.state.imgLoaded?0:1},V&&T,o,f),_={title:t,alt:this.state.isVisible?"":a,style:N,className:g};if(p){var j=p,q=j[0];return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},l.default.createElement(y,{style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),x&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&T)}),q.base64&&l.default.createElement(z,{src:q.base64,spreadProps:_,imageVariants:j,generateSources:E}),q.tracedSVG&&l.default.createElement(z,{src:q.tracedSVG,spreadProps:_,imageVariants:j,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(j),l.default.createElement(k,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:L},q,{imageVariants:j}))}}))}if(h){var P=h,M=P[0],W=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete W.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},x&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:x,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},V&&T)}),M.base64&&l.default.createElement(z,{src:M.base64,spreadProps:_,imageVariants:P,generateSources:E}),M.tracedSVG&&l.default.createElement(z,{src:M.tracedSVG,spreadProps:_,imageVariants:P,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(P),l.default.createElement(k,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:L},M,{imageVariants:P}))}}))}return null},t}(l.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),C=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});R.propTypes={resolutions:V,sizes:C,fixed:u.default.oneOfType([V,u.default.arrayOf(V)]),fluid:u.default.oneOfType([C,u.default.arrayOf(C)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var x=R;t.default=x},259:function(e,t,a){"use strict";a(265)("fixed",function(e){return function(){return e(this,"tt","","")}})},339:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(210),s=a(235),o=a.n(s),d=a(223),l=a.n(d),u=n.d.div.withConfig({displayName:"SaveTheDate__CardContainer",componentId:"awtq42-0"})(["padding:40px 40px;"]),c=Object(n.d)(o.a).withConfig({displayName:"SaveTheDate__Card",componentId:"awtq42-1"})(["display:block;margin:0px auto;max-width:570px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);"]),f=n.d.div.withConfig({displayName:"SaveTheDate__Envelope",componentId:"awtq42-2"})(['width:100%;min-height:100vh;background-image:url("/img/envelope.png");background-position:calc(50% + 100px) 0;background-repeat:no-repeat;background-size:auto;']),g=n.d.div.withConfig({displayName:"SaveTheDate__MainContainer",componentId:"awtq42-3"})(['min-height:100vh;background-image:url("/img/background.jpeg");background-repeat:no-repeat;background-position:center;']);t.a=function(e){return i.a.createElement(g,null,i.a.createElement(l.a,{defaultTitle:"Save the Date | Lunara & Hugo"},i.a.createElement("meta",{name:"author",content:"Hugo Nogueira"}),i.a.createElement("meta",{name:"description",content:"Dear friends, we are very looking forward to have you in our special day, May 2nd, 2020!"})),i.a.createElement(f,null,i.a.createElement(u,{align:"center"},i.a.createElement(c,{sizes:e.data.file.childImageSharp.sizes}))))}}}]);
//# sourceMappingURL=component---src-pages-index-pt-js-cd747c8e21e0b954975a.js.map