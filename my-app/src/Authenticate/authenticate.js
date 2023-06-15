export let authenticate = {

    loginUser: function (data) {
        const user = {
            email: data.email,
            userType: data.userType,
            lastName: data.lastName,
            firstName: data.firstName,
            avatarSmallLocation: data.avatarSmallLocation
        };
        sessionStorage.setItem("user", JSON.stringify(user))
    },

    logoutUser: function () {
        sessionStorage.clear();
    },

    getAllUser: function () {
        const userJson = sessionStorage.getItem("user");
        return userJson ? JSON.parse(userJson) : null;
    }

}
