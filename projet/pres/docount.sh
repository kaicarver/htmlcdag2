grep FlateDecode cnt/countpages.latest.*.out | perl -ane 'print "\n ---> Longueur estimée du mémoire : ", $F[0] - 33, " pages <---\n\n"'
