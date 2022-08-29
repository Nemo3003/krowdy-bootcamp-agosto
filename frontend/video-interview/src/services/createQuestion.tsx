import axios from 'axios';

export const createQuestion = ({id, question}:any) => {
    return axios
    .post('https://jsonplaceholder.typicode.com/posts', {id,question})
    .then(response => {
      const {data} = response
        return data
    })
}