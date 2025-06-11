# tous les documents pour l'examen final
all: dossier-projet.pdf dossier-projet.html s5-pres.html
	@echo Le dossier projet et les slides sont à jour ":\n " $^ "\n"et consultables ici : "\n " \
	   file://wsl.localhost/Ubuntu/home/kai/htmlcdag2/projet/pres/dossier-projet.pdf "\n " \
	   file://wsl.localhost/Ubuntu/home/kai/htmlcdag2/projet/pres/s5-pres.html
	./docount.sh

# dossier projet
dossier-projet.pdf: dossier-projet.md
	pandoc $? -o $@
	./countpages.sh > cnt/countpages.`date +"%Y-%m-%d-%I-%p"`.out
	rm -f cnt/countpages.latest.*.out
	cp cnt/countpages.`date +"%Y-%m-%d-%I-%p"`.out cnt/countpages.latest.`date +"%Y-%m-%d-%I-%p"`.out

dossier-projet.html: dossier-projet.md
	pandoc --toc $? -o $@

# slides présentation projet
s5-pres.html: s5-skel.html plan-pres.txt
	./foo.pl $^ > $@

# for doc on make, see:
#   https://www.gnu.org/software/make/manual/make.html#Automatic-Variables

count:
	./docount.sh
