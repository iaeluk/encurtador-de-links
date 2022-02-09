import axios from 'axios'

export const key = '5026cc70a54b17bb732fdcea4b6276da04d66086'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api