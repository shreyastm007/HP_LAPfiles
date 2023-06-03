import axios from "axios";

const JSONUSERS=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})


// Add a request interceptor
JSONUSERS.interceptors.request.use(function (config) {
    // Do something before request is sent
    Object.assign(config.headers,{ "Authorization":"Token"})
    console.log("request",config)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
JSONUSERS.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    Object.assign(response, {
        data:{
            users:response.data,
            message:"Hai-bye"
        }
    })
    console.log("response",response)
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
  export{JSONUSERS}