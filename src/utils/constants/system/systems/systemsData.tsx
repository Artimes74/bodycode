import {ImageSourcePropType} from 'react-native';
import pic1 from '../../../../assets/img/types/madar/sytem/eskeleti/photo_2024-05-07_23-31-18.jpg';
import pic2 from '../../../../assets/img/types/madar/sytem/lanf/photo_2024-05-05_18-54-25.jpg';
import pic3 from '../../../../assets/img/types/madar/sytem/gardesh/gardesh.jpg';
import pic4 from '../../../../assets/img/types/madar/sytem/azole/photo_2024-05-07_23-32-51.jpg';
import pic5 from '../../../../assets/img/types/madar/sytem/asabi/photo_2024-05-07_23-32-27.jpg';
import pic6 from '../../../../assets/img/types/madar/sytem/govaresh/photo_2024-05-05_18-53-32.jpg';
import pic7 from '../../../../assets/img/types/madar/sytem/tanafosi/photo_2024-05-07_23-32-33.jpg';
import pic8 from '../../../../assets/img/types/madar/sytem/posheshi/photo_2024-05-07_23-32-45.jpg';
import pic9 from '../../../../assets/img/types/madar/sytem/qodad/photo_2024-05-07_23-32-21.jpg';
import pic10 from '../../../../assets/img/types/madar/sytem/tolid/photo_2024-05-07_23-32-15.jpg';
import pic11 from '../../../../assets/img/types/madar/sytem/adari/photo_2024-05-07_23-32-39.jpg';
import pic12 from '../../../../assets/img/types/madar/sytem/imeni/photo_2024-05-05_18-53-45.jpg';
import {ostData} from './eskelti/eskelti.tsx';

export const systemsData: {
  name: string;
  img: ImageSourcePropType | undefined;
  data: any[];
  lastPageData: ImageSourcePropType | undefined;
}[] = [
  {
    name: 'سیستم لنفاوی',
    img: pic2,
    data: [],
    lastPageData: undefined,
  },
  {
    name: 'سیستم گردش خون',
    img: pic3,
    data: [],
    lastPageData: undefined,
  },
  {
    name: 'سیستم اسکلتی',
    img: pic1,
    data: ostData,
    lastPageData: undefined,
  },
  {
    name: 'سیستم عضلانی',
    img: pic4,
    data: [],
    lastPageData: undefined,
  },
  {
    name: 'سیستم عصبی',
    img: pic5,
    data: [],
    lastPageData: undefined,
  },
  {
    name: 'سیستم گوارش',
    img: pic6,
    data: [],
    lastPageData: undefined,
  },
  {
    name: 'سیستم تنفسی',
    img: pic7,
    data: [],
    lastPageData: undefined,
  },
  {
    name: 'سیستم پوششی',
    img: pic8,
    data: [],
    lastPageData: undefined,
  },
  {
    name: 'سیستم غدد درون ریز',
    img: pic9,
    data: [],
    lastPageData: undefined,
  },
  {
    name: 'سیستم تولید مثل',
    img: pic10,
    data: [],
    lastPageData: undefined,
  },
  {
    name: 'سیستم ادراری',
    img: pic11,
    data: [],
    lastPageData: undefined,
  },
  {
    name: 'سیستم ایمنی',
    img: pic12,
    data: [],
    lastPageData: undefined,
  },
];
