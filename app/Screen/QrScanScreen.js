import {View, Text, Dimensions, ScrollView, TextInput} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {useRoute} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
// import {TextInput} from 'react-native-paper';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

const QrScanScreen = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const route = useRoute();

  const qrdata = route.params?.data.result;
  console.log('qrdata', qrdata);

  const data = [
    {label: '18 KT (W)', value: '1'},
    {label: '18 KT (G)', value: '2'},
    {label: '18 KT (R)', value: '3'},
    {label: '18 KT (Y)', value: '4'},
    {label: '20 KT ', value: '5'},
    {label: '22 KT ', value: '6'},
  ];

  return (
    <ScrollView style={{backgroundColor: '#2C3539', height: height}}>
      <View style={{margin: scale(20)}}>
        <View style={{marginTop: verticalScale(15)}}>
          <Text
            style={{
              fontSize: scale(13),
              color: 'white',
              fontWeight: 'bold',
              paddingLeft: scale(3),
              paddingBottom: verticalScale(3),
            }}>
            Worker
          </Text>
          <Dropdown
            style={{
              height: verticalScale(35),
              borderColor: 'White',
              borderWidth: scale(0.5),
              borderRadius: scale(5),
              borderColor: 'white',
              paddingHorizontal: scale(5),
              marginBottom: verticalScale(5),
              paddingVertical: verticalScale(20),
              backgroundColor: 'rgba(255,255,255,0.3)',
            }}
            placeholderStyle={{fontSize: 16, color: 'white'}}
            selectedTextStyle={{fontSize: 16, color: 'black'}}
            inputSearchStyle={{height: 40, fontSize: 16}}
            data={data}
            maxHeight={250}
            iconColor="white"
            backgroundColor={'rgba(0,0,0,0.7)'}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Worker' : '...'}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setGroup(item.label);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={{marginTop: verticalScale(10)}}>
          <Text
            style={{
              fontSize: scale(13),
              color: 'white',
              fontWeight: 'bold',
              paddingLeft: scale(3),
              paddingBottom: verticalScale(3),
            }}>
            Product Name
          </Text>
          <Dropdown
            style={{
              height: verticalScale(35),
              borderColor: 'White',
              borderWidth: scale(0.5),
              borderRadius: scale(5),
              borderColor: 'white',
              paddingHorizontal: scale(5),
              marginBottom: verticalScale(5),
              paddingVertical: verticalScale(20),
              backgroundColor: 'rgba(255,255,255,0.3)',
            }}
            placeholderStyle={{fontSize: 16, color: 'white'}}
            selectedTextStyle={{fontSize: 16, color: 'black'}}
            inputSearchStyle={{height: 40, fontSize: 16}}
            data={data}
            maxHeight={250}
            backgroundColor={'rgba(0,0,0,0.7)'}
            iconColor="white"
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Product Name' : '...'}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setGroup(item.label);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={{marginTop: verticalScale(10)}}>
          <Text
            style={{
              fontSize: scale(13),
              color: 'white',
              fontWeight: 'bold',
              paddingLeft: scale(3),
              paddingBottom: verticalScale(3),
            }}>
            Process Name
          </Text>
          <Dropdown
            style={{
              height: verticalScale(35),
              borderColor: 'White',
              borderWidth: scale(0.5),
              borderRadius: scale(5),
              borderColor: 'white',
              paddingHorizontal: scale(5),
              marginBottom: verticalScale(5),
              paddingVertical: verticalScale(20),
              backgroundColor: 'rgba(255,255,255,0.3)',
            }}
            placeholderStyle={{fontSize: 16, color: 'white'}}
            selectedTextStyle={{fontSize: 16, color: 'black'}}
            inputSearchStyle={{height: 40, fontSize: 16}}
            data={data}
            maxHeight={250}
            backgroundColor={'rgba(0,0,0,0.7)'}
            iconColor="white"
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Process Name' : '...'}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setGroup(item.label);
              setIsFocus(false);
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: verticalScale(30),
          }}>
          <View>
            <TextInput
              placeholder="G.Q"
              placeholderTextColor={'white'}
              multiline={true}
              style={{
                fontSize: scale(20),
                width: scale(150),
                height: verticalScale(150),
                color: 'white',
                borderRadius: scale(5),
                paddingLeft: scale(45),
                backgroundColor: '#87CEEB',
              }}
            />
          </View>
          <View>
            <TextInput
              placeholder="G.W"
              placeholderTextColor={'white'}
              multiline={true}
              style={{
                fontSize: scale(20),
                width: scale(150),
                height: verticalScale(150),
                color: 'white',
                borderRadius: scale(5),
                paddingLeft: scale(45),
                backgroundColor: '#87CEEB',
              }}
            />
          </View>

          {/* <TextInput
              placeholder="G.W"
              placeholderTextColor={'white'}
              multiline={true}
              style={{
                fontSize: scale(20),
                width: scale(150),
                height: verticalScale(150),
                color: 'white',
                borderRadius: scale(5),
                backgroundColor: 'rgba(255,255,255,0.3)',
              }}
            /> */}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: verticalScale(5),
          }}>
          <View>
            <TextInput
              placeholder="R.Q"
              placeholderTextColor={'white'}
              multiline={true}
              style={{
                fontSize: scale(20),
                width: scale(150),
                height: verticalScale(150),
                color: 'white',
                borderRadius: scale(5),
                paddingLeft: scale(45),
                backgroundColor: 'rgba(255,255,255,0.3)',
              }}
            />
          </View>
          <View>
            <TextInput
              placeholder="R.W"
              placeholderTextColor={'white'}
              multiline={true}
              style={{
                fontSize: scale(20),
                width: scale(150),
                height: verticalScale(150),
                color: 'white',
                borderRadius: scale(5),
                paddingLeft: scale(45),
                backgroundColor: 'rgba(255,255,255,0.3)',
              }}
            />
          </View>
        </View>

        <View style={{marginTop: scale(40)}}>
          <TextInput
            placeholder="Laber"
            keyboardType="numeric"
            placeholderTextColor={'white'}
            style={{
              borderRadius: scale(5),
              borderWidth: scale(0.5),
              borderColor: 'white',
              backgroundColor: 'rgba(255,255,255,0.3)',
              height: verticalScale(45),
              fontSize: scale(15),
              paddingLeft: scale(10),
            }}
          />

          <TextInput
            placeholder="Track"
            keyboardType="numeric"
            placeholderTextColor={'white'}
            style={{
              borderWidth: scale(0.5),
              borderRadius: scale(5),
              borderColor: 'white',
              marginTop: scale(15),
              fontSize: scale(15),
              height: verticalScale(45),
              backgroundColor: 'rgba(255,255,255,0.3)',
              paddingLeft: scale(10),
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default QrScanScreen;
