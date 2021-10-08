import axios from 'axios'
const instance=axios.create({
    baseURL:'https://tinder-backend-blond.vercel.app/'
})
export default instance;