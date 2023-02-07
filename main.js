/*

ejercisio 1

salario = 800000
aux = 64000
prestamo = 50000

console.log (`teniendo en cuenta que el empleado solicito un prestamo de ${prestamo} y que se le auxilio un total de ${aux} para transportes el salario total de el trabajador seria ${salario-prestamo+aux} `)
*/

/*

ejercisio 2

juan = 50000
pedro = 500000
maria = 430000
total = (juan + pedro + maria)

console.log (`para comprar la lavadora juan aporto el ${juan*100/total}%, pedro aporto el ${pedro*100/total}%, maria aporto el ${maria*100/total}%`)

*/

/*

ejercisio 3

n = -500

console.log(`${n*-1}`)

*/

/*

ejercisio 4


vhl = 3200
vhex = 4300
jl = 20
hex = 20
htt = 40
total = vhl * jl + vhex * hex
rp = 0.05
sc = 0.1
bon = 0.08

console.log(`valor total jornada laboral ${vhl * jl}, valor total horas extra ${vhex * hex},para un total de ${total}, descuento por riesgos profesionales ${rp * total}, descuento por seguridad social ${sc * total}, bonificacion de ${bon * total} para un total a la semana de ${total - rp * total - sc * total + bon * total}`)

*/

//---------------------------------------------------------------------------------------

/*

1.

toyota = 500
ferrari = 800

if (toyota>ferrari) {
  console.log('toyota es mas rapido que ferrari')
}else{
  console.log ('ferrari es mas rapido que toyota')
}

*/

/*

2.

consumoAguaSep = 50
consumoAguaOct = 60

if (consumoAguaSep>consumoAguaOct){
  console.log ('el consumo en septiembre es mayor')
}else{
  console.log ('el consumo en octubre es mayor')
}

*/

/*

3.

cantCamisas = 80
precioCamisas = 15000
desc = 0.1

if (cantCamisas>100){
  console.log(`el total es de ${cantCamisas * precioCamisas},tiene un descuento de ${precioCamisas * cantCamisas * desc}
   entonces el total a pagar es de ${cantCamisas * precioCamisas - precioCamisas * cantCamisas * desc}  `)
}else{
  console.log(`no tiene descuento y tiene que pagar ${precioCamisas * cantCamisas}`)
}

*/

//------------------------------------------------------------------------------------------------

/*TALLER EJERCICIOS IF
1. Un almacén de electrodomésticos ofrece a sus clientes un descuento por compras
superiores a 1 millón indique el total a pagar.


electrVarios = 1200000
desc = 0.1

if( electrVarios> 1000000){
  console.log(`el valor total es ${electrVarios}, y tiene un descuento de ${electrVarios * desc},
   por lo tanto debe pagar ${electrVarios - electrVarios * desc  } `)
}else{
  console.log(`el total a pagar es ${electrVarios}, y no tiene descuento`)
}



2. Una focopiadora cobra según el numero de copias a mayor cantidad mas económico: si
saca mas de 50 copias el valor de cada una será de 30 pesos de lo contrario el valor será
de 50.

cantFotocopias = 48
valorDesct = 30
valorNormal = 50

if(cantFotocopias>=50){
  console.log(`el total de fotocopias son ${cantFotocopias} por lo tanto tiene un menor precio cada
  fotocopia y debe pagar ${cantFotocopias * valorDesct} `)
}else{
  console.log(`la cantidad de fotocopias es ${cantFotocopias} y debe pagar ${cantFotocopias * valorNormal}`)
}



3. Un supermercado vende Piñas y Peras, el precio de cada piña es de 1800 y de cada pera es
de 600, calcule el total a pagar teniendo en cuenta que si compra mas de 10.000 pesos
tendrá un bono del 10 %.

valorPiña = 7200
valorPera = 3600
sumaTotal = valorPera + valorPiña
desc = 0.1

if(sumaTotal >= 10000){
  console.log(`el valor total es de ${sumaTotal}, por lo tanto obtiene un descuento del 10% lo que
  equivale a ${sumaTotal * desc}, el valor total a pagar es ${sumaTotal - sumaTotal * desc }`)
}else{
  console.log(`el total de su compra es ${sumaTotal} `)
}



4. Desarrolle un algoritmo que indique según el año de nacimiento la edad actual, adicional
debe mostrar si es mayor de edad en caso de ser menor de edad deberá mostrar la edad
faltante.


añoNacimiento = 2004

if(añoNacimiento <= 2005){
  console.log(`es mayor de edad`)
}else{
  console.log(`es menor de edad`)
}




5. Juan y Victoria van a una tienda de carnes, el precio por libra de carne de res es de 9000 y
de lomo de cerdo 8000, cada uno de ellos compra x cantidad de carne y cerdo, indique el
total que pago cada uno y cual de los dos pago mas dinero por sus compras.


valorVictoria = 17000
valorJuan = 18000


if(valorJuan>valorVictoria){
  console.log(`juan compro un total de ${valorJuan}  por lo tanto pago mas dinero que victoria ya que ella pago ${valorVictoria} `)
}else{
  console.log(`victoria pago mas dinero que juan porque ella pago ${valorVictoria} y juan ${valorJuan}`)
}


*/


