const token_keyword = "auth";
export const token_storage = {
    get_access_token() {
        const token = JSON.parse(localStorage?.getItem(token_keyword));
        if (token !== null) {
            return token;
        }
        return null;
    },

    set_access_token(auth) {
        return localStorage?.setItem(token_keyword, JSON.stringify(auth));
    },

    get_refresh_token() {
        const token = JSON.parse(localStorage?.getItem(token_keyword));
        if (token !== null) {
            return token.refresh_token;
        }
        return null;
    },

    delete_token_data() {
        localStorage?.removeItem(token_keyword);
    },

};