import axios from "axios";

export default class InfoBuildService {

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

    static async getById(id) {
        return await axios.get("http://localhost:8082/api/getById/" + id);  /*TODO Всюди тимчасос порт 8082 як заглушка*/
    }

    static async add (data){
        return await axios.post("http://localhost:8082/api/add", data) /*TODO Всюди тимчасос порт 8082 як заглушка*/
    }

    static async createTable (data){
        return await axios.post("http://localhost:8081/api/createTable", data)
    }



    static async getAllTableName(id) {
        return await axios.get("http://localhost:8081/api/getTableNameBySys_manager_id" , {
            params: {
                id: id
            }
        })

        // return await axios.get("http://localhost:8081/api/getTableNameBySys_manager_id?id=1")
    }


}