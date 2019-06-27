		var valor_opcion;
		var num1;
		var num2;
		var resultado;
		valor_opcion = prompt("Cuál número de operación desea realizar? \n 1. Suma, 2. Resta, 3. Multiplicación y 4. División");
		num1 = prompt("Ingrese el primer valor");
		num1 = parseInt(num1);
		num2 = prompt("Ingrese el segundo valor");
		num2 = parseInt(num2);		
		if (valor_opcion > 0 && valor_opcion < 5) {
			document.write("<br>El primer valor es: " + num1);
			document.write("<br>El segundo valor es: " + num2);
			if (valor_opcion == 1) {
				suma = num1 + num2;
				document.write("<br> El valor de la suma es: " + suma);
			}
			if (valor_opcion == 2) {
				resta = num1 - num2;
				document.write("<br> El valor de la resta es: " + resta);
			}
			if (valor_opcion == 3) {
				multiplicacion = num1 * num2;
				document.write("<br> El valor de la multiplicación es: " + multiplicacion);
			}
			if (valor_opcion == 4) {
				division = num1 / num2;
				document.write("<br> El valor de la division es: " + division);
			}
		}
		else{
			document.write("<br> Valor incorrecto de las opciones <br>");
		}