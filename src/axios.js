import axios from 'axios'
const instance=axios.create({
    baseURL:'https://tinderclone-project-backend.herokuapp.com/'
})
export default instance;