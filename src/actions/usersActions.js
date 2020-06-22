export const login = (email, password) => {

    return async (dispatch) => {
        const body = {
            email, 
            password
        }

        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })
            .then(response => response.json())
            .then(function (data) {
                const isLogged = (typeof data.token !== "undefined" && data.token !== "");
                console.log(data)

                return dispatch({
                    type: "LOGIN",
                    payload: isLogged
                })
            });

    }

}
export const logoutAction = () => {
    return {
        type: "LOGIN",
        payload: false
    }
}



export const getUsersAction = (pageNumber) => {

    return async (dispatch) => {
        fetch(`https://reqres.in/api/users?page=${pageNumber}`).then(response =>
            response.json())
            .then(function (data) {
                console.log(data)
                return dispatch({
                    type: "SET_USERS",
                    payload: data
                })
            });
    }
}


export const getUserAction = (userId) => {
console.log(userId)
    return async (dispatch) => {
        fetch(`https://reqres.in/api/users/${userId}`).then(response =>
            response.json())
            .then(function (data) {
                console.log(data)
                return dispatch({
                    type: "SET_USER_ACTIVE",
                    payload: data.data
                })
            });
    }


}



