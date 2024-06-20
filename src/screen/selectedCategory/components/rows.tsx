import React from 'react';
import {FlatList, ImageSourcePropType, StyleSheet, View} from 'react-native';
import LastOrTypeCard from '../../../components/lastOrTypeCard/lastOrTypeCard.tsx';
import TypeCard from '../../../components/typeCard/typeCard.tsx';

type Props = {
  data: {
    name: string;
    img: ImageSourcePropType | undefined;
    data: {
      name: string;
      img: ImageSourcePropType | undefined;
      data: {name: string; image: ImageSourcePropType | undefined}[];
    }[];
    lastPageData: ImageSourcePropType | undefined;
  }[];
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

const Rows = (props: Props) => {
  const {data, leftOver, onPress} = props;
  const filteredData = () => {
    return data.filter((_, index) => index % 2 !== leftOver);
  };

  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        data={filteredData()}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => {
          return <TypeCard item={item} index={index} onPress={onPress} />;
        }}
      />
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
