// importing axios library connectio
import Axios from 'axios';

// define options for axios instance
const options = {
    timeout: 6000
};

// initialize axios instance
const instance = Axios.create(options);

// if has params, create a url with params
instance.parseParams = (params) => {
    return Object.keys(params).map(function(key) {
        return [key, params[key]].map(encodeURIComponent).join("=");
    }).join("&");
};

// export the default instance
export default instance;
