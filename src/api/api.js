import axios from "axios";
import responseExample from "./responseExample"


// Timestamp 2023-05-04T01:00:00.000Z
export const healthcheck = async () => {
    const response = await axios.get(`http://flyhurbapi.kube.stg.gce.hucloud.com.br/v1/healthcheck`)
    console.log(response.data)
    return response.data
}
export const readiness = async () => {
    const response = await axios.get(`http://flyhurbapi.kube.stg.gce.hucloud.com.br/v1/readiness`)
    console.log(response.data)
    return response.data
}
export const flightOffers = async (originIdFrom, destinationIdFrom, departureDateFrom, originIdBack, destinationIdBack, departureDateBack, adults, children, infants) => {
    const body = {
         "itinerary": [
            {
                "originId": originIdFrom,
                "destinationId": destinationIdFrom,
                "departureDate": departureDateFrom
            },
            {
                "originId": originIdBack,
                "destinationId": destinationIdBack,
                "departureDate": departureDateBack
            }
        ],
        "travellers": {
            "adults": adults,
            "children": children,
            "infants": infants
        }
    }
    const response = await axios.post(`http://flyhurbapi.kube.stg.gce.hucloud.com.br/v1/flight-offers`, body)
    console.log(response.data)
    return response.data
}
export const flightOffersExample = async (originIdFrom, destinationIdFrom, departureDateFrom, originIdBack, destinationIdBack, departureDateBack) => {
    const body = {
         "itinerary": [
            {
                "originId": originIdFrom,
                "destinationId": destinationIdFrom,
                "departureDate": departureDateFrom
            },
            {
                "originId": originIdBack,
                "destinationId": destinationIdBack,
                "departureDate": departureDateBack
            }
        ],
        "travellers": {
            "adults": 1,
            "children": 0,
            "infants": 0
        }
    }
    // const response = await axios.post(`http://flyhurbapi.kube.stg.gce.hucloud.com.br/v1/flight-offers`, body)
    console.log(body)


    // BRUTE FORCE
    // Ainda não estudei diferentes respostas, então não posso tirar conclusões, e é possível melhorar muito o algoritmo
    // por exemplo, aparentemente o terceiro loop é desnecessário, pois todos os priceGroup parecem ter os mesmos preços, mas não posso ter certeza ainda, então vou deixar o de força bruta
    // também verificar se sempre o mais barato é o primeiro grupo, pois é o caso nesse exemplo 
    var cheapest = 99999999999 
    var full_obj = {}
    for (let index = 0; index < responseExample.length; index++) {

        // loop 1 

        for (let j = 0; j < responseExample[index].length; j++) {
            const elementInside = responseExample[index][j]

            //loop 2 
            
            for (let k = 0; k < elementInside.length; k++) {

                //loop 3 
                const elementInsideInside = elementInside[k].priceGroup;
                if(cheapest > elementInsideInside.total){
                    cheapest= elementInsideInside.total
                    full_obj = responseExample[index]
                }

            }
        }
        
    }
    // retorna o mais barato no momento do POST do client
    console.log("cheapest ATM : ", cheapest,full_obj)
    return (cheapest)
}


export function SaveUserPreferences(email,originIdFrom, destinationIdFrom, departureDateFrom, originIdBack, destinationIdBack, departureDateBack){

    // será necessário um banco de dados 

    

}