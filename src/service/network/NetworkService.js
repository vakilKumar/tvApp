/* eslint-disable prettier/prettier */

import axios from "axios";





export const get = async (
    url,
    params,
    apiPath = null,
    // fetchOnline = false,
  ) => {
    // const accessToken = ''
    // const androidId = ''
    // const config = {
    //   baseURL: '',
    //   method: 'GET',
    //   url,
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //     // AppVersion: getAppVersion(),
    //     // AndroidId: androidId,
    //   },
    //   params,
    // };

    console.log('=== call api ====');
    let response = await axios.get(url)
    console.log('======= response ==========>>>>>>>', response)
    return response;    
  };



const NetworkService = {
    get,
    // post,
    // put,
    // Delete,
};

export default NetworkService;