//--------------------------------------------------------------------------------------------


/*
console.log(`pon un mensaje de buenos dias si la hora es menos de las 12 y si no pon buenas tardes`)

hora = 13

if(hora <= 12){
  console.log(`son las ${hora} de la mañana buenos dias `)
}else{
  console.log(`son las ${hora} de la tarde buenas tardes`)
}







console.log(`Si la hora es inferior a las 10:00, cree un saludo de "Buenos días", si no, pero la hora es inferior a las 20:00,
cree un saludo de "Buenos días", de lo contrario, un "Buenas noches`)

time = 5

if(time <= 0 || time >24){
  console.log(`hora no valida`)
}else if(time < 12){
  console.log(`mañana`)
}else if (hora > 18) {
  console.log(`tarde`)
}else{
  console.log(`noche`)
}


hora = 21

if(hora <= 0 || hora >24){
  console.log(`hora no valida`);
}else if (hora <12){
  if (hora <=10){
    console.log(`hora del desayuno`);
  }else{
    console.log(`hora de la media mañana `)
  }
}else if (hora < 18){
  if (hora <= 16){
    console.log(`hora del almuerzo`)
  }else{
    console.log(`hora de las onces`)
  }
}else{
  if (hora <= 20){
    console.log(`hora de la comida`)
  }else{
    console.log(`hora de dormir`)
  }
}




////////////////////////////////////////////////////////////////////


1.


2.Una frutería ofrece las manzanas con descuento según la siguiente tabla:

% DESCUENTO
0 – 2 kilos                    0%
2.01 - 5 kilos                 10%
5.01 - 10 kilos                15%
10.01 kilos en adelante        20%
Mostrar en un h3 cuánto pagara una persona que compre x cantidad de
kilos de manzanas es esa frutería.




valorKiloManzana = 3000

kilosDeManzanas = 6

descuento_5Kilos = 0.1

descuento_10Kilos = 0.15

descuento_20Kilos = 0.2

valorTotalManzanas = valorKiloManzana * kilosDeManzanas

if (kilosDeManzanas <= 2){
  console.log(`la cantidad de kilos que va a llevar es ${kilosDeManzanas} y no tiene un descuento por lo tanto debe pagar ${kilosDeManzanas * valorKiloManzana}`)
}else if (kilosDeManzanas >= 2.01 && kilosDeManzanas <= 5){
  console.log(`la cantidad de kilos que va a llevar es ${kilosDeManzanas}  para un valor total de ${valorTotalManzanas} y tiene un descuento
  del 10% (${ descuento_5Kilos * valorTotalManzanas}) por lo
  tanto debe pagar ${valorTotalManzanas - descuento_5Kilos * valorTotalManzanas}`)
}if(kilosDeManzanas >= 5 && kilosDeManzanas <= 10){
  console.log(`la cantidad de kilos que va a llevar es ${kilosDeManzanas}  para un valor total
  de ${valorTotalManzanas} y tiene un descuento del 15% (${ descuento_10Kilos * valorTotalManzanas}) por lo
  tanto debe pagar ${valorTotalManzanas - descuento_10Kilos * valorTotalManzanas} `)
}else if (kilosDeManzanas > 10){
  console.log(`la cantidad de kilos que va a llevar es ${kilosDeManzanas}  para un valor total
  de ${valorTotalManzanas} y tiene un descuento del 20% (${ descuento_20Kilos * valorTotalManzanas}) por lo
  tanto debe pagar ${valorTotalManzanas - descuento_20Kilos * valorTotalManzanas}`)
}

document.getElementById('kilosDeManzanas').innerHTML = kilosDeManzanas




nota = 72

if (nota <= 0 && nota > 100){
  console.log(`nota no valida`);
}if ( nota >= 100){
  console.log(`su calificacion es ${nota} - Excelente` )
}else if (nota > 91 && nota < 99){
  console.log(`su calificacion es ${nota} - Muy bueno`)
}if (nota > 61 && nota < 90){
  console.log(`su calificacion es ${nota} - Bueno`)
}else if (nota > 40 && nota < 60){
  console.log(`su calificacion es ${nota} - Regular`)
}else{
  console.log(`su calificacion es ${nota} - Malo`)
}
document.getElementById('nota').innerHTML = nota


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Ejercicio 1
AGUASAN desea saber la facturación por cada usuario teniendo como referente q para
realizar la facturación se debe tener en cuenta el estrato de cada cliente (1, 2,3) y la
cantidad de metros consumidos, las tarifas para cada estrato están
asignadas de la siguiente manera:
Estrato 1: cargo fijo $2300 valor metro cubico $250 subsidio 40 %
Estrato 2: cargo fijo $3200 valor metro cubico $350 subsidio 30 %
Estrato 3: cargo fijo $3900 valor metro cubico $460 subsidio 10 %
Nota: El subsidio aplica solo para el cargo fijo.
Se debe imprimir por cada usuario la factura la cual debe especificar claramente todos los
conceptos cobrados, el subsidio aplicado y el total a pagar.

metrosConsumidos = 24

estratoCliente = 3

valorMetroCubico_1 = 250

valorMetroCubico_2 = 350

valorMetroCubico_3 = 460

cargoEstrato_1 =2300

cargoEstrato_2 = 3200

cargoEstrato_3 = 3900

subsidio_1 = 0.4

subsidio_2 = 0.3

subsidio_3 = 0.1



if (estratoCliente > 3){
  console.log("porfavor digite un estrato de 1 a 3")
}
if (estratoCliente == 1){
  console.log(`el estrato del cliente es ${estratoCliente},el total de metros consumidos es ${metrosConsumidos}, para un total
  de ${metrosConsumidos * valorMetroCubico_1}, con un cargo fijo de ${cargoEstrato_1} y se le subsidia el 40% y la suma
  de esto seria ${cargoEstrato_1 * subsidio_1}, para un valor final a pagar de ${metrosConsumidos * valorMetroCubico_1 + cargoEstrato_1 + cargoEstrato_1 * subsidio_1 } `)
}else if (estratoCliente == 2){
  console.log(`el estrato del cliente es ${estratoCliente},el total de metros consumidos es ${metrosConsumidos}, para un total
  de ${metrosConsumidos * valorMetroCubico_2}, con un cargo fijo de ${cargoEstrato_2} y se le subsidia el 30% y la suma
  de esto seria ${cargoEstrato_2 * subsidio_2}, para un valor final a pagar de ${metrosConsumidos * valorMetroCubico_2 + cargoEstrato_2 + cargoEstrato_2 * subsidio_2 } `)
}else if (estratoCliente == 3){
  console.log(`el estrato del cliente es ${estratoCliente},el total de metros consumidos es ${metrosConsumidos}, para un total
  de ${metrosConsumidos * valorMetroCubico_3}, con un cargo fijo de ${cargoEstrato_3} y se le subsidia el 10% y la suma
  de esto seria ${cargoEstrato_3 * subsidio_3}, para un valor final a pagar de ${metrosConsumidos * valorMetroCubico_3 + cargoEstrato_3 + cargoEstrato_3 * subsidio_3 } `)
}




Ejercicio 2
Realizar un aplicativo que dé solución a la siguiente situación. Una empresa distribuidora
de arroz tiene en sus inventarios 100.000 kilos de arroz en la bodega número 1 y 230.000
kilos en la bodega número 2, realizan ventas a sus clientes los cuales pueden comprar por
kilos, libras o gramos, usted como programador debe realizar un sistema que permita
vender y descontar del inventario de la bodega seleccionada mostrando cuanto quedo
disponible en cada bodega


bodega = 2

let kgBodega_1 = 100000

let kgBodega_2 = 230000

//insertar 1 si la unidad es kilogramos
//insertar 2 si la unidad es libras
//insertar 3 si la unidad es gramos

unidadBodega_1 = 3

cantidad_1 = 450

if(bodega == 1 && unidadBodega_1 == 1){
    console.log(`esta en la bodega 1 y comprando un total de ${cantidad_1} kilogramos, en la bodega hay disponibles ${kgBodega_1 - cantidad_1} kilogramos`)
  }else if (bodega == 1 && unidadBodega_1 == 2){
    console.log(`esta en la bodega 1 y comprando un total de ${cantidad_1} libras, en la bodega hay disponibles ${kgBodega_1 - cantidad_1 * 0.454} kilogramos`)
  }else if (bodega == 1 && unidadBodega_1 == 3){
    console.log(`esta en la bodega 1 y comprando un total de ${cantidad_1} gramos, en la bodega hay disponibles ${kgBodega_1 - cantidad_1 * 0.001} kilogramos`)
}

if (bodega == 2 && unidadBodega_1 == 1){
    console.log(`esta en la bodega 2 y comprando un total de ${cantidad_1} kilogramos, en la bodega hay disponibles ${kgBodega_2 - cantidad_1} kilogramos`)
}else if (unidadBodega_1 == 2){
    console.log(`esta en la bodega 2 y comprando un total de ${cantidad_1} libras, en la bodega hay disponibles ${kgBodega_2 - cantidad_1 * 0.454} kilogramos`)
}else if (unidadBodega_1 == 3){
    console.log(`esta en la bodega 2 y comprando un total de ${cantidad_1} gramos, en la bodega hay disponibles ${kgBodega_2 - cantidad_1 * 0.001} kilogramos`)
}










*/
//1 libre inversion
//2 libranza
valorPrestamo = 10000

