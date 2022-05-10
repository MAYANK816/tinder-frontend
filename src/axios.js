import axios from 'axios'
const instance=axios.create({
    baseURL:'https://tinder-clone-2022.herokuapp.com'
})
export default instance;
