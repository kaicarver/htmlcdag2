# tous les documents pour l'examen final
all: dossier-projet.pdf s5-pres.html

# dossier projet
dossier-projet.pdf: dossier-projet.md
	echo pandoc --toc $? -o $@

# slides présentation projet
s5-pres.html: s5-skel.html plan-pres.txt
	echo ./foo.pl $^ \> $@