//valorCuota = valorPrestamo/cantCuotas

cantCuotas = 5

lineaCredito = 1

interes1 = valorPrestamo*0.025

interes2 = valorPrestamo*0.029

if(cantCuotas<6 && lineaCredito == 1){
  console.log(`el valor del prestamo es ${valorPrestamo} en ${cantCuotas} cuotas, usted escogio la linea de credito 1 y tiene un interes de 2.5% lo q es igual a ${interes1} ya que usted escogio menos de 6 cuotas tiene un descuento de 0.2% en el interes y le queda en ${interes1-interes1*0.02} el total de cada cuota es ${(valorPrestamo/cantCuotas)+(interes1-interes1*0.02)}`)
}else if(cantCuotas>12 && cantCuotas<24 && lineaCredito == 1){
  console.log(`el valor del prestamo es ${valorPrestamo} en ${cantCuotas} cuotas, usted escogio la linea de credito 1 y tiene un interes de 2.5% lo q es igual a ${interes1} ya que usted escogio mas de 12 cuotas tiene un descuento de 0.4% en el interes y le queda en ${interes1-interes1*0.04} el total de cada cuota es ${(valorPrestamo/cantCuotas)+(interes1-interes1*0.04)}`)
}else if(cantCuotas>24 && lineaCredito == 1){
  console.log(`el valor del prestamo es ${valorPrestamo} en ${cantCuotas} cuotas, usted escogio la linea de credito 1 y tiene un interes de 2.5% lo q es igual a ${interes1} ya que usted escogio mas de 12 cuotas tiene un descuento de 0.4% en el interes y le queda en ${interes1-interes1*0.07} el total de cada cuota es ${(valorPrestamo/cantCuotas)+(interes1-interes1*0.07)}`)
}

