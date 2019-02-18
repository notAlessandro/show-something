/*descrizione generale:
sequence ed order vengono usati per "l'ordine" dello switcher, sono fondamentali per il corretto funzionamento.
per inserire più contenuti bisogna aggiungere a images la dir, l'header e il paragrafo.
*/

var sequence = 1,
	order = 0,
	images = 
	[
	//						DIR 						HEADER 					PARAGRAFO
		['../show-something/styles/images/1.jpg', '<h1>HEADER 1</h1>', "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, eros eget mattis lacinia, dui ipsum luctus lacus, vitae sollicitudin quam lorem vitae odio. Praesent lobortis bibendum tellus, eget euismod nibh viverra in.</p>"], 
		['../show-something/styles/images/2.jpg', '<h1>HEADER 2</h1>', "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, eros eget mattis lacinia, dui ipsum luctus lacus, vitae sollicitudin quam lorem vitae odio. Praesent lobortis bibendum tellus, eget euismod nibh viverra in.</p>"], 
		['../show-something/styles/images/3.jpg', '<h1>HEADER 3</h1>', "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, eros eget mattis lacinia, dui ipsum luctus lacus, vitae sollicitudin quam lorem vitae odio. Praesent lobortis bibendum tellus, eget euismod nibh viverra in.</p>"]
	];

$( document ).ready(function() 
{
// AL CARICAMENTO DELLA PAGINA INIZIALIZZA LO SCRIPT.
	createImageHere('template-two');
	createTaglineHere('template-one');

	increaseOrder();
	setInterval(switchTimer, 5000);
});


function switchTimer() 
{
// SWITCHTIMER VIENE ESEGUITO OGNI 5 SECONDI E SERVE AD ESEGUIRE GLI EFFETTI SUI DUE CONTENITORI.
	console.log("Timer: switchTimer");  

   $("#imagetemplate").fadeOut(function()
   	{
   		$("#imagetemplate").remove();
   	});

   $("#tagline").fadeOut(function()
   	{
   		$("#tagline").remove();
   		switcher();
   	});

}

function switcher()
{
// SWITCHER SI SERVE DI SEQUENCE PER DECIDERE DOVE INSERIRE L'IMMAGINE O LA TAGLINE
	switch(sequence)
	{
		case 1:
			// descrizione a sinistra, immagine a destra
			createImageHere('template-two');
			createTaglineHere('template-one');

			sequence = 2;
			increaseOrder();
		break;

		case 2:
			createImageHere('template-one');
			createTaglineHere('template-two');

			sequence = 1;
			increaseOrder();
		break;
	}
}

function increaseOrder()
{
// INCREASEORDER AUMENTA ORDER E SI RESETTA QUANDO RAGGIUNGE IL MASSIMO DI IMAGES.
	order ++;
	if(order >= images.length) order = 0;
}

function returnOrder() { return order; }

function createImageHere(templateid)
{
// CREA L'IMMAGINE
	var image = document.createElement("img");
	image.src = images[returnOrder()][0];
	image.id = 'imagetemplate';
	document.getElementById(templateid).appendChild(image);

	$('#imagetemplate').fadeIn();
}

function createTaglineHere(templateid)
{
// CREA LA TAGLINE
	var div = document.createElement("div");
	div.id = 'tagline';
	div.innerHTML = images[returnOrder()][1] + '' + images[returnOrder()][2];
	document.getElementById(templateid).appendChild(div);

	$('#tagline').fadeIn();
}