const user_keyword = "user";
export const user_storage = {
    get_user_data() {
        const user = JSON.parse(localStorage?.getItem(user_keyword));
        if (user !== null) {
            return user;
        }
        return null;
    },

    set_user_tokens(auth) {
        return localStorage?.setItem(user_keyword, JSON.stringify(auth));
    },

    delete_user_data() {
        localStorage?.removeItem(user_keyword);
    },
};