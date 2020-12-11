ls testsuite | sort -R | tail -n 1000 | while read file; do 
  echo $file 
  cp testsuite/$file testsuite-mini
done
