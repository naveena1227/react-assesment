import axios from 'axios';

const GetParticularDataForButton = async ( name, page,type) => {

    var responseValues = [];
    var responseLength = 0;
     const response = await axios.get( `https://www.omdbapi.com/?s=${name}&type=${type}&page=${page}&apikey=e7f911d2` );
     if(response["data"].hasOwnProperty("Search")){
         responseValues = (response["data"]["Search"])
         responseLength = (Math.ceil(response["data"]["totalResults"]/10))
     }else{
         responseValues = []
         responseLength = 0
     }
     return [responseValues,responseLength];

};

export {
    GetParticularDataForButton
};