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

    <div class="main">
        <div class="main-container">
            <div class="main-content">
                <h1>Galerie</h1>
            </div>
        </div>
    </div>

    <div class="row">
        <?php
        $thumbnail_dir = "thumbnails/";
        $gallery_dir = "gallery/";

        $thumbnails = glob($thumbnail_dir . "*.{jpg,jpeg,png,gif,webp}", GLOB_BRACE);
        $count = 0;
        foreach ($thumbnails as $thumbnail) {
            if ($count % 3 == 0) {
                echo '<div class="column">';
            }
            $filename = basename($thumbnail);
            $image_path = $gallery_dir . $filename;
            if ($filename == "08bubak.webp") {
                echo "<a href=\"freemc.html\" target=\"_blank\"><img src=\"$thumbnail\"></a>";
            }
            else {
                echo "<a href=\"$image_path\" target=\"_blank\"><img src=\"$thumbnail\"></a>"; 
            }
            $count++;
            if ($count % 3 == 0) {
                echo '</div>';
            }
        }
        ?>
    </div>

    <?php require 'php/footer.php';?>
</body>
</html>