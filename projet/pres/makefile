# tous les documents pour l'examen final
all: dossier-projet.pdf s5-pres.html

# dossier projet
dossier-projet.pdf: dossier-projet.md
	pandoc --toc $? -o $@

# slides présentation projet
s5-pres.html: s5-skel.html plan-pres.txt
	echo ./foo.pl $^ \> $@

# for doc on make, see:
#   https://www.gnu.org/software/make/manual/make.html#Automatic-Variables
