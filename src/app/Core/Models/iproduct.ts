import { Ispec } from './ispec';
import { Ihighlights } from './ihighlights';
import { IImage } from './IImage';
import { Ireview } from './ireview';
import { ICategory } from './icategory';
export interface IProduct {
  id: number;
  // skuId: string;
  // skuString: "";
  modelNumber: string;
  name: string;
  nameArabic: string;
  price: number;
  quantity: number;
  discount: number;
  description: string;
  descriptionAr: string;
  imageThumb: string;
  imagesGallery: IImage[];
  categoryId: number;
  highlights: Ihighlights[];
  specifications: Ispec[];
  available: boolean;
  brandId: number;
  brandCode: string;
  brandName: string;
  overallRating: number; //will be initialized in service
  reviews: Ireview[]; //will be initialized in service
  sellerId: string;
  sellerName: string;
  maxQuantityPerOrder: number;
  isFreeDelivered: boolean;
  parentsCategories: ICategory[]; //will be initialized in service
  //   availableCount: number;
  //   availableColor: string;
  //   availableSize: string;
  //   availableSizeCount: number;
  //   availableSizeColor: string;
  //   availableSizeColorCount: number;
}
