const current_user = "currentUser";
export const user_data_storage = {
  setData(obj) {
    return localStorage.setItem(current_user, JSON.stringify(obj));
  },

  getData() {
    let data = localStorage.getItem(current_user);

    if (data != null) {
      data = JSON.parse(data);
      return data;
    } else {
      return null;
    }
  },
  delete_user_data() {
    localStorage.removeItem(current_user);
  },
};
