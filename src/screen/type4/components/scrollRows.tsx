import React from 'react';
import {ImageSourcePropType, StyleSheet, View} from 'react-native';
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

const ScrollRows = (props: Props) => {
  const {data, leftOver, onPress} = props;
  const filteredData = () => {
    return data.filter((_, index) => index % 2 !== leftOver);
  };

  return (
    <View style={styles.container}>
      {filteredData().map((item, index) => (
        <TypeCard item={item} index={index} onPress={onPress} colum={0} />
      ))}
    </View>
  );
};
export default ScrollRows;
const styles = StyleSheet.create({
  container: {
    width: '50%',
    alignItems: 'center',
  },
});
