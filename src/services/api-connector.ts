const API_URL = process.env.REACT_APP_API_SERVER_URL;

// Helper function to send requests
async function sendRequest(path: string, config: RequestInit) {
    const response = await fetch(`${API_URL}${path}`, config);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }

    return await response.json();
}

// API endpoints
export const fetchData = (accessToken:string, path: string, id: string) => {
    return sendRequest(`/${path}/${id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
};

export const fetchAllData = (accessToken:string, path: string) => {
    return sendRequest(`/${path}/`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
};

export const searchData = (accessToken:string, path: string, query: object) => {
    console.log("searchData", query)
    return sendRequest(`/${path}/search`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(query),
    });
};

export const createData = (accessToken:string, path: string, data: object) => {
    return sendRequest(`/${path}/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
    });
};

export const updateData = (accessToken:string, path: string, id: string, updates: object) => {
    return sendRequest(`/${path}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(updates),
    });
};

export const deleteData = (path: string, id: string, accessToken?:string) => {
    return sendRequest(`/${path}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });
};
