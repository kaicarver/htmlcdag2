# maybe a way to count pages in the PDF?
strings dossier-projet.pdf | sort | uniq -c | sort -nr | head
