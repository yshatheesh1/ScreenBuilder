import { Component, ComponentFactory, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, Renderer2, Injector, ApplicationRef, EmbeddedViewRef, ElementRef } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';
import { DraggableComponent } from './draggable/draggable.component';
import { Control, FormType, ControlType, BasicControl } from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("container") container: ElementRef;
  controls: Array<{ name: string, type: ControlType }> = [];
  components = [];
  constructor(private resolver: ComponentFactoryResolver, private appRef: ApplicationRef, private renderer: Renderer2, private injector: Injector) { }
  ngOnInit() {
    this.controls = [
      { name: 'textbox', type: ControlType.TextBox },
      { name: 'numeric', type: ControlType.Numeric }
    ];
  }
  ngAfterViewInit() {
    console.log(this.container);
  }
  onDrop($event: DndDropEvent) {
    const data = $event.data;
    debugger;
      this.createComponent(data);
  }
  createComponent(data: { name: string, type: ControlType }) {
    const factory: ComponentFactory<DraggableComponent> = this.resolver.resolveComponentFactory(DraggableComponent);
    const comp: ComponentRef<DraggableComponent> = factory.create(this.injector);
    this.components.push(comp);
    // Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(comp.hostView);
    // Get DOM element from component
    const domElem = (comp.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    this.renderer.appendChild(this.container.nativeElement, domElem);
    comp.instance._ref = comp;
    comp.instance.Type = data.type;
  }
}

