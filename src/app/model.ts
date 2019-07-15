export enum FormType {
    Widget,
    Form,
    Basic
  }
  export interface Control {
    Type: FormType;
  }
  export interface WebForm extends Control {
    NumberOfColumns: number;
    Header: string;
  }
  export interface BasicControl extends Control {
    Value: any;
    ControlType: ControlType;
    SmartModelProperty: string;
  }
  export enum ControlType {
    TextBox,
    Label,
    Numeric
  }
  