(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~56f363e1"],{"100a":function(e,t,i){"use strict";var n=i("535a"),o=i("2f63"),a=i("7d62"),c=i("eff8"),s=i("c7a0"),r=i("713f"),d=i("4ae0"),l=i("67bc"),u=i.n(l),h=i("3ae7"),m=i("9fef");function f(e){let t=!1;const i=window.screen;return Object(o["a"])(i)&&(Object(o["a"])(i.lockOrientation)?t=i.lockOrientation(e):Object(o["a"])(i.mozLockOrientation)?t=i.mozLockOrientation(e):Object(o["a"])(i.msLockOrientation)?t=i.msLockOrientation(e):Object(o["a"])(i.orientation&&i.orientation.lock)&&(t=i.orientation.lock(e))),t}function p(){const e=window.screen;Object(o["a"])(e)&&(Object(o["a"])(e.unlockOrientation)?e.unlockOrientation():Object(o["a"])(e.mozUnlockOrientation)?e.mozUnlockOrientation():Object(o["a"])(e.msUnlockOrientation)?e.msUnlockOrientation():Object(o["a"])(e.orientation&&e.orientation.unlock)&&e.orientation.unlock())}function _(e,t,i,n){n()||(i()?(t.useWebVR=!1,e._locked&&(p(),e._locked=!1),e._noSleep.disable(),s["a"].exitFullscreen(),i(!1)):(s["a"].fullscreen||s["a"].requestFullscreen(e._vrElement),e._noSleep.enable(),e._locked||(e._locked=f("landscape")),t.useWebVR=!0,i(!0)))}function y(e,t){const i=this,o=d["a"].observable(s["a"].enabled),a=d["a"].observable(!1);this.isVRMode=void 0,d["a"].defineProperty(this,"isVRMode",{get:function(){return a()}}),this.isVREnabled=void 0,d["a"].defineProperty(this,"isVREnabled",{get:function(){return o()},set:function(e){o(e&&s["a"].enabled)}}),this.tooltip=void 0,d["a"].defineProperty(this,"tooltip",(function(){return o()?a()?"Exit VR mode":"Enter VR mode":"VR mode is unavailable"}));const l=d["a"].observable(!1);this._isOrthographic=void 0,d["a"].defineProperty(this,"_isOrthographic",{get:function(){return l()}}),this._eventHelper=new c["a"],this._eventHelper.add(e.preRender,(function(){l(e.camera.frustum instanceof r["a"])})),this._locked=!1,this._noSleep=new u.a,this._command=Object(h["a"])((function(){_(i,e,a,l)}),d["a"].getObservable(this,"isVREnabled")),this._vrElement=Object(n["a"])(Object(m["a"])(t),document.body),this._callback=function(){!s["a"].fullscreen&&a()&&(e.useWebVR=!1,i._locked&&(p(),i._locked=!1),i._noSleep.disable(),a(!1))},document.addEventListener(s["a"].changeEventName,this._callback)}Object.defineProperties(y.prototype,{vrElement:{get:function(){return this._vrElement},set:function(e){this._vrElement=e}},command:{get:function(){return this._command}}}),y.prototype.isDestroyed=function(){return!1},y.prototype.destroy=function(){this._eventHelper.removeAll(),document.removeEventListener(s["a"].changeEventName,this._callback),Object(a["a"])(this)},t["a"]=y},"16f2":function(e,t,i){"use strict";var n=i("cef5"),o=i("be18"),a=i("bef8"),c=i("e62c"),s=i("535a"),r=i("2f63"),d=i("7d62"),l=i("21d7"),u=i("eff8"),h=i("4f77"),m=i("52f0"),f=i("2f48"),p=i("2d19"),_=i("2bbe"),y=i("b3a7"),b=i("e22d"),g=i("509b"),v=i("a64a"),O=i("ea07"),k=i("49c4"),E=i("5ceb"),w=i("ad4a"),j=i("a307"),S=i("72c2"),C=i("4ae0"),P=i("7b38"),T=i("7fd3"),B=i("a622"),D=i("9307"),M=i("4908"),I=i("d9c1"),x=i("05fb"),L=i("68ef"),R=i("aca5"),V=i("9fef"),z=i("f077"),A=i("d20a"),W=i("afee"),H=i("232e"),N=i("bf73"),F=i("9687"),U=i("1915"),Z=i("a22b"),$=i("ca3e"),q=i("5af0"),Y=i("5ed2"),J=i("93da");const K=new n["a"];function G(e){const t=e.clock;t.currentTime=e.timeJulian,t.shouldAnimate=!1}function Q(e){const t=e.getPropertyIds();let i="";return t.forEach((function(t){const n=e.getProperty(t);Object(r["a"])(n)&&(i+=`<tr><th>${t}</th><td>${n}</td></tr>`)})),i.length>0&&(i=`<table class="cesium-infoBox-defaultTable"><tbody>${i}</tbody></table>`),i}function X(e){let t;const i=[],n=e.getPropertyIds();for(t=0;t<n.length;t++){const o=n[t];/^name$/i.test(o)?i[0]=e.getProperty(o):/name/i.test(o)?i[1]=e.getProperty(o):/^title$/i.test(o)?i[2]=e.getProperty(o):/^(id|identifier)$/i.test(o)?i[3]=e.getProperty(o):/element/i.test(o)?i[4]=e.getProperty(o):/(id|identifier)$/i.test(o)&&(i[5]=e.getProperty(o))}const o=i.length;for(t=0;t<o;t++){const e=i[t];if(Object(r["a"])(e)&&""!==e)return e}return"Unnamed Feature"}function ee(e,t){const i=e.scene.pick(t.position);if(Object(r["a"])(i)){const e=Object(s["a"])(i.id,i.primitive.id);if(e instanceof g["a"])return e;if(i instanceof q["a"])return new g["a"]({name:X(i),description:Q(i),feature:i})}if(Object(r["a"])(e.scene.globe))return oe(e,t.position)}const te=new Y["a"];function ie(e,t,i){if(Object(r["a"])(i)){const n=i.clock;if(Object(r["a"])(n)&&(n.getValue(t),Object(r["a"])(e))){const t=n.startTime;let i=n.stopTime;Y["a"].equals(t,i)&&(i=Y["a"].addSeconds(t,J["a"].EPSILON2,te)),e.updateFromClock(),e.zoomTo(t,i)}}}const ne=new o["a"];function oe(e,t){const i=e.scene,n=i.camera.getPickRay(t),o=i.imageryLayers.pickImageryLayerFeatures(n,i);if(!Object(r["a"])(o))return;const a=new g["a"]({id:"Loading...",description:"Loading feature information..."});return o.then((function(t){if(e.selectedEntity!==a)return;if(!Object(r["a"])(t)||0===t.length)return void(e.selectedEntity=ae());const i=t[0],n=new g["a"]({id:i.name,description:i.description});if(Object(r["a"])(i.position)){const t=e.scene.globe.ellipsoid.cartographicToCartesian(i.position,ne);n.position=new _["a"](t)}e.selectedEntity=n}),(function(){e.selectedEntity===a&&(e.selectedEntity=ae())})),a}function ae(){return new g["a"]({id:"None",description:"No features found."})}function ce(e,t){const i=e._geocoder,n=e._homeButton,o=e._sceneModePicker,a=e._projectionPicker,c=e._baseLayerPicker,s=e._animation,d=e._timeline,l=e._fullscreenButton,u=e._infoBox,h=e._selectionIndicator,m=t?"hidden":"visible";if(Object(r["a"])(i)&&(i.container.style.visibility=m),Object(r["a"])(n)&&(n.container.style.visibility=m),Object(r["a"])(o)&&(o.container.style.visibility=m),Object(r["a"])(a)&&(a.container.style.visibility=m),Object(r["a"])(c)&&(c.container.style.visibility=m),Object(r["a"])(s)&&(s.container.style.visibility=m),Object(r["a"])(d)&&(d.container.style.visibility=m),Object(r["a"])(l)&&l.viewModel.isFullscreenEnabled&&(l.container.style.visibility=m),Object(r["a"])(u)&&(u.container.style.visibility=m),Object(r["a"])(h)&&(h.container.style.visibility=m),e._container){const i=t||!Object(r["a"])(l)?0:l.container.clientWidth;e._vrButton.container.style.right=i+"px",e.forceResize()}}function se(e,t){e=Object(V["a"])(e),t=Object(s["a"])(t,s["a"].EMPTY_OBJECT);const i=(!Object(r["a"])(t.globe)||!1!==t.globe)&&(!Object(r["a"])(t.baseLayerPicker)||!1!==t.baseLayerPicker),n=this,o=document.createElement("div");o.className="cesium-viewer",e.appendChild(o);const a=document.createElement("div");a.className="cesium-viewer-cesiumWidgetContainer",o.appendChild(a);const d=document.createElement("div");d.className="cesium-viewer-bottom",o.appendChild(d);const h=Object(s["a"])(t.scene3DOnly,!1);let m,p,_=!1;Object(r["a"])(t.clockViewModel)?(p=t.clockViewModel,m=p.clock):(m=new c["a"],p=new x["a"](m),_=!0),Object(r["a"])(t.shouldAnimate)&&(m.shouldAnimate=t.shouldAnimate);const g=new I["a"](a,{imageryProvider:!i&&!Object(r["a"])(t.imageryProvider)&&void 0,clock:m,skyBox:t.skyBox,skyAtmosphere:t.skyAtmosphere,sceneMode:t.sceneMode,mapProjection:t.mapProjection,globe:t.globe,orderIndependentTranslucency:t.orderIndependentTranslucency,contextOptions:t.contextOptions,useDefaultRenderLoop:t.useDefaultRenderLoop,targetFrameRate:t.targetFrameRate,showRenderLoopErrors:t.showRenderLoopErrors,useBrowserRecommendedResolution:t.useBrowserRecommendedResolution,creditContainer:Object(r["a"])(t.creditContainer)?t.creditContainer:d,creditViewport:t.creditViewport,scene3DOnly:h,shadows:t.shadows,terrainShadows:t.terrainShadows,mapMode2D:t.mapMode2D,blurActiveElementOnCanvasFocus:t.blurActiveElementOnCanvasFocus,requestRenderMode:t.requestRenderMode,maximumRenderTimeChange:t.maximumRenderTimeChange,depthPlaneEllipsoidOffset:t.depthPlaneEllipsoidOffset,msaaSamples:t.msaaSamples});let v=t.dataSources,k=!1;Object(r["a"])(v)||(v=new y["a"],k=!0);const E=g.scene,w=new b["a"]({scene:E,dataSourceCollection:v}),j=new u["a"];let S,q;if(j.add(m.onTick,se.prototype._onTick,this),j.add(E.morphStart,se.prototype._clearTrackedObject,this),!Object(r["a"])(t.selectionIndicator)||!1!==t.selectionIndicator){const e=document.createElement("div");e.className="cesium-viewer-selectionIndicatorContainer",o.appendChild(e),S=new F["a"](e,E)}if(!Object(r["a"])(t.infoBox)||!1!==t.infoBox){const e=document.createElement("div");e.className="cesium-viewer-infoBoxContainer",o.appendChild(e),q=new A["a"](e);const t=q.viewModel;j.add(t.cameraClicked,se.prototype._onInfoBoxCameraClicked,this),j.add(t.closeClicked,se.prototype._onInfoBoxClockClicked,this)}const Y=document.createElement("div");let J,K,Q,X,te,ie,ne,oe,ae,re,de,le,ue,he,me;if(Y.className="cesium-viewer-toolbar",o.appendChild(Y),!Object(r["a"])(t.geocoder)||!1!==t.geocoder){const e=document.createElement("div");let i;e.className="cesium-viewer-geocoderContainer",Y.appendChild(e),Object(r["a"])(t.geocoder)&&"boolean"!==typeof t.geocoder&&(i=Array.isArray(t.geocoder)?t.geocoder:[t.geocoder]),J=new R["a"]({container:e,geocoderServices:i,scene:E}),j.add(J.viewModel.search.beforeExecute,se.prototype._clearObjects,this)}if(Object(r["a"])(t.homeButton)&&!1===t.homeButton||(K=new z["a"](Y,E),Object(r["a"])(J)&&j.add(K.viewModel.command.afterExecute,(function(){const e=J.viewModel;e.searchText="",e.isSearchInProgress&&e.search()})),j.add(K.viewModel.command.beforeExecute,se.prototype._clearTrackedObject,this)),h||Object(r["a"])(t.sceneModePicker)&&!1===t.sceneModePicker||(Q=new N["a"](Y,E)),t.projectionPicker&&(X=new H["a"](Y,E)),i){const e=Object(s["a"])(t.imageryProviderViewModels,Object(D["a"])()),i=Object(s["a"])(t.terrainProviderViewModels,Object(M["a"])());te=new B["a"](Y,{globe:E.globe,imageryProviderViewModels:e,selectedImageryProviderViewModel:t.selectedImageryProviderViewModel,terrainProviderViewModels:i,selectedTerrainProviderViewModel:t.selectedTerrainProviderViewModel});const n=Y.getElementsByClassName("cesium-baseLayerPicker-dropDown");ie=n[0]}if(Object(r["a"])(t.imageryProvider)&&!1!==t.imageryProvider&&(i&&(te.viewModel.selectedImagery=void 0),E.imageryLayers.removeAll(),E.imageryLayers.addImageryProvider(t.imageryProvider)),Object(r["a"])(t.terrainProvider)&&(i&&(te.viewModel.selectedTerrain=void 0),E.terrainProvider=t.terrainProvider),!Object(r["a"])(t.navigationHelpButton)||!1!==t.navigationHelpButton){let e=!0;try{if(Object(r["a"])(window.localStorage)){const t=window.localStorage.getItem("cesium-hasSeenNavHelp");Object(r["a"])(t)&&Boolean(t)?e=!1:window.localStorage.setItem("cesium-hasSeenNavHelp","true")}}catch(ye){}ne=new W["a"]({container:Y,instructionsInitiallyVisible:Object(s["a"])(t.navigationInstructionsInitiallyVisible,e)})}if(!Object(r["a"])(t.animation)||!1!==t.animation){const e=document.createElement("div");e.className="cesium-viewer-animationContainer",o.appendChild(e),oe=new P["a"](e,new T["a"](p))}if(!Object(r["a"])(t.timeline)||!1!==t.timeline){const e=document.createElement("div");e.className="cesium-viewer-timelineContainer",o.appendChild(e),ae=new Z["a"](e,m),ae.addEventListener("settime",G,!1),ae.zoomTo(m.startTime,m.stopTime)}if(Object(r["a"])(t.fullscreenButton)&&!1===t.fullscreenButton||(le=document.createElement("div"),le.className="cesium-viewer-fullscreenContainer",o.appendChild(le),re=new L["a"](le,t.fullscreenElement),de=Object(U["a"])(re.viewModel,"isFullscreenEnabled",(function(e){le.style.display=e?"block":"none",Object(r["a"])(ae)&&(ae.container.style.right=le.clientWidth+"px",ae.resize())}))),t.vrButton){const e=document.createElement("div");e.className="cesium-viewer-vrContainer",o.appendChild(e),ue=new $["a"](e,E,t.fullScreenElement),he=Object(U["a"])(ue.viewModel,"isVREnabled",(function(t){e.style.display=t?"block":"none",Object(r["a"])(re)&&(e.style.right=le.clientWidth+"px"),Object(r["a"])(ae)&&(ae.container.style.right=e.clientWidth+"px",ae.resize())})),me=Object(U["a"])(ue.viewModel,"isVRMode",(function(e){ce(n,e)}))}this._baseLayerPickerDropDown=ie,this._fullscreenSubscription=de,this._vrSubscription=he,this._vrModeSubscription=me,this._dataSourceChangedListeners={},this._automaticallyTrackDataSourceClocks=Object(s["a"])(t.automaticallyTrackDataSourceClocks,!0),this._container=e,this._bottomContainer=d,this._element=o,this._cesiumWidget=g,this._selectionIndicator=S,this._infoBox=q,this._dataSourceCollection=v,this._destroyDataSourceCollection=k,this._dataSourceDisplay=w,this._clockViewModel=p,this._destroyClockViewModel=_,this._toolbar=Y,this._homeButton=K,this._sceneModePicker=Q,this._projectionPicker=X,this._baseLayerPicker=te,this._navigationHelpButton=ne,this._animation=oe,this._timeline=ae,this._fullscreenButton=re,this._vrButton=ue,this._geocoder=J,this._eventHelper=j,this._lastWidth=0,this._lastHeight=0,this._allowDataSourcesToSuspendAnimation=!0,this._entityView=void 0,this._enableInfoOrSelection=Object(r["a"])(q)||Object(r["a"])(S),this._clockTrackedDataSource=void 0,this._trackedEntity=void 0,this._needTrackedEntityUpdate=!1,this._selectedEntity=void 0,this._zoomIsFlight=!1,this._zoomTarget=void 0,this._zoomPromise=void 0,this._zoomOptions=void 0,this._selectedEntityChanged=new l["a"],this._trackedEntityChanged=new l["a"],C["a"].track(this,["_trackedEntity","_selectedEntity","_clockTrackedDataSource"]),j.add(v.dataSourceAdded,se.prototype._onDataSourceAdded,this),j.add(v.dataSourceRemoved,se.prototype._onDataSourceRemoved,this),j.add(E.postUpdate,se.prototype.resize,this),j.add(E.postRender,se.prototype._postRender,this);const fe=v.length;for(let c=0;c<fe;c++)this._dataSourceAdded(v,v.get(c));function pe(e){const t=ee(n,e);Object(r["a"])(t)?O["a"].getValueOrUndefined(t.position,n.clock.currentTime)?n.trackedEntity=t:n.zoomTo(t):Object(r["a"])(n.trackedEntity)&&(n.trackedEntity=void 0)}function _e(e){n.selectedEntity=ee(n,e)}this._dataSourceAdded(void 0,w.defaultDataSource),j.add(v.dataSourceAdded,se.prototype._dataSourceAdded,this),j.add(v.dataSourceRemoved,se.prototype._dataSourceRemoved,this),g.screenSpaceEventHandler.setInputAction(_e,f["a"].LEFT_CLICK),g.screenSpaceEventHandler.setInputAction(pe,f["a"].LEFT_DOUBLE_CLICK)}function re(e,t,i,n){le(e);const o=new Promise(t=>{e._completeZoom=function(e){t(e)}});return e._zoomPromise=o,e._zoomIsFlight=n,e._zoomOptions=i,Promise.resolve(t).then((function(t){if(e._zoomPromise===o)if(t instanceof w["a"])t.getViewableRectangle().then((function(t){return Object(E["a"])(t,e.scene)})).then((function(t){e._zoomPromise===o&&(e._zoomTarget=t)}));else if(t instanceof k["a"])e._zoomTarget=t;else if(t instanceof S["a"])e._zoomTarget=t;else if(t.isLoading&&Object(r["a"])(t.loadingEvent)){const i=t.loadingEvent.addEventListener((function(){i(),e._zoomPromise===o&&(e._zoomTarget=t.entities.values.slice(0))}))}else Array.isArray(t)?e._zoomTarget=t.slice(0):(t=Object(s["a"])(t.values,t),Object(r["a"])(t.entities)&&(t=t.entities.values),Array.isArray(t)?e._zoomTarget=t.slice(0):e._zoomTarget=[t])})),e.scene.requestRender(),o}function de(e){e._zoomPromise=void 0,e._zoomTarget=void 0,e._zoomOptions=void 0}function le(e){const t=e._zoomPromise;Object(r["a"])(t)&&(de(e),e._completeZoom(!1))}function ue(e){const t=e._zoomTarget;if(!Object(r["a"])(t)||e.scene.mode===j["a"].MORPHING)return;const i=e.scene,o=i.camera,c=Object(s["a"])(e._zoomOptions,{});let d;if(t instanceof k["a"])return t.readyPromise.then((function(){const i=t.boundingSphere;Object(r["a"])(c.offset)||(c.offset=new h["a"](0,-.5,i.radius)),d={offset:c.offset,duration:c.duration,maximumHeight:c.maximumHeight,complete:function(){e._completeZoom(!0)},cancel:function(){e._completeZoom(!1)}},e._zoomIsFlight?o.flyToBoundingSphere(t.boundingSphere,d):(o.viewBoundingSphere(i,c.offset),o.lookAtTransform(m["a"].IDENTITY),e._completeZoom(!0)),de(e)})).catch(()=>{le(e)});if(t instanceof S["a"])return t.readyPromise.then((function(){const i=t.boundingSphere;Object(r["a"])(c.offset)||(c.offset=new h["a"](0,-.5,i.radius)),d={offset:c.offset,duration:c.duration,maximumHeight:c.maximumHeight,complete:function(){e._completeZoom(!0)},cancel:function(){e._completeZoom(!1)}},e._zoomIsFlight?o.flyToBoundingSphere(i,d):(o.viewBoundingSphere(i,c.offset),o.lookAtTransform(m["a"].IDENTITY),e._completeZoom(!0)),de(e)}));if(t instanceof a["a"])return d={destination:i.mapProjection.ellipsoid.cartographicToCartesian(t),duration:c.duration,maximumHeight:c.maximumHeight,complete:function(){e._completeZoom(!0)},cancel:function(){e._completeZoom(!1)}},e._zoomIsFlight?o.flyTo(d):(o.setView(d),e._completeZoom(!0)),void de(e);const l=t,u=[];for(let a=0,s=l.length;a<s;a++){const t=e._dataSourceDisplay.getBoundingSphere(l[a],!1,K);if(t===p["a"].PENDING)return;t!==p["a"].FAILED&&u.push(n["a"].clone(K))}if(0===u.length)return void le(e);e.trackedEntity=void 0;const f=n["a"].fromBoundingSpheres(u);e._zoomIsFlight?(de(e),o.flyToBoundingSphere(f,{duration:c.duration,maximumHeight:c.maximumHeight,complete:function(){e._completeZoom(!0)},cancel:function(){e._completeZoom(!1)},offset:c.offset})):(o.viewBoundingSphere(f,c.offset),o.lookAtTransform(m["a"].IDENTITY),de(e),e._completeZoom(!0))}function he(e){if(!e._needTrackedEntityUpdate)return;const t=e._trackedEntity,i=e.clock.currentTime,n=O["a"].getValueOrUndefined(t.position,i);if(!Object(r["a"])(n))return;const o=e.scene,a=e._dataSourceDisplay.getBoundingSphere(t,!1,K);if(a===p["a"].PENDING)return;const c=o.mode;c!==j["a"].COLUMBUS_VIEW&&c!==j["a"].SCENE2D||(o.screenSpaceCameraController.enableTranslate=!1),c!==j["a"].COLUMBUS_VIEW&&c!==j["a"].SCENE3D||(o.screenSpaceCameraController.enableTilt=!1);const s=a!==p["a"].FAILED?K:void 0;e._entityView=new v["a"](t,o,o.mapProjection.ellipsoid),e._entityView.update(i,s),e._needTrackedEntityUpdate=!1}Object.defineProperties(se.prototype,{container:{get:function(){return this._container}},bottomContainer:{get:function(){return this._bottomContainer}},cesiumWidget:{get:function(){return this._cesiumWidget}},selectionIndicator:{get:function(){return this._selectionIndicator}},infoBox:{get:function(){return this._infoBox}},geocoder:{get:function(){return this._geocoder}},homeButton:{get:function(){return this._homeButton}},sceneModePicker:{get:function(){return this._sceneModePicker}},projectionPicker:{get:function(){return this._projectionPicker}},baseLayerPicker:{get:function(){return this._baseLayerPicker}},navigationHelpButton:{get:function(){return this._navigationHelpButton}},animation:{get:function(){return this._animation}},timeline:{get:function(){return this._timeline}},fullscreenButton:{get:function(){return this._fullscreenButton}},vrButton:{get:function(){return this._vrButton}},dataSourceDisplay:{get:function(){return this._dataSourceDisplay}},entities:{get:function(){return this._dataSourceDisplay.defaultDataSource.entities}},dataSources:{get:function(){return this._dataSourceCollection}},canvas:{get:function(){return this._cesiumWidget.canvas}},scene:{get:function(){return this._cesiumWidget.scene}},shadows:{get:function(){return this.scene.shadowMap.enabled},set:function(e){this.scene.shadowMap.enabled=e}},terrainShadows:{get:function(){return this.scene.globe.shadows},set:function(e){this.scene.globe.shadows=e}},shadowMap:{get:function(){return this.scene.shadowMap}},imageryLayers:{get:function(){return this.scene.imageryLayers}},terrainProvider:{get:function(){return this.scene.terrainProvider},set:function(e){this.scene.terrainProvider=e}},camera:{get:function(){return this.scene.camera}},postProcessStages:{get:function(){return this.scene.postProcessStages}},clock:{get:function(){return this._clockViewModel.clock}},clockViewModel:{get:function(){return this._clockViewModel}},screenSpaceEventHandler:{get:function(){return this._cesiumWidget.screenSpaceEventHandler}},targetFrameRate:{get:function(){return this._cesiumWidget.targetFrameRate},set:function(e){this._cesiumWidget.targetFrameRate=e}},useDefaultRenderLoop:{get:function(){return this._cesiumWidget.useDefaultRenderLoop},set:function(e){this._cesiumWidget.useDefaultRenderLoop=e}},resolutionScale:{get:function(){return this._cesiumWidget.resolutionScale},set:function(e){this._cesiumWidget.resolutionScale=e}},useBrowserRecommendedResolution:{get:function(){return this._cesiumWidget.useBrowserRecommendedResolution},set:function(e){this._cesiumWidget.useBrowserRecommendedResolution=e}},allowDataSourcesToSuspendAnimation:{get:function(){return this._allowDataSourcesToSuspendAnimation},set:function(e){this._allowDataSourcesToSuspendAnimation=e}},trackedEntity:{get:function(){return this._trackedEntity},set:function(e){if(this._trackedEntity!==e){this._trackedEntity=e,le(this);const t=this.scene,i=t.mode;Object(r["a"])(e)&&Object(r["a"])(e.position)?this._needTrackedEntityUpdate=!0:(this._needTrackedEntityUpdate=!1,i!==j["a"].COLUMBUS_VIEW&&i!==j["a"].SCENE2D||(t.screenSpaceCameraController.enableTranslate=!0),i!==j["a"].COLUMBUS_VIEW&&i!==j["a"].SCENE3D||(t.screenSpaceCameraController.enableTilt=!0),this._entityView=void 0,this.camera.lookAtTransform(m["a"].IDENTITY)),this._trackedEntityChanged.raiseEvent(e),this.scene.requestRender()}}},selectedEntity:{get:function(){return this._selectedEntity},set:function(e){if(this._selectedEntity!==e){this._selectedEntity=e;const t=Object(r["a"])(this._selectionIndicator)?this._selectionIndicator.viewModel:void 0;Object(r["a"])(e)?Object(r["a"])(t)&&t.animateAppear():Object(r["a"])(t)&&t.animateDepart(),this._selectedEntityChanged.raiseEvent(e)}}},selectedEntityChanged:{get:function(){return this._selectedEntityChanged}},trackedEntityChanged:{get:function(){return this._trackedEntityChanged}},clockTrackedDataSource:{get:function(){return this._clockTrackedDataSource},set:function(e){this._clockTrackedDataSource!==e&&(this._clockTrackedDataSource=e,ie(this._timeline,this.clock,e))}}}),se.prototype.extend=function(e,t){e(this,t)},se.prototype.resize=function(){const e=this._cesiumWidget,t=this._container,i=t.clientWidth,n=t.clientHeight,o=Object(r["a"])(this._animation),a=Object(r["a"])(this._timeline);if(e.resize(),i===this._lastWidth&&n===this._lastHeight)return;const c=n-125,s=this._baseLayerPickerDropDown;if(Object(r["a"])(s)&&(s.style.maxHeight=c+"px"),Object(r["a"])(this._geocoder)){const e=this._geocoder.searchSuggestionsContainer;e.style.maxHeight=c+"px"}Object(r["a"])(this._infoBox)&&(this._infoBox.viewModel.maxHeight=c);const d=this._timeline;let l,u=0,h=0,m=0;if(o&&"hidden"!==window.getComputedStyle(this._animation.container).visibility){const e=this._lastWidth;l=this._animation.container,i>900?(u=169,e<=900&&(l.style.width="169px",l.style.height="112px",this._animation.resize())):i>=600?(u=136,(e<600||e>900)&&(l.style.width="136px",l.style.height="90px",this._animation.resize())):(u=106,(e>600||0===e)&&(l.style.width="106px",l.style.height="70px",this._animation.resize())),h=u+5}if(a&&"hidden"!==window.getComputedStyle(this._timeline.container).visibility){const e=this._fullscreenButton,t=this._vrButton,i=d.container,n=i.style;m=i.clientHeight+3,n.left=u+"px";let o=0;Object(r["a"])(e)&&(o+=e.container.clientWidth),Object(r["a"])(t)&&(o+=t.container.clientWidth),n.right=o+"px",d.resize()}this._bottomContainer.style.left=h+"px",this._bottomContainer.style.bottom=m+"px",this._lastWidth=i,this._lastHeight=n},se.prototype.forceResize=function(){this._lastWidth=0,this.resize()},se.prototype.render=function(){this._cesiumWidget.render()},se.prototype.isDestroyed=function(){return!1},se.prototype.destroy=function(){let e;this.screenSpaceEventHandler.removeInputAction(f["a"].LEFT_CLICK),this.screenSpaceEventHandler.removeInputAction(f["a"].LEFT_DOUBLE_CLICK);const t=this.dataSources,i=t.length;for(e=0;e<i;e++)this._dataSourceRemoved(t,t.get(e));return this._dataSourceRemoved(void 0,this._dataSourceDisplay.defaultDataSource),this._container.removeChild(this._element),this._element.removeChild(this._toolbar),this._eventHelper.removeAll(),Object(r["a"])(this._geocoder)&&(this._geocoder=this._geocoder.destroy()),Object(r["a"])(this._homeButton)&&(this._homeButton=this._homeButton.destroy()),Object(r["a"])(this._sceneModePicker)&&(this._sceneModePicker=this._sceneModePicker.destroy()),Object(r["a"])(this._projectionPicker)&&(this._projectionPicker=this._projectionPicker.destroy()),Object(r["a"])(this._baseLayerPicker)&&(this._baseLayerPicker=this._baseLayerPicker.destroy()),Object(r["a"])(this._animation)&&(this._element.removeChild(this._animation.container),this._animation=this._animation.destroy()),Object(r["a"])(this._timeline)&&(this._timeline.removeEventListener("settime",G,!1),this._element.removeChild(this._timeline.container),this._timeline=this._timeline.destroy()),Object(r["a"])(this._fullscreenButton)&&(this._fullscreenSubscription.dispose(),this._element.removeChild(this._fullscreenButton.container),this._fullscreenButton=this._fullscreenButton.destroy()),Object(r["a"])(this._vrButton)&&(this._vrSubscription.dispose(),this._vrModeSubscription.dispose(),this._element.removeChild(this._vrButton.container),this._vrButton=this._vrButton.destroy()),Object(r["a"])(this._infoBox)&&(this._element.removeChild(this._infoBox.container),this._infoBox=this._infoBox.destroy()),Object(r["a"])(this._selectionIndicator)&&(this._element.removeChild(this._selectionIndicator.container),this._selectionIndicator=this._selectionIndicator.destroy()),this._destroyClockViewModel&&(this._clockViewModel=this._clockViewModel.destroy()),this._dataSourceDisplay=this._dataSourceDisplay.destroy(),this._cesiumWidget=this._cesiumWidget.destroy(),this._destroyDataSourceCollection&&(this._dataSourceCollection=this._dataSourceCollection.destroy()),Object(d["a"])(this)},se.prototype._dataSourceAdded=function(e,t){const i=t.entities;i.collectionChanged.addEventListener(se.prototype._onEntityCollectionChanged,this)},se.prototype._dataSourceRemoved=function(e,t){const i=t.entities;i.collectionChanged.removeEventListener(se.prototype._onEntityCollectionChanged,this),Object(r["a"])(this.trackedEntity)&&i.getById(this.trackedEntity.id)===this.trackedEntity&&(this.trackedEntity=void 0),Object(r["a"])(this.selectedEntity)&&i.getById(this.selectedEntity.id)===this.selectedEntity&&(this.selectedEntity=void 0)},se.prototype._onTick=function(e){const t=e.currentTime,i=this._dataSourceDisplay.update(t);this._allowDataSourcesToSuspendAnimation&&(this._clockViewModel.canAnimate=i);const n=this._entityView;if(Object(r["a"])(n)){const e=this._trackedEntity,i=this._dataSourceDisplay.getBoundingSphere(e,!1,K);i===p["a"].DONE&&n.update(t,K)}let a,c=!1;const d=this.selectedEntity,l=Object(r["a"])(d)&&this._enableInfoOrSelection;if(l&&d.isShowing&&d.isAvailable(t)){const e=this._dataSourceDisplay.getBoundingSphere(d,!0,K);e!==p["a"].FAILED?a=K.center:Object(r["a"])(d.position)&&(a=d.position.getValue(t,a)),c=Object(r["a"])(a)}const u=Object(r["a"])(this._selectionIndicator)?this._selectionIndicator.viewModel:void 0;Object(r["a"])(u)&&(u.position=o["a"].clone(a,u.position),u.showSelection=l&&c,u.update());const h=Object(r["a"])(this._infoBox)?this._infoBox.viewModel:void 0;Object(r["a"])(h)&&(h.showInfo=l,h.enableCamera=c,h.isCameraTracking=this.trackedEntity===this.selectedEntity,l?(h.titleText=Object(s["a"])(d.name,d.id),h.description=O["a"].getValueOrDefault(d.description,t,"")):(h.titleText="",h.description=""))},se.prototype._onEntityCollectionChanged=function(e,t,i){const n=i.length;for(let o=0;o<n;o++){const e=i[o];this.trackedEntity===e&&(this.trackedEntity=void 0),this.selectedEntity===e&&(this.selectedEntity=void 0)}},se.prototype._onInfoBoxCameraClicked=function(e){if(e.isCameraTracking&&this.trackedEntity===this.selectedEntity)this.trackedEntity=void 0;else{const e=this.selectedEntity,t=e.position;Object(r["a"])(t)?this.trackedEntity=this.selectedEntity:this.zoomTo(this.selectedEntity)}},se.prototype._clearTrackedObject=function(){this.trackedEntity=void 0},se.prototype._onInfoBoxClockClicked=function(e){this.selectedEntity=void 0},se.prototype._clearObjects=function(){this.trackedEntity=void 0,this.selectedEntity=void 0},se.prototype._onDataSourceChanged=function(e){this.clockTrackedDataSource===e&&ie(this.timeline,this.clock,e)},se.prototype._onDataSourceAdded=function(e,t){this._automaticallyTrackDataSourceClocks&&(this.clockTrackedDataSource=t);const i=t.entities.id,n=this._eventHelper.add(t.changedEvent,se.prototype._onDataSourceChanged,this);this._dataSourceChangedListeners[i]=n},se.prototype._onDataSourceRemoved=function(e,t){const i=this.clockTrackedDataSource===t,n=t.entities.id;if(this._dataSourceChangedListeners[n](),this._dataSourceChangedListeners[n]=void 0,i){const t=e.length;this._automaticallyTrackDataSourceClocks&&t>0?this.clockTrackedDataSource=e.get(t-1):this.clockTrackedDataSource=void 0}},se.prototype.zoomTo=function(e,t){const i={offset:t};return re(this,e,i,!1)},se.prototype.flyTo=function(e,t){return re(this,e,t,!0)},se.prototype._postRender=function(){ue(this),he(this)},t["a"]=se},1915:function(e,t,i){"use strict";var n=i("4ae0");function o(e,t,i,o,a){return i.call(o,e[t]),n["a"].getObservable(e,t).subscribe(i,o,a)}t["a"]=o},"3ae7":function(e,t,i){"use strict";var n=i("535a"),o=i("21d7"),a=i("4ae0");function c(e,t){t=Object(n["a"])(t,!0);const i=new o["a"],c=new o["a"];function s(){const t={args:arguments,cancel:!1};let n;return i.raiseEvent(t),t.cancel||(n=e.apply(null,arguments),c.raiseEvent(n)),n}return s.canExecute=t,a["a"].track(s,["canExecute"]),Object.defineProperties(s,{beforeExecute:{value:i},afterExecute:{value:c}}),s}t["a"]=c},"9fef":function(e,t,i){"use strict";function n(e){if("string"===typeof e){const t=document.getElementById(e);e=t}return e}t["a"]=n},ca3e:function(e,t,i){"use strict";var n=i("7d62"),o=i("4ae0"),a=i("9fef"),c=i("100a");const s="M 5.3125 6.375 C 4.008126 6.375 2.96875 7.4141499 2.96875 8.71875 L 2.96875 19.5 C 2.96875 20.8043 4.008126 21.875 5.3125 21.875 L 13.65625 21.875 C 13.71832 20.0547 14.845166 18.59375 16.21875 18.59375 C 17.592088 18.59375 18.71881 20.0552 18.78125 21.875 L 27.09375 21.875 C 28.398125 21.875 29.4375 20.8043 29.4375 19.5 L 29.4375 8.71875 C 29.4375 7.4141499 28.398125 6.375 27.09375 6.375 L 5.3125 6.375 z M 9.625 10.4375 C 11.55989 10.4375 13.125 12.03385 13.125 13.96875 C 13.125 15.90365 11.55989 17.46875 9.625 17.46875 C 7.69011 17.46875 6.125 15.90365 6.125 13.96875 C 6.125 12.03385 7.69011 10.4375 9.625 10.4375 z M 22.46875 10.4375 C 24.40364 10.4375 25.96875 12.03385 25.96875 13.96875 C 25.96875 15.90365 24.40364 17.46875 22.46875 17.46875 C 20.53386 17.46875 18.96875 15.90365 18.96875 13.96875 C 18.96875 12.03385 20.53386 10.4375 22.46875 10.4375 z",r="M 25.770585,2.4552065 C 15.72282,13.962707 10.699956,19.704407 8.1768352,22.580207 c -1.261561,1.4379 -1.902282,2.1427 -2.21875,2.5 -0.141624,0.1599 -0.208984,0.2355 -0.25,0.2813 l 0.6875,0.75 c 10e-5,-10e-5 0.679191,0.727 0.6875,0.7187 0.01662,-0.016 0.02451,-0.024 0.03125,-0.031 0.01348,-0.014 0.04013,-0.038 0.0625,-0.062 0.04474,-0.05 0.120921,-0.1315 0.28125,-0.3126 0.320657,-0.3619 0.956139,-1.0921 2.2187499,-2.5312 2.5252219,-2.8781 7.5454589,-8.6169 17.5937499,-20.1250005 l -1.5,-1.3125 z m -20.5624998,3.9063 c -1.304375,0 -2.34375,1.0391 -2.34375,2.3437 l 0,10.8125005 c 0,1.3043 1.039375,2.375 2.34375,2.375 l 2.25,0 c 1.9518039,-2.2246 7.4710958,-8.5584 13.5624998,-15.5312005 l -15.8124998,0 z m 21.1249998,0 c -1.855467,2.1245 -2.114296,2.4005 -3.59375,4.0936995 1.767282,0.1815 3.15625,1.685301 3.15625,3.500001 0,1.9349 -1.56511,3.5 -3.5,3.5 -1.658043,0 -3.043426,-1.1411 -3.40625,-2.6875 -1.089617,1.2461 -2.647139,2.9988 -3.46875,3.9375 0.191501,-0.062 0.388502,-0.094 0.59375,-0.094 1.373338,0 2.50006,1.4614 2.5625,3.2812 l 8.3125,0 c 1.304375,0 2.34375,-1.0707 2.34375,-2.375 l 0,-10.8125005 c 0,-1.3046 -1.039375,-2.3437 -2.34375,-2.3437 l -0.65625,0 z M 9.5518351,10.423906 c 1.9348899,0 3.4999999,1.596401 3.4999999,3.531301 0,1.9349 -1.56511,3.5 -3.4999999,3.5 -1.9348899,0 -3.4999999,-1.5651 -3.4999999,-3.5 0,-1.9349 1.56511,-3.531301 3.4999999,-3.531301 z m 4.2187499,10.312601 c -0.206517,0.2356 -0.844218,0.9428 -1.03125,1.1562 l 0.8125,0 c 0.01392,-0.4081 0.107026,-0.7968 0.21875,-1.1562 z";function d(e,t,i){e=Object(a["a"])(e);const n=new c["a"](t,i);n._exitVRPath=r,n._enterVRPath=s;const d=document.createElement("button");d.type="button",d.className="cesium-button cesium-vrButton",d.setAttribute("data-bind",'css: { "cesium-button-disabled" : _isOrthographic }, attr: { title: tooltip },click: command,enable: isVREnabled,cesiumSvgPath: { path: isVRMode ? _exitVRPath : _enterVRPath, width: 32, height: 32 }'),e.appendChild(d),o["a"].applyBindings(n,d),this._container=e,this._viewModel=n,this._element=d}Object.defineProperties(d.prototype,{container:{get:function(){return this._container}},viewModel:{get:function(){return this._viewModel}}}),d.prototype.isDestroyed=function(){return!1},d.prototype.destroy=function(){return this._viewModel.destroy(),o["a"].cleanNode(this._element),this._container.removeChild(this._element),Object(n["a"])(this)},t["a"]=d}}]);