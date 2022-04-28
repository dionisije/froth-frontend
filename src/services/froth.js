import http from '../http-common';

class FrothDataService {
    getAll() {
        return http.get();
    };
};

export default new FrothDataService();
