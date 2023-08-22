import axios from "axios";

export default axios.create({
   baseURL: 'https://api.rawg.io/api',
   params: {
      key: '9caf3d452ec6401fb2b101034729a7ee'
   }
})