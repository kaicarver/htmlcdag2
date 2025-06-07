# An approximate way to count pages in the PDF
# doesn't show much, but over time I may be able to deduce something
# using commands like so:
#   ./countpages.sh > countpages.`date +"%Y-%m-%d-%I-%p"`.out
#   ./docount.sh
# and comparing different outputs over time
strings dossier-projet.pdf | sort | uniq -c | sort -nr | head
