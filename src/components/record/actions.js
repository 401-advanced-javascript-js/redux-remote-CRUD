export const get = (payload) => {
  return {
    type: 'GET',
    payload,
  };
};

export const post = (payload) => {
  return {
    type: 'POST',
    payload,
  };
};

export const destroy = (payload) => {
  return {
    type: 'DELETE',
    payload,
  };
};

export const patch = (payload) => {
  return {
    type: 'PATCH',
    payload,
  };
};

export const put = (payload) => {
  return {
    type: 'PUT',
    payload,
  };
};
