import {PROCESS, WORKER, PRODUCT, STATUS} from './Types';

export const ProcessData =
  (userToken = '') =>
  dispatch => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${userToken}`);

    var file = '<file contents here>';

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: file,
      redirect: 'follow',
    };

    fetch(
      'https://nt.dhyatiktok.com/qr_stock_api/home/get_proccess',
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
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${userToken}`);
    myHeaders.append('Content-Type', 'application/json');

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
      'https://nt.dhyatiktok.com/qr_stock_api/home/get_workers',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        const workerData = result;
        console.log('workerData', workerData);
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
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${userToken}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      'https://nt.dhyatiktok.com/qr_stock_api/home/get_product',
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
      'https://nt.dhyatiktok.com/qr_stock_api/home/get_status',
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
