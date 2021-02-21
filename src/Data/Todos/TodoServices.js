import Http from '../../Services/Http';

const getTodos = (responseHandler) => {
  Http()
    .get('/todos')
    .then(r => responseHandler(r.data))
    .catch(err => console.error(err))
  ;
}

export {
  getTodos
}