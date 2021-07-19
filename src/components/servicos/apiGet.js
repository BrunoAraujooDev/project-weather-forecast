import axios from "./api";

const apiGet = async (city) => {

    try {

        const resposta = await axios.get(`/${city}`);

        return resposta.data;

    } catch(error){
        console.log(`O erro foi: ${error}`)
    }
};

export default apiGet;