class Jugador
{
	constructor(nombre)
	{
		this.nombre = nombre; 
		this.posicion = 0;
		this.id = "";
	}

	//Método avanzar
	recibirResultado(resultado,id,id2)
	{
		this.posicion = this.posicion + resultado;
		document.getElementById(id2). innerHTML = `Dado--> ${resultado} ¡Posición: ${this.posicion}`;
		this.id = id;
		this.revisarPosicion(this.posicion,id2);
	}

	revisarPosicion(posicion,id2)
	{
		var top = 0;
		var left = 0;

		if(posicion>0 && posicion <=5)
		{
			top = 600;
			left = 450;
			switch(posicion)
			{
				case 1: this.moverFicha(top,left);
				break;

				case 2: top = 500; left = 650; this.moverFicha(top,left);
				document.getElementById(id2).innerHTML = `¡Escalera, subes a casilla 8!`;
				break;

				case 3: left += 200; this.moverFicha(top,left);
				break;

				case 4: left += 300; this.moverFicha(top,left);
				break;

				case 5: left += 400;this.moverFicha(top,left);
			}
		}

		else if(posicion>=6 && posicion <=10)
		{
			top = 500;
			left = 750;
			switch(posicion)
			{
				case 6: top = 600; left = 750;  this.moverFicha(top,left);
				document.getElementById(id2).innerHTML = `¡Serpiente, bajas a casilla 4!`;
				break;

				case 7:this.moverFicha(top,left);
				break;

				case 8: left -= 100; this.moverFicha(top,left);
				break;

				case 9: left -= 200; this.moverFicha(top,left);
				break;

				case 10: top = 300; left = 650; this.moverFicha(top,left);
				document.getElementById(id2).innerHTML = `¡Escalera, subes a casilla 18!`;
				break;
			}
		}

		else if(posicion >=11 && posicion <= 15)
		{
			top = 400;
			left = 450;
			switch(posicion)
			{
				case 11: this.moverFicha(top,left);
				break;

				case 12: left += 100; this.moverFicha(top,left);
				break;

				case 13:left += 200; this.moverFicha(top,left);
				break;

				case 14: left += 300; this.moverFicha(top,left);
				break;

				case 15: top = 300; left = 750; this.moverFicha(top,left);
				document.getElementById(id2).innerHTML = `¡Escalera, subes a casilla 17!`;
				break;
			}
		}

		else if(posicion >= 16 && posicion <= 20)
		{
			top = 300;
			left = 850;
			switch(posicion)
			{
				case 16: this.moverFicha(top,left);
				break;

				case 17: left -= 100;this.moverFicha(top,left);
				break;

				case 18: left -= 200; this.moverFicha(top,left);
				break;

				case 19:left -= 300;this.moverFicha(top,left);
				break;

				case 20: top = 500; left = 550; this.moverFicha(top,left);
				document.getElementById(id2).innerHTML = `¡Serpiente, bajas a casilla 9!`;
				break;
			}
		}

		else if(posicion >= 21 && posicion <= 24)
		{
			top = 180;
			left = 450;
			switch(posicion)
			{
				case 21: this.moverFicha(top,left);
				break;

				case 22:top = 300;left = 750; this.moverFicha(top,left);
				document.getElementById(id2).innerHTML = `¡Serpiente, bajas a casilla 17!`;
				break;

				case 23:left += 200; this.moverFicha(top,left);
				break; 

				case 24: left += 300; this.moverFicha(top,left);
				break;
			}
		}
		else
		{
			top = 180; left = 850; this.moverFicha(top,left);
			document.getElementById('ganador').innerHTML = `¡Ganador ${this.nombre}!`;
			document.getElementById('btn1').disabled = true;
			document.getElementById('btn2').disabled = true;
		}
	}

	moverFicha(top,left)
	{
		document.getElementById(this.id).style.display = "inline";
		document.getElementById(this.id).style.top = top + "px";
		document.getElementById(this.id).style.left = left + "px";
	}
}

