import http from 'axios';
import { API_URL } from './Constants';


const getConfig = () => {
    let config = {};
    let token = "";

    if ('localStorage' in window) {
        token = localStorage.getItem('token')
    }

    if (token) {
        config = {
            ...config,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    }

    return config
}

const parseRes = res => res.data

const request = {
    get: url => http.get(`${API_URL}${url}`, getConfig()).then(parseRes),
    post: (url, data) => http.post(`${API_URL}${url}`, data, getConfig()).then(parseRes),
    put: (url, data) => http.put(`${API_URL}${url}`, data, getConfig()).then(parseRes),
    delete: (url) => http.delete(`${API_URL}${url}`, getConfig()).then(parseRes),
}

const AuthServie = {
    login: (identifier, password) => request.post('/auth/local', { identifier, password })
}

const VirtualCardsService = {
    list: () => request.get('/virtual-cards'),
    get: slug => request.get(`/virtual-cards?slug=${slug}`)
}

const ThemesServices = {
    list: () => request.get('/themes')
}

const PlanService = {
    planDetails: (id) => request.get(`/plans/${id}`)
}

export {
    request,
    AuthServie,
    VirtualCardsService,
    ThemesServices,
    PlanService
}