import {ImageSourcePropType} from 'react-native';
import pic1 from '../../../../assets/img/types/madar/andam/rodeB/photo_2_2024-05-03_02-02-46.jpg';
import pic2 from '../../../../assets/img/types/madar/andam/kab/photo_10_2024-05-03_02-03-26.jpg';
import pic3 from '../../../../assets/img/types/madar/andam/med/photo_2_2024-05-03_02-03-25.jpg';
import pic4 from '../../../../assets/img/types/madar/andam/mas/photo_1_2024-05-03_02-02-46.jpg';
import pic5 from '../../../../assets/img/types/madar/andam/tah/photo_7_2024-05-03_02-03-26.jpg';
import pic6 from '../../../../assets/img/types/madar/andam/kise/photo_1_2024-05-03_02-03-25.jpg';
import pic7 from '../../../../assets/img/types/madar/andam/qalb/photo_3_2024-05-03_02-03-25.jpg';
import pic8 from '../../../../assets/img/types/madar/andam/rahem/photo_6_2024-05-03_02-03-26.jpg';
import pic9 from '../../../../assets/img/types/madar/andam/rieh/photo_9_2024-05-03_02-03-26.jpg';
import pic10 from '../../../../assets/img/types/madar/andam/dariche/photo_4_2024-05-03_02-03-26.jpg';
import pic11 from '../../../../assets/img/types/madar/andam/rodK/photo_8_2024-05-03_02-03-26.jpg';
import pic12 from '../../../../assets/img/types/madar/andam/koli/photo_5_2024-05-03_02-03-26.jpg';
import {
  anr_dar,
  anr_kb,
  anr_kis,
  anr_kl,
  anr_qal,
  anr_rah,
  anr_rb,
  anr_ri,
  anr_rk,
  anr_tah,
} from './andamResult.tsx';

export const andamData: {
  name: string;
  img: ImageSourcePropType | undefined;
  data: any[];
  lastPageData: ImageSourcePropType | undefined;
}[] = [
  {
    name: 'دریچه ایلیوسکال',
    img: pic1,
    data: [],
    lastPageData: anr_dar,
  },
  {
    name: 'رحم',
    img: pic2,
    data: [],
    lastPageData: anr_rah,
  },
  {
    name: 'روده بزرگ',
    img: pic3,
    data: [],
    lastPageData: anr_rb,
  },
  {
    name: 'روده کوچک',
    img: pic4,
    data: [],
    lastPageData: anr_rk,
  },
  {
    name: 'ریه ها',
    img: pic5,
    data: [],
    lastPageData: anr_ri,
  },
  {
    name: 'طحال',
    img: pic6,
    data: [],
    lastPageData: anr_tah,
  },
  {
    name: 'قلب',
    img: pic7,
    data: [],
    lastPageData: anr_qal,
  },
  {
    name: 'کبد',
    img: pic8,
    data: [],
    lastPageData: anr_kb,
  },
  {
    name: 'کلیه ها',
    img: pic9,
    data: [],
    lastPageData: anr_kl,
  },
  {
    name: 'کیسه صفرا',
    img: pic10,
    data: [],
    lastPageData: anr_kis,
  },
  {
    name: 'مثانه',
    img: pic11,
    data: [],
    lastPageData: undefined,
  },
  {
    name: 'معده',
    img: pic12,
    data: [],
    lastPageData: undefined,
  },
];
