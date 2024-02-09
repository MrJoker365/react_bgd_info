import axios from "axios";

export default class InfoBuildService {

    static async getAll(limit= 10, page = 1) {

        // const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
        //     params: {
        //         _limit: limit,
        //         _page: page
        //     }
        // })

        const response = await axios.get("http://localhost:8081/api/getAll")
        return response;
    }

    static async getById(id) {
        return await axios.get("http://localhost:8081/api/getById/" + id);
    }

    static async add (data){
        return await axios.post("http://localhost:8081/api/add", data)
    }


}