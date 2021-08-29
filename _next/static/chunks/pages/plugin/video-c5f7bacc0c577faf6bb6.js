(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[940],{69694:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(52322),o=(n(2784),n(6277)),r=(n(85430),n(51537)),a=n.n(r);function s(e){var t=e.code,n=e.className,r=e.name,s=(0,o.Z)(a().root,n),l=r?a().name:a().hiddenName,d=(0,o.Z)(a().code,"language-".concat(r&&r.endsWith("css")?"css":"js"));return(0,i.jsxs)("div",{className:s,children:[(0,i.jsx)("div",{className:l,children:r}),(0,i.jsx)("pre",{className:d,children:(0,i.jsx)("code",{children:t})})]})}},97539:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(52322),o=n(2784),r=n(18476),a=n.n(r),s=n(98118),l=n(25949),d=n(97249),c=n(2137);function u(e){var t=e.children;return(0,o.useEffect)((function(){a().highlightAll()}),[]),(0,i.jsxs)("div",{children:[(0,i.jsx)(s.Z,{}),(0,i.jsx)(l.Z,{}),t,(0,i.jsx)(d.Z,{}),(0,i.jsx)(c.Z,{})]})}},15590:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ve}});var i=n(52322),o=n(66601),r=n(29931),a=n(78414),s=n(85520),l=n(55089),d=n(2784),c=n(96383),u=n(25567),p=n(41907),f=n(26131),h=n.n(f),m=n(69694),y=n(97290),g=n(77460),v=n(1503),S=n(64705),x=n(13980),R=n.n(x);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}var j="draft-js-video-plugin-video",b="atomic",Z=Object.freeze({__proto__:null,VIDEOTYPE:j,ATOMIC:b});function _(e,t){var n=t.src;if(v.RichUtils.getCurrentBlockType(e)===b)return e;var i=e.getCurrentContent().createEntity(j,"IMMUTABLE",{src:n}).getLastCreatedEntityKey();return v.AtomicBlockUtils.insertAtomicBlock(e,i," ")}var P=/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,k=/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;var w=["blockProps","className","style","theme"],N=["block","customStyleMap","customStyleFn","decorator","forceSelection","offsetKey","selection","tree","contentState","blockStyleFn"],V=function(e){var t,n=e.src;return t=n,P.test(t)?"https://www.youtube.com/embed/"+function(e){return{srcID:e&&e.match(P)[1],srcType:"youtube",url:e}}(n).srcID:function(e){return k.test(e)}(n)?"https://player.vimeo.com/video/"+function(e){return{srcID:e.match(k)[3],srcType:"vimeo",url:e}}(n).srcID:void 0},D=function(e){var t=e.blockProps,n=e.className,i=void 0===n?"":n,o=e.style,r=e.theme,a=E(e,w),s=V(t);if(s)return d.createElement("div",{style:o},d.createElement("div",{className:r.iframeContainer+" "+i},d.createElement("iframe",{className:r.iframe,src:s,frameBorder:"0",allowFullScreen:!0})));a.block,a.customStyleMap,a.customStyleFn,a.decorator,a.forceSelection,a.offsetKey,a.selection,a.tree,a.contentState,a.blockStyleFn;var l=E(a,N);return d.createElement("video",C({src:t.src,className:r.video,style:o},l,{controls:!0}))};D.propTypes={blockProps:R().object.isRequired,className:R().string,style:R().object,theme:R().object.isRequired};var z=D,M={iframeContainer:"ifi492u",iframe:"i1hzzm9j",invalidVideoSrc:"ikyzbpi",video:"vlyzuw8"};function T(e){void 0===e&&(e={});var t=e.theme?e.theme:M,n=e.videoComponent||z;e.decorator&&(n=e.decorator(n));var i=function(e){return d.createElement(n,C({},e,{theme:t}))};return{blockRendererFn:function(e,t){var n=t.getEditorState;if(e.getType()===b){var o=n().getCurrentContent(),r=e.getEntityAt(0);if(!r)return null;var a=o.getEntity(r),s=a.getType(),l=a.getData().src;if(s===j)return{component:i,editable:!1,props:{src:l}}}return null},addVideo:_,types:Z}}var B=n(82409),A=n.n(B);function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,l.Z)(e);if(t){var o=(0,l.Z)(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return(0,s.Z)(this,n)}}var I=T(),L=I.types,F=[I],U={entityMap:{0:{type:L.VIDEOTYPE,mutability:"IMMUTABLE",data:{src:"https://www.youtube.com/watch?v=iEPTlhBmwRg"}}},blocks:[{key:"9gm3s",text:"You can have video in your text field. This is a very rudimentary example, but you can enhance the video plugin with resizing, focus or alignment plugins.",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"ov7r",text:" ",type:"atomic",depth:0,inlineStyleRanges:[],entityRanges:[{offset:0,length:1,key:0}],data:{}},{key:"e23a8",text:"See advanced examples further down \u2026",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}}]},Y=function(e){(0,a.Z)(n,e);var t=O(n);function n(){var e;(0,o.Z)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r)),(0,g.Z)((0,y.Z)(e),"state",{editorState:v.EditorState.createWithContent((0,v.convertFromRaw)(U))}),(0,g.Z)((0,y.Z)(e),"onChange",(function(t){e.setState({editorState:t})})),(0,g.Z)((0,y.Z)(e),"focus",(function(){e.editor.focus()})),e}return(0,r.Z)(n,[{key:"render",value:function(){var e=this;return(0,i.jsx)("div",{className:A().editor,onClick:this.focus,children:(0,i.jsx)(S.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:F,ref:function(t){e.editor=t}})})}}]),n}(d.Component),W=n(16347),X=n(95597),q=n(53816),G=n(10273),H=n.n(G);function Q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,l.Z)(e);if(t){var o=(0,l.Z)(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return(0,s.Z)(this,n)}}var K=(0,X.Z)(),J=(0,q.Z)(),$=(0,W.Z)(),ee=$.AlignmentTool,te=T({decorator:(0,S.lM)(J.decorator,$.decorator,K.decorator)}),ne=te.types,ie=[K,$,J,te],oe={entityMap:{0:{type:ne.VIDEOTYPE,mutability:"IMMUTABLE",data:{src:"https://www.youtube.com/watch?v=iEPTlhBmwRg"}}},blocks:[{key:"9gm3s",text:"You can have video in your text field. This is a very rudimentary example, but you can enhance the video plugin with resizing, focus or alignment plugins.",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"ov7r",text:" ",type:"atomic",depth:0,inlineStyleRanges:[],entityRanges:[{offset:0,length:1,key:0}],data:{}},{key:"e23a8",text:"See advanced examples further down \u2026",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"97vas",text:"",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"bbc5n",text:"",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"iqdh",text:"",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"fg6vi",text:"",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"7bvko",text:"",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}}]},re=function(e){(0,a.Z)(n,e);var t=Q(n);function n(){var e;(0,o.Z)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r)),(0,g.Z)((0,y.Z)(e),"state",{editorState:v.EditorState.createWithContent((0,v.convertFromRaw)(oe))}),(0,g.Z)((0,y.Z)(e),"onChange",(function(t){e.setState({editorState:t})})),(0,g.Z)((0,y.Z)(e),"focus",(function(){e.editor.focus()})),e}return(0,r.Z)(n,[{key:"render",value:function(){var e=this;return(0,i.jsxs)("div",{className:H().editor,onClick:this.focus,children:[(0,i.jsx)(S.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:ie,ref:function(t){e.editor=t}}),(0,i.jsx)(ee,{})]})}}]),n}(d.Component),ae=n(88036),se=n.n(ae);function le(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,l.Z)(e);if(t){var o=(0,l.Z)(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return(0,s.Z)(this,n)}}var de=function(e){(0,a.Z)(n,e);var t=le(n);function n(){var e;(0,o.Z)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r)),(0,g.Z)((0,y.Z)(e),"state",{url:"",open:!1}),(0,g.Z)((0,y.Z)(e),"onPopoverClick",(function(){e.preventNextClose=!0})),(0,g.Z)((0,y.Z)(e),"openPopover",(function(){e.state.open||(e.preventNextClose=!0,e.setState({open:!0}))})),(0,g.Z)((0,y.Z)(e),"closePopover",(function(){!e.preventNextClose&&e.state.open&&e.setState({open:!1}),e.preventNextClose=!1})),(0,g.Z)((0,y.Z)(e),"addVideo",(function(){var t=e.props,n=t.editorState;(0,t.onChange)(e.props.modifier(n,{src:e.state.url}))})),(0,g.Z)((0,y.Z)(e),"changeUrl",(function(t){e.setState({url:t.target.value})})),e}return(0,r.Z)(n,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.closePopover)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.closePopover)}},{key:"render",value:function(){var e=this.state.open?se().addVideoPopover:se().addVideoClosedPopover,t=this.state.open?se().addVideoPressedButton:se().addVideoButton;return(0,i.jsxs)("div",{className:se().addVideo,children:[(0,i.jsx)("button",{className:t,onMouseUp:this.openPopover,type:"button",children:"+"}),(0,i.jsxs)("div",{className:e,onClick:this.onPopoverClick,children:[(0,i.jsx)("input",{type:"text",placeholder:"Paste the video url \u2026",className:se().addVideoInput,onChange:this.changeUrl,value:this.state.url}),(0,i.jsx)("button",{className:se().addVideoConfirmButton,type:"button",onClick:this.addVideo,children:"Add"})]})]})}}]),n}(d.Component),ce=n(1756),ue=n.n(ce);function pe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,l.Z)(e);if(t){var o=(0,l.Z)(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return(0,s.Z)(this,n)}}var fe=T(),he=[fe],me=function(e){(0,a.Z)(n,e);var t=pe(n);function n(){var e;(0,o.Z)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r)),(0,g.Z)((0,y.Z)(e),"state",{editorState:v.EditorState.createEmpty()}),(0,g.Z)((0,y.Z)(e),"onChange",(function(t){e.setState({editorState:t})})),(0,g.Z)((0,y.Z)(e),"focus",(function(){e.editor.focus()})),e}return(0,r.Z)(n,[{key:"render",value:function(){var e=this;return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:ue().editor,onClick:this.focus,children:(0,i.jsx)(S.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:he,ref:function(t){e.editor=t}})}),(0,i.jsx)(de,{editorState:this.state.editorState,onChange:this.onChange,modifier:fe.addVideo})]})}}]),n}(d.Component),ye=n(97539);function ge(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,l.Z)(e);if(t){var o=(0,l.Z)(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return(0,s.Z)(this,n)}}var ve=function(e){(0,a.Z)(n,e);var t=ge(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,r.Z)(n,[{key:"render",value:function(){return(0,i.jsxs)(ye.Z,{children:[(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(p.Z,{level:2,children:"Video"}),(0,i.jsx)(p.Z,{level:3,children:"Supported Environment"}),(0,i.jsxs)("ul",{className:h().list,children:[(0,i.jsx)("li",{className:h().listEntry,children:"Desktop: Yes"}),(0,i.jsx)("li",{className:h().listEntry,children:"Mobile: No"}),(0,i.jsx)("li",{className:h().listEntry,children:"Screen-reader: No"})]})]}),(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(p.Z,{level:2,children:"Getting Started"}),(0,i.jsx)(m.Z,{code:"npm install @draft-js-plugins/editor"}),(0,i.jsx)(m.Z,{code:"npm install @draft-js-plugins/video --save"}),(0,i.jsx)(m.Z,{code:"// It is important to import the Editor which accepts plugins.\nimport Editor from '@draft-js-plugins/editor';\nimport createVideoPlugin from '@draft-js-plugins/video';\nimport React from 'react';\n\n// Creates an Instance. At this step, a configuration object can be passed in\n// as an argument.\nconst videoPlugin = createVideoPlugin();\n\n// The Editor accepts an array of plugins. In this case, only the linkifyPlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <Editor\n    editorState={editorState}\n    onChange={onChange}\n    plugins={[videoPlugin]}\n  />\n);\n\nexport default MyEditor;\n",name:"gettingStarted.js"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(p.Z,{level:2,children:"Configuration Parameters"}),(0,i.jsxs)("div",{className:h().param,children:[(0,i.jsx)("span",{className:h().paramName,children:"theme"}),(0,i.jsx)("span",{children:"Object of CSS classes with the following keys."}),(0,i.jsx)("div",{className:h().subParams,children:(0,i.jsxs)("div",{className:h().subParam,children:[(0,i.jsx)("span",{className:h().subParamName,children:"link:"})," CSS class to be applied to link text"]})})]}),(0,i.jsxs)("div",{className:h().param,children:[(0,i.jsx)("span",{className:h().paramName,children:"target"}),(0,i.jsx)("span",{children:"String value for the target attribute. (Default value is _self)"})]}),(0,i.jsxs)("div",{className:h().param,children:[(0,i.jsx)("span",{className:h().paramName,children:"component"}),(0,i.jsx)("span",{children:"If provided this component will be rendered instead of the default Anchor tag. It receives the following props: target, href & className"})]})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(p.Z,{level:2,children:"Simple Example"}),(0,i.jsx)(Y,{}),(0,i.jsx)(m.Z,{code:"import React, { Component } from 'react';\nimport { EditorState, convertFromRaw } from 'draft-js';\nimport Editor from '@draft-js-plugins/editor';\nimport createVideoPlugin from '@draft-js-plugins/video';\nimport editorStyles from './editorStyles.module.css';\n\nconst videoPlugin = createVideoPlugin();\nconst { types } = videoPlugin;\nconst plugins = [videoPlugin];\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: types.VIDEOTYPE,\n      mutability: 'IMMUTABLE',\n      data: {\n        src: 'https://www.youtube.com/watch?v=iEPTlhBmwRg',\n      },\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'You can have video in your text field. This is a very rudimentary example, but you can enhance the video plugin with resizing, focus or alignment plugins.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n    {\n      key: 'e23a8',\n      text: 'See advanced examples further down \u2026',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\nexport default class SimpleVideoEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n      </div>\n    );\n  }\n}\n",name:"SimpleVideoEditor.js"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(p.Z,{level:2,children:"Advanced Video Example"}),(0,i.jsx)(re,{}),(0,i.jsx)(m.Z,{code:"import React, { Component } from 'react';\nimport { EditorState, convertFromRaw } from 'draft-js';\nimport Editor, { composeDecorators } from '@draft-js-plugins/editor';\n\nimport createAlignmentPlugin from '@draft-js-plugins/alignment';\n\nimport createFocusPlugin from '@draft-js-plugins/focus';\n\nimport createResizeablePlugin from '@draft-js-plugins/resizeable';\nimport createVideoPlugin from '@draft-js-plugins/video';\nimport editorStyles from './editorStyles.module.css';\n\nconst focusPlugin = createFocusPlugin();\nconst resizeablePlugin = createResizeablePlugin();\nconst alignmentPlugin = createAlignmentPlugin();\nconst { AlignmentTool } = alignmentPlugin;\n\nconst decorator = composeDecorators(\n  resizeablePlugin.decorator,\n  alignmentPlugin.decorator,\n  focusPlugin.decorator\n);\n\nconst videoPlugin = createVideoPlugin({ decorator });\nconst { types } = videoPlugin;\nconst plugins = [focusPlugin, alignmentPlugin, resizeablePlugin, videoPlugin];\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: types.VIDEOTYPE,\n      mutability: 'IMMUTABLE',\n      data: {\n        src: 'https://www.youtube.com/watch?v=iEPTlhBmwRg',\n      },\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'You can have video in your text field. This is a very rudimentary example, but you can enhance the video plugin with resizing, focus or alignment plugins.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n    {\n      key: 'e23a8',\n      text: 'See advanced examples further down \u2026',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: '97vas',\n      text: '',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'bbc5n',\n      text: '',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'iqdh',\n      text: '',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'fg6vi',\n      text: '',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: '7bvko',\n      text: '',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\nexport default class CustomVideoEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n        <AlignmentTool />\n      </div>\n    );\n  }\n}\n",name:"CustomVideoEditor.js"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(p.Z,{level:2,children:"Add Video Button Example"}),(0,i.jsx)(me,{}),(0,i.jsx)(m.Z,{code:"import React, { Component } from 'react';\nimport { EditorState } from 'draft-js';\nimport Editor from '@draft-js-plugins/editor';\nimport createVideoPlugin from '@draft-js-plugins/video';\nimport VideoAdd from './VideoAdd';\nimport editorStyles from './editorStyles.module.css';\n\nconst videoPlugin = createVideoPlugin();\n\nconst plugins = [videoPlugin];\n\nexport default class CustomVideoEditor extends Component {\n  state = {\n    editorState: EditorState.createEmpty(),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n        <VideoAdd\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          modifier={videoPlugin.addVideo}\n        />\n      </div>\n    );\n  }\n}\n",name:"CustomAddVideoVideoEditor.js"})]})]})}}]),n}(d.Component)},68106:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugin/video",function(){return n(15590)}])},51537:function(e){e.exports={root:"Code_root__32MsM",name:"Code_name__Asuq_",hiddenName:"Code_hiddenName__3h9eQ"}},88036:function(e){e.exports={addVideo:"styles_addVideo__3hal0",addVideoPopover:"styles_addVideoPopover__3y_7E",addVideoClosedPopover:"styles_addVideoClosedPopover__2oy2N",addVideoButton:"styles_addVideoButton__akjNa",addVideoPressedButton:"styles_addVideoPressedButton__3GShB styles_addVideoButton__akjNa",addVideoBottomGradient:"styles_addVideoBottomGradient__1Ir4O",addVideoInput:"styles_addVideoInput__3l3U7",addVideoConfirmButton:"styles_addVideoConfirmButton__34sjV"}},1756:function(e){e.exports={editor:"editorStyles_editor__1LQeC"}},10273:function(e){e.exports={editor:"editorStyles_editor__34n8_"}},82409:function(e){e.exports={editor:"editorStyles_editor__cO0Jy"}},26131:function(e){e.exports={root:"styles_root__1UmUV",param:"styles_param__2s2rx",paramName:"styles_paramName__zLiX4",subParams:"styles_subParams__1OpOh",subParam:"styles_subParam__syQEM",subParamName:"styles_subParamName__FYs3M",list:"styles_list__21nQC",listEntry:"styles_listEntry__3JrfH",guideCodeBlock:"styles_guideCodeBlock__28vsT"}},53816:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(1503),o=n(2784);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var a=["blockProps","isResizable","resizeSteps"],s=function(e,t){return Math.ceil(e/t)*t},l=function(e){var t=e.config,n=e.store;return function(e){var i=o.forwardRef((function(i,l){var d=i.blockProps,c=i.isResizable,u=void 0===c||c,p=i.resizeSteps,f=void 0===p?1:p,h=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(i,a),m=t.vertical,y=void 0!==m&&m,g=t.horizontal,v=void 0===g?"relative":g,S=t.initialWidth,x=t.initialHeight,R=(0,o.useState)(!1),C=R[0],E=R[1],j=(0,o.useState)(0),b=j[0],Z=j[1],_=(0,o.useState)(0),P=_[0],k=_[1],w=(0,o.useState)({}),N=w[0],V=w[1],D=(0,o.useRef)(),z=(0,o.useCallback)((function(){C||V({})}),[C]),M=(0,o.useCallback)((function(e){var t=D.current.getBoundingClientRect(),n=e.clientX-t.left,i=e.clientY-t.top,o=!(!y||"auto"===y)&&i<6,r=!!v&&n<6,a=!!v&&n>=t.width-6,s=!(!y||"auto"===y)&&(i>=t.height-6&&i<t.height),l={isTop:o,isLeft:r,isRight:a,isBottom:s,canResize:(o||r||a||s)&&u};V((function(e){return Object.keys(l).filter((function(t){return e[t]!==l[t]})).length?l:e}))}),[y,v,u]),T=(0,o.useCallback)((function(e){if(N.canResize){e.preventDefault();var t=N.isTop,i=N.isLeft,o=N.isRight,r=N.isBottom,a=D.current,l=e.clientX,c=e.clientY,u=parseInt(document.defaultView.getComputedStyle(a).width,10),p=parseInt(document.defaultView.getComputedStyle(a).height,10),h=b,m=P,g=function(e){var a=u+(i?l-e.clientX:e.clientX-l),d=p+e.clientY-c,g=n.getEditorRef(),S=g.refs&&g.refs.editor?g.refs.editor:g.editor;a=Math.min(S.clientWidth,a),d=Math.min(S.clientHeight,d);var x=100/S.clientWidth*a,R=100/S.clientHeight*d;(i||o)&&"relative"===v?(h=f?s(x,f):x,Z(h)):(i||o)&&"absolute"===v&&(h=f?s(a,f):a,Z(h)),(t||r)&&"relative"===y?(m=f?s(R,f):R,k(m)):(t||r)&&"absolute"===y&&(m=f?s(d,f):d,k(m)),e.preventDefault()};document.addEventListener("mousemove",g,!1),document.addEventListener("mouseup",(function e(){document.removeEventListener("mousemove",g,!1),document.removeEventListener("mouseup",e,!1),E(!1),d.setResizeData({width:h,height:m})}),!1),E(!0)}}),[N,b,P,d]),B=(0,o.useMemo)((function(){var e={position:"relative"},t=N.isTop,n=N.isLeft,i=N.isRight,o=N.isBottom;if("auto"===v)e.width="auto";else if("relative"===v){var r=b||d.resizeData.width;e.width=!r&&S?S:(r||40)+"%"}else if("absolute"===v){var a=b||d.resizeData.width;e.width=!a&&S?S:(a||40)+"px"}if("auto"===y)e.height="auto";else if("relative"===y){var s=P||d.resizeData.height;e.height=!s&&x?x:(s||40)+"%"}else if("absolute"===y){var l=P||d.resizeData.height;e.height=!l&&x?x:(l||40)+"%"}return e.cursor=u?i&&o||n&&t?"nwse-resize":i&&t||o&&n?"nesw-resize":i||n?"ew-resize":o||t?"ns-resize":"default":"default",e}),[N,P,b]),A=!n.getReadOnly||n.getReadOnly()?{}:{onMouseDown:T,onMouseMove:M,onMouseLeave:z};return o.createElement(e,r({},h,A,{blockProps:d,ref:function(e){D.current=e,"function"===typeof l?l(e):l&&(l.current=e)},style:B}))}));return i.displayName="BlockResizeable("+function(e){var t=e.WrappedComponent||e;return t.displayName||t.name||"Component"}(e)+")",i.WrappedComponent=e.WrappedComponent||e,i}},d=function(e,t){var n=t.getEditorState,o=t.setEditorState;return function(t){var a=e.getEntityAt(0);if(a){var s=n();s.getCurrentContent().mergeEntityData(a,r({},t)),o(i.EditorState.forceSelection(s,s.getSelection()))}}},c=function(e){void 0===e&&(e={});var t={getEditorRef:void 0,getReadOnly:void 0,getEditorState:void 0,setEditorState:void 0};return{initialize:function(e){var n=e.getEditorRef,i=e.getReadOnly,o=e.getEditorState,r=e.setEditorState;t.getReadOnly=i,t.getEditorRef=n,t.getEditorState=o,t.setEditorState=r},decorator:l({config:e,store:t}),blockRendererFn:function(e,t){var n=t.getEditorState,i=t.setEditorState,o=e.getEntityAt(0),r=n().getCurrentContent();return{props:{resizeData:o?r.getEntity(o).getData():{},setResizeData:d(e,{getEditorState:n,setEditorState:i})}}}}}}},function(e){e.O(0,[774,13,476,919,138,888,179],(function(){return t=68106,e(e.s=t);var t}));var t=e.O();_N_E=t}]);