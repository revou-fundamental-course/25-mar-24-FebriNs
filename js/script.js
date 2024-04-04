function calculate() {
    try {
        let weightInput = document.getElementById('weight-input');
        console.log(weightInput.value);
            var heightInput = document.getElementById('height-input');
            console.log(heightInput.value);
                 var resultElement = document.getElementById('result-input');
                 let result = +weightInput.value/(+heightInput.value*+heightInput.value);
                 resultElement.innerHTML = result;
                      if (result <18.5) {
                      console.log('Kekurangan Berat badan');
                      } else if (result)
        if (weightInput.value === ''||heightInput.value === '') {
            console.log('fail');
            alert('weight/height an not be Empty');
        } else {
            console.log('succeed');
        }
    } catch (error) {
        console.log(error);
    }
}