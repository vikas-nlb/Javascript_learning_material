function getData() {
    url = 'https://api.github.com/users'
    fetch(url).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
    }).catch((error) => {
        console.log(error);
    })
}

function postData() {
    url = 'http://dummy.restapiexample.com/api/v1/create';
    data = '{"name":"VikasKishenBhragava","salary":"123","age":"23"}';
    params = {
        method: 'post',
        // headers: {
        //     'Content-Type': 'application/json' // not working due to CORS ( cross orgin resorce sharing)
        // },
        body: data
    }
    fetch(url, params).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);
    })

}

postData()
