import {WORKER} from './Types';

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
        console.log('Data', Data);
        if (Data.status == true) {
          dispatch({
            type: WORKER,
            payload: Data,
          });
        }
      })
      .catch(error => console.log('error', error));
  };
