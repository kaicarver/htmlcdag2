grep FlateDecode countpages.`date +"%Y-%m-%d-%I-%p"`.out | perl -ane 'print "\n ---> Longueur estimée du mémoire : ", $F[0] - 28, " pages <---\n\n"'
