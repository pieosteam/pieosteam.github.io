Remove-Item C:\CitrusOS\ -recurse
Remove-Item C:\cstemp\ -recurse
wget https://pieos.xyz/pkmrep/test/test.ppsx -o test.ppsx
wget https://pieos.xyz/citrusos/7z.exe -o 7z.exe
wget https://pieos.xyz/citrusos/setup.zip -o setup.zip
Move-Item C:\cstemp\setup.zip C:\CitrusOS\
ChDir C:\CitrusOS\
./7z.exe x setup.zip
Remove-Item setup.zip
./CitrusOS.ppsx