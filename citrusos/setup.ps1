rm -r -fo C:\CitrusOS -ErrorAction SilentlyContinue
mkdir C:\CitrusOS -ErrorAction SilentlyContinue
cd C:\CitrusOS 
wget https://pieos.xyz/citrusos/setup.zip -o setup.zip
wget https://pieos.xyz/citrusos/7z.exe -o 7z.exe
./7z.exe x setup.zip
Remove-Item setup.zip
Remove-Item 7z.exe
cd files
.\CitrusOS.ppsx
Remove-Item -LiteralPath C:\CitrusOS\setup.ps1 -Force