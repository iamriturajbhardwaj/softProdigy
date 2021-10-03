// Use of Redux in React Native App | React Native Redux
// https://aboutreact.com/react-native-redux/
import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import {connect} from 'react-redux';
import { getPostsList ,addToBookmark } from '../utils/actions';
import Carousel from 'react-native-snap-carousel';
import { TextType1,TextType2 } from '../components/uiComponent';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const SLIDER_WIDTH = width
const ITEM_WIDTH = Math.round(width * 0.9)

const home = (props) => {
  const isCarousel = React.useRef(null)
  useState(() => {
    props.getPostsList();
  }, []);

  _renderItem = ({item, index}) => {
    return (
        <View style={styles.slide}>
            <Image
              source={{"uri":item}}
              style={{height:height*.3,width:width}}
              resizeMode={"contain"}
            />
        </View>
    );
  } 
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Carousel
        autoplay={true}
        loop={true}
        layoutCardOffset={9}
        ref={isCarousel}
        data={props.postData}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
      <TextType1 style={{textAlign:"center"}}> Home </TextType1>
      <TextType2 style={{textAlign:"center"}}> You are at Home screen </TextType2>
      <FlatList
        data={props.postData2}
        numColumns={5}
        contentContainerStyle={{
          marginHorizontal:width*.15,
          marginTop: 10,
        }}
        renderItem={({item}) => {
          return (
              <View style={styles.innerContainer}>
                
                <Image
                  source={{"uri":item}}
                  style={{height:50,width:50}}
                  resizeMode={"contain"}
                />
              </View>
          );
        }}
      />
      </View>
    </SafeAreaView>
  );
};
const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.carouselContainer} key={index}>
      <Image
        source={{ uri: item }}
        style={styles.carouselImage}
      />
    </View>
  )
}

const mapStateToProps = (state) => {
  const {postData} = state;
  return {
    postData: postData.slice(0,5),
    postData2: postData.slice(5,25),
  };
};

const mapDispatchToProps = (dispatch) => ({
  getPostsList: () => dispatch(getPostsList()),
  addToBookmark: (item) => dispatch(addToBookmark(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
    justifyContent:"center",
    alignItems:"center"
  },
  innerContainer: {
    paddingHorizontal: width*.01,
    // width:width,
    alignItems:"center",
    justifyContent:"center"
  },
  itemRed: {
    color: 'red',
  },
  divider: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
  carouselContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    // paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  carouselImage: {
    width: ITEM_WIDTH,
    height: 300,
  },
  
});