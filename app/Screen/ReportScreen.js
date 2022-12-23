import {View, Text, TouchableOpacity, Dimensions, Modal} from 'react-native';
import React, {useState, useEffect} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Dropdown} from 'react-native-element-dropdown';
import SelectDropdown from 'react-native-select-dropdown';
import {ProcessData, StatusData} from '../Redux/action/DataAction';
import {WorkerData} from '../Redux/action/DataAction';
import {ProductData} from '../Redux/action/DataAction';
import {useDispatch, useSelector} from 'react-redux';
import {Filter} from '../Redux/action/DataAction';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

const ReportScreen = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState(null);
  const [workers, setWorkers] = useState(null);
  const [products, setProducts] = useState(null);
  const [statuses, setStatuses] = useState(null);
  const [name, setName] = useState();
  const [isFocus, setIsFocus] = useState(false);
  const {userToken} = useSelector(state => state.authState);
  const {process} = useSelector(state => state.dataState);
  const {worker} = useSelector(state => state.dataState);
  const {product} = useSelector(state => state.dataState);
  const {status} = useSelector(state => state.dataState);

  const processData = process?.datalist;
  const workerData = worker?.datalist;
  const productData = product?.datalist;
  const statusData = status?.datalist;

  const data = [
    {label: '18 KT (W)', value: '1'},
    {label: '18 KT (G)', value: '2'},
    {label: '18 KT (R)', value: '3'},
    {label: '18 KT (Y)', value: '4'},
    {label: '20 KT ', value: '5'},
    {label: '22 KT ', value: '6'},
  ];

  // ************* from date ************** //

  const [fromdate, setfromDate] = useState(new Date());
  const [frommode, setfromMode] = useState('date');
  const [fromshow, setfromShow] = useState(false);
  const [fromtext, setfromText] = useState('Empty');

  useEffect(() => {
    FromOnChange();
  }, []);

  const FromOnChange = (event, selectedDate) => {
    const fromcurrentDate = selectedDate || fromdate;
    setfromShow(Platform.OS === 'ios');
    setfromDate(fromcurrentDate);

    const fromtempDate = new Date(fromcurrentDate);
    const fDate =
      fromtempDate.getFullYear() +
      '-' +
      (fromtempDate.getMonth() + 1) +
      '-' +
      fromtempDate.getDate();
    setfromText(fDate);
  };

  const fromshowMode = currentMode => {
    setfromShow(true);
    setfromMode(currentMode);
  };

  // ************* from date end ************** //

  // ************* to date start ************** //

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  useEffect(() => {
    OnChange();
  }, []);

  const OnChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    const tempDate = new Date(currentDate);
    const fDate =
      tempDate.getFullYear() +
      '-' +
      (tempDate.getMonth() + 1) +
      '-' +
      tempDate.getDate();
    setText(fDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  // ************* to date end ************** //

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#2C3539',
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: scale(300),
          height: verticalScale(70),
          backgroundColor: 'white',
          borderRadius: scale(5),
          padding: scale(10),
          marginTop: verticalScale(20),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: verticalScale(2),
          },
          shadowOpacity: 0.25,
          shadowRadius: scale(4),
          elevation: scale(2),
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View>
            <Text style={{fontSize: scale(15), color: 'black'}}>
              code : 1023
            </Text>
            <Text style={{fontSize: scale(15), color: 'black'}}>
              Worker : Harshil
            </Text>
          </View>

          <View>
            <Text style={{fontSize: scale(15), color: 'black'}}>
              code : 1023
            </Text>
            <Text style={{fontSize: scale(15), color: 'black'}}>
              Worker : Harshil
            </Text>
          </View>
        </View>
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => {
              dispatch(ProcessData(userToken));
              dispatch(WorkerData(userToken));
              dispatch(ProductData(userToken));
              dispatch(StatusData(userToken));
              setModalVisible(!modalVisible);
            }}
            style={{
              width: width / 4,
              backgroundColor: '#87CEEB',
              marginBottom: verticalScale(15),
              padding: scale(13),
              paddingVertical: verticalScale(15),
              borderRadius: 7,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: scale(10),
            }}>
            <Modal
              animationType="slidedown"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(false);
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                }}>
                <View
                  style={{
                    width: scale(350),
                    height: verticalScale(515),
                    backgroundColor: 'white',
                    borderTopLeftRadius: scale(10),
                    borderTopRightRadius: scale(10),
                    padding: scale(17),
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: verticalScale(2),
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: scale(4),
                    elevation: scale(2),
                  }}>
                  <View style={{flex: 1}}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        fontFamily: 'Cairo-Regular',
                        fontSize: scale(12),
                        color: 'black',
                        fontWeight: 'bold',
                        marginBottom: verticalScale(2),
                      }}>
                      FROM
                    </Text>
                    <TouchableOpacity onPress={() => fromshowMode('date')}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginBottom: verticalScale(10),
                        }}>
                        <View
                          style={{
                            zIndex: 5,
                            flex: 0.2,
                            borderRadius: scale(5),
                            borderWidth: scale(0.5),
                            borderColor: 'black',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderTopLeftRadius: scale(5),
                            borderBottomLeftRadius: scale(5),
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            paddingHorizontal: scale(3),
                          }}>
                          <MaterialIcons
                            name="date-range"
                            color={'#9ECED9'}
                            size={18}
                          />
                        </View>

                        <View
                          style={{
                            color: '#000000',
                            paddingVertical: verticalScale(11),
                            paddingHorizontal: scale(10),
                            borderTopLeftRadius: scale(0),
                            borderBottomLeftRadius: scale(0),
                            borderTopRightRadius: scale(7),
                            borderBottomRightRadius: scale(7),
                            borderWidth: scale(0.5),
                            borderColor: 'black',
                            flex: 0.9,
                            paddingLeft: scale(10),
                          }}>
                          <Text
                            style={{
                              color: '#000000',
                              fontSize: scale(14),
                            }}>
                            {fromtext}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    {fromshow && (
                      <DateTimePicker
                        testID="dateTimePicker1"
                        value={fromdate}
                        mode={frommode}
                        is24Hour={true}
                        display="default"
                        onChange={FromOnChange}
                      />
                    )}
                  </View>

                  <View style={{flex: 1}}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        fontSize: scale(12),
                        color: 'black',
                        fontWeight: 'bold',
                        marginBottom: verticalScale(2),
                      }}>
                      TO
                    </Text>
                    <TouchableOpacity onPress={() => showMode('date')}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginBottom: verticalScale(10),
                        }}>
                        <View
                          style={{
                            zIndex: 5,
                            flex: 0.2,
                            borderRadius: scale(5),
                            borderWidth: scale(0.5),
                            borderColor: 'black',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderTopLeftRadius: scale(5),
                            borderBottomLeftRadius: scale(5),
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            paddingHorizontal: scale(4),
                          }}>
                          <MaterialIcons
                            name="date-range"
                            color={'#9ECED9'}
                            size={18}
                          />
                        </View>

                        <View
                          style={{
                            color: '#000000',
                            paddingVertical: verticalScale(11),
                            paddingHorizontal: scale(10),
                            borderTopLeftRadius: scale(0),
                            borderBottomLeftRadius: scale(0),
                            borderTopRightRadius: scale(7),
                            borderBottomRightRadius: scale(7),
                            borderWidth: scale(0.5),
                            borderColor: 'black',
                            flex: 0.9,
                            paddingLeft: scale(10),
                          }}>
                          <Text
                            style={{
                              color: '#000000',
                              fontFamily: 'Cairo-Regular',
                              fontSize: scale(14),
                            }}>
                            {text}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    {show && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={OnChange}
                      />
                    )}
                  </View>

                  <View>
                    <Text
                      style={{
                        fontSize: scale(13),
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      Process
                    </Text>
                    <Dropdown
                      style={{
                        height: verticalScale(35),
                        borderColor: 'gray',
                        borderWidth: scale(0.6),
                        borderRadius: scale(5),
                        borderColor: 'black',
                        paddingHorizontal: scale(5),
                        marginBottom: verticalScale(5),
                        paddingVertical: verticalScale(21),
                      }}
                      placeholderStyle={{fontSize: 16, color: 'grey'}}
                      selectedTextStyle={{fontSize: 16, color: 'black'}}
                      inputSearchStyle={{height: 40, fontSize: 16}}
                      data={processData}
                      maxHeight={250}
                      backgroundColor={'rgba(0,0,0,0.7)'}
                      labelField="name"
                      valueField="id"
                      placeholder={!isFocus ? 'Select Process' : '...'}
                      value={value}
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => setIsFocus(false)}
                      onChange={item => {
                        setValue(item.id);
                        dispatch(WorkerData(userToken, item.id));
                        setName(item.name);
                        setIsFocus(false);
                      }}
                    />
                  </View>

                  <View>
                    <Text
                      style={{
                        fontSize: scale(13),
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      Worker
                    </Text>
                    <Dropdown
                      style={{
                        height: verticalScale(35),
                        borderColor: 'gray',
                        borderWidth: scale(0.6),
                        borderRadius: scale(5),
                        borderColor: 'black',
                        paddingHorizontal: scale(5),
                        marginBottom: verticalScale(5),
                        paddingVertical: verticalScale(21),
                      }}
                      placeholderStyle={{fontSize: 16, color: 'grey'}}
                      selectedTextStyle={{fontSize: 16, color: 'black'}}
                      inputSearchStyle={{height: 40, fontSize: 16}}
                      data={workerData}
                      maxHeight={250}
                      backgroundColor={'rgba(0,0,0,0.7)'}
                      labelField="name"
                      valueField="id"
                      placeholder={!isFocus ? 'Select Worker' : '...'}
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

                  <View>
                    <Text
                      style={{
                        fontSize: scale(13),
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      Product
                    </Text>
                    <Dropdown
                      style={{
                        height: verticalScale(35),
                        borderColor: 'gray',
                        borderWidth: scale(0.6),
                        borderRadius: scale(5),
                        borderColor: 'black',
                        paddingHorizontal: scale(5),
                        marginBottom: verticalScale(5),
                        paddingVertical: verticalScale(21),
                      }}
                      placeholderStyle={{fontSize: 16, color: 'grey'}}
                      selectedTextStyle={{fontSize: 16, color: 'black'}}
                      inputSearchStyle={{height: 40, fontSize: 16}}
                      data={productData}
                      maxHeight={250}
                      backgroundColor={'rgba(0,0,0,0.7)'}
                      labelField="name"
                      valueField="id"
                      placeholder={!isFocus ? 'Select Product' : '...'}
                      value={products}
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => setIsFocus(false)}
                      onChange={item => {
                        setProducts(item.id);
                        setName(item.name);
                        setIsFocus(false);
                      }}
                    />
                  </View>

                  <View>
                    <Text
                      style={{
                        fontSize: scale(13),
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      Status
                    </Text>
                    <View
                      style={{borderWidth: scale(0.5), borderRadius: scale(5)}}>
                      <SelectDropdown
                        data={statusData}
                        buttonStyle={{
                          width: scale(313),
                          backgroundColor: 'white',
                          marginBottom: verticalScale(1),
                          paddingVertical: verticalScale(10),
                          paddingHorizontal: scale(100),
                        }}
                        onSelect={(selectedItem, index) => {
                          console.log(selectedItem, index);
                          setStatuses(selectedItem);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                      />
                    </View>
                  </View>

                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        height: verticalScale(43),
                        marginTop: verticalScale(30),
                        marginBottom: verticalScale(7),
                      }}>
                      <TouchableOpacity
                        onPress={() => setModalVisible(false)}
                        style={{
                          width: scale(155),
                          height: verticalScale(44),
                          backgroundColor: '#2C3539',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: scale(4),
                          marginTop: verticalScale(3),
                        }}>
                        <Text
                          style={{
                            fontSize: scale(13),
                            fontWeight: '600',
                            color: 'white',
                            textTransform: 'uppercase',
                          }}>
                          Cancel
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => {
                          dispatch(Filter(userToken, fromtext, text, value));
                        }}
                        style={{
                          width: scale(155),
                          height: verticalScale(44),
                          backgroundColor: '#87CEEB',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: scale(4),
                          marginTop: verticalScale(3),
                        }}>
                        <Text
                          style={{
                            fontSize: scale(13),
                            fontWeight: '600',
                            color: 'white',
                            textTransform: 'uppercase',
                          }}>
                          apply
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
            <Text
              style={{fontSize: scale(15), color: 'white', fontWeight: 'bold'}}>
              Filter
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ReportScreen;
