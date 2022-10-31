export interface ProjectElement {
  [key:string]: ElementModel;
}

export interface ProjectHistory {
  action: string;
  project: ElementModel;
}

export interface ElementModel {
  [key:string]: ElementData;
}

export interface ElementData {
  id: string;
  name: string;
  class_name: string;
  text: string;
  index: number;
  style_list: {[key:string]: {}};
  selected: boolean
}