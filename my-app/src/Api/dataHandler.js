import api from './apis.json'
import axios from "axios";

export let dataHandler = {
    // get all data from DB tables
    getAppUsers: async function () {
        return await apiGet(api.getAllAppUsers);
    },

    getAnimals: async function () {
        return await apiGet(api.getAllAnimals);
    },
    getAnimalTypes: async function () {
        return await apiGet(api.getAllAnimalTypes);
    },
    getBreeds: async function () {
        return await apiGet(api.getAllBreeds);
    },
    addNewUser: async function (data) {
        return await apiPost(api.newAppUsers, data);
    },

    logInAppUser: async function (data) {
        return await apiPost(api.loginAppUsers, data);
    },

    logout: async function () {
        return await apiPost(api.logout);
    },

    register: async function (firstName, lastName, email, password) {
        return apiPost(api.register,
          {
              firstName,
              lastName,
              email,
              password
          }
        );
    }
}

async function apiGet(url) {
    let response = await fetch(api.hostCredential + url, {
        method: "GET",
        mode: 'no-cors',
    });
    if (response.ok) {
        return await response.json();
    }
}

async function apiPost(url, payload) {
    console.log(payload)
    return axios.post(api.hostCredential + url,
        payload,
        {withCredentials: true});
}
