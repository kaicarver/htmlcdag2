# maybe a way to count pages in the PDF?
# doesn't show much, but over time I may be able to deduce something
# using a command like:
#   ./countpages.sh > countpages.17.out
# and comparing different outputs over time
strings dossier-projet.pdf | sort | uniq -c | sort -nr | head
