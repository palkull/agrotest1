const promedios = (a, datos) => {
    let sum = 0;
    for (let i = a; i < a + 24; i++) {
      sum += datos[i];
    }
    const promedio = sum / 24;
    if (promedio == NaN){promedio = 0}
    return promedio;
  };

  const promediosN = (a, datos) => {
    let sum = 0;
    for (let i = a; i < a + 24; i++) {
        switch (datos[i]) {
            case 'Lleno':
                datos[i] = 2;
                break;
            case 'Medio':
                datos[i] = 1;
                break;
            case 'Bajo':
                datos[i] = 0;
                break;
            default:
                break;
        }
        sum += parseInt(datos[i]); // Convertir el valor a número antes de sumarlo
    }
    let promedio = sum / 24;
    promedio = parseInt(promedio);
    switch (promedio) {
        case 0:
            promedio = 'Bajo';
            break;
        case 1:
            promedio = 'Medio';
            break;
        case 2:
            promedio = 'Lleno';
            break;
        default:
            break;
    }
    return promedio;
};









export {promedios, promediosN}  