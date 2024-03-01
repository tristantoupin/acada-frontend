const API_URL = process.env.REACT_APP_URL;


// Helper function to send requests
async function sendRequest(path: string, config: RequestInit) {
  const response = await fetch(`${API_URL}${path}`, config);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return await response.json();
}

// API endpoints
export const fetchData = (path: string, id: string) => {
  return sendRequest(`/${path}/${id}`, {
    method: 'GET',
  });
};

export const fetchAllData = (path: string) => {
  return sendRequest(`/${path}/`, {
    method: 'GET',
  });
};

export const createData = (path: string, user: object) => {
  return sendRequest(`/${path}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
};

export const updateData = (path: string, id: string, updates: object) => {
  return sendRequest(`/${path}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates),
  });
};

export const deleteData = (path: string, id: string) => {
  return sendRequest(`/${path}/${id}`, {
    method: 'DELETE',
  });
};
