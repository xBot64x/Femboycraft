<!DOCTYPE html>
<html>
<head>
	<title>Femboy-Craft CZ</title>
	<link rel="icon" type="image/x-icon" href="images/favicon.ico">
	<link rel="stylesheet" href="styles.css">
	<meta charset="UTF-8">
	<meta name="description" content="Minecraft server">
	<meta name="keywords" content="Minecraft, server, femboy, free">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
	<?php require 'php/header.php';?> <!-- header a footer se upravuje pro všechny stránky ve složce php -->

	<div style="text-align: center; padding-bottom: 30px;">
		<img class="logo" src="images/logo.png" alt="logo">
	</div>
	<div class="main">
		<div class="main-container">
			<div class="main-content">
				<h1>femboycraft.cz</h1>
				<p>Oficiální web serveru femboycraft.cz</p>
				<p>Užijte si vanilla zážitek s vašimi kamarády.</p>
				<p>Přidejte se ke stovkám dalších hráčů na nejlepší vždy aktuální minecraft server!</p>
				<div style="display: flex;">
					<span class="circle" id="circle"></span>
					&nbsp;&nbsp;
					<p id="playerCount">Hledání počtu hráčů...</p>
				</div>
				<p>95.82.185.15:25565</p>
				<p id="version">minecraft 1.20.4</p>
				<h1>Mapa Serveru</h1>
                <p>Je možné si prohlédnou mapu serveru z prohlížeče pomocí bluemap.</p>
                <p><a href="http://95.82.185.15:8100" target="_blank">prohlédněte si mapu</a></p>
			</div>
		</div>	
	</div>
	<br>
	<div class="container" >
		<a href="pripojit_se.php" class="image-btn"><img class="scaling-button" style="max-width: 95vw;" src="images/pridejtese.webp"></a>
	</div>
	<br>
	
	<?php require 'php/footer.php';?>
</body>
</html>