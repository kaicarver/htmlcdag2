CREATE TABLE `gestionproduits`.`produits` (`id` INT NOT NULL AUTO_INCREMENT , `designation` VARCHAR(100) NOT NULL , `prix` DECIMAL NOT NULL , `photo` VARCHAR(150) NOT NULL , PRIMARY KEY (`id`)) ENGINE = MyISAM;
INSERT INTO `produits` (`id`, `designation`, `prix`, `photo`) VALUES (NULL, 'Produit 1', '12.50', 'photo.jpg')