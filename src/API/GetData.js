import axios from "axios";
const config = {
    headers: {
      'X-CSCAPI-KEY': 'dzlIUEdwdXBJNWYzNmpUSE13ZDR1ZFk5bjdyU1Jzb2xRYTFsNHlKbg=='
  
      
    },
  }
class GetData {
    constructor() {
        this.result = [];
    }



    getEditCorrectionData = () => {
        let uid = localStorage.getItem('uid')

        const res = async () => {
            const resp = await axios
                .get(`https://ips-backend-staging.finqalab.com/v1/form/get?uid=${uid}`)
                .catch(function (error) {
                    console.log(error);
                });
            this.result = resp;
            // console.log(resp);
            return resp;
        };
        return res();
    };


    cityByCountries = (value) => {

        const res = async () => {
            const resp = await axios
                .get(`https://api.countrystatecity.in/v1/countries/${value}/cities`,config)
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
export default new GetData();
