import Http from '../../Services/Http';

const getTodos = () => {
  return Http().get('/todos');
}

export {
  getTodos
}