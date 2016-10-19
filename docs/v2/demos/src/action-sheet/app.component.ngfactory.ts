/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './app.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/components/action-sheet/action-sheet';
import * as import9 from 'ionic-angular/platform/platform';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from 'ionic-angular/components/toolbar/toolbar';
import * as import13 from 'ionic-angular/components/navbar/navbar';
import * as import14 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import15 from 'ionic-angular/components/content/content';
import * as import16 from 'ionic-angular/components/button/button';
import * as import17 from 'ionic-angular/config/config';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from 'ionic-angular/navigation/view-controller';
import * as import20 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import21 from 'ionic-angular/components/app/app';
import * as import22 from 'ionic-angular/navigation/nav-controller';
import * as import23 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import24 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import25 from 'ionic-angular/util/keyboard';
import * as import26 from '@angular/core/src/zone/ng_zone';
import * as import27 from 'ionic-angular/components/tabs/tabs';
import * as import28 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import29 from 'ionic-angular/components/nav/nav';
import * as import30 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import31 from 'ionic-angular/navigation/nav-controller-base';
import * as import32 from '@angular/core/src/linker/component_factory_resolver';
import * as import33 from 'ionic-angular/gestures/gesture-controller';
import * as import34 from 'ionic-angular/transitions/transition-controller';
import * as import35 from 'ionic-angular/navigation/deep-linker';
var renderType_ApiDemoPage_Host:import0.RenderComponentType = (null as any);
class _View_ApiDemoPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ApiDemoPage_0_4:import3.ApiDemoPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ApiDemoPage_Host0,renderType_ApiDemoPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ApiDemoPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ApiDemoPage_0_4 = new import3.ApiDemoPage(this.parentInjector.get(import8.ActionSheetController),this.parentInjector.get(import9.Platform));
    this._appEl_0.initComponent(this._ApiDemoPage_0_4,([] as any[]),compView_0);
    compView_0.create(this._ApiDemoPage_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ApiDemoPage) && (0 === requestNodeIndex))) { return this._ApiDemoPage_0_4; }
    return notFoundResult;
  }
}
function viewFactory_ApiDemoPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ApiDemoPage_Host === (null as any))) { (renderType_ApiDemoPage_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_ApiDemoPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const ApiDemoPageNgFactory:import11.ComponentFactory<import3.ApiDemoPage> = new import11.ComponentFactory<import3.ApiDemoPage>('ng-component',viewFactory_ApiDemoPage_Host0,import3.ApiDemoPage);
const styles_ApiDemoPage:any[] = ([] as any[]);
var renderType_ApiDemoPage:import0.RenderComponentType = (null as any);
class _View_ApiDemoPage0 extends import1.AppView<import3.ApiDemoPage> {
  _el_0:any;
  _Header_0_3:import12.Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _Navbar_2_4:import13.Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _ToolbarTitle_4_4:import14.ToolbarTitle;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _Content_9_4:import15.Content;
  _text_10:any;
  _el_11:any;
  /*private*/ _appEl_11:import2.AppElement;
  _Button_11_4:import16.Button;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ApiDemoPage0,renderType_ApiDemoPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import12.Header(this.parentInjector.get(import17.Config),new import18.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import19.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import20.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import13.Navbar(this.parentInjector.get(import21.App),this.parentInjector.get(import19.ViewController,(null as any)),this.parentInjector.get(import22.NavController,(null as any)),this.parentInjector.get(import17.Config),new import18.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_4 = new import2.AppElement(4,2,this,this._el_4);
    var compView_4:any = import23.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import14.ToolbarTitle(this.parentInjector.get(import17.Config),new import18.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import12.Toolbar,(null as any)),this._Navbar_2_4);
    this._appEl_4.initComponent(this._ToolbarTitle_4_4,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'Action Sheet',(null as any));
    compView_4.create(this._ToolbarTitle_4_4,[([] as any[]).concat([this._text_5])],(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_3,
        this._el_4,
        this._text_6
      ]
      )
    ]
    ,(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n\n',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n\n\n',(null as any));
    this._el_9 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_9,'padding','');
    this._appEl_9 = new import2.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import24.viewFactory_Content0(this.viewUtils,this.injector(9),this._appEl_9);
    this._Content_9_4 = new import15.Content(this.parentInjector.get(import17.Config),new import18.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import21.App),this.parentInjector.get(import25.Keyboard),this.parentInjector.get(import26.NgZone),this.parentInjector.get(import19.ViewController,(null as any)),this.parentInjector.get(import27.Tabs,(null as any)));
    this._appEl_9.initComponent(this._Content_9_4,([] as any[]),compView_9);
    this._text_10 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._el_11 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_11,'block','');
    this.renderer.setElementAttribute(this._el_11,'ion-button','');
    this._appEl_11 = new import2.AppElement(11,9,this,this._el_11);
    var compView_11:any = import28.viewFactory_Button0(this.viewUtils,this.injector(11),this._appEl_11);
    this._Button_11_4 = new import16.Button((null as any),'',this.parentInjector.get(import17.Config),new import18.ElementRef(this._el_11),this.renderer);
    this._appEl_11.initComponent(this._Button_11_4,([] as any[]),compView_11);
    this._text_12 = this.renderer.createText((null as any),'Basic Action Sheet',(null as any));
    compView_11.create(this._Button_11_4,[([] as any[]).concat([this._text_12])],(null as any));
    this._text_13 = this.renderer.createText((null as any),'\n\n',(null as any));
    compView_9.create(this._Content_9_4,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_10,
        this._el_11,
        this._text_13
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_14 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_11,'click',this.eventHandler(this._handle_click_11_0.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4; }
    if (((token === import13.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Navbar_2_4; }
    if (((token === import12.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Header_0_3; }
    if (((token === import16.Button) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._Button_11_4; }
    if (((token === import15.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._Content_9_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changed:boolean = true;
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_9_4.ngOnInit(); }
    changed = false;
    const currVal_4:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._Button_11_4.block = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    if (changed) { this._appEl_11.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Button_11_4.ngAfterContentInit(); } }
    const currVal_0:any = this._Navbar_2_4._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_2_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Content_9_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_9,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Content_9_4.ngOnDestroy();
  }
  private _handle_click_11_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.present()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_ApiDemoPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.ApiDemoPage> {
  if ((renderType_ApiDemoPage === (null as any))) { (renderType_ApiDemoPage = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_ApiDemoPage,{})); }
  return new _View_ApiDemoPage0(viewUtils,parentInjector,declarationEl);
}
var renderType_ApiDemoApp_Host:import0.RenderComponentType = (null as any);
class _View_ApiDemoApp_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ApiDemoApp_0_4:import3.ApiDemoApp;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ApiDemoApp_Host0,renderType_ApiDemoApp_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ApiDemoApp0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ApiDemoApp_0_4 = new import3.ApiDemoApp();
    this._appEl_0.initComponent(this._ApiDemoApp_0_4,([] as any[]),compView_0);
    compView_0.create(this._ApiDemoApp_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ApiDemoApp) && (0 === requestNodeIndex))) { return this._ApiDemoApp_0_4; }
    return notFoundResult;
  }
}
function viewFactory_ApiDemoApp_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ApiDemoApp_Host === (null as any))) { (renderType_ApiDemoApp_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_ApiDemoApp_Host0(viewUtils,parentInjector,declarationEl);
}
export const ApiDemoAppNgFactory:import11.ComponentFactory<import3.ApiDemoApp> = new import11.ComponentFactory<import3.ApiDemoApp>('ng-component',viewFactory_ApiDemoApp_Host0,import3.ApiDemoApp);
const styles_ApiDemoApp:any[] = ([] as any[]);
var renderType_ApiDemoApp:import0.RenderComponentType = (null as any);
class _View_ApiDemoApp0 extends import1.AppView<import3.ApiDemoApp> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Nav_0_4:import29.Nav;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ApiDemoApp0,renderType_ApiDemoApp,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-nav',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import30.viewFactory_Nav0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Nav_0_4 = new import29.Nav(this.parentInjector.get(import19.ViewController,(null as any)),this.parentInjector.get(import31.NavControllerBase,(null as any)),this.parentInjector.get(import21.App),this.parentInjector.get(import17.Config),this.parentInjector.get(import25.Keyboard),new import18.ElementRef(this._el_0),this.parentInjector.get(import26.NgZone),this.renderer,this.parentInjector.get(import32.ComponentFactoryResolver),this.parentInjector.get(import33.GestureController),this.parentInjector.get(import34.TransitionController),this.parentInjector.get(import35.DeepLinker,(null as any)));
    this._appEl_0.initComponent(this._Nav_0_4,([] as any[]),compView_0);
    compView_0.create(this._Nav_0_4,([] as any[]),(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]),[this._el_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import29.Nav) && (0 === requestNodeIndex))) { return this._Nav_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.root;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._Nav_0_4.root = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Nav_0_4.ngAfterViewInit(); } }
  }
}
export function viewFactory_ApiDemoApp0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.ApiDemoApp> {
  if ((renderType_ApiDemoApp === (null as any))) { (renderType_ApiDemoApp = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_ApiDemoApp,{})); }
  return new _View_ApiDemoApp0(viewUtils,parentInjector,declarationEl);
}