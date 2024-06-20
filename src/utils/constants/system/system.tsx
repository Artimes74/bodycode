import {ImageSourcePropType} from 'react-native';
import pic1 from '../../../assets/img/categories/madar/andam.jpg';
import pic2 from '../../../assets/img/categories/madar/system.jpg';
import pic3 from '../../../assets/img/categories/madar/qodad.jpg';
import pic4 from '../../../assets/img/categories/madar/qat.jpg';
import pic5 from '../../../assets/img/categories/madar/moridi.jpg';
import pic6 from '../../../assets/img/categories/madar/chakra.jpg';
import {andamData} from './andam/andamdata.tsx';
import {systemsData} from './systems/systemsData.tsx';

export const systemData: {
  name: string;
  img: ImageSourcePropType | undefined;
  data: any[];
  lastPageData: ImageSourcePropType | undefined;
}[] = [
  {
    name: 'اندام‌ها',
    img: pic1,
    data: andamData,
    lastPageData: undefined,
  },
  {
    name: 'سیستم‌ها',
    img: pic2,
    data: systemsData,
    lastPageData: undefined,
  },
  {
    name: '',
    img: pic3,
    data: [],
    lastPageData: undefined,
  },
  {
    name: '',
    img: pic4,
    data: [],
    lastPageData: undefined,
  },
  {
    name: '',
    img: pic5,
    data: [],
    lastPageData: undefined,
  },
  {
    name: '',
    img: pic6,
    data: [],
    lastPageData: undefined,
  },
];