else if(cantCuotas<6 && lineaCredito == 2){
  console.log(`el valor del prestamo es ${valorPrestamo} en ${cantCuotas} cuotas, usted escogio la linea de credito 2 y tiene un interes de 2.9% lo q es igual a ${interes2} ya que usted escogio menos de 6 cuotas tiene un descuento de 0.2% en el interes y le queda en ${interes2-interes2*0.02} el total de cada cuota es ${(valorPrestamo/cantCuotas)+(interes2-interes2*0.02)}`)
}else if(cantCuotas>12 && cantCuotas<24 && lineaCredito == 2){
  console.log(`el valor del prestamo es ${valorPrestamo} en ${cantCuotas} cuotas, usted escogio la linea de credito 2 y tiene un interes de 2.9% lo q es igual a ${interes2} ya que usted escogio mas de 12 cuotas tiene un descuento de 0.4% en el interes y le queda en ${interes2-interes2*0.04} el total de cada cuota es ${(valorPrestamo/cantCuotas)+(interes2-interes2*0.04)}`)
}else if(cantCuotas>24 && lineaCredito == 2){
  console.log(`el valor del prestamo es ${valorPrestamo} en ${cantCuotas} cuotas, usted escogio la linea de credito 2 y tiene un interes de 2.9% lo q es igual a ${interes2} ya que usted escogio mas de 12 cuotas tiene un descuento de 0.4% en el interes y le queda en ${interes2-interes2*0.07} el total de cada cuota es ${(valorPrestamo/cantCuotas)+(interes2-interes2*0.07)}`)
}