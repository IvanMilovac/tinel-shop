declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "loadsh" {
  import _ from "../node_modules/@types/lodash/index";
  export default _;
}

type filterType = "all" | "frontend" | "backend" | "design" | "marketing";

interface IWorkshops {
  id: number;
  title: string;
  desc: string;
  price: number;
  date: string;
  category: filterType;
  userId: number;
  imageUrl: string;
}

interface IWorkshopsWithQtyCat extends IWorkshops {
  CategoryImage: IconType | null;
  quantity: number;
}

interface IUser {
  email: string;
  name: string;
  password: string;
  id: number;
}
