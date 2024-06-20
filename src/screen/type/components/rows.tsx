import React from 'react';
import {FlatList, ImageSourcePropType, StyleSheet, View} from 'react-native';
import LastOrTypeCard from '../../../components/lastOrTypeCard/lastOrTypeCard.tsx';
import TypeCard from '../../../components/typeCard/typeCard.tsx';

type Props = {
  data:
    | {
        name: string;
        img: ImageSourcePropType | undefined;
        data: {
          name: string;
          img: ImageSourcePropType | undefined;
          data: {name: string; image: ImageSourcePropType | undefined}[];
        }[];
        lastPageData: ImageSourcePropType | undefined;
      }[]
    | any[];
  leftOver: number;
  colum: number;
  onPress: (
    name: string,
    data: {
      name: string;
      img: ImageSourcePropType | undefined;
      data: {name: string; image: ImageSourcePropType | undefined}[];
    }[],
    lastPageData: ImageSourcePropType | undefined,
  ) => void;
};

const SPACE = 10;

const Rows = (props: Props) => {
  const {data, leftOver, onPress, colum} = props;
  const filteredData = () => {
    const to = colum !== 0 ? 3 : 2;
    return data.filter((_, index) => index % to === leftOver);
  };

  return (
    <View style={[styles.container, {width: '32%'}]}>
      {filteredData().map((item, index) => {
        return (
          <TypeCard
            key={index}
            item={item}
            index={index}
            onPress={onPress}
            colum={colum}
          />
        );
      })}
    </View>
  );
};
export default Rows;
const styles = StyleSheet.create({
  container: {
    width: '50%',
    alignItems: 'center',
  },
});
