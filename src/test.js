
const axios =require('axios')

const instance = axios.create({
  baseURL: "http://127.0.0.1:3030/api/"
});

function checkStatus({response}){
  if(!response){
    throw new Error('没有响应')
  }
  if(response.status >= 200 && response.status < 300){
    return response
  }
  if(response.status === 401){
    setTimeout(() => {
      console.log('跳转了')
    }, 1500);
  }

  const errorText = response.data.msg || '未知错误'
  const error = new Error(errorText)
  throw error
}

instance.interceptors.request.use(
  config => {
    const token = null
    if(token){
      config.headers["AUTHORIZATION"] = `Bearer ${token}`
    }
    return config;
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return checkStatus(error)
  }
)

function request(options) {
  return new Promise((resolve,reject)=>{
    instance(options)
      .then(response=>{
        resolve(response)
      })
      .catch(error=>{
        console.log(error.message)
      })
  })
}



const login = (data = {username:'byzero',password:'123123123'})=>{
  return request({
    method:'post',
    url:'/user/login',
    data
  })
}

async function index(){
 let data =  await login()
 console.log(data)
}

index()