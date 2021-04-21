import React from 'react'
import axios from 'axios'

const ConsumeAPI = async (method, path, token, data) => {
    // var self = this // self will now be referred to your component
    // var data = JSON.stringify({
    // })
    var config = {
        method: method,
        url: 'http://localhost:4000/api/' + path,
        headers: { 
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json'
          },
        data: data
    }

    return await axios(config)
        .then(function (response) {
            // self.setState({ user: response.data })
            return JSON.parse(JSON.stringify(response.data))
            // console.log(JSON.stringify(response.data))

        })
        .catch(function (error) {
            console.log(error)
        })
}
export default ConsumeAPI