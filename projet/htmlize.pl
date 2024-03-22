#!/usr/bin/perl
# produire des slides à partir de texte

# usage: htmlize.pl plan_presentation_orale.txt > pres.html

use 5.010;
use strict;
use warnings;
use open qw(:std :utf8); # this is required to read utf8 with <>

#my $i = 0;
my %months = qw/oct 10 nov 11 dec 12 jan 01 fev 02/;
print <<END;
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LGC - CDA - Presentation projet</title>
</head>
<body>
    <h1>Presentation projet Jourdebord de Robert Carver</h1>
    <h3>LGC CDA groupe 2</h3>
    <pre>
END
while (<>) {
    print;
    #last if $i++ > 10;
}
print <<END;
    </pre>
</body>
</html>
END
