'use scrict'

fetch('https://reqres.in/api/users/?per_page=12')
    .then((response) => {
        return response.json();
    }).then((result) => {
        console.log('-----------');
        console.log('Пункт №1:', result);
        console.log('-----------');
        // код для выполнения пункта 1
        console.log('Пункт №2:');
        console.log('-----------');
        result.data.forEach(element => {
            console.log(element.last_name)
        });
        // код для выполнения пункта 2
        console.log('-----------');
        console.log('Пункт №3:');
        // код для выполнения пункта 3
        console.log('-----------');
        result.data.forEach((element) => {
            if (element.last_name[0] === 'F') {
                console.log('' + element.last_name + ':');
                for (item in element) {
                    console.log(' ' + item + ':' + element[item] + ',');
                }
            }
        });
        console.log('-----------');
        console.log('Пункт №4:');
        console.log('-----------');
        // код для выполнения пункта 4
        console.log(result.data.reduce((acc, item) => acc + item.first_name + " " + item.last_name + ', ', "Наша база содержит данные следующих пользователей: "));
        console.log('-----------');
        console.log('Пункт №5:');
        // код для выполнения пункта 5
        console.log('-----------');
        for (item in result.data[0]) {
            console.log('' + item);
        }
        console.log('-----------');
    });