import defaultAxios from 'axios'

const axios = defaultAxios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {'Content-Type': 'application/json'}
});

export const getUsers = async () => {    
    try{        
        const results = await axios.get('users?_limit=5');        
        return results.data;
    } catch(error) {
        return console.error();
    }
}

export const addUser = async ({playload}) => {    
    try{        
        const results = await axios.post('users', playload);        
        return results.data;
    } catch(error) {
        return console.error();
    }
}