import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8079";

class LoginValidate {


    async VerifyEmployee(employee) {
        try {
            const res = await axios.post(EMPLOYEE_API_BASE_URL + '/api/v1/login', employee);
            console.log("api response");
            console.log(res);

            if (res.status === 200) {
                if (res.data === "recep") {
                    window.location.replace(`${EMPLOYEE_API_BASE_URL}/${res.data}`)
                }
                else if (res.data === "waiter1") {
                    window.location.replace(`${EMPLOYEE_API_BASE_URL}/${res.data}`)
                }
                else if (res.data === "waiter2") {
                    window.location.replace(`${EMPLOYEE_API_BASE_URL}/${res.data}`)
                }
                else if (res.data === "chefdisplay") {
                    window.location.replace(`${EMPLOYEE_API_BASE_URL}/${res.data}`)
                }
                else if (res.data === "chefdisplay1") {
                    window.location.replace(`${EMPLOYEE_API_BASE_URL}/${res.data}`)
                }
                else {
                    return res.data;
                }

            }
        }
        catch (e) {
            return 'Some Error in Api !!'
        }
    }

}

export default new LoginValidate()