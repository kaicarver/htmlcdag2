#!/usr/bin/perl
# split exported month files from 750words.com into days

# usage: split.pl '750 Words-export-2020-05-01.txt'
#
#   produit des fichiers de la forme 2020-05-01.txt ... 2020-05-31.txt
#   correspondant aux jours contenus dans le fichier exporté de 750words.com

use 5.010;
use strict;
use warnings;
use open qw(:std :utf8); # this is required to read utf8 with <>

while (<>) {
    if (/^.... /) {
        print;
    }
}
