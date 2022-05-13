import { IBrand } from "./ibrand";

export interface ICategory {
  id: number;
  code: string;
  name: string;
  nameAr: string;
  isTop: boolean;
  parentId?: number;
  brands?: IBrand[];
  childrens?: ICategory[];
}
