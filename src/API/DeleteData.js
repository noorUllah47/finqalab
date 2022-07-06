import axios from "axios";

class DeleteData {
    constructor() {
        this.result = [];
    }



    RemoveFile = (fileName) => {
        let data = {
            uid: localStorage.getItem('uid'),
            filename: fileName
        }

        console.log(data)
        const res = async () => {
            const resp = await axios.delete("https://ips-multinet-staging.finqalab.com/v1/doc/delete", { data: data })
                .catch(function (error) {
                    console.log(error);
                });
            this.result = resp;
            // console.log(resp);
            return resp;
        };
        return res();
    };







    Return() {
        return this.result;
    }
}
export default new DeleteData();
