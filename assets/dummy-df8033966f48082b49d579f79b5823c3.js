"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a,r){var i=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),(0,a["default"])(i,r["default"].modulePrefix),e["default"]=i}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n["default"].APP.name,r=n["default"].APP.version;e["default"]=t["default"].extend({version:r,name:a})}),define("dummy/components/code-block",["exports","ember-prism/components/code-block"],function(e,t){e["default"]=t["default"]}),define("dummy/components/code-inline",["exports","ember-prism/components/code-inline"],function(e,t){e["default"]=t["default"]}),define("dummy/components/fa-icon",["exports","ember-cli-font-awesome/components/fa-icon"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/fa-list-icon",["exports","ember-cli-font-awesome/components/fa-list-icon"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/fa-list",["exports","ember-cli-font-awesome/components/fa-list"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/fa-stack",["exports","ember-cli-font-awesome/components/fa-stack"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/controllers/audio-files",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({audio:t["default"].inject.service(),initAudioFiles:t["default"].on("init",function(){var e=this.get("audio");e.load("single-note-left","Db5.mp3"),e.load("single-note-right","https://raw.githubusercontent.com/mudcube/MIDI.js/master/examples/soundfont/acoustic_grand_piano-mp3/B5.mp3"),e.pan("single-note-left",-.7),e.pan("single-note-right",.7)}),actions:{playSingleNoteLeft:function(){this.get("audio").play("single-note-left")},playSingleNoteRight:function(){this.get("audio").play("single-note-right")},playBothNotes:function(){var e=this.get("audio");e.play("single-note-left"),e.play("single-note-right")}}})}),define("dummy/controllers/index",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({audio:t["default"].inject.service(),initAudioFile:t["default"].on("init",function(){this.get("audio").load("piano-note","Eb5.mp3")}),actions:{playSound:function(){this.get("audio").play("piano-note")}}})}),define("dummy/controllers/soundfonts",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({audio:t["default"].inject.service(),isLoading:!0,notes:null,initSoundFont:t["default"].on("init",function(){var e=this;this.get("audio").loadSoundFont("piano-font","piano.js").then(function(t){e.set("notes",t),e.set("isLoading",!1)})}),actions:{playNoteFromSoundFont:function(e){this.get("audio").play("piano-font",e)}}})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,r=n["default"].exportApplicationGlobal;a="string"==typeof r?r:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){this.route("soundfonts"),this.route("audio-files")}),e["default"]=a}),define("dummy/routes/audio-files",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("dummy/routes/index",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("dummy/routes/soundfonts",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/services/audio",["exports","ember-audio/services/audio"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:11,column:6},end:{line:14,column:6}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createElement("img");e.setAttribute(n,"src","ember-logo-96cc57a28066aa60c12df89c146c07d5.png"),e.setAttribute(n,"alt","Ember Logo"),e.appendChild(t,n);var n=e.createTextNode("\n        ");e.appendChild(t,n);var n=e.createElement("span"),a=e.createTextNode("audio");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.4.4",loc:{source:null,start:{line:1,column:0},end:{line:41,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("nav");e.setAttribute(n,"class","navbar navbar-default remodal-bg");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","container-fluid");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","navbar-header");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("button");e.setAttribute(i,"type","button"),e.setAttribute(i,"class","navbar-toggle collapsed"),e.setAttribute(i,"data-toggle","collapse"),e.setAttribute(i,"data-target","#navbar"),e.setAttribute(i,"aria-expanded","false");var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("span");e.setAttribute(d,"class","sr-only");var o=e.createTextNode("Toggle navigation");e.appendChild(d,o),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("span");e.setAttribute(d,"class","icon-bar"),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("span");e.setAttribute(d,"class","icon-bar"),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("span");e.setAttribute(d,"class","icon-bar"),e.appendChild(i,d);var d=e.createTextNode("\n      ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n\n");e.appendChild(r,i);var i=e.createComment("");e.appendChild(r,i);var i=e.createTextNode("    ");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","collapse navbar-collapse"),e.setAttribute(r,"id","navbar");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("ul");e.setAttribute(i,"class","nav navbar-nav");var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("li"),o=e.createTextNode("\n          ");e.appendChild(d,o);var o=e.createComment("");e.appendChild(d,o);var o=e.createTextNode("\n        ");e.appendChild(d,o),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("li"),o=e.createTextNode("\n          ");e.appendChild(d,o);var o=e.createComment("");e.appendChild(d,o);var o=e.createTextNode("\n        ");e.appendChild(d,o),e.appendChild(i,d);var d=e.createTextNode("\n      ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n\n      ");e.appendChild(r,i);var i=e.createElement("ul");e.setAttribute(i,"class","nav navbar-nav navbar-right");var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("li"),o=e.createTextNode("\n          ");e.appendChild(d,o);var o=e.createElement("a");e.setAttribute(o,"href","https://github.com/sethbrasile/ember-audio");var l=e.createTextNode("\n            ");e.appendChild(o,l);var l=e.createComment("");e.appendChild(o,l);var l=e.createTextNode("\n          ");e.appendChild(o,l),e.appendChild(d,o);var o=e.createTextNode("\n        ");e.appendChild(d,o),e.appendChild(i,d);var d=e.createTextNode("\n      ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","main");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0,1]),r=e.childAt(a,[3]),i=e.childAt(r,[1]),d=new Array(5);return d[0]=e.createMorphAt(e.childAt(a,[1]),3,3),d[1]=e.createMorphAt(e.childAt(i,[1]),1,1),d[2]=e.createMorphAt(e.childAt(i,[3]),1,1),d[3]=e.createMorphAt(e.childAt(r,[3,1,1]),1,1),d[4]=e.createMorphAt(e.childAt(t,[2]),1,1),d},statements:[["block","link-to",["index"],["class","navbar-brand"],0,null,["loc",[null,[11,6],[14,18]]]],["inline","link-to",["Audio Files (mp3/wav)","audio-files"],[],["loc",[null,[20,10],[20,59]]]],["inline","link-to",["Sound Fonts","soundfonts"],[],["loc",[null,[23,10],[23,48]]]],["inline","fa-icon",["github"],[],["loc",[null,[30,12],[30,32]]]],["content","outlet",["loc",[null,[39,2],[39,12]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/audio-files",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:9,column:0},end:{line:45,column:0}},moduleName:"dummy/templates/audio-files.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  export default Ember.Whatever.extend({\n    audio: Ember.inject.service(),\n\n    initAudioFiles: Ember.on('init', function() {\n      const audio = this.get('audio');\n\n      // Db5.mp3 is an mp3 file located in this project's \"public\" folder\n      audio.load('single-note-left', 'Db5.mp3');\n\n      // This one is loaded from a URL somewhere on the internet\n      audio.load('single-note-right', 'https://raw.githubusercontent.com/mudcube/MIDI.js/master/examples/soundfont/acoustic_grand_piano-mp3/B5.mp3');\n\n      // You can pan a note left (any value between -1 and -0.1)\n      audio.pan('single-note-left',  -0.7);\n\n      // You can pan a note right (any value between 0.1 and 1)\n      audio.pan('single-note-right',  0.7);\n    }),\n\n    actions: {\n      playSingleNoteLeft() {\n        this.get('audio').play('single-note-left');\n      },\n\n      playSingleNoteRight() {\n        this.get('audio').play('single-note-right');\n      },\n\n      playBothNotes() {\n        const audio = this.get('audio');\n        audio.play('single-note-left');\n        audio.play('single-note-right');\n      }\n    }\n  });\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.4.4",loc:{source:null,start:{line:1,column:0},end:{line:46,column:0}},moduleName:"dummy/templates/audio-files.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","content");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h2"),r=e.createTextNode("Audio Files");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("button");e.setAttribute(a,"class","btn btn-primary");var r=e.createTextNode("Play Single Note Panned Left");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("button");e.setAttribute(a,"class","btn btn-primary");var r=e.createTextNode("Play Single Note Panned Right");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("button");e.setAttribute(a,"class","btn btn-success");var r=e.createTextNode("Play Both Notes");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0]),r=e.childAt(a,[3]),i=e.childAt(a,[5]),d=e.childAt(a,[7]),o=new Array(4);return o[0]=e.createElementMorph(r),o[1]=e.createElementMorph(i),o[2]=e.createElementMorph(d),o[3]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,null),o},statements:[["element","action",["playSingleNoteLeft"],[],["loc",[null,[4,34],[4,65]]]],["element","action",["playSingleNoteRight"],[],["loc",[null,[5,34],[5,66]]]],["element","action",["playBothNotes"],[],["loc",[null,[6,34],[6,60]]]],["block","code-block",[],["language","javascript"],0,null,["loc",[null,[9,0],[45,15]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/components/code-block",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/components/code-block.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("code"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0]),r=new Array(2);return r[0]=e.createAttrMorph(a,"class"),r[1]=e.createMorphAt(a,0,0),r},statements:[["attribute","class",["get","languageClass",["loc",[null,[1,14],[1,27]]]]],["content","yield",["loc",[null,[1,30],[1,39]]]]],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:23,column:0},end:{line:38,column:0}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  export default Ember.Whatever.extend({\n    audio: Ember.inject.service(),\n\n    initAudioFile: Ember.on('init', function() {\n      // Eb5.mp3 is an mp3 file located in the \"public\" folder\n      this.get('audio').load('piano-note', 'Eb5.mp3');\n    }),\n\n    actions: {\n      playSound() {\n        this.get('audio').play('piano-note');\n      }\n    }\n  });\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.4.4",loc:{source:null,start:{line:1,column:0},end:{line:60,column:0}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","content");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h1"),r=e.createTextNode("Ember Audio");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h3"),r=e.createTextNode("Making the WebAudio API super EZ since 2016");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("hr");e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("p"),r=e.createTextNode("\n    The WebAudio API is great. It's been designed to allow for extreme flexibility\n    and control, as well as speed and efficiency. Unfortunately, this means that\n    it's a little bit cumbersome to use.\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("p"),r=e.createTextNode("\n    Ember Audio allows you to easily load up and play local or remote audio files\n    and sound fonts as easy as this:\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","content");var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("button");e.setAttribute(a,"class","btn btn-primary");var r=e.createTextNode("Play Sound");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("hr");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","content");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("p"),r=e.createTextNode("\n    Support for the following are planned but not complete:\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("ul"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("li"),i=e.createTextNode("Custom/pluggable audio routing and effects");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("li"),i=e.createTextNode("Synthesis");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("li"),i=e.createTextNode("Timing/scheduling helpers");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("p"),r=e.createTextNode("\n    Please make suggestions for more by creating an issue or pinging me on the\n    ember community slack (@sethbrasile)\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2]),r=e.childAt(a,[1]),i=new Array(2);return i[0]=e.createElementMorph(r),i[1]=e.createMorphAt(a,3,3),i},statements:[["element","action",["playSound"],[],["loc",[null,[21,34],[21,56]]]],["block","code-block",[],["language","javascript"],0,null,["loc",[null,[23,0],[38,15]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/soundfonts",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:4,column:2},end:{line:6,column:2}},moduleName:"dummy/templates/soundfonts.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("h3"),a=e.createTextNode("Loading....");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:7,column:4},end:{line:9,column:4}},moduleName:"dummy/templates/soundfonts.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("button"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),r=new Array(2);return r[0]=e.createElementMorph(a),r[1]=e.createMorphAt(a,0,0),r},statements:[["element","action",["playNoteFromSoundFont",["get","note.identifier",["loc",[null,[8,47],[8,62]]]]],[],["loc",[null,[8,14],[8,64]]]],["content","note.identifier",["loc",[null,[8,65],[8,84]]]]],locals:["note"],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:6,column:2},end:{line:10,column:2}},moduleName:"dummy/templates/soundfonts.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","each",[["get","notes",["loc",[null,[7,12],[7,17]]]]],[],0,null,["loc",[null,[7,4],[9,13]]]]],locals:[],templates:[e]}}(),n=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:14,column:0},end:{line:40,column:0}},moduleName:"dummy/templates/soundfonts.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  export default Ember.Whatever.extend({\n    audio: Ember.inject.service(),\n    isLoading: false,\n    notes: null,\n\n    initSoundFont: Ember.on('init', function() {\n      // piano.js is a soundfont created with MIDI.js' Ruby-based soundfont converter\n      // It is located in this app's \"public\" folder\n      this.get('audio').loadSoundFont('piano-font', 'piano.js')\n        // The promise from loadSountFont resolves to an array of sorted\n        // note objects (sorted the way they would appear on a piano).\n        .then((notes) => {\n          this.set('notes', notes);\n          this.set('isLoading', false);\n        });\n    }),\n\n    actions: {\n      playNoteFromSoundFont(note) {\n        // First arg is the name of the sound font, second arg is the note identifier\n        // The note identifier looks like 'Db1'\n        this.get('audio').play('piano-font', note);\n      }\n    }\n  });\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),a=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:42,column:0},end:{line:50,column:0}},moduleName:"dummy/templates/soundfonts.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createTextNode("{{#if isLoading}}\n    ");e.appendChild(t,n);var n=e.createElement("h3"),a=e.createTextNode("Loading....");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n  ");e.appendChild(t,n);var n=e.createTextNode("{{else}}\n    ");e.appendChild(t,n);var n=e.createTextNode("{{#each notes as |note|}}\n      <button ");e.appendChild(t,n);var n=e.createTextNode("{{action 'playNoteFromSoundFont' note.identifier}}>");e.appendChild(t,n);var n=e.createTextNode("{{note.identifier}}</button>\n    ");e.appendChild(t,n);var n=e.createTextNode("{{/each}}\n  ");e.appendChild(t,n);var n=e.createTextNode("{{/if}}\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.4.4",loc:{source:null,start:{line:1,column:0},end:{line:52,column:0}},moduleName:"dummy/templates/soundfonts.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","content");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h2"),r=e.createTextNode("Play a sound font");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","content");var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2]),r=new Array(3);return r[0]=e.createMorphAt(e.childAt(t,[0]),3,3),r[1]=e.createMorphAt(a,1,1),r[2]=e.createMorphAt(a,3,3),r},statements:[["block","if",[["get","isLoading",["loc",[null,[4,8],[4,17]]]]],[],0,1,["loc",[null,[4,2],[10,9]]]],["block","code-block",[],["language","javascript"],2,null,["loc",[null,[14,0],[40,15]]]],["block","code-block",[],["language","handlebars"],3,null,["loc",[null,[42,0],[50,15]]]]],locals:[],templates:[e,t,n,a]}}())}),define("dummy/utils/array-methods",["exports","ember-audio/utils/array-methods"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/utils/decode-base64",["exports","ember-audio/utils/decode-base64"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/utils/note",["exports","ember-audio/utils/note"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/utils/request",["exports","ember-audio/utils/request"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-audio",version:"0.0.0+607e716c"});