import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactory, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { TextBoxComponent } from '../Controls/text-box/text-box.component';
import { Control, FormType, BasicControl, ControlType } from '../model';

@Component({
  selector: 'app-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.scss']
})
export class DraggableComponent implements OnInit {
  @Input() Type: ControlType;
  data: BasicControl;
  @ViewChild("control", {read: ViewContainerRef }) control: ViewContainerRef; 
  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    console.log('creating draggable component');
  }
  ngAfterViewInit() {
    if(this.Type === ControlType.TextBox) {
      this.data = {
        ControlType: ControlType.TextBox
      } as BasicControl;
      this.createComponent(TextBoxComponent, Date.now.toString());
    }
  }
  createComponent(component, dataBoundProperty) {
    const factory = this.resolver.resolveComponentFactory(component);
    const comp: ComponentRef<any>  = this.control.createComponent(factory);
    comp.instance.DataPath = dataBoundProperty;
  }
  // remove component
  _ref:any;
  Destroy(){
    this._ref.destroy();
  }

}
