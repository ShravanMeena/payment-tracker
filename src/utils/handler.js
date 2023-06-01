import axios from 'axios';
export const axiosRequest = (method, data, url) => {
  axios.defaults.baseURL = 'https://dhanmatka.onrender.com/api/v1';

  let auth_token = '';
  const Authorization = !auth_token ? '' : `Bearer ${auth_token}`;
  const user_id = '';

  console.log(method, data, url);

  return new Promise(resolve => {
    axios({
      method,
      url,
      data,
      headers: {
        Authorization,
        // user_id,
      },
    })
      .then(res => {
        if (!res) {
          alert('Something wrong');
          return;
        }

        resolve(res);
        if (!res?.data?.status) {
          res.data.error?.toLowerCase() !== 'beneficiary does not exist' &&
            alert(res.data.error);
        }
      })
      .catch(err => {
        if (!err?.response) {
          alert('Something wrong');
          return;
        }
        // agr koi backend me kuchh fatta hain to: by akshat
        resolve(err.response);

        // if (err.response.status === 403) {
        //   ErrorToast({
        //     msg: 'Your account has been blocked by admin. Please contact support@khelgully.com',
        //   });
        //   set('logout', true);
        //   return;
        // }

        // if found 500 or greate error status
        if (err?.response?.status >= 500) {
          // let _extra_err = isDev ? url + '::::' + err?.response?.status : '';
          // ErrorToast({
          //   msg: isDev
          //     ? _extra_err?.slice(6)
          //     : 'Ooops something went wrong. Please try again after some time!',
          // });
        } else {
          // if found 400 error
          alert(err?.response?.data?.error);

          if (err?.response?.status === 401 || err?.response?.status === 403) {
            return;
          }
        }
      });
  });
};
