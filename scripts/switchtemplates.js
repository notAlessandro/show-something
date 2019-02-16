var sequence = 1;
$( document ).ready(function() 
{
	$('#btn1, #btn2, #btn3').click(function()
	{
		console.log("switch");
		switch(sequence)
		{
			case 1:
				// descrizione a sinistra, immagine a destra
				console.log("descrizione a sinistra, immagine a destra");
				sequence = 2;
			break;

			case 2:
				// descrizione a destra, immagine a sinistra
				console.log("descrizione a destra, immagine a sinistra");
				sequence = 1;
			break;
		}

	});
});