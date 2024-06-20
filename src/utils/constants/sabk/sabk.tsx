import sabk1 from '../../../assets/img/types/sabk/ph/photo_2024-05-06_14-38-41.jpg';
import sabk2 from '../../../assets/img/types/sabk/ab/photo_2024-05-06_14-38-54.jpg';
import sabk3 from '../../../assets/img/types/sabk/khab/photo_2024-05-06_14-39-32.jpg';
import sabk4 from '../../../assets/img/types/sabk/daramanha/photo_2024-05-06_14-40-55.jpg';
import sabk5 from '../../../assets/img/types/sabk/rang/photo_2024-05-06_14-39-20.jpg';
import sabk6 from '../../../assets/img/types/sabk/taqzieh/photo_2024-05-06_14-41-55.jpg';
import sabk7 from '../../../assets/img/types/sabk/khoraki/photo_2024-05-06_14-39-44.jpg';
import sabk8 from '../../../assets/img/types/sabk/meqnatisi/photo_2024-05-06_14-39-06.jpg';
import sabk9 from '../../../assets/img/types/sabk/khareji/photo_2024-05-06_14-42-33.jpg';
import daraman1 from '../../../assets/img/types/sabk/daramanha/roqan/photo_2024-05-06_14-41-21.jpg';
import daraman2 from '../../../assets/img/types/sabk/daramanha/gol/photo_2024-05-06_14-41-08.jpg';
import daraman3 from '../../../assets/img/types/sabk/daramanha/homio/photo_2024-05-06_14-41-42.jpg';
import taqzieh1 from '../../../assets/img/types/sabk/taqzieh/jesmi/photo_2024-05-06_14-42-08.jpg';
import taqzieh2 from '../../../assets/img/types/sabk/taqzieh/rohi/photo_2024-05-06_14-42-21.jpg';
import mavad1 from '../../../assets/img/types/sabk/khoraki/qaza/photo_2024-05-06_14-39-56.jpg';
import mavad2 from '../../../assets/img/types/sabk/khoraki/gihan/photo_2024-05-06_14-40-16.jpg';
import mavad3 from '../../../assets/img/types/sabk/khoraki/movad/photo_2024-05-06_14-40-36.jpg';

const darmanData = [
  {name: 'روغن', img: daraman1, data: [], lastPageData: []},
  {name: 'گل باخ', img: daraman2, data: [], lastPageData: []},
  {name: 'هومیوپاتی', img: daraman3, data: [], lastPageData: []},
];

const taqizehData = [
  {name: 'جسمی', img: taqzieh1, data: [], lastPageData: []},
  {name: 'روحی', img: taqzieh2, data: [], lastPageData: []},
];

const mavadData = [
  {name: 'غذاها', img: mavad1, data: [], lastPageData: []},
  {name: 'گیاهان', img: mavad2, data: [], lastPageData: []},
  {name: 'مواد مغذی', img: mavad3, data: [], lastPageData: []},
];

export const SabkData = [
  {name: 'ph', img: sabk1, data: [], lastPageData: []},
  {name: 'اب', img: sabk2, data: [], lastPageData: []},
  {name: 'خواب', img: sabk3, data: [], lastPageData: []},
  {name: 'درمان ها', img: sabk4, data: darmanData, lastPageData: undefined},
  {name: 'رنگ', img: sabk5, data: [], lastPageData: []},
  {name: 'سوتغذیه', img: sabk6, data: taqizehData, lastPageData: undefined},
  {name: 'مواد خوراکی', img: sabk7, data: mavadData, lastPageData: undefined},
  {name: 'میدان مغناطیسی', img: sabk8, data: [], lastPageData: []},
  {name: 'نیاز های خارجی', img: sabk9, data: [], lastPageData: undefined},
];
