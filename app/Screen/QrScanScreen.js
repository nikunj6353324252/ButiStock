import {View, Text, Dimensions, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {useRoute} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import {TextInput} from 'react-native-paper';

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
            }}
            placeholderStyle={{fontSize: 16, color: 'grey'}}
            selectedTextStyle={{fontSize: 16, color: 'black'}}
            inputSearchStyle={{height: 40, fontSize: 16}}
            data={data}
            maxHeight={250}
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
            }}
            placeholderStyle={{fontSize: 16, color: 'grey'}}
            selectedTextStyle={{fontSize: 16, color: 'black'}}
            inputSearchStyle={{height: 40, fontSize: 16}}
            data={data}
            maxHeight={250}
            backgroundColor={'rgba(0,0,0,0.7)'}
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
            }}
            placeholderStyle={{fontSize: 16, color: 'grey'}}
            selectedTextStyle={{fontSize: 16, color: 'black'}}
            inputSearchStyle={{height: 40, fontSize: 16}}
            data={data}
            maxHeight={250}
            backgroundColor={'rgba(0,0,0,0.7)'}
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
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,0.3)',
              padding: scale(53),
              borderRadius: scale(5),
            }}>
            <Text style={{fontSize: scale(20), color: 'white'}}>G.Q</Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,0.3)',
              padding: scale(53),
              borderRadius: scale(5),
            }}>
            <Text style={{fontSize: scale(20), color: 'white'}}>G.W</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: verticalScale(11),
          }}>
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,0.3)',
              padding: scale(53),
              borderRadius: scale(5),
            }}>
            <Text style={{fontSize: scale(20), color: 'white'}}>R.Q</Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,0.3)',
              padding: scale(53),
              borderRadius: scale(5),
            }}>
            <Text style={{fontSize: scale(20), color: 'white'}}>R.W</Text>
          </View>
        </View>

        <View style={{marginTop: scale(40)}}>
          <TextInput
            placeholder="Laber"
            keyboardType="numeric"
            style={{borderRadius: scale(5), borderWidth: scale(0.5)}}
          />

          <TextInput
            placeholder="Track"
            keyboardType="numeric"
            style={{
              borderWidth: scale(0.5),
              borderRadius: scale(5),
              marginTop: scale(15),
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default QrScanScreen;
