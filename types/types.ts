export interface ParamsType {
    key:string
  }
export interface menuType{
    id: string
    key:string
    items:{
      name:string
      link:string
    }[]
  }
  export interface settingType{
    id:string;
    key:string;
    name:string;
    description:string;
  }