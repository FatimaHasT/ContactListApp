class ApiClient {
    async postRequest(request, endpoint, body, headers) {
        return await request.post(`${endpoint}`, {
            headers: headers,
            data: body
        })
    };

    async patchRequest(request, endpoint, body, headers) {
        return await request.patch(`${endpoint}`, {
            headers: headers,
            data: body
        })
    };

    async deleteRequest(request, endpoint, headers) {
        return await request.delete(`${endpoint}`, {
            headers: headers
        })
    };

    async fetchRequest(request, endpoint, headers) {
        return await request.get(`${endpoint}`, {
            headers: headers
        })
    };
}

module.exports = ApiClient;