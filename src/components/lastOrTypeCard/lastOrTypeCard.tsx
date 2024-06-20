import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from 'react-native';

const {width, height} = Dimensions.get('screen');
const SPACE = 10;

type Props = {
  item: {
    name: string;
    img: ImageSourcePropType | undefined;
    data: {
      name: string;
      img: ImageSourcePropType | undefined;
      data: {name: string; image: ImageSourcePropType | undefined}[];
    }[];
    lastPageData: ImageSourcePropType | undefined;
  };
  index: number;
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

const LastOrTypeCard = (props: Props) => {
  const {item, onPress} = props;

  return (
    <Pressable
      onPress={() => {
        onPress(item.name, item.data, item.lastPageData);
      }}
      style={styles.container}>
      <Image source={item.img} style={styles.img} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (width / 2) * 0.85,
    height: height * 0.2,
    borderRadius: SPACE * 2,
    marginVertical: SPACE * 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: SPACE * 2,
  },
});

export default LastOrTypeCard;
