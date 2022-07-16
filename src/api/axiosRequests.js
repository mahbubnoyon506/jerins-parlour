import axios from 'axios';

export async function AxiosRequests(url, method, headers, params){
    return params 
    ? axios({
        url: url,
        method: method,
        headers: headers,
        data: params,
        timeout: 1000
    }) 
    : axios({
        url: url,
        method: method,
        headers: headers,
        data: {},
        timeout: 1000
    })

}

const GetApiDetails = () => {
    const headers = {
        'content-type' : 'application/json',
    }
    return AxiosRequests('https://immense-retreat-09101.herokuapp.com/results', 'GET', headers, {})
};

export default GetApiDetails;