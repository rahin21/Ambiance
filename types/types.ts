export interface ParamsType {
    key?:string
    id?:string
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
  export type aboutType = {
    id:string
    avatar: string[];
    title: string;
    subTitle: string;
    description: string;
  }
  export type postType = {
    id:string
    key: string;
    title: string;
    thumbnail: string;
    gallery: string[];
  }
