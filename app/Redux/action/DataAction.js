import {
  PROCESS,
  WORKER,
  PRODUCT,
  STATUS,
  FILTER,
  QR_DATA,
  AUTH_LOADING,
} from './Types';

export const authLoadingAction =
  (loading = false) =>
  dispatch => {
    dispatch({
      type: AUTH_LOADING,
      payload: loading,
    });
  };

export const ProcessData =
  (userToken = '') =>
  dispatch => {
    console.log('userToken', userToken);
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${userToken}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      'https://d2d.dhyaravi.com/qr_stock_api/home/get_proccess',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        const Data = result;
        if (Data.status == true) {
          dispatch({
            type: PROCESS,
            payload: Data,
          });
        }
      })
      .catch(error => console.log('error', error));
  };

export const WorkerData =
  (userToken = '', id) =>
  dispatch => {
    // var myHeaders = new Headers();
    // myHeaders.append('Authorization', `Bearer ${userToken}`);
    // myHeaders.append('Content-Type', 'application/json');

    // var raw = JSON.stringify({
    //   proccess_id: id,
    // });

    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow',
    // };

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Bearer ${userToken}`);

    var raw = JSON.stringify({
      proccess_id: id,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'https://d2d.dhyaravi.com/qr_stock_api/home/get_workers',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        const workerData = result;
        if (workerData.status == true) {
          dispatch({
            type: WORKER,
            payload: workerData,
          });
        }
      })
      .catch(error => console.log('error', error));
  };

export const ProductData =
  (userToken = '') =>
  dispatch => {
    console.log('producttoken', userToken);
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${userToken}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      'https://d2d.dhyaravi.com/qr_stock_api/home/get_product',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        const productData = result;
        if (productData.status == true) {
          dispatch({
            type: PRODUCT,
            payload: productData,
          });
        }
      })
      .catch(error => console.log('error', error));
  };

export const StatusData =
  (userToken = '') =>
  dispatch => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${userToken}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      'https://d2d.dhyaravi.com/qr_stock_api/home/get_status',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        const statusData = result;
        if (statusData.status == true) {
          dispatch({
            type: STATUS,
            payload: statusData,
          });
        }
      })
      .catch(error => console.log('error', error));
  };

export const Filter =
  (
    userToken = '',
    fromDate,
    ToDate,
    ProcessId,
    workerid,
    productid,
    statusid,
  ) =>
  dispatch => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${userToken}`);

    var formdata = new FormData();
    formdata.append('from', fromDate);
    formdata.append('to', ToDate);
    formdata.append('proccess_id', ProcessId);
    formdata.append('worker_id', workerid);
    formdata.append('product_id', productid);
    formdata.append('status_id', statusid);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://d2d.dhyaravi.com/qr_stock_api/FilterReport/filter',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        const filterData = result;
        console.log(filterData);
        if (filterData.status == true) {
          dispatch({
            type: FILTER,
            payload: filterData,
          });
        }
      })
      .catch(error => console.log('error', error));
  };

export const qrDataAction =
  (userToken = '', qrCode) =>
  dispatch => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${userToken}`);

    var formdata = new FormData();
    formdata.append('code', qrCode);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://d2d.dhyaravi.com/qr_stock_api/qr_data/getqrdata',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        const qrdata = result;
        console.log('qrdata', qrdata);
        if (qrdata.status == true) {
          dispatch({
            type: QR_DATA,
            payload: qrdata.response,
          });
        }
      })
      .catch(error => console.log('error', error));
  };
