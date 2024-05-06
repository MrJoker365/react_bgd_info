import axios from "axios";

axios.defaults.baseURL = "http://localhost:8081/api/"
axios.defaults.headers.post["Content-Type"] = 'application/json'

export const getAuthToken = () => {
    return window.localStorage.getItem("auth_token")
}
export const setAuthToken = (token =
                                 'eyJhbGciOiJIUzI1NiJ9.' +
                                 'eyJzdWIiOiJ0c3RzcjEyMzQ1QGdtYWlsLmNvbSIsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiZXhwIjoxNzE1MTcxNDY2LCJpYXQiOjE3MTQ5OTE0NjZ9.' +
                                 'SvyBrk6JwuaYKhtH5kEvUwS_mnepMME29IkL7ke9gek') => {
    window.localStorage.setItem("auth_token", token)
}

export default class InfoBuildService {

    // static URL = "http://localhost:8081/api/"
    static URL = ""

    static my_header = {Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0c3RzcjEyMzQ1QGdtYWlsLmNvbSIsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiZXhwIjoxNzE1MTcxNDY2LCJpYXQiOjE3MTQ5OTE0NjZ9.SvyBrk6JwuaYKhtH5kEvUwS_mnepMME29IkL7ke9gek',
                    'Content-Type': 'application/json'}



    static async getAll(limit= 10, page = 1) {

        // const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
        //     params: {
        //         _limit: limit,
        //         _page: page
        //     }
        // })

        const response = await axios.get("http://localhost:8082/api/getAll") /*TODO Всюди тимчасос порт 8082 як заглушка*/
        return response;
    }

    static async getAllTableColumns(tableName) {
        return await axios.get(this.URL + "getTableColumns" , {
            params: {
                tableName: tableName
            },
            // headers: this.my_header
            headers: {
                Authorization: 'Bearer ' + getAuthToken()
            }
        })

    }

    // static async getTableColumn(tableName, id) {
    //     return await axios.get("http://localhost:8081/api/getTableColumn" , {
    //         params: {
    //             tableName: tableName,
    //             id: id
    //         }
    //     })
    //
    // }

    static async getTableColumn(id) {

        return await axios.get(this.URL + "getTableColumn" , {
            params: {
                id: id
            },
            headers: this.my_header
        })

    }

    static async createTableColumn (tableName, data){
        return await axios.post(this.URL + "createTableColumn", data, {
            params: {
                tableName: tableName
            },
            headers: this.my_header
        })
    }

    static async updateTableColumn (id, data){
        return await axios.put(this.URL + "updateTableColumn", data, {
            params: {
                id: id
            },
            headers: this.my_header
        })
    }

    // static async getById(id) {
    //     return await axios.get(this.URL + "getById/" + id);  /*TODO Всюди тимчасос порт 8082 як заглушка*/
    // }
    //
    // static async add (data){
    //     return await axios.post(this.URL + "add", data) /*TODO Всюди тимчасос порт 8082 як заглушка*/
    // }

    static async createTable (data){
        return await axios.post(this.URL + "createTable", data, {
            headers: this.my_header
        })
    }



    static async getAllTableName(id) {
        setAuthToken();
        return await axios.get("getTableNameBySys_manager_id" , {
            params: {
                id: id
            },
            // headers: this.my_header

            headers: {
                Authorization: 'Bearer ' + getAuthToken()
            }

            // headers: {
            //     Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0c3RzcjEyMzQ1QGdtYWlsLmNvbSIsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiZXhwIjoxNzE1MDMzNDY4LCJpYXQiOjE3MTQ4NTM0Njh9.QdJoAt_EQ3v93ltAl7pqyXztbTr3uoUEqR45_8K4dto',
            //     'Content-Type': 'application/json'
            // }
        })

        // return await axios.get("http://localhost:8081/api/getTableNameBySys_manager_id?id=1")
    }


    static async getAllTableParam(tableName) {
        return await axios.get(this.URL + "getTableParam" , {
            params: {
                tableName: tableName
            },
            headers: this.my_header
        })

        // return await axios.get("http://localhost:8081/api/getTableNameBySys_manager_id?id=1")
    }






    /*FOR SYSTEM_USERS...*/



    static async getAllUsers(id) {
        return await axios.get(this.URL + "getAllUsers" , {
            params: {
                id: id
            },
            headers: this.my_header
        })

    }

    static async getUser(u_id) {
        return await axios.get(this.URL + "getUser" , {
            params: {
                u_id: u_id
            },
            headers: this.my_header
        })

    }



    static async login(){
        const data = {
            "email": "tstsr12345@gmail.com",
            "password": "password"
        }
        return await axios.post(this.URL + "auth/login", data)
    }




}