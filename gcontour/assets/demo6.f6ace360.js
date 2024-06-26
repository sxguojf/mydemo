import{i as yo,j as tr,q as xo,l as ui,o as To,c as Eo,a as xe,t as Ao,m as br,x as un,v as So,p as wo,d as bo,n as Co}from"./vendor.ee5d4042.js";import{c as Ro}from"./axios.07c1c759.js";import{m as Lo}from"./md4.ebb458dc.js";import{_ as No}from"./index.fe4cc012.js";import{bM as fn,by as Mo,bC as Do,bQ as cn,el as fi,eq as Po,er as Io,v as ci,y as hi,e8 as di,aK as vi,aC as Oo,f as rr,bx as Fo,ev as Bo,ew as Uo,ex as Ho,Z as zo,h as Go,ar as Vo,u as ko,aQ as Wo,ey as Xo,L as qo,bm as wt,ck as jo,M as Yo,dw as Ko,b4 as Zo,br as $o,eu as Qo,em as Jo,en as es}from"./install.160132d4.js";function ts(e,t){var r=t;t instanceof fn||(r=new fn(t));var n=Mo(r);return n.setExtent(e[0],e[1]),Do(n,r),n}cn([fi,Po]);cn(Io);function pi(e,t,r){typeof t=="object"&&(r=t,t=null);var n=this,i;if(!(e instanceof Function)){i=[];for(var a in e)e.hasOwnProperty(a)&&i.push(a)}var o=function(l){if(n.apply(this,arguments),e instanceof Function?mi(this,e.call(this,l)):rs(this,e,i),this.constructor===o)for(var u=o.__initializers__,f=0;f<u.length;f++)u[f].apply(this,arguments)};o.__super__=n,n.__initializers__?o.__initializers__=n.__initializers__.slice():o.__initializers__=[],t&&o.__initializers__.push(t);var s=function(){};return s.prototype=n.prototype,o.prototype=new s,o.prototype.constructor=o,mi(o.prototype,r),o.extend=n.extend,o.derive=n.extend,o}function mi(e,t){if(!!t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}function rs(e,t,r){for(var n=0;n<r.length;n++){var i=r[n];e[i]=t[i]}}var ns={extend:pi,derive:pi};function is(e,t){this.action=e,this.context=t}var as={trigger:function(e){if(!!this.hasOwnProperty("__handlers__")&&!!this.__handlers__.hasOwnProperty(e)){var t=this.__handlers__[e],r=t.length,n=-1,i=arguments;switch(i.length){case 1:for(;++n<r;)t[n].action.call(t[n].context);return;case 2:for(;++n<r;)t[n].action.call(t[n].context,i[1]);return;case 3:for(;++n<r;)t[n].action.call(t[n].context,i[1],i[2]);return;case 4:for(;++n<r;)t[n].action.call(t[n].context,i[1],i[2],i[3]);return;case 5:for(;++n<r;)t[n].action.call(t[n].context,i[1],i[2],i[3],i[4]);return;default:for(;++n<r;)t[n].action.apply(t[n].context,Array.prototype.slice.call(i,1));return}}},on:function(e,t,r){if(!(!e||!t)){var n=this.__handlers__||(this.__handlers__={});if(!n[e])n[e]=[];else if(this.has(e,t))return;var i=new is(t,r||this);return n[e].push(i),this}},once:function(e,t,r){if(!e||!t)return;var n=this;function i(){n.off(e,i),t.apply(this,arguments)}return this.on(e,i,r)},before:function(e,t,r){if(!(!e||!t))return e="before"+e,this.on(e,t,r)},after:function(e,t,r){if(!(!e||!t))return e="after"+e,this.on(e,t,r)},success:function(e,t){return this.once("success",e,t)},error:function(e,t){return this.once("error",e,t)},off:function(e,t){var r=this.__handlers__||(this.__handlers__={});if(!t){r[e]=[];return}if(r[e]){for(var n=r[e],i=[],a=0;a<n.length;a++)t&&n[a].action!==t&&i.push(n[a]);r[e]=i}return this},has:function(e,t){var r=this.__handlers__;if(!r||!r[e])return!1;for(var n=r[e],i=0;i<n.length;i++)if(n[i].action===t)return!0}},hn=as,os=0,ss=Array.prototype,ls=ss.forEach,nr={genGUID:function(){return++os},relative2absolute:function(e,t){if(!t||e.match(/^\//))return e;for(var r=e.split("/"),n=t.split("/"),i=r[0];i==="."||i==="..";)i===".."&&n.pop(),r.shift(),i=r[0];return n.join("/")+"/"+r.join("/")},extend:function(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},defaults:function(e,t){if(t)for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e},extendWithPropList:function(e,t,r){if(t)for(var n=0;n<r.length;n++){var i=r[n];e[i]=t[i]}return e},defaultsWithPropList:function(e,t,r){if(t)for(var n=0;n<r.length;n++){var i=r[n];e[i]==null&&(e[i]=t[i])}return e},each:function(e,t,r){if(!!(e&&t))if(e.forEach&&e.forEach===ls)e.forEach(t,r);else if(e.length===+e.length)for(var n=0,i=e.length;n<i;n++)t.call(r,e[n],n,e);else for(var a in e)e.hasOwnProperty(a)&&t.call(r,e[a],a,e)},isObject:function(e){return e===Object(e)},isArray:function(e){return Array.isArray(e)},isArrayLike:function(e){return e?e.length===+e.length:!1},clone:function(e){if(nr.isObject(e)){if(nr.isArray(e))return e.slice();if(nr.isArrayLike(e)){for(var t=new e.constructor(e.length),r=0;r<e.length;r++)t[r]=e[r];return t}else return nr.extend({},e)}else return e}},Ae=nr,Cr=function(){this.__uid__=Ae.genGUID()};Cr.__initializers__=[function(e){Ae.extend(this,e)}];Ae.extend(Cr,ns);Ae.extend(Cr.prototype,hn);var Be=Cr,_i=["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","OES_standard_derivatives","OES_vertex_array_object","OES_element_index_uint","WEBGL_compressed_texture_s3tc","WEBGL_depth_texture","EXT_texture_filter_anisotropic","EXT_shader_texture_lod","WEBGL_draw_buffers","EXT_frag_depth","EXT_sRGB","ANGLE_instanced_arrays"],gi=["MAX_TEXTURE_SIZE","MAX_CUBE_MAP_TEXTURE_SIZE"];function us(e){for(var t={},r={},n=0;n<_i.length;n++){var i=_i[n];o(i)}for(var n=0;n<gi.length;n++){var a=gi[n];r[a]=e.getParameter(e[a])}this.getExtension=function(s){return s in t||o(s),t[s]},this.getParameter=function(s){return r[s]};function o(s){if(e.getExtension){var l=e.getExtension(s);l||(l=e.getExtension("MOZ_"+s)),l||(l=e.getExtension("WEBKIT_"+s)),t[s]=l}}}var A={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,ZERO:0,ONE:1,SRC_COLOR:768,ONE_MINUS_SRC_COLOR:769,SRC_ALPHA:770,ONE_MINUS_SRC_ALPHA:771,DST_ALPHA:772,ONE_MINUS_DST_ALPHA:773,DST_COLOR:774,ONE_MINUS_DST_COLOR:775,SRC_ALPHA_SATURATE:776,FUNC_ADD:32774,BLEND_EQUATION:32777,BLEND_EQUATION_RGB:32777,BLEND_EQUATION_ALPHA:34877,FUNC_SUBTRACT:32778,FUNC_REVERSE_SUBTRACT:32779,BLEND_DST_RGB:32968,BLEND_SRC_RGB:32969,BLEND_DST_ALPHA:32970,BLEND_SRC_ALPHA:32971,CONSTANT_COLOR:32769,ONE_MINUS_CONSTANT_COLOR:32770,CONSTANT_ALPHA:32771,ONE_MINUS_CONSTANT_ALPHA:32772,BLEND_COLOR:32773,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,ARRAY_BUFFER_BINDING:34964,ELEMENT_ARRAY_BUFFER_BINDING:34965,STREAM_DRAW:35040,STATIC_DRAW:35044,DYNAMIC_DRAW:35048,BUFFER_SIZE:34660,BUFFER_USAGE:34661,CURRENT_VERTEX_ATTRIB:34342,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,CULL_FACE:2884,BLEND:3042,DITHER:3024,STENCIL_TEST:2960,DEPTH_TEST:2929,SCISSOR_TEST:3089,POLYGON_OFFSET_FILL:32823,SAMPLE_ALPHA_TO_COVERAGE:32926,SAMPLE_COVERAGE:32928,NO_ERROR:0,INVALID_ENUM:1280,INVALID_VALUE:1281,INVALID_OPERATION:1282,OUT_OF_MEMORY:1285,CW:2304,CCW:2305,LINE_WIDTH:2849,ALIASED_POINT_SIZE_RANGE:33901,ALIASED_LINE_WIDTH_RANGE:33902,CULL_FACE_MODE:2885,FRONT_FACE:2886,DEPTH_RANGE:2928,DEPTH_WRITEMASK:2930,DEPTH_CLEAR_VALUE:2931,DEPTH_FUNC:2932,STENCIL_CLEAR_VALUE:2961,STENCIL_FUNC:2962,STENCIL_FAIL:2964,STENCIL_PASS_DEPTH_FAIL:2965,STENCIL_PASS_DEPTH_PASS:2966,STENCIL_REF:2967,STENCIL_VALUE_MASK:2963,STENCIL_WRITEMASK:2968,STENCIL_BACK_FUNC:34816,STENCIL_BACK_FAIL:34817,STENCIL_BACK_PASS_DEPTH_FAIL:34818,STENCIL_BACK_PASS_DEPTH_PASS:34819,STENCIL_BACK_REF:36003,STENCIL_BACK_VALUE_MASK:36004,STENCIL_BACK_WRITEMASK:36005,VIEWPORT:2978,SCISSOR_BOX:3088,COLOR_CLEAR_VALUE:3106,COLOR_WRITEMASK:3107,UNPACK_ALIGNMENT:3317,PACK_ALIGNMENT:3333,MAX_TEXTURE_SIZE:3379,MAX_VIEWPORT_DIMS:3386,SUBPIXEL_BITS:3408,RED_BITS:3410,GREEN_BITS:3411,BLUE_BITS:3412,ALPHA_BITS:3413,DEPTH_BITS:3414,STENCIL_BITS:3415,POLYGON_OFFSET_UNITS:10752,POLYGON_OFFSET_FACTOR:32824,TEXTURE_BINDING_2D:32873,SAMPLE_BUFFERS:32936,SAMPLES:32937,SAMPLE_COVERAGE_VALUE:32938,SAMPLE_COVERAGE_INVERT:32939,COMPRESSED_TEXTURE_FORMATS:34467,DONT_CARE:4352,FASTEST:4353,NICEST:4354,GENERATE_MIPMAP_HINT:33170,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,FRAGMENT_SHADER:35632,VERTEX_SHADER:35633,MAX_VERTEX_ATTRIBS:34921,MAX_VERTEX_UNIFORM_VECTORS:36347,MAX_VARYING_VECTORS:36348,MAX_COMBINED_TEXTURE_IMAGE_UNITS:35661,MAX_VERTEX_TEXTURE_IMAGE_UNITS:35660,MAX_TEXTURE_IMAGE_UNITS:34930,MAX_FRAGMENT_UNIFORM_VECTORS:36349,SHADER_TYPE:35663,DELETE_STATUS:35712,LINK_STATUS:35714,VALIDATE_STATUS:35715,ATTACHED_SHADERS:35717,ACTIVE_UNIFORMS:35718,ACTIVE_ATTRIBUTES:35721,SHADING_LANGUAGE_VERSION:35724,CURRENT_PROGRAM:35725,NEVER:512,LESS:513,EQUAL:514,LEQUAL:515,GREATER:516,NOTEQUAL:517,GEQUAL:518,ALWAYS:519,KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056,VENDOR:7936,RENDERER:7937,VERSION:7938,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,TEXTURE_2D:3553,TEXTURE:5890,TEXTURE_CUBE_MAP:34067,TEXTURE_BINDING_CUBE_MAP:34068,TEXTURE_CUBE_MAP_POSITIVE_X:34069,TEXTURE_CUBE_MAP_NEGATIVE_X:34070,TEXTURE_CUBE_MAP_POSITIVE_Y:34071,TEXTURE_CUBE_MAP_NEGATIVE_Y:34072,TEXTURE_CUBE_MAP_POSITIVE_Z:34073,TEXTURE_CUBE_MAP_NEGATIVE_Z:34074,MAX_CUBE_MAP_TEXTURE_SIZE:34076,TEXTURE0:33984,TEXTURE1:33985,TEXTURE2:33986,TEXTURE3:33987,TEXTURE4:33988,TEXTURE5:33989,TEXTURE6:33990,TEXTURE7:33991,TEXTURE8:33992,TEXTURE9:33993,TEXTURE10:33994,TEXTURE11:33995,TEXTURE12:33996,TEXTURE13:33997,TEXTURE14:33998,TEXTURE15:33999,TEXTURE16:34e3,TEXTURE17:34001,TEXTURE18:34002,TEXTURE19:34003,TEXTURE20:34004,TEXTURE21:34005,TEXTURE22:34006,TEXTURE23:34007,TEXTURE24:34008,TEXTURE25:34009,TEXTURE26:34010,TEXTURE27:34011,TEXTURE28:34012,TEXTURE29:34013,TEXTURE30:34014,TEXTURE31:34015,ACTIVE_TEXTURE:34016,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,VERTEX_ATTRIB_ARRAY_ENABLED:34338,VERTEX_ATTRIB_ARRAY_SIZE:34339,VERTEX_ATTRIB_ARRAY_STRIDE:34340,VERTEX_ATTRIB_ARRAY_TYPE:34341,VERTEX_ATTRIB_ARRAY_NORMALIZED:34922,VERTEX_ATTRIB_ARRAY_POINTER:34373,VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:34975,COMPILE_STATUS:35713,LOW_FLOAT:36336,MEDIUM_FLOAT:36337,HIGH_FLOAT:36338,LOW_INT:36339,MEDIUM_INT:36340,HIGH_INT:36341,FRAMEBUFFER:36160,RENDERBUFFER:36161,RGBA4:32854,RGB5_A1:32855,RGB565:36194,DEPTH_COMPONENT16:33189,STENCIL_INDEX:6401,STENCIL_INDEX8:36168,DEPTH_STENCIL:34041,RENDERBUFFER_WIDTH:36162,RENDERBUFFER_HEIGHT:36163,RENDERBUFFER_INTERNAL_FORMAT:36164,RENDERBUFFER_RED_SIZE:36176,RENDERBUFFER_GREEN_SIZE:36177,RENDERBUFFER_BLUE_SIZE:36178,RENDERBUFFER_ALPHA_SIZE:36179,RENDERBUFFER_DEPTH_SIZE:36180,RENDERBUFFER_STENCIL_SIZE:36181,FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:36048,FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:36049,FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:36050,FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:36051,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306,NONE:0,FRAMEBUFFER_COMPLETE:36053,FRAMEBUFFER_INCOMPLETE_ATTACHMENT:36054,FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:36055,FRAMEBUFFER_INCOMPLETE_DIMENSIONS:36057,FRAMEBUFFER_UNSUPPORTED:36061,FRAMEBUFFER_BINDING:36006,RENDERBUFFER_BINDING:36007,MAX_RENDERBUFFER_SIZE:34024,INVALID_FRAMEBUFFER_OPERATION:1286,UNPACK_FLIP_Y_WEBGL:37440,UNPACK_PREMULTIPLY_ALPHA_WEBGL:37441,CONTEXT_LOST_WEBGL:37442,UNPACK_COLORSPACE_CONVERSION_WEBGL:37443,BROWSER_DEFAULT_WEBGL:37444};function fs(e){var t=new XMLHttpRequest;t.open("get",e.url),t.responseType=e.responseType||"text",e.onprogress&&(t.onprogress=function(r){if(r.lengthComputable){var n=r.loaded/r.total;e.onprogress(n,r.loaded,r.total)}else e.onprogress(null)}),t.onload=function(r){t.status>=400?e.onerror&&e.onerror():e.onload&&e.onload(t.response)},e.onerror&&(t.onerror=e.onerror),t.send(null)}var cs={get:fs},dn,Ne={};Ne.supportWebGL=function(){if(dn==null)try{var e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");if(!t)throw new Error}catch{dn=!1}return dn};Ne.Int8Array=typeof Int8Array=="undefined"?Array:Int8Array;Ne.Uint8Array=typeof Uint8Array=="undefined"?Array:Uint8Array;Ne.Uint16Array=typeof Uint16Array=="undefined"?Array:Uint16Array;Ne.Uint32Array=typeof Uint32Array=="undefined"?Array:Uint32Array;Ne.Int16Array=typeof Int16Array=="undefined"?Array:Int16Array;Ne.Float32Array=typeof Float32Array=="undefined"?Array:Float32Array;Ne.Float64Array=typeof Float64Array=="undefined"?Array:Float64Array;var bt={};typeof window!="undefined"?bt=window:typeof global!="undefined"&&(bt=global);Ne.requestAnimationFrame=bt.requestAnimationFrame||bt.msRequestAnimationFrame||bt.mozRequestAnimationFrame||bt.webkitRequestAnimationFrame||function(e){setTimeout(e,16)};Ne.createCanvas=function(){return document.createElement("canvas")};Ne.createImage=function(){return new bt.Image};Ne.request={get:cs.get};Ne.addEventListener=function(e,t,r,n){e.addEventListener(t,r,n)};Ne.removeEventListener=function(e,t,r){e.removeEventListener(t,r)};var pe=Ne,Te=function(){this.head=null,this.tail=null,this._length=0};Te.prototype.insert=function(e){var t=new Te.Entry(e);return this.insertEntry(t),t};Te.prototype.insertAt=function(e,t){if(!(e<0)){for(var r=this.head,n=0;r&&n!=e;)r=r.next,n++;if(r){var i=new Te.Entry(t),a=r.prev;a?(a.next=i,i.prev=a):this.head=i,i.next=r,r.prev=i}else this.insert(t)}};Te.prototype.insertBeforeEntry=function(e,t){var r=new Te.Entry(e),n=t.prev;n?(n.next=r,r.prev=n):this.head=r,r.next=t,t.prev=r,this._length++};Te.prototype.insertEntry=function(e){this.head?(this.tail.next=e,e.prev=this.tail,this.tail=e):this.head=this.tail=e,this._length++};Te.prototype.remove=function(e){var t=e.prev,r=e.next;t?t.next=r:this.head=r,r?r.prev=t:this.tail=t,e.next=e.prev=null,this._length--};Te.prototype.removeAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;if(t)return this.remove(t),t.value}};Te.prototype.getHead=function(){if(this.head)return this.head.value};Te.prototype.getTail=function(){if(this.tail)return this.tail.value};Te.prototype.getAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;return t.value}};Te.prototype.indexOf=function(e){for(var t=this.head,r=0;t;){if(t.value===e)return r;t=t.next,r++}};Te.prototype.length=function(){return this._length};Te.prototype.isEmpty=function(){return this._length===0};Te.prototype.forEach=function(e,t){for(var r=this.head,n=0,i=typeof t!="undefined";r;)i?e.call(t,r.value,n):e(r.value,n),r=r.next,n++};Te.prototype.clear=function(){this.tail=this.head=null,this._length=0};Te.Entry=function(e){this.value=e,this.next=null,this.prev=null};var hs=Te,Bt=function(e){this._list=new hs,this._map={},this._maxSize=e||10};Bt.prototype.setMaxSize=function(e){this._maxSize=e};Bt.prototype.put=function(e,t){if(!this._map.hasOwnProperty(e)){var r=this._list.length();if(r>=this._maxSize&&r>0){var n=this._list.head;this._list.remove(n),delete this._map[n.key]}var i=this._list.insert(t);i.key=e,this._map[e]=i}};Bt.prototype.get=function(e){var t=this._map[e];if(this._map.hasOwnProperty(e))return t!==this._list.tail&&(this._list.remove(t),this._list.insertEntry(t)),t.value};Bt.prototype.remove=function(e){var t=this._map[e];typeof t!="undefined"&&(delete this._map[e],this._list.remove(t))};Bt.prototype.clear=function(){this._list.clear(),this._map={}};var yi=Bt,fe={},xi={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function et(e){return e=Math.round(e),e<0?0:e>255?255:e}function ds(e){return e=Math.round(e),e<0?0:e>360?360:e}function ir(e){return e<0?0:e>1?1:e}function vn(e){return e.length&&e.charAt(e.length-1)==="%"?et(parseFloat(e)/100*255):et(parseInt(e,10))}function Ut(e){return e.length&&e.charAt(e.length-1)==="%"?ir(parseFloat(e)/100):ir(parseFloat(e))}function pn(e,t,r){return r<0?r+=1:r>1&&(r-=1),r*6<1?e+(t-e)*r*6:r*2<1?t:r*3<2?e+(t-e)*(2/3-r)*6:e}function _t(e,t,r){return e+(t-e)*r}function tt(e,t,r,n,i){return e[0]=t,e[1]=r,e[2]=n,e[3]=i,e}function mn(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}var Ti=new yi(20),Rr=null;function Ht(e,t){Rr&&mn(Rr,t),Rr=Ti.put(e,Rr||t.slice())}fe.parse=function(e,t){if(!!e){t=t||[];var r=Ti.get(e);if(r)return mn(t,r);e=e+"";var n=e.replace(/ /g,"").toLowerCase();if(n in xi)return mn(t,xi[n]),Ht(e,t),t;if(n.charAt(0)==="#"){if(n.length===4){var i=parseInt(n.substr(1),16);if(!(i>=0&&i<=4095)){tt(t,0,0,0,1);return}return tt(t,(i&3840)>>4|(i&3840)>>8,i&240|(i&240)>>4,i&15|(i&15)<<4,1),Ht(e,t),t}else if(n.length===7){var i=parseInt(n.substr(1),16);if(!(i>=0&&i<=16777215)){tt(t,0,0,0,1);return}return tt(t,(i&16711680)>>16,(i&65280)>>8,i&255,1),Ht(e,t),t}return}var a=n.indexOf("("),o=n.indexOf(")");if(a!==-1&&o+1===n.length){var s=n.substr(0,a),l=n.substr(a+1,o-(a+1)).split(","),u=1;switch(s){case"rgba":if(l.length!==4){tt(t,0,0,0,1);return}u=Ut(l.pop());case"rgb":if(l.length!==3){tt(t,0,0,0,1);return}return tt(t,vn(l[0]),vn(l[1]),vn(l[2]),u),Ht(e,t),t;case"hsla":if(l.length!==4){tt(t,0,0,0,1);return}return l[3]=Ut(l[3]),_n(l,t),Ht(e,t),t;case"hsl":if(l.length!==3){tt(t,0,0,0,1);return}return _n(l,t),Ht(e,t),t;default:return}}tt(t,0,0,0,1)}};fe.parseToFloat=function(e,t){if(t=fe.parse(e,t),!!t)return t[0]/=255,t[1]/=255,t[2]/=255,t};function _n(e,t){var r=(parseFloat(e[0])%360+360)%360/360,n=Ut(e[1]),i=Ut(e[2]),a=i<=.5?i*(n+1):i+n-i*n,o=i*2-a;return t=t||[],tt(t,et(pn(o,a,r+1/3)*255),et(pn(o,a,r)*255),et(pn(o,a,r-1/3)*255),1),e.length===4&&(t[3]=e[3]),t}function vs(e){if(!!e){var t=e[0]/255,r=e[1]/255,n=e[2]/255,i=Math.min(t,r,n),a=Math.max(t,r,n),o=a-i,s=(a+i)/2,l,u;if(o===0)l=0,u=0;else{s<.5?u=o/(a+i):u=o/(2-a-i);var f=((a-t)/6+o/2)/o,c=((a-r)/6+o/2)/o,d=((a-n)/6+o/2)/o;t===a?l=d-c:r===a?l=1/3+f-d:n===a&&(l=2/3+c-f),l<0&&(l+=1),l>1&&(l-=1)}var h=[l*360,u,s];return e[3]!=null&&h.push(e[3]),h}}fe.lift=function(e,t){var r=fe.parse(e);if(r){for(var n=0;n<3;n++)t<0?r[n]=r[n]*(1-t)|0:r[n]=(255-r[n])*t+r[n]|0;return fe.stringify(r,r.length===4?"rgba":"rgb")}};fe.toHex=function(e){var t=fe.parse(e);if(t)return((1<<24)+(t[0]<<16)+(t[1]<<8)+ +t[2]).toString(16).slice(1)};fe.fastLerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){r=r||[];var n=e*(t.length-1),i=Math.floor(n),a=Math.ceil(n),o=t[i],s=t[a],l=n-i;return r[0]=et(_t(o[0],s[0],l)),r[1]=et(_t(o[1],s[1],l)),r[2]=et(_t(o[2],s[2],l)),r[3]=ir(_t(o[3],s[3],l)),r}};fe.fastMapToColor=fe.fastLerp;fe.lerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){var n=e*(t.length-1),i=Math.floor(n),a=Math.ceil(n),o=fe.parse(t[i]),s=fe.parse(t[a]),l=n-i,u=fe.stringify([et(_t(o[0],s[0],l)),et(_t(o[1],s[1],l)),et(_t(o[2],s[2],l)),ir(_t(o[3],s[3],l))],"rgba");return r?{color:u,leftIndex:i,rightIndex:a,value:n}:u}};fe.mapToColor=fe.lerp;fe.modifyHSL=function(e,t,r,n){if(e=fe.parse(e),e)return e=vs(e),t!=null&&(e[0]=ds(t)),r!=null&&(e[1]=Ut(r)),n!=null&&(e[2]=Ut(n)),fe.stringify(_n(e),"rgba")};fe.modifyAlpha=function(e,t){if(e=fe.parse(e),e&&t!=null)return e[3]=ir(t),fe.stringify(e,"rgba")};fe.stringify=function(e,t){if(!(!e||!e.length)){var r=e[0]+","+e[1]+","+e[2];return(t==="rgba"||t==="hsva"||t==="hsla")&&(r+=","+e[3]),t+"("+r+")"}};var ps=fe,ms=ps.parseToFloat,gn={};function Ei(e){var t=Object.keys(e);t.sort();for(var r=[],n=0;n<t.length;n++){var i=t[n],a=e[i];a===null?r.push(i):r.push(i+" "+a.toString())}return r.join(`
`)}function _s(e,t,r){r.sort();for(var n=[],i=0;i<r.length;i++){var a=r[i];n.push(a)}var o=Ei(e)+`
`+Ei(t)+`
`+n.join(`
`);if(gn[o])return gn[o];var s=Ae.genGUID();return gn[o]=s,s}var gs=Be.extend(function(){return{name:"",depthTest:!0,depthMask:!0,transparent:!1,blend:null,autoUpdateTextureStatus:!0,uniforms:{},vertexDefines:{},fragmentDefines:{},_textureStatus:{},_enabledUniforms:null}},function(){this.name||(this.name="MATERIAL_"+this.__uid__),this.shader&&this.attachShader(this.shader,!0)},{precision:"highp",setUniform:function(e,t){t===void 0&&console.warn('Uniform value "'+e+'" is undefined');var r=this.uniforms[e];r&&(typeof t=="string"&&(t=ms(t)||t),r.value=t,this.autoUpdateTextureStatus&&r.type==="t"&&(t?this.enableTexture(e):this.disableTexture(e)))},setUniforms:function(e){for(var t in e){var r=e[t];this.setUniform(t,r)}},isUniformEnabled:function(e){return this._enabledUniforms.indexOf(e)>=0},getEnabledUniforms:function(){return this._enabledUniforms},getTextureUniforms:function(){return this._textureUniforms},set:function(e,t){if(typeof e=="object")for(var r in e){var n=e[r];this.setUniform(r,n)}else this.setUniform(e,t)},get:function(e){var t=this.uniforms[e];if(t)return t.value},attachShader:function(e,t){var r=this.uniforms;this.uniforms=e.createUniforms(),this.shader=e;var n=this.uniforms;this._enabledUniforms=Object.keys(n),this._enabledUniforms.sort(),this._textureUniforms=this._enabledUniforms.filter(function(u){var f=this.uniforms[u].type;return f==="t"||f==="tv"},this);var i=this.vertexDefines,a=this.fragmentDefines;if(this.vertexDefines=Ae.clone(e.vertexDefines),this.fragmentDefines=Ae.clone(e.fragmentDefines),t){for(var o in r)n[o]&&(n[o].value=r[o].value);Ae.defaults(this.vertexDefines,i),Ae.defaults(this.fragmentDefines,a)}var s={};for(var l in e.textures)s[l]={shaderType:e.textures[l].shaderType,type:e.textures[l].type,enabled:t&&this._textureStatus[l]?this._textureStatus[l].enabled:!1};this._textureStatus=s,this._programKey=""},clone:function(){var e=new this.constructor({name:this.name,shader:this.shader});for(var t in this.uniforms)e.uniforms[t].value=this.uniforms[t].value;return e.depthTest=this.depthTest,e.depthMask=this.depthMask,e.transparent=this.transparent,e.blend=this.blend,e.vertexDefines=Ae.clone(this.vertexDefines),e.fragmentDefines=Ae.clone(this.fragmentDefines),e.enableTexture(this.getEnabledTextures()),e.precision=this.precision,e},define:function(e,t,r){var n=this.vertexDefines,i=this.fragmentDefines;e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<3&&(r=t,t=e,e="both"),r=r!=null?r:null,(e==="vertex"||e==="both")&&n[t]!==r&&(n[t]=r,this._programKey=""),(e==="fragment"||e==="both")&&i[t]!==r&&(i[t]=r,e!=="both"&&(this._programKey=""))},undefine:function(e,t){e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<2&&(t=e,e="both"),(e==="vertex"||e==="both")&&this.isDefined("vertex",t)&&(delete this.vertexDefines[t],this._programKey=""),(e==="fragment"||e==="both")&&this.isDefined("fragment",t)&&(delete this.fragmentDefines[t],e!=="both"&&(this._programKey=""))},isDefined:function(e,t){switch(e){case"vertex":return this.vertexDefines[t]!==void 0;case"fragment":return this.fragmentDefines[t]!==void 0}},getDefine:function(e,t){switch(e){case"vertex":return this.vertexDefines[t];case"fragment":return this.fragmentDefines[t]}},enableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.enableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var n=r.enabled;n||(r.enabled=!0,this._programKey="")}},enableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!0;this._programKey=""},disableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.disableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var n=!r.enabled;n||(r.enabled=!1,this._programKey="")}},disableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!1;this._programKey=""},isTextureEnabled:function(e){var t=this._textureStatus;return!!t[e]&&t[e].enabled},getEnabledTextures:function(){var e=[],t=this._textureStatus;for(var r in t)t[r].enabled&&e.push(r);return e},dirtyDefines:function(){this._programKey=""},getProgramKey:function(){return this._programKey||(this._programKey=_s(this.vertexDefines,this.fragmentDefines,this.getEnabledTextures())),this._programKey}}),ut=gs,Lr=1e-6,Se=Array,zt=Math.random,j={};j.create=function(){var e=new Se(2);return e[0]=0,e[1]=0,e};j.clone=function(e){var t=new Se(2);return t[0]=e[0],t[1]=e[1],t};j.fromValues=function(e,t){var r=new Se(2);return r[0]=e,r[1]=t,r};j.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e};j.set=function(e,t,r){return e[0]=t,e[1]=r,e};j.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e};j.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e};j.sub=j.subtract;j.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e};j.mul=j.multiply;j.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e};j.div=j.divide;j.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e};j.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e};j.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e};j.scaleAndAdd=function(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e};j.distance=function(e,t){var r=t[0]-e[0],n=t[1]-e[1];return Math.sqrt(r*r+n*n)};j.dist=j.distance;j.squaredDistance=function(e,t){var r=t[0]-e[0],n=t[1]-e[1];return r*r+n*n};j.sqrDist=j.squaredDistance;j.length=function(e){var t=e[0],r=e[1];return Math.sqrt(t*t+r*r)};j.len=j.length;j.squaredLength=function(e){var t=e[0],r=e[1];return t*t+r*r};j.sqrLen=j.squaredLength;j.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e};j.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e};j.normalize=function(e,t){var r=t[0],n=t[1],i=r*r+n*n;return i>0&&(i=1/Math.sqrt(i),e[0]=t[0]*i,e[1]=t[1]*i),e};j.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]};j.cross=function(e,t,r){var n=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=n,e};j.lerp=function(e,t,r,n){var i=t[0],a=t[1];return e[0]=i+n*(r[0]-i),e[1]=a+n*(r[1]-a),e};j.random=function(e,t){t=t||1;var r=GLMAT_RANDOM()*2*Math.PI;return e[0]=Math.cos(r)*t,e[1]=Math.sin(r)*t,e};j.transformMat2=function(e,t,r){var n=t[0],i=t[1];return e[0]=r[0]*n+r[2]*i,e[1]=r[1]*n+r[3]*i,e};j.transformMat2d=function(e,t,r){var n=t[0],i=t[1];return e[0]=r[0]*n+r[2]*i+r[4],e[1]=r[1]*n+r[3]*i+r[5],e};j.transformMat3=function(e,t,r){var n=t[0],i=t[1];return e[0]=r[0]*n+r[3]*i+r[6],e[1]=r[1]*n+r[4]*i+r[7],e};j.transformMat4=function(e,t,r){var n=t[0],i=t[1];return e[0]=r[0]*n+r[4]*i+r[12],e[1]=r[1]*n+r[5]*i+r[13],e};j.forEach=function(){var e=j.create();return function(t,r,n,i,a,o){var s,l;for(r||(r=2),n||(n=0),i?l=Math.min(i*r+n,t.length):l=t.length,s=n;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],a(e,e,o),t[s]=e[0],t[s+1]=e[1];return t}}();var I=j,K=function(e,t){e=e||0,t=t||0,this.array=I.fromValues(e,t),this._dirty=!0};K.prototype={constructor:K,add:function(e){return I.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t){return this.array[0]=e,this.array[1]=t,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this._dirty=!0,this},clone:function(){return new K(this.x,this.y)},copy:function(e){return I.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return I.cross(e.array,this.array,t.array),e._dirty=!0,this},dist:function(e){return I.dist(this.array,e.array)},distance:function(e){return I.distance(this.array,e.array)},div:function(e){return I.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return I.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return I.dot(this.array,e.array)},len:function(){return I.len(this.array)},length:function(){return I.length(this.array)},lerp:function(e,t,r){return I.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return I.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return I.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return I.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return I.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return I.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return I.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return I.random(this.array,e),this._dirty=!0,this},scale:function(e){return I.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return I.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return I.sqrDist(this.array,e.array)},squaredDistance:function(e){return I.squaredDistance(this.array,e.array)},sqrLen:function(){return I.sqrLen(this.array)},squaredLength:function(){return I.squaredLength(this.array)},sub:function(e){return I.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return I.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat2:function(e){return I.transformMat2(this.array,this.array,e.array),this._dirty=!0,this},transformMat2d:function(e){return I.transformMat2d(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return I.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return I.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};if(Object.defineProperty){var Ai=K.prototype;Object.defineProperty(Ai,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Object.defineProperty(Ai,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}})}K.add=function(e,t,r){return I.add(e.array,t.array,r.array),e._dirty=!0,e};K.set=function(e,t,r){return I.set(e.array,t,r),e._dirty=!0,e};K.copy=function(e,t){return I.copy(e.array,t.array),e._dirty=!0,e};K.cross=function(e,t,r){return I.cross(e.array,t.array,r.array),e._dirty=!0,e};K.dist=function(e,t){return I.distance(e.array,t.array)};K.distance=K.dist;K.div=function(e,t,r){return I.divide(e.array,t.array,r.array),e._dirty=!0,e};K.divide=K.div;K.dot=function(e,t){return I.dot(e.array,t.array)};K.len=function(e){return I.length(e.array)};K.lerp=function(e,t,r,n){return I.lerp(e.array,t.array,r.array,n),e._dirty=!0,e};K.min=function(e,t,r){return I.min(e.array,t.array,r.array),e._dirty=!0,e};K.max=function(e,t,r){return I.max(e.array,t.array,r.array),e._dirty=!0,e};K.mul=function(e,t,r){return I.multiply(e.array,t.array,r.array),e._dirty=!0,e};K.multiply=K.mul;K.negate=function(e,t){return I.negate(e.array,t.array),e._dirty=!0,e};K.normalize=function(e,t){return I.normalize(e.array,t.array),e._dirty=!0,e};K.random=function(e,t){return I.random(e.array,t),e._dirty=!0,e};K.scale=function(e,t,r){return I.scale(e.array,t.array,r),e._dirty=!0,e};K.scaleAndAdd=function(e,t,r,n){return I.scaleAndAdd(e.array,t.array,r.array,n),e._dirty=!0,e};K.sqrDist=function(e,t){return I.sqrDist(e.array,t.array)};K.squaredDistance=K.sqrDist;K.sqrLen=function(e){return I.sqrLen(e.array)};K.squaredLength=K.sqrLen;K.sub=function(e,t,r){return I.subtract(e.array,t.array,r.array),e._dirty=!0,e};K.subtract=K.sub;K.transformMat2=function(e,t,r){return I.transformMat2(e.array,t.array,r.array),e._dirty=!0,e};K.transformMat2d=function(e,t,r){return I.transformMat2d(e.array,t.array,r.array),e._dirty=!0,e};K.transformMat3=function(e,t,r){return I.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};K.transformMat4=function(e,t,r){return I.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};var Ge=K,Si=1,wi=2,yn=3,bi={};function ys(e){for(var t=e.split(`
`),r=0,n=t.length;r<n;r++)t[r]=r+1+": "+t[r];return t.join(`
`)}function Ci(e,t,r){if(!e.getShaderParameter(t,e.COMPILE_STATUS))return[e.getShaderInfoLog(t),ys(r)].join(`
`)}var Ri=new pe.Float32Array(16),xs=Be.extend({uniformSemantics:{},attributes:{}},function(){this._locations={},this._textureSlot=0,this._program=null},{bind:function(e){this._textureSlot=0,e.gl.useProgram(this._program)},hasUniform:function(e){var t=this._locations[e];return t!=null},useTextureSlot:function(e,t,r){t&&(e.gl.activeTexture(e.gl.TEXTURE0+r),t.isRenderable()?t.bind(e):t.unbind(e))},currentTextureSlot:function(){return this._textureSlot},resetTextureSlot:function(e){this._textureSlot=e||0},takeCurrentTextureSlot:function(e,t){var r=this._textureSlot;return this.useTextureSlot(e,t,r),this._textureSlot++,r},setUniform:function(e,t,r,n){var i=this._locations,a=i[r];if(a==null)return!1;switch(t){case"m4":if(!(n instanceof Float32Array)){for(var o=0;o<n.length;o++)Ri[o]=n[o];n=Ri}e.uniformMatrix4fv(a,!1,n);break;case"2i":e.uniform2i(a,n[0],n[1]);break;case"2f":e.uniform2f(a,n[0],n[1]);break;case"3i":e.uniform3i(a,n[0],n[1],n[2]);break;case"3f":e.uniform3f(a,n[0],n[1],n[2]);break;case"4i":e.uniform4i(a,n[0],n[1],n[2],n[3]);break;case"4f":e.uniform4f(a,n[0],n[1],n[2],n[3]);break;case"1i":e.uniform1i(a,n);break;case"1f":e.uniform1f(a,n);break;case"1fv":e.uniform1fv(a,n);break;case"1iv":e.uniform1iv(a,n);break;case"2iv":e.uniform2iv(a,n);break;case"2fv":e.uniform2fv(a,n);break;case"3iv":e.uniform3iv(a,n);break;case"3fv":e.uniform3fv(a,n);break;case"4iv":e.uniform4iv(a,n);break;case"4fv":e.uniform4fv(a,n);break;case"m2":case"m2v":e.uniformMatrix2fv(a,!1,n);break;case"m3":case"m3v":e.uniformMatrix3fv(a,!1,n);break;case"m4v":if(Array.isArray(n)&&Array.isArray(n[0])){for(var s=new pe.Float32Array(n.length*16),l=0,o=0;o<n.length;o++)for(var u=n[o],f=0;f<16;f++)s[l++]=u[f];e.uniformMatrix4fv(a,!1,s)}else e.uniformMatrix4fv(a,!1,n);break}return!0},setUniformOfSemantic:function(e,t,r){var n=this.uniformSemantics[t];return n?this.setUniform(e,n.type,n.symbol,r):!1},enableAttributes:function(e,t,r){var n=e.gl,i=this._program,a=this._locations,o;r?o=r.__enabledAttributeList:o=bi[e.__uid__],o||(r?o=r.__enabledAttributeList=[]:o=bi[e.__uid__]=[]);for(var s=[],l=0;l<t.length;l++){var u=t[l];if(!this.attributes[u]){s[l]=-1;continue}var f=a[u];if(f==null){if(f=n.getAttribLocation(i,u),f===-1){s[l]=-1;continue}a[u]=f}s[l]=f,o[f]?o[f]=wi:o[f]=Si}for(var l=0;l<o.length;l++)switch(o[l]){case Si:n.enableVertexAttribArray(l),o[l]=yn;break;case wi:o[l]=yn;break;case yn:n.disableVertexAttribArray(l),o[l]=0;break}return s},getAttribLocation:function(e,t){var r=this._locations,n=r[t];return n==null&&(n=e.getAttribLocation(this._program,t),r[t]=n),n},buildProgram:function(e,t,r,n){var i=e.createShader(e.VERTEX_SHADER),a=e.createProgram();e.shaderSource(i,r),e.compileShader(i);var o=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(o,n),e.compileShader(o);var s=Ci(e,i,r);if(s||(s=Ci(e,o,n),s))return s;if(e.attachShader(a,i),e.attachShader(a,o),t.attributeSemantics.POSITION)e.bindAttribLocation(a,0,t.attributeSemantics.POSITION.symbol);else{var l=Object.keys(this.attributes);e.bindAttribLocation(a,0,l[0])}if(e.linkProgram(a),e.deleteShader(i),e.deleteShader(o),this._program=a,this.vertexCode=r,this.fragmentCode=n,!e.getProgramParameter(a,e.LINK_STATUS))return`Could not link program
`+e.getProgramInfoLog(a);for(var u=0;u<t.uniforms.length;u++){var f=t.uniforms[u];this._locations[f]=e.getUniformLocation(a,f)}}}),Ts=xs,Es=/for\s*?\(int\s*?_idx_\s*\=\s*([\w-]+)\;\s*_idx_\s*<\s*([\w-]+);\s*_idx_\s*\+\+\s*\)\s*\{\{([\s\S]+?)(?=\}\})\}\}/g;function Li(e,t,r){function n(o,s,l,u){var f="";isNaN(s)&&(s in t?s=t[s]:s=i[s]),isNaN(l)&&(l in t?l=t[l]:l=i[l]);for(var c=parseInt(s);c<parseInt(l);c++)f+="{"+u.replace(/float\s*\(\s*_idx_\s*\)/g,c.toFixed(1)).replace(/_idx_/g,c)+"}";return f}var i={};for(var a in r)i[a+"_COUNT"]=r[a];return e.replace(Es,n)}function xn(e,t,r){var n=[];if(t)for(var i in t){var a=t[i];a>0&&n.push("#define "+i.toUpperCase()+"_COUNT "+a)}if(r)for(var o=0;o<r.length;o++){var s=r[o];n.push("#define "+s.toUpperCase()+"_ENABLED")}for(var s in e){var l=e[s];l===null?n.push("#define "+s):n.push("#define "+s+" "+l.toString())}return n.join(`
`)}function As(e){for(var t=[],r=0;r<e.length;r++)t.push("#extension GL_"+e[r]+" : enable");return t.join(`
`)}function Ss(e){return["precision",e,"float"].join(" ")+`;
`+["precision",e,"int"].join(" ")+`;
`+["precision",e,"sampler2D"].join(" ")+`;
`}function Ni(e){this._renderer=e,this._cache={}}Ni.prototype.getProgram=function(e,t,r){var n=this._cache,i=e.isSkinnedMesh&&e.isSkinnedMesh(),a=e.isInstancedMesh&&e.isInstancedMesh(),o="s"+t.shader.shaderID+"m"+t.getProgramKey();r&&(o+="se"+r.getProgramKey(e.lightGroup)),i&&(o+=",sk"+e.joints.length),a&&(o+=",is");var s=n[o];if(s)return s;var l=r?r.getLightsNumbers(e.lightGroup):{},u=this._renderer,f=u.gl,c=t.getEnabledTextures(),d="";if(i){var h={SKINNING:null,JOINT_COUNT:e.joints.length};e.joints.length>u.getMaxJointNumber()&&(h.USE_SKIN_MATRICES_TEXTURE=null),d+=`
`+xn(h)+`
`}a&&(d+=`
#define INSTANCING
`);var v=d+xn(t.vertexDefines,l,c),p=d+xn(t.fragmentDefines,l,c),m=v+`
`+t.shader.vertex,_=["OES_standard_derivatives","EXT_shader_texture_lod"].filter(function(S){return u.getGLExtension(S)!=null});_.indexOf("EXT_shader_texture_lod")>=0&&(p+=`
#define SUPPORT_TEXTURE_LOD`),_.indexOf("OES_standard_derivatives")>=0&&(p+=`
#define SUPPORT_STANDARD_DERIVATIVES`);var x=As(_)+`
`+Ss(t.precision)+`
`+p+`
`+t.shader.fragment,T=Li(m,t.vertexDefines,l),y=Li(x,t.fragmentDefines,l),s=new Ts;s.uniformSemantics=t.shader.uniformSemantics,s.attributes=t.shader.attributes;var E=s.buildProgram(f,t.shader,T,y);return s.__error=E,n[o]=s,s};var Mi=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g,ws=/attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g,Di=/#define\s+(\w+)?(\s+[\d-.]+)?\s*;?\s*\n/g,bs={bool:"1i",int:"1i",sampler2D:"t",samplerCube:"t",float:"1f",vec2:"2f",vec3:"3f",vec4:"4f",ivec2:"2i",ivec3:"3i",ivec4:"4i",mat2:"m2",mat3:"m3",mat4:"m4"};function ft(e){for(var t=[],r=0;r<e;r++)t[r]=0;return t}var Pi={bool:function(){return!0},int:function(){return 0},float:function(){return 0},sampler2D:function(){return null},samplerCube:function(){return null},vec2:function(){return ft(2)},vec3:function(){return ft(3)},vec4:function(){return ft(4)},ivec2:function(){return ft(2)},ivec3:function(){return ft(3)},ivec4:function(){return ft(4)},mat2:function(){return ft(4)},mat3:function(){return ft(9)},mat4:function(){return ft(16)},array:function(){return[]}},Tn=["POSITION","NORMAL","BINORMAL","TANGENT","TEXCOORD","TEXCOORD_0","TEXCOORD_1","COLOR","JOINT","WEIGHT"],Ii=["SKIN_MATRIX","VIEWPORT_SIZE","VIEWPORT","DEVICEPIXELRATIO","WINDOW_SIZE","NEAR","FAR","TIME"],Oi=["WORLD","VIEW","PROJECTION","WORLDVIEW","VIEWPROJECTION","WORLDVIEWPROJECTION","WORLDINVERSE","VIEWINVERSE","PROJECTIONINVERSE","WORLDVIEWINVERSE","VIEWPROJECTIONINVERSE","WORLDVIEWPROJECTIONINVERSE","WORLDTRANSPOSE","VIEWTRANSPOSE","PROJECTIONTRANSPOSE","WORLDVIEWTRANSPOSE","VIEWPROJECTIONTRANSPOSE","WORLDVIEWPROJECTIONTRANSPOSE","WORLDINVERSETRANSPOSE","VIEWINVERSETRANSPOSE","PROJECTIONINVERSETRANSPOSE","WORLDVIEWINVERSETRANSPOSE","VIEWPROJECTIONINVERSETRANSPOSE","WORLDVIEWPROJECTIONINVERSETRANSPOSE"],Cs={vec4:4,vec3:3,vec2:2,float:1},En={},Fi={};function Rs(e,t){var r="vertex:"+e+"fragment:"+t;if(En[r])return En[r];var n=Ae.genGUID();return En[r]=n,Fi[n]={vertex:e,fragment:t},n}function Bi(e){return e.replace(/[ \t]*\/\/.*\n/g,"").replace(/[ \t]*\/\*[\s\S]*?\*\//g,"")}function Gt(){console.error("Wrong uniform/attributes syntax")}function Ui(e,t){for(var r=/[,=\(\):]/,n=t.replace(/:\s*\[\s*(.*)\s*\]/g,"="+e+"($1)").replace(/\s+/g,"").split(/(?=[,=\(\):])/g),i=[],a=0;a<n.length;a++)n[a].match(r)?i.push(n[a].charAt(0),n[a].slice(1)):i.push(n[a]);n=i;var o=0,s=1,l=2,u=3,f=4,c=5,d=o,h={},v=null,p;m(n[0]);function m(T){T||Gt();var y=T.match(/\[(.*?)\]/);p=T.replace(/\[(.*?)\]/,""),h[p]={},y&&(h[p].isArray=!0,h[p].arraySize=y[1])}for(var a=1;a<n.length;a++){var _=n[a];if(!!_){if(_==="="){if(d!==o&&d!==u){Gt();break}d=s;continue}else if(_===":"){d=f;continue}else if(_===","){if(d===l){if(!(v instanceof Array)){Gt();break}v.push(+n[++a])}else d=c;continue}else if(_===")"){h[p].value=new pe.Float32Array(v),v=null,d=c;continue}else if(_==="("){if(d!==l){Gt();break}if(!(v instanceof Array)){Gt();break}v.push(+n[++a]);continue}else if(_.indexOf("vec")>=0){if(d!==s&&d!==f){Gt();break}d=l,v=[];continue}else if(d===s){e==="bool"?h[p].value=_==="true":h[p].value=parseFloat(_),v=null;continue}else if(d===f){var x=_;Tn.indexOf(x)>=0||Ii.indexOf(x)>=0||Oi.indexOf(x)>=0?h[p].semantic=x:x==="ignore"||x==="unconfigurable"?h[p].ignore=!0:e==="bool"?h[p].value=x==="true":h[p].value=parseFloat(x);continue}m(_),d=o}}return h}function b(e,t){typeof e=="object"&&(t=e.fragment,e=e.vertex),e=Bi(e),t=Bi(t),this._shaderID=Rs(e,t),this._vertexCode=b.parseImport(e),this._fragmentCode=b.parseImport(t),this.attributeSemantics={},this.matrixSemantics={},this.uniformSemantics={},this.matrixSemanticKeys=[],this.uniformTemplates={},this.attributes={},this.textures={},this.vertexDefines={},this.fragmentDefines={},this._parseAttributes(),this._parseUniforms(),this._parseDefines()}b.prototype={constructor:b,createUniforms:function(){var e={};for(var t in this.uniformTemplates){var r=this.uniformTemplates[t];e[t]={type:r.type,value:r.value()}}return e},_parseImport:function(){this._vertexCode=b.parseImport(this.vertex),this._fragmentCode=b.parseImport(this.fragment)},_addSemanticUniform:function(e,t,r){if(Tn.indexOf(r)>=0)this.attributeSemantics[r]={symbol:e,type:t};else if(Oi.indexOf(r)>=0){var n=!1,i=r;r.match(/TRANSPOSE$/)&&(n=!0,i=r.slice(0,-9)),this.matrixSemantics[r]={symbol:e,type:t,isTranspose:n,semanticNoTranspose:i}}else Ii.indexOf(r)>=0&&(this.uniformSemantics[r]={symbol:e,type:t})},_addMaterialUniform:function(e,t,r,n,i,a){a[e]={type:r,value:i?Pi.array:n||Pi[t],semantic:null}},_parseUniforms:function(){var e={},t=this,r="vertex";this._uniformList=[],this._vertexCode=this._vertexCode.replace(Mi,i),r="fragment",this._fragmentCode=this._fragmentCode.replace(Mi,i),t.matrixSemanticKeys=Object.keys(this.matrixSemantics);function n(a){return a!=null?function(){return a}:null}function i(a,o,s){var l=Ui(o,s),u=[];for(var f in l){var c=l[f],d=c.semantic,h=f,v=bs[o],p=n(l[f].value);l[f].isArray&&(h+="["+l[f].arraySize+"]",v+="v"),u.push(h),t._uniformList.push(f),c.ignore||((o==="sampler2D"||o==="samplerCube")&&(t.textures[f]={shaderType:r,type:o}),d?t._addSemanticUniform(f,v,d):t._addMaterialUniform(f,o,v,p,l[f].isArray,e))}return u.length>0?"uniform "+o+" "+u.join(",")+`;
`:""}this.uniformTemplates=e},_parseAttributes:function(){var e={},t=this;this._vertexCode=this._vertexCode.replace(ws,r);function r(n,i,a){var o=Ui(i,a),s=Cs[i]||1,l=[];for(var u in o){var f=o[u].semantic;if(e[u]={type:"float",size:s,semantic:f||null},f){if(Tn.indexOf(f)<0)throw new Error('Unkown semantic "'+f+'"');t.attributeSemantics[f]={symbol:u,type:i}}l.push(u)}return"attribute "+i+" "+l.join(",")+`;
`}this.attributes=e},_parseDefines:function(){var e=this,t="vertex";this._vertexCode=this._vertexCode.replace(Di,r),t="fragment",this._fragmentCode=this._fragmentCode.replace(Di,r);function r(n,i,a){var o=t==="vertex"?e.vertexDefines:e.fragmentDefines;return o[i]||(a==="false"?o[i]=!1:a==="true"?o[i]=!0:o[i]=a?isNaN(parseFloat(a))?a.trim():parseFloat(a):null),""}},clone:function(){var e=Fi[this._shaderID],t=new b(e.vertex,e.fragment);return t}};Object.defineProperty&&(Object.defineProperty(b.prototype,"shaderID",{get:function(){return this._shaderID}}),Object.defineProperty(b.prototype,"vertex",{get:function(){return this._vertexCode}}),Object.defineProperty(b.prototype,"fragment",{get:function(){return this._fragmentCode}}),Object.defineProperty(b.prototype,"uniforms",{get:function(){return this._uniformList}}));var Ls=/(@import)\s*([0-9a-zA-Z_\-\.]*)/g;b.parseImport=function(e){return e=e.replace(Ls,function(t,r,n){var t=b.source(n);return t?b.parseImport(t):(console.error('Shader chunk "'+n+'" not existed in library'),"")}),e};var Ns=/(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;b.import=function(e){e.replace(Ns,function(t,r,n,i){var i=i.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g,"");if(i){for(var a=n.split("."),o=b.codes,s=0,l;s<a.length-1;)l=a[s++],o[l]||(o[l]={}),o=o[l];l=a[s],o[l]=i}return i})};b.codes={};b.source=function(e){for(var t=e.split("."),r=b.codes,n=0;r&&n<t.length;){var i=t[n++];r=r[i]}return typeof r!="string"?(console.error('Shader "'+e+'" not existed in library'),""):r};var Hi=`@export clay.prez.vertex
uniform mat4 WVP : WORLDVIEWPROJECTION;
attribute vec3 pos : POSITION;
attribute vec2 uv : TEXCOORD_0;
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec2 v_Texcoord;
void main()
{
 vec4 P = vec4(pos, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = WVP * P;
 v_Texcoord = uv * uvRepeat + uvOffset;
}
@end
@export clay.prez.fragment
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
varying vec2 v_Texcoord;
void main()
{
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
 gl_FragColor = vec4(0.0,0.0,0.0,1.0);
}
@end`,ae={};ae.create=function(){var e=new Se(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};ae.clone=function(e){var t=new Se(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};ae.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};ae.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};ae.transpose=function(e,t){if(e===t){var r=t[1],n=t[2],i=t[3],a=t[6],o=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=i,e[13]=o,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e};ae.invert=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],f=t[8],c=t[9],d=t[10],h=t[11],v=t[12],p=t[13],m=t[14],_=t[15],x=r*s-n*o,T=r*l-i*o,y=r*u-a*o,E=n*l-i*s,S=n*u-a*s,L=i*u-a*l,R=f*p-c*v,N=f*m-d*v,X=f*_-h*v,D=c*m-d*p,V=c*_-h*p,B=d*_-h*m,P=x*B-T*V+y*D+E*X-S*N+L*R;return P?(P=1/P,e[0]=(s*B-l*V+u*D)*P,e[1]=(i*V-n*B-a*D)*P,e[2]=(p*L-m*S+_*E)*P,e[3]=(d*S-c*L-h*E)*P,e[4]=(l*X-o*B-u*N)*P,e[5]=(r*B-i*X+a*N)*P,e[6]=(m*y-v*L-_*T)*P,e[7]=(f*L-d*y+h*T)*P,e[8]=(o*V-s*X+u*R)*P,e[9]=(n*X-r*V-a*R)*P,e[10]=(v*S-p*y+_*x)*P,e[11]=(c*y-f*S-h*x)*P,e[12]=(s*N-o*D-l*R)*P,e[13]=(r*D-n*N+i*R)*P,e[14]=(p*T-v*E-m*x)*P,e[15]=(f*E-c*T+d*x)*P,e):null};ae.adjoint=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],f=t[8],c=t[9],d=t[10],h=t[11],v=t[12],p=t[13],m=t[14],_=t[15];return e[0]=s*(d*_-h*m)-c*(l*_-u*m)+p*(l*h-u*d),e[1]=-(n*(d*_-h*m)-c*(i*_-a*m)+p*(i*h-a*d)),e[2]=n*(l*_-u*m)-s*(i*_-a*m)+p*(i*u-a*l),e[3]=-(n*(l*h-u*d)-s*(i*h-a*d)+c*(i*u-a*l)),e[4]=-(o*(d*_-h*m)-f*(l*_-u*m)+v*(l*h-u*d)),e[5]=r*(d*_-h*m)-f*(i*_-a*m)+v*(i*h-a*d),e[6]=-(r*(l*_-u*m)-o*(i*_-a*m)+v*(i*u-a*l)),e[7]=r*(l*h-u*d)-o*(i*h-a*d)+f*(i*u-a*l),e[8]=o*(c*_-h*p)-f*(s*_-u*p)+v*(s*h-u*c),e[9]=-(r*(c*_-h*p)-f*(n*_-a*p)+v*(n*h-a*c)),e[10]=r*(s*_-u*p)-o*(n*_-a*p)+v*(n*u-a*s),e[11]=-(r*(s*h-u*c)-o*(n*h-a*c)+f*(n*u-a*s)),e[12]=-(o*(c*m-d*p)-f*(s*m-l*p)+v*(s*d-l*c)),e[13]=r*(c*m-d*p)-f*(n*m-i*p)+v*(n*d-i*c),e[14]=-(r*(s*m-l*p)-o*(n*m-i*p)+v*(n*l-i*s)),e[15]=r*(s*d-l*c)-o*(n*d-i*c)+f*(n*l-i*s),e};ae.determinant=function(e){var t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],s=e[6],l=e[7],u=e[8],f=e[9],c=e[10],d=e[11],h=e[12],v=e[13],p=e[14],m=e[15],_=t*o-r*a,x=t*s-n*a,T=t*l-i*a,y=r*s-n*o,E=r*l-i*o,S=n*l-i*s,L=u*v-f*h,R=u*p-c*h,N=u*m-d*h,X=f*p-c*v,D=f*m-d*v,V=c*m-d*p;return _*V-x*D+T*X+y*N-E*R+S*L};ae.multiply=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],f=t[7],c=t[8],d=t[9],h=t[10],v=t[11],p=t[12],m=t[13],_=t[14],x=t[15],T=r[0],y=r[1],E=r[2],S=r[3];return e[0]=T*n+y*s+E*c+S*p,e[1]=T*i+y*l+E*d+S*m,e[2]=T*a+y*u+E*h+S*_,e[3]=T*o+y*f+E*v+S*x,T=r[4],y=r[5],E=r[6],S=r[7],e[4]=T*n+y*s+E*c+S*p,e[5]=T*i+y*l+E*d+S*m,e[6]=T*a+y*u+E*h+S*_,e[7]=T*o+y*f+E*v+S*x,T=r[8],y=r[9],E=r[10],S=r[11],e[8]=T*n+y*s+E*c+S*p,e[9]=T*i+y*l+E*d+S*m,e[10]=T*a+y*u+E*h+S*_,e[11]=T*o+y*f+E*v+S*x,T=r[12],y=r[13],E=r[14],S=r[15],e[12]=T*n+y*s+E*c+S*p,e[13]=T*i+y*l+E*d+S*m,e[14]=T*a+y*u+E*h+S*_,e[15]=T*o+y*f+E*v+S*x,e};ae.multiplyAffine=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[4],s=t[5],l=t[6],u=t[8],f=t[9],c=t[10],d=t[12],h=t[13],v=t[14],p=r[0],m=r[1],_=r[2];return e[0]=p*n+m*o+_*u,e[1]=p*i+m*s+_*f,e[2]=p*a+m*l+_*c,p=r[4],m=r[5],_=r[6],e[4]=p*n+m*o+_*u,e[5]=p*i+m*s+_*f,e[6]=p*a+m*l+_*c,p=r[8],m=r[9],_=r[10],e[8]=p*n+m*o+_*u,e[9]=p*i+m*s+_*f,e[10]=p*a+m*l+_*c,p=r[12],m=r[13],_=r[14],e[12]=p*n+m*o+_*u+d,e[13]=p*i+m*s+_*f+h,e[14]=p*a+m*l+_*c+v,e};ae.mul=ae.multiply;ae.mulAffine=ae.multiplyAffine;ae.translate=function(e,t,r){var n=r[0],i=r[1],a=r[2],o,s,l,u,f,c,d,h,v,p,m,_;return t===e?(e[12]=t[0]*n+t[4]*i+t[8]*a+t[12],e[13]=t[1]*n+t[5]*i+t[9]*a+t[13],e[14]=t[2]*n+t[6]*i+t[10]*a+t[14],e[15]=t[3]*n+t[7]*i+t[11]*a+t[15]):(o=t[0],s=t[1],l=t[2],u=t[3],f=t[4],c=t[5],d=t[6],h=t[7],v=t[8],p=t[9],m=t[10],_=t[11],e[0]=o,e[1]=s,e[2]=l,e[3]=u,e[4]=f,e[5]=c,e[6]=d,e[7]=h,e[8]=v,e[9]=p,e[10]=m,e[11]=_,e[12]=o*n+f*i+v*a+t[12],e[13]=s*n+c*i+p*a+t[13],e[14]=l*n+d*i+m*a+t[14],e[15]=u*n+h*i+_*a+t[15]),e};ae.scale=function(e,t,r){var n=r[0],i=r[1],a=r[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};ae.rotate=function(e,t,r,n){var i=n[0],a=n[1],o=n[2],s=Math.sqrt(i*i+a*a+o*o),l,u,f,c,d,h,v,p,m,_,x,T,y,E,S,L,R,N,X,D,V,B,P,U;return Math.abs(s)<Lr?null:(s=1/s,i*=s,a*=s,o*=s,l=Math.sin(r),u=Math.cos(r),f=1-u,c=t[0],d=t[1],h=t[2],v=t[3],p=t[4],m=t[5],_=t[6],x=t[7],T=t[8],y=t[9],E=t[10],S=t[11],L=i*i*f+u,R=a*i*f+o*l,N=o*i*f-a*l,X=i*a*f-o*l,D=a*a*f+u,V=o*a*f+i*l,B=i*o*f+a*l,P=a*o*f-i*l,U=o*o*f+u,e[0]=c*L+p*R+T*N,e[1]=d*L+m*R+y*N,e[2]=h*L+_*R+E*N,e[3]=v*L+x*R+S*N,e[4]=c*X+p*D+T*V,e[5]=d*X+m*D+y*V,e[6]=h*X+_*D+E*V,e[7]=v*X+x*D+S*V,e[8]=c*B+p*P+T*U,e[9]=d*B+m*P+y*U,e[10]=h*B+_*P+E*U,e[11]=v*B+x*P+S*U,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)};ae.rotateX=function(e,t,r){var n=Math.sin(r),i=Math.cos(r),a=t[4],o=t[5],s=t[6],l=t[7],u=t[8],f=t[9],c=t[10],d=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*i+u*n,e[5]=o*i+f*n,e[6]=s*i+c*n,e[7]=l*i+d*n,e[8]=u*i-a*n,e[9]=f*i-o*n,e[10]=c*i-s*n,e[11]=d*i-l*n,e};ae.rotateY=function(e,t,r){var n=Math.sin(r),i=Math.cos(r),a=t[0],o=t[1],s=t[2],l=t[3],u=t[8],f=t[9],c=t[10],d=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i-u*n,e[1]=o*i-f*n,e[2]=s*i-c*n,e[3]=l*i-d*n,e[8]=a*n+u*i,e[9]=o*n+f*i,e[10]=s*n+c*i,e[11]=l*n+d*i,e};ae.rotateZ=function(e,t,r){var n=Math.sin(r),i=Math.cos(r),a=t[0],o=t[1],s=t[2],l=t[3],u=t[4],f=t[5],c=t[6],d=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i+u*n,e[1]=o*i+f*n,e[2]=s*i+c*n,e[3]=l*i+d*n,e[4]=u*i-a*n,e[5]=f*i-o*n,e[6]=c*i-s*n,e[7]=d*i-l*n,e};ae.fromRotationTranslation=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=n+n,l=i+i,u=a+a,f=n*s,c=n*l,d=n*u,h=i*l,v=i*u,p=a*u,m=o*s,_=o*l,x=o*u;return e[0]=1-(h+p),e[1]=c+x,e[2]=d-_,e[3]=0,e[4]=c-x,e[5]=1-(f+p),e[6]=v+m,e[7]=0,e[8]=d+_,e[9]=v-m,e[10]=1-(f+h),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e};ae.fromQuat=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=r+r,s=n+n,l=i+i,u=r*o,f=n*o,c=n*s,d=i*o,h=i*s,v=i*l,p=a*o,m=a*s,_=a*l;return e[0]=1-c-v,e[1]=f+_,e[2]=d-m,e[3]=0,e[4]=f-_,e[5]=1-u-v,e[6]=h+p,e[7]=0,e[8]=d+m,e[9]=h-p,e[10]=1-u-c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};ae.frustum=function(e,t,r,n,i,a,o){var s=1/(r-t),l=1/(i-n),u=1/(a-o);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*l,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(i+n)*l,e[10]=(o+a)*u,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*a*2*u,e[15]=0,e};ae.perspective=function(e,t,r,n,i){var a=1/Math.tan(t/2),o=1/(n-i);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(i+n)*o,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*i*n*o,e[15]=0,e};ae.ortho=function(e,t,r,n,i,a,o){var s=1/(t-r),l=1/(n-i),u=1/(a-o);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*u,e[11]=0,e[12]=(t+r)*s,e[13]=(i+n)*l,e[14]=(o+a)*u,e[15]=1,e};ae.lookAt=function(e,t,r,n){var i,a,o,s,l,u,f,c,d,h,v=t[0],p=t[1],m=t[2],_=n[0],x=n[1],T=n[2],y=r[0],E=r[1],S=r[2];return Math.abs(v-y)<Lr&&Math.abs(p-E)<Lr&&Math.abs(m-S)<Lr?ae.identity(e):(f=v-y,c=p-E,d=m-S,h=1/Math.sqrt(f*f+c*c+d*d),f*=h,c*=h,d*=h,i=x*d-T*c,a=T*f-_*d,o=_*c-x*f,h=Math.sqrt(i*i+a*a+o*o),h?(h=1/h,i*=h,a*=h,o*=h):(i=0,a=0,o=0),s=c*o-d*a,l=d*i-f*o,u=f*a-c*i,h=Math.sqrt(s*s+l*l+u*u),h?(h=1/h,s*=h,l*=h,u*=h):(s=0,l=0,u=0),e[0]=i,e[1]=s,e[2]=f,e[3]=0,e[4]=a,e[5]=l,e[6]=c,e[7]=0,e[8]=o,e[9]=u,e[10]=d,e[11]=0,e[12]=-(i*v+a*p+o*m),e[13]=-(s*v+l*p+u*m),e[14]=-(f*v+c*p+d*m),e[15]=1,e)};ae.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2)+Math.pow(e[9],2)+Math.pow(e[10],2)+Math.pow(e[11],2)+Math.pow(e[12],2)+Math.pow(e[13],2)+Math.pow(e[14],2)+Math.pow(e[15],2))};var w=ae,H={};H.create=function(){var e=new Se(3);return e[0]=0,e[1]=0,e[2]=0,e};H.clone=function(e){var t=new Se(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t};H.fromValues=function(e,t,r){var n=new Se(3);return n[0]=e,n[1]=t,n[2]=r,n};H.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};H.set=function(e,t,r,n){return e[0]=t,e[1]=r,e[2]=n,e};H.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e};H.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e};H.sub=H.subtract;H.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e};H.mul=H.multiply;H.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e};H.div=H.divide;H.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e};H.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e};H.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e};H.scaleAndAdd=function(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e};H.distance=function(e,t){var r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2];return Math.sqrt(r*r+n*n+i*i)};H.dist=H.distance;H.squaredDistance=function(e,t){var r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2];return r*r+n*n+i*i};H.sqrDist=H.squaredDistance;H.length=function(e){var t=e[0],r=e[1],n=e[2];return Math.sqrt(t*t+r*r+n*n)};H.len=H.length;H.squaredLength=function(e){var t=e[0],r=e[1],n=e[2];return t*t+r*r+n*n};H.sqrLen=H.squaredLength;H.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e};H.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e};H.normalize=function(e,t){var r=t[0],n=t[1],i=t[2],a=r*r+n*n+i*i;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e};H.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]};H.cross=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=r[0],s=r[1],l=r[2];return e[0]=i*l-a*s,e[1]=a*o-n*l,e[2]=n*s-i*o,e};H.lerp=function(e,t,r,n){var i=t[0],a=t[1],o=t[2];return e[0]=i+n*(r[0]-i),e[1]=a+n*(r[1]-a),e[2]=o+n*(r[2]-o),e};H.random=function(e,t){t=t||1;var r=zt()*2*Math.PI,n=zt()*2-1,i=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(r)*i,e[1]=Math.sin(r)*i,e[2]=n*t,e};H.transformMat4=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=r[3]*n+r[7]*i+r[11]*a+r[15];return o=o||1,e[0]=(r[0]*n+r[4]*i+r[8]*a+r[12])/o,e[1]=(r[1]*n+r[5]*i+r[9]*a+r[13])/o,e[2]=(r[2]*n+r[6]*i+r[10]*a+r[14])/o,e};H.transformMat3=function(e,t,r){var n=t[0],i=t[1],a=t[2];return e[0]=n*r[0]+i*r[3]+a*r[6],e[1]=n*r[1]+i*r[4]+a*r[7],e[2]=n*r[2]+i*r[5]+a*r[8],e};H.transformQuat=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=r[0],s=r[1],l=r[2],u=r[3],f=u*n+s*a-l*i,c=u*i+l*n-o*a,d=u*a+o*i-s*n,h=-o*n-s*i-l*a;return e[0]=f*u+h*-o+c*-l-d*-s,e[1]=c*u+h*-s+d*-o-f*-l,e[2]=d*u+h*-l+f*-s-c*-o,e};H.rotateX=function(e,t,r,n){var i=[],a=[];return i[0]=t[0]-r[0],i[1]=t[1]-r[1],i[2]=t[2]-r[2],a[0]=i[0],a[1]=i[1]*Math.cos(n)-i[2]*Math.sin(n),a[2]=i[1]*Math.sin(n)+i[2]*Math.cos(n),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};H.rotateY=function(e,t,r,n){var i=[],a=[];return i[0]=t[0]-r[0],i[1]=t[1]-r[1],i[2]=t[2]-r[2],a[0]=i[2]*Math.sin(n)+i[0]*Math.cos(n),a[1]=i[1],a[2]=i[2]*Math.cos(n)-i[0]*Math.sin(n),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};H.rotateZ=function(e,t,r,n){var i=[],a=[];return i[0]=t[0]-r[0],i[1]=t[1]-r[1],i[2]=t[2]-r[2],a[0]=i[0]*Math.cos(n)-i[1]*Math.sin(n),a[1]=i[0]*Math.sin(n)+i[1]*Math.cos(n),a[2]=i[2],e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};H.forEach=function(){var e=H.create();return function(t,r,n,i,a,o){var s,l;for(r||(r=3),n||(n=0),i?l=Math.min(i*r+n,t.length):l=t.length,s=n;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}}();H.angle=function(e,t){var r=H.fromValues(e[0],e[1],e[2]),n=H.fromValues(t[0],t[1],t[2]);H.normalize(r,r),H.normalize(n,n);var i=H.dot(r,n);return i>1?0:Math.acos(i)};var g=H;b.import(Hi);var le=w.create,zi={};function Gi(e){return e.material}function Ms(e,t,r){return t.uniforms[r].value}function Ds(e,t,r,n){return r!==n}function Ps(e){return!0}function Vi(){}var ki={float:A.FLOAT,byte:A.BYTE,ubyte:A.UNSIGNED_BYTE,short:A.SHORT,ushort:A.UNSIGNED_SHORT};function Is(e,t,r){this.availableAttributes=e,this.availableAttributeSymbols=t,this.indicesBuffer=r,this.vao=null}function Os(e){var t,r;this.bind=function(n){t||(t=pe.createCanvas(),t.width=t.height=1,t.getContext("2d"));var i=n.gl,a=!r;a&&(r=i.createTexture()),i.bindTexture(i.TEXTURE_2D,r),a&&i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,t)},this.unbind=function(n){n.gl.bindTexture(n.gl.TEXTURE_2D,null)},this.isRenderable=function(){return!0}}var gt=Be.extend(function(){return{canvas:null,_width:100,_height:100,devicePixelRatio:typeof window!="undefined"&&window.devicePixelRatio||1,clearColor:[0,0,0,0],clearBit:17664,alpha:!0,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,throwError:!0,gl:null,viewport:{},maxJointNumber:20,__currentFrameBuffer:null,_viewportStack:[],_clearStack:[],_sceneRendering:null}},function(){this.canvas||(this.canvas=pe.createCanvas());var e=this.canvas;try{var t={alpha:this.alpha,depth:this.depth,stencil:this.stencil,antialias:this.antialias,premultipliedAlpha:this.premultipliedAlpha,preserveDrawingBuffer:this.preserveDrawingBuffer};if(this.gl=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),!this.gl)throw new Error;this._glinfo=new us(this.gl),this.gl.targetRenderer&&console.error("Already created a renderer"),this.gl.targetRenderer=this,this.resize()}catch(r){throw"Error creating WebGL Context "+r}this._programMgr=new Ni(this),this._placeholderTexture=new Os(this)},{resize:function(e,t){var r=this.canvas,n=this.devicePixelRatio;e!=null?(r.style&&(r.style.width=e+"px",r.style.height=t+"px"),r.width=e*n,r.height=t*n,this._width=e,this._height=t):(this._width=r.width/n,this._height=r.height/n),this.setViewport(0,0,this._width,this._height)},getWidth:function(){return this._width},getHeight:function(){return this._height},getViewportAspect:function(){var e=this.viewport;return e.width/e.height},setDevicePixelRatio:function(e){this.devicePixelRatio=e,this.resize(this._width,this._height)},getDevicePixelRatio:function(){return this.devicePixelRatio},getGLExtension:function(e){return this._glinfo.getExtension(e)},getGLParameter:function(e){return this._glinfo.getParameter(e)},setViewport:function(e,t,r,n,i){if(typeof e=="object"){var a=e;e=a.x,t=a.y,r=a.width,n=a.height,i=a.devicePixelRatio}i=i||this.devicePixelRatio,this.gl.viewport(e*i,t*i,r*i,n*i),this.viewport={x:e,y:t,width:r,height:n,devicePixelRatio:i}},saveViewport:function(){this._viewportStack.push(this.viewport)},restoreViewport:function(){this._viewportStack.length>0&&this.setViewport(this._viewportStack.pop())},saveClear:function(){this._clearStack.push({clearBit:this.clearBit,clearColor:this.clearColor})},restoreClear:function(){if(this._clearStack.length>0){var e=this._clearStack.pop();this.clearColor=e.clearColor,this.clearBit=e.clearBit}},bindSceneRendering:function(e){this._sceneRendering=e},render:function(e,t,r,n){var i=this.gl,a=this.clearColor;if(this.clearBit){i.colorMask(!0,!0,!0,!0),i.depthMask(!0);var o=this.viewport,s=!1,l=o.devicePixelRatio;(o.width!==this._width||o.height!==this._height||l&&l!==this.devicePixelRatio||o.x||o.y)&&(s=!0,i.enable(i.SCISSOR_TEST),i.scissor(o.x*l,o.y*l,o.width*l,o.height*l)),i.clearColor(a[0],a[1],a[2],a[3]),i.clear(this.clearBit),s&&i.disable(i.SCISSOR_TEST)}if(r||e.update(!1),e.updateLights(),t=t||e.getMainCamera(),!t){console.error("Can't find camera in the scene.");return}t.update();var u=e.updateRenderList(t,!0);this._sceneRendering=e;var f=u.opaque,c=u.transparent,d=e.material;e.trigger("beforerender",this,e,t,u),n?(this.renderPreZ(f,e,t),i.depthFunc(i.LEQUAL)):i.depthFunc(i.LESS);for(var h=le(),v=g.create(),p=0;p<c.length;p++){var m=c[p];w.multiplyAffine(h,t.viewMatrix.array,m.worldTransform.array),g.transformMat4(v,m.position.array,h),m.__depth=v[2]}this.renderPass(f,t,{getMaterial:function(_){return d||_.material},sortCompare:this.opaqueSortCompare}),this.renderPass(c,t,{getMaterial:function(_){return d||_.material},sortCompare:this.transparentSortCompare}),e.trigger("afterrender",this,e,t,u),this._sceneRendering=null},getProgram:function(e,t,r){return t=t||e.material,this._programMgr.getProgram(e,t,r)},validateProgram:function(e){if(e.__error){var t=e.__error;if(zi[e.__uid__])return;if(zi[e.__uid__]=!0,this.throwError)throw new Error(t);this.trigger("error",t)}},updatePrograms:function(e,t,r){var n=r&&r.getMaterial||Gi;t=t||null;for(var i=0;i<e.length;i++){var a=e[i],o=n.call(this,a);if(i>0){var s=e[i-1],l=s.joints?s.joints.length:0,u=a.joints?a.joints.length:0;if(u===l&&a.material===s.material&&a.lightGroup===s.lightGroup){a.__program=s.__program;continue}}var f=this._programMgr.getProgram(a,o,t);this.validateProgram(f),a.__program=f}},renderPass:function(e,t,r){this.trigger("beforerenderpass",this,e,t,r),r=r||{},r.getMaterial=r.getMaterial||Gi,r.getUniform=r.getUniform||Ms,r.isMaterialChanged=r.isMaterialChanged||Ds,r.beforeRender=r.beforeRender||Vi,r.afterRender=r.afterRender||Vi;var n=r.ifRender||Ps;this.updatePrograms(e,this._sceneRendering,r),r.sortCompare&&e.sort(r.sortCompare);var i=this.viewport,a=i.devicePixelRatio,o=[i.x*a,i.y*a,i.width*a,i.height*a],s=this.devicePixelRatio,l=this.__currentFrameBuffer?[this.__currentFrameBuffer.getTextureWidth(),this.__currentFrameBuffer.getTextureHeight()]:[this._width*s,this._height*s],u=[o[2],o[3]],f=Date.now();t?(w.copy(ue.VIEW,t.viewMatrix.array),w.copy(ue.PROJECTION,t.projectionMatrix.array),w.copy(ue.VIEWINVERSE,t.worldTransform.array)):(w.identity(ue.VIEW),w.identity(ue.PROJECTION),w.identity(ue.VIEWINVERSE)),w.multiply(ue.VIEWPROJECTION,ue.PROJECTION,ue.VIEW),w.invert(ue.PROJECTIONINVERSE,ue.PROJECTION),w.invert(ue.VIEWPROJECTIONINVERSE,ue.VIEWPROJECTION);for(var c=this.gl,d=this._sceneRendering,h,v,p,m,_,x,T,y,E,S,L,R,N=null,X=0;X<e.length;X++){var D=e[X],V=D.worldTransform!=null,B;if(!!n(D)){V&&(B=D.isSkinnedMesh&&D.isSkinnedMesh()?D.offsetMatrix?D.offsetMatrix.array:ue.IDENTITY:D.worldTransform.array);var P=D.geometry,U=r.getMaterial.call(this,D),q=D.__program,te=U.shader,be=P.__uid__+"-"+q.__uid__,Ce=be!==S;S=be,Ce&&N&&N.bindVertexArrayOES(null),V&&(w.copy(ue.WORLD,B),w.multiply(ue.WORLDVIEWPROJECTION,ue.VIEWPROJECTION,B),w.multiplyAffine(ue.WORLDVIEW,ue.VIEW,B),(te.matrixSemantics.WORLDINVERSE||te.matrixSemantics.WORLDINVERSETRANSPOSE)&&w.invert(ue.WORLDINVERSE,B),(te.matrixSemantics.WORLDVIEWINVERSE||te.matrixSemantics.WORLDVIEWINVERSETRANSPOSE)&&w.invert(ue.WORLDVIEWINVERSE,ue.WORLDVIEW),(te.matrixSemantics.WORLDVIEWPROJECTIONINVERSE||te.matrixSemantics.WORLDVIEWPROJECTIONINVERSETRANSPOSE)&&w.invert(ue.WORLDVIEWPROJECTIONINVERSE,ue.WORLDVIEWPROJECTION)),D.beforeRender&&D.beforeRender(this),r.beforeRender.call(this,D,U,h);var ze=q!==v;ze?(q.bind(this),q.setUniformOfSemantic(c,"VIEWPORT",o),q.setUniformOfSemantic(c,"WINDOW_SIZE",l),t&&(q.setUniformOfSemantic(c,"NEAR",t.near),q.setUniformOfSemantic(c,"FAR",t.far)),q.setUniformOfSemantic(c,"DEVICEPIXELRATIO",a),q.setUniformOfSemantic(c,"TIME",f),q.setUniformOfSemantic(c,"VIEWPORT_SIZE",u),d&&d.setLightUniforms(q,D.lightGroup,this)):q=v,(ze||r.isMaterialChanged(D,p,U,h))&&(U.depthTest!==m&&(U.depthTest?c.enable(c.DEPTH_TEST):c.disable(c.DEPTH_TEST),m=U.depthTest),U.depthMask!==_&&(c.depthMask(U.depthMask),_=U.depthMask),U.transparent!==E&&(U.transparent?c.enable(c.BLEND):c.disable(c.BLEND),E=U.transparent),U.transparent&&(U.blend?U.blend(c):(c.blendEquationSeparate(c.FUNC_ADD,c.FUNC_ADD),c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA))),R=this._bindMaterial(D,U,q,p||null,h||null,v||null,r.getUniform),h=U);var Xe=te.matrixSemanticKeys;if(V)for(var Oe=0;Oe<Xe.length;Oe++){var Fe=Xe[Oe],Qe=te.matrixSemantics[Fe],Je=ue[Fe];if(Qe.isTranspose){var qe=ue[Qe.semanticNoTranspose];w.transpose(Je,qe)}q.setUniform(c,Qe.type,Qe.symbol,Je)}D.cullFace!==T&&(T=D.cullFace,c.cullFace(T)),D.frontFace!==y&&(y=D.frontFace,c.frontFace(y)),D.culling!==x&&(x=D.culling,x?c.enable(c.CULL_FACE):c.disable(c.CULL_FACE)),this._updateSkeleton(D,q,R),Ce&&(L=this._bindVAO(N,te,P,q)),this._renderObject(D,L,q),r.afterRender(this,D),D.afterRender&&D.afterRender(this),v=q,p=D}}this.trigger("afterrenderpass",this,e,t,r)},getMaxJointNumber:function(){return this.maxJointNumber},_updateSkeleton:function(e,t,r){var n=this.gl,i=e.skeleton;if(i)if(i.update(),e.joints.length>this.getMaxJointNumber()){var a=i.getSubSkinMatricesTexture(e.__uid__,e.joints);t.useTextureSlot(this,a,r),t.setUniform(n,"1i","skinMatricesTexture",r),t.setUniform(n,"1f","skinMatricesTextureSize",a.width)}else{var o=i.getSubSkinMatrices(e.__uid__,e.joints);t.setUniformOfSemantic(n,"SKIN_MATRIX",o)}},_renderObject:function(e,t,r){var n=this.gl,i=e.geometry,a=e.mode;a==null&&(a=4);var o=null,s=e.isInstancedMesh&&e.isInstancedMesh();if(s&&(o=this.getGLExtension("ANGLE_instanced_arrays"),!o)){console.warn("Device not support ANGLE_instanced_arrays extension");return}var l;if(s&&(l=this._bindInstancedAttributes(e,r,o)),t.indicesBuffer){var u=this.getGLExtension("OES_element_index_uint"),f=u&&i.indices instanceof Uint32Array,c=f?n.UNSIGNED_INT:n.UNSIGNED_SHORT;s?o.drawElementsInstancedANGLE(a,t.indicesBuffer.count,c,0,e.getInstanceCount()):n.drawElements(a,t.indicesBuffer.count,c,0)}else s?o.drawArraysInstancedANGLE(a,0,i.vertexCount,e.getInstanceCount()):n.drawArrays(a,0,i.vertexCount);if(s)for(var d=0;d<l.length;d++)n.disableVertexAttribArray(l[d])},_bindInstancedAttributes:function(e,t,r){for(var n=this.gl,i=e.getInstancedAttributesBuffers(this),a=[],o=0;o<i.length;o++){var s=i[o],l=t.getAttribLocation(n,s.symbol);if(!(l<0)){var u=ki[s.type]||n.FLOAT;n.enableVertexAttribArray(l),n.bindBuffer(n.ARRAY_BUFFER,s.buffer),n.vertexAttribPointer(l,s.size,u,!1,0,0),r.vertexAttribDivisorANGLE(l,s.divisor),a.push(l)}}return a},_bindMaterial:function(e,t,r,n,i,a,o){for(var s=this.gl,l=a===r,u=r.currentTextureSlot(),f=t.getEnabledUniforms(),c=t.getTextureUniforms(),d=this._placeholderTexture,h=0;h<c.length;h++){var v=c[h],p=o(e,t,v),m=t.uniforms[v].type;if(m==="t"&&p)p.__slot=-1;else if(m==="tv")for(var _=0;_<p.length;_++)p[_]&&(p[_].__slot=-1)}d.__slot=-1;for(var h=0;h<f.length;h++){var v=f[h],x=t.uniforms[v],p=o(e,t,v),m=x.type,T=m==="t";if(T&&(!p||!p.isRenderable())&&(p=d),i&&l){var y=o(n,i,v);if(T&&(!y||!y.isRenderable())&&(y=d),y===p){if(T)r.takeCurrentTextureSlot(this,null);else if(m==="tv"&&p)for(var _=0;_<p.length;_++)r.takeCurrentTextureSlot(this,null);continue}}if(p!=null)if(T)if(p.__slot<0){var E=r.currentTextureSlot(),S=r.setUniform(s,"1i",v,E);S&&(r.takeCurrentTextureSlot(this,p),p.__slot=E)}else r.setUniform(s,"1i",v,p.__slot);else if(Array.isArray(p)){if(p.length===0)continue;if(m==="tv"){if(!r.hasUniform(v))continue;for(var L=[],_=0;_<p.length;_++){var R=p[_];if(R.__slot<0){var E=r.currentTextureSlot();L.push(E),r.takeCurrentTextureSlot(this,R),R.__slot=E}else L.push(R.__slot)}r.setUniform(s,"1iv",v,L)}else r.setUniform(s,x.type,v,p)}else r.setUniform(s,x.type,v,p)}var N=r.currentTextureSlot();return r.resetTextureSlot(u),N},_bindVAO:function(e,t,r,n){var i=!r.dynamic,a=this.gl,o=this.__uid__+"-"+n.__uid__,s=r.__vaoCache[o];if(!s){var l=r.getBufferChunks(this);if(!l||!l.length)return;for(var u=l[0],f=u.attributeBuffers,y=u.indicesBuffer,T=[],c=[],d=0;d<f.length;d++){var h=f[d],v=h.name,p=h.semantic,m;if(p){var _=t.attributeSemantics[p];m=_&&_.symbol}else m=v;m&&n.attributes[m]&&(T.push(h),c.push(m))}s=new Is(T,c,y),i&&(r.__vaoCache[o]=s)}var x=!0;e&&i&&(s.vao==null?s.vao=e.createVertexArrayOES():x=!1,e.bindVertexArrayOES(s.vao));var T=s.availableAttributes,y=s.indicesBuffer;if(x){for(var E=n.enableAttributes(this,s.availableAttributeSymbols,e&&i&&s),d=0;d<T.length;d++){var S=E[d];if(S!==-1){var h=T[d],L=h.buffer,R=h.size,N=ki[h.type]||a.FLOAT;a.bindBuffer(a.ARRAY_BUFFER,L),a.vertexAttribPointer(S,R,N,!1,0,0)}}r.isUseIndices()&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,y.buffer)}return s},renderPreZ:function(e,t,r){var n=this.gl,i=this._prezMaterial||new ut({shader:new b(b.source("clay.prez.vertex"),b.source("clay.prez.fragment"))});this._prezMaterial=i,n.colorMask(!1,!1,!1,!1),n.depthMask(!0),this.renderPass(e,r,{ifRender:function(a){return!a.ignorePreZ},isMaterialChanged:function(a,o){var s=a.material,l=o.material;return s.get("diffuseMap")!==l.get("diffuseMap")||(s.get("alphaCutoff")||0)!==(l.get("alphaCutoff")||0)},getUniform:function(a,o,s){if(s==="alphaMap")return a.material.get("diffuseMap");if(s==="alphaCutoff"){if(a.material.isDefined("fragment","ALPHA_TEST")&&a.material.get("diffuseMap")){var l=a.material.get("alphaCutoff");return l||0}return 0}else return s==="uvRepeat"?a.material.get("uvRepeat"):s==="uvOffset"?a.material.get("uvOffset"):o.get(s)},getMaterial:function(){return i},sort:this.opaqueSortCompare}),n.colorMask(!0,!0,!0,!0),n.depthMask(!0)},disposeScene:function(e){this.disposeNode(e,!0,!0),e.dispose()},disposeNode:function(e,t,r){e.getParent()&&e.getParent().remove(e);var n={};e.traverse(function(i){var a=i.material;if(i.geometry&&t&&i.geometry.dispose(this),r&&a&&!n[a.__uid__]){for(var o=a.getTextureUniforms(),s=0;s<o.length;s++){var l=o[s],u=a.uniforms[l].value,f=a.uniforms[l].type;if(!!u){if(f==="t")u.dispose&&u.dispose(this);else if(f==="tv")for(var c=0;c<u.length;c++)u[c]&&u[c].dispose&&u[c].dispose(this)}}n[a.__uid__]=!0}i.dispose&&i.dispose(this)},this)},disposeGeometry:function(e){e.dispose(this)},disposeTexture:function(e){e.dispose(this)},disposeFrameBuffer:function(e){e.dispose(this)},dispose:function(){},screenToNDC:function(e,t,r){r||(r=new Ge),t=this._height-t;var n=this.viewport,i=r.array;return i[0]=(e-n.x)/n.width,i[0]=i[0]*2-1,i[1]=(t-n.y)/n.height,i[1]=i[1]*2-1,r}});gt.opaqueSortCompare=gt.prototype.opaqueSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.renderOrder-t.renderOrder};gt.transparentSortCompare=gt.prototype.transparentSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__depth===t.__depth?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.__depth-t.__depth:e.renderOrder-t.renderOrder};var ue={IDENTITY:le(),WORLD:le(),VIEW:le(),PROJECTION:le(),WORLDVIEW:le(),VIEWPROJECTION:le(),WORLDVIEWPROJECTION:le(),WORLDINVERSE:le(),VIEWINVERSE:le(),PROJECTIONINVERSE:le(),WORLDVIEWINVERSE:le(),VIEWPROJECTIONINVERSE:le(),WORLDVIEWPROJECTIONINVERSE:le(),WORLDTRANSPOSE:le(),VIEWTRANSPOSE:le(),PROJECTIONTRANSPOSE:le(),WORLDVIEWTRANSPOSE:le(),VIEWPROJECTIONTRANSPOSE:le(),WORLDVIEWPROJECTIONTRANSPOSE:le(),WORLDINVERSETRANSPOSE:le(),VIEWINVERSETRANSPOSE:le(),PROJECTIONINVERSETRANSPOSE:le(),WORLDVIEWINVERSETRANSPOSE:le(),VIEWPROJECTIONINVERSETRANSPOSE:le(),WORLDVIEWPROJECTIONINVERSETRANSPOSE:le()};gt.COLOR_BUFFER_BIT=A.COLOR_BUFFER_BIT;gt.DEPTH_BUFFER_BIT=A.DEPTH_BUFFER_BIT;gt.STENCIL_BUFFER_BIT=A.STENCIL_BUFFER_BIT;var ar=gt,z=function(e,t,r){e=e||0,t=t||0,r=r||0,this.array=g.fromValues(e,t,r),this._dirty=!0};z.prototype={constructor:z,add:function(e){return g.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this._dirty=!0,this},clone:function(){return new z(this.x,this.y,this.z)},copy:function(e){return g.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return g.cross(this.array,e.array,t.array),this._dirty=!0,this},dist:function(e){return g.dist(this.array,e.array)},distance:function(e){return g.distance(this.array,e.array)},div:function(e){return g.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return g.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return g.dot(this.array,e.array)},len:function(){return g.len(this.array)},length:function(){return g.length(this.array)},lerp:function(e,t,r){return g.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return g.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return g.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return g.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return g.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return g.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return g.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return g.random(this.array,e),this._dirty=!0,this},scale:function(e){return g.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return g.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return g.sqrDist(this.array,e.array)},squaredDistance:function(e){return g.squaredDistance(this.array,e.array)},sqrLen:function(){return g.sqrLen(this.array)},squaredLength:function(){return g.squaredLength(this.array)},sub:function(e){return g.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return g.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return g.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return g.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return g.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},applyProjection:function(e){var t=this.array;if(e=e.array,e[15]===0){var r=-1/t[2];t[0]=e[0]*t[0]*r,t[1]=e[5]*t[1]*r,t[2]=(e[10]*t[2]+e[14])*r}else t[0]=e[0]*t[0]+e[12],t[1]=e[5]*t[1]+e[13],t[2]=e[10]*t[2]+e[14];return this._dirty=!0,this},eulerFromQuat:function(e,t){z.eulerFromQuat(this,e,t)},eulerFromMat3:function(e,t){z.eulerFromMat3(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Nr=Object.defineProperty;if(Nr){var An=z.prototype;Nr(An,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Nr(An,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Nr(An,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}})}z.add=function(e,t,r){return g.add(e.array,t.array,r.array),e._dirty=!0,e};z.set=function(e,t,r,n){g.set(e.array,t,r,n),e._dirty=!0};z.copy=function(e,t){return g.copy(e.array,t.array),e._dirty=!0,e};z.cross=function(e,t,r){return g.cross(e.array,t.array,r.array),e._dirty=!0,e};z.dist=function(e,t){return g.distance(e.array,t.array)};z.distance=z.dist;z.div=function(e,t,r){return g.divide(e.array,t.array,r.array),e._dirty=!0,e};z.divide=z.div;z.dot=function(e,t){return g.dot(e.array,t.array)};z.len=function(e){return g.length(e.array)};z.lerp=function(e,t,r,n){return g.lerp(e.array,t.array,r.array,n),e._dirty=!0,e};z.min=function(e,t,r){return g.min(e.array,t.array,r.array),e._dirty=!0,e};z.max=function(e,t,r){return g.max(e.array,t.array,r.array),e._dirty=!0,e};z.mul=function(e,t,r){return g.multiply(e.array,t.array,r.array),e._dirty=!0,e};z.multiply=z.mul;z.negate=function(e,t){return g.negate(e.array,t.array),e._dirty=!0,e};z.normalize=function(e,t){return g.normalize(e.array,t.array),e._dirty=!0,e};z.random=function(e,t){return g.random(e.array,t),e._dirty=!0,e};z.scale=function(e,t,r){return g.scale(e.array,t.array,r),e._dirty=!0,e};z.scaleAndAdd=function(e,t,r,n){return g.scaleAndAdd(e.array,t.array,r.array,n),e._dirty=!0,e};z.sqrDist=function(e,t){return g.sqrDist(e.array,t.array)};z.squaredDistance=z.sqrDist;z.sqrLen=function(e){return g.sqrLen(e.array)};z.squaredLength=z.sqrLen;z.sub=function(e,t,r){return g.subtract(e.array,t.array,r.array),e._dirty=!0,e};z.subtract=z.sub;z.transformMat3=function(e,t,r){return g.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};z.transformMat4=function(e,t,r){return g.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};z.transformQuat=function(e,t,r){return g.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};function je(e,t,r){return e<t?t:e>r?r:e}var ie=Math.atan2,Ye=Math.asin,Vt=Math.abs;z.eulerFromQuat=function(e,t,r){e._dirty=!0,t=t.array;var n=e.array,i=t[0],a=t[1],o=t[2],s=t[3],l=i*i,u=a*a,f=o*o,c=s*s,r=(r||"XYZ").toUpperCase();switch(r){case"XYZ":n[0]=ie(2*(i*s-a*o),c-l-u+f),n[1]=Ye(je(2*(i*o+a*s),-1,1)),n[2]=ie(2*(o*s-i*a),c+l-u-f);break;case"YXZ":n[0]=Ye(je(2*(i*s-a*o),-1,1)),n[1]=ie(2*(i*o+a*s),c-l-u+f),n[2]=ie(2*(i*a+o*s),c-l+u-f);break;case"ZXY":n[0]=Ye(je(2*(i*s+a*o),-1,1)),n[1]=ie(2*(a*s-o*i),c-l-u+f),n[2]=ie(2*(o*s-i*a),c-l+u-f);break;case"ZYX":n[0]=ie(2*(i*s+o*a),c-l-u+f),n[1]=Ye(je(2*(a*s-i*o),-1,1)),n[2]=ie(2*(i*a+o*s),c+l-u-f);break;case"YZX":n[0]=ie(2*(i*s-o*a),c-l+u-f),n[1]=ie(2*(a*s-i*o),c+l-u-f),n[2]=Ye(je(2*(i*a+o*s),-1,1));break;case"XZY":n[0]=ie(2*(i*s+a*o),c-l+u-f),n[1]=ie(2*(i*o+a*s),c+l-u-f),n[2]=Ye(je(2*(o*s-i*a),-1,1));break;default:console.warn("Unkown order: "+r)}return e};z.eulerFromMat3=function(e,t,r){var n=t.array,i=n[0],a=n[3],o=n[6],s=n[1],l=n[4],u=n[7],f=n[2],c=n[5],d=n[8],h=e.array,r=(r||"XYZ").toUpperCase();switch(r){case"XYZ":h[1]=Ye(je(o,-1,1)),Vt(o)<.99999?(h[0]=ie(-u,d),h[2]=ie(-a,i)):(h[0]=ie(c,l),h[2]=0);break;case"YXZ":h[0]=Ye(-je(u,-1,1)),Vt(u)<.99999?(h[1]=ie(o,d),h[2]=ie(s,l)):(h[1]=ie(-f,i),h[2]=0);break;case"ZXY":h[0]=Ye(je(c,-1,1)),Vt(c)<.99999?(h[1]=ie(-f,d),h[2]=ie(-a,l)):(h[1]=0,h[2]=ie(s,i));break;case"ZYX":h[1]=Ye(-je(f,-1,1)),Vt(f)<.99999?(h[0]=ie(c,d),h[2]=ie(s,i)):(h[0]=0,h[2]=ie(-a,l));break;case"YZX":h[2]=Ye(je(s,-1,1)),Vt(s)<.99999?(h[0]=ie(-u,l),h[1]=ie(-f,i)):(h[0]=0,h[1]=ie(o,d));break;case"XZY":h[2]=Ye(-je(a,-1,1)),Vt(a)<.99999?(h[0]=ie(c,l),h[1]=ie(o,i)):(h[0]=ie(-u,d),h[1]=0);break;default:console.warn("Unkown order: "+r)}return e._dirty=!0,e};Object.defineProperties(z,{POSITIVE_X:{get:function(){return new z(1,0,0)}},NEGATIVE_X:{get:function(){return new z(-1,0,0)}},POSITIVE_Y:{get:function(){return new z(0,1,0)}},NEGATIVE_Y:{get:function(){return new z(0,-1,0)}},POSITIVE_Z:{get:function(){return new z(0,0,1)}},NEGATIVE_Z:{get:function(){return new z(0,0,-1)}},UP:{get:function(){return new z(0,1,0)}},ZERO:{get:function(){return new z}}});var C=z,Sn=1e-5,Mr=function(e,t){this.origin=e||new C,this.direction=t||new C};Mr.prototype={constructor:Mr,intersectPlane:function(e,t){var r=e.normal.array,n=e.distance,i=this.origin.array,a=this.direction.array,o=g.dot(r,a);if(o===0)return null;t||(t=new C);var s=(g.dot(r,i)-n)/o;return g.scaleAndAdd(t.array,i,a,-s),t._dirty=!0,t},mirrorAgainstPlane:function(e){var t=g.dot(e.normal.array,this.direction.array);g.scaleAndAdd(this.direction.array,this.direction.array,e.normal.array,-t*2),this.direction._dirty=!0},distanceToPoint:function(){var e=g.create();return function(t){g.sub(e,t,this.origin.array);var r=g.dot(e,this.direction.array);if(r<0)return g.distance(this.origin.array,t);var n=g.lenSquared(e);return Math.sqrt(n-r*r)}}(),intersectSphere:function(){var e=g.create();return function(t,r,n){var i=this.origin.array,a=this.direction.array;t=t.array,g.sub(e,t,i);var o=g.dot(e,a),s=g.squaredLength(e),l=s-o*o,u=r*r;if(!(l>u)){var f=Math.sqrt(u-l),c=o-f,d=o+f;return n||(n=new C),c<0?d<0?null:(g.scaleAndAdd(n.array,i,a,d),n):(g.scaleAndAdd(n.array,i,a,c),n)}}}(),intersectBoundingBox:function(e,t){var r=this.direction.array,n=this.origin.array,i=e.min.array,a=e.max.array,o=1/r[0],s=1/r[1],l=1/r[2],u,f,c,d,h,v;if(o>=0?(u=(i[0]-n[0])*o,f=(a[0]-n[0])*o):(f=(i[0]-n[0])*o,u=(a[0]-n[0])*o),s>=0?(c=(i[1]-n[1])*s,d=(a[1]-n[1])*s):(d=(i[1]-n[1])*s,c=(a[1]-n[1])*s),u>d||c>f||((c>u||u!==u)&&(u=c),(d<f||f!==f)&&(f=d),l>=0?(h=(i[2]-n[2])*l,v=(a[2]-n[2])*l):(v=(i[2]-n[2])*l,h=(a[2]-n[2])*l),u>v||h>f)||((h>u||u!==u)&&(u=h),(v<f||f!==f)&&(f=v),f<0))return null;var p=u>=0?u:f;return t||(t=new C),g.scaleAndAdd(t.array,n,r,p),t},intersectTriangle:function(){var e=g.create(),t=g.create(),r=g.create(),n=g.create();return function(i,a,o,s,l,u){var f=this.direction.array,c=this.origin.array;i=i.array,a=a.array,o=o.array,g.sub(e,a,i),g.sub(t,o,i),g.cross(n,t,f);var d=g.dot(e,n);if(s){if(d>-Sn)return null}else if(d>-Sn&&d<Sn)return null;g.sub(r,c,i);var h=g.dot(n,r)/d;if(h<0||h>1)return null;g.cross(n,e,r);var v=g.dot(f,n)/d;if(v<0||v>1||h+v>1)return null;g.cross(n,e,t);var p=-g.dot(r,n)/d;return p<0?null:(l||(l=new C),u&&C.set(u,1-h-v,h,v),g.scaleAndAdd(l.array,c,f,p),l)}}(),applyTransform:function(e){C.add(this.direction,this.direction,this.origin),C.transformMat4(this.origin,this.origin,e),C.transformMat4(this.direction,this.direction,e),C.sub(this.direction,this.direction,this.origin),C.normalize(this.direction,this.direction)},copy:function(e){C.copy(this.origin,e.origin),C.copy(this.direction,e.direction)},clone:function(){var e=new Mr;return e.copy(this),e}};var Dr=Mr,Y={};Y.create=function(){var e=new Se(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e};Y.clone=function(e){var t=new Se(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};Y.fromValues=function(e,t,r,n){var i=new Se(4);return i[0]=e,i[1]=t,i[2]=r,i[3]=n,i};Y.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};Y.set=function(e,t,r,n,i){return e[0]=t,e[1]=r,e[2]=n,e[3]=i,e};Y.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e};Y.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e};Y.sub=Y.subtract;Y.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e};Y.mul=Y.multiply;Y.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e};Y.div=Y.divide;Y.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e};Y.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e};Y.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e};Y.scaleAndAdd=function(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e};Y.distance=function(e,t){var r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2],a=t[3]-e[3];return Math.sqrt(r*r+n*n+i*i+a*a)};Y.dist=Y.distance;Y.squaredDistance=function(e,t){var r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2],a=t[3]-e[3];return r*r+n*n+i*i+a*a};Y.sqrDist=Y.squaredDistance;Y.length=function(e){var t=e[0],r=e[1],n=e[2],i=e[3];return Math.sqrt(t*t+r*r+n*n+i*i)};Y.len=Y.length;Y.squaredLength=function(e){var t=e[0],r=e[1],n=e[2],i=e[3];return t*t+r*r+n*n+i*i};Y.sqrLen=Y.squaredLength;Y.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e};Y.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e};Y.normalize=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=r*r+n*n+i*i+a*a;return o>0&&(o=1/Math.sqrt(o),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e[3]=t[3]*o),e};Y.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]};Y.lerp=function(e,t,r,n){var i=t[0],a=t[1],o=t[2],s=t[3];return e[0]=i+n*(r[0]-i),e[1]=a+n*(r[1]-a),e[2]=o+n*(r[2]-o),e[3]=s+n*(r[3]-s),e};Y.random=function(e,t){return t=t||1,e[0]=zt(),e[1]=zt(),e[2]=zt(),e[3]=zt(),Y.normalize(e,e),Y.scale(e,e,t),e};Y.transformMat4=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3];return e[0]=r[0]*n+r[4]*i+r[8]*a+r[12]*o,e[1]=r[1]*n+r[5]*i+r[9]*a+r[13]*o,e[2]=r[2]*n+r[6]*i+r[10]*a+r[14]*o,e[3]=r[3]*n+r[7]*i+r[11]*a+r[15]*o,e};Y.transformQuat=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=r[0],s=r[1],l=r[2],u=r[3],f=u*n+s*a-l*i,c=u*i+l*n-o*a,d=u*a+o*i-s*n,h=-o*n-s*i-l*a;return e[0]=f*u+h*-o+c*-l-d*-s,e[1]=c*u+h*-s+d*-o-f*-l,e[2]=d*u+h*-l+f*-s-c*-o,e};Y.forEach=function(){var e=Y.create();return function(t,r,n,i,a,o){var s,l;for(r||(r=4),n||(n=0),i?l=Math.min(i*r+n,t.length):l=t.length,s=n;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}}();var M=Y,_e={};_e.create=function(){var e=new Se(9);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};_e.fromMat4=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e};_e.clone=function(e){var t=new Se(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t};_e.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};_e.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};_e.transpose=function(e,t){if(e===t){var r=t[1],n=t[2],i=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=n,e[7]=i}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e};_e.invert=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],f=t[8],c=f*o-s*u,d=-f*a+s*l,h=u*a-o*l,v=r*c+n*d+i*h;return v?(v=1/v,e[0]=c*v,e[1]=(-f*n+i*u)*v,e[2]=(s*n-i*o)*v,e[3]=d*v,e[4]=(f*r-i*l)*v,e[5]=(-s*r+i*a)*v,e[6]=h*v,e[7]=(-u*r+n*l)*v,e[8]=(o*r-n*a)*v,e):null};_e.adjoint=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],f=t[8];return e[0]=o*f-s*u,e[1]=i*u-n*f,e[2]=n*s-i*o,e[3]=s*l-a*f,e[4]=r*f-i*l,e[5]=i*a-r*s,e[6]=a*u-o*l,e[7]=n*l-r*u,e[8]=r*o-n*a,e};_e.determinant=function(e){var t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],s=e[6],l=e[7],u=e[8];return t*(u*a-o*l)+r*(-u*i+o*s)+n*(l*i-a*s)};_e.multiply=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],f=t[7],c=t[8],d=r[0],h=r[1],v=r[2],p=r[3],m=r[4],_=r[5],x=r[6],T=r[7],y=r[8];return e[0]=d*n+h*o+v*u,e[1]=d*i+h*s+v*f,e[2]=d*a+h*l+v*c,e[3]=p*n+m*o+_*u,e[4]=p*i+m*s+_*f,e[5]=p*a+m*l+_*c,e[6]=x*n+T*o+y*u,e[7]=x*i+T*s+y*f,e[8]=x*a+T*l+y*c,e};_e.mul=_e.multiply;_e.translate=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],f=t[7],c=t[8],d=r[0],h=r[1];return e[0]=n,e[1]=i,e[2]=a,e[3]=o,e[4]=s,e[5]=l,e[6]=d*n+h*o+u,e[7]=d*i+h*s+f,e[8]=d*a+h*l+c,e};_e.rotate=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],f=t[7],c=t[8],d=Math.sin(r),h=Math.cos(r);return e[0]=h*n+d*o,e[1]=h*i+d*s,e[2]=h*a+d*l,e[3]=h*o-d*n,e[4]=h*s-d*i,e[5]=h*l-d*a,e[6]=u,e[7]=f,e[8]=c,e};_e.scale=function(e,t,r){var n=r[0],i=r[1];return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=i*t[3],e[4]=i*t[4],e[5]=i*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};_e.fromMat2d=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e};_e.fromQuat=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=r+r,s=n+n,l=i+i,u=r*o,f=n*o,c=n*s,d=i*o,h=i*s,v=i*l,p=a*o,m=a*s,_=a*l;return e[0]=1-c-v,e[3]=f-_,e[6]=d+m,e[1]=f+_,e[4]=1-u-v,e[7]=h-p,e[2]=d-m,e[5]=h+p,e[8]=1-u-c,e};_e.normalFromMat4=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],f=t[8],c=t[9],d=t[10],h=t[11],v=t[12],p=t[13],m=t[14],_=t[15],x=r*s-n*o,T=r*l-i*o,y=r*u-a*o,E=n*l-i*s,S=n*u-a*s,L=i*u-a*l,R=f*p-c*v,N=f*m-d*v,X=f*_-h*v,D=c*m-d*p,V=c*_-h*p,B=d*_-h*m,P=x*B-T*V+y*D+E*X-S*N+L*R;return P?(P=1/P,e[0]=(s*B-l*V+u*D)*P,e[1]=(l*X-o*B-u*N)*P,e[2]=(o*V-s*X+u*R)*P,e[3]=(i*V-n*B-a*D)*P,e[4]=(r*B-i*X+a*N)*P,e[5]=(n*X-r*V-a*R)*P,e[6]=(p*L-m*S+_*E)*P,e[7]=(m*y-v*L-_*T)*P,e[8]=(v*S-p*y+_*x)*P,e):null};_e.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2))};var $=_e,ee={};ee.create=function(){var e=new Se(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};ee.rotationTo=function(){var e=g.create(),t=g.fromValues(1,0,0),r=g.fromValues(0,1,0);return function(n,i,a){var o=g.dot(i,a);return o<-.999999?(g.cross(e,t,i),g.length(e)<1e-6&&g.cross(e,r,i),g.normalize(e,e),ee.setAxisAngle(n,e,Math.PI),n):o>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(g.cross(e,i,a),n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=1+o,ee.normalize(n,n))}}();ee.setAxes=function(){var e=$.create();return function(t,r,n,i){return e[0]=n[0],e[3]=n[1],e[6]=n[2],e[1]=i[0],e[4]=i[1],e[7]=i[2],e[2]=-r[0],e[5]=-r[1],e[8]=-r[2],ee.normalize(t,ee.fromMat3(t,e))}}();ee.clone=M.clone;ee.fromValues=M.fromValues;ee.copy=M.copy;ee.set=M.set;ee.identity=function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};ee.setAxisAngle=function(e,t,r){r=r*.5;var n=Math.sin(r);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(r),e};ee.add=M.add;ee.multiply=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=r[0],l=r[1],u=r[2],f=r[3];return e[0]=n*f+o*s+i*u-a*l,e[1]=i*f+o*l+a*s-n*u,e[2]=a*f+o*u+n*l-i*s,e[3]=o*f-n*s-i*l-a*u,e};ee.mul=ee.multiply;ee.scale=M.scale;ee.rotateX=function(e,t,r){r*=.5;var n=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=n*l+o*s,e[1]=i*l+a*s,e[2]=a*l-i*s,e[3]=o*l-n*s,e};ee.rotateY=function(e,t,r){r*=.5;var n=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=n*l-a*s,e[1]=i*l+o*s,e[2]=a*l+n*s,e[3]=o*l-i*s,e};ee.rotateZ=function(e,t,r){r*=.5;var n=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=n*l+i*s,e[1]=i*l-n*s,e[2]=a*l+o*s,e[3]=o*l-a*s,e};ee.calculateW=function(e,t){var r=t[0],n=t[1],i=t[2];return e[0]=r,e[1]=n,e[2]=i,e[3]=Math.sqrt(Math.abs(1-r*r-n*n-i*i)),e};ee.dot=M.dot;ee.lerp=M.lerp;ee.slerp=function(e,t,r,n){var i=t[0],a=t[1],o=t[2],s=t[3],l=r[0],u=r[1],f=r[2],c=r[3],d,h,v,p,m;return h=i*l+a*u+o*f+s*c,h<0&&(h=-h,l=-l,u=-u,f=-f,c=-c),1-h>1e-6?(d=Math.acos(h),v=Math.sin(d),p=Math.sin((1-n)*d)/v,m=Math.sin(n*d)/v):(p=1-n,m=n),e[0]=p*i+m*l,e[1]=p*a+m*u,e[2]=p*o+m*f,e[3]=p*s+m*c,e};ee.invert=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=r*r+n*n+i*i+a*a,s=o?1/o:0;return e[0]=-r*s,e[1]=-n*s,e[2]=-i*s,e[3]=a*s,e};ee.conjugate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e};ee.length=M.length;ee.len=ee.length;ee.squaredLength=M.squaredLength;ee.sqrLen=ee.squaredLength;ee.normalize=M.normalize;ee.fromMat3=function(e,t){var r=t[0]+t[4]+t[8],n;if(r>0)n=Math.sqrt(r+1),e[3]=.5*n,n=.5/n,e[0]=(t[5]-t[7])*n,e[1]=(t[6]-t[2])*n,e[2]=(t[1]-t[3])*n;else{var i=0;t[4]>t[0]&&(i=1),t[8]>t[i*3+i]&&(i=2);var a=(i+1)%3,o=(i+2)%3;n=Math.sqrt(t[i*3+i]-t[a*3+a]-t[o*3+o]+1),e[i]=.5*n,n=.5/n,e[3]=(t[a*3+o]-t[o*3+a])*n,e[a]=(t[a*3+i]+t[i*3+a])*n,e[o]=(t[o*3+i]+t[i*3+o])*n}return e};var k=ee,se=function(){this._axisX=new C,this._axisY=new C,this._axisZ=new C,this.array=w.create(),this._dirty=!0};se.prototype={constructor:se,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return w.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new se().copy(this)},copy:function(e){return w.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return w.determinant(this.array)},fromQuat:function(e){return w.fromQuat(this.array,e.array),this._dirty=!0,this},fromRotationTranslation:function(e,t){return w.fromRotationTranslation(this.array,e.array,t.array),this._dirty=!0,this},fromMat2d:function(e){return se.fromMat2d(this,e),this},frustum:function(e,t,r,n,i,a){return w.frustum(this.array,e,t,r,n,i,a),this._dirty=!0,this},identity:function(){return w.identity(this.array),this._dirty=!0,this},invert:function(){return w.invert(this.array,this.array),this._dirty=!0,this},lookAt:function(e,t,r){return w.lookAt(this.array,e.array,t.array,r.array),this._dirty=!0,this},mul:function(e){return w.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return w.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return w.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return w.multiply(this.array,e.array,this.array),this._dirty=!0,this},ortho:function(e,t,r,n,i,a){return w.ortho(this.array,e,t,r,n,i,a),this._dirty=!0,this},perspective:function(e,t,r,n){return w.perspective(this.array,e,t,r,n),this._dirty=!0,this},rotate:function(e,t){return w.rotate(this.array,this.array,e,t.array),this._dirty=!0,this},rotateX:function(e){return w.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return w.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return w.rotateZ(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return w.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return w.translate(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return w.transpose(this.array,this.array),this._dirty=!0,this},decomposeMatrix:function(){var e=g.create(),t=g.create(),r=g.create(),n=$.create();return function(i,a,o){var s=this.array;g.set(e,s[0],s[1],s[2]),g.set(t,s[4],s[5],s[6]),g.set(r,s[8],s[9],s[10]);var l=g.length(e),u=g.length(t),f=g.length(r),c=this.determinant();c<0&&(l=-l),i&&i.set(l,u,f),o.set(s[12],s[13],s[14]),$.fromMat4(n,s),n[0]/=l,n[1]/=l,n[2]/=l,n[3]/=u,n[4]/=u,n[5]/=u,n[6]/=f,n[7]/=f,n[8]/=f,k.fromMat3(a.array,n),k.normalize(a.array,a.array),a._dirty=!0,o._dirty=!0}}(),toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Pr=Object.defineProperty;if(Pr){var wn=se.prototype;Pr(wn,"z",{get:function(){var e=this.array;return this._axisZ.set(e[8],e[9],e[10]),this._axisZ},set:function(e){var t=this.array;e=e.array,t[8]=e[0],t[9]=e[1],t[10]=e[2],this._dirty=!0}}),Pr(wn,"y",{get:function(){var e=this.array;return this._axisY.set(e[4],e[5],e[6]),this._axisY},set:function(e){var t=this.array;e=e.array,t[4]=e[0],t[5]=e[1],t[6]=e[2],this._dirty=!0}}),Pr(wn,"x",{get:function(){var e=this.array;return this._axisX.set(e[0],e[1],e[2]),this._axisX},set:function(e){var t=this.array;e=e.array,t[0]=e[0],t[1]=e[1],t[2]=e[2],this._dirty=!0}})}se.adjoint=function(e,t){return w.adjoint(e.array,t.array),e._dirty=!0,e};se.copy=function(e,t){return w.copy(e.array,t.array),e._dirty=!0,e};se.determinant=function(e){return w.determinant(e.array)};se.identity=function(e){return w.identity(e.array),e._dirty=!0,e};se.ortho=function(e,t,r,n,i,a,o){return w.ortho(e.array,t,r,n,i,a,o),e._dirty=!0,e};se.perspective=function(e,t,r,n,i){return w.perspective(e.array,t,r,n,i),e._dirty=!0,e};se.lookAt=function(e,t,r,n){return w.lookAt(e.array,t.array,r.array,n.array),e._dirty=!0,e};se.invert=function(e,t){return w.invert(e.array,t.array),e._dirty=!0,e};se.mul=function(e,t,r){return w.mul(e.array,t.array,r.array),e._dirty=!0,e};se.multiply=se.mul;se.fromQuat=function(e,t){return w.fromQuat(e.array,t.array),e._dirty=!0,e};se.fromRotationTranslation=function(e,t,r){return w.fromRotationTranslation(e.array,t.array,r.array),e._dirty=!0,e};se.fromMat2d=function(e,t){e._dirty=!0;var t=t.array,e=e.array;return e[0]=t[0],e[4]=t[2],e[12]=t[4],e[1]=t[1],e[5]=t[3],e[13]=t[5],e};se.rotate=function(e,t,r,n){return w.rotate(e.array,t.array,r,n.array),e._dirty=!0,e};se.rotateX=function(e,t,r){return w.rotateX(e.array,t.array,r),e._dirty=!0,e};se.rotateY=function(e,t,r){return w.rotateY(e.array,t.array,r),e._dirty=!0,e};se.rotateZ=function(e,t,r){return w.rotateZ(e.array,t.array,r),e._dirty=!0,e};se.scale=function(e,t,r){return w.scale(e.array,t.array,r.array),e._dirty=!0,e};se.transpose=function(e,t){return w.transpose(e.array,t.array),e._dirty=!0,e};se.translate=function(e,t,r){return w.translate(e.array,t.array,r.array),e._dirty=!0,e};var O=se,ne=function(e,t,r,n){e=e||0,t=t||0,r=r||0,n=n===void 0?1:n,this.array=k.fromValues(e,t,r,n),this._dirty=!0};ne.prototype={constructor:ne,add:function(e){return k.add(this.array,this.array,e.array),this._dirty=!0,this},calculateW:function(){return k.calculateW(this.array,this.array),this._dirty=!0,this},set:function(e,t,r,n){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=n,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new ne(this.x,this.y,this.z,this.w)},conjugate:function(){return k.conjugate(this.array,this.array),this._dirty=!0,this},copy:function(e){return k.copy(this.array,e.array),this._dirty=!0,this},dot:function(e){return k.dot(this.array,e.array)},fromMat3:function(e){return k.fromMat3(this.array,e.array),this._dirty=!0,this},fromMat4:function(){var e=$.create();return function(t){return $.fromMat4(e,t.array),$.transpose(e,e),k.fromMat3(this.array,e),this._dirty=!0,this}}(),identity:function(){return k.identity(this.array),this._dirty=!0,this},invert:function(){return k.invert(this.array,this.array),this._dirty=!0,this},len:function(){return k.len(this.array)},length:function(){return k.length(this.array)},lerp:function(e,t,r){return k.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},mul:function(e){return k.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return k.multiply(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return k.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return k.multiply(this.array,e.array,this.array),this._dirty=!0,this},normalize:function(){return k.normalize(this.array,this.array),this._dirty=!0,this},rotateX:function(e){return k.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return k.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return k.rotateZ(this.array,this.array,e),this._dirty=!0,this},rotationTo:function(e,t){return k.rotationTo(this.array,e.array,t.array),this._dirty=!0,this},setAxes:function(e,t,r){return k.setAxes(this.array,e.array,t.array,r.array),this._dirty=!0,this},setAxisAngle:function(e,t){return k.setAxisAngle(this.array,e.array,t),this._dirty=!0,this},slerp:function(e,t,r){return k.slerp(this.array,e.array,t.array,r),this._dirty=!0,this},sqrLen:function(){return k.sqrLen(this.array)},squaredLength:function(){return k.squaredLength(this.array)},fromEuler:function(e,t){return ne.fromEuler(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var or=Object.defineProperty;if(or){var Ir=ne.prototype;or(Ir,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),or(Ir,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),or(Ir,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),or(Ir,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}ne.add=function(e,t,r){return k.add(e.array,t.array,r.array),e._dirty=!0,e};ne.set=function(e,t,r,n,i){k.set(e.array,t,r,n,i),e._dirty=!0};ne.copy=function(e,t){return k.copy(e.array,t.array),e._dirty=!0,e};ne.calculateW=function(e,t){return k.calculateW(e.array,t.array),e._dirty=!0,e};ne.conjugate=function(e,t){return k.conjugate(e.array,t.array),e._dirty=!0,e};ne.identity=function(e){return k.identity(e.array),e._dirty=!0,e};ne.invert=function(e,t){return k.invert(e.array,t.array),e._dirty=!0,e};ne.dot=function(e,t){return k.dot(e.array,t.array)};ne.len=function(e){return k.length(e.array)};ne.lerp=function(e,t,r,n){return k.lerp(e.array,t.array,r.array,n),e._dirty=!0,e};ne.slerp=function(e,t,r,n){return k.slerp(e.array,t.array,r.array,n),e._dirty=!0,e};ne.mul=function(e,t,r){return k.multiply(e.array,t.array,r.array),e._dirty=!0,e};ne.multiply=ne.mul;ne.rotateX=function(e,t,r){return k.rotateX(e.array,t.array,r),e._dirty=!0,e};ne.rotateY=function(e,t,r){return k.rotateY(e.array,t.array,r),e._dirty=!0,e};ne.rotateZ=function(e,t,r){return k.rotateZ(e.array,t.array,r),e._dirty=!0,e};ne.setAxisAngle=function(e,t,r){return k.setAxisAngle(e.array,t.array,r),e._dirty=!0,e};ne.normalize=function(e,t){return k.normalize(e.array,t.array),e._dirty=!0,e};ne.sqrLen=function(e){return k.sqrLen(e.array)};ne.squaredLength=ne.sqrLen;ne.fromMat3=function(e,t){return k.fromMat3(e.array,t.array),e._dirty=!0,e};ne.setAxes=function(e,t,r,n){return k.setAxes(e.array,t.array,r.array,n.array),e._dirty=!0,e};ne.rotationTo=function(e,t,r){return k.rotationTo(e.array,t.array,r.array),e._dirty=!0,e};ne.fromEuler=function(e,t,r){e._dirty=!0,t=t.array;var n=e.array,i=Math.cos(t[0]/2),a=Math.cos(t[1]/2),o=Math.cos(t[2]/2),s=Math.sin(t[0]/2),l=Math.sin(t[1]/2),u=Math.sin(t[2]/2),r=(r||"XYZ").toUpperCase();switch(r){case"XYZ":n[0]=s*a*o+i*l*u,n[1]=i*l*o-s*a*u,n[2]=i*a*u+s*l*o,n[3]=i*a*o-s*l*u;break;case"YXZ":n[0]=s*a*o+i*l*u,n[1]=i*l*o-s*a*u,n[2]=i*a*u-s*l*o,n[3]=i*a*o+s*l*u;break;case"ZXY":n[0]=s*a*o-i*l*u,n[1]=i*l*o+s*a*u,n[2]=i*a*u+s*l*o,n[3]=i*a*o-s*l*u;break;case"ZYX":n[0]=s*a*o-i*l*u,n[1]=i*l*o+s*a*u,n[2]=i*a*u-s*l*o,n[3]=i*a*o+s*l*u;break;case"YZX":n[0]=s*a*o+i*l*u,n[1]=i*l*o+s*a*u,n[2]=i*a*u-s*l*o,n[3]=i*a*o-s*l*u;break;case"XZY":n[0]=s*a*o-i*l*u,n[1]=i*l*o-s*a*u,n[2]=i*a*u+s*l*o,n[3]=i*a*o+s*l*u;break}};var Wi=ne,yt=g.set,Or=g.copy,Fr=function(e,t){this.min=e||new C(1/0,1/0,1/0),this.max=t||new C(-1/0,-1/0,-1/0),this.vertices=null};Fr.prototype={constructor:Fr,updateFromVertices:function(e){if(e.length>0){var t=this.min,r=this.max,n=t.array,i=r.array;Or(n,e[0]),Or(i,e[0]);for(var a=1;a<e.length;a++){var o=e[a];o[0]<n[0]&&(n[0]=o[0]),o[1]<n[1]&&(n[1]=o[1]),o[2]<n[2]&&(n[2]=o[2]),o[0]>i[0]&&(i[0]=o[0]),o[1]>i[1]&&(i[1]=o[1]),o[2]>i[2]&&(i[2]=o[2])}t._dirty=!0,r._dirty=!0}},union:function(e){var t=this.min,r=this.max;return g.min(t.array,t.array,e.min.array),g.max(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersection:function(e){var t=this.min,r=this.max;return g.max(t.array,t.array,e.min.array),g.min(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersectBoundingBox:function(e){var t=this.min.array,r=this.max.array,n=e.min.array,i=e.max.array;return!(t[0]>i[0]||t[1]>i[1]||t[2]>i[2]||r[0]<n[0]||r[1]<n[1]||r[2]<n[2])},containBoundingBox:function(e){var t=this.min.array,r=this.max.array,n=e.min.array,i=e.max.array;return t[0]<=n[0]&&t[1]<=n[1]&&t[2]<=n[2]&&r[0]>=i[0]&&r[1]>=i[1]&&r[2]>=i[2]},containPoint:function(e){var t=this.min.array,r=this.max.array,n=e.array;return t[0]<=n[0]&&t[1]<=n[1]&&t[2]<=n[2]&&r[0]>=n[0]&&r[1]>=n[1]&&r[2]>=n[2]},isFinite:function(){var e=this.min.array,t=this.max.array;return isFinite(e[0])&&isFinite(e[1])&&isFinite(e[2])&&isFinite(t[0])&&isFinite(t[1])&&isFinite(t[2])},applyTransform:function(e){this.transformFrom(this,e)},transformFrom:function(){var e=g.create(),t=g.create(),r=g.create(),n=g.create(),i=g.create(),a=g.create();return function(o,s){var l=o.min.array,u=o.max.array,f=s.array;return e[0]=f[0]*l[0],e[1]=f[1]*l[0],e[2]=f[2]*l[0],t[0]=f[0]*u[0],t[1]=f[1]*u[0],t[2]=f[2]*u[0],r[0]=f[4]*l[1],r[1]=f[5]*l[1],r[2]=f[6]*l[1],n[0]=f[4]*u[1],n[1]=f[5]*u[1],n[2]=f[6]*u[1],i[0]=f[8]*l[2],i[1]=f[9]*l[2],i[2]=f[10]*l[2],a[0]=f[8]*u[2],a[1]=f[9]*u[2],a[2]=f[10]*u[2],l=this.min.array,u=this.max.array,l[0]=Math.min(e[0],t[0])+Math.min(r[0],n[0])+Math.min(i[0],a[0])+f[12],l[1]=Math.min(e[1],t[1])+Math.min(r[1],n[1])+Math.min(i[1],a[1])+f[13],l[2]=Math.min(e[2],t[2])+Math.min(r[2],n[2])+Math.min(i[2],a[2])+f[14],u[0]=Math.max(e[0],t[0])+Math.max(r[0],n[0])+Math.max(i[0],a[0])+f[12],u[1]=Math.max(e[1],t[1])+Math.max(r[1],n[1])+Math.max(i[1],a[1])+f[13],u[2]=Math.max(e[2],t[2])+Math.max(r[2],n[2])+Math.max(i[2],a[2])+f[14],this.min._dirty=!0,this.max._dirty=!0,this}}(),applyProjection:function(e){var t=this.min.array,r=this.max.array,n=e.array,i=t[0],a=t[1],o=t[2],s=r[0],l=r[1],u=t[2],f=r[0],c=r[1],d=r[2];if(n[15]===1)t[0]=n[0]*i+n[12],t[1]=n[5]*a+n[13],r[2]=n[10]*o+n[14],r[0]=n[0]*f+n[12],r[1]=n[5]*c+n[13],t[2]=n[10]*d+n[14];else{var h=-1/o;t[0]=n[0]*i*h,t[1]=n[5]*a*h,r[2]=(n[10]*o+n[14])*h,h=-1/u,r[0]=n[0]*s*h,r[1]=n[5]*l*h,h=-1/d,t[2]=(n[10]*d+n[14])*h}return this.min._dirty=!0,this.max._dirty=!0,this},updateVertices:function(){var e=this.vertices;if(!e){e=[];for(var t=0;t<8;t++)e[t]=g.fromValues(0,0,0);this.vertices=e}var r=this.min.array,n=this.max.array;return yt(e[0],r[0],r[1],r[2]),yt(e[1],r[0],n[1],r[2]),yt(e[2],n[0],r[1],r[2]),yt(e[3],n[0],n[1],r[2]),yt(e[4],r[0],r[1],n[2]),yt(e[5],r[0],n[1],n[2]),yt(e[6],n[0],r[1],n[2]),yt(e[7],n[0],n[1],n[2]),this},copy:function(e){var t=this.min,r=this.max;return Or(t.array,e.min.array),Or(r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},clone:function(){var e=new Fr;return e.copy(this),e}};var Me=Fr,Fs=0,Bs=Be.extend({name:"",position:null,rotation:null,scale:null,worldTransform:null,localTransform:null,autoUpdateLocalTransform:!0,_parent:null,_scene:null,_needsUpdateWorldTransform:!0,_inIterating:!1,__depth:0},function(){this.name||(this.name=(this.type||"NODE")+"_"+Fs++),this.position||(this.position=new C),this.rotation||(this.rotation=new Wi),this.scale||(this.scale=new C(1,1,1)),this.worldTransform=new O,this.localTransform=new O,this._children=[]},{target:null,invisible:!1,isSkinnedMesh:function(){return!1},isRenderable:function(){return!1},setName:function(e){var t=this._scene;if(t){var r=t._nodeRepository;delete r[this.name],r[e]=this}this.name=e},add:function(e){var t=e._parent;if(t!==this){t&&t.remove(e),e._parent=this,this._children.push(e);var r=this._scene;r&&r!==e.scene&&e.traverse(this._addSelfToScene,this),e._needsUpdateWorldTransform=!0}},remove:function(e){var t=this._children,r=t.indexOf(e);r<0||(t.splice(r,1),e._parent=null,this._scene&&e.traverse(this._removeSelfFromScene,this))},removeAll:function(){for(var e=this._children,t=0;t<e.length;t++)e[t]._parent=null,this._scene&&e[t].traverse(this._removeSelfFromScene,this);this._children=[]},getScene:function(){return this._scene},getParent:function(){return this._parent},_removeSelfFromScene:function(e){e._scene.removeFromScene(e),e._scene=null},_addSelfToScene:function(e){this._scene.addToScene(e),e._scene=this._scene},isAncestor:function(e){for(var t=e._parent;t;){if(t===this)return!0;t=t._parent}return!1},children:function(){return this._children.slice()},childAt:function(e){return this._children[e]},getChildByName:function(e){for(var t=this._children,r=0;r<t.length;r++)if(t[r].name===e)return t[r]},getDescendantByName:function(e){for(var t=this._children,r=0;r<t.length;r++){var n=t[r];if(n.name===e)return n;var i=n.getDescendantByName(e);if(i)return i}},queryNode:function(e){if(!!e){for(var t=e.split("/"),r=this,n=0;n<t.length;n++){var i=t[n];if(!!i){for(var a=!1,o=r._children,s=0;s<o.length;s++){var l=o[s];if(l.name===i){r=l,a=!0;break}}if(!a)return}}return r}},getPath:function(e){if(!this._parent)return"/";for(var t=this._parent,r=this.name;t._parent&&(r=t.name+"/"+r,t._parent!=e);)t=t._parent;return!t._parent&&e?null:r},traverse:function(e,t){e.call(t,this);for(var r=this._children,n=0,i=r.length;n<i;n++)r[n].traverse(e,t)},eachChild:function(e,t){for(var r=this._children,n=0,i=r.length;n<i;n++){var a=r[n];e.call(t,a,n)}},setLocalTransform:function(e){w.copy(this.localTransform.array,e.array),this.decomposeLocalTransform()},decomposeLocalTransform:function(e){var t=e?null:this.scale;this.localTransform.decomposeMatrix(t,this.rotation,this.position)},setWorldTransform:function(e){w.copy(this.worldTransform.array,e.array),this.decomposeWorldTransform()},decomposeWorldTransform:function(){var e=w.create();return function(t){var r=this.localTransform,n=this.worldTransform;this._parent?(w.invert(e,this._parent.worldTransform.array),w.multiply(r.array,e,n.array)):w.copy(r.array,n.array);var i=t?null:this.scale;r.decomposeMatrix(i,this.rotation,this.position)}}(),transformNeedsUpdate:function(){return this.position._dirty||this.rotation._dirty||this.scale._dirty},updateLocalTransform:function(){var e=this.position,t=this.rotation,r=this.scale;if(this.transformNeedsUpdate()){var n=this.localTransform.array;w.fromRotationTranslation(n,t.array,e.array),w.scale(n,n,r.array),t._dirty=!1,r._dirty=!1,e._dirty=!1,this._needsUpdateWorldTransform=!0}},_updateWorldTransformTopDown:function(){var e=this.localTransform.array,t=this.worldTransform.array;this._parent?w.multiplyAffine(t,this._parent.worldTransform.array,e):w.copy(t,e)},updateWorldTransform:function(){for(var e=this;e&&e.getParent()&&e.getParent().transformNeedsUpdate();)e=e.getParent();e.update()},update:function(e){this.autoUpdateLocalTransform?this.updateLocalTransform():e=!0,(e||this._needsUpdateWorldTransform)&&(this._updateWorldTransformTopDown(),e=!0,this._needsUpdateWorldTransform=!1);for(var t=this._children,r=0,n=t.length;r<n;r++)t[r].update(e)},getBoundingBox:function(){function e(i){return!i.invisible&&i.geometry}var t=new Me,r=new O,n=new O;return function(i,a){return a=a||new Me,this._parent?O.invert(n,this._parent.worldTransform):O.identity(n),this.traverse(function(o){o.geometry&&o.geometry.boundingBox&&(t.copy(o.geometry.boundingBox),O.multiply(r,n,o.worldTransform),t.applyTransform(r),a.union(t))},this,e),a}}(),getWorldPosition:function(e){this.transformNeedsUpdate()&&this.updateWorldTransform();var t=this.worldTransform.array;if(e){var r=e.array;return r[0]=t[12],r[1]=t[13],r[2]=t[14],e}else return new C(t[12],t[13],t[14])},clone:function(){var e=new this.constructor,t=this._children;e.setName(this.name),e.position.copy(this.position),e.rotation.copy(this.rotation),e.scale.copy(this.scale);for(var r=0;r<t.length;r++)e.add(t[r].clone());return e},rotateAround:function(){var e=new C,t=new O;return function(r,n,i){e.copy(this.position).subtract(r);var a=this.localTransform;a.identity(),a.translate(r),a.rotate(i,n),t.fromRotationTranslation(this.rotation,e),a.multiply(t),a.scale(this.scale),this.decomposeLocalTransform(),this._needsUpdateWorldTransform=!0}}(),lookAt:function(){var e=new O;return function(t,r){e.lookAt(this.position,t,r||this.localTransform.y).invert(),this.setLocalTransform(e),this.target=t}}()}),ot=Bs,Ve=ot.extend({material:null,geometry:null,mode:A.TRIANGLES,_renderInfo:null},{__program:null,lightGroup:0,renderOrder:0,culling:!0,cullFace:A.BACK,frontFace:A.CCW,frustumCulling:!0,receiveShadow:!0,castShadow:!0,ignorePicking:!1,ignorePreZ:!1,ignoreGBuffer:!1,isRenderable:function(){return this.geometry&&this.material&&this.material.shader&&!this.invisible&&this.geometry.vertexCount>0},beforeRender:function(e){},afterRender:function(e,t){},getBoundingBox:function(e,t){return t=ot.prototype.getBoundingBox.call(this,e,t),this.geometry&&this.geometry.boundingBox&&t.union(this.geometry.boundingBox),t},clone:function(){var e=["castShadow","receiveShadow","mode","culling","cullFace","frontFace","frustumCulling","renderOrder","lineWidth","ignorePicking","ignorePreZ","ignoreGBuffer"];return function(){var t=ot.prototype.clone.call(this);t.geometry=this.geometry,t.material=this.material;for(var r=0;r<e.length;r++){var n=e[r];t[n]!==this[n]&&(t[n]=this[n])}return t}}()});Ve.POINTS=A.POINTS;Ve.LINES=A.LINES;Ve.LINE_LOOP=A.LINE_LOOP;Ve.LINE_STRIP=A.LINE_STRIP;Ve.TRIANGLES=A.TRIANGLES;Ve.TRIANGLE_STRIP=A.TRIANGLE_STRIP;Ve.TRIANGLE_FAN=A.TRIANGLE_FAN;Ve.BACK=A.BACK;Ve.FRONT=A.FRONT;Ve.FRONT_AND_BACK=A.FRONT_AND_BACK;Ve.CW=A.CW;Ve.CCW=A.CCW;var bn=Ve,Cn=Be.extend({scene:null,camera:null,renderer:null},function(){this._ray=new Dr,this._ndc=new Ge},{pick:function(e,t,r){var n=this.pickAll(e,t,[],r);return n[0]||null},pickAll:function(e,t,r,n){return this.renderer.screenToNDC(e,t,this._ndc),this.camera.castRay(this._ndc,this._ray),r=r||[],this._intersectNode(this.scene,r,n||!1),r.sort(this._intersectionCompareFunc),r},_intersectNode:function(e,t,r){e instanceof bn&&e.isRenderable()&&(!e.ignorePicking||r)&&(e.mode===A.TRIANGLES&&e.geometry.isUseIndices()||e.geometry.pickByRay||e.geometry.pick)&&this._intersectRenderable(e,t);for(var n=0;n<e._children.length;n++)this._intersectNode(e._children[n],t,r)},_intersectRenderable:function(){var e=new C,t=new C,r=new C,n=new Dr,i=new O;return function(a,o){var s=a.isSkinnedMesh();n.copy(this._ray),O.invert(i,a.worldTransform),s||n.applyTransform(i);var l=a.geometry,u=s?a.skeleton.boundingBox:l.boundingBox;if(!(u&&!n.intersectBoundingBox(u))){if(l.pick){l.pick(this._ndc.x,this._ndc.y,this.renderer,this.camera,a,o);return}else if(l.pickByRay){l.pickByRay(n,a,o);return}var f=a.cullFace===A.BACK&&a.frontFace===A.CCW||a.cullFace===A.FRONT&&a.frontFace===A.CW,c,d=l.indices,h=l.attributes.position,v=l.attributes.weight,p=l.attributes.joint,m,_=[];if(!(!h||!h.value||!d)){if(s){m=a.skeleton.getSubSkinMatrices(a.__uid__,a.joints);for(var x=0;x<a.joints.length;x++){_[x]=_[x]||[];for(var T=0;T<16;T++)_[x][T]=m[x*16+T]}var y=[],E=[],S=[],L=[],R=[],N=l.attributes.skinnedPosition;(!N||!N.value)&&(l.createAttribute("skinnedPosition","f",3),N=l.attributes.skinnedPosition,N.init(l.vertexCount));for(var x=0;x<l.vertexCount;x++){h.get(x,y),v.get(x,E),p.get(x,S),E[3]=1-E[0]-E[1]-E[2],g.set(L,0,0,0);for(var T=0;T<4;T++)S[T]>=0&&E[T]>1e-4&&(g.transformMat4(R,y,_[S[T]]),g.scaleAndAdd(L,L,R,E[T]));N.set(x,L)}}for(var x=0;x<d.length;x+=3){var X=d[x],D=d[x+1],V=d[x+2],B=s?l.attributes.skinnedPosition:h;if(B.get(X,e.array),B.get(D,t.array),B.get(V,r.array),f?c=n.intersectTriangle(e,t,r,a.culling):c=n.intersectTriangle(e,r,t,a.culling),c){var P=new C;s?C.copy(P,c):C.transformMat4(P,c,a.worldTransform),o.push(new Cn.Intersection(c,P,a,[X,D,V],x/3,C.dist(P,this._ray.origin)))}}}}}}(),_intersectionCompareFunc:function(e,t){return e.distance-t.distance}});Cn.Intersection=function(e,t,r,n,i,a){this.point=e,this.pointWorld=t,this.target=r,this.triangle=n,this.triangleIndex=i,this.distance=a};var Us=Cn,sr="__dt__",Br=function(){this._contextId=0,this._caches=[],this._context={}};Br.prototype={use:function(e,t){var r=this._caches;r[e]||(r[e]={},t&&(r[e]=t())),this._contextId=e,this._context=r[e]},put:function(e,t){this._context[e]=t},get:function(e){return this._context[e]},dirty:function(e){e=e||"";var t=sr+e;this.put(t,!0)},dirtyAll:function(e){e=e||"";for(var t=sr+e,r=this._caches,n=0;n<r.length;n++)r[n]&&(r[n][t]=!0)},fresh:function(e){e=e||"";var t=sr+e;this.put(t,!1)},freshAll:function(e){e=e||"";for(var t=sr+e,r=this._caches,n=0;n<r.length;n++)r[n]&&(r[n][t]=!1)},isDirty:function(e){e=e||"";var t=sr+e,r=this._context;return!r.hasOwnProperty(t)||r[t]===!0},deleteContext:function(e){delete this._caches[e],this._context={}},delete:function(e){delete this._context[e]},clearAll:function(){this._caches={}},getContext:function(){return this._context},eachContext:function(e,t){var r=Object.keys(this._caches);r.forEach(function(n){e&&e.call(t,n)})},miss:function(e){return!this._context.hasOwnProperty(e)}};Br.prototype.constructor=Br;var Rn=Br,Q=Be.extend({width:512,height:512,type:A.UNSIGNED_BYTE,format:A.RGBA,wrapS:A.REPEAT,wrapT:A.REPEAT,minFilter:A.LINEAR_MIPMAP_LINEAR,magFilter:A.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,sRGB:!0,unpackAlignment:4,premultiplyAlpha:!1,dynamic:!1,NPOT:!1,__used:0},function(){this._cache=new Rn},{getWebGLTexture:function(e){var t=e.gl,r=this._cache;return r.use(e.__uid__),r.miss("webgl_texture")&&r.put("webgl_texture",t.createTexture()),this.dynamic?this.update(e):r.isDirty()&&(this.update(e),r.fresh()),r.get("webgl_texture")},bind:function(){},unbind:function(){},dirty:function(){this._cache&&this._cache.dirtyAll()},update:function(e){},updateCommon:function(e){var t=e.gl;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,this.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,this.unpackAlignment),this.format===A.DEPTH_COMPONENT&&(this.useMipmap=!1);var r=e.getGLExtension("EXT_sRGB");this.format===Q.SRGB&&!r&&(this.format=Q.RGB),this.format===Q.SRGB_ALPHA&&!r&&(this.format=Q.RGBA),this.NPOT=!this.isPowerOfTwo()},getAvailableWrapS:function(){return this.NPOT?A.CLAMP_TO_EDGE:this.wrapS},getAvailableWrapT:function(){return this.NPOT?A.CLAMP_TO_EDGE:this.wrapT},getAvailableMinFilter:function(){var e=this.minFilter;return this.NPOT||!this.useMipmap?e===A.NEAREST_MIPMAP_NEAREST||e===A.NEAREST_MIPMAP_LINEAR?A.NEAREST:e===A.LINEAR_MIPMAP_LINEAR||e===A.LINEAR_MIPMAP_NEAREST?A.LINEAR:e:e},getAvailableMagFilter:function(){return this.magFilter},nextHighestPowerOfTwo:function(e){--e;for(var t=1;t<32;t<<=1)e=e|e>>t;return e+1},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("webgl_texture");r&&e.gl.deleteTexture(r),t.deleteContext(e.__uid__)},isRenderable:function(){},isPowerOfTwo:function(){}});Object.defineProperty(Q.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e}});Object.defineProperty(Q.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e}});Q.BYTE=A.BYTE;Q.UNSIGNED_BYTE=A.UNSIGNED_BYTE;Q.SHORT=A.SHORT;Q.UNSIGNED_SHORT=A.UNSIGNED_SHORT;Q.INT=A.INT;Q.UNSIGNED_INT=A.UNSIGNED_INT;Q.FLOAT=A.FLOAT;Q.HALF_FLOAT=36193;Q.UNSIGNED_INT_24_8_WEBGL=34042;Q.DEPTH_COMPONENT=A.DEPTH_COMPONENT;Q.DEPTH_STENCIL=A.DEPTH_STENCIL;Q.ALPHA=A.ALPHA;Q.RGB=A.RGB;Q.RGBA=A.RGBA;Q.LUMINANCE=A.LUMINANCE;Q.LUMINANCE_ALPHA=A.LUMINANCE_ALPHA;Q.SRGB=35904;Q.SRGB_ALPHA=35906;Q.COMPRESSED_RGB_S3TC_DXT1_EXT=33776;Q.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777;Q.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778;Q.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779;Q.NEAREST=A.NEAREST;Q.LINEAR=A.LINEAR;Q.NEAREST_MIPMAP_NEAREST=A.NEAREST_MIPMAP_NEAREST;Q.LINEAR_MIPMAP_NEAREST=A.LINEAR_MIPMAP_NEAREST;Q.NEAREST_MIPMAP_LINEAR=A.NEAREST_MIPMAP_LINEAR;Q.LINEAR_MIPMAP_LINEAR=A.LINEAR_MIPMAP_LINEAR;Q.REPEAT=A.REPEAT;Q.CLAMP_TO_EDGE=A.CLAMP_TO_EDGE;Q.MIRRORED_REPEAT=A.MIRRORED_REPEAT;var W=Q,ke=bn.extend({skeleton:null,joints:null},function(){this.joints||(this.joints=[])},{offsetMatrix:null,isInstancedMesh:function(){return!1},isSkinnedMesh:function(){return!!(this.skeleton&&this.joints&&this.joints.length>0)},clone:function(){var e=bn.prototype.clone.call(this);return e.skeleton=this.skeleton,this.joints&&(e.joints=this.joints.slice()),e}});ke.POINTS=A.POINTS;ke.LINES=A.LINES;ke.LINE_LOOP=A.LINE_LOOP;ke.LINE_STRIP=A.LINE_STRIP;ke.TRIANGLES=A.TRIANGLES;ke.TRIANGLE_STRIP=A.TRIANGLE_STRIP;ke.TRIANGLE_FAN=A.TRIANGLE_FAN;ke.BACK=A.BACK;ke.FRONT=A.FRONT;ke.FRONT_AND_BACK=A.FRONT_AND_BACK;ke.CW=A.CW;ke.CCW=A.CCW;var Ln=ke,Ur={};Ur.isPowerOfTwo=function(e){return(e&e-1)==0};Ur.nextPowerOfTwo=function(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e++,e};Ur.nearestPowerOfTwo=function(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))};var Xi=Ur,qi=Xi.isPowerOfTwo;function ji(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function Hs(e,t){var r=ji(e.width),n=ji(e.height);t=t||document.createElement("canvas"),t.width=r,t.height=n;var i=t.getContext("2d");return i.drawImage(e.image,0,0,r,n),t}var Nn=W.extend(function(){return{image:null,pixels:null,mipmaps:[],convertToPOT:!1}},{textureType:"texture2D",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,n=this.type,i=!!(this.convertToPOT&&!this.mipmaps.length&&this.image&&(this.wrapS===W.REPEAT||this.wrapT===W.REPEAT)&&this.NPOT);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,i?this.wrapS:this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,i?this.wrapT:this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,i?this.magFilter:this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,i?this.minFilter:this.getAvailableMinFilter());var a=e.getGLExtension("EXT_texture_filter_anisotropic");if(a&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_2D,a.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),n===36193){var o=e.getGLExtension("OES_texture_half_float");o||(n=A.FLOAT)}if(this.mipmaps.length)for(var s=this.width,l=this.height,u=0;u<this.mipmaps.length;u++){var f=this.mipmaps[u];this._updateTextureData(t,f,u,s,l,r,n,!1),s/=2,l/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,n,i),this.useMipmap&&(!this.NPOT||i)&&t.generateMipmap(t.TEXTURE_2D);t.bindTexture(t.TEXTURE_2D,null)},_updateTextureData:function(e,t,r,n,i,a,o,s){if(t.image){var l=t.image;s&&(this._potCanvas=Hs(this,this._potCanvas),l=this._potCanvas),e.texImage2D(e.TEXTURE_2D,r,a,a,o,l)}else a<=W.COMPRESSED_RGBA_S3TC_DXT5_EXT&&a>=W.COMPRESSED_RGB_S3TC_DXT1_EXT?e.compressedTexImage2D(e.TEXTURE_2D,r,a,n,i,0,t.pixels):e.texImage2D(e.TEXTURE_2D,r,a,n,i,0,a,o,t.pixels)},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_2D))},isPowerOfTwo:function(){return qi(this.width)&&qi(this.height)},isRenderable:function(){return this.image?this.image.width>0&&this.image.height>0:!!(this.width&&this.height)},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,null)},load:function(e,t){var r=pe.createImage();t&&(r.crossOrigin=t);var n=this;return r.onload=function(){n.dirty(),n.trigger("success",n)},r.onerror=function(){n.trigger("error",n)},r.src=e,this.image=r,this}});Object.defineProperty(Nn.prototype,"width",{get:function(){return this.image?this.image.width:this._width},set:function(e){this.image?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(Nn.prototype,"height",{get:function(){return this.image?this.image.height:this._height},set:function(e){this.image?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});var re=Nn;function Yi(e){return{byte:pe.Int8Array,ubyte:pe.Uint8Array,short:pe.Int16Array,ushort:pe.Uint16Array}[e]||pe.Float32Array}function Mn(e){return"attr_"+e}function kt(e,t,r,n){switch(this.name=e,this.type=t,this.size=r,this.semantic=n||"",this.value=null,r){case 1:this.get=function(i){return this.value[i]},this.set=function(i,a){this.value[i]=a},this.copy=function(i,a){this.value[i]=this.value[i]};break;case 2:this.get=function(i,a){var o=this.value;return a[0]=o[i*2],a[1]=o[i*2+1],a},this.set=function(i,a){var o=this.value;o[i*2]=a[0],o[i*2+1]=a[1]},this.copy=function(i,a){var o=this.value;a*=2,i*=2,o[i]=o[a],o[i+1]=o[a+1]};break;case 3:this.get=function(i,a){var o=i*3,s=this.value;return a[0]=s[o],a[1]=s[o+1],a[2]=s[o+2],a},this.set=function(i,a){var o=i*3,s=this.value;s[o]=a[0],s[o+1]=a[1],s[o+2]=a[2]},this.copy=function(i,a){var o=this.value;a*=3,i*=3,o[i]=o[a],o[i+1]=o[a+1],o[i+2]=o[a+2]};break;case 4:this.get=function(i,a){var o=this.value,s=i*4;return a[0]=o[s],a[1]=o[s+1],a[2]=o[s+2],a[3]=o[s+3],a},this.set=function(i,a){var o=this.value,s=i*4;o[s]=a[0],o[s+1]=a[1],o[s+2]=a[2],o[s+3]=a[3]},this.copy=function(i,a){var o=this.value;a*=4,i*=4,o[i]=o[a],o[i+1]=o[a+1],o[i+2]=o[a+2],o[i+3]=o[a+3]}}}kt.prototype.init=function(e){if(!this.value||this.value.length!==e*this.size){var t=Yi(this.type);this.value=new t(e*this.size)}};kt.prototype.fromArray=function(e){var t=Yi(this.type),r;if(e[0]&&e[0].length){var n=0,i=this.size;r=new t(e.length*i);for(var a=0;a<e.length;a++)for(var o=0;o<i;o++)r[n++]=e[a][o]}else r=new t(e);this.value=r};kt.prototype.clone=function(e){var t=new kt(this.name,this.type,this.size,this.semantic);return e&&console.warn("todo"),t};function Ki(e,t,r,n,i){this.name=e,this.type=t,this.buffer=r,this.size=n,this.semantic=i,this.symbol="",this.needsRemove=!1}function Zi(e){this.buffer=e,this.count=0}var ct=Be.extend(function(){return{attributes:{},indices:null,dynamic:!0,_enabledAttributes:null,__used:0}},function(){this._cache=new Rn,this._attributeList=Object.keys(this.attributes),this.__vaoCache={}},{mainAttribute:"",pick:null,pickByRay:null,dirty:function(){for(var e=this.getEnabledAttributes(),t=0;t<e.length;t++)this.dirtyAttribute(e[t]);this.dirtyIndices(),this._enabledAttributes=null,this._cache.dirty("any")},dirtyIndices:function(){this._cache.dirtyAll("indices")},dirtyAttribute:function(e){this._cache.dirtyAll(Mn(e)),this._cache.dirtyAll("attributes")},getTriangleIndices:function(e,t){if(e<this.triangleCount&&e>=0){t||(t=[]);var r=this.indices;return t[0]=r[e*3],t[1]=r[e*3+1],t[2]=r[e*3+2],t}},setTriangleIndices:function(e,t){var r=this.indices;r[e*3]=t[0],r[e*3+1]=t[1],r[e*3+2]=t[2]},isUseIndices:function(){return!!this.indices},initIndicesFromArray:function(e){var t,r=this.vertexCount>65535?pe.Uint32Array:pe.Uint16Array;if(e[0]&&e[0].length){var n=0,i=3;t=new r(e.length*i);for(var a=0;a<e.length;a++)for(var o=0;o<i;o++)t[n++]=e[a][o]}else t=new r(e);this.indices=t},createAttribute:function(e,t,r,n){var i=new kt(e,t,r,n);return this.attributes[e]&&this.removeAttribute(e),this.attributes[e]=i,this._attributeList.push(e),i},removeAttribute:function(e){var t=this._attributeList,r=t.indexOf(e);return r>=0?(t.splice(r,1),delete this.attributes[e],!0):!1},getAttribute:function(e){return this.attributes[e]},getEnabledAttributes:function(){var e=this._enabledAttributes,t=this._attributeList;if(e)return e;for(var r=[],n=this.vertexCount,i=0;i<t.length;i++){var a=t[i],o=this.attributes[a];o.value&&o.value.length===n*o.size&&r.push(a)}return this._enabledAttributes=r,r},getBufferChunks:function(e){var t=this._cache;t.use(e.__uid__);var r=t.isDirty("attributes"),n=t.isDirty("indices");if(r||n){this._updateBuffer(e.gl,r,n);for(var i=this.getEnabledAttributes(),a=0;a<i.length;a++)t.fresh(Mn(i[a]));t.fresh("attributes"),t.fresh("indices")}return t.fresh("any"),t.get("chunks")},_updateBuffer:function(e,t,r){var n=this._cache,i=n.get("chunks"),a=!1;i||(i=[],i[0]={attributeBuffers:[],indicesBuffer:null},n.put("chunks",i),a=!0);var o=i[0],s=o.attributeBuffers,l=o.indicesBuffer;if(t||a){var u=this.getEnabledAttributes(),f={};if(!a)for(var c=0;c<s.length;c++)f[s[c].name]=s[c];for(var d=0;d<u.length;d++){var h=u[d],v=this.attributes[h],p;a||(p=f[h]);var m;p?m=p.buffer:m=e.createBuffer(),n.isDirty(Mn(h))&&(e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,v.value,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW)),s[d]=new Ki(h,v.type,m,v.size,v.semantic)}for(var c=d;c<s.length;c++)e.deleteBuffer(s[c].buffer);s.length=d}this.isUseIndices()&&(r||a)&&(l||(l=new Zi(e.createBuffer()),o.indicesBuffer=l),l.count=this.indices.length,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,l.buffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW))},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var n=0;n<r.length;n++){for(var i=r[n],a=0;a<i.attributeBuffers.length;a++){var o=i.attributeBuffers[a];e.gl.deleteBuffer(o.buffer)}i.indicesBuffer&&e.gl.deleteBuffer(i.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&s.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});Object.defineProperty&&(Object.defineProperty(ct.prototype,"vertexCount",{enumerable:!1,get:function(){var e=this.attributes[this.mainAttribute];return e||(e=this.attributes[this._attributeList[0]]),!e||!e.value?0:e.value.length/e.size}}),Object.defineProperty(ct.prototype,"triangleCount",{enumerable:!1,get:function(){var e=this.indices;return e?e.length/3:0}}));ct.STATIC_DRAW=A.STATIC_DRAW;ct.DYNAMIC_DRAW=A.DYNAMIC_DRAW;ct.STREAM_DRAW=A.STREAM_DRAW;ct.AttributeBuffer=Ki;ct.IndicesBuffer=Zi;ct.Attribute=kt;var Ct=ct,De=g.create,Wt=g.add,Rt=g.set,st=Ct.Attribute,Lt=Ct.extend(function(){return{attributes:{position:new st("position","float",3,"POSITION"),texcoord0:new st("texcoord0","float",2,"TEXCOORD_0"),texcoord1:new st("texcoord1","float",2,"TEXCOORD_1"),normal:new st("normal","float",3,"NORMAL"),tangent:new st("tangent","float",4,"TANGENT"),color:new st("color","float",4,"COLOR"),weight:new st("weight","float",3,"WEIGHT"),joint:new st("joint","float",4,"JOINT"),barycentric:new st("barycentric","float",3,null)},boundingBox:null}},{mainAttribute:"position",updateBoundingBox:function(){var e=this.boundingBox;e||(e=this.boundingBox=new Me);var t=this.attributes.position.value;if(t&&t.length){var r=e.min,n=e.max,i=r.array,a=n.array;g.set(i,t[0],t[1],t[2]),g.set(a,t[0],t[1],t[2]);for(var o=3;o<t.length;){var s=t[o++],l=t[o++],u=t[o++];s<i[0]&&(i[0]=s),l<i[1]&&(i[1]=l),u<i[2]&&(i[2]=u),s>a[0]&&(a[0]=s),l>a[1]&&(a[1]=l),u>a[2]&&(a[2]=u)}r._dirty=!0,n._dirty=!0}},generateVertexNormals:function(){if(!!this.vertexCount){var e=this.indices,t=this.attributes,r=t.position.value,n=t.normal.value;if(!n||n.length!==r.length)n=t.normal.value=new pe.Float32Array(r.length);else for(var i=0;i<n.length;i++)n[i]=0;for(var a=De(),o=De(),s=De(),l=De(),u=De(),f=De(),c=e?e.length:this.vertexCount,d,h,v,p=0;p<c;){e?(d=e[p++],h=e[p++],v=e[p++]):(d=p++,h=p++,v=p++),Rt(a,r[d*3],r[d*3+1],r[d*3+2]),Rt(o,r[h*3],r[h*3+1],r[h*3+2]),Rt(s,r[v*3],r[v*3+1],r[v*3+2]),g.sub(l,a,o),g.sub(u,o,s),g.cross(f,l,u);for(var i=0;i<3;i++)n[d*3+i]=n[d*3+i]+f[i],n[h*3+i]=n[h*3+i]+f[i],n[v*3+i]=n[v*3+i]+f[i]}for(var i=0;i<n.length;)Rt(f,n[i],n[i+1],n[i+2]),g.normalize(f,f),n[i++]=f[0],n[i++]=f[1],n[i++]=f[2];this.dirty()}},generateFaceNormals:function(){if(!!this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.indices,t=this.attributes,r=t.position.value,n=t.normal.value,i=De(),a=De(),o=De(),s=De(),l=De(),u=De();n||(n=t.normal.value=new Float32Array(r.length));for(var f=e?e.length:this.vertexCount,c,d,h,v=0;v<f;){e?(c=e[v++],d=e[v++],h=e[v++]):(c=v++,d=v++,h=v++),Rt(i,r[c*3],r[c*3+1],r[c*3+2]),Rt(a,r[d*3],r[d*3+1],r[d*3+2]),Rt(o,r[h*3],r[h*3+1],r[h*3+2]),g.sub(s,i,a),g.sub(l,a,o),g.cross(u,s,l),g.normalize(u,u);for(var p=0;p<3;p++)n[c*3+p]=u[p],n[d*3+p]=u[p],n[h*3+p]=u[p]}this.dirty()}},generateTangents:function(){if(!!this.vertexCount){var e=this.vertexCount,t=this.attributes;t.tangent.value||(t.tangent.value=new Float32Array(e*4));var r=t.texcoord0.value,n=t.position.value,i=t.tangent.value,a=t.normal.value;if(!r){console.warn("Geometry without texcoords can't generate tangents.");return}for(var o=[],s=[],l=0;l<e;l++)o[l]=[0,0,0],s[l]=[0,0,0];for(var u=[0,0,0],f=[0,0,0],c=this.indices,d=c?c.length:this.vertexCount,h,v,p,l=0;l<d;){c?(h=c[l++],v=c[l++],p=c[l++]):(h=l++,v=l++,p=l++);var m=r[h*2],_=r[v*2],x=r[p*2],T=r[h*2+1],y=r[v*2+1],E=r[p*2+1],S=n[h*3],L=n[v*3],R=n[p*3],N=n[h*3+1],X=n[v*3+1],D=n[p*3+1],V=n[h*3+2],B=n[v*3+2],P=n[p*3+2],U=L-S,q=R-S,te=X-N,be=D-N,Ce=B-V,ze=P-V,Xe=_-m,Oe=x-m,Fe=y-T,Qe=E-T,Je=1/(Xe*Qe-Fe*Oe);u[0]=(Qe*U-Fe*q)*Je,u[1]=(Qe*te-Fe*be)*Je,u[2]=(Qe*Ce-Fe*ze)*Je,f[0]=(Xe*q-Oe*U)*Je,f[1]=(Xe*be-Oe*te)*Je,f[2]=(Xe*ze-Oe*Ce)*Je,Wt(o[h],o[h],u),Wt(o[v],o[v],u),Wt(o[p],o[p],u),Wt(s[h],s[h],f),Wt(s[v],s[v],f),Wt(s[p],s[p],f)}for(var qe=De(),Jt=De(),at=De(),l=0;l<e;l++){at[0]=a[l*3],at[1]=a[l*3+1],at[2]=a[l*3+2];var Ft=o[l];g.scale(qe,at,g.dot(at,Ft)),g.sub(qe,Ft,qe),g.normalize(qe,qe),g.cross(Jt,at,Ft),i[l*4]=qe[0],i[l*4+1]=qe[1],i[l*4+2]=qe[2],i[l*4+3]=g.dot(Jt,s[l])<0?-1:1}this.dirty()}},isUniqueVertex:function(){return this.isUseIndices()?this.vertexCount===this.indices.length:!0},generateUniqueVertex:function(){if(!(!this.vertexCount||!this.indices)){this.indices.length>65535&&(this.indices=new pe.Uint32Array(this.indices));for(var e=this.attributes,t=this.indices,r=this.getEnabledAttributes(),n={},i=0;i<r.length;i++){var a=r[i];n[a]=e[a].value,e[a].init(this.indices.length)}for(var o=0,s=0;s<t.length;s++){for(var l=t[s],i=0;i<r.length;i++)for(var a=r[i],u=e[a].value,f=e[a].size,c=0;c<f;c++)u[o*f+c]=n[a][l*f+c];t[s]=o,o++}this.dirty()}},generateBarycentric:function(){if(!!this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.attributes,t=e.barycentric.value,r=this.indices;if(!(t&&t.length===r.length*3)){t=e.barycentric.value=new Float32Array(r.length*3);for(var n=0;n<(r?r.length:this.vertexCount/3);)for(var i=0;i<3;i++){var a=r?r[n++]:n*3+i;t[a*3+i]=1}this.dirty()}}},applyTransform:function(e){var t=this.attributes,r=t.position.value,n=t.normal.value,i=t.tangent.value;e=e.array;var a=w.create();w.invert(a,e),w.transpose(a,a);var o=g.transformMat4,s=g.forEach;s(r,3,0,null,o,e),n&&s(n,3,0,null,o,a),i&&s(i,4,0,null,o,a),this.boundingBox&&this.updateBoundingBox()},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var n=0;n<r.length;n++){for(var i=r[n],a=0;a<i.attributeBuffers.length;a++){var o=i.attributeBuffers[a];e.gl.deleteBuffer(o.buffer)}i.indicesBuffer&&e.gl.deleteBuffer(i.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&s.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});Lt.STATIC_DRAW=Ct.STATIC_DRAW;Lt.DYNAMIC_DRAW=Ct.DYNAMIC_DRAW;Lt.STREAM_DRAW=Ct.STREAM_DRAW;Lt.AttributeBuffer=Ct.AttributeBuffer;Lt.IndicesBuffer=Ct.IndicesBuffer;Lt.Attribute=st;var We=Lt,zs=`vec3 calcAmbientSHLight(int idx, vec3 N) {
 int offset = 9 * idx;
 return ambientSHLightCoefficients[0]
 + ambientSHLightCoefficients[1] * N.x
 + ambientSHLightCoefficients[2] * N.y
 + ambientSHLightCoefficients[3] * N.z
 + ambientSHLightCoefficients[4] * N.x * N.z
 + ambientSHLightCoefficients[5] * N.z * N.y
 + ambientSHLightCoefficients[6] * N.y * N.x
 + ambientSHLightCoefficients[7] * (3.0 * N.z * N.z - 1.0)
 + ambientSHLightCoefficients[8] * (N.x * N.x - N.y * N.y);
}`,rt="uniform vec3 ",lr="uniform float ",Xt="@export clay.header.",qt="@end",we=":unconfigurable;",Gs=[Xt+"directional_light",rt+"directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]"+we,rt+"directionalLightColor[DIRECTIONAL_LIGHT_COUNT]"+we,qt,Xt+"ambient_light",rt+"ambientLightColor[AMBIENT_LIGHT_COUNT]"+we,qt,Xt+"ambient_sh_light",rt+"ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]"+we,rt+"ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]"+we,zs,qt,Xt+"ambient_cubemap_light",rt+"ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]"+we,"uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]"+we,"uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]"+we,qt,Xt+"point_light",rt+"pointLightPosition[POINT_LIGHT_COUNT]"+we,lr+"pointLightRange[POINT_LIGHT_COUNT]"+we,rt+"pointLightColor[POINT_LIGHT_COUNT]"+we,qt,Xt+"spot_light",rt+"spotLightPosition[SPOT_LIGHT_COUNT]"+we,rt+"spotLightDirection[SPOT_LIGHT_COUNT]"+we,lr+"spotLightRange[SPOT_LIGHT_COUNT]"+we,lr+"spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]"+we,lr+"spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]"+we,lr+"spotLightFalloffFactor[SPOT_LIGHT_COUNT]"+we,rt+"spotLightColor[SPOT_LIGHT_COUNT]"+we,qt].join(`
`);b.import(Gs);var Vs=ot.extend(function(){return{color:[1,1,1],intensity:1,castShadow:!0,shadowResolution:512,group:0}},{type:"",clone:function(){var e=ot.prototype.clone.call(this);return e.color=Array.prototype.slice.call(this.color),e.intensity=this.intensity,e.castShadow=this.castShadow,e.shadowResolution=this.shadowResolution,e}}),nt=Vs,Hr=function(e,t){this.normal=e||new C(0,1,0),this.distance=t||0};Hr.prototype={constructor:Hr,distanceToPoint:function(e){return g.dot(e.array,this.normal.array)-this.distance},projectPoint:function(e,t){t||(t=new C);var r=this.distanceToPoint(e);return g.scaleAndAdd(t.array,e.array,this.normal.array,-r),t._dirty=!0,t},normalize:function(){var e=1/g.len(this.normal.array);g.scale(this.normal.array,e),this.distance*=e},intersectFrustum:function(e){for(var t=e.vertices,r=this.normal.array,n=g.dot(t[0].array,r)>this.distance,i=1;i<8;i++)if(g.dot(t[i].array,r)>this.distance!=n)return!0},intersectLine:function(){var e=g.create();return function(t,r,n){var i=this.distanceToPoint(t),a=this.distanceToPoint(r);if(i>0&&a>0||i<0&&a<0)return null;var o=this.normal.array,s=this.distance,l=t.array;g.sub(e,r.array,t.array),g.normalize(e,e);var u=g.dot(o,e);if(u===0)return null;n||(n=new C);var f=(g.dot(o,l)-s)/u;return g.scaleAndAdd(n.array,l,e,-f),n._dirty=!0,n}}(),applyTransform:function(){var e=w.create(),t=M.create(),r=M.create();return r[3]=1,function(n){n=n.array,g.scale(r,this.normal.array,this.distance),M.transformMat4(r,r,n),this.distance=g.dot(r,this.normal.array),w.invert(e,n),w.transpose(e,e),t[3]=0,g.copy(t,this.normal.array),M.transformMat4(t,t,e),g.copy(this.normal.array,t)}}(),copy:function(e){g.copy(this.normal.array,e.normal.array),this.normal._dirty=!0,this.distance=e.distance},clone:function(){var e=new Hr;return e.copy(this),e}};var $i=Hr,ve=g.set,Qi=g.copy,Ji=g.transformMat4,Dn=Math.min,Pn=Math.max,ea=function(){this.planes=[];for(var e=0;e<6;e++)this.planes.push(new $i);this.boundingBox=new Me,this.vertices=[];for(var e=0;e<8;e++)this.vertices[e]=g.fromValues(0,0,0)};ea.prototype={setFromProjection:function(e){var t=this.planes,r=e.array,n=r[0],i=r[1],a=r[2],o=r[3],s=r[4],l=r[5],u=r[6],f=r[7],c=r[8],d=r[9],h=r[10],v=r[11],p=r[12],m=r[13],_=r[14],x=r[15];ve(t[0].normal.array,o-n,f-s,v-c),t[0].distance=-(x-p),t[0].normalize(),ve(t[1].normal.array,o+n,f+s,v+c),t[1].distance=-(x+p),t[1].normalize(),ve(t[2].normal.array,o+i,f+l,v+d),t[2].distance=-(x+m),t[2].normalize(),ve(t[3].normal.array,o-i,f-l,v-d),t[3].distance=-(x-m),t[3].normalize(),ve(t[4].normal.array,o-a,f-u,v-h),t[4].distance=-(x-_),t[4].normalize(),ve(t[5].normal.array,o+a,f+u,v+h),t[5].distance=-(x+_),t[5].normalize();var T=this.boundingBox,y=this.vertices;if(x===0){var E=l/n,S=-_/(h-1),L=-_/(h+1),R=-L/l,N=-S/l;T.min.set(-R*E,-R,L),T.max.set(R*E,R,S),ve(y[0],-R*E,-R,L),ve(y[1],-R*E,R,L),ve(y[2],R*E,-R,L),ve(y[3],R*E,R,L),ve(y[4],-N*E,-N,S),ve(y[5],-N*E,N,S),ve(y[6],N*E,-N,S),ve(y[7],N*E,N,S)}else{var X=(-1-p)/n,D=(1-p)/n,V=(1-m)/l,B=(-1-m)/l,P=(-1-_)/h,U=(1-_)/h;T.min.set(Math.min(X,D),Math.min(B,V),Math.min(U,P)),T.max.set(Math.max(D,X),Math.max(V,B),Math.max(P,U));var q=T.min.array,te=T.max.array;ve(y[0],q[0],q[1],q[2]),ve(y[1],q[0],te[1],q[2]),ve(y[2],te[0],q[1],q[2]),ve(y[3],te[0],te[1],q[2]),ve(y[4],q[0],q[1],te[2]),ve(y[5],q[0],te[1],te[2]),ve(y[6],te[0],q[1],te[2]),ve(y[7],te[0],te[1],te[2])}},getTransformedBoundingBox:function(){var e=g.create();return function(t,r){var n=this.vertices,i=r.array,a=t.min,o=t.max,s=a.array,l=o.array,u=n[0];Ji(e,u,i),Qi(s,e),Qi(l,e);for(var f=1;f<8;f++)u=n[f],Ji(e,u,i),s[0]=Dn(e[0],s[0]),s[1]=Dn(e[1],s[1]),s[2]=Dn(e[2],s[2]),l[0]=Pn(e[0],l[0]),l[1]=Pn(e[1],l[1]),l[2]=Pn(e[2],l[2]);return a._dirty=!0,o._dirty=!0,t}}()};var In=ea,ks=ot.extend(function(){return{projectionMatrix:new O,invProjectionMatrix:new O,viewMatrix:new O,frustum:new In}},function(){this.update(!0)},{update:function(e){ot.prototype.update.call(this,e),O.invert(this.viewMatrix,this.worldTransform),this.updateProjectionMatrix(),O.invert(this.invProjectionMatrix,this.projectionMatrix),this.frustum.setFromProjection(this.projectionMatrix)},setViewMatrix:function(e){O.copy(this.viewMatrix,e),O.invert(this.worldTransform,e),this.decomposeWorldTransform()},decomposeProjectionMatrix:function(){},setProjectionMatrix:function(e){O.copy(this.projectionMatrix,e),O.invert(this.invProjectionMatrix,e),this.decomposeProjectionMatrix()},updateProjectionMatrix:function(){},castRay:function(){var e=M.create();return function(t,r){var n=r!==void 0?r:new Dr,i=t.array[0],a=t.array[1];return M.set(e,i,a,-1,1),M.transformMat4(e,e,this.invProjectionMatrix.array),M.transformMat4(e,e,this.worldTransform.array),g.scale(n.origin.array,e,1/e[3]),M.set(e,i,a,1,1),M.transformMat4(e,e,this.invProjectionMatrix.array),M.transformMat4(e,e,this.worldTransform.array),g.scale(e,e,1/e[3]),g.sub(n.direction.array,e,n.origin.array),g.normalize(n.direction.array,n.direction.array),n.direction._dirty=!0,n.origin._dirty=!0,n}}()}),jt=ks,Ws=w.create(),ta=w.create(),On={};function Xs(e){var t=[],r=Object.keys(e);r.sort();for(var n=0;n<r.length;n++){var i=r[n];t.push(i+" "+e[i])}var a=t.join(`
`);if(On[a])return On[a];var o=Ae.genGUID();return On[a]=o,o}function zr(){this.opaque=[],this.transparent=[],this._opaqueCount=0,this._transparentCount=0}zr.prototype.startCount=function(){this._opaqueCount=0,this._transparentCount=0};zr.prototype.add=function(e,t){t?this.transparent[this._transparentCount++]=e:this.opaque[this._opaqueCount++]=e};zr.prototype.endCount=function(){this.transparent.length=this._transparentCount,this.opaque.length=this._opaqueCount};var qs=ot.extend(function(){return{material:null,lights:[],viewBoundingBoxLastFrame:new Me,shadowUniforms:{},_cameraList:[],_lightUniforms:{},_previousLightNumber:{},_lightNumber:{},_lightProgramKeys:{},_nodeRepository:{},_renderLists:new yi(20)}},function(){this._scene=this},{addToScene:function(e){e instanceof jt?(this._cameraList.length>0&&console.warn("Found multiple camera in one scene. Use the fist one."),this._cameraList.push(e)):e instanceof nt&&this.lights.push(e),e.name&&(this._nodeRepository[e.name]=e)},removeFromScene:function(e){var t;e instanceof jt?(t=this._cameraList.indexOf(e),t>=0&&this._cameraList.splice(t,1)):e instanceof nt&&(t=this.lights.indexOf(e),t>=0&&this.lights.splice(t,1)),e.name&&delete this._nodeRepository[e.name]},getNode:function(e){return this._nodeRepository[e]},setMainCamera:function(e){var t=this._cameraList.indexOf(e);t>=0&&this._cameraList.splice(t,1),this._cameraList.unshift(e)},getMainCamera:function(){return this._cameraList[0]},getLights:function(){return this.lights},updateLights:function(){var e=this.lights;this._previousLightNumber=this._lightNumber;for(var t={},r=0;r<e.length;r++){var n=e[r];if(!n.invisible){var i=n.group;t[i]||(t[i]={}),t[i][n.type]=t[i][n.type]||0,t[i][n.type]++}}this._lightNumber=t;for(var a in t)this._lightProgramKeys[a]=Xs(t[a]);this._updateLightUniforms()},cloneNode:function(e){var t=e.clone(),r={};function n(i,a){r[i.__uid__]=a;for(var o=0;o<i._children.length;o++){var s=i._children[o],l=a._children[o];n(s,l)}}return n(e,t),t.traverse(function(i){i.skeleton&&(i.skeleton=i.skeleton.clone(r)),i.material&&(i.material=i.material.clone())}),t},updateRenderList:function(e,t){var r=e.__uid__,n=this._renderLists.get(r);n||(n=new zr,this._renderLists.put(r,n)),n.startCount(),t&&(this.viewBoundingBoxLastFrame.min.set(1/0,1/0,1/0),this.viewBoundingBoxLastFrame.max.set(-1/0,-1/0,-1/0));var i=this.material&&this.material.transparent||!1;return this._doUpdateRenderList(this,e,i,n,t),n.endCount(),n},getRenderList:function(e){return this._renderLists.get(e.__uid__)},_doUpdateRenderList:function(e,t,r,n,i){if(!e.invisible)for(var a=0;a<e._children.length;a++){var o=e._children[a];if(o.isRenderable()){var s=o.isSkinnedMesh()?Ws:o.worldTransform.array,l=o.geometry;w.multiplyAffine(ta,t.viewMatrix.array,s),(i&&!l.boundingBox||!this.isFrustumCulled(o,t,ta))&&n.add(o,o.material.transparent||r)}o._children.length>0&&this._doUpdateRenderList(o,t,r,n,i)}},isFrustumCulled:function(){var e=new Me,t=new O;return function(r,n,i){var a=r.boundingBox;if(a||(r.skeleton&&r.skeleton.boundingBox?a=r.skeleton.boundingBox:a=r.geometry.boundingBox),!a)return!1;if(t.array=i,e.transformFrom(a,t),r.castShadow&&this.viewBoundingBoxLastFrame.union(e),r.frustumCulling){if(!e.intersectBoundingBox(n.frustum.boundingBox))return!0;t.array=n.projectionMatrix.array,e.max.array[2]>0&&e.min.array[2]<0&&(e.max.array[2]=-1e-20),e.applyProjection(t);var o=e.min.array,s=e.max.array;if(s[0]<-1||o[0]>1||s[1]<-1||o[1]>1||s[2]<-1||o[2]>1)return!0}return!1}}(),_updateLightUniforms:function(){var e=this.lights;e.sort(js);var t=this._lightUniforms;for(var r in t)for(var n in t[r])t[r][n].value.length=0;for(var i=0;i<e.length;i++){var a=e[i];if(!a.invisible){var r=a.group;for(var n in a.uniformTemplates){var o=a.uniformTemplates[n],s=o.value(a);if(s!=null){t[r]||(t[r]={}),t[r][n]||(t[r][n]={type:"",value:[]});var l=t[r][n];switch(l.type=o.type+"v",o.type){case"1i":case"1f":case"t":l.value.push(s);break;case"2f":case"3f":case"4f":for(var u=0;u<s.length;u++)l.value.push(s[u]);break;default:console.error("Unkown light uniform type "+o.type)}}}}}},getLightGroups:function(){var e=[];for(var t in this._lightNumber)e.push(t);return e},getNumberChangedLightGroups:function(){var e=[];for(var t in this._lightNumber)this.isLightNumberChanged(t)&&e.push(t);return e},isLightNumberChanged:function(e){var t=this._previousLightNumber,r=this._lightNumber;for(var n in r[e])if(!t[e]||r[e][n]!==t[e][n])return!0;for(var n in t[e])if(!r[e]||r[e][n]!==t[e][n])return!0;return!1},getLightsNumbers:function(e){return this._lightNumber[e]},getProgramKey:function(e){return this._lightProgramKeys[e]},setLightUniforms:function(){function e(t,r,n){for(var i in t){var a=t[i];if(a.type==="tv"){if(!r.hasUniform(i))continue;for(var o=[],s=0;s<a.value.length;s++){var l=a.value[s],u=r.takeCurrentTextureSlot(n,l);o.push(u)}r.setUniform(n.gl,"1iv",i,o)}else r.setUniform(n.gl,a.type,i,a.value)}}return function(t,r,n){e(this._lightUniforms[r],t,n),e(this.shadowUniforms,t,n)}}(),dispose:function(){this.material=null,this._opaqueList=[],this._transparentList=[],this.lights=[],this._lightUniforms={},this._lightNumber={},this._nodeRepository={}}});function js(e,t){if(t.castShadow&&!e.castShadow)return!0}var xt=qs,ra=function(){function e(t){this.value=t}return e}(),Ys=function(){function e(){this._len=0}return e.prototype.insert=function(t){var r=new ra(t);return this.insertEntry(r),r},e.prototype.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++},e.prototype.remove=function(t){var r=t.prev,n=t.next;r?r.next=n:this.head=n,n?n.prev=r:this.tail=r,t.next=t.prev=null,this._len--},e.prototype.len=function(){return this._len},e.prototype.clear=function(){this.head=this.tail=null,this._len=0},e}(),Ks=function(){function e(t){this._list=new Ys,this._maxSize=10,this._map={},this._maxSize=t}return e.prototype.put=function(t,r){var n=this._list,i=this._map,a=null;if(i[t]==null){var o=n.len(),s=this._lastRemovedEntry;if(o>=this._maxSize&&o>0){var l=n.head;n.remove(l),delete i[l.key],a=l.value,this._lastRemovedEntry=l}s?s.value=r:s=new ra(r),s.key=t,n.insertEntry(s),i[t]=s}return a},e.prototype.get=function(t){var r=this._map[t],n=this._list;if(r!=null)return r!==n.tail&&(n.remove(r),n.insertEntry(r)),r.value},e.prototype.clear=function(){this._list.clear(),this._map={}},e.prototype.len=function(){return this._list.len()},e}(),na=Ks,Gr=Xi.isPowerOfTwo,Zs=["px","nx","py","ny","pz","nz"],Fn=W.extend(function(){return{image:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},pixels:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},mipmaps:[]}},{textureType:"textureCube",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,n=this.type;t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,this.getAvailableMinFilter());var i=e.getGLExtension("EXT_texture_filter_anisotropic");if(i&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),n===36193){var a=e.getGLExtension("OES_texture_half_float");a||(n=A.FLOAT)}if(this.mipmaps.length)for(var o=this.width,s=this.height,l=0;l<this.mipmaps.length;l++){var u=this.mipmaps[l];this._updateTextureData(t,u,l,o,s,r,n),o/=2,s/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,n),!this.NPOT&&this.useMipmap&&t.generateMipmap(t.TEXTURE_CUBE_MAP);t.bindTexture(t.TEXTURE_CUBE_MAP,null)},_updateTextureData:function(e,t,r,n,i,a,o){for(var s=0;s<6;s++){var l=Zs[s],u=t.image&&t.image[l];u?e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,a,o,u):e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,n,i,0,a,o,t.pixels&&t.pixels[l])}},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_CUBE_MAP))},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,null)},isPowerOfTwo:function(){return this.image.px?Gr(this.image.px.width)&&Gr(this.image.px.height):Gr(this.width)&&Gr(this.height)},isRenderable:function(){return this.image.px?Yt(this.image.px)&&Yt(this.image.nx)&&Yt(this.image.py)&&Yt(this.image.ny)&&Yt(this.image.pz)&&Yt(this.image.nz):!!(this.width&&this.height)},load:function(e,t){var r=0,n=this;return Ae.each(e,function(i,a){var o=pe.createImage();t&&(o.crossOrigin=t),o.onload=function(){r--,r===0&&(n.dirty(),n.trigger("success",n))},o.onerror=function(){r--},r++,o.src=i,n.image[a]=o}),this}});Object.defineProperty(Fn.prototype,"width",{get:function(){return this.image&&this.image.px?this.image.px.width:this._width},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(Fn.prototype,"height",{get:function(){return this.image&&this.image.px?this.image.px.height:this._height},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});function Yt(e){return e.width>0&&e.height>0}var ur=Fn,$s=jt.extend({fov:50,aspect:1,near:.1,far:2e3},{updateProjectionMatrix:function(){var e=this.fov/180*Math.PI;this.projectionMatrix.perspective(e,this.aspect,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array,t=Math.atan(1/e[5])*2;this.fov=t/Math.PI*180,this.aspect=e[5]/e[0],this.near=e[14]/(e[10]-1),this.far=e[14]/(e[10]+1)},clone:function(){var e=jt.prototype.clone.call(this);return e.fov=this.fov,e.aspect=this.aspect,e.near=this.near,e.far=this.far,e}}),Ee=$s,Vr="framebuffer",ht="renderbuffer",ia=ht+"_width",aa=ht+"_height",Bn=ht+"_attached",Un="depthtexture_attached",Nt=A.FRAMEBUFFER,fr=A.RENDERBUFFER,cr=A.DEPTH_ATTACHMENT,oa=A.COLOR_ATTACHMENT0,hr=Be.extend({depthBuffer:!0,viewport:null,_width:0,_height:0,_textures:null,_boundRenderer:null},function(){this._cache=new Rn,this._textures={}},{getTextureWidth:function(){return this._width},getTextureHeight:function(){return this._height},bind:function(e){if(e.__currentFrameBuffer){if(e.__currentFrameBuffer===this)return;console.warn("Renderer already bound with another framebuffer. Unbind it first")}e.__currentFrameBuffer=this;var t=e.gl;t.bindFramebuffer(Nt,this._getFrameBufferGL(e)),this._boundRenderer=e;var r=this._cache;r.put("viewport",e.viewport);var n=!1,i,a;for(var o in this._textures){n=!0;var s=this._textures[o];s&&(i=s.texture.width,a=s.texture.height,this._doAttach(e,s.texture,o,s.target))}this._width=i,this._height=a,!n&&this.depthBuffer&&console.error("Must attach texture before bind, or renderbuffer may have incorrect width and height."),this.viewport?e.setViewport(this.viewport):e.setViewport(0,0,i,a,1);var l=r.get("attached_textures");if(l){for(var o in l)if(!this._textures[o]){var u=l[o];this._doDetach(t,o,u)}}if(!r.get(Un)&&this.depthBuffer){r.miss(ht)&&r.put(ht,t.createRenderbuffer());var f=r.get(ht);(i!==r.get(ia)||a!==r.get(aa))&&(t.bindRenderbuffer(fr,f),t.renderbufferStorage(fr,t.DEPTH_COMPONENT16,i,a),r.put(ia,i),r.put(aa,a),t.bindRenderbuffer(fr,null)),r.get(Bn)||(t.framebufferRenderbuffer(Nt,cr,fr,f),r.put(Bn,!0))}},unbind:function(e){e.__currentFrameBuffer=null;var t=e.gl;t.bindFramebuffer(Nt,null),this._boundRenderer=null,this._cache.use(e.__uid__);var r=this._cache.get("viewport");r&&e.setViewport(r),this.updateMipmap(e)},updateMipmap:function(e){var t=e.gl;for(var r in this._textures){var n=this._textures[r];if(n){var i=n.texture;if(!i.NPOT&&i.useMipmap&&i.minFilter===W.LINEAR_MIPMAP_LINEAR){var a=i.textureType==="textureCube"?A.TEXTURE_CUBE_MAP:A.TEXTURE_2D;t.bindTexture(a,i.getWebGLTexture(e)),t.generateMipmap(a),t.bindTexture(a,null)}}}},checkStatus:function(e){return e.checkFramebufferStatus(Nt)},_getFrameBufferGL:function(e){var t=this._cache;return t.use(e.__uid__),t.miss(Vr)&&t.put(Vr,e.gl.createFramebuffer()),t.get(Vr)},attach:function(e,t,r){if(!e.width)throw new Error("The texture attached to color buffer is not a valid.");t=t||oa,r=r||A.TEXTURE_2D;var n=this._boundRenderer,i=n&&n.gl,a;if(i){var o=this._cache;o.use(n.__uid__),a=o.get("attached_textures")}var s=this._textures[t];if(!(s&&s.target===r&&s.texture===e&&a&&a[t]!=null)){var l=!0;n&&(l=this._doAttach(n,e,t,r),this.viewport||n.setViewport(0,0,e.width,e.height,1)),l&&(this._textures[t]=this._textures[t]||{},this._textures[t].texture=e,this._textures[t].target=r)}},_doAttach:function(e,t,r,n){var i=e.gl,a=t.getWebGLTexture(e),o=this._cache.get("attached_textures");if(o&&o[r]){var s=o[r];if(s.texture===t&&s.target===n)return}r=+r;var l=!0;if(r===cr||r===A.DEPTH_STENCIL_ATTACHMENT){var u=e.getGLExtension("WEBGL_depth_texture");if(u||(console.error("Depth texture is not supported by the browser"),l=!1),t.format!==A.DEPTH_COMPONENT&&t.format!==A.DEPTH_STENCIL&&(console.error("The texture attached to depth buffer is not a valid."),l=!1),l){var f=this._cache.get(ht);f&&(i.framebufferRenderbuffer(Nt,cr,fr,null),i.deleteRenderbuffer(f),this._cache.put(ht,!1)),this._cache.put(Bn,!1),this._cache.put(Un,!0)}}return i.framebufferTexture2D(Nt,r,n,a,0),o||(o={},this._cache.put("attached_textures",o)),o[r]=o[r]||{},o[r].texture=t,o[r].target=n,l},_doDetach:function(e,t,r){e.framebufferTexture2D(Nt,t,r,null,0);var n=this._cache.get("attached_textures");n&&n[t]&&(n[t]=null),(t===cr||t===A.DEPTH_STENCIL_ATTACHMENT)&&this._cache.put(Un,!1)},detach:function(e,t){if(this._textures[e]=null,this._boundRenderer){var r=this._cache;r.use(this._boundRenderer.__uid__),this._doDetach(this._boundRenderer.gl,e,t)}},dispose:function(e){var t=e.gl,r=this._cache;r.use(e.__uid__);var n=r.get(ht);n&&t.deleteRenderbuffer(n);var i=r.get(Vr);i&&t.deleteFramebuffer(i),r.deleteContext(e.__uid__),this._textures={}}});hr.DEPTH_ATTACHMENT=cr;hr.COLOR_ATTACHMENT0=oa;hr.STENCIL_ATTACHMENT=A.STENCIL_ATTACHMENT;hr.DEPTH_STENCIL_ATTACHMENT=A.DEPTH_STENCIL_ATTACHMENT;var Re=hr,Qs=["px","nx","py","ny","pz","nz"],Js=Be.extend(function(){var e={position:new C,far:1e3,near:.1,texture:null,shadowMapPass:null},t=e._cameras={px:new Ee({fov:90}),nx:new Ee({fov:90}),py:new Ee({fov:90}),ny:new Ee({fov:90}),pz:new Ee({fov:90}),nz:new Ee({fov:90})};return t.px.lookAt(C.POSITIVE_X,C.NEGATIVE_Y),t.nx.lookAt(C.NEGATIVE_X,C.NEGATIVE_Y),t.py.lookAt(C.POSITIVE_Y,C.POSITIVE_Z),t.ny.lookAt(C.NEGATIVE_Y,C.NEGATIVE_Z),t.pz.lookAt(C.POSITIVE_Z,C.NEGATIVE_Y),t.nz.lookAt(C.NEGATIVE_Z,C.NEGATIVE_Y),e._frameBuffer=new Re,e},{getCamera:function(e){return this._cameras[e]},render:function(e,t,r){var n=e.gl;r||t.update();for(var i=this.texture.width,a=2*Math.atan(i/(i-.5))/Math.PI*180,o=0;o<6;o++){var s=Qs[o],l=this._cameras[s];if(C.copy(l.position,this.position),l.far=this.far,l.near=this.near,l.fov=a,this.shadowMapPass){l.update();var u=t.getBoundingBox();u.applyTransform(l.viewMatrix),t.viewBoundingBoxLastFrame.copy(u),this.shadowMapPass.render(e,t,l,!0)}this._frameBuffer.attach(this.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+o),this._frameBuffer.bind(e),e.render(t,l,!0),this._frameBuffer.unbind(e)}},dispose:function(e){this._frameBuffer.dispose(e)}}),Hn=Js,el=We.extend({dynamic:!1,widthSegments:1,heightSegments:1},function(){this.build()},{build:function(){for(var e=this.heightSegments,t=this.widthSegments,r=this.attributes,n=[],i=[],a=[],o=[],s=0;s<=e;s++)for(var l=s/e,u=0;u<=t;u++){var f=u/t;if(n.push([2*f-1,2*l-1,0]),i&&i.push([f,l]),a&&a.push([0,0,1]),u<t&&s<e){var c=u+s*(t+1);o.push([c,c+1,c+t+1]),o.push([c+t+1,c+1,c+t+2])}}r.position.fromArray(n),r.texcoord0.fromArray(i),r.normal.fromArray(a),this.initIndicesFromArray(o),this.boundingBox=new Me,this.boundingBox.min.set(-1,-1,0),this.boundingBox.max.set(1,1,0)}}),zn=el,he=new O,tl=We.extend({dynamic:!1,widthSegments:1,heightSegments:1,depthSegments:1,inside:!1},function(){this.build()},{build:function(){var e={px:Kt("px",this.depthSegments,this.heightSegments),nx:Kt("nx",this.depthSegments,this.heightSegments),py:Kt("py",this.widthSegments,this.depthSegments),ny:Kt("ny",this.widthSegments,this.depthSegments),pz:Kt("pz",this.widthSegments,this.heightSegments),nz:Kt("nz",this.widthSegments,this.heightSegments)},t=["position","texcoord0","normal"],r=0,n=0;for(var i in e)r+=e[i].vertexCount,n+=e[i].indices.length;for(var a=0;a<t.length;a++)this.attributes[t[a]].init(r);this.indices=new pe.Uint16Array(n);var o=0,s=0;for(var i in e){for(var l=e[i],a=0;a<t.length;a++)for(var u=t[a],f=l.attributes[u].value,c=l.attributes[u].size,d=u==="normal",h=0;h<f.length;h++){var v=f[h];this.inside&&d&&(v=-v),this.attributes[u].value[h+c*s]=v}for(var p=l.indices.length,h=0;h<l.indices.length;h++)this.indices[h+o]=s+l.indices[this.inside?p-h-1:h];o+=l.indices.length,s+=l.vertexCount}this.boundingBox=new Me,this.boundingBox.max.set(1,1,1),this.boundingBox.min.set(-1,-1,-1)}});function Kt(e,t,r){he.identity();var n=new zn({widthSegments:t,heightSegments:r});switch(e){case"px":O.translate(he,he,C.POSITIVE_X),O.rotateY(he,he,Math.PI/2);break;case"nx":O.translate(he,he,C.NEGATIVE_X),O.rotateY(he,he,-Math.PI/2);break;case"py":O.translate(he,he,C.POSITIVE_Y),O.rotateX(he,he,-Math.PI/2);break;case"ny":O.translate(he,he,C.NEGATIVE_Y),O.rotateX(he,he,Math.PI/2);break;case"pz":O.translate(he,he,C.POSITIVE_Z);break;case"nz":O.translate(he,he,C.NEGATIVE_Z),O.rotateY(he,he,Math.PI);break}return n.applyTransform(he),n}var sa=tl,rl=`@export clay.skybox.vertex
#define SHADER_NAME skybox
uniform mat4 world : WORLD;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
varying vec3 v_WorldPosition;
void main()
{
 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end
@export clay.skybox.fragment
#define PI 3.1415926
uniform mat4 viewInverse : VIEWINVERSE;
#ifdef EQUIRECTANGULAR
uniform sampler2D environmentMap;
#else
uniform samplerCube environmentMap;
#endif
uniform float lod: 0.0;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
@import clay.util.srgb
@import clay.util.ACES
void main()
{
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
#ifdef EQUIRECTANGULAR
 float phi = acos(V.y);
 float theta = atan(-V.x, V.z) + PI * 0.5;
 vec2 uv = vec2(theta / 2.0 / PI, phi / PI);
 vec4 texel = decodeHDR(texture2D(environmentMap, fract(uv)));
#else
 #if defined(LOD) || defined(SUPPORT_TEXTURE_LOD)
 vec4 texel = decodeHDR(textureCubeLodEXT(environmentMap, V, lod));
 #else
 vec4 texel = decodeHDR(textureCube(environmentMap, V));
 #endif
#endif
#ifdef SRGB_DECODE
 texel = sRGBToLinear(texel);
#endif
#ifdef TONEMAPPING
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
#ifdef SRGB_ENCODE
 texel = linearTosRGB(texel);
#endif
 gl_FragColor = encodeHDR(vec4(texel.rgb, 1.0));
}
@end`;b.import(rl);var nl=Ln.extend(function(){var e=new b({vertex:b.source("clay.skybox.vertex"),fragment:b.source("clay.skybox.fragment")}),t=new ut({shader:e,depthMask:!1});return{scene:null,geometry:new sa,material:t,environmentMap:null,culling:!1,_dummyCamera:new Ee}},function(){var e=this.scene;e&&this.attachScene(e),this.environmentMap&&this.setEnvironmentMap(this.environmentMap)},{attachScene:function(e){this.scene&&this.detachScene(),e.skybox=this,this.scene=e,e.on("beforerender",this._beforeRenderScene,this)},detachScene:function(){this.scene&&(this.scene.off("beforerender",this._beforeRenderScene),this.scene.skybox=null),this.scene=null},dispose:function(e){this.detachScene(),this.geometry.dispose(e)},setEnvironmentMap:function(e){e.textureType==="texture2D"?(this.material.define("EQUIRECTANGULAR"),e.minFilter=W.LINEAR):this.material.undefine("EQUIRECTANGULAR"),this.material.set("environmentMap",e)},getEnvironmentMap:function(){return this.material.get("environmentMap")},_beforeRenderScene:function(e,t,r){this.renderSkybox(e,r)},renderSkybox:function(e,t){var r=this._dummyCamera;r.aspect=e.getViewportAspect(),r.fov=t.fov||50,r.updateProjectionMatrix(),O.invert(r.invProjectionMatrix,r.projectionMatrix),r.worldTransform.copy(t.worldTransform),r.viewMatrix.copy(t.viewMatrix),this.position.copy(t.getWorldPosition()),this.update(),e.gl.disable(e.gl.BLEND),this.material.get("lod")>0?this.material.define("fragment","LOD"):this.material.undefine("fragment","LOD"),e.renderPass([this],r)}}),dr=nl,il=542327876,al=131072,ol=512,sl=4;function Gn(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}var ll=31,ul=Gn("DXT1"),fl=Gn("DXT3"),cl=Gn("DXT5"),hl=0,dl=1,vl=2,pl=3,ml=4,_l=7,gl=20,yl=21,xl=28,Tl={parse:function(e,t){var r=new Int32Array(e,0,ll);if(r[hl]!==il||!r(gl)&sl)return null;var n=r(yl),i=r[ml],a=r[pl],o=r[xl]&ol,s=r[vl]&al,l,u;switch(n){case ul:l=8,u=W.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case fl:l=16,u=W.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case cl:l=16,u=W.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}var f=r[dl]+4,c=o?6:1,d=1;s&&(d=Math.max(1,r[_l]));for(var h=[],v=0;v<c;v++){var p=i,m=a;h[v]=new re({width:p,height:m,format:u});for(var _=[],x=0;x<d;x++){var T=Math.max(4,p)/4*Math.max(4,m)/4*l,y=new Uint8Array(e,f,T);f+=T,p*=.5,m*=.5,_[x]=y}h[v].pixels=_[0],s&&(h[v].mipmaps=_)}if(t)t.width=h[0].width,t.height=h[0].height,t.format=h[0].format,t.pixels=h[0].pixels,t.mipmaps=h[0].mipmaps;else return h[0]}},El=Tl,kr=String.fromCharCode,Al=8,Sl=32767;function wl(e,t,r,n){if(e[3]>0){var i=Math.pow(2,e[3]-128-8+n);t[r+0]=e[0]*i,t[r+1]=e[1]*i,t[r+2]=e[2]*i}else t[r+0]=0,t[r+1]=0,t[r+2]=0;return t[r+3]=1,t}function bl(e,t,r){for(var n="",i=t;i<r;i++)n+=kr(e[i]);return n}function Cl(e,t){t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3]}function la(e,t,r,n){for(var i=0,a=0,o=n;o>0;)if(e[a][0]=t[r++],e[a][1]=t[r++],e[a][2]=t[r++],e[a][3]=t[r++],e[a][0]===1&&e[a][1]===1&&e[a][2]===1){for(var s=e[a][3]<<i>>>0;s>0;s--)Cl(e[a-1],e[a]),a++,o--;i+=8}else a++,o--,i=0;return r}function Rl(e,t,r,n){if(n<Al|n>Sl)return la(e,t,r,n);var i=t[r++];if(i!=2)return la(e,t,r-1,n);if(e[0][1]=t[r++],e[0][2]=t[r++],i=t[r++],(e[0][2]<<8>>>0|i)>>>0!==n)return null;for(var i=0;i<4;i++)for(var a=0;a<n;){var o=t[r++];if(o>128){o=(o&127)>>>0;for(var s=t[r++];o--;)e[a++][i]=s}else for(;o--;)e[a++][i]=t[r++]}return r}var Ll={parseRGBE:function(e,t,r){r==null&&(r=0);var n=new Uint8Array(e),i=n.length;if(bl(n,0,2)==="#?"){for(var a=2;a<i&&!(kr(n[a])===`
`&&kr(n[a+1])===`
`);a++);if(!(a>=i)){a+=2;for(var o="";a<i;a++){var s=kr(n[a]);if(s===`
`)break;o+=s}var l=o.split(" "),u=parseInt(l[1]),f=parseInt(l[3]);if(!(!f||!u)){for(var c=a+1,d=[],h=0;h<f;h++){d[h]=[];for(var v=0;v<4;v++)d[h][v]=0}for(var p=new Float32Array(f*u*4),m=0,_=0;_<u;_++){var c=Rl(d,n,c,f);if(!c)return null;for(var h=0;h<f;h++)wl(d[h],p,m,r),m+=4}return t||(t=new re),t.width=f,t.height=u,t.pixels=p,t.type=W.FLOAT,t}}}},parseRGBEFromPNG:function(e){}},Nl=Ll,Wr={loadTexture:function(e,t,r,n){var i;if(typeof t=="function"?(r=t,n=r,t={}):t=t||{},typeof e=="string"){if(e.match(/.hdr$/)||t.fileType==="hdr")return i=new re({width:0,height:0,sRGB:!1}),Wr._fetchTexture(e,function(a){Nl.parseRGBE(a,i,t.exposure),i.dirty(),r&&r(i)},n),i;e.match(/.dds$/)||t.fileType==="dds"?(i=new re({width:0,height:0}),Wr._fetchTexture(e,function(a){El.parse(a,i),i.dirty(),r&&r(i)},n)):(i=new re,i.load(e),i.success(r),i.error(n))}else typeof e=="object"&&typeof e.px!="undefined"&&(i=new ur,i.load(e),i.success(r),i.error(n));return i},loadPanorama:function(e,t,r,n,i,a){var o=this;typeof n=="function"?(i=n,a=i,n={}):n=n||{},Wr.loadTexture(t,n,function(s){s.flipY=n.flipY||!1,o.panoramaToCubeMap(e,s,r,n),s.dispose(e),i&&i(r)},a)},panoramaToCubeMap:function(e,t,r,n){var i=new Hn,a=new dr({scene:new xt});return a.setEnvironmentMap(t),n=n||{},n.encodeRGBM&&a.material.define("fragment","RGBM_ENCODE"),r.sRGB=t.sRGB,i.texture=r,i.render(e,a.scene),i.texture=null,i.dispose(e),r},heightToNormal:function(e,t){var r=document.createElement("canvas"),n=r.width=e.width,i=r.height=e.height,a=r.getContext("2d");a.drawImage(e,0,0,n,i),t=t||!1;for(var o=a.getImageData(0,0,n,i),s=a.createImageData(n,i),l=0;l<o.data.length;l+=4){if(t){var u=o.data[l],f=o.data[l+1],c=o.data[l+2],d=Math.abs(u-f)+Math.abs(f-c);if(d>20)return console.warn("Given image is not a height map"),e}var h,v,p,m;l%(n*4)==0?(h=o.data[l],p=o.data[l+4]):l%(n*4)==(n-1)*4?(h=o.data[l-4],p=o.data[l]):(h=o.data[l-4],p=o.data[l+4]),l<n*4?(v=o.data[l],m=o.data[l+n*4]):l>n*(i-1)*4?(v=o.data[l-n*4],m=o.data[l]):(v=o.data[l-n*4],m=o.data[l+n*4]),s.data[l]=h-p+127,s.data[l+1]=v-m+127,s.data[l+2]=255,s.data[l+3]=255}return a.putImageData(s,0,0),r},isHeightImage:function(e,t,r){if(!e||!e.width||!e.height)return!1;var n=document.createElement("canvas"),i=n.getContext("2d"),a=t||32;r=r||20,n.width=n.height=a,i.drawImage(e,0,0,a,a);for(var o=i.getImageData(0,0,a,a),s=0;s<o.data.length;s+=4){var l=o.data[s],u=o.data[s+1],f=o.data[s+2],c=Math.abs(l-u)+Math.abs(u-f);if(c>r)return!1}return!0},_fetchTexture:function(e,t,r){pe.request.get({url:e,responseType:"arraybuffer",onload:t,onerror:r})},createChessboard:function(e,t,r,n){e=e||512,t=t||64,r=r||"black",n=n||"white";var i=Math.ceil(e/t),a=document.createElement("canvas");a.width=e,a.height=e;var o=a.getContext("2d");o.fillStyle=n,o.fillRect(0,0,e,e),o.fillStyle=r;for(var s=0;s<i;s++)for(var l=0;l<i;l++){var u=l%2?s%2:s%2-1;u&&o.fillRect(s*t,l*t,t,t)}var f=new re({image:a,anisotropic:8});return f},createBlank:function(e){var t=document.createElement("canvas");t.width=1,t.height=1;var r=t.getContext("2d");r.fillStyle=e,r.fillRect(0,0,1,1);var n=new re({image:t});return n}},Mt=Wr,Vn=["mousedown","mouseup","mousemove","mouseover","mouseout","click","dblclick","contextmenu"];function kn(e){return"_on"+e}var Wn=function(e){var t=this;this._texture=new re({anisotropic:32,flipY:!1,surface:this,dispose:function(r){t.dispose(),re.prototype.dispose.call(this,r)}}),Vn.forEach(function(r){this[kn(r)]=function(n){!n.triangle||this._meshes.forEach(function(i){this.dispatchEvent(r,i,n.triangle,n.point)},this)}},this),this._meshes=[],e&&this.setECharts(e),this.onupdate=null};Wn.prototype={constructor:Wn,getTexture:function(){return this._texture},setECharts:function(e){this._chart=e;var t=e.getDom();if(!(t instanceof HTMLCanvasElement))console.error("ECharts must init on canvas if it is used as texture."),t=document.createElement("canvas");else{var r=this,n=e.getZr(),i=n.__oldRefreshImmediately||n.refreshImmediately;n.refreshImmediately=function(){i.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},n.__oldRefreshImmediately=i}this._texture.image=t,this._texture.dirty(),this.onupdate&&this.onupdate()},dispatchEvent:function(){var e=new C,t=new C,r=new C,n=new Ge,i=new Ge,a=new Ge,o=new Ge,s=new C;return function(l,u,f,c){var d=u.geometry,h=d.attributes.position,v=d.attributes.texcoord0,p=C.dot,m=C.cross;h.get(f[0],e.array),h.get(f[1],t.array),h.get(f[2],r.array),v.get(f[0],n.array),v.get(f[1],i.array),v.get(f[2],a.array),m(s,t,r);var _=p(e,s),x=p(c,s)/_;m(s,r,e);var T=p(c,s)/_;m(s,e,t);var y=p(c,s)/_;Ge.scale(o,n,x),Ge.scaleAndAdd(o,o,i,T),Ge.scaleAndAdd(o,o,a,y);var E=o.x*this._chart.getWidth(),S=o.y*this._chart.getHeight();this._chart.getZr().handler.dispatch(l,{zrX:E,zrY:S})}}(),attachToMesh:function(e){this._meshes.indexOf(e)>=0||(Vn.forEach(function(t){e.on(t,this[kn(t)],this)},this),this._meshes.push(e))},detachFromMesh:function(e){var t=this._meshes.indexOf(e);t>=0&&this._meshes.splice(t,1),Vn.forEach(function(r){e.off(r,this[kn(r)])},this)},dispose:function(){this._meshes.forEach(function(e){this.detachFromMesh(e)},this)}};var Ml=Wn,Dl=jt.extend({left:-1,right:1,near:-1,far:1,top:1,bottom:-1},{updateProjectionMatrix:function(){this.projectionMatrix.ortho(this.left,this.right,this.bottom,this.top,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array;this.left=(-1-e[12])/e[0],this.right=(1-e[12])/e[0],this.top=(1-e[13])/e[5],this.bottom=(-1-e[13])/e[5],this.near=-(-1-e[14])/e[10],this.far=-(1-e[14])/e[10]},clone:function(){var e=jt.prototype.clone.call(this);return e.left=this.left,e.right=this.right,e.near=this.near,e.far=this.far,e.top=this.top,e.bottom=this.bottom,e}}),vr=Dl,Pl=`
@export clay.compositor.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
varying vec2 v_Texcoord;
void main()
{
 v_Texcoord = texcoord;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end`;b.import(Pl);var Il=new zn,ua=new Ln({geometry:Il,frustumCulling:!1}),Ol=new vr,Fl=Be.extend(function(){return{fragment:"",outputs:null,material:null,blendWithPrevious:!1,clearColor:!1,clearDepth:!0}},function(){var e=new b(b.source("clay.compositor.vertex"),this.fragment),t=new ut({shader:e});t.enableTexturesAll(),this.material=t},{setUniform:function(e,t){this.material.setUniform(e,t)},getUniform:function(e){var t=this.material.uniforms[e];if(t)return t.value},attachOutput:function(e,t){this.outputs||(this.outputs={}),t=t||A.COLOR_ATTACHMENT0,this.outputs[t]=e},detachOutput:function(e){for(var t in this.outputs)this.outputs[t]===e&&(this.outputs[t]=null)},bind:function(e,t){if(this.outputs)for(var r in this.outputs){var n=this.outputs[r];n&&t.attach(n,r)}t&&t.bind(e)},unbind:function(e,t){t.unbind(e)},render:function(e,t){var r=e.gl;if(t){this.bind(e,t);var n=e.getGLExtension("EXT_draw_buffers");if(n&&this.outputs){var i=[];for(var a in this.outputs)a=+a,a>=r.COLOR_ATTACHMENT0&&a<=r.COLOR_ATTACHMENT0+8&&i.push(a);n.drawBuffersEXT(i)}}this.trigger("beforerender",this,e);var o=this.clearDepth?r.DEPTH_BUFFER_BIT:0;if(r.depthMask(!0),this.clearColor){o=o|r.COLOR_BUFFER_BIT,r.colorMask(!0,!0,!0,!0);var s=this.clearColor;Array.isArray(s)&&r.clearColor(s[0],s[1],s[2],s[3])}r.clear(o),this.blendWithPrevious?(r.enable(r.BLEND),this.material.transparent=!0):(r.disable(r.BLEND),this.material.transparent=!1),this.renderQuad(e),this.trigger("afterrender",this,e),t&&this.unbind(e,t)},renderQuad:function(e){ua.material=this.material,e.renderPass([ua],Ol)},dispose:function(e){}}),Pe=Fl,Bl=`#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform sampler2D normalDistribution;
uniform vec2 viewportSize : [512, 256];
const vec3 N = vec3(0.0, 0.0, 1.0);
const float fSampleNumber = float(SAMPLE_NUMBER);
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
float G_Smith(float roughness, float NoV, float NoL) {
 float k = roughness * roughness / 2.0;
 float G1V = NoV / (NoV * (1.0 - k) + k);
 float G1L = NoL / (NoL * (1.0 - k) + k);
 return G1L * G1V;
}
void main() {
 vec2 uv = gl_FragCoord.xy / viewportSize;
 float NoV = uv.x;
 float roughness = uv.y;
 vec3 V;
 V.x = sqrt(1.0 - NoV * NoV);
 V.y = 0.0;
 V.z = NoV;
 float A = 0.0;
 float B = 0.0;
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(L.z, 0.0, 1.0);
 float NoH = clamp(H.z, 0.0, 1.0);
 float VoH = clamp(dot(V, H), 0.0, 1.0);
 if (NoL > 0.0) {
 float G = G_Smith(roughness, NoV, NoL);
 float G_Vis = G * VoH / (NoH * NoV);
 float Fc = pow(1.0 - VoH, 5.0);
 A += (1.0 - Fc) * G_Vis;
 B += Fc * G_Vis;
 }
 }
 gl_FragColor = vec4(vec2(A, B) / fSampleNumber, 0.0, 1.0);
}
`,Ul=`#define SHADER_NAME prefilter
#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform mat4 viewInverse : VIEWINVERSE;
uniform samplerCube environmentMap;
uniform sampler2D normalDistribution;
uniform float roughness : 0.5;
varying vec2 v_Texcoord;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
void main() {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
 vec3 N = V;
 vec3 prefilteredColor = vec3(0.0);
 float totalWeight = 0.0;
 float fMaxSampleNumber = float(SAMPLE_NUMBER);
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fMaxSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(dot(N, L), 0.0, 1.0);
 if (NoL > 0.0) {
 prefilteredColor += decodeHDR(textureCube(environmentMap, L)).rgb * NoL;
 totalWeight += NoL;
 }
 }
 gl_FragColor = encodeHDR(vec4(prefilteredColor / totalWeight, 1.0));
}
`,Dt={},Xn=["px","nx","py","ny","pz","nz"];Dt.prefilterEnvironmentMap=function(e,t,r,n,i){(!i||!n)&&(n=Dt.generateNormalDistribution(),i=Dt.integrateBRDF(e,n)),r=r||{};var a=r.width||64,o=r.height||64,s=r.type||t.type,l=new ur({width:a,height:o,type:s,flipY:!1,mipmaps:[]});l.isPowerOfTwo()||console.warn("Width and height must be power of two to enable mipmap.");var u=Math.min(a,o),f=Math.log(u)/Math.log(2)+1,c=new ut({shader:new b({vertex:b.source("clay.skybox.vertex"),fragment:Ul})});c.set("normalDistribution",n),r.encodeRGBM&&c.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&c.define("fragment","RGBM_DECODE");var d=new xt,h;if(t.textureType==="texture2D"){var v=new ur({width:a,height:o,type:s===W.FLOAT?W.HALF_FLOAT:s});Mt.panoramaToCubeMap(e,t,v,{encodeRGBM:r.decodeRGBM}),t=v}h=new dr({scene:d,material:c}),h.material.set("environmentMap",t);var p=new Hn({texture:l});r.encodeRGBM&&(s=l.type=W.UNSIGNED_BYTE);for(var m=new re({width:a,height:o,type:s}),_=new Re({depthBuffer:!1}),x=pe[s===W.UNSIGNED_BYTE?"Uint8Array":"Float32Array"],T=0;T<f;T++){l.mipmaps[T]={pixels:{}},h.material.set("roughness",T/(f-1));for(var y=m.width,E=2*Math.atan(y/(y-.5))/Math.PI*180,S=0;S<Xn.length;S++){var L=new x(m.width*m.height*4);_.attach(m),_.bind(e);var R=p.getCamera(Xn[S]);R.fov=E,e.render(d,R),e.gl.readPixels(0,0,m.width,m.height,W.RGBA,s,L),_.unbind(e),l.mipmaps[T].pixels[Xn[S]]=L}m.width/=2,m.height/=2,m.dirty()}return _.dispose(e),m.dispose(e),h.dispose(e),n.dispose(e),{environmentMap:l,brdfLookup:i,normalDistribution:n,maxMipmapLevel:f}};Dt.integrateBRDF=function(e,t){t=t||Dt.generateNormalDistribution();var r=new Re({depthBuffer:!1}),n=new Pe({fragment:Bl}),i=new re({width:512,height:256,type:W.HALF_FLOAT,wrapS:W.CLAMP_TO_EDGE,wrapT:W.CLAMP_TO_EDGE,minFilter:W.NEAREST,magFilter:W.NEAREST,useMipmap:!1});return n.setUniform("normalDistribution",t),n.setUniform("viewportSize",[512,256]),n.attachOutput(i),n.render(e,r),r.dispose(e),i};Dt.generateNormalDistribution=function(e,t){for(var e=e||256,t=t||1024,r=new re({width:e,height:t,type:W.FLOAT,minFilter:W.NEAREST,magFilter:W.NEAREST,wrapS:W.CLAMP_TO_EDGE,wrapT:W.CLAMP_TO_EDGE,useMipmap:!1}),n=new Float32Array(t*e*4),i=[],a=0;a<e;a++){for(var o=a/e,s=o*o,l=0;l<t;l++){var u=(l<<16|l>>>16)>>>0;u=((u&1431655765)<<1|(u&2863311530)>>>1)>>>0,u=((u&858993459)<<2|(u&3435973836)>>>2)>>>0,u=((u&252645135)<<4|(u&4042322160)>>>4)>>>0,u=(((u&16711935)<<8|(u&4278255360)>>>8)>>>0)/4294967296;var f=Math.sqrt((1-u)/(1+(s*s-1)*u));i[l]=f}for(var l=0;l<t;l++){var c=(l*e+a)*4,f=i[l],d=Math.sqrt(1-f*f),h=l/t,v=2*Math.PI*h;n[c]=d*Math.cos(v),n[c+1]=f,n[c+2]=d*Math.sin(v),n[c+3]=1}}return r.pixels=n,r};var Xr=Dt,Hl=nt.extend({cubemap:null,castShadow:!1,_normalDistribution:null,_brdfLookup:null},{type:"AMBIENT_CUBEMAP_LIGHT",prefilter:function(e,t){if(!e.getGLExtension("EXT_shader_texture_lod")){console.warn("Device not support textureCubeLodEXT");return}this._brdfLookup||(this._normalDistribution=Xr.generateNormalDistribution(),this._brdfLookup=Xr.integrateBRDF(e,this._normalDistribution));var r=this.cubemap;if(!r.__prefiltered){var n=Xr.prefilterEnvironmentMap(e,r,{encodeRGBM:!0,width:t,height:t},this._normalDistribution,this._brdfLookup);this.cubemap=n.environmentMap,this.cubemap.__prefiltered=!0,r.dispose(e)}},getBRDFLookup:function(){return this._brdfLookup},uniformTemplates:{ambientCubemapLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientCubemapLightCubemap:{type:"t",value:function(e){return e.cubemap}},ambientCubemapLightBRDFLookup:{type:"t",value:function(e){return e._brdfLookup}}}}),zl=Hl,Gl=nt.extend({castShadow:!1,coefficients:[]},function(){this._coefficientsTmpArr=new pe.Float32Array(9*3)},{type:"AMBIENT_SH_LIGHT",uniformTemplates:{ambientSHLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientSHLightCoefficients:{type:"3f",value:function(e){for(var t=e._coefficientsTmpArr,r=0;r<e.coefficients.length;r++)t[r]=e.coefficients[r];return t}}}}),Vl=Gl,fa={},Pt=["px","nx","py","ny","pz","nz"];function kl(e,t){var r=e[0],n=e[1],i=e[2];return t===0?1:t===1?r:t===2?n:t===3?i:t===4?r*i:t===5?n*i:t===6?r*n:t===7?3*i*i-1:r*r-n*n}var Wl={px:[2,1,0,-1,-1,1],nx:[2,1,0,1,-1,-1],py:[0,2,1,1,-1,-1],ny:[0,2,1,1,1,1],pz:[0,1,2,-1,-1,-1],nz:[0,1,2,1,-1,1]};function Xl(e,t,r,n){for(var i=new pe.Float32Array(9*3),a=g.create(),o=g.create(),s=g.create(),l=0;l<9;l++){for(var u=g.create(),f=0;f<Pt.length;f++){for(var c=t[Pt[f]],d=g.create(),h=0,v=0,p=Wl[Pt[f]],m=0;m<n;m++)for(var _=0;_<r;_++){a[0]=_/(r-1)*2-1,a[1]=m/(n-1)*2-1,a[2]=-1,g.normalize(a,a),s[0]=a[p[0]]*p[3],s[1]=a[p[1]]*p[4],s[2]=a[p[2]]*p[5],o[0]=c[v++]/255,o[1]=c[v++]/255,o[2]=c[v++]/255;var x=c[v++]/255*8.12;o[0]*=x,o[1]*=x,o[2]*=x,g.scaleAndAdd(d,d,o,kl(s,l)*-a[2]),h+=-a[2]}g.scaleAndAdd(u,u,d,1/h)}i[l*3]=u[0]/6,i[l*3+1]=u[1]/6,i[l*3+2]=u[2]/6}return i}fa.projectEnvironmentMap=function(e,t,r){r=r||{},r.lod=r.lod||0;var n,i=new xt,a=64;t.textureType==="texture2D"?n=new dr({scene:i,environmentMap:t}):(a=t.image&&t.image.px?t.image.px.width:t.width,n=new dr({scene:i,environmentMap:t}));var o=Math.ceil(a/Math.pow(2,r.lod)),s=Math.ceil(a/Math.pow(2,r.lod)),l=new re({width:o,height:s}),u=new Re;n.material.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&n.material.define("fragment","RGBM_DECODE"),n.material.set("lod",r.lod);for(var f=new Hn({texture:l}),c={},d=0;d<Pt.length;d++){c[Pt[d]]=new Uint8Array(o*s*4);var h=f.getCamera(Pt[d]);h.fov=90,u.attach(l),u.bind(e),e.render(i,h),e.gl.readPixels(0,0,o,s,W.RGBA,W.UNSIGNED_BYTE,c[Pt[d]]),u.unbind(e)}return n.dispose(e),u.dispose(e),l.dispose(e),Xl(e,c,o,s)};var ql=fa,jl={firstNotNull:function(){for(var e=0,t=arguments.length;e<t;e++)if(arguments[e]!=null)return arguments[e]},queryDataIndex:function(e,t){if(t.dataIndexInside!=null)return t.dataIndexInside;if(t.dataIndex!=null)return ci(t.dataIndex)?hi(t.dataIndex,function(r){return e.indexOfRawIndex(r)}):e.indexOfRawIndex(t.dataIndex);if(t.name!=null)return ci(t.name)?hi(t.name,function(r){return e.indexOfName(r)}):e.indexOfName(t.name)}},it=jl,Yl=We.extend({dynamic:!1,widthSegments:40,heightSegments:20,phiStart:0,phiLength:Math.PI*2,thetaStart:0,thetaLength:Math.PI,radius:1},function(){this.build()},{build:function(){var e=this.heightSegments,t=this.widthSegments,r=this.attributes.position,n=this.attributes.texcoord0,i=this.attributes.normal,a=(t+1)*(e+1);r.init(a),n.init(a),i.init(a);var o=a>65535?Uint32Array:Uint16Array,s=this.indices=new o(t*e*6),l,u,f,c,d,h,v,p=this.radius,m=this.phiStart,_=this.phiLength,x=this.thetaStart,T=this.thetaLength,p=this.radius,y=[],E=[],S=0,L=1/p;for(v=0;v<=e;v++)for(h=0;h<=t;h++)c=h/t,d=v/e,l=-p*Math.cos(m+c*_)*Math.sin(x+d*T),u=p*Math.cos(x+d*T),f=p*Math.sin(m+c*_)*Math.sin(x+d*T),y[0]=l,y[1]=u,y[2]=f,E[0]=c,E[1]=d,r.set(S,y),n.set(S,E),y[0]*=L,y[1]*=L,y[2]*=L,i.set(S,y),S++;var R,N,X,D,V=t+1,B=0;for(v=0;v<e;v++)for(h=0;h<t;h++)N=v*V+h,R=v*V+h+1,D=(v+1)*V+h+1,X=(v+1)*V+h,s[B++]=R,s[B++]=N,s[B++]=D,s[B++]=N,s[B++]=X,s[B++]=D;this.boundingBox=new Me,this.boundingBox.max.set(p,p,p),this.boundingBox.min.set(-p,-p,-p)}}),Kl=Yl,Zl=nt.extend({castShadow:!1},{type:"AMBIENT_LIGHT",uniformTemplates:{ambientLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}}}),$l=Zl,Ql=nt.extend({shadowBias:.001,shadowSlopeScale:2,shadowCascade:1,cascadeSplitLogFactor:.2},{type:"DIRECTIONAL_LIGHT",uniformTemplates:{directionalLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new C,e.__dir.copy(e.worldTransform.z).normalize().negate().array}},directionalLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=nt.prototype.clone.call(this);return e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),Jl=Ql,eu=nt.extend({range:100,castShadow:!1},{type:"POINT_LIGHT",uniformTemplates:{pointLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},pointLightRange:{type:"1f",value:function(e){return e.range}},pointLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=nt.prototype.clone.call(this);return e.range=this.range,e}}),tu=eu,ru=nt.extend({range:20,umbraAngle:30,penumbraAngle:45,falloffFactor:2,shadowBias:.001,shadowSlopeScale:2},{type:"SPOT_LIGHT",uniformTemplates:{spotLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},spotLightRange:{type:"1f",value:function(e){return e.range}},spotLightUmbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.umbraAngle*Math.PI/180)}},spotLightPenumbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.penumbraAngle*Math.PI/180)}},spotLightFalloffFactor:{type:"1f",value:function(e){return e.falloffFactor}},spotLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new C,e.__dir.copy(e.worldTransform.z).negate().array}},spotLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=nt.prototype.clone.call(this);return e.range=this.range,e.umbraAngle=this.umbraAngle,e.penumbraAngle=this.penumbraAngle,e.falloffFactor=this.falloffFactor,e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),nu=ru,J=function(e,t,r,n){e=e||0,t=t||0,r=r||0,n=n||0,this.array=M.fromValues(e,t,r,n),this._dirty=!0};J.prototype={constructor:J,add:function(e){return M.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r,n){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=n,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new J(this.x,this.y,this.z,this.w)},copy:function(e){return M.copy(this.array,e.array),this._dirty=!0,this},dist:function(e){return M.dist(this.array,e.array)},distance:function(e){return M.distance(this.array,e.array)},div:function(e){return M.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return M.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return M.dot(this.array,e.array)},len:function(){return M.len(this.array)},length:function(){return M.length(this.array)},lerp:function(e,t,r){return M.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return M.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return M.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return M.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return M.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return M.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return M.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return M.random(this.array,e),this._dirty=!0,this},scale:function(e){return M.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return M.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return M.sqrDist(this.array,e.array)},squaredDistance:function(e){return M.squaredDistance(this.array,e.array)},sqrLen:function(){return M.sqrLen(this.array)},squaredLength:function(){return M.squaredLength(this.array)},sub:function(e){return M.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return M.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return M.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return M.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var pr=Object.defineProperty;if(pr){var qr=J.prototype;pr(qr,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),pr(qr,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),pr(qr,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),pr(qr,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}J.add=function(e,t,r){return M.add(e.array,t.array,r.array),e._dirty=!0,e};J.set=function(e,t,r,n,i){M.set(e.array,t,r,n,i),e._dirty=!0};J.copy=function(e,t){return M.copy(e.array,t.array),e._dirty=!0,e};J.dist=function(e,t){return M.distance(e.array,t.array)};J.distance=J.dist;J.div=function(e,t,r){return M.divide(e.array,t.array,r.array),e._dirty=!0,e};J.divide=J.div;J.dot=function(e,t){return M.dot(e.array,t.array)};J.len=function(e){return M.length(e.array)};J.lerp=function(e,t,r,n){return M.lerp(e.array,t.array,r.array,n),e._dirty=!0,e};J.min=function(e,t,r){return M.min(e.array,t.array,r.array),e._dirty=!0,e};J.max=function(e,t,r){return M.max(e.array,t.array,r.array),e._dirty=!0,e};J.mul=function(e,t,r){return M.multiply(e.array,t.array,r.array),e._dirty=!0,e};J.multiply=J.mul;J.negate=function(e,t){return M.negate(e.array,t.array),e._dirty=!0,e};J.normalize=function(e,t){return M.normalize(e.array,t.array),e._dirty=!0,e};J.random=function(e,t){return M.random(e.array,t),e._dirty=!0,e};J.scale=function(e,t,r){return M.scale(e.array,t.array,r),e._dirty=!0,e};J.scaleAndAdd=function(e,t,r,n){return M.scaleAndAdd(e.array,t.array,r.array,n),e._dirty=!0,e};J.sqrDist=function(e,t){return M.sqrDist(e.array,t.array)};J.squaredDistance=J.sqrDist;J.sqrLen=function(e){return M.sqrLen(e.array)};J.squaredLength=J.sqrLen;J.sub=function(e,t,r){return M.subtract(e.array,t.array,r.array),e._dirty=!0,e};J.subtract=J.sub;J.transformMat4=function(e,t,r){return M.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};J.transformQuat=function(e,t,r){return M.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};var iu=J,Le={};Le.create=function(){var e=new Se(4);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};Le.clone=function(e){var t=new Se(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};Le.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};Le.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};Le.transpose=function(e,t){if(e===t){var r=t[1];e[1]=t[2],e[2]=r}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e};Le.invert=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=r*a-i*n;return o?(o=1/o,e[0]=a*o,e[1]=-n*o,e[2]=-i*o,e[3]=r*o,e):null};Le.adjoint=function(e,t){var r=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=r,e};Le.determinant=function(e){return e[0]*e[3]-e[2]*e[1]};Le.multiply=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=r[0],l=r[1],u=r[2],f=r[3];return e[0]=n*s+a*l,e[1]=i*s+o*l,e[2]=n*u+a*f,e[3]=i*u+o*f,e};Le.mul=Le.multiply;Le.rotate=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=n*l+a*s,e[1]=i*l+o*s,e[2]=n*-s+a*l,e[3]=i*-s+o*l,e};Le.scale=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=r[0],l=r[1];return e[0]=n*s,e[1]=i*s,e[2]=a*l,e[3]=o*l,e};Le.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2))};Le.LDU=function(e,t,r,n){return e[2]=n[2]/n[0],r[0]=n[0],r[1]=n[1],r[3]=n[3]-e[2]*r[1],[e,t,r]};var de=Le,Ie=function(){this.array=de.create(),this._dirty=!0};Ie.prototype={constructor:Ie,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new Ie().copy(this)},copy:function(e){return de.copy(this.array,e.array),this._dirty=!0,this},adjoint:function(){return de.adjoint(this.array,this.array),this._dirty=!0,this},determinant:function(){return de.determinant(this.array)},identity:function(){return de.identity(this.array),this._dirty=!0,this},invert:function(){return de.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return de.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return de.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return de.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return de.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return de.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return de.scale(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return de.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Ie.adjoint=function(e,t){return de.adjoint(e.array,t.array),e._dirty=!0,e};Ie.copy=function(e,t){return de.copy(e.array,t.array),e._dirty=!0,e};Ie.determinant=function(e){return de.determinant(e.array)};Ie.identity=function(e){return de.identity(e.array),e._dirty=!0,e};Ie.invert=function(e,t){return de.invert(e.array,t.array),e._dirty=!0,e};Ie.mul=function(e,t,r){return de.mul(e.array,t.array,r.array),e._dirty=!0,e};Ie.multiply=Ie.mul;Ie.rotate=function(e,t,r){return de.rotate(e.array,t.array,r),e._dirty=!0,e};Ie.scale=function(e,t,r){return de.scale(e.array,t.array,r.array),e._dirty=!0,e};Ie.transpose=function(e,t){return de.transpose(e.array,t.array),e._dirty=!0,e};var au=Ie,Ue={};Ue.create=function(){var e=new Se(6);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};Ue.clone=function(e){var t=new Se(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t};Ue.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e};Ue.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};Ue.invert=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=r*a-n*i;return l?(l=1/l,e[0]=a*l,e[1]=-n*l,e[2]=-i*l,e[3]=r*l,e[4]=(i*s-a*o)*l,e[5]=(n*o-r*s)*l,e):null};Ue.determinant=function(e){return e[0]*e[3]-e[1]*e[2]};Ue.multiply=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],f=r[1],c=r[2],d=r[3],h=r[4],v=r[5];return e[0]=n*u+a*f,e[1]=i*u+o*f,e[2]=n*c+a*d,e[3]=i*c+o*d,e[4]=n*h+a*v+s,e[5]=i*h+o*v+l,e};Ue.mul=Ue.multiply;Ue.rotate=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=Math.sin(r),f=Math.cos(r);return e[0]=n*f+a*u,e[1]=i*f+o*u,e[2]=n*-u+a*f,e[3]=i*-u+o*f,e[4]=s,e[5]=l,e};Ue.scale=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],f=r[1];return e[0]=n*u,e[1]=i*u,e[2]=a*f,e[3]=o*f,e[4]=s,e[5]=l,e};Ue.translate=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],f=r[1];return e[0]=n,e[1]=i,e[2]=a,e[3]=o,e[4]=n*u+a*f+s,e[5]=i*u+o*f+l,e};Ue.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+1)};var me=Ue,He=function(){this.array=me.create(),this._dirty=!0};He.prototype={constructor:He,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new He().copy(this)},copy:function(e){return me.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return me.determinant(this.array)},identity:function(){return me.identity(this.array),this._dirty=!0,this},invert:function(){return me.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return me.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return me.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return me.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return me.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return me.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return me.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return me.translate(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};He.copy=function(e,t){return me.copy(e.array,t.array),e._dirty=!0,e};He.determinant=function(e){return me.determinant(e.array)};He.identity=function(e){return me.identity(e.array),e._dirty=!0,e};He.invert=function(e,t){return me.invert(e.array,t.array),e._dirty=!0,e};He.mul=function(e,t,r){return me.mul(e.array,t.array,r.array),e._dirty=!0,e};He.multiply=He.mul;He.rotate=function(e,t,r){return me.rotate(e.array,t.array,r),e._dirty=!0,e};He.scale=function(e,t,r){return me.scale(e.array,t.array,r.array),e._dirty=!0,e};He.translate=function(e,t,r){return me.translate(e.array,t.array,r.array),e._dirty=!0,e};var ou=He,ge=function(){this.array=$.create(),this._dirty=!0};ge.prototype={constructor:ge,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return $.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new ge().copy(this)},copy:function(e){return $.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return $.determinant(this.array)},fromMat2d:function(e){return $.fromMat2d(this.array,e.array),this._dirty=!0,this},fromMat4:function(e){return $.fromMat4(this.array,e.array),this._dirty=!0,this},fromQuat:function(e){return $.fromQuat(this.array,e.array),this._dirty=!0,this},identity:function(){return $.identity(this.array),this._dirty=!0,this},invert:function(){return $.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return $.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return $.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return $.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return $.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return $.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return $.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return $.translate(this.array,this.array,e.array),this._dirty=!0,this},normalFromMat4:function(e){return $.normalFromMat4(this.array,e.array),this._dirty=!0,this},transpose:function(){return $.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};ge.adjoint=function(e,t){return $.adjoint(e.array,t.array),e._dirty=!0,e};ge.copy=function(e,t){return $.copy(e.array,t.array),e._dirty=!0,e};ge.determinant=function(e){return $.determinant(e.array)};ge.identity=function(e){return $.identity(e.array),e._dirty=!0,e};ge.invert=function(e,t){return $.invert(e.array,t.array),e};ge.mul=function(e,t,r){return $.mul(e.array,t.array,r.array),e._dirty=!0,e};ge.multiply=ge.mul;ge.fromMat2d=function(e,t){return $.fromMat2d(e.array,t.array),e._dirty=!0,e};ge.fromMat4=function(e,t){return $.fromMat4(e.array,t.array),e._dirty=!0,e};ge.fromQuat=function(e,t){return $.fromQuat(e.array,t.array),e._dirty=!0,e};ge.normalFromMat4=function(e,t){return $.normalFromMat4(e.array,t.array),e._dirty=!0,e};ge.rotate=function(e,t,r){return $.rotate(e.array,t.array,r),e._dirty=!0,e};ge.scale=function(e,t,r){return $.scale(e.array,t.array,r.array),e._dirty=!0,e};ge.transpose=function(e,t){return $.transpose(e.array,t.array),e._dirty=!0,e};ge.translate=function(e,t,r){return $.translate(e.array,t.array,r.array),e._dirty=!0,e};var su=ge,jr={linear:function(e){return e},quadraticIn:function(e){return e*e},quadraticOut:function(e){return e*(2-e)},quadraticInOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)},cubicIn:function(e){return e*e*e},cubicOut:function(e){return--e*e*e+1},cubicInOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)},quarticIn:function(e){return e*e*e*e},quarticOut:function(e){return 1- --e*e*e*e},quarticInOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)},quinticIn:function(e){return e*e*e*e*e},quinticOut:function(e){return--e*e*e*e*e+1},quinticInOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)},sinusoidalIn:function(e){return 1-Math.cos(e*Math.PI/2)},sinusoidalOut:function(e){return Math.sin(e*Math.PI/2)},sinusoidalInOut:function(e){return .5*(1-Math.cos(Math.PI*e))},exponentialIn:function(e){return e===0?0:Math.pow(1024,e-1)},exponentialOut:function(e){return e===1?1:1-Math.pow(2,-10*e)},exponentialInOut:function(e){return e===0?0:e===1?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(-Math.pow(2,-10*(e-1))+2)},circularIn:function(e){return 1-Math.sqrt(1-e*e)},circularOut:function(e){return Math.sqrt(1- --e*e)},circularInOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)},elasticIn:function(e){var t,r=.1,n=.4;return e===0?0:e===1?1:(!r||r<1?(r=1,t=n/4):t=n*Math.asin(1/r)/(2*Math.PI),-(r*Math.pow(2,10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/n)))},elasticOut:function(e){var t,r=.1,n=.4;return e===0?0:e===1?1:(!r||r<1?(r=1,t=n/4):t=n*Math.asin(1/r)/(2*Math.PI),r*Math.pow(2,-10*e)*Math.sin((e-t)*(2*Math.PI)/n)+1)},elasticInOut:function(e){var t,r=.1,n=.4;return e===0?0:e===1?1:(!r||r<1?(r=1,t=n/4):t=n*Math.asin(1/r)/(2*Math.PI),(e*=2)<1?-.5*(r*Math.pow(2,10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/n)):r*Math.pow(2,-10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/n)*.5+1)},backIn:function(e){var t=1.70158;return e*e*((t+1)*e-t)},backOut:function(e){var t=1.70158;return--e*e*((t+1)*e+t)+1},backInOut:function(e){var t=1.70158*1.525;return(e*=2)<1?.5*(e*e*((t+1)*e-t)):.5*((e-=2)*e*((t+1)*e+t)+2)},bounceIn:function(e){return 1-jr.bounceOut(1-e)},bounceOut:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},bounceInOut:function(e){return e<.5?jr.bounceIn(e*2)*.5:jr.bounceOut(e*2-1)*.5+.5}},lu=jr,uu=function(){function e(t){this._initialized=!1,this._startTime=0,this._pausedTime=0,this._paused=!1,this._life=t.life||1e3,this._delay=t.delay||0,this.loop=t.loop==null?!1:t.loop,this.gap=t.gap||0,this.easing=t.easing||"linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart}return e.prototype.step=function(t,r){if(this._initialized||(this._startTime=t+this._delay,this._initialized=!0),this._paused){this._pausedTime+=r;return}var n=(t-this._startTime-this._pausedTime)/this._life;n<0&&(n=0),n=Math.min(n,1);var i=this.easing,a=typeof i=="string"?lu[i]:i,o=typeof a=="function"?a(n):n;if(this.onframe&&this.onframe(o),n===1)if(this.loop)this._restart(t),this.onrestart&&this.onrestart();else return!0;return!1},e.prototype._restart=function(t){var r=(t-this._startTime-this._pausedTime)%this._life;this._startTime=t-r+this.gap,this._pausedTime=0},e.prototype.pause=function(){this._paused=!0},e.prototype.resume=function(){this._paused=!1},e}(),fu=uu,ca={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function mr(e){return e=Math.round(e),e<0?0:e>255?255:e}function ha(e){return e<0?0:e>1?1:e}function qn(e){var t=e;return t.length&&t.charAt(t.length-1)==="%"?mr(parseFloat(t)/100*255):mr(parseInt(t,10))}function Yr(e){var t=e;return t.length&&t.charAt(t.length-1)==="%"?ha(parseFloat(t)/100):ha(parseFloat(t))}function jn(e,t,r){return r<0?r+=1:r>1&&(r-=1),r*6<1?e+(t-e)*r*6:r*2<1?t:r*3<2?e+(t-e)*(2/3-r)*6:e}function Ke(e,t,r,n,i){return e[0]=t,e[1]=r,e[2]=n,e[3]=i,e}function Yn(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}var da=new na(20),Kr=null;function Zt(e,t){Kr&&Yn(Kr,t),Kr=da.put(e,Kr||t.slice())}function va(e,t){if(!!e){t=t||[];var r=da.get(e);if(r)return Yn(t,r);e=e+"";var n=e.replace(/ /g,"").toLowerCase();if(n in ca)return Yn(t,ca[n]),Zt(e,t),t;var i=n.length;if(n.charAt(0)==="#"){if(i===4||i===5){var a=parseInt(n.slice(1,4),16);if(!(a>=0&&a<=4095)){Ke(t,0,0,0,1);return}return Ke(t,(a&3840)>>4|(a&3840)>>8,a&240|(a&240)>>4,a&15|(a&15)<<4,i===5?parseInt(n.slice(4),16)/15:1),Zt(e,t),t}else if(i===7||i===9){var a=parseInt(n.slice(1,7),16);if(!(a>=0&&a<=16777215)){Ke(t,0,0,0,1);return}return Ke(t,(a&16711680)>>16,(a&65280)>>8,a&255,i===9?parseInt(n.slice(7),16)/255:1),Zt(e,t),t}return}var o=n.indexOf("("),s=n.indexOf(")");if(o!==-1&&s+1===i){var l=n.substr(0,o),u=n.substr(o+1,s-(o+1)).split(","),f=1;switch(l){case"rgba":if(u.length!==4)return u.length===3?Ke(t,+u[0],+u[1],+u[2],1):Ke(t,0,0,0,1);f=Yr(u.pop());case"rgb":if(u.length!==3){Ke(t,0,0,0,1);return}return Ke(t,qn(u[0]),qn(u[1]),qn(u[2]),f),Zt(e,t),t;case"hsla":if(u.length!==4){Ke(t,0,0,0,1);return}return u[3]=Yr(u[3]),pa(u,t),Zt(e,t),t;case"hsl":if(u.length!==3){Ke(t,0,0,0,1);return}return pa(u,t),Zt(e,t),t;default:return}}Ke(t,0,0,0,1)}}function pa(e,t){var r=(parseFloat(e[0])%360+360)%360/360,n=Yr(e[1]),i=Yr(e[2]),a=i<=.5?i*(n+1):i+n-i*n,o=i*2-a;return t=t||[],Ke(t,mr(jn(o,a,r+1/3)*255),mr(jn(o,a,r)*255),mr(jn(o,a,r-1/3)*255),1),e.length===4&&(t[3]=e[3]),t}var cu=Array.prototype,hu=cu.slice,ma=function(){}.constructor,Zr=ma?ma.prototype:null;function du(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];typeof console!="undefined"&&console.error.apply(console,e)}function $r(e){return!e||typeof e=="string"?!1:typeof e.length=="number"}function _a(e){if(!e)return[];if(Object.keys)return Object.keys(e);var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(r);return t}function vu(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];return function(){return e.apply(t,r.concat(hu.call(arguments)))}}Zr&&pu(Zr.bind)&&Zr.call.bind(Zr.bind);function pu(e){return typeof e=="function"}var Kn=Array.prototype.slice;function Zn(e,t,r){return(t-e)*r+e}function mu(e,t,r){return r>.5?t:e}function ga(e,t,r,n){for(var i=t.length,a=0;a<i;a++)e[a]=Zn(t[a],r[a],n)}function _u(e,t,r,n){for(var i=t.length,a=i&&t[0].length,o=0;o<i;o++){e[o]||(e[o]=[]);for(var s=0;s<a;s++)e[o][s]=Zn(t[o][s],r[o][s],n)}}function Qr(e,t,r,n){for(var i=t.length,a=0;a<i;a++)e[a]=t[a]+r[a]*n;return e}function ya(e,t,r,n){for(var i=t.length,a=i&&t[0].length,o=0;o<i;o++){e[o]||(e[o]=[]);for(var s=0;s<a;s++)e[o][s]=t[o][s]+r[o][s]*n}return e}function gu(e,t,r){var n=e,i=t;if(!(!n.push||!i.push)){var a=n.length,o=i.length;if(a!==o){var s=a>o;if(s)n.length=o;else for(var l=a;l<o;l++)n.push(r===1?i[l]:Kn.call(i[l]))}for(var u=n[0]&&n[0].length,l=0;l<n.length;l++)if(r===1)isNaN(n[l])&&(n[l]=i[l]);else for(var f=0;f<u;f++)isNaN(n[l][f])&&(n[l][f]=i[l][f])}}function xa(e,t){var r=e.length;if(r!==t.length)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}function $n(e,t,r,n,i,a,o){var s=(r-e)*.5,l=(n-t)*.5;return(2*(t-r)+s+l)*o+(-3*(t-r)-2*s-l)*a+s*i+t}function Ta(e,t,r,n,i,a,o,s){for(var l=t.length,u=0;u<l;u++)e[u]=$n(t[u],r[u],n[u],i[u],a,o,s)}function yu(e,t,r,n,i,a,o,s){for(var l=t.length,u=t[0].length,f=0;f<l;f++){e[f]||(e[1]=[]);for(var c=0;c<u;c++)e[f][c]=$n(t[f][c],r[f][c],n[f][c],i[f][c],a,o,s)}}function Qn(e){if($r(e)){var t=e.length;if($r(e[0])){for(var r=[],n=0;n<t;n++)r.push(Kn.call(e[n]));return r}return Kn.call(e)}return e}function _r(e){return e[0]=Math.floor(e[0]),e[1]=Math.floor(e[1]),e[2]=Math.floor(e[2]),"rgba("+e.join(",")+")"}function xu(e){return $r(e&&e[0])?2:1}var gr=[0,0,0,0],Tu=function(){function e(t){this.keyframes=[],this.maxTime=0,this.arrDim=0,this.interpolable=!0,this._needsSort=!1,this._isAllValueEqual=!0,this._lastFrame=0,this._lastFramePercent=0,this.propName=t}return e.prototype.isFinished=function(){return this._finished},e.prototype.setFinished=function(){this._finished=!0,this._additiveTrack&&this._additiveTrack.setFinished()},e.prototype.needsAnimate=function(){return!this._isAllValueEqual&&this.keyframes.length>=2&&this.interpolable&&this.maxTime>0},e.prototype.getAdditiveTrack=function(){return this._additiveTrack},e.prototype.addKeyframe=function(t,r){t>=this.maxTime?this.maxTime=t:this._needsSort=!0;var n=this.keyframes,i=n.length;if(this.interpolable)if($r(r)){var a=xu(r);if(i>0&&this.arrDim!==a){this.interpolable=!1;return}if(a===1&&typeof r[0]!="number"||a===2&&typeof r[0][0]!="number"){this.interpolable=!1;return}if(i>0){var o=n[i-1];this._isAllValueEqual&&(a===1?xa(r,o.value)||(this._isAllValueEqual=!1):this._isAllValueEqual=!1)}this.arrDim=a}else{if(this.arrDim>0){this.interpolable=!1;return}if(typeof r=="string"){var s=va(r);s?(r=s,this.isValueColor=!0):this.interpolable=!1}else if(typeof r!="number"||isNaN(r)){this.interpolable=!1;return}if(this._isAllValueEqual&&i>0){var o=n[i-1];this.isValueColor&&!xa(o.value,r)?this._isAllValueEqual=!1:o.value!==r&&(this._isAllValueEqual=!1)}}var l={time:t,value:r,percent:0};return this.keyframes.push(l),l},e.prototype.prepare=function(t){var r=this.keyframes;this._needsSort&&r.sort(function(l,u){return l.time-u.time});for(var n=this.arrDim,i=r.length,a=r[i-1],o=0;o<i;o++)r[o].percent=r[o].time/this.maxTime,n>0&&o!==i-1&&gu(r[o].value,a.value,n);if(t&&this.needsAnimate()&&t.needsAnimate()&&n===t.arrDim&&this.isValueColor===t.isValueColor&&!t._finished){this._additiveTrack=t;for(var s=r[0].value,o=0;o<i;o++)n===0?this.isValueColor?r[o].additiveValue=Qr([],r[o].value,s,-1):r[o].additiveValue=r[o].value-s:n===1?r[o].additiveValue=Qr([],r[o].value,s,-1):n===2&&(r[o].additiveValue=ya([],r[o].value,s,-1))}},e.prototype.step=function(t,r){if(!this._finished){this._additiveTrack&&this._additiveTrack._finished&&(this._additiveTrack=null);var n=this._additiveTrack!=null,i=n?"additiveValue":"value",a=this.keyframes,o=this.keyframes.length,s=this.propName,l=this.arrDim,u=this.isValueColor,f;if(r<0)f=0;else if(r<this._lastFramePercent){var c=Math.min(this._lastFrame+1,o-1);for(f=c;f>=0&&!(a[f].percent<=r);f--);f=Math.min(f,o-2)}else{for(f=this._lastFrame;f<o&&!(a[f].percent>r);f++);f=Math.min(f-1,o-2)}var d=a[f+1],h=a[f];if(!!(h&&d)){this._lastFrame=f,this._lastFramePercent=r;var v=d.percent-h.percent;if(v!==0){var p=(r-h.percent)/v,m=n?this._additiveValue:u?gr:t[s];if((l>0||u)&&!m&&(m=this._additiveValue=[]),this.useSpline){var _=a[f][i],x=a[f===0?f:f-1][i],T=a[f>o-2?o-1:f+1][i],y=a[f>o-3?o-1:f+2][i];if(l>0)l===1?Ta(m,x,_,T,y,p,p*p,p*p*p):yu(m,x,_,T,y,p,p*p,p*p*p);else if(u)Ta(m,x,_,T,y,p,p*p,p*p*p),n||(t[s]=_r(m));else{var E=void 0;this.interpolable?E=$n(x,_,T,y,p,p*p,p*p*p):E=T,n?this._additiveValue=E:t[s]=E}}else if(l>0)l===1?ga(m,h[i],d[i],p):_u(m,h[i],d[i],p);else if(u)ga(m,h[i],d[i],p),n||(t[s]=_r(m));else{var E=void 0;this.interpolable?E=Zn(h[i],d[i],p):E=mu(h[i],d[i],p),n?this._additiveValue=E:t[s]=E}n&&this._addToTarget(t)}}}},e.prototype._addToTarget=function(t){var r=this.arrDim,n=this.propName,i=this._additiveValue;r===0?this.isValueColor?(va(t[n],gr),Qr(gr,gr,i,1),t[n]=_r(gr)):t[n]=t[n]+i:r===1?Qr(t[n],t[n],i,1):r===2&&ya(t[n],t[n],i,1)},e}(),Eu=function(){function e(t,r,n){if(this._tracks={},this._trackKeys=[],this._delay=0,this._maxTime=0,this._paused=!1,this._started=0,this._clip=null,this._target=t,this._loop=r,r&&n){du("Can' use additive animation on looped animation.");return}this._additiveAnimators=n}return e.prototype.getTarget=function(){return this._target},e.prototype.changeTarget=function(t){this._target=t},e.prototype.when=function(t,r){return this.whenWithKeys(t,r,_a(r))},e.prototype.whenWithKeys=function(t,r,n){for(var i=this._tracks,a=0;a<n.length;a++){var o=n[a],s=i[o];if(!s){s=i[o]=new Tu(o);var l=void 0,u=this._getAdditiveTrack(o);if(u){var f=u.keyframes[u.keyframes.length-1];l=f&&f.value,u.isValueColor&&l&&(l=_r(l))}else l=this._target[o];if(l==null)continue;t!==0&&s.addKeyframe(0,Qn(l)),this._trackKeys.push(o)}s.addKeyframe(t,Qn(r[o]))}return this._maxTime=Math.max(this._maxTime,t),this},e.prototype.pause=function(){this._clip.pause(),this._paused=!0},e.prototype.resume=function(){this._clip.resume(),this._paused=!1},e.prototype.isPaused=function(){return!!this._paused},e.prototype._doneCallback=function(){this._setTracksFinished(),this._clip=null;var t=this._doneCbs;if(t)for(var r=t.length,n=0;n<r;n++)t[n].call(this)},e.prototype._abortedCallback=function(){this._setTracksFinished();var t=this.animation,r=this._abortedCbs;if(t&&t.removeClip(this._clip),this._clip=null,r)for(var n=0;n<r.length;n++)r[n].call(this)},e.prototype._setTracksFinished=function(){for(var t=this._tracks,r=this._trackKeys,n=0;n<r.length;n++)t[r[n]].setFinished()},e.prototype._getAdditiveTrack=function(t){var r,n=this._additiveAnimators;if(n)for(var i=0;i<n.length;i++){var a=n[i].getTrack(t);a&&(r=a)}return r},e.prototype.start=function(t,r){if(!(this._started>0)){this._started=1;for(var n=this,i=[],a=0;a<this._trackKeys.length;a++){var o=this._trackKeys[a],s=this._tracks[o],l=this._getAdditiveTrack(o),u=s.keyframes;if(s.prepare(l),s.needsAnimate())i.push(s);else if(!s.interpolable){var f=u[u.length-1];f&&(n._target[s.propName]=f.value)}}if(i.length||r){var c=new fu({life:this._maxTime,loop:this._loop,delay:this._delay,onframe:function(d){n._started=2;var h=n._additiveAnimators;if(h){for(var v=!1,p=0;p<h.length;p++)if(h[p]._clip){v=!0;break}v||(n._additiveAnimators=null)}for(var p=0;p<i.length;p++)i[p].step(n._target,d);var m=n._onframeCbs;if(m)for(var p=0;p<m.length;p++)m[p](n._target,d)},ondestroy:function(){n._doneCallback()}});this._clip=c,this.animation&&this.animation.addClip(c),t&&t!=="spline"&&(c.easing=t)}else this._doneCallback();return this}},e.prototype.stop=function(t){if(!!this._clip){var r=this._clip;t&&r.onframe(1),this._abortedCallback()}},e.prototype.delay=function(t){return this._delay=t,this},e.prototype.during=function(t){return t&&(this._onframeCbs||(this._onframeCbs=[]),this._onframeCbs.push(t)),this},e.prototype.done=function(t){return t&&(this._doneCbs||(this._doneCbs=[]),this._doneCbs.push(t)),this},e.prototype.aborted=function(t){return t&&(this._abortedCbs||(this._abortedCbs=[]),this._abortedCbs.push(t)),this},e.prototype.getClip=function(){return this._clip},e.prototype.getTrack=function(t){return this._tracks[t]},e.prototype.stopTracks=function(t,r){if(!t.length||!this._clip)return!0;for(var n=this._tracks,i=this._trackKeys,a=0;a<t.length;a++){var o=n[t[a]];o&&(r?o.step(this._target,1):this._started===1&&o.step(this._target,0),o.setFinished())}for(var s=!0,a=0;a<i.length;a++)if(!n[i[a]].isFinished()){s=!1;break}return s&&this._abortedCallback(),s},e.prototype.saveFinalToTarget=function(t,r){if(!!t){r=r||this._trackKeys;for(var n=0;n<r.length;n++){var i=r[n],a=this._tracks[i];if(!(!a||a.isFinished())){var o=a.keyframes,s=o[o.length-1];if(s){var l=Qn(s.value);a.isValueColor&&(l=_r(l)),t[i]=l}}}}},e.prototype.__changeFinalValue=function(t,r){r=r||_a(t);for(var n=0;n<r.length;n++){var i=r[n],a=this._tracks[i];if(!!a){var o=a.keyframes;if(o.length>1){var s=o.pop();a.addKeyframe(s.time,t[i]),a.prepare(a.getAdditiveTrack())}}}},e}(),Au=Eu,Su={_animators:null,getAnimators:function(){return this._animators=this._animators||[],this._animators},animate:function(e,t){this._animators=this._animators||[];var r=this,n;if(e){for(var i=e.split("."),a=r,o=0,s=i.length;o<s;o++)!a||(a=a[i[o]]);a&&(n=a)}else n=r;if(n==null)throw new Error("Target "+e+" not exists");var l=this._animators,u=new Au(n,t),f=this;return u.during(function(){f.__zr&&f.__zr.refresh()}).done(function(){var c=l.indexOf(u);c>=0&&l.splice(c,1)}),l.push(u),this.__zr&&this.__zr.animation.addAnimator(u),u},stopAnimation:function(e){this._animators=this._animators||[];for(var t=this._animators,r=t.length,n=0;n<r;n++)t[n].stop(e);return t.length=0,this},addAnimatorsToZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.addAnimator(this._animators[t])},removeAnimatorsFromZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.removeAnimator(this._animators[t])}},wu=Su,Ea=`
@export clay.util.rand
highp float rand(vec2 uv) {
 const highp float a = 12.9898, b = 78.233, c = 43758.5453;
 highp float dt = dot(uv.xy, vec2(a,b)), sn = mod(dt, 3.141592653589793);
 return fract(sin(sn) * c);
}
@end
@export clay.util.calculate_attenuation
uniform float attenuationFactor : 5.0;
float lightAttenuation(float dist, float range)
{
 float attenuation = 1.0;
 attenuation = dist*dist/(range*range+1.0);
 float att_s = attenuationFactor;
 attenuation = 1.0/(attenuation*att_s+1.0);
 att_s = 1.0/(att_s+1.0);
 attenuation = attenuation - att_s;
 attenuation /= 1.0 - att_s;
 return clamp(attenuation, 0.0, 1.0);
}
@end
@export clay.util.edge_factor
#ifdef SUPPORT_STANDARD_DERIVATIVES
float edgeFactor(float width)
{
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * width, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#else
float edgeFactor(float width)
{
 return 1.0;
}
#endif
@end
@export clay.util.encode_float
vec4 encodeFloat(const in float depth)
{
 const vec4 bitShifts = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
 const vec4 bit_mask = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
 vec4 res = fract(depth * bitShifts);
 res -= res.xxyz * bit_mask;
 return res;
}
@end
@export clay.util.decode_float
float decodeFloat(const in vec4 color)
{
 const vec4 bitShifts = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);
 return dot(color, bitShifts);
}
@end
@export clay.util.float
@import clay.util.encode_float
@import clay.util.decode_float
@end
@export clay.util.rgbm_decode
vec3 RGBMDecode(vec4 rgbm, float range) {
 return range * rgbm.rgb * rgbm.a;
}
@end
@export clay.util.rgbm_encode
vec4 RGBMEncode(vec3 color, float range) {
 if (dot(color, color) == 0.0) {
 return vec4(0.0);
 }
 vec4 rgbm;
 color /= range;
 rgbm.a = clamp(max(max(color.r, color.g), max(color.b, 1e-6)), 0.0, 1.0);
 rgbm.a = ceil(rgbm.a * 255.0) / 255.0;
 rgbm.rgb = color / rgbm.a;
 return rgbm;
}
@end
@export clay.util.rgbm
@import clay.util.rgbm_decode
@import clay.util.rgbm_encode
vec4 decodeHDR(vec4 color)
{
#if defined(RGBM_DECODE) || defined(RGBM)
 return vec4(RGBMDecode(color, 8.12), 1.0);
#else
 return color;
#endif
}
vec4 encodeHDR(vec4 color)
{
#if defined(RGBM_ENCODE) || defined(RGBM)
 return RGBMEncode(color.xyz, 8.12);
#else
 return color;
#endif
}
@end
@export clay.util.srgb
vec4 sRGBToLinear(in vec4 value) {
 return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.w);
}
vec4 linearTosRGB(in vec4 value) {
 return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.w);
}
@end
@export clay.chunk.skinning_header
#ifdef SKINNING
attribute vec3 weight : WEIGHT;
attribute vec4 joint : JOINT;
#ifdef USE_SKIN_MATRICES_TEXTURE
uniform sampler2D skinMatricesTexture : ignore;
uniform float skinMatricesTextureSize: ignore;
mat4 getSkinMatrix(sampler2D tex, float idx) {
 float j = idx * 4.0;
 float x = mod(j, skinMatricesTextureSize);
 float y = floor(j / skinMatricesTextureSize) + 0.5;
 vec2 scale = vec2(skinMatricesTextureSize);
 return mat4(
 texture2D(tex, vec2(x + 0.5, y) / scale),
 texture2D(tex, vec2(x + 1.5, y) / scale),
 texture2D(tex, vec2(x + 2.5, y) / scale),
 texture2D(tex, vec2(x + 3.5, y) / scale)
 );
}
mat4 getSkinMatrix(float idx) {
 return getSkinMatrix(skinMatricesTexture, idx);
}
#else
uniform mat4 skinMatrix[JOINT_COUNT] : SKIN_MATRIX;
mat4 getSkinMatrix(float idx) {
 return skinMatrix[int(idx)];
}
#endif
#endif
@end
@export clay.chunk.skin_matrix
mat4 skinMatrixWS = getSkinMatrix(joint.x) * weight.x;
if (weight.y > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.y) * weight.y;
}
if (weight.z > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.z) * weight.z;
}
float weightW = 1.0-weight.x-weight.y-weight.z;
if (weightW > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.w) * weightW;
}
@end
@export clay.chunk.instancing_header
#ifdef INSTANCING
attribute vec4 instanceMat1;
attribute vec4 instanceMat2;
attribute vec4 instanceMat3;
#endif
@end
@export clay.chunk.instancing_matrix
mat4 instanceMat = mat4(
 vec4(instanceMat1.xyz, 0.0),
 vec4(instanceMat2.xyz, 0.0),
 vec4(instanceMat3.xyz, 0.0),
 vec4(instanceMat1.w, instanceMat2.w, instanceMat3.w, 1.0)
);
@end
@export clay.util.parallax_correct
vec3 parallaxCorrect(in vec3 dir, in vec3 pos, in vec3 boxMin, in vec3 boxMax) {
 vec3 first = (boxMax - pos) / dir;
 vec3 second = (boxMin - pos) / dir;
 vec3 further = max(first, second);
 float dist = min(further.x, min(further.y, further.z));
 vec3 fixedPos = pos + dir * dist;
 vec3 boxCenter = (boxMax + boxMin) * 0.5;
 return normalize(fixedPos - boxCenter);
}
@end
@export clay.util.clamp_sample
vec4 clampSample(const in sampler2D texture, const in vec2 coord)
{
#ifdef STEREO
 float eye = step(0.5, coord.x) * 0.5;
 vec2 coordClamped = clamp(coord, vec2(eye, 0.0), vec2(0.5 + eye, 1.0));
#else
 vec2 coordClamped = clamp(coord, vec2(0.0), vec2(1.0));
#endif
 return texture2D(texture, coordClamped);
}
@end
@export clay.util.ACES
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
@end`,bu=`
@export ecgl.common.transformUniforms
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
uniform mat4 world : WORLD;
@end

@export ecgl.common.attributes
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 normal : NORMAL;
@end

@export ecgl.common.uv.header
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
uniform vec2 detailUvRepeat : [1.0, 1.0];
uniform vec2 detailUvOffset : [0.0, 0.0];

varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end

@export ecgl.common.uv.main
v_Texcoord = texcoord * uvRepeat + uvOffset;
v_DetailTexcoord = texcoord * detailUvRepeat + detailUvOffset;
@end

@export ecgl.common.uv.fragmentHeader
varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end


@export ecgl.common.albedo.main

 vec4 albedoTexel = vec4(1.0);
#ifdef DIFFUSEMAP_ENABLED
 albedoTexel = texture2D(diffuseMap, v_Texcoord);
 #ifdef SRGB_DECODE
 albedoTexel = sRGBToLinear(albedoTexel);
 #endif
#endif

#ifdef DETAILMAP_ENABLED
 vec4 detailTexel = texture2D(detailMap, v_DetailTexcoord);
 #ifdef SRGB_DECODE
 detailTexel = sRGBToLinear(detailTexel);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, detailTexel.rgb, detailTexel.a);
 albedoTexel.a = detailTexel.a + (1.0 - detailTexel.a) * albedoTexel.a;
#endif

@end

@export ecgl.common.wireframe.vertexHeader

#ifdef WIREFRAME_QUAD
attribute vec4 barycentric;
varying vec4 v_Barycentric;
#elif defined(WIREFRAME_TRIANGLE)
attribute vec3 barycentric;
varying vec3 v_Barycentric;
#endif

@end

@export ecgl.common.wireframe.vertexMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 v_Barycentric = barycentric;
#endif

@end


@export ecgl.common.wireframe.fragmentHeader

uniform float wireframeLineWidth : 1;
uniform vec4 wireframeLineColor: [0, 0, 0, 0.5];

#ifdef WIREFRAME_QUAD
varying vec4 v_Barycentric;
float edgeFactor () {
 vec4 d = fwidth(v_Barycentric);
 vec4 a4 = smoothstep(vec4(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(min(a4.x, a4.y), a4.z), a4.w);
}
#elif defined(WIREFRAME_TRIANGLE)
varying vec3 v_Barycentric;
float edgeFactor () {
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#endif

@end


@export ecgl.common.wireframe.fragmentMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 if (wireframeLineWidth > 0.) {
 vec4 lineColor = wireframeLineColor;
#ifdef SRGB_DECODE
 lineColor = sRGBToLinear(lineColor);
#endif

 gl_FragColor.rgb = mix(gl_FragColor.rgb, lineColor.rgb, (1.0 - edgeFactor()) * lineColor.a);
 }
#endif
@end




@export ecgl.common.bumpMap.header

#ifdef BUMPMAP_ENABLED
uniform sampler2D bumpMap;
uniform float bumpScale : 1.0;


vec3 bumpNormal(vec3 surfPos, vec3 surfNormal, vec3 baseNormal)
{
 vec2 dSTdx = dFdx(v_Texcoord);
 vec2 dSTdy = dFdy(v_Texcoord);

 float Hll = bumpScale * texture2D(bumpMap, v_Texcoord).x;
 float dHx = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdx).x - Hll;
 float dHy = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdy).x - Hll;

 vec3 vSigmaX = dFdx(surfPos);
 vec3 vSigmaY = dFdy(surfPos);
 vec3 vN = surfNormal;

 vec3 R1 = cross(vSigmaY, vN);
 vec3 R2 = cross(vN, vSigmaX);

 float fDet = dot(vSigmaX, R1);

 vec3 vGrad = sign(fDet) * (dHx * R1 + dHy * R2);
 return normalize(abs(fDet) * baseNormal - vGrad);

}
#endif

@end

@export ecgl.common.normalMap.vertexHeader

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.vertexMain

#ifdef NORMALMAP_ENABLED
 if (dot(tangent, tangent) > 0.0) {
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
 }
#endif

@end


@export ecgl.common.normalMap.fragmentHeader

#ifdef NORMALMAP_ENABLED
uniform sampler2D normalMap;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.fragmentMain
#ifdef NORMALMAP_ENABLED
 if (dot(v_Tangent, v_Tangent) > 0.0) {
 vec3 normalTexel = texture2D(normalMap, v_DetailTexcoord).xyz;
 if (dot(normalTexel, normalTexel) > 0.0) { N = normalTexel * 2.0 - 1.0;
 mat3 tbn = mat3(v_Tangent, v_Bitangent, v_Normal);
 N = normalize(tbn * N);
 }
 }
#endif
@end



@export ecgl.common.vertexAnimation.header

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevNormal;
uniform float percent;
#endif

@end

@export ecgl.common.vertexAnimation.main

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 vec3 norm = mix(prevNormal, normal, percent);
#else
 vec3 pos = position;
 vec3 norm = normal;
#endif

@end


@export ecgl.common.ssaoMap.header
#ifdef SSAOMAP_ENABLED
uniform sampler2D ssaoMap;
uniform vec4 viewport : VIEWPORT;
#endif
@end

@export ecgl.common.ssaoMap.main
 float ao = 1.0;
#ifdef SSAOMAP_ENABLED
 ao = texture2D(ssaoMap, (gl_FragCoord.xy - viewport.xy) / viewport.zw).r;
#endif
@end




@export ecgl.common.diffuseLayer.header

#if (LAYER_DIFFUSEMAP_COUNT > 0)
uniform float layerDiffuseIntensity[LAYER_DIFFUSEMAP_COUNT];
uniform sampler2D layerDiffuseMap[LAYER_DIFFUSEMAP_COUNT];
#endif

@end

@export ecgl.common.emissiveLayer.header

#if (LAYER_EMISSIVEMAP_COUNT > 0)
uniform float layerEmissionIntensity[LAYER_EMISSIVEMAP_COUNT];
uniform sampler2D layerEmissiveMap[LAYER_EMISSIVEMAP_COUNT];
#endif

@end

@export ecgl.common.layers.header
@import ecgl.common.diffuseLayer.header
@import ecgl.common.emissiveLayer.header
@end

@export ecgl.common.diffuseLayer.main

#if (LAYER_DIFFUSEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_DIFFUSEMAP_COUNT; _idx_++) {{
 float intensity = layerDiffuseIntensity[_idx_];
 vec4 texel2 = texture2D(layerDiffuseMap[_idx_], v_Texcoord);
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, texel2.rgb * intensity, texel2.a);
 albedoTexel.a = texel2.a + (1.0 - texel2.a) * albedoTexel.a;
 }}
#endif

@end

@export ecgl.common.emissiveLayer.main

#if (LAYER_EMISSIVEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_EMISSIVEMAP_COUNT; _idx_++)
 {{
 vec4 texel2 = texture2D(layerEmissiveMap[_idx_], v_Texcoord) * layerEmissionIntensity[_idx_];
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 float intensity = layerEmissionIntensity[_idx_];
 gl_FragColor.rgb += texel2.rgb * texel2.a * intensity;
 }}
#endif

@end
`,Cu=`@export ecgl.color.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

@import ecgl.common.uv.header

attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 position: POSITION;

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

#ifdef ATMOSPHERE_ENABLED
attribute vec3 normal: NORMAL;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
varying vec3 v_Normal;
#endif

void main()
{
#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 @import ecgl.common.uv.main

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef ATMOSPHERE_ENABLED
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end

@export ecgl.color.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
varying vec3 v_Normal;
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.layers.header

@import ecgl.common.uv.fragmentHeader

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain

}
@end`,Ru=`/**
 * http: */

@export ecgl.lambert.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header


@import ecgl.common.attributes

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif


@import ecgl.common.vertexAnimation.header


varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{
 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main


 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

 @import ecgl.common.wireframe.vertexMain
}

@end


@export ecgl.lambert.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 gl_FragColor *= sRGBToLinear(v_Color);
 #else
 gl_FragColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseColor = vec3(0.0, 0.0, 0.0);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 diffuseColor += ambientLightColor[i] * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseColor += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 vec3 lightColor = directionalLightColor[i];

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 diffuseColor += lightColor * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor.rgb *= diffuseColor;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Lu=`@export ecgl.realistic.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes


@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@import ecgl.common.vertexAnimation.header

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{

 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef NORMALMAP_ENABLED
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end



@export ecgl.realistic.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0
#define PI 3.14159265358979
#define ROUGHNESS_CHANEL 0
#define METALNESS_CHANEL 1

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;

uniform sampler2D detailMap;
uniform sampler2D metalnessMap;
uniform sampler2D roughnessMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform float metalness : 0.0;
uniform float roughness : 0.5;

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
@import clay.header.ambient_cubemap_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.normalMap.fragmentHeader

@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import clay.util.rgbm

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}

float D_Phong(float g, float ndh) {
 float a = pow(8192.0, g);
 return (a + 2.0) / 8.0 * pow(ndh, a);
}

void main()
{
 vec4 albedoColor = color;

 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);
#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 albedoColor *= sRGBToLinear(v_Color);
 #else
 albedoColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 albedoColor *= albedoTexel;

 float m = metalness;

#ifdef METALNESSMAP_ENABLED
 float m2 = texture2D(metalnessMap, v_DetailTexcoord)[METALNESS_CHANEL];
 m = clamp(m2 + (m - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 baseColor = albedoColor.rgb;
 albedoColor.rgb = baseColor * (1.0 - m);
 vec3 specFactor = mix(vec3(0.04), baseColor, m);

 float g = 1.0 - roughness;

#ifdef ROUGHNESSMAP_ENABLED
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 N = v_Normal;

#ifdef DOUBLE_SIDED
 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

@import ecgl.common.normalMap.fragmentMain

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseTerm = vec3(0.0);
 vec3 specularTerm = vec3(0.0);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 vec3 fresnelTerm = F_Schlick(ndv, specFactor);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += ambientLightColor[_idx_] * ambientFactor * ao;
 }}
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++)
 {{
 vec3 L = -directionalLightDirection[_idx_];
 vec3 lc = directionalLightColor[_idx_];

 vec3 H = normalize(L + V);
 float ndl = clamp(dot(N, normalize(L)), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[_idx_];
 }
#endif

 vec3 li = lc * ndl * shadowContrib;

 diffuseTerm += li;
 specularTerm += li * fresnelTerm * D_Phong(g, ndh);
 }}
#endif


#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
 vec3 L = reflect(-V, N);
 L = vec3(L.x, L[NORMAL_UP_AXIS], L[NORMAL_FRONT_AXIS]);
 float rough2 = clamp(1.0 - g, 0.0, 1.0);
 float bias2 = rough2 * 5.0;
 vec2 brdfParam2 = texture2D(ambientCubemapLightBRDFLookup[0], vec2(rough2, ndv)).xy;
 vec3 envWeight2 = specFactor * brdfParam2.x + brdfParam2.y;
 vec3 envTexel2;
 for(int _idx_ = 0; _idx_ < AMBIENT_CUBEMAP_LIGHT_COUNT; _idx_++)
 {{
 envTexel2 = RGBMDecode(textureCubeLodEXT(ambientCubemapLightCubemap[_idx_], L, bias2), 8.12);
 specularTerm += ambientCubemapLightColor[_idx_] * envTexel2 * envWeight2 * ao;
 }}
#endif

 gl_FragColor.rgb = albedoColor.rgb * diffuseTerm + specularTerm;
 gl_FragColor.a = albedoColor.a;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

#ifdef SRGB_ENCODE
 gl_FragColor = linearTosRGB(gl_FragColor);
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Nu=`@export ecgl.hatching.vertex

@import ecgl.realistic.vertex

@end


@export ecgl.hatching.fragment

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform vec4 color : [0.0, 0.0, 0.0, 1.0];
uniform vec4 paperColor : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

uniform sampler2D hatch1;
uniform sampler2D hatch2;
uniform sampler2D hatch3;
uniform sampler2D hatch4;
uniform sampler2D hatch5;
uniform sampler2D hatch6;

float shade(in float tone) {
 vec4 c = vec4(1. ,1., 1., 1.);
 float step = 1. / 6.;
 vec2 uv = v_DetailTexcoord;
 if (tone <= step / 2.0) {
 c = mix(vec4(0.), texture2D(hatch6, uv), 12. * tone);
 }
 else if (tone <= step) {
 c = mix(texture2D(hatch6, uv), texture2D(hatch5, uv), 6. * tone);
 }
 if(tone > step && tone <= 2. * step){
 c = mix(texture2D(hatch5, uv), texture2D(hatch4, uv) , 6. * (tone - step));
 }
 if(tone > 2. * step && tone <= 3. * step){
 c = mix(texture2D(hatch4, uv), texture2D(hatch3, uv), 6. * (tone - 2. * step));
 }
 if(tone > 3. * step && tone <= 4. * step){
 c = mix(texture2D(hatch3, uv), texture2D(hatch2, uv), 6. * (tone - 3. * step));
 }
 if(tone > 4. * step && tone <= 5. * step){
 c = mix(texture2D(hatch2, uv), texture2D(hatch1, uv), 6. * (tone - 4. * step));
 }
 if(tone > 5. * step){
 c = mix(texture2D(hatch1, uv), vec4(1.), 6. * (tone - 5. * step));
 }

 return c.r;
}

const vec3 w = vec3(0.2125, 0.7154, 0.0721);

void main()
{
#ifdef SRGB_DECODE
 vec4 inkColor = sRGBToLinear(color);
#else
 vec4 inkColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 inkColor *= sRGBToLinear(v_Color);
 #else
 inkColor *= v_Color;
 #endif
#endif

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float tone = 0.0;

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 tone += dot(ambientLightColor[i], w) * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 tone += dot(calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_], w) * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 float lightTone = dot(directionalLightColor[i], w);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 tone += lightTone * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor = mix(inkColor, paperColor, shade(clamp(tone, 0.0, 1.0)));
 }
@end
`,Mu=`@export ecgl.sm.depth.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;

void main(){

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 v_ViewPosition = worldViewProjection * vec4(pos, 1.0);
 gl_Position = v_ViewPosition;

 v_Texcoord = texcoord;

}
@end



@export ecgl.sm.depth.fragment

@import clay.sm.depth.fragment

@end`;Object.assign(ot.prototype,wu);b.import(Ea);b.import(Hi);b.import(bu);b.import(Cu);b.import(Ru);b.import(Lu);b.import(Nu);b.import(Mu);function Du(e){return!e||e==="none"}function Aa(e){return e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof Image}function Pu(e){return e.getZr&&e.setOption}var Iu=xt.prototype.addToScene,Ou=xt.prototype.removeFromScene;xt.prototype.addToScene=function(e){if(Iu.call(this,e),this.__zr){var t=this.__zr;e.traverse(function(r){r.__zr=t,r.addAnimatorsToZr&&r.addAnimatorsToZr(t)})}};xt.prototype.removeFromScene=function(e){Ou.call(this,e),e.traverse(function(t){var r=t.__zr;t.__zr=null,r&&t.removeAnimatorsFromZr&&t.removeAnimatorsFromZr(r)})};ut.prototype.setTextureImage=function(e,t,r,n){if(!!this.shader){var i=r.getZr(),a=this,o;return a.autoUpdateTextureStatus=!1,a.disableTexture(e),Du(t)||(o=G.loadTexture(t,r,n,function(s){a.enableTexture(e),i&&i.refresh()}),a.set(e,o)),o}};var G={};G.Renderer=ar;G.Node=ot;G.Mesh=Ln;G.Shader=b;G.Material=ut;G.Texture=W;G.Texture2D=re;G.Geometry=We;G.SphereGeometry=Kl;G.PlaneGeometry=zn;G.CubeGeometry=sa;G.AmbientLight=$l;G.DirectionalLight=Jl;G.PointLight=tu;G.SpotLight=nu;G.PerspectiveCamera=Ee;G.OrthographicCamera=vr;G.Vector2=Ge;G.Vector3=C;G.Vector4=iu;G.Quaternion=Wi;G.Matrix2=au;G.Matrix2d=ou;G.Matrix3=su;G.Matrix4=O;G.Plane=$i;G.Ray=Dr;G.BoundingBox=Me;G.Frustum=In;var Jr=null;function Fu(){return Jr!==null||(Jr=Mt.createBlank("rgba(255,255,255,0)").image),Jr}function Sa(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function wa(e){if((e.wrapS===W.REPEAT||e.wrapT===W.REPEAT)&&e.image){var t=Sa(e.width),r=Sa(e.height);if(t!==e.width||r!==e.height){var n=document.createElement("canvas");n.width=t,n.height=r;var i=n.getContext("2d");i.drawImage(e.image,0,0,t,r),e.image=n}}}G.loadTexture=function(e,t,r,n){typeof r=="function"&&(n=r,r={}),r=r||{};for(var i=Object.keys(r).sort(),a="",o=0;o<i.length;o++)a+=i[o]+"_"+r[i[o]]+"_";var s=t.__textureCache=t.__textureCache||new na(20);if(Pu(e)){var l=e.__textureid__,u=s.get(a+l);if(u)u.texture.surface.setECharts(e),n&&n(u.texture);else{var f=new Ml(e);f.onupdate=function(){t.getZr().refresh()},u={texture:f.getTexture()};for(var o=0;o<i.length;o++)u.texture[i[o]]=r[i[o]];l=e.__textureid__||"__ecgl_ec__"+u.texture.__uid__,e.__textureid__=l,s.put(a+l,u),n&&n(u.texture)}return u.texture}else if(Aa(e)){var l=e.__textureid__,u=s.get(a+l);if(!u){u={texture:new G.Texture2D({image:e})};for(var o=0;o<i.length;o++)u.texture[i[o]]=r[i[o]];l=e.__textureid__||"__ecgl_image__"+u.texture.__uid__,e.__textureid__=l,s.put(a+l,u),wa(u.texture),n&&n(u.texture)}return u.texture}else{var u=s.get(a+e);if(u)u.callbacks?u.callbacks.push(n):n&&n(u.texture);else if(e.match(/.hdr$|^data:application\/octet-stream/)){u={callbacks:[n]};var c=Mt.loadTexture(e,{exposure:r.exposure,fileType:"hdr"},function(){c.dirty(),u.callbacks.forEach(function(v){v&&v(c)}),u.callbacks=null});u.texture=c,s.put(a+e,u)}else{for(var c=new G.Texture2D({image:new Image}),o=0;o<i.length;o++)c[i[o]]=r[i[o]];u={texture:c,callbacks:[n]};var d=c.image;d.onload=function(){c.image=d,wa(c),c.dirty(),u.callbacks.forEach(function(p){p&&p(c)}),u.callbacks=null},d.crossOrigin="Anonymous",d.src=e,c.image=Fu(),s.put(a+e,u)}return u.texture}};G.createAmbientCubemap=function(e,t,r,n){e=e||{};var i=e.texture,a=it.firstNotNull(e.exposure,1),o=new zl({intensity:it.firstNotNull(e.specularIntensity,1)}),s=new Vl({intensity:it.firstNotNull(e.diffuseIntensity,1),coefficients:[.844,.712,.691,-.037,.083,.167,.343,.288,.299,-.041,-.021,-.009,-.003,-.041,-.064,-.011,-.007,-.004,-.031,.034,.081,-.06,-.049,-.06,.046,.056,.05]});return o.cubemap=G.loadTexture(i,r,{exposure:a},function(){o.cubemap.flipY=!1,o.prefilter(t,32),s.coefficients=ql.projectEnvironmentMap(t,o.cubemap,{lod:1}),n&&n()}),{specular:o,diffuse:s}};G.createBlankTexture=Mt.createBlank;G.isImage=Aa;G.additiveBlend=function(e){e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE)};G.parseColor=function(e,t){return e instanceof Array?(t||(t=[]),t[0]=e[0],t[1]=e[1],t[2]=e[2],e.length>3?t[3]=e[3]:t[3]=1,t):(t=di(e||"#000",t)||[0,0,0,0],t[0]/=255,t[1]/=255,t[2]/=255,t)};G.directionFromAlphaBeta=function(e,t){var r=e/180*Math.PI+Math.PI/2,n=-t/180*Math.PI+Math.PI/2,i=[],a=Math.sin(r);return i[0]=a*Math.cos(n),i[1]=-Math.cos(r),i[2]=a*Math.sin(n),i};G.getShadowResolution=function(e){var t=1024;switch(e){case"low":t=512;break;case"medium":break;case"high":t=2048;break;case"ultra":t=4096;break}return t};G.COMMON_SHADERS=["lambert","color","realistic","hatching","shadow"];G.createShader=function(e){e==="ecgl.shadow"&&(e="ecgl.displayShadow");var t=b.source(e+".vertex"),r=b.source(e+".fragment");t||console.error("Vertex shader of '%s' not exits",e),r||console.error("Fragment shader of '%s' not exits",e);var n=new b(t,r);return n.name=e,n};G.createMaterial=function(e,t){t instanceof Array||(t=[t]);var r=G.createShader(e),n=new ut({shader:r});return t.forEach(function(i){typeof i=="string"&&n.define(i)}),n};G.setMaterialFromModel=function(e,t,r,n){t.autoUpdateTextureStatus=!1;var i=r.getModel(e+"Material"),a=i.get("detailTexture"),o=it.firstNotNull(i.get("textureTiling"),1),s=it.firstNotNull(i.get("textureOffset"),0);typeof o=="number"&&(o=[o,o]),typeof s=="number"&&(s=[s,s]);var l=o[0]>1||o[1]>1?G.Texture.REPEAT:G.Texture.CLAMP_TO_EDGE,u={anisotropic:8,wrapS:l,wrapT:l};if(e==="realistic"){var f=i.get("roughness"),c=i.get("metalness");c!=null?isNaN(c)&&(t.setTextureImage("metalnessMap",c,n,u),c=it.firstNotNull(i.get("metalnessAdjust"),.5)):c=0,f!=null?isNaN(f)&&(t.setTextureImage("roughnessMap",f,n,u),f=it.firstNotNull(i.get("roughnessAdjust"),.5)):f=.5;var d=i.get("normalTexture");t.setTextureImage("detailMap",a,n,u),t.setTextureImage("normalMap",d,n,u),t.set({roughness:f,metalness:c,detailUvRepeat:o,detailUvOffset:s})}else if(e==="lambert")t.setTextureImage("detailMap",a,n,u),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="color")t.setTextureImage("detailMap",a,n,u),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="hatching"){var h=i.get("hatchingTextures")||[];h.length<6;for(var v=0;v<6;v++)t.setTextureImage("hatch"+(v+1),h[v],n,{anisotropic:8,wrapS:G.Texture.REPEAT,wrapT:G.Texture.REPEAT});t.set({detailUvRepeat:o,detailUvOffset:s})}};G.updateVertexAnimation=function(e,t,r,n){var i=n.get("animation"),a=n.get("animationDurationUpdate"),o=n.get("animationEasingUpdate"),s=r.shadowDepthMaterial;if(i&&t&&a>0&&t.geometry.vertexCount===r.geometry.vertexCount){r.material.define("vertex","VERTEX_ANIMATION"),r.ignorePreZ=!0,s&&s.define("vertex","VERTEX_ANIMATION");for(var l=0;l<e.length;l++)r.geometry.attributes[e[l][0]].value=t.geometry.attributes[e[l][1]].value;r.geometry.dirty(),r.__percent=0,r.material.set("percent",0),r.stopAnimation(),r.animate().when(a,{__percent:1}).during(function(){r.material.set("percent",r.__percent),s&&s.set("percent",r.__percent)}).done(function(){r.ignorePreZ=!1,r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")}).start(o)}else r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")};var F=G,ba;ba=typeof window!="undefined"&&(window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.msRequestAnimationFrame&&window.msRequestAnimationFrame.bind(window)||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(e){return setTimeout(e,16)};var Bu=ba,oe=function(e,t){this.id=e,this.zr=t;try{this.renderer=new ar({clearBit:0,devicePixelRatio:t.painter.dpr,preserveDrawingBuffer:!0,premultipliedAlpha:!0}),this.renderer.resize(t.painter.getWidth(),t.painter.getHeight())}catch(n){this.renderer=null,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute; left: 0; top: 0; right: 0; bottom: 0;",this.dom.className="ecgl-nowebgl",this.dom.innerHTML="Sorry, your browser does not support WebGL",console.error(n);return}this.onglobalout=this.onglobalout.bind(this),t.on("globalout",this.onglobalout),this.dom=this.renderer.canvas;var r=this.dom.style;r.position="absolute",r.left="0",r.top="0",this.views=[],this._picking=new Us({renderer:this.renderer}),this._viewsToDispose=[],this._accumulatingId=0,this._zrEventProxy=new vi({shape:{x:-1,y:-1,width:2,height:2},__isGLToZRProxy:!0}),this._backgroundColor=null,this._disposed=!1};oe.prototype.setUnpainted=function(){};oe.prototype.addView=function(e){if(e.layer!==this){var t=this._viewsToDispose.indexOf(e);t>=0&&this._viewsToDispose.splice(t,1),this.views.push(e),e.layer=this;var r=this.zr;e.scene.traverse(function(n){n.__zr=r,n.addAnimatorsToZr&&n.addAnimatorsToZr(r)})}};function Ca(e){var t=e.__zr;e.__zr=null,t&&e.removeAnimatorsFromZr&&e.removeAnimatorsFromZr(t)}oe.prototype.removeView=function(e){if(e.layer===this){var t=this.views.indexOf(e);t>=0&&(this.views.splice(t,1),e.scene.traverse(Ca,this),e.layer=null,this._viewsToDispose.push(e))}};oe.prototype.removeViewsAll=function(){this.views.forEach(function(e){e.scene.traverse(Ca,this),e.layer=null,this._viewsToDispose.push(e)},this),this.views.length=0};oe.prototype.resize=function(e,t){var r=this.renderer;r.resize(e,t)};oe.prototype.clear=function(){var e=this.renderer.gl,t=this._backgroundColor||[0,0,0,0];e.clearColor(t[0],t[1],t[2],t[3]),e.depthMask(!0),e.colorMask(!0,!0,!0,!0),e.clear(e.DEPTH_BUFFER_BIT|e.COLOR_BUFFER_BIT)};oe.prototype.clearDepth=function(){var e=this.renderer.gl;e.clear(e.DEPTH_BUFFER_BIT)};oe.prototype.clearColor=function(){var e=this.renderer.gl;e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)};oe.prototype.needsRefresh=function(){this.zr.refresh()};oe.prototype.refresh=function(e){this._backgroundColor=e?F.parseColor(e):[0,0,0,0],this.renderer.clearColor=this._backgroundColor;for(var t=0;t<this.views.length;t++)this.views[t].prepareRender(this.renderer);this._doRender(!1),this._trackAndClean();for(var t=0;t<this._viewsToDispose.length;t++)this._viewsToDispose[t].dispose(this.renderer);this._viewsToDispose.length=0,this._startAccumulating()};oe.prototype.renderToCanvas=function(e){this._startAccumulating(!0),e.drawImage(this.dom,0,0,e.canvas.width,e.canvas.height)};oe.prototype._doRender=function(e){this.clear(),this.renderer.saveViewport();for(var t=0;t<this.views.length;t++)this.views[t].render(this.renderer,e);this.renderer.restoreViewport()};oe.prototype._stopAccumulating=function(){this._accumulatingId=0,clearTimeout(this._accumulatingTimeout)};var Uu=1;oe.prototype._startAccumulating=function(e){var t=this;this._stopAccumulating();for(var r=!1,n=0;n<this.views.length;n++)r=this.views[n].needsAccumulate()||r;if(!r)return;function i(a){if(!(!t._accumulatingId||a!==t._accumulatingId)){for(var o=!0,s=0;s<t.views.length;s++)o=t.views[s].isAccumulateFinished()&&r;o||(t._doRender(!0),e?i(a):Bu(function(){i(a)}))}}this._accumulatingId=Uu++,e?i(t._accumulatingId):this._accumulatingTimeout=setTimeout(function(){i(t._accumulatingId)},50)};oe.prototype._trackAndClean=function(){var e=[],t=[];this._textureList&&(en(this._textureList),en(this._geometriesList));for(var r=0;r<this.views.length;r++)Hu(this.views[r].scene,e,t);this._textureList&&(tn(this.renderer,this._textureList),tn(this.renderer,this._geometriesList)),this._textureList=e,this._geometriesList=t};function en(e){for(var t=0;t<e.length;t++)e[t].__used__=0}function tn(e,t){for(var r=0;r<t.length;r++)t[r].__used__||t[r].dispose(e)}function rn(e,t){e.__used__=e.__used__||0,e.__used__++,e.__used__===1&&t.push(e)}function Hu(e,t,r){var n,i;e.traverse(function(o){if(o.isRenderable()){var s=o.geometry,l=o.material;if(l!==n)for(var u=l.getTextureUniforms(),f=0;f<u.length;f++){var c=u[f],d=l.uniforms[c].value;if(!!d){if(d instanceof W)rn(d,t);else if(d instanceof Array)for(var h=0;h<d.length;h++)d[h]instanceof W&&rn(d[h],t)}}s!==i&&rn(s,r),n=l,i=s}});for(var a=0;a<e.lights.length;a++)e.lights[a].cubemap&&rn(e.lights[a].cubemap,t)}oe.prototype.dispose=function(){this._disposed||(this._stopAccumulating(),this._textureList&&(en(this._textureList),en(this._geometriesList),tn(this.renderer,this._textureList),tn(this.renderer,this._geometriesList)),this.zr.off("globalout",this.onglobalout),this._disposed=!0)};oe.prototype.onmousedown=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mousedown",e,t),this._dispatchDataEvent("mousedown",e,t)),this._downX=e.offsetX,this._downY=e.offsetY}};oe.prototype.onmousemove=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY),r=t&&t.target,n=this._hovered;this._hovered=t,n&&r!==n.target&&(n.relatedTarget=r,this._dispatchEvent("mouseout",e,n),this.zr.setCursorStyle("default")),this._dispatchEvent("mousemove",e,t),t&&(this.zr.setCursorStyle("pointer"),(!n||r!==n.target)&&this._dispatchEvent("mouseover",e,t)),this._dispatchDataEvent("mousemove",e,t)}};oe.prototype.onmouseup=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mouseup",e,t),this._dispatchDataEvent("mouseup",e,t)),this._upX=e.offsetX,this._upY=e.offsetY}};oe.prototype.onclick=oe.prototype.dblclick=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){var t=this._upX-this._downX,r=this._upY-this._downY;if(!(Math.sqrt(t*t+r*r)>20)){e=e.event;var n=this.pickObject(e.offsetX,e.offsetY);n&&(this._dispatchEvent(e.type,e,n),this._dispatchDataEvent(e.type,e,n));var i=this._clickToSetFocusPoint(e);if(i){var a=i.view.setDOFFocusOnPoint(i.distance);a&&this.zr.refresh()}}}};oe.prototype._clickToSetFocusPoint=function(e){for(var t=this.renderer,r=t.viewport,n=this.views.length-1;n>=0;n--){var i=this.views[n];if(i.hasDOF()&&i.containPoint(e.offsetX,e.offsetY)){this._picking.scene=i.scene,this._picking.camera=i.camera,t.viewport=i.viewport;var a=this._picking.pick(e.offsetX,e.offsetY,!0);if(a)return a.view=i,a}}t.viewport=r};oe.prototype.onglobalout=function(e){var t=this._hovered;t&&this._dispatchEvent("mouseout",e,{target:t.target})};oe.prototype.pickObject=function(e,t){for(var r=[],n=this.renderer,i=n.viewport,a=0;a<this.views.length;a++){var o=this.views[a];o.containPoint(e,t)&&(this._picking.scene=o.scene,this._picking.camera=o.camera,n.viewport=o.viewport,this._picking.pickAll(e,t,r))}return n.viewport=i,r.sort(function(s,l){return s.distance-l.distance}),r[0]};oe.prototype._dispatchEvent=function(e,t,r){r||(r={});var n=r.target;for(r.cancelBubble=!1,r.event=t,r.type=e,r.offsetX=t.offsetX,r.offsetY=t.offsetY;n&&(n.trigger(e,r),n=n.getParent(),!r.cancelBubble););this._dispatchToView(e,r)};oe.prototype._dispatchDataEvent=function(e,t,r){var n=r&&r.target,i=n&&n.dataIndex,a=n&&n.seriesIndex,o=n&&n.eventData,s=!1,l=this._zrEventProxy;l.x=t.offsetX,l.y=t.offsetY,l.update();var u={target:l};const f=Oo(l);e==="mousemove"&&(i!=null?i!==this._lastDataIndex&&(parseInt(this._lastDataIndex,10)>=0&&(f.dataIndex=this._lastDataIndex,f.seriesIndex=this._lastSeriesIndex,this.zr.handler.dispatchToElement(u,"mouseout",t)),s=!0):o!=null&&o!==this._lastEventData&&(this._lastEventData!=null&&(f.eventData=this._lastEventData,this.zr.handler.dispatchToElement(u,"mouseout",t)),s=!0),this._lastEventData=o,this._lastDataIndex=i,this._lastSeriesIndex=a),f.eventData=o,f.dataIndex=i,f.seriesIndex=a,(o!=null||parseInt(i,10)>=0&&parseInt(a,10)>=0)&&(this.zr.handler.dispatchToElement(u,e,t),s&&this.zr.handler.dispatchToElement(u,"mouseover",t))};oe.prototype._dispatchToView=function(e,t){for(var r=0;r<this.views.length;r++)this.views[r].containPoint(t.offsetX,t.offsetY)&&this.views[r].trigger(e,t)};Object.assign(oe.prototype,hn);var Ra=oe,zu=["bar3D","line3D","map3D","scatter3D","surface","lines3D","scatterGL","scatter3D"];function yr(e,t){if(e&&e[t]&&(e[t].normal||e[t].emphasis)){var r=e[t].normal,n=e[t].emphasis;r&&(e[t]=r),n&&(e.emphasis=e.emphasis||{},e.emphasis[t]=n)}}function Gu(e){yr(e,"itemStyle"),yr(e,"lineStyle"),yr(e,"areaStyle"),yr(e,"label")}function nn(e){!e||(e instanceof Array||(e=[e]),rr(e,function(t){if(t.axisLabel){var r=t.axisLabel;Object.assign(r,r.textStyle),r.textStyle=null}}))}function Vu(e){rr(e.series,function(t){Fo(zu,t.type)>=0&&(Gu(t),t.coordinateSystem==="mapbox"&&(t.coordinateSystem="mapbox3D",e.mapbox3D=e.mapbox))}),nn(e.xAxis3D),nn(e.yAxis3D),nn(e.zAxis3D),nn(e.grid3D),yr(e.geo3D)}function La(e){this._layers={},this._zr=e}La.prototype.update=function(e,t){var r=this,n=t.getZr();if(!n.getWidth()||!n.getHeight()){console.warn("Dom has no width or height");return}function i(s){n.setSleepAfterStill(0);var l;s.coordinateSystem&&s.coordinateSystem.model,l=s.get("zlevel");var u=r._layers,f=u[l];if(!f){if(f=u[l]=new Ra("gl-"+l,n),n.painter.isSingleCanvas()){f.virtual=!0;var c=new zo({z:1e4,style:{image:f.renderer.canvas},silent:!0});f.__hostImage=c,n.add(c)}n.painter.insertLayer(l,f)}return f.__hostImage&&f.__hostImage.setStyle({width:f.renderer.getWidth(),height:f.renderer.getHeight()}),f}function a(s,l){s&&s.traverse(function(u){u.isRenderable&&u.isRenderable()&&(u.ignorePicking=u.$ignorePicking!=null?u.$ignorePicking:l)})}for(var o in this._layers)this._layers[o].removeViewsAll();e.eachComponent(function(s,l){if(s!=="series"){var u=t.getViewOfComponentModel(l),f=l.coordinateSystem;if(u.__ecgl__){var c;if(f){if(!f.viewGL){console.error("Can't find viewGL in coordinateSystem of component "+l.id);return}c=f.viewGL}else{if(!l.viewGL){console.error("Can't find viewGL of component "+l.id);return}c=f.viewGL}var c=f.viewGL,d=i(l);d.addView(c),u.afterRender&&u.afterRender(l,e,t,d),a(u.groupGL,l.get("silent"))}}}),e.eachSeries(function(s){var l=t.getViewOfSeriesModel(s),u=s.coordinateSystem;if(l.__ecgl__){if(u&&!u.viewGL&&!l.viewGL){console.error("Can't find viewGL of series "+l.id);return}var f=u&&u.viewGL||l.viewGL,c=i(s);c.addView(f),l.afterRender&&l.afterRender(s,e,t,c),a(l.groupGL,s.get("silent"))}})};Bo(function(e){var t=e.getZr(),r=t.painter.dispose;t.painter.dispose=function(){this.eachOtherLayer(function(n){n instanceof Ra&&n.dispose()}),r.call(this)},t.painter.getRenderedCanvas=function(n){if(n=n||{},this._singleCanvas)return this._layers[0].dom;var i=document.createElement("canvas"),a=n.pixelRatio||this.dpr;i.width=this.getWidth()*a,i.height=this.getHeight()*a;var o=i.getContext("2d");o.dpr=a,o.clearRect(0,0,i.width,i.height),n.backgroundColor&&(o.fillStyle=n.backgroundColor,o.fillRect(0,0,i.width,i.height));var s=this.storage.getDisplayList(!0),l={},u,f=this;function c(p,m){var _=f._zlevelList;p==null&&(p=-1/0);for(var x,T=0;T<_.length;T++){var y=_[T],E=f._layers[y];if(!E.__builtin__&&y>p&&y<m){x=E;break}}x&&x.renderToCanvas&&(o.save(),x.renderToCanvas(o),o.restore())}for(var d={ctx:o},h=0;h<s.length;h++){var v=s[h];v.zlevel!==u&&(c(u,v.zlevel),u=v.zlevel),this._doPaintEl(v,d,!0,null,l)}return c(u,1/0),i}});Uo(function(e,t){var r=t.getZr(),n=r.__egl=r.__egl||new La(r);n.update(e,t)});Ho(Vu);var xr={vec2:I,vec3:g,vec4:M,mat2:de,mat2d:me,mat3:$,mat4:w,quat:k},ku={defaultOption:{shading:null,realisticMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},lambertMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},colorMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},hatchingMaterial:{textureTiling:1,textureOffset:0,paperColor:"#fff"}}};function Na(e,t){const r=e.getItemVisual(t,"style");if(r){const n=e.getVisual("drawType");return r[n]}}function Ma(e,t){const r=e.getItemVisual(t,"style");return r&&r.opacity}var Wu={convertToDynamicArray:function(e){e&&this.resetOffset();var t=this.attributes;for(var r in t)e||!t[r].value?t[r].value=[]:t[r].value=Array.prototype.slice.call(t[r].value);e||!this.indices?this.indices=[]:this.indices=Array.prototype.slice.call(this.indices)},convertToTypedArray:function(){var e=this.attributes;for(var t in e)e[t].value&&e[t].value.length>0?e[t].value=new Float32Array(e[t].value):e[t].value=null;this.indices&&this.indices.length>0&&(this.indices=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices)),this.dirty()}},Jn=xr.vec3,Da=[[0,0],[1,1]],Pa=We.extend(function(){return{segmentScale:1,dynamic:!0,useNativeLine:!0,attributes:{position:new We.Attribute("position","float",3,"POSITION"),positionPrev:new We.Attribute("positionPrev","float",3),positionNext:new We.Attribute("positionNext","float",3),prevPositionPrev:new We.Attribute("prevPositionPrev","float",3),prevPosition:new We.Attribute("prevPosition","float",3),prevPositionNext:new We.Attribute("prevPositionNext","float",3),offset:new We.Attribute("offset","float",1),color:new We.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.positionPrev.init(e),t.positionNext.init(e),t.offset.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,r,n){var i=Jn.dist(e,t)+Jn.dist(r,t)+Jn.dist(n,r),a=1/(i+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,r,n){var i=this._getCubicCurveApproxStep(e,t,r,n),a=Math.ceil(1/i);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,r,n){var i=this._getCubicCurveApproxStep(e,t,r,n),a=Math.ceil(1/i);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(Da)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(Da)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?0:Math.max(t-1,0)*2},addCubicCurve:function(e,t,r,n,i,a){a==null&&(a=1);for(var o=e[0],s=e[1],l=e[2],u=t[0],f=t[1],c=t[2],d=r[0],h=r[1],v=r[2],p=n[0],m=n[1],_=n[2],x=this._getCubicCurveApproxStep(e,t,r,n),T=x*x,y=T*x,E=3*x,S=3*T,L=6*T,R=6*y,N=o-u*2+d,X=s-f*2+h,D=l-c*2+v,V=(u-d)*3-o+p,B=(f-h)*3-s+m,P=(c-v)*3-l+_,U=o,q=s,te=l,be=(u-o)*E+N*S+V*y,Ce=(f-s)*E+X*S+B*y,ze=(c-l)*E+D*S+P*y,Xe=N*L+V*R,Oe=X*L+B*R,Fe=D*L+P*R,Qe=V*R,Je=B*R,qe=P*R,Jt=0,at=0,Ft=Math.ceil(1/x),er=new Float32Array((Ft+1)*3),er=[],ln=0,at=0;at<Ft+1;at++)er[ln++]=U,er[ln++]=q,er[ln++]=te,U+=be,q+=Ce,te+=ze,be+=Xe,Ce+=Oe,ze+=Fe,Xe+=Qe,Oe+=Je,Fe+=qe,Jt+=x,Jt>1&&(U=be>0?Math.min(U,p):Math.max(U,p),q=Ce>0?Math.min(q,m):Math.max(q,m),te=ze>0?Math.min(te,_):Math.max(te,_));return this.addPolyline(er,i,a)},addLine:function(e,t,r,n){return this.addPolyline([e,t],r,n)},addPolyline:function(e,t,r,n,i){if(!!e.length){var a=typeof e[0]!="number";if(i==null&&(i=a?e.length:e.length/3),!(i<2)){n==null&&(n=0),r==null&&(r=1),this._itemVertexOffsets.push(this._vertexOffset);var a=typeof e[0]!="number",o=a?typeof t[0]!="number":t.length/4===i,s=this.attributes.position,l=this.attributes.positionPrev,u=this.attributes.positionNext,f=this.attributes.color,c=this.attributes.offset,d=this.indices,h=this._vertexOffset,v,p;r=Math.max(r,.01);for(var m=n;m<i;m++){if(a)v=e[m],o?p=t[m]:p=t;else{var _=m*3;if(v=v||[],v[0]=e[_],v[1]=e[_+1],v[2]=e[_+2],o){var x=m*4;p=p||[],p[0]=t[x],p[1]=t[x+1],p[2]=t[x+2],p[3]=t[x+3]}else p=t}if(this.useNativeLine?m>1&&(s.copy(h,h-1),f.copy(h,h-1),h++):(m<i-1&&(l.set(h+2,v),l.set(h+3,v)),m>0&&(u.set(h-2,v),u.set(h-1,v)),s.set(h,v),s.set(h+1,v),f.set(h,p),f.set(h+1,p),c.set(h,r/2),c.set(h+1,-r/2),h+=2),this.useNativeLine)f.set(h,p),s.set(h,v),h++;else if(m>0){var T=this._triangleOffset*3,d=this.indices;d[T]=h-4,d[T+1]=h-3,d[T+2]=h-2,d[T+3]=h-3,d[T+4]=h-1,d[T+5]=h-2,this._triangleOffset+=2}}if(!this.useNativeLine){var y=this._vertexOffset,E=this._vertexOffset+i*2;l.copy(y,y+2),l.copy(y+1,y+3),u.copy(E-1,E-3),u.copy(E-2,E-4)}return this._vertexOffset=h,this._vertexOffset}}},setItemColor:function(e,t){for(var r=this._itemVertexOffsets[e],n=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,i=r;i<n;i++)this.attributes.color.set(i,t);this.dirty("color")},currentTriangleOffset:function(){return this._triangleOffset},currentVertexOffset:function(){return this._vertexOffset}});Go(Pa.prototype,Wu);var Ia=Pa,Xu=`@export ecgl.lines3D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

void main()
{
 gl_Position = worldViewProjection * vec4(position, 1.0);
 v_Color = a_Color;
}

@end

@export ecgl.lines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif
}
@end



@export ecgl.lines3D.clipNear

vec4 clipNear(vec4 p1, vec4 p2) {
 float n = (p1.w - near) / (p1.w - p2.w);
 return vec4(mix(p1.xy, p2.xy, n), -near, near);
}

@end

@export ecgl.lines3D.expandLine
#ifdef VERTEX_ANIMATION
 vec4 prevProj = worldViewProjection * vec4(mix(prevPositionPrev, positionPrev, percent), 1.0);
 vec4 currProj = worldViewProjection * vec4(mix(prevPosition, position, percent), 1.0);
 vec4 nextProj = worldViewProjection * vec4(mix(prevPositionNext, positionNext, percent), 1.0);
#else
 vec4 prevProj = worldViewProjection * vec4(positionPrev, 1.0);
 vec4 currProj = worldViewProjection * vec4(position, 1.0);
 vec4 nextProj = worldViewProjection * vec4(positionNext, 1.0);
#endif

 if (currProj.w < 0.0) {
 if (nextProj.w > 0.0) {
 currProj = clipNear(currProj, nextProj);
 }
 else if (prevProj.w > 0.0) {
 currProj = clipNear(currProj, prevProj);
 }
 }

 vec2 prevScreen = (prevProj.xy / abs(prevProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 currScreen = (currProj.xy / abs(currProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 nextScreen = (nextProj.xy / abs(nextProj.w) + 1.0) * 0.5 * viewport.zw;

 vec2 dir;
 float len = offset;
 if (position == positionPrev) {
 dir = normalize(nextScreen - currScreen);
 }
 else if (position == positionNext) {
 dir = normalize(currScreen - prevScreen);
 }
 else {
 vec2 dirA = normalize(currScreen - prevScreen);
 vec2 dirB = normalize(nextScreen - currScreen);

 vec2 tanget = normalize(dirA + dirB);

 float miter = 1.0 / max(dot(tanget, dirA), 0.5);
 len *= miter;
 dir = tanget;
 }

 dir = vec2(-dir.y, dir.x) * len;
 currScreen += dir;

 currProj.xy = (currScreen / viewport.zw - 0.5) * 2.0 * abs(currProj.w);
@end


@export ecgl.meshLines3D.vertex

attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute vec4 a_Color : COLOR;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevPositionPrev;
attribute vec3 prevPositionNext;
uniform float percent : 1.0;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

varying vec4 v_Color;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain
}
@end


@export ecgl.meshLines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain
}

@end`,ye=xr.vec3,Oa=xr.vec2,dt=ye.normalize,an=ye.cross,Fa=ye.sub,ei=ye.add,Tt=ye.create,Et=Tt(),Ze=Tt(),At=Tt(),Tr=Tt(),Ba=[],Ua=[];function qu(e,t){Oa.copy(Ba,e[0]),Oa.copy(Ua,e[1]);var r=[],n=r[0]=Tt(),i=r[1]=Tt(),a=r[2]=Tt(),o=r[3]=Tt();t.dataToPoint(Ba,n),t.dataToPoint(Ua,o),dt(Et,n),Fa(Ze,o,n),dt(Ze,Ze),an(At,Ze,Et),dt(At,At),an(Ze,Et,At),ei(i,Et,Ze),dt(i,i),dt(Et,o),Fa(Ze,n,o),dt(Ze,Ze),an(At,Ze,Et),dt(At,At),an(Ze,Et,At),ei(a,Et,Ze),dt(a,a),ei(Tr,n,o),dt(Tr,Tr);var s=ye.dot(n,Tr),l=ye.dot(Tr,i),u=(Math.max(ye.len(n),ye.len(o))-s)/l*2;return ye.scaleAndAdd(i,n,i,u),ye.scaleAndAdd(a,o,a,u),r}function ju(e,t,r){var n=[],i=n[0]=ye.create(),a=n[1]=ye.create(),o=n[2]=ye.create(),s=n[3]=ye.create();t.dataToPoint(e[0],i),t.dataToPoint(e[1],s);var l=ye.dist(i,s);return ye.lerp(a,i,s,.3),ye.lerp(o,i,s,.3),ye.scaleAndAdd(a,a,r,Math.min(l*.1,10)),ye.scaleAndAdd(o,o,r,Math.min(l*.1,10)),n}function Ha(e,t){for(var r=new Float32Array(e.length*3),n=0,i=[],a=0;a<e.length;a++)t.dataToPoint(e[a],i),r[n++]=i[0],r[n++]=i[1],r[n++]=i[2];return r}function za(e){var t=[];return e.each(function(r){var n=e.getItemModel(r),i=n.option instanceof Array?n.option:n.getShallow("coords",!0);t.push(i)}),{coordsList:t}}function Yu(e,t){var r=e.getData(),n=e.get("polyline");r.setLayout("lineType",n?"polyline":"cubicBezier");var i=za(r);r.each(function(a){var o=i.coordsList[a],s=n?Ha:qu;r.setItemLayout(a,s(o,t))})}function Ga(e,t,r){var n=e.getData(),i=e.get("polyline"),a=za(n);n.setLayout("lineType",i?"polyline":"cubicBezier"),n.each(function(o){var s=a.coordsList[o],l=i?Ha(s,t):ju(s,t,r);n.setItemLayout(o,l)})}function Ku(e,t){e.eachSeriesByType("lines3D",function(r){var n=r.coordinateSystem;n.type==="globe"?Yu(r,n):n.type==="geo3D"?Ga(r,n,[0,1,0]):(n.type==="mapbox3D"||n.type==="maptalks3D")&&Ga(r,n,[0,0,1])})}var Zu=Vo.extend({type:"series.lines3D",dependencies:["globe"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,t){var r=new ko(["value"],this);return r.hasItemOption=!1,r.initData(e.data,[],function(n,i,a,o){if(n instanceof Array)return NaN;r.hasItemOption=!0;var s=n.value;if(s!=null)return s instanceof Array?s[o]:s}),r},defaultOption:{coordinateSystem:"globe",globeIndex:0,geo3DIndex:0,zlevel:-10,polyline:!1,effect:{show:!1,period:4,trailWidth:4,trailLength:.2,spotIntensity:6},silent:!0,blendMode:"source-over",lineStyle:{width:1,opacity:.5}}}),$u=`@export ecgl.trail2.vertex
attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute float dist;
attribute float distAll;
attribute float start;

attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

uniform float speed : 0;
uniform float trailLength: 0.3;
uniform float time;
uniform float period: 1000;

uniform float spotSize: 1;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain

#ifdef CONSTANT_SPEED
 float t = mod((speed * time + start) / distAll, 1. + trailLength) - trailLength;
#else
 float t = mod((time + start) / period, 1. + trailLength) - trailLength;
#endif

 float trailLen = distAll * trailLength;

 v_Percent = (dist - t * distAll) / trailLen;

 v_SpotPercent = spotSize / distAll;

 }
@end


@export ecgl.trail2.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform float spotIntensity: 5;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
 if (v_Percent > 1.0 || v_Percent < 0.0) {
 discard;
 }

 float fade = v_Percent;

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain

 if (v_Percent > (1.0 - v_SpotPercent)) {
 gl_FragColor.rgb *= spotIntensity;
 }

 gl_FragColor.a *= fade;
}

@end`,Va=xr.vec3;function Qu(e){return e>0?1:-1}F.Shader.import($u);var Ju=F.Mesh.extend(function(){var e=new F.Material({shader:new F.Shader(F.Shader.source("ecgl.trail2.vertex"),F.Shader.source("ecgl.trail2.fragment")),transparent:!0,depthMask:!1}),t=new Ia({dynamic:!0});return t.createAttribute("dist","float",1),t.createAttribute("distAll","float",1),t.createAttribute("start","float",1),{geometry:t,material:e,culling:!1,$ignorePicking:!0}},{updateData:function(e,t,r){var n=e.hostModel,i=this.geometry,a=n.getModel("effect"),o=a.get("trailWidth")*t.getDevicePixelRatio(),s=a.get("trailLength"),l=n.get("effect.constantSpeed"),u=n.get("effect.period")*1e3,f=l!=null;f?this.material.set("speed",l/1e3):this.material.set("period",u),this.material[f?"define":"undefine"]("vertex","CONSTANT_SPEED");var c=n.get("polyline");i.trailLength=s,this.material.set("trailLength",s),i.resetOffset(),["position","positionPrev","positionNext"].forEach(function(L){i.attributes[L].value=r.attributes[L].value});var d=["dist","distAll","start","offset","color"];d.forEach(function(L){i.attributes[L].init(i.vertexCount)}),i.indices=r.indices;var h=[],v=a.get("trailColor"),p=a.get("trailOpacity"),m=v!=null,_=p!=null;this.updateWorldTransform();var x=this.worldTransform.x.len(),T=this.worldTransform.y.len(),y=this.worldTransform.z.len(),E=0,S=0;e.each(function(L){var R=e.getItemLayout(L),N=_?p:Ma(e,L),X=Na(e,L);N==null&&(N=1),h=F.parseColor(m?v:X,h),h[3]*=N;for(var D=c?r.getPolylineVertexCount(R):r.getCubicCurveVertexCount(R[0],R[1],R[2],R[3]),V=0,B=[],P=[],U=E;U<E+D;U++)i.attributes.position.get(U,B),B[0]*=x,B[1]*=T,B[2]*=y,U>E&&(V+=Va.dist(B,P)),i.attributes.dist.set(U,V),Va.copy(P,B);S=Math.max(S,V);for(var q=Math.random()*(f?V:u),U=E;U<E+D;U++)i.attributes.distAll.set(U,V),i.attributes.start.set(U,q),i.attributes.offset.set(U,Qu(r.attributes.offset.get(U))*o/2),i.attributes.color.set(U,h);E+=D}),this.material.set("spotSize",S*.1*s),this.material.set("spotIntensity",a.get("spotIntensity")),i.dirty()},setAnimationTime:function(e){this.material.set("time",e)}});F.Shader.import(Xu);function ef(e){return e.radius!=null?e.radius:e.size!=null?Math.max(e.size[0],e.size[1],e.size[2]):100}var tf=Wo.extend({type:"lines3D",__ecgl__:!0,init:function(e,t){this.groupGL=new F.Node,this._meshLinesMaterial=new F.Material({shader:F.createShader("ecgl.meshLines3D"),transparent:!0,depthMask:!1}),this._linesMesh=new F.Mesh({geometry:new Ia,material:this._meshLinesMaterial,$ignorePicking:!0}),this._trailMesh=new Ju},render:function(e,t,r){this.groupGL.add(this._linesMesh);var n=e.coordinateSystem,i=e.getData();if(n&&n.viewGL){var a=n.viewGL;a.add(this.groupGL),this._updateLines(e,t,r);var o=n.viewGL.isLinearSpace()?"define":"undefine";this._linesMesh.material[o]("fragment","SRGB_DECODE"),this._trailMesh.material[o]("fragment","SRGB_DECODE")}var s=this._trailMesh;if(s.stopAnimation(),e.get("effect.show")){this.groupGL.add(s),s.updateData(i,r,this._linesMesh.geometry),s.__time=s.__time||0;var l=3600*1e3;this._curveEffectsAnimator=s.animate("",{loop:!0}).when(l,{__time:l}).during(function(){s.setAnimationTime(s.__time)}).start()}else this.groupGL.remove(s),this._curveEffectsAnimator=null;this._linesMesh.material.blend=this._trailMesh.material.blend=e.get("blendMode")==="lighter"?F.additiveBlend:null},pauseEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.pause()},resumeEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.resume()},toggleEffect:function(){var e=this._curveEffectsAnimator;e&&(e.isPaused()?e.resume():e.pause())},_updateLines:function(e,t,r){var n=e.getData(),i=e.coordinateSystem,a=this._linesMesh.geometry,o=e.get("polyline");a.expandLine=!0;var s=ef(i);a.segmentScale=s/20;var l="lineStyle.width".split("."),u=r.getDevicePixelRatio();n.each(function(h){var v=n.getItemModel(h),p=v.get(l);p==null&&(p=1),n.setItemVisual(h,"lineWidth",p)}),a.useNativeLine=!1;var f=0,c=0;n.each(function(h){var v=n.getItemLayout(h);o?(f+=a.getPolylineVertexCount(v),c+=a.getPolylineTriangleCount(v)):(f+=a.getCubicCurveVertexCount(v[0],v[1],v[2],v[3]),c+=a.getCubicCurveTriangleCount(v[0],v[1],v[2],v[3]))}),a.setVertexCount(f),a.setTriangleCount(c),a.resetOffset();var d=[];n.each(function(h){var v=n.getItemLayout(h),p=Na(n,h),m=Ma(n,h),_=n.getItemVisual(h,"lineWidth")*u;m==null&&(m=1),d=F.parseColor(p,d),d[3]*=m,o?a.addPolyline(v,d,_):a.addCubicCurve(v[0],v[1],v[2],v[3],d,_)}),a.dirty()},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function rf(e){e.registerChartView(tf),e.registerSeriesModel(Zu),e.registerLayout(Ku),e.registerAction({type:"lines3DPauseEffect",event:"lines3deffectpaused",update:"series.lines3D:pauseEffect"},function(){}),e.registerAction({type:"lines3DResumeEffect",event:"lines3deffectresumed",update:"series.lines3D:resumeEffect"},function(){}),e.registerAction({type:"lines3DToggleEffect",event:"lines3deffectchanged",update:"series.lines3D:toggleEffect"},function(){})}var nf={defaultOption:{viewControl:{projection:"perspective",autoRotate:!1,autoRotateDirection:"cw",autoRotateSpeed:10,autoRotateAfterStill:3,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",distance:150,minDistance:40,maxDistance:400,orthographicSize:150,maxOrthographicSize:400,minOrthographicSize:20,center:[0,0,0],alpha:0,beta:0,minAlpha:-90,maxAlpha:90}},setView:function(e){e=e||{},this.option.viewControl=this.option.viewControl||{},e.alpha!=null&&(this.option.viewControl.alpha=e.alpha),e.beta!=null&&(this.option.viewControl.beta=e.beta),e.distance!=null&&(this.option.viewControl.distance=e.distance),e.center!=null&&(this.option.viewControl.center=e.center)}},af={defaultOption:{postEffect:{enable:!1,bloom:{enable:!0,intensity:.1},depthOfField:{enable:!1,focalRange:20,focalDistance:50,blurRadius:10,fstop:2.8,quality:"medium"},screenSpaceAmbientOcclusion:{enable:!1,radius:2,quality:"medium",intensity:1},screenSpaceReflection:{enable:!1,quality:"medium",maxRoughness:.8},colorCorrection:{enable:!0,exposure:0,brightness:0,contrast:1,saturation:1,lookupTexture:""},edge:{enable:!1},FXAA:{enable:!1}},temporalSuperSampling:{enable:"auto"}}},of={defaultOption:{light:{main:{shadow:!1,shadowQuality:"high",color:"#fff",intensity:1,alpha:0,beta:0},ambient:{color:"#fff",intensity:.2},ambientCubemap:{texture:null,exposure:1,diffuseIntensity:.5,specularIntensity:.5}}}},ti=function(){this._pool={},this._allocatedTextures=[]};ti.prototype={constructor:ti,get:function(e){var t=Wa(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];if(!r.length){var n=new re(e);return this._allocatedTextures.push(n),n}return r.pop()},put:function(e){var t=Wa(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];r.push(e)},clear:function(e){for(var t=0;t<this._allocatedTextures.length;t++)this._allocatedTextures[t].dispose(e);this._pool={},this._allocatedTextures=[]}};var ka={width:512,height:512,type:A.UNSIGNED_BYTE,format:A.RGBA,wrapS:A.CLAMP_TO_EDGE,wrapT:A.CLAMP_TO_EDGE,minFilter:A.LINEAR_MIPMAP_LINEAR,magFilter:A.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,unpackAlignment:4,premultiplyAlpha:!1},ri=Object.keys(ka);function Wa(e){Ae.defaultsWithPropList(e,ka,ri),sf(e);for(var t="",r=0;r<ri.length;r++){var n=ri[r],i=e[n].toString();t+=i}return t}function sf(e){var t=lf(e.width,e.height);e.format===A.DEPTH_COMPONENT&&(e.useMipmap=!1),(!t||!e.useMipmap)&&(e.minFilter==A.NEAREST_MIPMAP_NEAREST||e.minFilter==A.NEAREST_MIPMAP_LINEAR?e.minFilter=A.NEAREST:(e.minFilter==A.LINEAR_MIPMAP_LINEAR||e.minFilter==A.LINEAR_MIPMAP_NEAREST)&&(e.minFilter=A.LINEAR)),t||(e.wrapS=A.CLAMP_TO_EDGE,e.wrapT=A.CLAMP_TO_EDGE)}function lf(e,t){return(e&e-1)==0&&(t&t-1)==0}var Xa=ti,uf=`@export clay.sm.depth.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
uniform vec2 uvRepeat = vec2(1.0, 1.0);
uniform vec2 uvOffset = vec2(0.0, 0.0);
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
void main(){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 v_ViewPosition = worldViewProjection * P;
 gl_Position = v_ViewPosition;
 v_Texcoord = texcoord * uvRepeat + uvOffset;
}
@end
@export clay.sm.depth.fragment
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
uniform float bias : 0.001;
uniform float slopeScale : 1.0;
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
@import clay.util.encode_float
void main(){
 float depth = v_ViewPosition.z / v_ViewPosition.w;
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
#ifdef USE_VSM
 depth = depth * 0.5 + 0.5;
 float moment1 = depth;
 float moment2 = depth * depth;
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 moment2 += 0.25*(dx*dx+dy*dy);
 #endif
 gl_FragColor = vec4(moment1, moment2, 0.0, 1.0);
#else
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 depth += sqrt(dx*dx + dy*dy) * slopeScale + bias;
 #else
 depth += bias;
 #endif
 gl_FragColor = encodeFloat(depth * 0.5 + 0.5);
#endif
}
@end
@export clay.sm.debug_depth
uniform sampler2D depthMap;
varying vec2 v_Texcoord;
@import clay.util.decode_float
void main() {
 vec4 tex = texture2D(depthMap, v_Texcoord);
#ifdef USE_VSM
 gl_FragColor = vec4(tex.rgb, 1.0);
#else
 float depth = decodeFloat(tex);
 gl_FragColor = vec4(depth, depth, depth, 1.0);
#endif
}
@end
@export clay.sm.distance.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 world : WORLD;
attribute vec3 position : POSITION;
@import clay.chunk.skinning_header
varying vec3 v_WorldPosition;
void main (){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = worldViewProjection * P;
 v_WorldPosition = (world * P).xyz;
}
@end
@export clay.sm.distance.fragment
uniform vec3 lightPosition;
uniform float range : 100;
varying vec3 v_WorldPosition;
@import clay.util.encode_float
void main(){
 float dist = distance(lightPosition, v_WorldPosition);
#ifdef USE_VSM
 gl_FragColor = vec4(dist, dist * dist, 0.0, 0.0);
#else
 dist = dist / range;
 gl_FragColor = encodeFloat(dist);
#endif
}
@end
@export clay.plugin.shadow_map_common
@import clay.util.decode_float
float tapShadowMap(sampler2D map, vec2 uv, float z){
 vec4 tex = texture2D(map, uv);
 return step(z, decodeFloat(tex) * 2.0 - 1.0);
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize, vec2 scale) {
 float shadowContrib = tapShadowMap(map, uv, z);
 vec2 offset = vec2(1.0 / textureSize) * scale;
#ifdef PCF_KERNEL_SIZE
 for (int _idx_ = 0; _idx_ < PCF_KERNEL_SIZE; _idx_++) {{
 shadowContrib += tapShadowMap(map, uv + offset * pcfKernel[_idx_], z);
 }}
 return shadowContrib / float(PCF_KERNEL_SIZE + 1);
#else
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, -offset.y), z);
 return shadowContrib / 9.0;
#endif
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize) {
 return pcf(map, uv, z, textureSize, vec2(1.0));
}
float chebyshevUpperBound(vec2 moments, float z){
 float p = 0.0;
 z = z * 0.5 + 0.5;
 if (z <= moments.x) {
 p = 1.0;
 }
 float variance = moments.y - moments.x * moments.x;
 variance = max(variance, 0.0000001);
 float mD = moments.x - z;
 float pMax = variance / (variance + mD * mD);
 pMax = clamp((pMax-0.4)/(1.0-0.4), 0.0, 1.0);
 return max(p, pMax);
}
float computeShadowContrib(
 sampler2D map, mat4 lightVPM, vec3 position, float textureSize, vec2 scale, vec2 offset
) {
 vec4 posInLightSpace = lightVPM * vec4(position, 1.0);
 posInLightSpace.xyz /= posInLightSpace.w;
 float z = posInLightSpace.z;
 if(all(greaterThan(posInLightSpace.xyz, vec3(-0.99, -0.99, -1.0))) &&
 all(lessThan(posInLightSpace.xyz, vec3(0.99, 0.99, 1.0)))){
 vec2 uv = (posInLightSpace.xy+1.0) / 2.0;
 #ifdef USE_VSM
 vec2 moments = texture2D(map, uv * scale + offset).xy;
 return chebyshevUpperBound(moments, z);
 #else
 return pcf(map, uv * scale + offset, z, textureSize, scale);
 #endif
 }
 return 1.0;
}
float computeShadowContrib(sampler2D map, mat4 lightVPM, vec3 position, float textureSize) {
 return computeShadowContrib(map, lightVPM, position, textureSize, vec2(1.0), vec2(0.0));
}
float computeShadowContribOmni(samplerCube map, vec3 direction, float range)
{
 float dist = length(direction);
 vec4 shadowTex = textureCube(map, direction);
#ifdef USE_VSM
 vec2 moments = shadowTex.xy;
 float variance = moments.y - moments.x * moments.x;
 float mD = moments.x - dist;
 float p = variance / (variance + mD * mD);
 if(moments.x + 0.001 < dist){
 return clamp(p, 0.0, 1.0);
 }else{
 return 1.0;
 }
#else
 return step(dist, (decodeFloat(shadowTex) + 0.0002) * range);
#endif
}
@end
@export clay.plugin.compute_shadow_map
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT) || defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT) || defined(POINT_LIGHT_SHADOWMAP_COUNT)
#ifdef SPOT_LIGHT_SHADOWMAP_COUNT
uniform sampler2D spotLightShadowMaps[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 spotLightMatrices[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float spotLightShadowMapSizes[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#ifdef DIRECTIONAL_LIGHT_SHADOWMAP_COUNT
#if defined(SHADOW_CASCADE)
uniform sampler2D directionalLightShadowMaps[1]:unconfigurable;
uniform mat4 directionalLightMatrices[SHADOW_CASCADE]:unconfigurable;
uniform float directionalLightShadowMapSizes[1]:unconfigurable;
uniform float shadowCascadeClipsNear[SHADOW_CASCADE]:unconfigurable;
uniform float shadowCascadeClipsFar[SHADOW_CASCADE]:unconfigurable;
#else
uniform sampler2D directionalLightShadowMaps[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 directionalLightMatrices[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float directionalLightShadowMapSizes[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#endif
#ifdef POINT_LIGHT_SHADOWMAP_COUNT
uniform samplerCube pointLightShadowMaps[POINT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
uniform bool shadowEnabled : true;
#ifdef PCF_KERNEL_SIZE
uniform vec2 pcfKernel[PCF_KERNEL_SIZE];
#endif
@import clay.plugin.shadow_map_common
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfSpotLights(vec3 position, inout float shadowContribs[SPOT_LIGHT_COUNT] ) {
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < SPOT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 spotLightShadowMaps[_idx_], spotLightMatrices[_idx_], position,
 spotLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = SPOT_LIGHT_SHADOWMAP_COUNT; _idx_ < SPOT_LIGHT_COUNT; _idx_++){{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
#ifdef SHADOW_CASCADE
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float depth = (2.0 * gl_FragCoord.z - gl_DepthRange.near - gl_DepthRange.far)
 / (gl_DepthRange.far - gl_DepthRange.near);
 float shadowContrib;
 shadowContribs[0] = 1.0;
 for (int _idx_ = 0; _idx_ < SHADOW_CASCADE; _idx_++) {{
 if (
 depth >= shadowCascadeClipsNear[_idx_] &&
 depth <= shadowCascadeClipsFar[_idx_]
 ) {
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[0], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[0],
 vec2(1.0 / float(SHADOW_CASCADE), 1.0),
 vec2(float(_idx_) / float(SHADOW_CASCADE), 0.0)
 );
 shadowContribs[0] = shadowContrib;
 }
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#else
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[_idx_], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
#if defined(POINT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfPointLights(vec3 position, inout float shadowContribs[POINT_LIGHT_COUNT] ){
 vec3 lightPosition;
 vec3 direction;
 for(int _idx_ = 0; _idx_ < POINT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 lightPosition = pointLightPosition[_idx_];
 direction = position - lightPosition;
 shadowContribs[_idx_] = computeShadowContribOmni(pointLightShadowMaps[_idx_], direction, pointLightRange[_idx_]);
 }}
 for(int _idx_ = POINT_LIGHT_SHADOWMAP_COUNT; _idx_ < POINT_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
@end`,St=["px","nx","py","ny","pz","nz"];b.import(uf);function ni(e,t,r){if(r==="alphaMap")return e.material.get("diffuseMap");if(r==="alphaCutoff"){if(e.material.isDefined("fragment","ALPHA_TEST")&&e.material.get("diffuseMap")){var n=e.material.get("alphaCutoff");return n||0}return 0}else return r==="uvRepeat"?e.material.get("uvRepeat"):r==="uvOffset"?e.material.get("uvOffset"):t.get(r)}function qa(e,t){var r=e.material,n=t.material;return r.get("diffuseMap")!==n.get("diffuseMap")||(r.get("alphaCutoff")||0)!==(n.get("alphaCutoff")||0)}var lt=Be.extend(function(){return{softShadow:lt.PCF,shadowBlur:1,lightFrustumBias:"auto",kernelPCF:new Float32Array([1,0,1,1,-1,1,0,1,-1,0,-1,-1,1,-1,0,-1]),precision:"highp",_lastRenderNotCastShadow:!1,_frameBuffer:new Re,_textures:{},_shadowMapNumber:{POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},_depthMaterials:{},_distanceMaterials:{},_receivers:[],_lightsCastShadow:[],_lightCameras:{},_lightMaterials:{},_texturePool:new Xa}},function(){this._gaussianPassH=new Pe({fragment:b.source("clay.compositor.gaussian_blur")}),this._gaussianPassV=new Pe({fragment:b.source("clay.compositor.gaussian_blur")}),this._gaussianPassH.setUniform("blurSize",this.shadowBlur),this._gaussianPassH.setUniform("blurDir",0),this._gaussianPassV.setUniform("blurSize",this.shadowBlur),this._gaussianPassV.setUniform("blurDir",1),this._outputDepthPass=new Pe({fragment:b.source("clay.sm.debug_depth")})},{render:function(e,t,r,n){r||(r=t.getMainCamera()),this.trigger("beforerender",this,e,t,r),this._renderShadowPass(e,t,r,n),this.trigger("afterrender",this,e,t,r)},renderDebug:function(e,t){e.saveClear();var r=e.viewport,n=0,i=0,a=t||r.width/4,o=a;this.softShadow===lt.VSM?this._outputDepthPass.material.define("fragment","USE_VSM"):this._outputDepthPass.material.undefine("fragment","USE_VSM");for(var s in this._textures){var l=this._textures[s];e.setViewport(n,i,a*l.width/l.height,o),this._outputDepthPass.setUniform("depthMap",l),this._outputDepthPass.render(e),n+=a*l.width/l.height}e.setViewport(r),e.restoreClear()},_updateReceivers:function(e,t){if(t.receiveShadow?(this._receivers.push(t),t.material.set("shadowEnabled",1),t.material.set("pcfKernel",this.kernelPCF)):t.material.set("shadowEnabled",0),this.softShadow===lt.VSM)t.material.define("fragment","USE_VSM"),t.material.undefine("fragment","PCF_KERNEL_SIZE");else{t.material.undefine("fragment","USE_VSM");var r=this.kernelPCF;r&&r.length?t.material.define("fragment","PCF_KERNEL_SIZE",r.length/2):t.material.undefine("fragment","PCF_KERNEL_SIZE")}},_update:function(e,t){var r=this;t.traverse(function(a){a.isRenderable()&&r._updateReceivers(e,a)});for(var n=0;n<t.lights.length;n++){var i=t.lights[n];i.castShadow&&!i.invisible&&this._lightsCastShadow.push(i)}},_renderShadowPass:function(e,t,r,n){for(var i in this._shadowMapNumber)this._shadowMapNumber[i]=0;this._lightsCastShadow.length=0,this._receivers.length=0;var a=e.gl;if(n||t.update(),r&&r.update(),t.updateLights(),this._update(e,t),!this._lightsCastShadow.length&&this._lastRenderNotCastShadow)return;this._lastRenderNotCastShadow=this._lightsCastShadow===0,a.enable(a.DEPTH_TEST),a.depthMask(!0),a.disable(a.BLEND),a.clearColor(1,1,1,1);for(var o=[],s=[],l=[],u=[],f=[],c=[],d,h=0;h<this._lightsCastShadow.length;h++){var v=this._lightsCastShadow[h];if(v.type==="DIRECTIONAL_LIGHT"){if(d){console.warn("Only one direectional light supported with shadow cascade");continue}if(v.shadowCascade>4){console.warn("Support at most 4 cascade");continue}v.shadowCascade>1&&(d=v),this.renderDirectionalLightShadow(e,t,r,v,f,u,l)}else v.type==="SPOT_LIGHT"?this.renderSpotLightShadow(e,t,v,s,o):v.type==="POINT_LIGHT"&&this.renderPointLightShadow(e,t,v,c);this._shadowMapNumber[v.type]++}for(var p in this._shadowMapNumber)for(var m=this._shadowMapNumber[p],_=p+"_SHADOWMAP_COUNT",h=0;h<this._receivers.length;h++){var x=this._receivers[h],T=x.material;T.fragmentDefines[_]!==m&&(m>0?T.define("fragment",_,m):T.isDefined("fragment",_)&&T.undefine("fragment",_))}for(var h=0;h<this._receivers.length;h++){var x=this._receivers[h],T=x.material;d?T.define("fragment","SHADOW_CASCADE",d.shadowCascade):T.undefine("fragment","SHADOW_CASCADE")}var y=t.shadowUniforms;function E(X){return X.height}if(l.length>0){var S=l.map(E);if(y.directionalLightShadowMaps={value:l,type:"tv"},y.directionalLightMatrices={value:u,type:"m4v"},y.directionalLightShadowMapSizes={value:S,type:"1fv"},d){var L=f.slice(),R=f.slice();L.pop(),R.shift(),L.reverse(),R.reverse(),u.reverse(),y.shadowCascadeClipsNear={value:L,type:"1fv"},y.shadowCascadeClipsFar={value:R,type:"1fv"}}}if(o.length>0){var N=o.map(E),y=t.shadowUniforms;y.spotLightShadowMaps={value:o,type:"tv"},y.spotLightMatrices={value:s,type:"m4v"},y.spotLightShadowMapSizes={value:N,type:"1fv"}}c.length>0&&(y.pointLightShadowMaps={value:c,type:"tv"})},renderDirectionalLightShadow:function(){var e=new In,t=new O,r=new Me,n=new O,i=new O,a=new O,o=new O;return function(s,l,u,f,c,d,h){var v=this._getDepthMaterial(f),p={getMaterial:function(Fe){return Fe.shadowDepthMaterial||v},isMaterialChanged:qa,getUniform:ni,ifRender:function(Fe){return Fe.castShadow},sortCompare:ar.opaqueSortCompare};if(!l.viewBoundingBoxLastFrame.isFinite()){var m=l.getBoundingBox();l.viewBoundingBoxLastFrame.copy(m).applyTransform(u.viewMatrix)}var _=Math.min(-l.viewBoundingBoxLastFrame.min.z,u.far),x=Math.max(-l.viewBoundingBoxLastFrame.max.z,u.near),T=this._getDirectionalLightCamera(f,l,u),y=a.array;o.copy(T.projectionMatrix),w.invert(i.array,T.worldTransform.array),w.multiply(i.array,i.array,u.worldTransform.array),w.multiply(y,o.array,i.array);for(var E=[],S=u instanceof Ee,L=(u.near+u.far)/(u.near-u.far),R=2*u.near*u.far/(u.near-u.far),N=0;N<=f.shadowCascade;N++){var X=x*Math.pow(_/x,N/f.shadowCascade),D=x+(_-x)*N/f.shadowCascade,V=X*f.cascadeSplitLogFactor+D*(1-f.cascadeSplitLogFactor);E.push(V),c.push(-(-V*L+R)/-V)}var B=this._getTexture(f,f.shadowCascade);h.push(B);var P=s.viewport,U=s.gl;this._frameBuffer.attach(B),this._frameBuffer.bind(s),U.clear(U.COLOR_BUFFER_BIT|U.DEPTH_BUFFER_BIT);for(var N=0;N<f.shadowCascade;N++){var q=E[N],te=E[N+1];S?w.perspective(t.array,u.fov/180*Math.PI,u.aspect,q,te):w.ortho(t.array,u.left,u.right,u.bottom,u.top,q,te),e.setFromProjection(t),e.getTransformedBoundingBox(r,i),r.applyProjection(o);var be=r.min.array,Ce=r.max.array;be[0]=Math.max(be[0],-1),be[1]=Math.max(be[1],-1),Ce[0]=Math.min(Ce[0],1),Ce[1]=Math.min(Ce[1],1),n.ortho(be[0],Ce[0],be[1],Ce[1],1,-1),T.projectionMatrix.multiplyLeft(n);var ze=f.shadowResolution||512;s.setViewport((f.shadowCascade-N-1)*ze,0,ze,ze,1);var Xe=l.updateRenderList(T);s.renderPass(Xe.opaque,T,p),this.softShadow===lt.VSM&&this._gaussianFilter(s,B,B.width);var Oe=new O;Oe.copy(T.viewMatrix).multiplyLeft(T.projectionMatrix),d.push(Oe.array),T.projectionMatrix.copy(o)}this._frameBuffer.unbind(s),s.setViewport(P)}}(),renderSpotLightShadow:function(e,t,r,n,i){var a=this._getTexture(r),o=this._getSpotLightCamera(r),s=e.gl;this._frameBuffer.attach(a),this._frameBuffer.bind(e),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT);var l=this._getDepthMaterial(r),u={getMaterial:function(d){return d.shadowDepthMaterial||l},isMaterialChanged:qa,getUniform:ni,ifRender:function(d){return d.castShadow},sortCompare:ar.opaqueSortCompare},f=t.updateRenderList(o);e.renderPass(f.opaque,o,u),this._frameBuffer.unbind(e),this.softShadow===lt.VSM&&this._gaussianFilter(e,a,a.width);var c=new O;c.copy(o.worldTransform).invert().multiplyLeft(o.projectionMatrix),i.push(a),n.push(c.array)},renderPointLightShadow:function(e,t,r,n){var i=this._getTexture(r),a=e.gl;n.push(i);var o=this._getDepthMaterial(r),s={getMaterial:function(x){return x.shadowDepthMaterial||o},getUniform:ni,sortCompare:ar.opaqueSortCompare},l={px:[],py:[],pz:[],nx:[],ny:[],nz:[]},u=new Me,f=r.getWorldPosition().array,c=new Me,d=r.range;c.min.setArray(f),c.max.setArray(f);var h=new C(d,d,d);c.max.add(h),c.min.sub(h);var v={px:!1,py:!1,pz:!1,nx:!1,ny:!1,nz:!1};t.traverse(function(x){if(x.isRenderable()&&x.castShadow){var T=x.geometry;if(!T.boundingBox){for(var y=0;y<St.length;y++)l[St[y]].push(x);return}if(u.transformFrom(T.boundingBox,x.worldTransform),!u.intersectBoundingBox(c))return;u.updateVertices();for(var y=0;y<St.length;y++)v[St[y]]=!1;for(var y=0;y<8;y++){var E=u.vertices[y],S=E[0]-f[0],L=E[1]-f[1],R=E[2]-f[2],N=Math.abs(S),X=Math.abs(L),D=Math.abs(R);N>X?N>D?v[S>0?"px":"nx"]=!0:v[R>0?"pz":"nz"]=!0:X>D?v[L>0?"py":"ny"]=!0:v[R>0?"pz":"nz"]=!0}for(var y=0;y<St.length;y++)v[St[y]]&&l[St[y]].push(x)}});for(var p=0;p<6;p++){var m=St[p],_=this._getPointLightCamera(r,m);this._frameBuffer.attach(i,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+p),this._frameBuffer.bind(e),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),e.renderPass(l[m],_,s)}this._frameBuffer.unbind(e)},_getDepthMaterial:function(e){var t=this._lightMaterials[e.__uid__],r=e.type==="POINT_LIGHT";if(!t){var n=r?"clay.sm.distance.":"clay.sm.depth.";t=new ut({precision:this.precision,shader:new b(b.source(n+"vertex"),b.source(n+"fragment"))}),this._lightMaterials[e.__uid__]=t}return e.shadowSlopeScale!=null&&t.setUniform("slopeScale",e.shadowSlopeScale),e.shadowBias!=null&&t.setUniform("bias",e.shadowBias),this.softShadow===lt.VSM?t.define("fragment","USE_VSM"):t.undefine("fragment","USE_VSM"),r&&(t.set("lightPosition",e.getWorldPosition().array),t.set("range",e.range)),t},_gaussianFilter:function(e,t,r){var n={width:r,height:r,type:W.FLOAT},i=this._texturePool.get(n);this._frameBuffer.attach(i),this._frameBuffer.bind(e),this._gaussianPassH.setUniform("texture",t),this._gaussianPassH.setUniform("textureWidth",r),this._gaussianPassH.render(e),this._frameBuffer.attach(t),this._gaussianPassV.setUniform("texture",i),this._gaussianPassV.setUniform("textureHeight",r),this._gaussianPassV.render(e),this._frameBuffer.unbind(e),this._texturePool.put(i)},_getTexture:function(e,t){var r=e.__uid__,n=this._textures[r],i=e.shadowResolution||512;return t=t||1,n||(e.type==="POINT_LIGHT"?n=new ur:n=new re,n.width=i*t,n.height=i,this.softShadow===lt.VSM?(n.type=W.FLOAT,n.anisotropic=4):(n.minFilter=A.NEAREST,n.magFilter=A.NEAREST,n.useMipmap=!1),this._textures[r]=n),n},_getPointLightCamera:function(e,t){this._lightCameras.point||(this._lightCameras.point={px:new Ee,nx:new Ee,py:new Ee,ny:new Ee,pz:new Ee,nz:new Ee});var r=this._lightCameras.point[t];switch(r.far=e.range,r.fov=90,r.position.set(0,0,0),t){case"px":r.lookAt(C.POSITIVE_X,C.NEGATIVE_Y);break;case"nx":r.lookAt(C.NEGATIVE_X,C.NEGATIVE_Y);break;case"py":r.lookAt(C.POSITIVE_Y,C.POSITIVE_Z);break;case"ny":r.lookAt(C.NEGATIVE_Y,C.NEGATIVE_Z);break;case"pz":r.lookAt(C.POSITIVE_Z,C.NEGATIVE_Y);break;case"nz":r.lookAt(C.NEGATIVE_Z,C.NEGATIVE_Y);break}return e.getWorldPosition(r.position),r.update(),r},_getDirectionalLightCamera:function(){var e=new O,t=new Me,r=new Me;return function(n,i,a){this._lightCameras.directional||(this._lightCameras.directional=new vr);var o=this._lightCameras.directional;t.copy(i.viewBoundingBoxLastFrame),t.intersection(a.frustum.boundingBox),o.position.copy(t.min).add(t.max).scale(.5).transformMat4(a.worldTransform),o.rotation.copy(n.rotation),o.scale.copy(n.scale),o.updateWorldTransform(),O.invert(e,o.worldTransform),O.multiply(e,e,a.worldTransform),r.copy(t).applyTransform(e);var s=r.min.array,l=r.max.array;return o.position.set((s[0]+l[0])/2,(s[1]+l[1])/2,l[2]).transformMat4(o.worldTransform),o.near=0,o.far=-s[2]+l[2],isNaN(this.lightFrustumBias)?o.far*=4:o.far+=this.lightFrustumBias,o.left=s[0],o.right=l[0],o.top=l[1],o.bottom=s[1],o.update(!0),o}}(),_getSpotLightCamera:function(e){this._lightCameras.spot||(this._lightCameras.spot=new Ee);var t=this._lightCameras.spot;return t.fov=e.penumbraAngle*2,t.far=e.range,t.worldTransform.copy(e.worldTransform),t.updateProjectionMatrix(),w.invert(t.viewMatrix.array,t.worldTransform.array),t},dispose:function(e){var t=e.gl||e;this._frameBuffer&&this._frameBuffer.dispose(t);for(var r in this._textures)this._textures[r].dispose(t);this._texturePool.clear(e.gl),this._depthMaterials={},this._distanceMaterials={},this._textures={},this._lightCameras={},this._shadowMapNumber={POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},this._meshMaterials={};for(var n=0;n<this._receivers.length;n++){var i=this._receivers[n];if(i.material){var a=i.material;a.undefine("fragment","POINT_LIGHT_SHADOW_COUNT"),a.undefine("fragment","DIRECTIONAL_LIGHT_SHADOW_COUNT"),a.undefine("fragment","AMBIENT_LIGHT_SHADOW_COUNT"),a.set("shadowEnabled",0)}}this._receivers=[],this._lightsCastShadow=[]}});lt.VSM=1;lt.PCF=2;var ff=lt,cf=Be.extend(function(){return{name:"",inputLinks:{},outputLinks:{},_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},{updateParameter:function(e,t){var r=this.outputs[e],n=r.parameters,i=r._parametersCopy;if(i||(i=r._parametersCopy={}),n)for(var a in n)a!=="width"&&a!=="height"&&(i[a]=n[a]);var o,s;return n.width instanceof Function?o=n.width.call(this,t):o=n.width,n.height instanceof Function?s=n.height.call(this,t):s=n.height,(i.width!==o||i.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t.gl),i.width=o,i.height=s,i},setParameter:function(e,t){},getParameter:function(e){},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},render:function(){},getOutput:function(e,t){if(t==null)return t=e,this._outputTextures[t];var r=this.outputs[t];if(!!r)return this._rendered?r.outputLastFrame?this._prevOutputTextures[t]:this._outputTextures[t]:this._rendering?(this._prevOutputTextures[t]||(this._prevOutputTextures[t]=this._compositor.allocateTexture(r.parameters||{})),this._prevOutputTextures[t]):(this.render(e),this._outputTextures[t])},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},link:function(e,t,r){this.inputLinks[e]={node:t,pin:r},t.outputLinks[r]||(t.outputLinks[r]=[]),t.outputLinks[r].push({node:this,pin:e}),this.pass.material.enableTexture(e)},clear:function(){this.inputLinks={},this.outputLinks={}},updateReference:function(e){if(!this._rendering){this._rendering=!0;for(var t in this.inputLinks){var r=this.inputLinks[t];r.node.updateReference(r.pin)}this._rendering=!1}e&&this._outputReferences[e]++},beforeFrame:function(){this._rendered=!1;for(var e in this.outputLinks)this._outputReferences[e]=0},afterFrame:function(){for(var e in this.outputLinks)if(this._outputReferences[e]>0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}}}),Er=cf,hf=Be.extend(function(){return{nodes:[]}},{dirty:function(){this._dirty=!0},addNode:function(e){this.nodes.indexOf(e)>=0||(this.nodes.push(e),this._dirty=!0)},removeNode:function(e){typeof e=="string"&&(e=this.getNodeByName(e));var t=this.nodes.indexOf(e);t>=0&&(this.nodes.splice(t,1),this._dirty=!0)},getNodeByName:function(e){for(var t=0;t<this.nodes.length;t++)if(this.nodes[t].name===e)return this.nodes[t]},update:function(){for(var e=0;e<this.nodes.length;e++)this.nodes[e].clear();for(var e=0;e<this.nodes.length;e++){var t=this.nodes[e];if(!!t.inputs){for(var r in t.inputs)if(!!t.inputs[r]){if(t.pass&&!t.pass.material.isUniformEnabled(r)){console.warn("Pin "+t.name+"."+r+" not used.");continue}var n=t.inputs[r],i=this.findPin(n);i?t.link(r,i.node,i.pin):console.warn(typeof n=="string"?"Node "+n+" not exist":"Pin of "+n.node+"."+n.pin+" not exist")}}}},findPin:function(e){var t;if((typeof e=="string"||e instanceof Er)&&(e={node:e}),typeof e.node=="string")for(var r=0;r<this.nodes.length;r++){var n=this.nodes[r];n.name===e.node&&(t=n)}else t=e.node;if(t){var i=e.pin;if(i||t.outputs&&(i=Object.keys(t.outputs)[0]),t.outputs[i])return{node:t,pin:i}}}}),ja=hf,df=ja.extend(function(){return{_outputs:[],_texturePool:new Xa,_frameBuffer:new Re({depthBuffer:!1})}},{addNode:function(e){ja.prototype.addNode.call(this,e),e._compositor=this},render:function(e,t){if(this._dirty){this.update(),this._dirty=!1,this._outputs.length=0;for(var r=0;r<this.nodes.length;r++)this.nodes[r].outputs||this._outputs.push(this.nodes[r])}for(var r=0;r<this.nodes.length;r++)this.nodes[r].beforeFrame();for(var r=0;r<this._outputs.length;r++)this._outputs[r].updateReference();for(var r=0;r<this._outputs.length;r++)this._outputs[r].render(e,t);for(var r=0;r<this.nodes.length;r++)this.nodes[r].afterFrame()},allocateTexture:function(e){return this._texturePool.get(e)},releaseTexture:function(e){this._texturePool.put(e)},getFrameBuffer:function(){return this._frameBuffer},dispose:function(e){this._texturePool.clear(e)}}),vf=df,pf=Er.extend({name:"scene",scene:null,camera:null,autoUpdateScene:!0,preZ:!1},function(){this.frameBuffer=new Re},{render:function(e){this._rendering=!0;var t=e.gl;this.trigger("beforerender");var r;if(!this.outputs)r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ);else{var n=this.frameBuffer;for(var i in this.outputs){var a=this.updateParameter(i,e),o=this.outputs[i],s=this._compositor.allocateTexture(a);this._outputTextures[i]=s;var l=o.attachment||t.COLOR_ATTACHMENT0;typeof l=="string"&&(l=t[l]),n.attach(s,l)}n.bind(e);var u=e.getGLExtension("EXT_draw_buffers");if(u){var f=[];for(var l in this.outputs)l=parseInt(l),l>=t.COLOR_ATTACHMENT0&&l<=t.COLOR_ATTACHMENT0+8&&f.push(l);u.drawBuffersEXT(f)}e.saveClear(),e.clearBit=A.DEPTH_BUFFER_BIT|A.COLOR_BUFFER_BIT,r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ),e.restoreClear(),n.unbind(e)}this.trigger("afterrender",r),this._rendering=!1,this._rendered=!0}}),mf=pf,_f=Er.extend(function(){return{texture:null,outputs:{color:{}}}},function(){},{getOutput:function(e,t){return this.texture},beforeFrame:function(){},afterFrame:function(){}}),gf=_f,yf=Er.extend(function(){return{name:"",inputs:{},outputs:null,shader:"",inputLinks:{},outputLinks:{},pass:null,_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},function(){var e=new Pe({fragment:this.shader});this.pass=e},{render:function(e,t){this.trigger("beforerender",e),this._rendering=!0;var r=e.gl;for(var n in this.inputLinks){var i=this.inputLinks[n],a=i.node.getOutput(e,i.pin);this.pass.setUniform(n,a)}if(!this.outputs)this.pass.outputs=null,this._compositor.getFrameBuffer().unbind(e),this.pass.render(e,t);else{this.pass.outputs={};var o={};for(var s in this.outputs){var l=this.updateParameter(s,e);isNaN(l.width)&&this.updateParameter(s,e);var u=this.outputs[s],f=this._compositor.allocateTexture(l);this._outputTextures[s]=f;var c=u.attachment||r.COLOR_ATTACHMENT0;typeof c=="string"&&(c=r[c]),o[c]=f}this._compositor.getFrameBuffer().bind(e);for(var c in o)this._compositor.getFrameBuffer().attach(o[c],c);this.pass.render(e),this._compositor.getFrameBuffer().updateMipmap(e)}for(var n in this.inputLinks){var i=this.inputLinks[n];i.node.removeReference(i.pin)}this._rendering=!1,this._rendered=!0,this.trigger("afterrender",e)},updateParameter:function(e,t){var r=this.outputs[e],n=r.parameters,i=r._parametersCopy;if(i||(i=r._parametersCopy={}),n)for(var a in n)a!=="width"&&a!=="height"&&(i[a]=n[a]);var o,s;return typeof n.width=="function"?o=n.width.call(this,t):o=n.width,typeof n.height=="function"?s=n.height.call(this,t):s=n.height,o=Math.ceil(o),s=Math.ceil(s),(i.width!==o||i.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t),i.width=o,i.height=s,i},setParameter:function(e,t){this.pass.setUniform(e,t)},getParameter:function(e){return this.pass.getUniform(e)},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},define:function(e,t){this.pass.material.define("fragment",e,t)},undefine:function(e){this.pass.material.undefine("fragment",e)},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},clear:function(){Er.prototype.clear.call(this),this.pass.material.disableTexturesAll()}}),xf=yf,Tf=`@export clay.compositor.coloradjust
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float exposure : 0.0;
uniform float gamma : 1.0;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = clamp(tex.rgb + vec3(brightness), 0.0, 1.0);
 color = clamp( (color-vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 color = clamp( color * pow(2.0, exposure), 0.0, 1.0);
 color = clamp( pow(color, vec3(gamma)), 0.0, 1.0);
 float luminance = dot( color, w );
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.brightness
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = tex.rgb + vec3(brightness);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.contrast
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float contrast : 1.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = (tex.rgb-vec3(0.5))*contrast+vec3(0.5);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.exposure
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float exposure : 0.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb * pow(2.0, exposure);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.gamma
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float gamma : 1.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = pow(tex.rgb, vec3(gamma));
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.saturation
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb;
 float luminance = dot(color, w);
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end`,Ya=`@export clay.compositor.kernel.gaussian_9
float gaussianKernel[9];
gaussianKernel[0] = 0.07;
gaussianKernel[1] = 0.09;
gaussianKernel[2] = 0.12;
gaussianKernel[3] = 0.14;
gaussianKernel[4] = 0.16;
gaussianKernel[5] = 0.14;
gaussianKernel[6] = 0.12;
gaussianKernel[7] = 0.09;
gaussianKernel[8] = 0.07;
@end
@export clay.compositor.kernel.gaussian_13
float gaussianKernel[13];
gaussianKernel[0] = 0.02;
gaussianKernel[1] = 0.03;
gaussianKernel[2] = 0.06;
gaussianKernel[3] = 0.08;
gaussianKernel[4] = 0.11;
gaussianKernel[5] = 0.13;
gaussianKernel[6] = 0.14;
gaussianKernel[7] = 0.13;
gaussianKernel[8] = 0.11;
gaussianKernel[9] = 0.08;
gaussianKernel[10] = 0.06;
gaussianKernel[11] = 0.03;
gaussianKernel[12] = 0.02;
@end
@export clay.compositor.gaussian_blur
#define SHADER_NAME gaussian_blur
uniform sampler2D texture;varying vec2 v_Texcoord;
uniform float blurSize : 2.0;
uniform vec2 textureSize : [512.0, 512.0];
uniform float blurDir : 0.0;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main (void)
{
 @import clay.compositor.kernel.gaussian_9
 vec2 off = blurSize / textureSize;
 off *= vec2(1.0 - blurDir, blurDir);
 vec4 sum = vec4(0.0);
 float weightAll = 0.0;
 for (int i = 0; i < 9; i++) {
 float w = gaussianKernel[i];
 vec4 texel = decodeHDR(clampSample(texture, v_Texcoord + float(i - 4) * off));
 sum += texel * w;
 weightAll += w;
 }
 gl_FragColor = encodeHDR(sum / max(weightAll, 0.01));
}
@end
`,Ef=`@export clay.compositor.hdr.log_lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 float luminance = dot(tex.rgb, w);
 luminance = log(luminance + 0.001);
 gl_FragColor = encodeHDR(vec4(vec3(luminance), 1.0));
}
@end
@export clay.compositor.hdr.lum_adaption
varying vec2 v_Texcoord;
uniform sampler2D adaptedLum;
uniform sampler2D currentLum;
uniform float frameTime : 0.02;
@import clay.util.rgbm
void main()
{
 float fAdaptedLum = decodeHDR(texture2D(adaptedLum, vec2(0.5, 0.5))).r;
 float fCurrentLum = exp(encodeHDR(texture2D(currentLum, vec2(0.5, 0.5))).r);
 fAdaptedLum += (fCurrentLum - fAdaptedLum) * (1.0 - pow(0.98, 30.0 * frameTime));
 gl_FragColor = encodeHDR(vec4(vec3(fAdaptedLum), 1.0));
}
@end
@export clay.compositor.lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord );
 float luminance = dot(tex.rgb, w);
 gl_FragColor = vec4(vec3(luminance), 1.0);
}
@end`,Ka=`
@export clay.compositor.lut
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform sampler2D lookup;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 float blueColor = tex.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec4 newColor1 = texture2D(lookup, texPos1);
 vec4 newColor2 = texture2D(lookup, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 gl_FragColor = vec4(newColor.rgb, tex.w);
}
@end`,Af=`@export clay.compositor.vignette
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float darkness: 1;
uniform float offset: 1;
@import clay.util.rgbm
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = texel.rgb;
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(offset);
 gl_FragColor = encodeHDR(vec4(mix(texel.rgb, vec3(1.0 - darkness), dot(uv, uv)), texel.a));
}
@end`,Za=`@export clay.compositor.output
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = tex.rgb;
#ifdef OUTPUT_ALPHA
 gl_FragColor.a = tex.a;
#else
 gl_FragColor.a = 1.0;
#endif
 gl_FragColor = encodeHDR(gl_FragColor);
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,$a=`@export clay.compositor.bright
uniform sampler2D texture;
uniform float threshold : 1;
uniform float scale : 1.0;
uniform vec2 textureSize: [512, 512];
varying vec2 v_Texcoord;
const vec3 lumWeight = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
vec4 median(vec4 a, vec4 b, vec4 c)
{
 return a + b + c - min(min(a, b), c) - max(max(a, b), c);
}
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
#ifdef ANTI_FLICKER
 vec3 d = 1.0 / textureSize.xyx * vec3(1.0, 1.0, 0.0);
 vec4 s1 = decodeHDR(texture2D(texture, v_Texcoord - d.xz));
 vec4 s2 = decodeHDR(texture2D(texture, v_Texcoord + d.xz));
 vec4 s3 = decodeHDR(texture2D(texture, v_Texcoord - d.zy));
 vec4 s4 = decodeHDR(texture2D(texture, v_Texcoord + d.zy));
 texel = median(median(texel, s1, s2), s3, s4);
#endif
 float lum = dot(texel.rgb , lumWeight);
 vec4 color;
 if (lum > threshold && texel.a > 0.0)
 {
 color = vec4(texel.rgb * scale, texel.a * scale);
 }
 else
 {
 color = vec4(0.0);
 }
 gl_FragColor = encodeHDR(color);
}
@end
`,Qa=`@export clay.compositor.downsample
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
varying vec2 v_Texcoord;
@import clay.util.rgbm
float brightness(vec3 c)
{
 return max(max(c.r, c.g), c.b);
}
@import clay.util.clamp_sample
void main()
{
 vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;
#ifdef ANTI_FLICKER
 vec3 s1 = decodeHDR(clampSample(texture, v_Texcoord + d.xy)).rgb;
 vec3 s2 = decodeHDR(clampSample(texture, v_Texcoord + d.zy)).rgb;
 vec3 s3 = decodeHDR(clampSample(texture, v_Texcoord + d.xw)).rgb;
 vec3 s4 = decodeHDR(clampSample(texture, v_Texcoord + d.zw)).rgb;
 float s1w = 1.0 / (brightness(s1) + 1.0);
 float s2w = 1.0 / (brightness(s2) + 1.0);
 float s3w = 1.0 / (brightness(s3) + 1.0);
 float s4w = 1.0 / (brightness(s4) + 1.0);
 float oneDivideSum = 1.0 / (s1w + s2w + s3w + s4w);
 vec4 color = vec4(
 (s1 * s1w + s2 * s2w + s3 * s3w + s4 * s4w) * oneDivideSum,
 1.0
 );
#else
 vec4 color = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 color *= 0.25;
#endif
 gl_FragColor = encodeHDR(color);
}
@end`,Ja=`
@export clay.compositor.upsample
#define HIGH_QUALITY
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
uniform float sampleScale: 0.5;
varying vec2 v_Texcoord;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main()
{
#ifdef HIGH_QUALITY
 vec4 d = vec4(1.0, 1.0, -1.0, 0.0) / textureSize.xyxy * sampleScale;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord - d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord - d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord - d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord )) * 4.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 gl_FragColor = encodeHDR(s / 16.0);
#else
 vec4 d = vec4(-1.0, -1.0, +1.0, +1.0) / textureSize.xyxy;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 gl_FragColor = encodeHDR(s / 4.0);
#endif
}
@end`,eo=`@export clay.compositor.hdr.composite
#define TONEMAPPING
uniform sampler2D texture;
#ifdef BLOOM_ENABLED
uniform sampler2D bloom;
#endif
#ifdef LENSFLARE_ENABLED
uniform sampler2D lensflare;
uniform sampler2D lensdirt;
#endif
#ifdef LUM_ENABLED
uniform sampler2D lum;
#endif
#ifdef LUT_ENABLED
uniform sampler2D lut;
#endif
#ifdef COLOR_CORRECTION
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float saturation : 1.0;
#endif
#ifdef VIGNETTE
uniform float vignetteDarkness: 1.0;
uniform float vignetteOffset: 1.0;
#endif
uniform float exposure : 1.0;
uniform float bloomIntensity : 0.25;
uniform float lensflareIntensity : 1;
varying vec2 v_Texcoord;
@import clay.util.srgb
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
float eyeAdaption(float fLum)
{
 return mix(0.2, fLum, 0.5);
}
#ifdef LUT_ENABLED
vec3 lutTransform(vec3 color) {
 float blueColor = color.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec4 newColor1 = texture2D(lut, texPos1);
 vec4 newColor2 = texture2D(lut, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 return newColor.rgb;
}
#endif
@import clay.util.rgbm
void main()
{
 vec4 texel = vec4(0.0);
 vec4 originalTexel = vec4(0.0);
#ifdef TEXTURE_ENABLED
 texel = decodeHDR(texture2D(texture, v_Texcoord));
 originalTexel = texel;
#endif
#ifdef BLOOM_ENABLED
 vec4 bloomTexel = decodeHDR(texture2D(bloom, v_Texcoord));
 texel.rgb += bloomTexel.rgb * bloomIntensity;
 texel.a += bloomTexel.a * bloomIntensity;
#endif
#ifdef LENSFLARE_ENABLED
 texel += decodeHDR(texture2D(lensflare, v_Texcoord)) * texture2D(lensdirt, v_Texcoord) * lensflareIntensity;
#endif
 texel.a = min(texel.a, 1.0);
#ifdef LUM_ENABLED
 float fLum = texture2D(lum, vec2(0.5, 0.5)).r;
 float adaptedLumDest = 3.0 / (max(0.1, 1.0 + 10.0*eyeAdaption(fLum)));
 float exposureBias = adaptedLumDest * exposure;
#else
 float exposureBias = exposure;
#endif
#ifdef TONEMAPPING
 texel.rgb *= exposureBias;
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
 texel = linearTosRGB(texel);
#ifdef LUT_ENABLED
 texel.rgb = lutTransform(clamp(texel.rgb,vec3(0.0),vec3(1.0)));
#endif
#ifdef COLOR_CORRECTION
 texel.rgb = clamp(texel.rgb + vec3(brightness), 0.0, 1.0);
 texel.rgb = clamp((texel.rgb - vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 float lum = dot(texel.rgb, vec3(0.2125, 0.7154, 0.0721));
 texel.rgb = mix(vec3(lum), texel.rgb, saturation);
#endif
#ifdef VIGNETTE
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(vignetteOffset);
 texel.rgb = mix(texel.rgb, vec3(1.0 - vignetteDarkness), dot(uv, uv));
#endif
 gl_FragColor = encodeHDR(texel);
#ifdef DEBUG
 #if DEBUG == 1
 gl_FragColor = encodeHDR(decodeHDR(texture2D(texture, v_Texcoord)));
 #elif DEBUG == 2
 gl_FragColor = encodeHDR(decodeHDR(texture2D(bloom, v_Texcoord)) * bloomIntensity);
 #elif DEBUG == 3
 gl_FragColor = encodeHDR(decodeHDR(texture2D(lensflare, v_Texcoord) * lensflareIntensity));
 #endif
#endif
 if (originalTexel.a <= 0.01 && gl_FragColor.a > 1e-5) {
 gl_FragColor.a = dot(gl_FragColor.rgb, vec3(0.2125, 0.7154, 0.0721));
 }
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,Sf=`@export clay.compositor.lensflare
#define SAMPLE_NUMBER 8
uniform sampler2D texture;
uniform sampler2D lenscolor;
uniform vec2 textureSize : [512, 512];
uniform float dispersal : 0.3;
uniform float haloWidth : 0.4;
uniform float distortion : 1.0;
varying vec2 v_Texcoord;
@import clay.util.rgbm
vec4 textureDistorted(
 in vec2 texcoord,
 in vec2 direction,
 in vec3 distortion
) {
 return vec4(
 decodeHDR(texture2D(texture, texcoord + direction * distortion.r)).r,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.g)).g,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.b)).b,
 1.0
 );
}
void main()
{
 vec2 texcoord = -v_Texcoord + vec2(1.0); vec2 textureOffset = 1.0 / textureSize;
 vec2 ghostVec = (vec2(0.5) - texcoord) * dispersal;
 vec2 haloVec = normalize(ghostVec) * haloWidth;
 vec3 distortion = vec3(-textureOffset.x * distortion, 0.0, textureOffset.x * distortion);
 vec4 result = vec4(0.0);
 for (int i = 0; i < SAMPLE_NUMBER; i++)
 {
 vec2 offset = fract(texcoord + ghostVec * float(i));
 float weight = length(vec2(0.5) - offset) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 }
 result *= texture2D(lenscolor, vec2(length(vec2(0.5) - texcoord)) / length(vec2(0.5)));
 float weight = length(vec2(0.5) - fract(texcoord + haloVec)) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 vec2 offset = fract(texcoord + haloVec);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 gl_FragColor = result;
}
@end`,to=`@export clay.compositor.blend
#define SHADER_NAME blend
#ifdef TEXTURE1_ENABLED
uniform sampler2D texture1;
uniform float weight1 : 1.0;
#endif
#ifdef TEXTURE2_ENABLED
uniform sampler2D texture2;
uniform float weight2 : 1.0;
#endif
#ifdef TEXTURE3_ENABLED
uniform sampler2D texture3;
uniform float weight3 : 1.0;
#endif
#ifdef TEXTURE4_ENABLED
uniform sampler2D texture4;
uniform float weight4 : 1.0;
#endif
#ifdef TEXTURE5_ENABLED
uniform sampler2D texture5;
uniform float weight5 : 1.0;
#endif
#ifdef TEXTURE6_ENABLED
uniform sampler2D texture6;
uniform float weight6 : 1.0;
#endif
varying vec2 v_Texcoord;
@import clay.util.rgbm
void main()
{
 vec4 tex = vec4(0.0);
#ifdef TEXTURE1_ENABLED
 tex += decodeHDR(texture2D(texture1, v_Texcoord)) * weight1;
#endif
#ifdef TEXTURE2_ENABLED
 tex += decodeHDR(texture2D(texture2, v_Texcoord)) * weight2;
#endif
#ifdef TEXTURE3_ENABLED
 tex += decodeHDR(texture2D(texture3, v_Texcoord)) * weight3;
#endif
#ifdef TEXTURE4_ENABLED
 tex += decodeHDR(texture2D(texture4, v_Texcoord)) * weight4;
#endif
#ifdef TEXTURE5_ENABLED
 tex += decodeHDR(texture2D(texture5, v_Texcoord)) * weight5;
#endif
#ifdef TEXTURE6_ENABLED
 tex += decodeHDR(texture2D(texture6, v_Texcoord)) * weight6;
#endif
 gl_FragColor = encodeHDR(tex);
}
@end`,ro=`@export clay.compositor.fxaa
uniform sampler2D texture;
uniform vec4 viewport : VIEWPORT;
varying vec2 v_Texcoord;
#define FXAA_REDUCE_MIN (1.0/128.0)
#define FXAA_REDUCE_MUL (1.0/8.0)
#define FXAA_SPAN_MAX 8.0
@import clay.util.rgbm
void main()
{
 vec2 resolution = 1.0 / viewport.zw;
 vec3 rgbNW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbNE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ) ).xyz;
 vec4 rgbaM = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution ) );
 vec3 rgbM = rgbaM.xyz;
 float opacity = rgbaM.w;
 vec3 luma = vec3( 0.299, 0.587, 0.114 );
 float lumaNW = dot( rgbNW, luma );
 float lumaNE = dot( rgbNE, luma );
 float lumaSW = dot( rgbSW, luma );
 float lumaSE = dot( rgbSE, luma );
 float lumaM = dot( rgbM, luma );
 float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );
 float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );
 vec2 dir;
 dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
 dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));
 float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );
 float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );
 dir = min( vec2( FXAA_SPAN_MAX, FXAA_SPAN_MAX),
 max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
 dir * rcpDirMin)) * resolution;
 vec3 rgbA = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA *= 0.5;
 vec3 rgbB = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * -0.5 ) ).xyz;
 rgbB += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * 0.5 ) ).xyz;
 rgbB *= 0.25;
 rgbB += rgbA * 0.5;
 float lumaB = dot( rgbB, luma );
 if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) )
 {
 gl_FragColor = vec4( rgbA, opacity );
 }
 else {
 gl_FragColor = vec4( rgbB, opacity );
 }
}
@end`;function wf(e){e.import(Tf),e.import(Ya),e.import(Ef),e.import(Ka),e.import(Af),e.import(Za),e.import($a),e.import(Qa),e.import(Ja),e.import(eo),e.import(Sf),e.import(to),e.import(ro)}wf(b);var bf=/^#source\((.*?)\)/;function Cf(e,t){var r=new vf;t=t||{};var n={textures:{},parameters:{}},i=function(s,l){for(var u=0;u<e.nodes.length;u++){var f=e.nodes[u],c=Rf(f,n,t);c&&r.addNode(c)}};for(var a in e.parameters){var o=e.parameters[a];n.parameters[a]=ii(o)}return Mf(e,n,t,function(s){n.textures=s,i()}),r}function Rf(e,t,r){var n=e.type||"filter",i,a,o;if(n==="filter"){var s=e.shader.trim(),l=bf.exec(s);if(l?i=b.source(l[1].trim()):s.charAt(0)==="#"&&(i=t.shaders[s.substr(1)]),i||(i=s),!i)return}if(e.inputs){a={};for(var u in e.inputs)typeof e.inputs[u]=="string"?a[u]=e.inputs[u]:a[u]={node:e.inputs[u].node,pin:e.inputs[u].pin}}if(e.outputs){o={};for(var u in e.outputs){var f=e.outputs[u];o[u]={},f.attachment!=null&&(o[u].attachment=f.attachment),f.keepLastFrame!=null&&(o[u].keepLastFrame=f.keepLastFrame),f.outputLastFrame!=null&&(o[u].outputLastFrame=f.outputLastFrame),f.parameters&&(o[u].parameters=ii(f.parameters))}}var c;if(n==="scene"?c=new mf({name:e.name,scene:r.scene,camera:r.camera,outputs:o}):n==="texture"?c=new gf({name:e.name,outputs:o}):c=new xf({name:e.name,shader:i,inputs:a,outputs:o}),c){if(e.parameters)for(var u in e.parameters){var d=e.parameters[u];typeof d=="string"?(d=d.trim(),d.charAt(0)==="#"?d=t.textures[d.substr(1)]:c.on("beforerender",Df(u,no(d)))):typeof d=="function"&&c.on("beforerender",d),c.setParameter(u,d)}if(e.defines&&c.pass)for(var u in e.defines){var d=e.defines[u];c.pass.material.define("fragment",u,d)}}return c}function Lf(e,t){return e}function Nf(e,t){return t}function ii(e){var t={};if(!e)return t;["type","minFilter","magFilter","wrapS","wrapT","flipY","useMipmap"].forEach(function(n){var i=e[n];i!=null&&(typeof i=="string"&&(i=W[i]),t[n]=i)});var r=e.scale||1;return["width","height"].forEach(function(n){if(e[n]!=null){var i=e[n];typeof i=="string"?(i=i.trim(),t[n]=Pf(n,no(i),r)):t[n]=i}}),t.width||(t.width=Lf),t.height||(t.height=Nf),e.useMipmap!=null&&(t.useMipmap=e.useMipmap),t}function Mf(e,t,r,n){if(!e.textures){n({});return}var i={},a=0,o=!1,s=r.textureRootPath;Ae.each(e.textures,function(l,u){var f,c=l.path,d=ii(l.parameters);if(Array.isArray(c)&&c.length===6)s&&(c=c.map(function(h){return Ae.relative2absolute(h,s)})),f=new ur(d);else if(typeof c=="string")s&&(c=Ae.relative2absolute(c,s)),f=new re(d);else return;f.load(c),a++,f.once("success",function(){i[u]=f,a--,a===0&&(n(i),o=!0)})}),a===0&&!o&&n(i)}function Df(e,t){return function(r){var n=r.getDevicePixelRatio(),i=r.getWidth(),a=r.getHeight(),o=t(i,a,n);this.setParameter(e,o)}}function Pf(e,t,r){return r=r||1,function(n){var i=n.getDevicePixelRatio(),a=n.getWidth()*r,o=n.getHeight()*r;return t(a,o,i)}}function no(e){var t=/^expr\((.*)\)$/.exec(e);if(t)try{var r=new Function("width","height","dpr","return "+t[1]);return r(1,1),r}catch{throw new Error("Invalid expression.")}}function $t(e,t){for(var r=0,n=1/t,i=e;i>0;)r=r+n*(i%t),i=Math.floor(i/t),n=n/t;return r}var If=`@export ecgl.ssao.estimate

uniform sampler2D depthTex;

uniform sampler2D normalTex;

uniform sampler2D noiseTex;

uniform vec2 depthTexSize;

uniform vec2 noiseTexSize;

uniform mat4 projection;

uniform mat4 projectionInv;

uniform mat4 viewInverseTranspose;

uniform vec3 kernel[KERNEL_SIZE];

uniform float radius : 1;

uniform float power : 1;

uniform float bias: 1e-2;

uniform float intensity: 1.0;

varying vec2 v_Texcoord;

float ssaoEstimator(in vec3 originPos, in mat3 kernelBasis) {
 float occlusion = 0.0;

 for (int i = 0; i < KERNEL_SIZE; i++) {
 vec3 samplePos = kernel[i];
#ifdef NORMALTEX_ENABLED
 samplePos = kernelBasis * samplePos;
#endif
 samplePos = samplePos * radius + originPos;

 vec4 texCoord = projection * vec4(samplePos, 1.0);
 texCoord.xy /= texCoord.w;

 vec4 depthTexel = texture2D(depthTex, texCoord.xy * 0.5 + 0.5);

 float sampleDepth = depthTexel.r * 2.0 - 1.0;
 if (projection[3][3] == 0.0) {
 sampleDepth = projection[3][2] / (sampleDepth * projection[2][3] - projection[2][2]);
 }
 else {
 sampleDepth = (sampleDepth - projection[3][2]) / projection[2][2];
 }
 
 float rangeCheck = smoothstep(0.0, 1.0, radius / abs(originPos.z - sampleDepth));
 occlusion += rangeCheck * step(samplePos.z, sampleDepth - bias);
 }
#ifdef NORMALTEX_ENABLED
 occlusion = 1.0 - occlusion / float(KERNEL_SIZE);
#else
 occlusion = 1.0 - clamp((occlusion / float(KERNEL_SIZE) - 0.6) * 2.5, 0.0, 1.0);
#endif
 return pow(occlusion, power);
}

void main()
{

 vec4 depthTexel = texture2D(depthTex, v_Texcoord);

#ifdef NORMALTEX_ENABLED
 vec4 tex = texture2D(normalTex, v_Texcoord);
 if (dot(tex.rgb, tex.rgb) == 0.0) {
 gl_FragColor = vec4(1.0);
 return;
 }
 vec3 N = tex.rgb * 2.0 - 1.0;
 N = (viewInverseTranspose * vec4(N, 0.0)).xyz;

 vec2 noiseTexCoord = depthTexSize / vec2(noiseTexSize) * v_Texcoord;
 vec3 rvec = texture2D(noiseTex, noiseTexCoord).rgb * 2.0 - 1.0;
 vec3 T = normalize(rvec - N * dot(rvec, N));
 vec3 BT = normalize(cross(N, T));
 mat3 kernelBasis = mat3(T, BT, N);
#else
 if (depthTexel.r > 0.99999) {
 gl_FragColor = vec4(1.0);
 return;
 }
 mat3 kernelBasis;
#endif

 float z = depthTexel.r * 2.0 - 1.0;

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * projectedPos;

 vec3 position = p4.xyz / p4.w;

 float ao = ssaoEstimator(position, kernelBasis);
 ao = clamp(1.0 - (1.0 - ao) * intensity, 0.0, 1.0);
 gl_FragColor = vec4(vec3(ao), 1.0);
}

@end


@export ecgl.ssao.blur
#define SHADER_NAME SSAO_BLUR

uniform sampler2D ssaoTexture;

#ifdef NORMALTEX_ENABLED
uniform sampler2D normalTex;
#endif

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

uniform int direction: 0.0;

#ifdef DEPTHTEX_ENABLED
uniform sampler2D depthTex;
uniform mat4 projection;
uniform float depthRange : 0.5;

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(depthTex, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}
#endif

void main()
{
 float kernel[5];
 kernel[0] = 0.122581;
 kernel[1] = 0.233062;
 kernel[2] = 0.288713;
 kernel[3] = 0.233062;
 kernel[4] = 0.122581;

 vec2 off = vec2(0.0);
 if (direction == 0) {
 off[0] = blurSize / textureSize.x;
 }
 else {
 off[1] = blurSize / textureSize.y;
 }

 vec2 coord = v_Texcoord;

 float sum = 0.0;
 float weightAll = 0.0;

#ifdef NORMALTEX_ENABLED
 vec3 centerNormal = texture2D(normalTex, v_Texcoord).rgb * 2.0 - 1.0;
#endif
#if defined(DEPTHTEX_ENABLED)
 float centerDepth = getLinearDepth(v_Texcoord);
#endif

 for (int i = 0; i < 5; i++) {
 vec2 coord = clamp(v_Texcoord + vec2(float(i) - 2.0) * off, vec2(0.0), vec2(1.0));

 float w = kernel[i];
#ifdef NORMALTEX_ENABLED
 vec3 normal = texture2D(normalTex, coord).rgb * 2.0 - 1.0;
 w *= clamp(dot(normal, centerNormal), 0.0, 1.0);
#endif
#ifdef DEPTHTEX_ENABLED
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(centerDepth - d) / depthRange, 0.0, 1.0));
#endif

 weightAll += w;
 sum += texture2D(ssaoTexture, coord).r * w;
 }

 gl_FragColor = vec4(vec3(sum / weightAll), 1.0);
}

@end
`;b.import(If);function io(e){for(var t=new Uint8Array(e*e*4),r=0,n=new C,i=0;i<e;i++)for(var a=0;a<e;a++)n.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),t[r++]=(n.x*.5+.5)*255,t[r++]=(n.y*.5+.5)*255,t[r++]=0,t[r++]=255;return t}function ao(e){return new re({pixels:io(e),wrapS:W.REPEAT,wrapT:W.REPEAT,width:e,height:e})}function Of(e,t,r){var n=new Float32Array(e*3);t=t||0;for(var i=0;i<e;i++){var a=$t(i+t,2)*(r?1:2)*Math.PI,o=$t(i+t,3)*Math.PI,s=Math.random(),l=Math.cos(a)*Math.sin(o)*s,u=Math.cos(o)*s,f=Math.sin(a)*Math.sin(o)*s;n[i*3]=l,n[i*3+1]=u,n[i*3+2]=f}return n}function vt(e){e=e||{},this._ssaoPass=new Pe({fragment:b.source("ecgl.ssao.estimate")}),this._blurPass=new Pe({fragment:b.source("ecgl.ssao.blur")}),this._framebuffer=new Re({depthBuffer:!1}),this._ssaoTexture=new re,this._blurTexture=new re,this._blurTexture2=new re,this._depthTex=e.depthTexture,this._normalTex=e.normalTexture,this.setNoiseSize(4),this.setKernelSize(e.kernelSize||12),e.radius!=null&&this.setParameter("radius",e.radius),e.power!=null&&this.setParameter("power",e.power),this._normalTex||(this._ssaoPass.material.disableTexture("normalTex"),this._blurPass.material.disableTexture("normalTex")),this._depthTex||this._blurPass.material.disableTexture("depthTex"),this._blurPass.material.setUniform("normalTex",this._normalTex),this._blurPass.material.setUniform("depthTex",this._depthTex)}vt.prototype.setDepthTexture=function(e){this._depthTex=e};vt.prototype.setNormalTexture=function(e){this._normalTex=e,this._ssaoPass.material[e?"enableTexture":"disableTexture"]("normalTex"),this.setKernelSize(this._kernelSize)};vt.prototype.update=function(e,t,r){var n=e.getWidth(),i=e.getHeight(),a=this._ssaoPass,o=this._blurPass;a.setUniform("kernel",this._kernels[r%this._kernels.length]),a.setUniform("depthTex",this._depthTex),this._normalTex!=null&&a.setUniform("normalTex",this._normalTex),a.setUniform("depthTexSize",[this._depthTex.width,this._depthTex.height]);var s=new O;O.transpose(s,t.worldTransform),a.setUniform("projection",t.projectionMatrix.array),a.setUniform("projectionInv",t.invProjectionMatrix.array),a.setUniform("viewInverseTranspose",s.array);var l=this._ssaoTexture,u=this._blurTexture,f=this._blurTexture2;l.width=n/2,l.height=i/2,u.width=n,u.height=i,f.width=n,f.height=i,this._framebuffer.attach(l),this._framebuffer.bind(e),e.gl.clearColor(1,1,1,1),e.gl.clear(e.gl.COLOR_BUFFER_BIT),a.render(e),o.setUniform("textureSize",[n/2,i/2]),o.setUniform("projection",t.projectionMatrix.array),this._framebuffer.attach(u),o.setUniform("direction",0),o.setUniform("ssaoTexture",l),o.render(e),this._framebuffer.attach(f),o.setUniform("textureSize",[n,i]),o.setUniform("direction",1),o.setUniform("ssaoTexture",u),o.render(e),this._framebuffer.unbind(e);var c=e.clearColor;e.gl.clearColor(c[0],c[1],c[2],c[3])};vt.prototype.getTargetTexture=function(){return this._blurTexture2};vt.prototype.setParameter=function(e,t){e==="noiseTexSize"?this.setNoiseSize(t):e==="kernelSize"?this.setKernelSize(t):e==="intensity"?this._ssaoPass.material.set("intensity",t):this._ssaoPass.setUniform(e,t)};vt.prototype.setKernelSize=function(e){this._kernelSize=e,this._ssaoPass.material.define("fragment","KERNEL_SIZE",e),this._kernels=this._kernels||[];for(var t=0;t<30;t++)this._kernels[t]=Of(e,t*e,!!this._normalTex)};vt.prototype.setNoiseSize=function(e){var t=this._ssaoPass.getUniform("noiseTex");t?(t.data=io(e),t.width=t.height=e,t.dirty()):(t=ao(e),this._ssaoPass.setUniform("noiseTex",ao(e))),this._ssaoPass.setUniform("noiseTexSize",[e,e])};vt.prototype.dispose=function(e){this._blurTexture.dispose(e),this._ssaoTexture.dispose(e),this._blurTexture2.dispose(e)};var Ff=`@export ecgl.ssr.main

#define SHADER_NAME SSR
#define MAX_ITERATION 20;
#define SAMPLE_PER_FRAME 5;
#define TOTAL_SAMPLES 128;

uniform sampler2D sourceTexture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform sampler2D gBufferTexture3;
uniform samplerCube specularCubemap;
uniform float specularIntensity: 1;

uniform mat4 projection;
uniform mat4 projectionInv;
uniform mat4 toViewSpace;
uniform mat4 toWorldSpace;

uniform float maxRayDistance: 200;

uniform float pixelStride: 16;
uniform float pixelStrideZCutoff: 50; 
uniform float screenEdgeFadeStart: 0.9; 
uniform float eyeFadeStart : 0.2; uniform float eyeFadeEnd: 0.8; 
uniform float minGlossiness: 0.2; uniform float zThicknessThreshold: 1;

uniform float nearZ;
uniform vec2 viewportSize : VIEWPORT_SIZE;

uniform float jitterOffset: 0;

varying vec2 v_Texcoord;

#ifdef DEPTH_DECODE
@import clay.util.decode_float
#endif

#ifdef PHYSICALLY_CORRECT
uniform sampler2D normalDistribution;
uniform float sampleOffset: 0;
uniform vec2 normalDistributionSize;

vec3 transformNormal(vec3 H, vec3 N) {
 vec3 upVector = N.y > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
vec3 importanceSampleNormalGGX(float i, float roughness, vec3 N) {
 float p = fract((i + sampleOffset) / float(TOTAL_SAMPLES));
 vec3 H = texture2D(normalDistribution,vec2(roughness, p)).rgb;
 return transformNormal(H, N);
}
float G_Smith(float g, float ndv, float ndl) {
 float roughness = 1.0 - g;
 float k = roughness * roughness / 2.0;
 float G1V = ndv / (ndv * (1.0 - k) + k);
 float G1L = ndl / (ndl * (1.0 - k) + k);
 return G1L * G1V;
}
vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}
#endif

float fetchDepth(sampler2D depthTexture, vec2 uv)
{
 vec4 depthTexel = texture2D(depthTexture, uv);
 return depthTexel.r * 2.0 - 1.0;
}

float linearDepth(float depth)
{
 if (projection[3][3] == 0.0) {
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
 }
 else {
 return (depth - projection[3][2]) / projection[2][2];
 }
}

bool rayIntersectDepth(float rayZNear, float rayZFar, vec2 hitPixel)
{
 if (rayZFar > rayZNear)
 {
 float t = rayZFar; rayZFar = rayZNear; rayZNear = t;
 }
 float cameraZ = linearDepth(fetchDepth(gBufferTexture2, hitPixel));
 return rayZFar <= cameraZ && rayZNear >= cameraZ - zThicknessThreshold;
}


bool traceScreenSpaceRay(
 vec3 rayOrigin, vec3 rayDir, float jitter,
 out vec2 hitPixel, out vec3 hitPoint, out float iterationCount
)
{
 float rayLength = ((rayOrigin.z + rayDir.z * maxRayDistance) > -nearZ)
 ? (-nearZ - rayOrigin.z) / rayDir.z : maxRayDistance;

 vec3 rayEnd = rayOrigin + rayDir * rayLength;

 vec4 H0 = projection * vec4(rayOrigin, 1.0);
 vec4 H1 = projection * vec4(rayEnd, 1.0);

 float k0 = 1.0 / H0.w, k1 = 1.0 / H1.w;

 vec3 Q0 = rayOrigin * k0, Q1 = rayEnd * k1;

 vec2 P0 = (H0.xy * k0 * 0.5 + 0.5) * viewportSize;
 vec2 P1 = (H1.xy * k1 * 0.5 + 0.5) * viewportSize;

 P1 += dot(P1 - P0, P1 - P0) < 0.0001 ? 0.01 : 0.0;
 vec2 delta = P1 - P0;

 bool permute = false;
 if (abs(delta.x) < abs(delta.y)) {
 permute = true;
 delta = delta.yx;
 P0 = P0.yx;
 P1 = P1.yx;
 }
 float stepDir = sign(delta.x);
 float invdx = stepDir / delta.x;

 vec3 dQ = (Q1 - Q0) * invdx;
 float dk = (k1 - k0) * invdx;

 vec2 dP = vec2(stepDir, delta.y * invdx);

 float strideScaler = 1.0 - min(1.0, -rayOrigin.z / pixelStrideZCutoff);
 float pixStride = 1.0 + strideScaler * pixelStride;

 dP *= pixStride; dQ *= pixStride; dk *= pixStride;

 vec4 pqk = vec4(P0, Q0.z, k0);
 vec4 dPQK = vec4(dP, dQ.z, dk);

 pqk += dPQK * jitter;
 float rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);
 float rayZNear;

 bool intersect = false;

 vec2 texelSize = 1.0 / viewportSize;

 iterationCount = 0.0;

 for (int i = 0; i < MAX_ITERATION; i++)
 {
 pqk += dPQK;

 rayZNear = rayZFar;
 rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);

 hitPixel = permute ? pqk.yx : pqk.xy;
 hitPixel *= texelSize;

 intersect = rayIntersectDepth(rayZNear, rayZFar, hitPixel);

 iterationCount += 1.0;

 dPQK *= 1.2;

 if (intersect) {
 break;
 }
 }

 Q0.xy += dQ.xy * iterationCount;
 Q0.z = pqk.z;
 hitPoint = Q0 / pqk.w;

 return intersect;
}

float calculateAlpha(
 float iterationCount, float reflectivity,
 vec2 hitPixel, vec3 hitPoint, float dist, vec3 rayDir
)
{
 float alpha = clamp(reflectivity, 0.0, 1.0);
 alpha *= 1.0 - (iterationCount / float(MAX_ITERATION));
 vec2 hitPixelNDC = hitPixel * 2.0 - 1.0;
 float maxDimension = min(1.0, max(abs(hitPixelNDC.x), abs(hitPixelNDC.y)));
 alpha *= 1.0 - max(0.0, maxDimension - screenEdgeFadeStart) / (1.0 - screenEdgeFadeStart);

 float _eyeFadeStart = eyeFadeStart;
 float _eyeFadeEnd = eyeFadeEnd;
 if (_eyeFadeStart > _eyeFadeEnd) {
 float tmp = _eyeFadeEnd;
 _eyeFadeEnd = _eyeFadeStart;
 _eyeFadeStart = tmp;
 }

 float eyeDir = clamp(rayDir.z, _eyeFadeStart, _eyeFadeEnd);
 alpha *= 1.0 - (eyeDir - _eyeFadeStart) / (_eyeFadeEnd - _eyeFadeStart);

 alpha *= 1.0 - clamp(dist / maxRayDistance, 0.0, 1.0);

 return alpha;
}

@import clay.util.rand

@import clay.util.rgbm

void main()
{
 vec4 normalAndGloss = texture2D(gBufferTexture1, v_Texcoord);

 if (dot(normalAndGloss.rgb, vec3(1.0)) == 0.0) {
 discard;
 }

 float g = normalAndGloss.a;
#if !defined(PHYSICALLY_CORRECT)
 if (g <= minGlossiness) {
 discard;
 }
#endif

 float reflectivity = (g - minGlossiness) / (1.0 - minGlossiness);

 vec3 N = normalize(normalAndGloss.rgb * 2.0 - 1.0);
 N = normalize((toViewSpace * vec4(N, 0.0)).xyz);

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, fetchDepth(gBufferTexture2, v_Texcoord), 1.0);
 vec4 pos = projectionInv * projectedPos;
 vec3 rayOrigin = pos.xyz / pos.w;
 vec3 V = -normalize(rayOrigin);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 float iterationCount;
 float jitter = rand(fract(v_Texcoord + jitterOffset));

#ifdef PHYSICALLY_CORRECT
 vec4 color = vec4(vec3(0.0), 1.0);
 vec4 albedoMetalness = texture2D(gBufferTexture3, v_Texcoord);
 vec3 albedo = albedoMetalness.rgb;
 float m = albedoMetalness.a;
 vec3 diffuseColor = albedo * (1.0 - m);
 vec3 spec = mix(vec3(0.04), albedo, m);

 float jitter2 = rand(fract(v_Texcoord)) * float(TOTAL_SAMPLES);

 for (int i = 0; i < SAMPLE_PER_FRAME; i++) {
 vec3 H = importanceSampleNormalGGX(float(i) + jitter2, 1.0 - g, N);
 vec3 rayDir = normalize(reflect(-V, H));
#else
 vec3 rayDir = normalize(reflect(-V, N));
#endif
 vec2 hitPixel;
 vec3 hitPoint;

 bool intersect = traceScreenSpaceRay(rayOrigin, rayDir, jitter, hitPixel, hitPoint, iterationCount);

 float dist = distance(rayOrigin, hitPoint);

 vec3 hitNormal = texture2D(gBufferTexture1, hitPixel).rgb * 2.0 - 1.0;
 hitNormal = normalize((toViewSpace * vec4(hitNormal, 0.0)).xyz);
#ifdef PHYSICALLY_CORRECT
 float ndl = clamp(dot(N, rayDir), 0.0, 1.0);
 float vdh = clamp(dot(V, H), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);
 vec3 litTexel = vec3(0.0);
 if (dot(hitNormal, rayDir) < 0.0 && intersect) {
 litTexel = texture2D(sourceTexture, hitPixel).rgb;
 litTexel *= pow(clamp(1.0 - dist / 200.0, 0.0, 1.0), 3.0);

 }
 else {
 #ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 litTexel = RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, 0.0), 8.12).rgb * specularIntensity;
#endif
 }
 color.rgb += ndl * litTexel * (
 F_Schlick(ndl, spec) * G_Smith(g, ndv, ndl) * vdh / (ndh * ndv + 0.001)
 );
 }
 color.rgb /= float(SAMPLE_PER_FRAME);
#else
 #if !defined(SPECULARCUBEMAP_ENABLED)
 if (dot(hitNormal, rayDir) >= 0.0) {
 discard;
 }
 if (!intersect) {
 discard;
 }
#endif
 float alpha = clamp(calculateAlpha(iterationCount, reflectivity, hitPixel, hitPoint, dist, rayDir), 0.0, 1.0);
 vec4 color = texture2D(sourceTexture, hitPixel);
 color.rgb *= alpha;

#ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 alpha = alpha * (intersect ? 1.0 : 0.0);
 float bias = (1.0 -g) * 5.0;
 color.rgb += (1.0 - alpha)
 * RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, bias), 8.12).rgb
 * specularIntensity;
#endif

#endif

 gl_FragColor = encodeHDR(color);
}
@end

@export ecgl.ssr.blur

uniform sampler2D texture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform mat4 projection;
uniform float depthRange : 0.05;

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

#ifdef BLEND
 #ifdef SSAOTEX_ENABLED
uniform sampler2D ssaoTex;
 #endif
uniform sampler2D sourceTexture;
#endif

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(gBufferTexture2, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}

@import clay.util.rgbm


void main()
{
 @import clay.compositor.kernel.gaussian_9

 vec4 centerNTexel = texture2D(gBufferTexture1, v_Texcoord);
 float g = centerNTexel.a;
 float maxBlurSize = clamp(1.0 - g, 0.0, 1.0) * blurSize;
#ifdef VERTICAL
 vec2 off = vec2(0.0, maxBlurSize / textureSize.y);
#else
 vec2 off = vec2(maxBlurSize / textureSize.x, 0.0);
#endif

 vec2 coord = v_Texcoord;

 vec4 sum = vec4(0.0);
 float weightAll = 0.0;

 vec3 cN = centerNTexel.rgb * 2.0 - 1.0;
 float cD = getLinearDepth(v_Texcoord);
 for (int i = 0; i < 9; i++) {
 vec2 coord = clamp((float(i) - 4.0) * off + v_Texcoord, vec2(0.0), vec2(1.0));
 float w = gaussianKernel[i]
 * clamp(dot(cN, texture2D(gBufferTexture1, coord).rgb * 2.0 - 1.0), 0.0, 1.0);
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(cD - d) / depthRange, 0.0, 1.0));

 weightAll += w;
 sum += decodeHDR(texture2D(texture, coord)) * w;
 }

#ifdef BLEND
 float aoFactor = 1.0;
 #ifdef SSAOTEX_ENABLED
 aoFactor = texture2D(ssaoTex, v_Texcoord).r;
 #endif
 gl_FragColor = encodeHDR(
 sum / weightAll * aoFactor + decodeHDR(texture2D(sourceTexture, v_Texcoord))
 );
#else
 gl_FragColor = encodeHDR(sum / weightAll);
#endif
}

@end`;b.import(Ff);function pt(e){e=e||{},this._ssrPass=new Pe({fragment:b.source("ecgl.ssr.main"),clearColor:[0,0,0,0]}),this._blurPass1=new Pe({fragment:b.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blurPass2=new Pe({fragment:b.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blendPass=new Pe({fragment:b.source("clay.compositor.blend")}),this._blendPass.material.disableTexturesAll(),this._blendPass.material.enableTexture(["texture1","texture2"]),this._ssrPass.setUniform("gBufferTexture1",e.normalTexture),this._ssrPass.setUniform("gBufferTexture2",e.depthTexture),this._blurPass1.setUniform("gBufferTexture1",e.normalTexture),this._blurPass1.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.setUniform("gBufferTexture1",e.normalTexture),this._blurPass2.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.material.define("fragment","VERTICAL"),this._blurPass2.material.define("fragment","BLEND"),this._ssrTexture=new re({type:W.HALF_FLOAT}),this._texture2=new re({type:W.HALF_FLOAT}),this._texture3=new re({type:W.HALF_FLOAT}),this._prevTexture=new re({type:W.HALF_FLOAT}),this._currentTexture=new re({type:W.HALF_FLOAT}),this._frameBuffer=new Re({depthBuffer:!1}),this._normalDistribution=null,this._totalSamples=256,this._samplePerFrame=4,this._ssrPass.material.define("fragment","SAMPLE_PER_FRAME",this._samplePerFrame),this._ssrPass.material.define("fragment","TOTAL_SAMPLES",this._totalSamples),this._downScale=1}pt.prototype.setAmbientCubemap=function(e,t){this._ssrPass.material.set("specularCubemap",e),this._ssrPass.material.set("specularIntensity",t);var r=e&&t;this._ssrPass.material[r?"enableTexture":"disableTexture"]("specularCubemap")};pt.prototype.update=function(e,t,r,n){var i=e.getWidth(),a=e.getHeight(),o=this._ssrTexture,s=this._texture2,l=this._texture3;o.width=this._prevTexture.width=this._currentTexture.width=i/this._downScale,o.height=this._prevTexture.height=this._currentTexture.height=a/this._downScale,s.width=l.width=i,s.height=l.height=a;var u=this._frameBuffer,f=this._ssrPass,c=this._blurPass1,d=this._blurPass2,h=this._blendPass,v=new O,p=new O;O.transpose(v,t.worldTransform),O.transpose(p,t.viewMatrix),f.setUniform("sourceTexture",r),f.setUniform("projection",t.projectionMatrix.array),f.setUniform("projectionInv",t.invProjectionMatrix.array),f.setUniform("toViewSpace",v.array),f.setUniform("toWorldSpace",p.array),f.setUniform("nearZ",t.near);var m=n/this._totalSamples*this._samplePerFrame;if(f.setUniform("jitterOffset",m),f.setUniform("sampleOffset",n*this._samplePerFrame),c.setUniform("textureSize",[o.width,o.height]),d.setUniform("textureSize",[i,a]),d.setUniform("sourceTexture",r),c.setUniform("projection",t.projectionMatrix.array),d.setUniform("projection",t.projectionMatrix.array),u.attach(o),u.bind(e),f.render(e),this._physicallyCorrect&&(u.attach(this._currentTexture),h.setUniform("texture1",this._prevTexture),h.setUniform("texture2",o),h.material.set({weight1:n>=1?.95:0,weight2:n>=1?.05:1}),h.render(e)),u.attach(s),c.setUniform("texture",this._physicallyCorrect?this._currentTexture:o),c.render(e),u.attach(l),d.setUniform("texture",s),d.render(e),u.unbind(e),this._physicallyCorrect){var _=this._prevTexture;this._prevTexture=this._currentTexture,this._currentTexture=_}};pt.prototype.getTargetTexture=function(){return this._texture3};pt.prototype.setParameter=function(e,t){e==="maxIteration"?this._ssrPass.material.define("fragment","MAX_ITERATION",t):this._ssrPass.setUniform(e,t)};pt.prototype.setPhysicallyCorrect=function(e){e?(this._normalDistribution||(this._normalDistribution=Xr.generateNormalDistribution(64,this._totalSamples)),this._ssrPass.material.define("fragment","PHYSICALLY_CORRECT"),this._ssrPass.material.set("normalDistribution",this._normalDistribution),this._ssrPass.material.set("normalDistributionSize",[64,this._totalSamples])):this._ssrPass.material.undefine("fragment","PHYSICALLY_CORRECT"),this._physicallyCorrect=e};pt.prototype.setSSAOTexture=function(e){var t=this._blurPass2;e?(t.material.enableTexture("ssaoTex"),t.material.set("ssaoTex",e)):t.material.disableTexture("ssaoTex")};pt.prototype.isFinished=function(e){return this._physicallyCorrect?e>this._totalSamples/this._samplePerFrame:!0};pt.prototype.dispose=function(e){this._ssrTexture.dispose(e),this._texture2.dispose(e),this._texture3.dispose(e),this._prevTexture.dispose(e),this._currentTexture.dispose(e),this._frameBuffer.dispose(e)};var oo=[0,0,-.321585265978,-.154972575841,.458126042375,.188473391593,.842080129861,.527766490688,.147304551086,-.659453822776,-.331943915203,-.940619700594,.0479226680259,.54812163202,.701581552186,-.709825561388,-.295436780218,.940589268233,-.901489676764,.237713156085,.973570876096,-.109899459384,-.866792314779,-.451805525005,.330975007087,.800048655954,-.344275183665,.381779221166,-.386139432542,-.437418421534,-.576478634965,-.0148463392551,.385798197415,-.262426961053,-.666302061145,.682427250835,-.628010632582,-.732836215494,.10163141741,-.987658134403,.711995289051,-.320024291314,.0296005138058,.950296523438,.0130612307608,-.351024443122,-.879596633704,-.10478487883,.435712737232,.504254490347,.779203817497,.206477676721,.388264289969,-.896736162545,-.153106280781,-.629203242522,-.245517550697,.657969239148,.126830499058,.26862328493,-.634888119007,-.302301223431,.617074219636,.779817204925],Bf=`@export ecgl.normal.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

@import ecgl.common.normalMap.vertexHeader

@import ecgl.common.vertexAnimation.header

void main()
{

 @import ecgl.common.vertexAnimation.main

 @import ecgl.common.uv.main

 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

 @import ecgl.common.normalMap.vertexMain

 gl_Position = worldViewProjection * vec4(pos, 1.0);

}


@end


@export ecgl.normal.fragment

#define ROUGHNESS_CHANEL 0

uniform bool useBumpMap;
uniform bool useRoughnessMap;
uniform bool doubleSide;
uniform float roughness;

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform mat4 viewInverse : VIEWINVERSE;

@import ecgl.common.normalMap.fragmentHeader
@import ecgl.common.bumpMap.header

uniform sampler2D roughnessMap;

void main()
{
 vec3 N = v_Normal;
 
 bool flipNormal = false;
 if (doubleSide) {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 flipNormal = true;
 }
 }

 @import ecgl.common.normalMap.fragmentMain

 if (useBumpMap) {
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 }

 float g = 1.0 - roughness;

 if (useRoughnessMap) {
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
 }

 if (flipNormal) {
 N = -N;
 }

 gl_FragColor.rgb = (N.xyz + 1.0) * 0.5;
 gl_FragColor.a = g;
}
@end`;b.import(Bf);function ai(e,t,r,n,i){var a=e.gl;t.setUniform(a,"1i",r,i),a.activeTexture(a.TEXTURE0+i),n.isRenderable()?n.bind(e):n.unbind(e)}function Uf(e,t,r,n,i){var a,o,s,l,u=e.gl;return function(f,c,d){if(!(l&&l.material===f.material)){var h=f.material,v=f.__program,p=h.get("roughness");p==null&&(p=1);var m=h.get("normalMap")||t,_=h.get("roughnessMap"),x=h.get("bumpMap"),T=h.get("uvRepeat"),y=h.get("uvOffset"),E=h.get("detailUvRepeat"),S=h.get("detailUvOffset"),L=!!x&&h.isTextureEnabled("bumpMap"),R=!!_&&h.isTextureEnabled("roughnessMap"),N=h.isDefined("fragment","DOUBLE_SIDED");x=x||r,_=_||n,d!==c?(c.set("normalMap",m),c.set("bumpMap",x),c.set("roughnessMap",_),c.set("useBumpMap",L),c.set("useRoughnessMap",R),c.set("doubleSide",N),T!=null&&c.set("uvRepeat",T),y!=null&&c.set("uvOffset",y),E!=null&&c.set("detailUvRepeat",E),S!=null&&c.set("detailUvOffset",S),c.set("roughness",p)):(v.setUniform(u,"1f","roughness",p),a!==m&&ai(e,v,"normalMap",m,0),o!==x&&x&&ai(e,v,"bumpMap",x,1),s!==_&&_&&ai(e,v,"roughnessMap",_,2),T!=null&&v.setUniform(u,"2f","uvRepeat",T),y!=null&&v.setUniform(u,"2f","uvOffset",y),E!=null&&v.setUniform(u,"2f","detailUvRepeat",E),S!=null&&v.setUniform(u,"2f","detailUvOffset",S),v.setUniform(u,"1i","useBumpMap",+L),v.setUniform(u,"1i","useRoughnessMap",+R),v.setUniform(u,"1i","doubleSide",+N)),a=m,o=x,s=_,l=f}}}function Qt(e){this._depthTex=new re({format:W.DEPTH_COMPONENT,type:W.UNSIGNED_INT}),this._normalTex=new re({type:W.HALF_FLOAT}),this._framebuffer=new Re,this._framebuffer.attach(this._normalTex),this._framebuffer.attach(this._depthTex,Re.DEPTH_ATTACHMENT),this._normalMaterial=new ut({shader:new b(b.source("ecgl.normal.vertex"),b.source("ecgl.normal.fragment"))}),this._normalMaterial.enableTexture(["normalMap","bumpMap","roughnessMap"]),this._defaultNormalMap=Mt.createBlank("#000"),this._defaultBumpMap=Mt.createBlank("#000"),this._defaultRoughessMap=Mt.createBlank("#000"),this._debugPass=new Pe({fragment:b.source("clay.compositor.output")}),this._debugPass.setUniform("texture",this._normalTex),this._debugPass.material.undefine("fragment","OUTPUT_ALPHA")}Qt.prototype.getDepthTexture=function(){return this._depthTex};Qt.prototype.getNormalTexture=function(){return this._normalTex};Qt.prototype.update=function(e,t,r){var n=e.getWidth(),i=e.getHeight(),a=this._depthTex,o=this._normalTex,s=this._normalMaterial;a.width=n,a.height=i,o.width=n,o.height=i;var l=t.getRenderList(r).opaque;this._framebuffer.bind(e),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.gl.disable(e.gl.BLEND),e.renderPass(l,r,{getMaterial:function(){return s},ifRender:function(u){return u.renderNormal},beforeRender:Uf(e,this._defaultNormalMap,this._defaultBumpMap,this._defaultRoughessMap,this._normalMaterial),sort:e.opaqueSortCompare}),this._framebuffer.unbind(e)};Qt.prototype.renderDebug=function(e){this._debugPass.render(e)};Qt.prototype.dispose=function(e){this._depthTex.dispose(e),this._normalTex.dispose(e)};function Ar(e){e=e||{},this._edgePass=new Pe({fragment:b.source("ecgl.edge")}),this._edgePass.setUniform("normalTexture",e.normalTexture),this._edgePass.setUniform("depthTexture",e.depthTexture),this._targetTexture=new re({type:W.HALF_FLOAT}),this._frameBuffer=new Re,this._frameBuffer.attach(this._targetTexture)}Ar.prototype.update=function(e,t,r,n){var i=e.getWidth(),a=e.getHeight(),o=this._targetTexture;o.width=i,o.height=a;var s=this._frameBuffer;s.bind(e),this._edgePass.setUniform("projectionInv",t.invProjectionMatrix.array),this._edgePass.setUniform("textureSize",[i,a]),this._edgePass.setUniform("texture",r),this._edgePass.render(e),s.unbind(e)};Ar.prototype.getTargetTexture=function(){return this._targetTexture};Ar.prototype.setParameter=function(e,t){this._edgePass.setUniform(e,t)};Ar.prototype.dispose=function(e){this._targetTexture.dispose(e),this._frameBuffer.dispose(e)};var Hf={type:"compositor",nodes:[{name:"source",type:"texture",outputs:{color:{}}},{name:"source_half",shader:"#source(clay.compositor.downsample)",inputs:{texture:"source"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bright",shader:"#source(clay.compositor.bright)",inputs:{texture:"source_half"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{threshold:2,scale:4,textureSize:"expr([width * 1.0 / 2, height / 2])"}},{name:"bright_downsample_4",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 2, height / 2] )"}},{name:"bright_downsample_8",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 4, height / 4] )"}},{name:"bright_downsample_16",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 8, height / 8] )"}},{name:"bright_downsample_32",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 32)",height:"expr(height * 1.0 / 32)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 16, height / 16] )"}},{name:"bright_upsample_16_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_32"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 32, height / 32] )"}},{name:"bright_upsample_16_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_16_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_8_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_8_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_8_blur_v",texture2:"bright_upsample_16_blur_v"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_4_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_4_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_4_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_4_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_4_blur_v",texture2:"bright_upsample_8_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_2_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_2_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_2_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_2_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_2_blur_v",texture2:"bright_upsample_4_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_full_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_full_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_full_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bloom_composite",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_full_blur_v",texture2:"bright_upsample_2_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"coc",shader:"#source(ecgl.dof.coc)",outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{focalDist:50,focalRange:30}},{name:"dof_far_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"dof_near_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_NEARFIELD:null}},{name:"dof_coc_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"coc"},outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_COC:null}},{name:"dof_composite",shader:"#source(ecgl.dof.composite)",inputs:{original:"source",blurred:"dof_far_blur",nearfield:"dof_near_blur",coc:"coc",nearcoc:"dof_coc_blur"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}}},{name:"composite",shader:"#source(clay.compositor.hdr.composite)",inputs:{texture:"source",bloom:"bloom_composite"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},defines:{}},{name:"FXAA",shader:"#source(clay.compositor.fxaa)",inputs:{texture:"composite"}}]},zf=`@export ecgl.dof.coc

uniform sampler2D depth;

uniform float zNear: 0.1;
uniform float zFar: 2000;

uniform float focalDistance: 3;
uniform float focalRange: 1;
uniform float focalLength: 30;
uniform float fstop: 2.8;

varying vec2 v_Texcoord;

@import clay.util.encode_float

void main()
{
 float z = texture2D(depth, v_Texcoord).r * 2.0 - 1.0;

 float dist = 2.0 * zNear * zFar / (zFar + zNear - z * (zFar - zNear));

 float aperture = focalLength / fstop;

 float coc;

 float uppper = focalDistance + focalRange;
 float lower = focalDistance - focalRange;
 if (dist <= uppper && dist >= lower) {
 coc = 0.5;
 }
 else {
 float focalAdjusted = dist > uppper ? uppper : lower;

 coc = abs(aperture * (focalLength * (dist - focalAdjusted)) / (dist * (focalAdjusted - focalLength)));
 coc = clamp(coc, 0.0, 2.0) / 2.00001;

 if (dist < lower) {
 coc = -coc;
 }
 coc = coc * 0.5 + 0.5;
 }

 gl_FragColor = encodeFloat(coc);
}
@end


@export ecgl.dof.composite

#define DEBUG 0

uniform sampler2D original;
uniform sampler2D blurred;
uniform sampler2D nearfield;
uniform sampler2D coc;
uniform sampler2D nearcoc;
varying vec2 v_Texcoord;

@import clay.util.rgbm
@import clay.util.float

void main()
{
 vec4 blurredColor = texture2D(blurred, v_Texcoord);
 vec4 originalColor = texture2D(original, v_Texcoord);

 float fCoc = decodeFloat(texture2D(coc, v_Texcoord));

 fCoc = abs(fCoc * 2.0 - 1.0);

 float weight = smoothstep(0.0, 1.0, fCoc);
 
#ifdef NEARFIELD_ENABLED
 vec4 nearfieldColor = texture2D(nearfield, v_Texcoord);
 float fNearCoc = decodeFloat(texture2D(nearcoc, v_Texcoord));
 fNearCoc = abs(fNearCoc * 2.0 - 1.0);

 gl_FragColor = encodeHDR(
 mix(
 nearfieldColor, mix(originalColor, blurredColor, weight),
 pow(1.0 - fNearCoc, 4.0)
 )
 );
#else
 gl_FragColor = encodeHDR(mix(originalColor, blurredColor, weight));
#endif

}

@end



@export ecgl.dof.diskBlur

#define POISSON_KERNEL_SIZE 16;

uniform sampler2D texture;
uniform sampler2D coc;
varying vec2 v_Texcoord;

uniform float blurRadius : 10.0;
uniform vec2 textureSize : [512.0, 512.0];

uniform vec2 poissonKernel[POISSON_KERNEL_SIZE];

uniform float percent;

float nrand(const in vec2 n) {
 return fract(sin(dot(n.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

@import clay.util.rgbm
@import clay.util.float


void main()
{
 vec2 offset = blurRadius / textureSize;

 float rnd = 6.28318 * nrand(v_Texcoord + 0.07 * percent );
 float cosa = cos(rnd);
 float sina = sin(rnd);
 vec4 basis = vec4(cosa, -sina, sina, cosa);

#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)
 offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);
#endif

#ifdef BLUR_COC
 float cocSum = 0.0;
#else
 vec4 color = vec4(0.0);
#endif


 float weightSum = 0.0;

 for (int i = 0; i < POISSON_KERNEL_SIZE; i++) {
 vec2 ofs = poissonKernel[i];

 ofs = vec2(dot(ofs, basis.xy), dot(ofs, basis.zw));

 vec2 uv = v_Texcoord + ofs * offset;
 vec4 texel = texture2D(texture, uv);

 float w = 1.0;
#ifdef BLUR_COC
 float fCoc = decodeFloat(texel) * 2.0 - 1.0;
 cocSum += clamp(fCoc, -1.0, 0.0) * w;
#else
 texel = texel;
 #if !defined(BLUR_NEARFIELD)
 float fCoc = decodeFloat(texture2D(coc, uv)) * 2.0 - 1.0;
 w *= abs(fCoc);
 #endif
 texel.rgb *= texel.a;
 color += texel * w;
#endif

 weightSum += w;
 }

#ifdef BLUR_COC
 gl_FragColor = encodeFloat(clamp(cocSum / weightSum, -1.0, 0.0) * 0.5 + 0.5);
#else
 color /= weightSum;
 color.rgb /= (color.a + 0.0001);
 gl_FragColor = color;
#endif
}

@end`,Gf=`@export ecgl.edge

uniform sampler2D texture;

uniform sampler2D normalTexture;
uniform sampler2D depthTexture;

uniform mat4 projectionInv;

uniform vec2 textureSize;

uniform vec4 edgeColor: [0,0,0,0.8];

varying vec2 v_Texcoord;

vec3 packColor(vec2 coord) {
 float z = texture2D(depthTexture, coord).r * 2.0 - 1.0;
 vec4 p = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * p;

 return vec3(
 texture2D(normalTexture, coord).rg,
 -p4.z / p4.w / 5.0
 );
}

void main() {
 vec2 cc = v_Texcoord;
 vec3 center = packColor(cc);

 float size = clamp(1.0 - (center.z - 10.0) / 100.0, 0.0, 1.0) * 0.5;
 float dx = size / textureSize.x;
 float dy = size / textureSize.y;

 vec2 coord;
 vec3 topLeft = packColor(cc+vec2(-dx, -dy));
 vec3 top = packColor(cc+vec2(0.0, -dy));
 vec3 topRight = packColor(cc+vec2(dx, -dy));
 vec3 left = packColor(cc+vec2(-dx, 0.0));
 vec3 right = packColor(cc+vec2(dx, 0.0));
 vec3 bottomLeft = packColor(cc+vec2(-dx, dy));
 vec3 bottom = packColor(cc+vec2(0.0, dy));
 vec3 bottomRight = packColor(cc+vec2(dx, dy));

 vec3 v = -topLeft-2.0*top-topRight+bottomLeft+2.0*bottom+bottomRight;
 vec3 h = -bottomLeft-2.0*left-topLeft+bottomRight+2.0*right+topRight;

 float edge = sqrt(dot(h, h) + dot(v, v));

 edge = smoothstep(0.8, 1.0, edge);

 gl_FragColor = mix(texture2D(texture, v_Texcoord), vec4(edgeColor.rgb, 1.0), edgeColor.a * edge);
}
@end`;b.import(Ya);b.import(Ka);b.import(Za);b.import($a);b.import(Qa);b.import(Ja);b.import(eo);b.import(to);b.import(ro);b.import(zf);b.import(Gf);function so(e,t){return{color:{parameters:{width:e,height:t}}}}var oi=["composite","FXAA"];function Z(){this._width,this._height,this._dpr,this._sourceTexture=new re({type:W.HALF_FLOAT}),this._depthTexture=new re({format:W.DEPTH_COMPONENT,type:W.UNSIGNED_INT}),this._framebuffer=new Re,this._framebuffer.attach(this._sourceTexture),this._framebuffer.attach(this._depthTexture,Re.DEPTH_ATTACHMENT),this._normalPass=new Qt,this._compositor=Cf(Hf);var e=this._compositor.getNodeByName("source");e.texture=this._sourceTexture;var t=this._compositor.getNodeByName("coc");this._sourceNode=e,this._cocNode=t,this._compositeNode=this._compositor.getNodeByName("composite"),this._fxaaNode=this._compositor.getNodeByName("FXAA"),this._dofBlurNodes=["dof_far_blur","dof_near_blur","dof_coc_blur"].map(function(n){return this._compositor.getNodeByName(n)},this),this._dofBlurKernel=0,this._dofBlurKernelSize=new Float32Array(0),this._finalNodesChain=oi.map(function(n){return this._compositor.getNodeByName(n)},this);var r={normalTexture:this._normalPass.getNormalTexture(),depthTexture:this._normalPass.getDepthTexture()};this._ssaoPass=new vt(r),this._ssrPass=new pt(r),this._edgePass=new Ar(r)}Z.prototype.resize=function(e,t,r){r=r||1;var e=e*r,t=t*r,n=this._sourceTexture,i=this._depthTexture;n.width=e,n.height=t,i.width=e,i.height=t;var a={getWidth:function(){return e},getHeight:function(){return t},getDevicePixelRatio:function(){return r}};function o(s,l){if(typeof s[l]=="function"){var u=s[l].__original||s[l];s[l]=function(f){return u.call(this,a)},s[l].__original=u}}this._compositor.nodes.forEach(function(s){for(var l in s.outputs){var u=s.outputs[l].parameters;u&&(o(u,"width"),o(u,"height"))}for(var f in s.parameters)o(s.parameters,f)}),this._width=e,this._height=t,this._dpr=r};Z.prototype.getWidth=function(){return this._width};Z.prototype.getHeight=function(){return this._height};Z.prototype._ifRenderNormalPass=function(){return this._enableSSAO||this._enableEdge||this._enableSSR};Z.prototype._getPrevNode=function(e){for(var t=oi.indexOf(e.name)-1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t-=1,r=this._finalNodesChain[t];return r};Z.prototype._getNextNode=function(e){for(var t=oi.indexOf(e.name)+1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t+=1,r=this._finalNodesChain[t];return r};Z.prototype._addChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);!t||(e.inputs.texture=t.name,r?(e.outputs=so(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=e.name):e.outputs=null,this._compositor.addNode(e))};Z.prototype._removeChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);!t||(r?(t.outputs=so(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=t.name):t.outputs=null,this._compositor.removeNode(e))};Z.prototype.updateNormal=function(e,t,r,n){this._ifRenderNormalPass()&&this._normalPass.update(e,t,r)};Z.prototype.updateSSAO=function(e,t,r,n){this._ssaoPass.update(e,r,n)};Z.prototype.enableSSAO=function(){this._enableSSAO=!0};Z.prototype.disableSSAO=function(){this._enableSSAO=!1};Z.prototype.enableSSR=function(){this._enableSSR=!0};Z.prototype.disableSSR=function(){this._enableSSR=!1};Z.prototype.getSSAOTexture=function(){return this._ssaoPass.getTargetTexture()};Z.prototype.getSourceFrameBuffer=function(){return this._framebuffer};Z.prototype.getSourceTexture=function(){return this._sourceTexture};Z.prototype.disableFXAA=function(){this._removeChainNode(this._fxaaNode)};Z.prototype.enableFXAA=function(){this._addChainNode(this._fxaaNode)};Z.prototype.enableBloom=function(){this._compositeNode.inputs.bloom="bloom_composite",this._compositor.dirty()};Z.prototype.disableBloom=function(){this._compositeNode.inputs.bloom=null,this._compositor.dirty()};Z.prototype.enableDOF=function(){this._compositeNode.inputs.texture="dof_composite",this._compositor.dirty()};Z.prototype.disableDOF=function(){this._compositeNode.inputs.texture="source",this._compositor.dirty()};Z.prototype.enableColorCorrection=function(){this._compositeNode.define("COLOR_CORRECTION"),this._enableColorCorrection=!0};Z.prototype.disableColorCorrection=function(){this._compositeNode.undefine("COLOR_CORRECTION"),this._enableColorCorrection=!1};Z.prototype.enableEdge=function(){this._enableEdge=!0};Z.prototype.disableEdge=function(){this._enableEdge=!1};Z.prototype.setBloomIntensity=function(e){this._compositeNode.setParameter("bloomIntensity",e)};Z.prototype.setSSAOParameter=function(e,t){switch(e){case"quality":var r={low:6,medium:12,high:32,ultra:62}[t]||12;this._ssaoPass.setParameter("kernelSize",r);break;case"radius":this._ssaoPass.setParameter(e,t),this._ssaoPass.setParameter("bias",t/200);break;case"intensity":this._ssaoPass.setParameter(e,t);break}};Z.prototype.setDOFParameter=function(e,t){switch(e){case"focalDistance":case"focalRange":case"fstop":this._cocNode.setParameter(e,t);break;case"blurRadius":for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].setParameter("blurRadius",t);break;case"quality":var n={low:4,medium:8,high:16,ultra:32}[t]||8;this._dofBlurKernelSize=n;for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].pass.material.define("POISSON_KERNEL_SIZE",n);this._dofBlurKernel=new Float32Array(n*2);break}};Z.prototype.setSSRParameter=function(e,t){if(t!=null)switch(e){case"quality":var r={low:10,medium:15,high:30,ultra:80}[t]||20,n={low:32,medium:16,high:8,ultra:4}[t]||16;this._ssrPass.setParameter("maxIteration",r),this._ssrPass.setParameter("pixelStride",n);break;case"maxRoughness":this._ssrPass.setParameter("minGlossiness",Math.max(Math.min(1-t,1),0));break;case"physical":this.setPhysicallyCorrectSSR(t);break;default:console.warn("Unkown SSR parameter "+e)}};Z.prototype.setPhysicallyCorrectSSR=function(e){this._ssrPass.setPhysicallyCorrect(e)};Z.prototype.setEdgeColor=function(e){var t=F.parseColor(e);this._edgePass.setParameter("edgeColor",t)};Z.prototype.setExposure=function(e){this._compositeNode.setParameter("exposure",Math.pow(2,e))};Z.prototype.setColorLookupTexture=function(e,t){this._compositeNode.pass.material.setTextureImage("lut",this._enableColorCorrection?e:"none",t,{minFilter:F.Texture.NEAREST,magFilter:F.Texture.NEAREST,flipY:!1})};Z.prototype.setColorCorrection=function(e,t){this._compositeNode.setParameter(e,t)};Z.prototype.isSSREnabled=function(){return this._enableSSR};Z.prototype.composite=function(e,t,r,n,i){var a=this._sourceTexture,o=a;this._enableEdge&&(this._edgePass.update(e,r,a,i),a=o=this._edgePass.getTargetTexture()),this._enableSSR&&(this._ssrPass.update(e,r,a,i),o=this._ssrPass.getTargetTexture(),this._ssrPass.setSSAOTexture(this._enableSSAO?this._ssaoPass.getTargetTexture():null)),this._sourceNode.texture=o,this._cocNode.setParameter("depth",this._depthTexture);for(var s=this._dofBlurKernel,l=this._dofBlurKernelSize,u=Math.floor(oo.length/2/l),f=i%u,c=0;c<l*2;c++)s[c]=oo[c+f*l*2];for(var c=0;c<this._dofBlurNodes.length;c++)this._dofBlurNodes[c].setParameter("percent",i/30),this._dofBlurNodes[c].setParameter("poissonKernel",s);this._cocNode.setParameter("zNear",r.near),this._cocNode.setParameter("zFar",r.far),this._compositor.render(e,n)};Z.prototype.dispose=function(e){this._sourceTexture.dispose(e),this._depthTexture.dispose(e),this._framebuffer.dispose(e),this._compositor.dispose(e),this._normalPass.dispose(e),this._ssaoPass.dispose(e)};function si(e){for(var t=[],r=0;r<30;r++)t.push([$t(r,2),$t(r,3)]);this._haltonSequence=t,this._frame=0,this._sourceTex=new re,this._sourceFb=new Re,this._sourceFb.attach(this._sourceTex),this._prevFrameTex=new re,this._outputTex=new re;var n=this._blendPass=new Pe({fragment:b.source("clay.compositor.blend")});n.material.disableTexturesAll(),n.material.enableTexture(["texture1","texture2"]),this._blendFb=new Re({depthBuffer:!1}),this._outputPass=new Pe({fragment:b.source("clay.compositor.output"),blendWithPrevious:!0}),this._outputPass.material.define("fragment","OUTPUT_ALPHA"),this._outputPass.material.blend=function(i){i.blendEquationSeparate(i.FUNC_ADD,i.FUNC_ADD),i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA)}}si.prototype={constructor:si,jitterProjection:function(e,t){var r=e.viewport,n=r.devicePixelRatio||e.getDevicePixelRatio(),i=r.width*n,a=r.height*n,o=this._haltonSequence[this._frame%this._haltonSequence.length],s=new O;s.array[12]=(o[0]*2-1)/i,s.array[13]=(o[1]*2-1)/a,O.mul(t.projectionMatrix,s,t.projectionMatrix),O.invert(t.invProjectionMatrix,t.projectionMatrix)},resetFrame:function(){this._frame=0},getFrame:function(){return this._frame},getSourceFrameBuffer:function(){return this._sourceFb},getOutputTexture:function(){return this._outputTex},resize:function(e,t){this._prevFrameTex.width=e,this._prevFrameTex.height=t,this._outputTex.width=e,this._outputTex.height=t,this._sourceTex.width=e,this._sourceTex.height=t,this._prevFrameTex.dirty(),this._outputTex.dirty(),this._sourceTex.dirty()},isFinished:function(){return this._frame>=this._haltonSequence.length},render:function(e,t,r){var n=this._blendPass;this._frame===0?(n.setUniform("weight1",0),n.setUniform("weight2",1)):(n.setUniform("weight1",.9),n.setUniform("weight2",.1)),n.setUniform("texture1",this._prevFrameTex),n.setUniform("texture2",t||this._sourceTex),this._blendFb.attach(this._outputTex),this._blendFb.bind(e),n.render(e),this._blendFb.unbind(e),r||(this._outputPass.setUniform("texture",this._outputTex),this._outputPass.render(e));var i=this._prevFrameTex;this._prevFrameTex=this._outputTex,this._outputTex=i,this._frame++},dispose:function(e){this._sourceFb.dispose(e),this._blendFb.dispose(e),this._prevFrameTex.dispose(e),this._outputTex.dispose(e),this._sourceTex.dispose(e),this._outputPass.dispose(e),this._blendPass.dispose(e)}};function ce(e){e=e||"perspective",this.layer=null,this.scene=new xt,this.rootNode=this.scene,this.viewport={x:0,y:0,width:0,height:0},this.setProjection(e),this._compositor=new Z,this._temporalSS=new si,this._shadowMapPass=new ff;for(var t=[],r=0,n=0;n<30;n++){for(var i=[],a=0;a<6;a++)i.push($t(r,2)*4-2),i.push($t(r,3)*4-2),r++;t.push(i)}this._pcfKernels=t,this.scene.on("beforerender",function(o,s,l){this.needsTemporalSS()&&this._temporalSS.jitterProjection(o,l)},this)}ce.prototype.setProjection=function(e){var t=this.camera;t&&t.update(),e==="perspective"?this.camera instanceof Ee||(this.camera=new Ee,t&&this.camera.setLocalTransform(t.localTransform)):this.camera instanceof vr||(this.camera=new vr,t&&this.camera.setLocalTransform(t.localTransform)),this.camera.near=.1,this.camera.far=2e3};ce.prototype.setViewport=function(e,t,r,n,i){this.camera instanceof Ee&&(this.camera.aspect=r/n),i=i||1,this.viewport.x=e,this.viewport.y=t,this.viewport.width=r,this.viewport.height=n,this.viewport.devicePixelRatio=i,this._compositor.resize(r*i,n*i),this._temporalSS.resize(r*i,n*i)};ce.prototype.containPoint=function(e,t){var r=this.viewport,n=this.layer.renderer.getHeight();return t=n-t,e>=r.x&&t>=r.y&&e<=r.x+r.width&&t<=r.y+r.height};var lo=new Ge;ce.prototype.castRay=function(e,t,r){var n=this.layer.renderer,i=n.viewport;return n.viewport=this.viewport,n.screenToNDC(e,t,lo),this.camera.castRay(lo,r),n.viewport=i,r};ce.prototype.prepareRender=function(){this.scene.update(),this.camera.update(),this.scene.updateLights();var e=this.scene.updateRenderList(this.camera);this._needsSortProgressively=!1;for(var t=0;t<e.transparent.length;t++){var r=e.transparent[t],n=r.geometry;n.needsSortVerticesProgressively&&n.needsSortVerticesProgressively()&&(this._needsSortProgressively=!0),n.needsSortTrianglesProgressively&&n.needsSortTrianglesProgressively()&&(this._needsSortProgressively=!0)}this._frame=0,this._temporalSS.resetFrame()};ce.prototype.render=function(e,t){this._doRender(e,t,this._frame),this._frame++};ce.prototype.needsAccumulate=function(){return this.needsTemporalSS()||this._needsSortProgressively};ce.prototype.needsTemporalSS=function(){var e=this._enableTemporalSS;return e==="auto"&&(e=this._enablePostEffect),e};ce.prototype.hasDOF=function(){return this._enableDOF};ce.prototype.isAccumulateFinished=function(){return this.needsTemporalSS()?this._temporalSS.isFinished():this._frame>30};ce.prototype._doRender=function(e,t,r){var n=this.scene,i=this.camera;r=r||0,this._updateTransparent(e,n,i,r),t||(this._shadowMapPass.kernelPCF=this._pcfKernels[0],this._shadowMapPass.render(e,n,i,!0)),this._updateShadowPCFKernel(r);var a=e.clearColor;if(e.gl.clearColor(a[0],a[1],a[2],a[3]),this._enablePostEffect&&(this.needsTemporalSS()&&this._temporalSS.jitterProjection(e,i),this._compositor.updateNormal(e,n,i,this._temporalSS.getFrame())),this._updateSSAO(e,n,i,this._temporalSS.getFrame()),this._enablePostEffect){var o=this._compositor.getSourceFrameBuffer();o.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),e.render(n,i,!0,!0),o.unbind(e),this.needsTemporalSS()&&t?(this._compositor.composite(e,n,i,this._temporalSS.getSourceFrameBuffer(),this._temporalSS.getFrame()),e.setViewport(this.viewport),this._temporalSS.render(e)):(e.setViewport(this.viewport),this._compositor.composite(e,n,i,null,0))}else if(this.needsTemporalSS()&&t){var o=this._temporalSS.getSourceFrameBuffer();o.bind(e),e.saveClear(),e.clearBit=e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT,e.render(n,i,!0,!0),e.restoreClear(),o.unbind(e),e.setViewport(this.viewport),this._temporalSS.render(e)}else e.setViewport(this.viewport),e.render(n,i,!0,!0)};ce.prototype._updateTransparent=function(e,t,r,n){for(var i=new C,a=new O,o=r.getWorldPosition(),s=t.getRenderList(r).transparent,l=0;l<s.length;l++){var u=s[l],f=u.geometry;O.invert(a,u.worldTransform),C.transformMat4(i,o,a),f.needsSortTriangles&&f.needsSortTriangles()&&f.doSortTriangles(i,n),f.needsSortVertices&&f.needsSortVertices()&&f.doSortVertices(i,n)}};ce.prototype._updateSSAO=function(e,t,r){var n=this._enableSSAO&&this._enablePostEffect;n&&this._compositor.updateSSAO(e,t,r,this._temporalSS.getFrame());for(var i=t.getRenderList(r),a=0;a<i.opaque.length;a++){var o=i.opaque[a];o.renderNormal&&o.material[n?"enableTexture":"disableTexture"]("ssaoMap"),n&&o.material.set("ssaoMap",this._compositor.getSSAOTexture())}};ce.prototype._updateShadowPCFKernel=function(e){for(var t=this._pcfKernels[e%this._pcfKernels.length],r=this.scene.getRenderList(this.camera),n=r.opaque,i=0;i<n.length;i++)n[i].receiveShadow&&(n[i].material.set("pcfKernel",t),n[i].material.define("fragment","PCF_KERNEL_SIZE",t.length/2))};ce.prototype.dispose=function(e){this._compositor.dispose(e.gl),this._temporalSS.dispose(e.gl),this._shadowMapPass.dispose(e)};ce.prototype.setPostEffect=function(e,t){var r=this._compositor;this._enablePostEffect=e.get("enable");var n=e.getModel("bloom"),i=e.getModel("edge"),a=e.getModel("DOF",e.getModel("depthOfField")),o=e.getModel("SSAO",e.getModel("screenSpaceAmbientOcclusion")),s=e.getModel("SSR",e.getModel("screenSpaceReflection")),l=e.getModel("FXAA"),u=e.getModel("colorCorrection");n.get("enable")?r.enableBloom():r.disableBloom(),a.get("enable")?r.enableDOF():r.disableDOF(),s.get("enable")?r.enableSSR():r.disableSSR(),u.get("enable")?r.enableColorCorrection():r.disableColorCorrection(),i.get("enable")?r.enableEdge():r.disableEdge(),l.get("enable")?r.enableFXAA():r.disableFXAA(),this._enableDOF=a.get("enable"),this._enableSSAO=o.get("enable"),this._enableSSAO?r.enableSSAO():r.disableSSAO(),r.setBloomIntensity(n.get("intensity")),r.setEdgeColor(i.get("color")),r.setColorLookupTexture(u.get("lookupTexture"),t),r.setExposure(u.get("exposure")),["radius","quality","intensity"].forEach(function(f){r.setSSAOParameter(f,o.get(f))}),["quality","maxRoughness","physical"].forEach(function(f){r.setSSRParameter(f,s.get(f))}),["quality","focalDistance","focalRange","blurRadius","fstop"].forEach(function(f){r.setDOFParameter(f,a.get(f))}),["brightness","contrast","saturation"].forEach(function(f){r.setColorCorrection(f,u.get(f))})};ce.prototype.setDOFFocusOnPoint=function(e){if(this._enablePostEffect)return e>this.camera.far||e<this.camera.near?void 0:(this._compositor.setDOFParameter("focalDistance",e),!0)};ce.prototype.setTemporalSuperSampling=function(e){this._enableTemporalSS=e.get("enable")};ce.prototype.isLinearSpace=function(){return this._enablePostEffect};ce.prototype.setRootNode=function(e){if(this.rootNode!==e){for(var t=this.rootNode.children(),r=0;r<t.length;r++)e.add(t[r]);e!==this.scene&&this.scene.add(e),this.rootNode=e}};ce.prototype.add=function(e){this.rootNode.add(e)};ce.prototype.remove=function(e){this.rootNode.remove(e)};ce.prototype.removeAll=function(e){this.rootNode.removeAll(e)};Object.assign(ce.prototype,hn);var Sr=it.firstNotNull,uo={left:0,middle:1,right:2};function fo(e){return e instanceof Array||(e=[e,e]),e}var co=Be.extend(function(){return{zr:null,viewGL:null,_center:new C,minDistance:.5,maxDistance:1.5,maxOrthographicSize:300,minOrthographicSize:30,minAlpha:-90,maxAlpha:90,minBeta:-1/0,maxBeta:1/0,autoRotateAfterStill:0,autoRotateDirection:"cw",autoRotateSpeed:60,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",_mode:"rotate",_camera:null,_needsUpdate:!1,_rotating:!1,_phi:0,_theta:0,_mouseX:0,_mouseY:0,_rotateVelocity:new Ge,_panVelocity:new Ge,_distance:500,_zoomSpeed:0,_stillTimeout:0,_animators:[]}},function(){["_mouseDownHandler","_mouseWheelHandler","_mouseMoveHandler","_mouseUpHandler","_pinchHandler","_contextMenuHandler","_update"].forEach(function(e){this[e]=this[e].bind(this)},this)},{init:function(){var e=this.zr;e&&(e.on("mousedown",this._mouseDownHandler),e.on("globalout",this._mouseUpHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("pinch",this._pinchHandler),e.animation.on("frame",this._update),e.dom.addEventListener("contextmenu",this._contextMenuHandler))},dispose:function(){var e=this.zr;e&&(e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("pinch",this._pinchHandler),e.off("globalout",this._mouseUpHandler),e.dom.removeEventListener("contextmenu",this._contextMenuHandler),e.animation.off("frame",this._update)),this.stopAllAnimation()},getDistance:function(){return this._distance},setDistance:function(e){this._distance=e,this._needsUpdate=!0},getOrthographicSize:function(){return this._orthoSize},setOrthographicSize:function(e){this._orthoSize=e,this._needsUpdate=!0},getAlpha:function(){return this._theta/Math.PI*180},getBeta:function(){return-this._phi/Math.PI*180},getCenter:function(){return this._center.toArray()},setAlpha:function(e){e=Math.max(Math.min(this.maxAlpha,e),this.minAlpha),this._theta=e/180*Math.PI,this._needsUpdate=!0},setBeta:function(e){e=Math.max(Math.min(this.maxBeta,e),this.minBeta),this._phi=-e/180*Math.PI,this._needsUpdate=!0},setCenter:function(e){this._center.setArray(e)},setViewGL:function(e){this.viewGL=e},getCamera:function(){return this.viewGL.camera},setFromViewControlModel:function(e,t){t=t||{};var r=t.baseDistance||0,n=t.baseOrthoSize||1,i=e.get("projection");i!=="perspective"&&i!=="orthographic"&&i!=="isometric"&&(i="perspective"),this._projection=i,this.viewGL.setProjection(i);var a=e.get("distance")+r,o=e.get("orthographicSize")+n;[["damping",.8],["autoRotate",!1],["autoRotateAfterStill",3],["autoRotateDirection","cw"],["autoRotateSpeed",10],["minDistance",30],["maxDistance",400],["minOrthographicSize",30],["maxOrthographicSize",300],["minAlpha",-90],["maxAlpha",90],["minBeta",-1/0],["maxBeta",1/0],["rotateSensitivity",1],["zoomSensitivity",1],["panSensitivity",1],["panMouseButton","left"],["rotateMouseButton","middle"]].forEach(function(d){this[d[0]]=Sr(e.get(d[0]),d[1])},this),this.minDistance+=r,this.maxDistance+=r,this.minOrthographicSize+=n,this.maxOrthographicSize+=n;var s=e.ecModel,l={};["animation","animationDurationUpdate","animationEasingUpdate"].forEach(function(d){l[d]=Sr(e.get(d),s&&s.get(d))});var u=Sr(t.alpha,e.get("alpha"))||0,f=Sr(t.beta,e.get("beta"))||0,c=Sr(t.center,e.get("center"))||[0,0,0];l.animation&&l.animationDurationUpdate>0&&this._notFirst?this.animateTo({alpha:u,beta:f,center:c,distance:a,orthographicSize:o,easing:l.animationEasingUpdate,duration:l.animationDurationUpdate}):(this.setDistance(a),this.setAlpha(u),this.setBeta(f),this.setCenter(c),this.setOrthographicSize(o)),this._notFirst=!0,this._validateProperties()},_validateProperties:function(){},animateTo:function(e){var t=this.zr,r=this,n={},i={};return e.distance!=null&&(n.distance=this.getDistance(),i.distance=e.distance),e.orthographicSize!=null&&(n.orthographicSize=this.getOrthographicSize(),i.orthographicSize=e.orthographicSize),e.alpha!=null&&(n.alpha=this.getAlpha(),i.alpha=e.alpha),e.beta!=null&&(n.beta=this.getBeta(),i.beta=e.beta),e.center!=null&&(n.center=this.getCenter(),i.center=e.center),this._addAnimator(t.animation.animate(n).when(e.duration||1e3,i).during(function(){n.alpha!=null&&r.setAlpha(n.alpha),n.beta!=null&&r.setBeta(n.beta),n.distance!=null&&r.setDistance(n.distance),n.center!=null&&r.setCenter(n.center),n.orthographicSize!=null&&r.setOrthographicSize(n.orthographicSize),r._needsUpdate=!0})).start(e.easing||"linear")},stopAllAnimation:function(){for(var e=0;e<this._animators.length;e++)this._animators[e].stop();this._animators.length=0},update:function(){this._needsUpdate=!0,this._update(20)},_isAnimating:function(){return this._animators.length>0},_update:function(e){if(this._rotating){var t=(this.autoRotateDirection==="cw"?1:-1)*this.autoRotateSpeed/180*Math.PI;this._phi-=t*e/1e3,this._needsUpdate=!0}else this._rotateVelocity.len()>0&&(this._needsUpdate=!0);(Math.abs(this._zoomSpeed)>.1||this._panVelocity.len()>0)&&(this._needsUpdate=!0),!!this._needsUpdate&&(e=Math.min(e,50),this._updateDistanceOrSize(e),this._updatePan(e),this._updateRotate(e),this._updateTransform(),this.getCamera().update(),this.zr&&this.zr.refresh(),this.trigger("update"),this._needsUpdate=!1)},_updateRotate:function(e){var t=this._rotateVelocity;this._phi=t.y*e/20+this._phi,this._theta=t.x*e/20+this._theta,this.setAlpha(this.getAlpha()),this.setBeta(this.getBeta()),this._vectorDamping(t,Math.pow(this.damping,e/16))},_updateDistanceOrSize:function(e){this._projection==="perspective"?this._setDistance(this._distance+this._zoomSpeed*e/20):this._setOrthoSize(this._orthoSize+this._zoomSpeed*e/20),this._zoomSpeed*=Math.pow(this.damping,e/16)},_setDistance:function(e){this._distance=Math.max(Math.min(e,this.maxDistance),this.minDistance)},_setOrthoSize:function(e){this._orthoSize=Math.max(Math.min(e,this.maxOrthographicSize),this.minOrthographicSize);var t=this.getCamera(),r=this._orthoSize,n=r/this.viewGL.viewport.height*this.viewGL.viewport.width;t.left=-n/2,t.right=n/2,t.top=r/2,t.bottom=-r/2},_updatePan:function(e){var t=this._panVelocity,r=this._distance,n=this.getCamera(),i=n.worldTransform.y,a=n.worldTransform.x;this._center.scaleAndAdd(a,-t.x*r/200).scaleAndAdd(i,-t.y*r/200),this._vectorDamping(t,0)},_updateTransform:function(){var e=this.getCamera(),t=new C,r=this._theta+Math.PI/2,n=this._phi+Math.PI/2,i=Math.sin(r);t.x=i*Math.cos(n),t.y=-Math.cos(r),t.z=i*Math.sin(n),e.position.copy(this._center).scaleAndAdd(t,this._distance),e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)},_startCountingStill:function(){clearTimeout(this._stillTimeout);var e=this.autoRotateAfterStill,t=this;!isNaN(e)&&e>0&&(this._stillTimeout=setTimeout(function(){t._rotating=!0},e*1e3))},_vectorDamping:function(e,t){var r=e.len();r=r*t,r<1e-4&&(r=0),e.normalize().scale(r)},_decomposeTransform:function(){if(!!this.getCamera()){this.getCamera().updateWorldTransform();var e=this.getCamera().worldTransform.z,t=Math.asin(e.y),r=Math.atan2(e.x,e.z);this._theta=t,this._phi=-r,this.setBeta(this.getBeta()),this.setAlpha(this.getAlpha()),this.getCamera().aspect?this._setDistance(this.getCamera().position.dist(this._center)):this._setOrthoSize(this.getCamera().top-this.getCamera().bottom)}},_mouseDownHandler:function(e){if(!e.target&&!this._isAnimating()){var t=e.offsetX,r=e.offsetY;this.viewGL&&!this.viewGL.containPoint(t,r)||(this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler),e.event.targetTouches?e.event.targetTouches.length===1&&(this._mode="rotate"):e.event.button===uo[this.rotateMouseButton]?this._mode="rotate":e.event.button===uo[this.panMouseButton]?this._mode="pan":this._mode="",this._rotateVelocity.set(0,0),this._rotating=!1,this.autoRotate&&this._startCountingStill(),this._mouseX=e.offsetX,this._mouseY=e.offsetY)}},_mouseMoveHandler:function(e){if(!(e.target&&e.target.__isGLToZRProxy)&&!this._isAnimating()){var t=fo(this.panSensitivity),r=fo(this.rotateSensitivity);this._mode==="rotate"?(this._rotateVelocity.y=(e.offsetX-this._mouseX)/this.zr.getHeight()*2*r[0],this._rotateVelocity.x=(e.offsetY-this._mouseY)/this.zr.getWidth()*2*r[1]):this._mode==="pan"&&(this._panVelocity.x=(e.offsetX-this._mouseX)/this.zr.getWidth()*t[0]*400,this._panVelocity.y=(-e.offsetY+this._mouseY)/this.zr.getHeight()*t[1]*400),this._mouseX=e.offsetX,this._mouseY=e.offsetY,e.event.preventDefault()}},_mouseWheelHandler:function(e){if(!this._isAnimating()){var t=e.event.wheelDelta||-e.event.detail;this._zoomHandler(e,t)}},_pinchHandler:function(e){this._isAnimating()||(this._zoomHandler(e,e.pinchScale>1?1:-1),this._mode="")},_zoomHandler:function(e,t){if(t!==0){var r=e.offsetX,n=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(r,n))){var i;this._projection==="perspective"?i=Math.max(Math.max(Math.min(this._distance-this.minDistance,this.maxDistance-this._distance))/20,.5):i=Math.max(Math.max(Math.min(this._orthoSize-this.minOrthographicSize,this.maxOrthographicSize-this._orthoSize))/20,.5),this._zoomSpeed=(t>0?-1:1)*i*this.zoomSensitivity,this._rotating=!1,this.autoRotate&&this._mode==="rotate"&&this._startCountingStill(),e.event.preventDefault()}}},_mouseUpHandler:function(){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_isRightMouseButtonUsed:function(){return this.rotateMouseButton==="right"||this.panMouseButton==="right"},_contextMenuHandler:function(e){this._isRightMouseButtonUsed()&&e.preventDefault()},_addAnimator:function(e){var t=this._animators;return t.push(e),e.done(function(){var r=t.indexOf(e);r>=0&&t.splice(r,1)}),e}});Object.defineProperty(co.prototype,"autoRotate",{get:function(e){return this._autoRotate},set:function(e){this._autoRotate=e,this._rotating=e}});var Vf=co;function li(){}li.prototype={constructor:li,setScene:function(e){this._scene=e,this._skybox&&this._skybox.attachScene(this._scene)},initLight:function(e){this._lightRoot=e,this.mainLight=new F.DirectionalLight({shadowBias:.005}),this.ambientLight=new F.AmbientLight,e.add(this.mainLight),e.add(this.ambientLight)},dispose:function(){this._lightRoot&&(this._lightRoot.remove(this.mainLight),this._lightRoot.remove(this.ambientLight))},updateLight:function(e){var t=this.mainLight,r=this.ambientLight,n=e.getModel("light"),i=n.getModel("main"),a=n.getModel("ambient");t.intensity=i.get("intensity"),r.intensity=a.get("intensity"),t.color=F.parseColor(i.get("color")).slice(0,3),r.color=F.parseColor(a.get("color")).slice(0,3);var o=i.get("alpha")||0,s=i.get("beta")||0;t.position.setArray(F.directionFromAlphaBeta(o,s)),t.lookAt(F.Vector3.ZERO),t.castShadow=i.get("shadow"),t.shadowResolution=F.getShadowResolution(i.get("shadowQuality"))},updateAmbientCubemap:function(e,t,r){var n=t.getModel("light.ambientCubemap"),i=n.get("texture");if(i){this._cubemapLightsCache=this._cubemapLightsCache||{};var a=this._cubemapLightsCache[i];if(!a){var o=this;a=this._cubemapLightsCache[i]=F.createAmbientCubemap(n.option,e,r,function(){o._isSkyboxFromAmbientCubemap&&o._skybox.setEnvironmentMap(a.specular.cubemap),r.getZr().refresh()})}this._lightRoot.add(a.diffuse),this._lightRoot.add(a.specular),this._currentCubemapLights=a}else this._currentCubemapLights&&(this._lightRoot.remove(this._currentCubemapLights.diffuse),this._lightRoot.remove(this._currentCubemapLights.specular),this._currentCubemapLights=null)},updateSkybox:function(e,t,r){var n=t.get("environment"),i=this;function a(){return i._skybox=i._skybox||new dr,i._skybox}var o=a();if(n&&n!=="none")if(n==="auto")if(this._isSkyboxFromAmbientCubemap=!0,this._currentCubemapLights){var s=this._currentCubemapLights.specular.cubemap;o.setEnvironmentMap(s),this._scene&&o.attachScene(this._scene),o.material.set("lod",3)}else this._skybox&&this._skybox.detachScene();else if(typeof n=="object"&&n.colorStops||typeof n=="string"&&di(n)){this._isSkyboxFromAmbientCubemap=!1;var l=new F.Texture2D({anisotropic:8,flipY:!1});o.setEnvironmentMap(l);var u=l.image=document.createElement("canvas");u.width=u.height=16;var f=u.getContext("2d"),c=new vi({shape:{x:0,y:0,width:16,height:16},style:{fill:n}});Xo(f,c),o.attachScene(this._scene)}else{this._isSkyboxFromAmbientCubemap=!1;var l=F.loadTexture(n,r,{anisotropic:8,flipY:!1});o.setEnvironmentMap(l),o.attachScene(this._scene)}else this._skybox&&this._skybox.detachScene(this._scene),this._skybox=null;var d=t.coordinateSystem;if(this._skybox)if(d&&d.viewGL&&n!=="auto"&&!(n.match&&n.match(/.hdr$/))){var h=d.viewGL.isLinearSpace()?"define":"undefine";this._skybox.material[h]("fragment","SRGB_DECODE")}else this._skybox.material.undefine("fragment","SRGB_DECODE")}};function ho(e,t){e.id=e.id||e.name||t+""}var It=qo.extend({type:"globe",layoutMode:"box",coordinateSystem:null,init:function(){It.superApply(this,"init",arguments),rr(this.option.layers,function(e,t){wt(e,this.defaultLayerOption),ho(e,t)},this)},mergeOption:function(e){var t=this.option.layers;this.option.layers=null,It.superApply(this,"mergeOption",arguments);function r(o){return jo(o,function(s,l,u){return ho(l,u),s[l.id]=l,s},{})}if(t&&t.length){var n=r(e.layers),i=r(t);for(var a in n)i[a]?wt(i[a],n[a],!0):t.push(e.layers[a]);this.option.layers=t}rr(this.option.layers,function(o){wt(o,this.defaultLayerOption)},this)},optionUpdated:function(){this.updateDisplacementHash()},defaultLayerOption:{show:!0,type:"overlay"},defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",baseColor:"#fff",baseTexture:"",heightTexture:"",displacementTexture:"",displacementScale:0,displacementQuality:"medium",globeRadius:100,globeOuterRadius:150,shading:"lambert",light:{main:{time:""}},atmosphere:{show:!1,offset:5,color:"#ffffff",glowPower:6,innerGlowPower:2},viewControl:{autoRotate:!0,panSensitivity:0,targetCoord:null},layers:[]},setDisplacementData:function(e,t,r){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=r},getDisplacementTexture:function(){return this.get("displacementTexture")||this.get("heightTexture")},getDisplacemenScale:function(){var e=this.getDisplacementTexture(),t=this.get("displacementScale");return(!e||e==="none")&&(t=0),t},hasDisplacement:function(){return this.getDisplacemenScale()>0},_displacementChanged:!0,_displacementScale:0,updateDisplacementHash:function(){var e=this.getDisplacementTexture(),t=this.getDisplacemenScale();this._displacementChanged=this._displacementTexture!==e||this._displacementScale!==t,this._displacementTexture=e,this._displacementScale=t},isDisplacementChanged:function(){return this._displacementChanged}});wt(It.prototype,nf);wt(It.prototype,af);wt(It.prototype,of);wt(It.prototype,ku);var kf=It,vo=Math.PI,$e=Math.sin,mt=Math.cos,po=Math.tan,mo=Math.asin,_o=Math.atan2,Ot=vo/180,Wf=1e3*60*60*24,Xf=2440588,qf=2451545;function jf(e){return e.valueOf()/Wf-.5+Xf}function Yf(e){return jf(e)-qf}var on=Ot*23.4397;function Kf(e,t){return _o($e(e)*mt(on)-po(t)*$e(on),mt(e))}function Zf(e,t){return mo($e(t)*mt(on)+mt(t)*$e(on)*$e(e))}function $f(e,t,r){return _o($e(e),mt(e)*$e(t)-po(r)*mt(t))}function Qf(e,t,r){return mo($e(t)*$e(r)+mt(t)*mt(r)*mt(e))}function Jf(e,t){return Ot*(280.16+360.9856235*e)-t}function ec(e){return Ot*(357.5291+.98560028*e)}function tc(e){var t=Ot*(1.9148*$e(e)+.02*$e(2*e)+3e-4*$e(3*e)),r=Ot*102.9372;return e+t+r+vo}function rc(e){var t=ec(e),r=tc(t);return{dec:Zf(r,0),ra:Kf(r,0)}}var go={};go.getPosition=function(e,t,r){var n=Ot*-r,i=Ot*t,a=Yf(e),o=rc(a),s=Jf(a,n)-o.ra;return{azimuth:$f(s,i,o.dec),altitude:Qf(s,i,o.dec)}};var nc=go,ic=`@export ecgl.atmosphere.vertex
attribute vec3 position: POSITION;
attribute vec3 normal : NORMAL;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 normalMatrix : WORLDINVERSETRANSPOSE;

varying vec3 v_Normal;

void main() {
 v_Normal = normalize((normalMatrix * vec4(normal, 0.0)).xyz);
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end


@export ecgl.atmosphere.fragment
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform float glowPower;
uniform vec3 glowColor;

varying vec3 v_Normal;

void main() {
 float intensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor = vec4(glowColor, intensity * intensity);
}
@end`;F.Shader.import(Ea);F.Shader.import(ic);var ac=Yo.extend({type:"globe",__ecgl__:!0,_displacementScale:0,init:function(e,t){this.groupGL=new F.Node,this._sphereGeometry=new F.SphereGeometry({widthSegments:200,heightSegments:100,dynamic:!0}),this._overlayGeometry=new F.SphereGeometry({widthSegments:80,heightSegments:40}),this._planeGeometry=new F.PlaneGeometry,this._earthMesh=new F.Mesh({renderNormal:!0}),this._atmosphereMesh=new F.Mesh,this._atmosphereGeometry=new F.SphereGeometry({widthSegments:80,heightSegments:40}),this._atmosphereMaterial=new F.Material({shader:new F.Shader(F.Shader.source("ecgl.atmosphere.vertex"),F.Shader.source("ecgl.atmosphere.fragment")),transparent:!0}),this._atmosphereMesh.geometry=this._atmosphereGeometry,this._atmosphereMesh.material=this._atmosphereMaterial,this._atmosphereMesh.frontFace=F.Mesh.CW,this._lightRoot=new F.Node,this._sceneHelper=new li,this._sceneHelper.initLight(this._lightRoot),this.groupGL.add(this._atmosphereMesh),this.groupGL.add(this._earthMesh),this._control=new Vf({zr:t.getZr()}),this._control.init(),this._layerMeshes={}},render:function(e,t,r){var n=e.coordinateSystem,i=e.get("shading");n.viewGL.add(this._lightRoot),e.get("show")?n.viewGL.add(this.groupGL):n.viewGL.remove(this.groupGL),this._sceneHelper.setScene(n.viewGL.scene),n.viewGL.setPostEffect(e.getModel("postEffect"),r),n.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var a=this._earthMesh;a.geometry=this._sphereGeometry;var o="ecgl."+i;(!a.material||a.material.shader.name!==o)&&(a.material=F.createMaterial(o)),F.setMaterialFromModel(i,a.material,e,r),["roughnessMap","metalnessMap","detailMap","normalMap"].forEach(function(c){var d=a.material.get(c);d&&(d.flipY=!1)}),a.material.set("color",F.parseColor(e.get("baseColor")));var s=n.radius*.99;if(a.scale.set(s,s,s),e.get("atmosphere.show")){a.material.define("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!1,this._atmosphereMaterial.setUniforms({glowPower:e.get("atmosphere.glowPower")||6,glowColor:e.get("atmosphere.color")||"#ffffff"}),a.material.setUniforms({glowPower:e.get("atmosphere.innerGlowPower")||2,glowColor:e.get("atmosphere.color")||"#ffffff"});var l=e.get("atmosphere.offset")||5;this._atmosphereMesh.scale.set(s+l,s+l,s+l)}else a.material.undefine("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!0;var u=a.material.setTextureImage("diffuseMap",e.get("baseTexture"),r,{flipY:!1,anisotropic:8});u&&u.surface&&u.surface.attachToMesh(a);var f=a.material.setTextureImage("bumpMap",e.get("heightTexture"),r,{flipY:!1,anisotropic:8});f&&f.surface&&f.surface.attachToMesh(a),a.material[e.get("postEffect.enable")?"define":"undefine"]("fragment","SRGB_DECODE"),this._updateLight(e,r),this._displaceVertices(e,r),this._updateViewControl(e,r),this._updateLayers(e,r)},afterRender:function(e,t,r,n){var i=n.renderer;this._sceneHelper.updateAmbientCubemap(i,e,r),this._sceneHelper.updateSkybox(i,e,r)},_updateLayers:function(e,t){var r=e.coordinateSystem,n=e.get("layers"),i=r.radius,a=[],o=[],s=[],l=[];rr(n,function(h){var v=new fn(h),p=v.get("type"),m=F.loadTexture(v.get("texture"),t,{flipY:!1,anisotropic:8});if(m.surface&&m.surface.attachToMesh(this._earthMesh),p==="blend"){var _=v.get("blendTo"),x=it.firstNotNull(v.get("intensity"),1);_==="emission"?(s.push(m),l.push(x)):(a.push(m),o.push(x))}else{var T=v.get("id"),y=this._layerMeshes[T];y||(y=this._layerMeshes[T]=new F.Mesh({geometry:this._overlayGeometry,castShadow:!1,ignorePicking:!0}));var E=v.get("shading");E==="lambert"?(y.material=y.__lambertMaterial||new F.Material({autoUpdateTextureStatus:!1,shader:F.createShader("ecgl.lambert"),transparent:!0,depthMask:!1}),y.__lambertMaterial=y.material):(y.material=y.__colorMaterial||new F.Material({autoUpdateTextureStatus:!1,shader:F.createShader("ecgl.color"),transparent:!0,depthMask:!1}),y.__colorMaterial=y.material),y.material.enableTexture("diffuseMap");var S=v.get("distance"),L=i+(S==null?r.radius/100:S);y.scale.set(L,L,L),i=L;var R=this._blankTexture||(this._blankTexture=F.createBlankTexture("rgba(255, 255, 255, 0)"));y.material.set("diffuseMap",R),F.loadTexture(v.get("texture"),t,{flipY:!1,anisotropic:8},function(N){N.surface&&N.surface.attachToMesh(y),y.material.set("diffuseMap",N),t.getZr().refresh()}),v.get("show")?this.groupGL.add(y):this.groupGL.remove(y)}},this);var u=this._earthMesh.material;u.define("fragment","LAYER_DIFFUSEMAP_COUNT",a.length),u.define("fragment","LAYER_EMISSIVEMAP_COUNT",s.length),u.set("layerDiffuseMap",a),u.set("layerDiffuseIntensity",o),u.set("layerEmissiveMap",s),u.set("layerEmissionIntensity",l);var f=e.getModel("debug.wireframe");if(f.get("show")){u.define("both","WIREFRAME_TRIANGLE");var c=F.parseColor(f.get("lineStyle.color")||"rgba(0,0,0,0.5)"),d=it.firstNotNull(f.get("lineStyle.width"),1);u.set("wireframeLineWidth",d),u.set("wireframeLineColor",c)}else u.undefine("both","WIREFRAME_TRIANGLE")},_updateViewControl:function(e,t){var r=e.coordinateSystem,n=e.getModel("viewControl");r.viewGL.camera;var i=this;function a(){return{type:"globeChangeCamera",alpha:o.getAlpha(),beta:o.getBeta(),distance:o.getDistance()-r.radius,center:o.getCenter(),from:i.uid,globeId:e.id}}var o=this._control;o.setViewGL(r.viewGL);var s=n.get("targetCoord"),l,u;s!=null&&(u=s[0]+90,l=s[1]),o.setFromViewControlModel(n,{baseDistance:r.radius,alpha:l,beta:u}),o.off("update"),o.on("update",function(){t.dispatchAction(a())})},_displaceVertices:function(e,t){var r=e.get("displacementQuality"),n=e.get("debug.wireframe.show"),i=e.coordinateSystem;if(!(!e.isDisplacementChanged()&&r===this._displacementQuality&&n===this._showDebugWireframe)){this._displacementQuality=r,this._showDebugWireframe=n;var a=this._sphereGeometry,o={low:100,medium:200,high:400,ultra:800}[r]||200,s=o/2;(a.widthSegments!==o||n)&&(a.widthSegments=o,a.heightSegments=s,a.build()),this._doDisplaceVertices(a,i),n&&a.generateBarycentric()}},_doDisplaceVertices:function(e,t){var r=e.attributes.position.value,n=e.attributes.texcoord0.value,i=e.__originalPosition;(!i||i.length!==r.length)&&(i=new Float32Array(r.length),i.set(r),e.__originalPosition=i);for(var a=t.displacementWidth,o=t.displacementHeight,s=t.displacementData,l=0;l<e.vertexCount;l++){var u=l*3,f=l*2,c=i[u+1],d=i[u+2],h=i[u+3],v=n[f++],p=n[f++],m=Math.round(v*(a-1)),_=Math.round(p*(o-1)),x=_*a+m,T=s?s[x]:0;r[u+1]=c+c*T,r[u+2]=d+d*T,r[u+3]=h+h*T}e.generateVertexNormals(),e.dirty(),e.updateBoundingBox()},_updateLight:function(e,t){var r=this._earthMesh;this._sceneHelper.updateLight(e);var n=this._sceneHelper.mainLight,i=e.get("light.main.time")||new Date,a=nc.getPosition(Ko(i),0,0),o=Math.cos(a.altitude);n.position.y=-o*Math.cos(a.azimuth),n.position.x=Math.sin(a.altitude),n.position.z=o*Math.sin(a.azimuth),n.lookAt(r.getWorldPosition())},dispose:function(e,t){this.groupGL.removeAll(),this._control.dispose()}}),oc=xr.vec3;function sn(e){this.radius=e,this.viewGL=null,this.altitudeAxis,this.displacementData=null,this.displacementWidth,this.displacementHeight}sn.prototype={constructor:sn,dimensions:["lng","lat","alt"],type:"globe",containPoint:function(){},setDisplacementData:function(e,t,r){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=r},_getDisplacementScale:function(e,t){var r=(e+180)/360*(this.displacementWidth-1),n=(90-t)/180*(this.displacementHeight-1),i=Math.round(r)+Math.round(n)*this.displacementWidth;return this.displacementData[i]},dataToPoint:function(e,t){var r=e[0],n=e[1],i=e[2]||0,a=this.radius;this.displacementData&&(a*=1+this._getDisplacementScale(r,n)),this.altitudeAxis&&(a+=this.altitudeAxis.dataToCoord(i)),r=r*Math.PI/180,n=n*Math.PI/180;var o=Math.cos(n)*a;return t=t||[],t[0]=-o*Math.cos(r+Math.PI),t[1]=Math.sin(n)*a,t[2]=o*Math.sin(r+Math.PI),t},pointToData:function(e,t){var r=e[0],n=e[1],i=e[2],a=oc.len(e);r/=a,n/=a,i/=a;var o=Math.asin(n),s=Math.atan2(i,-r);s<0&&(s=Math.PI*2+s);var l=o*180/Math.PI,u=s*180/Math.PI-180;return t=t||[],t[0]=u,t[1]=l,t[2]=a-this.radius,this.altitudeAxis&&(t[2]=this.altitudeAxis.coordToData(t[2])),t}};function sc(e,t){var r=document.createElement("canvas"),n=r.getContext("2d"),i=e.width,a=e.height;r.width=i,r.height=a,n.drawImage(e,0,0,i,a);for(var o=n.getImageData(0,0,i,a).data,s=new Float32Array(o.length/4),l=0;l<o.length/4;l++){var u=o[l*4];s[l]=u/255*t}return{data:s,width:i,height:a}}function lc(e,t){var r=e.getBoxLayoutParams(),n=Zo(r,{width:t.getWidth(),height:t.getHeight()});n.y=t.getHeight()-n.y-n.height,this.viewGL.setViewport(n.x,n.y,n.width,n.height,t.getDevicePixelRatio()),this.radius=e.get("globeRadius");var i=e.get("globeOuterRadius");this.altitudeAxis&&this.altitudeAxis.setExtent(0,i-this.radius)}function uc(e,t){var r=[1/0,-1/0];if(e.eachSeries(function(i){if(i.coordinateSystem===this){var a=i.getData(),o=i.coordDimToDataDim("alt"),s=o&&o[0];if(s){var l=a.getDataExtent(s,!0);r[0]=Math.min(r[0],l[0]),r[1]=Math.max(r[1],l[1])}}},this),r&&isFinite(r[1]-r[0])){var n=ts(r,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new $o("altitude",n),this.resize(this.model,t)}}var fc={dimensions:sn.prototype.dimensions,create:function(e,t){var r=[];return e.eachComponent("globe",function(n){n.__viewGL=n.__viewGL||new ce;var i=new sn;i.viewGL=n.__viewGL,n.coordinateSystem=i,i.model=n,r.push(i),i.resize=lc,i.resize(n,t),i.update=uc}),e.eachSeries(function(n){if(n.get("coordinateSystem")==="globe"){var i=n.getReferringComponents("globe").models[0];if(i||(i=e.getComponent("globe")),!i)throw new Error('globe "'+it.firstNotNull(n.get("globe3DIndex"),n.get("globe3DId"),0)+'" not found');var a=i.coordinateSystem;n.coordinateSystem=a}}),e.eachComponent("globe",function(n,i){var a=n.coordinateSystem,o=n.getDisplacementTexture(),s=n.getDisplacemenScale();if(n.isDisplacementChanged()){if(n.hasDisplacement()){var l=!0;F.loadTexture(o,t,function(u){var f=u.image,c=sc(f,s);n.setDisplacementData(c.data,c.width,c.height),l||t.dispatchAction({type:"globeUpdateDisplacment"})}),l=!1}else a.setDisplacementData(null,0,0);a.setDisplacementData(n.displacementData,n.displacementWidth,n.displacementHeight)}}),r}},cc=fc;function hc(e){e.registerComponentModel(kf),e.registerComponentView(ac),e.registerCoordinateSystem("globe",cc),e.registerAction({type:"globeChangeCamera",event:"globecamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"globe",query:t},function(n){n.setView(t)})}),e.registerAction({type:"globeUpdateDisplacment",event:"globedisplacementupdated",update:"update"},function(t,r){})}const wr=e=>(wo("data-v-03ad909e"),e=e(),bo(),e),dc={class:"demo"},vc={class:"left"},pc=wr(()=>xe("div",{class:"caption"},"Contour Demo - ECharts 3D\u6D4B\u8BD5",-1)),mc={class:"tools"},_c={class:"options"},gc=wr(()=>xe("label",{for:"pal1"},"\u8C03\u8272\u677F1",-1)),yc=wr(()=>xe("label",{for:"pal2"},"\u8C03\u8272\u677F2",-1)),xc=wr(()=>xe("label",{for:"pal3"},"\u8C03\u8272\u677F3",-1)),Tc=["value"],Ec=wr(()=>xe("label",{for:"rotate"},"\u65CB\u8F6C",-1)),Ac=yo({setup(e){cn([hc,Jo,rf,fi,es]);const t=tr(),r=tr(),n=tr("Contour V3.0 typescript\u7248"),i=tr(["green","yellow","red"]),a=tr(!1);let o;const s={title:{text:"Contour Demo",left:30,textStyle:{color:"#fff"},top:20},backgroundColor:"#000",globe:{baseTexture:"image/world.topo.bathy.200401.jpg",heightTexture:"image/bathymetry_bw_composite_4k.jpg",shading:"realistic",label:!0,light:{ambient:{intensity:.5},main:{intensity:.3,shadow:!0}},viewControl:{autoRotate:!1,targetCoord:[100,37]}},series:[{type:"lines3D",coordinateSystem:"globe",polyline:!0,displacementScale:.1,lineStyle:{width:1.5,color:"yellow",opacity:1,shading:"realistic"},data:[]}]};xo(()=>{o=Qo(t.value),o.setOption(s)});const l=(h,v="")=>{n.value+=`
---------------------------------------
`,n.value+=h,n.value+=`
---------------------------------------
`,n.value+=v,Co(()=>{var p;return(p=r.value)==null?void 0:p.scrollTo({top:1e4,behavior:"smooth"})})};l("\u4F7F\u7528ECharts 3D\u663E\u793A\u505A\u6D4B\u8BD5\u3002");const u=async h=>{const v=await Lo(h);l(`\u6253\u5F00\u6587\u4EF6:${h}`,JSON.stringify(v.head,null,2)),l("\u7B49\u503C\u7EBF\u5206\u6790\u8FDB\u5EA6");const p=Ro(v.data,v.levels,{pointConvert:m=>{m.x=v.head.beginLon+m.x*v.head.lonSpan,m.y=v.head.beginLat+m.y*v.head.latSpan},progressCallback:(m,_)=>{const x=`  \u5206\u6790:${m}  ${Math.round(_)}%`;console.log(x),n.value+=x+`
`}});f(p,v.head.caption)},f=(h,v)=>{l("\u7B49\u503C\u7EBF\u4FE1\u606F",JSON.stringify(h).substring(0,1e3));var p=h.smooth().polys.map(m=>({value:m.level,coords:m.points.map(_=>_.toCoord())}));s.title.text=v,s.visualMap=[{type:"continuous",max:h.realLevels[h.realLevels.length-1],min:h.realLevels[0],inRange:{color:i.value},calculable:!0,seriesIndex:0}],s.series[0].data=p,o.setOption(s),l("\u6DFB\u52A0\u5230ECharts",`\u5B8C\u6210!



`)},c=()=>{o.setOption({globe:{viewControl:{distance:150,targetCoord:[100,37]}}})},d=()=>{o.setOption({title:{text:""},series:[{data:[]}]})};return ui(i,()=>{o.setOption({visualMap:{show:!0,inRange:{color:i.value}}})}),ui(a,()=>{o.setOption({globe:{viewControl:{autoRotate:a.value}}})}),(h,v)=>(To(),Eo("div",dc,[xe("div",vc,[pc,xe("pre",{ref_key:"infoDom",ref:r,class:"info"},Ao(n.value),513),xe("div",mc,[xe("button",{onClick:v[0]||(v[0]=p=>u("./data/18020808.000"))},"\u6570\u636E1"),xe("button",{onClick:v[1]||(v[1]=p=>u("./data/18041108.000"))},"\u6570\u636E2"),xe("button",{onClick:d},"\u6E05\u7A7A\u5730\u56FE"),xe("button",{onClick:v[2]||(v[2]=p=>n.value="")},"\u6E05\u9664log"),xe("button",{onClick:c},"\u5168\u56FE")]),xe("div",_c,[br(xe("input",{type:"radio",name:"pal1",id:"pal1",value:["green","yellow","red"],"onUpdate:modelValue":v[3]||(v[3]=p=>i.value=p)},null,512),[[un,i.value]]),gc,br(xe("input",{type:"radio",name:"pal2",id:"pal2",value:["red","yellow","white","green"],"onUpdate:modelValue":v[4]||(v[4]=p=>i.value=p)},null,512),[[un,i.value]]),yc,br(xe("input",{type:"radio",name:"pal3",id:"pal3",value:["white","yellow","green"],"onUpdate:modelValue":v[5]||(v[5]=p=>i.value=p)},null,512),[[un,i.value]]),xc,br(xe("input",{type:"checkbox",name:"rotate",id:"rotate",value:a.value,"onUpdate:modelValue":v[6]||(v[6]=p=>a.value=p)},null,8,Tc),[[So,a.value]]),Ec])]),xe("div",{class:"map",ref_key:"mapRef",ref:t},null,512)]))}});var Lc=No(Ac,[["__scopeId","data-v-03ad909e"]]);export{Lc as default};
