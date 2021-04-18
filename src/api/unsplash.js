import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID t2qp4gxutpSOBjfOF3biEQGH-xib8YiLtJAzIHa4dlw'
    }
});