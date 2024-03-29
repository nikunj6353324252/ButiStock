import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {useRoute, useIsFocused, useFocusEffect} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import {useSelector, useDispatch} from 'react-redux';
import {
  ProductData,
  qrDataAction,
  WorkerData,
} from '../Redux/action/DataAction';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

const QrScanScreen = () => {
  const route = useRoute();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const [workers, setWorkers] = useState(null);
  const [name, setName] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const {QrData} = useSelector(state => state.dataState);
  const {setToken} = useSelector(state => state.authState);
  const productName = QrData.product_name;
  console.log('productName', productName);

  const processData = QrData?.response?.proccess;
  const workerData = QrData?.response?.workers;

  console.log(QrData.proccess);

  const [product, setProduct] = useState();
  // console.log('product', product);
  const [Gquantity, setGquantity] = useState();
  const [Gweight, setGweight] = useState();
  const [Rquantity, setRquantity] = useState();
  const [Rweight, setRweight] = useState();
  const [Laber, setLaber] = useState();
  const [Total, setToatal] = useState();

  useEffect(() => {
    setProduct(QrData.product_name);
    setLaber(QrData.given_lbr);
    setToatal(QrData.total);
    setRweight(QrData.received_weight);
    setRquantity(QrData.received_pcs);
    setGweight(QrData.given_weight);
    setGquantity(QrData.given_pcs);
    setValue(String(QrData.selected_proccess_id));
    setWorkers(String(QrData.selected_worker_id));
  }, [QrData]);

  console.log(QrData.selected_worker_id);

  return (
    <View style={{backgroundColor: '#2C3539', height: height}}>
      <ScrollView
        style={{margin: scale(20)}}
        showsVerticalScrollIndicator={false}>
        <View>
          <Text
            style={{fontSize: scale(13), color: 'white', fontWeight: 'bold'}}>
            Product Name
          </Text>
          <TextInput
            // multiline={true}
            placeholder="Product Name"
            keyboardType="numeric"
            placeholderTextColor={'white'}
            onChangeText={setProduct}
            value={product}
            style={{
              borderWidth: scale(0.5),
              borderRadius: scale(5),
              borderColor: 'white',
              marginTop: scale(3),
              fontSize: scale(15),
              height: verticalScale(41),
              backgroundColor: 'rgba(255,255,255,0.3)',
              paddingLeft: scale(10),
              color: 'white',
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
            itemTextStyle={{color: 'grey'}}
            selectedTextStyle={{fontSize: 16, color: 'white'}}
            inputSearchStyle={{height: 40, fontSize: 16}}
            iconColor="white"
            data={QrData.proccess}
            search
            maxHeight={300}
            labelField="name"
            valueField="id"
            placeholder={!isFocus ? 'Select User' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.id);
              setName(item.name);
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
            itemTextStyle={{color: 'grey'}}
            selectedTextStyle={{fontSize: 16, color: 'white'}}
            inputSearchStyle={{height: 40, fontSize: 16}}
            iconColor="white"
            data={QrData.workers}
            search
            maxHeight={300}
            labelField="name"
            valueField="id"
            searchPlaceholder="Search..."
            placeholder={!isFocus ? 'select worker' : '...'}
            value={workers}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setWorkers(item.id);
              setName(item.name);
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
              onChangeText={setGquantity}
              value={Gquantity}
              keyboardType="numeric"
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
              keyboardType="numeric"
              multiline={true}
              onChangeText={setGweight}
              value={Gweight}
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
              keyboardType="numeric"
              multiline={true}
              onChangeText={setRquantity}
              value={Rquantity}
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
              keyboardType="numeric"
              multiline={true}
              onChangeText={setRweight}
              value={Rweight}
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
            onChangeText={setLaber}
            value={Laber}
            style={{
              borderRadius: scale(5),
              borderWidth: scale(0.5),
              borderColor: 'white',
              backgroundColor: 'rgba(255,255,255,0.3)',
              height: verticalScale(45),
              fontSize: scale(15),
              paddingLeft: scale(10),
              color: 'white',
            }}
          />

          <TextInput
            placeholder="Total"
            keyboardType="numeric"
            placeholderTextColor={'white'}
            onChangeText={setToatal}
            value={Total}
            style={{
              borderWidth: scale(0.5),
              borderRadius: scale(5),
              borderColor: 'white',
              marginTop: scale(15),
              fontSize: scale(15),
              height: verticalScale(45),
              backgroundColor: 'rgba(255,255,255,0.3)',
              paddingLeft: scale(10),
              color: 'white',
            }}
          />
        </View>
      </ScrollView>
      <View
        style={{
          marginBottom: verticalScale(70),
          marginHorizontal: scale(20),
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#87CEEB',
            paddingVertical: scale(10),
            borderRadius: scale(5),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: scale(17), color: 'white', fontWeight: 'bold'}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QrScanScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(20),
    marginTop: verticalScale(50),
  },
  dropdown: {
    backgroundColor: '#333333',
    height: verticalScale(45),
    borderColor: '#f09a36',
    borderWidth: 0.5,
    borderRadius: scale(15),
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    color: 'grey',
    fontSize: 16,
  },
  selectedTextStyle: {
    color: '#fff',
    fontSize: 16,
  },
  iconStyle: {
    color: 'white',
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
