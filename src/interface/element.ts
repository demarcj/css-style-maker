export interface ProjectElement {
  [key:string]: ElementModel;
}

export interface ProjectHistory {
  action: string;
  id: string;
  project: ElementModel;
}

export interface ElementModel {
  [key:string]: ElementData;
}

export interface ElementData {
  class_name: string;
  id: string;
  index: number;
  name: string;
  selected: boolean
  style_list: {[key:string]: {}};
  text: string;
}