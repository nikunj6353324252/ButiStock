import {PROCESS, WORKER} from './Types';

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
  (userToken = '') =>
  dispatch => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${userToken}`);
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      proccess_id: 8,
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
        if (workerData.status == true) {
          dispatch({
            type: WORKER,
            payload: workerData,
          });
        }
      })
      .catch(error => console.log('error', error));
  };
