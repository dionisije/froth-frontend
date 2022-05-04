import http from '../http-common';

class FrothDataService {
    getAll() {
        return http.get();
    };

    getAlbum(id) {
        return http.get(`/tracks/${id}`);
    }
};

export default new FrothDataService();
