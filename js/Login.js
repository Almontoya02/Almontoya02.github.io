var login = new function () {

    /**
     * arreglo de doctores
     */
    var doctores = [
        {
            user: 1234,
            password: '1234'
        },
        {
            user: 6521,
            password: 'abcd'
        },
        {
            user: 6451,
            password: 'code'
        }

    ];

    /**
     * arreglo de secretarias
     */
    var secretarias = [
        {
            user: 789,
            password: '1234'
        },
        {
            user: 007,
            password: 'abcd'
        },
        {
            user: 1011,
            password: 'code'
        }

    ];

    /**
     * arreglo de admins
     * 
     */
    var admins = [
        {
            user: 0000,
            password: '1234'
        },
        {
            user: 543,
            password: 'abcd'
        },
        {
            user: 210,
            password: 'code'
        }

    ];


    loguear = function () {
        var user = document.getElementById('user').value;
        var password = document.getElementById('password').value;
        var option = document.getElementById('selectUser').value;



        switch (option) {
            case "1":
                var bandera = false;
                for (i = 0; i < doctores.length; i++) {
                    if (doctores[i].user == user && doctores[i].password == password) {
                        bandera = true;
                    }
                }

                if (bandera == true) {
                    
                    console.log(location);
                    location.href = "./HistorialClinico.html";
                    return;
                } else {
                    alert("usuario o contraseña incorrectos");
                }
                break;

            case "2":
                var bandera = false;
                for (i = 0; i < secretarias.length; i++) {
                    if (secretarias[i].user == user && secretarias[i].password == password) {
                        bandera = true;
                    }
                }

                if (bandera == true) {
                    console.log(location);
                    location.href = "./Citas.html";
                    return;
                } else {
                    alert("usuario o contraseña incorrectos");
                }

                break;

            case "3":
                var bandera = false;
                for (i = 0; i < admins.length; i++) {
                    if (admins[i].user == user && admins[i].password == password) {
                        bandera = true;
                    }
                }

                if (bandera == true) {
                    console.log(location);
                    location.href = "./Pacientes.html";
                    return;
                } else {
                    alert("usuario o contraseña incorrectos");
                }

                break;
        }


    }





}