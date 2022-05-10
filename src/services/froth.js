import http from '../http-common';

class FrothDataService {
    getAll() {
        return http.get();
    };

    getAlbum(id) {
        return http.get(`/tracks/${id}`);
    }

    search(term){
        return http.get(`/search/${term}`);
    }
};

export default new FrothDataService();
