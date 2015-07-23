@echo off
cd %USERPROFILE%\Desktop
echo Set oWS = WScript.CreateObject("WScript.Shell") > CreateShortcut.vbs
echo sLinkFile = "%HOMEDRIVE%%HOMEPATH%\Desktop\NanoTech Computers.lnk" >> CreateShortcut.vbs
echo Set oLink = oWS.CreateShortcut(sLinkFile) >> CreateShortcut.vbs
echo oLink.TargetPath = "http://www.nanotechcomputers.net/Support" >> CreateShortcut.vbs
echo oLink.IconLocation = "C:\Windows\System32\SHELL32.dll, 160" >> CreateShortcut.vbs
echo oLink.Save >> CreateShortcut.vbs
cscript CreateShortcut.vbs
del CreateShortcut.vbs

REM Flash Download, Installation, etc
cd C:\Windows\Temp\
echo ' Set your settings > C:\Windows\Temp\downloadAdobe.vbs
echo    strFileURL = "http://fpdownload.macromedia.com/get/flashplayer/current/licensing/win/install_flash_player_18_active_x.msi" >> C:\Windows\Temp\downloadAdobe.vbs
echo    strHDLocation = "C:\Windows\Temp\flash.msi" >> C:\Windows\Temp\downloadAdobe.vbs
echo. >> C:\Windows\Temp\downloadAdobe.vbs
echo ' Fetch the file >> C:\Windows\Temp\downloadAdobe.vbs
echo    Set objXMLHTTP = CreateObject("MSXML2.XMLHTTP") >> C:\Windows\Temp\downloadAdobe.vbs
echo. >> C:\Windows\Temp\downloadAdobe.vbs
echo    objXMLHTTP.open "GET", strFileURL, false >> C:\Windows\Temp\downloadAdobe.vbs
echo    objXMLHTTP.send() >> C:\Windows\Temp\downloadAdobe.vbs
echo. >> C:\Windows\Temp\downloadAdobe.vbs
echo If objXMLHTTP.Status = 200 Then >> C:\Windows\Temp\downloadAdobe.vbs
echo Set objADOStream = CreateObject("ADODB.Stream") >> C:\Windows\Temp\downloadAdobe.vbs
echo objADOStream.Open >> C:\Windows\Temp\downloadAdobe.vbs
echo objADOStream.Type = 1 'adTypeBinary >> C:\Windows\Temp\downloadAdobe.vbs
echo. >> C:\Windows\Temp\downloadAdobe.vbs
echo objADOStream.Write objXMLHTTP.ResponseBody >> C:\Windows\Temp\downloadAdobe.vbs
echo objADOStream.Position = 0    'Set the stream position to the start >> C:\Windows\Temp\downloadAdobe.vbs
echo. >> C:\Windows\Temp\downloadAdobe.vbs
echo Set objFSO = Createobject("Scripting.FileSystemObject") >> C:\Windows\Temp\downloadAdobe.vbs
echo If objFSO.Fileexists(strHDLocation) Then objFSO.DeleteFile strHDLocation >> C:\Windows\Temp\downloadAdobe.vbs
echo Set objFSO = Nothing >> C:\Windows\Temp\downloadAdobe.vbs
echo. >> C:\Windows\Temp\downloadAdobe.vbs
echo objADOStream.SaveToFile strHDLocation >> C:\Windows\Temp\downloadAdobe.vbs
echo objADOStream.Close >> C:\Windows\Temp\downloadAdobe.vbs
echo Set objADOStream = Nothing >> C:\Windows\Temp\downloadAdobe.vbs
echo End if >> C:\Windows\Temp\downloadAdobe.vbs
echo. >> C:\Windows\Temp\downloadAdobe.vbs
echo Set objXMLHTTP = Nothing >> C:\Windows\Temp\downloadAdobe.vbs
cscript.exe C:\Windows\Temp\downloadAdobe.vbs
msiexec /i "flash.msi" /qn
echo Download and Installation done for ActiveX version...
echo Installing new version...
echo ' Set your settings > C:\Windows\Temp\downloadAdobe2.vbs
echo    strFileURL = "http://fpdownload.macromedia.com/get/flashplayer/current/licensing/win/install_flash_player_18_plugin.msi" >> C:\Windows\Temp\downloadAdobe2.vbs
echo    strHDLocation = "C:\Windows\Temp\flash2.msi" >> C:\Windows\Temp\downloadAdobe2.vbs
echo. >> C:\Windows\Temp\downloadAdobe2.vbs
echo ' Fetch the file >> C:\Windows\Temp\downloadAdobe2.vbs
echo    Set objXMLHTTP = CreateObject("MSXML2.XMLHTTP") >> C:\Windows\Temp\downloadAdobe2.vbs
echo. >> C:\Windows\Temp\downloadAdobe2.vbs
echo    objXMLHTTP.open "GET", strFileURL, false >> C:\Windows\Temp\downloadAdobe2.vbs
echo    objXMLHTTP.send() >> C:\Windows\Temp\downloadAdobe2.vbs
echo. >> C:\Windows\Temp\downloadAdobe2.vbs
echo If objXMLHTTP.Status = 200 Then >> C:\Windows\Temp\downloadAdobe2.vbs
echo Set objADOStream = CreateObject("ADODB.Stream") >> C:\Windows\Temp\downloadAdobe2.vbs
echo objADOStream.Open >> C:\Windows\Temp\downloadAdobe2.vbs
echo objADOStream.Type = 1 'adTypeBinary >> C:\Windows\Temp\downloadAdobe2.vbs
echo. >> C:\Windows\Temp\downloadAdobe2.vbs
echo objADOStream.Write objXMLHTTP.ResponseBody >> C:\Windows\Temp\downloadAdobe2.vbs
echo objADOStream.Position = 0    'Set the stream position to the start >> C:\Windows\Temp\downloadAdobe2.vbs
echo. >> C:\Windows\Temp\downloadAdobe2.vbs
echo Set objFSO = Createobject("Scripting.FileSystemObject") >> C:\Windows\Temp\downloadAdobe2.vbs
echo If objFSO.Fileexists(strHDLocation) Then objFSO.DeleteFile strHDLocation >> C:\Windows\Temp\downloadAdobe2.vbs
echo Set objFSO = Nothing >> C:\Windows\Temp\downloadAdobe2.vbs
echo. >> C:\Windows\Temp\downloadAdobe2.vbs
echo objADOStream.SaveToFile strHDLocation >> C:\Windows\Temp\downloadAdobe2.vbs
echo objADOStream.Close >> C:\Windows\Temp\downloadAdobe2.vbs
echo Set objADOStream = Nothing >> C:\Windows\Temp\downloadAdobe2.vbs
echo End if >> C:\Windows\Temp\downloadAdobe2.vbs
echo. >> C:\Windows\Temp\downloadAdobe2.vbs
echo Set objXMLHTTP = Nothing >> C:\Windows\Temp\downloadAdobe2.vbs
cscript.exe C:\Windows\Temp\downloadAdobe2.vbs
msiexec /i "flash2.msi" /qn
echo Download and Installation for Flash player done...
echo Adobe reader next
echo ' Set your settings > C:\Windows\Temp\downloadAdobeReader.vbs
echo    strFileURL = "http://jmhsrobotics.org/reader.msi.msi" >> C:\Windows\Temp\downloadAdobeReader.vbs
echo    strHDLocation = "C:\Windows\Temp\reader.msi" >> C:\Windows\Temp\downloadAdobeReader.vbs
echo. >> C:\Windows\Temp\downloadAdobeReader.vbs
echo ' Fetch the file >> C:\Windows\Temp\downloadAdobeReader.vbs
echo    Set objXMLHTTP = CreateObject("MSXML2.XMLHTTP") >> C:\Windows\Temp\downloadAdobeReader.vbs
echo. >> C:\Windows\Temp\downloadAdobeReader.vbs
echo    objXMLHTTP.open "GET", strFileURL, false >> C:\Windows\Temp\downloadAdobeReader.vbs
echo    objXMLHTTP.send() >> C:\Windows\Temp\downloadAdobeReader.vbs
echo. >> C:\Windows\Temp\downloadAdobeReader.vbs
echo If objXMLHTTP.Status = 200 Then >> C:\Windows\Temp\downloadAdobeReader.vbs
echo Set objADOStream = CreateObject("ADODB.Stream") >> C:\Windows\Temp\downloadAdobeReader.vbs
echo objADOStream.Open >> C:\Windows\Temp\downloadAdobeReader.vbs
echo objADOStream.Type = 1 'adTypeBinary >> C:\Windows\Temp\downloadAdobeReader.vbs
echo. >> C:\Windows\Temp\downloadAdobeReader.vbs
echo objADOStream.Write objXMLHTTP.ResponseBody >> C:\Windows\Temp\downloadAdobeReader.vbs
echo objADOStream.Position = 0    'Set the stream position to the start >> C:\Windows\Temp\downloadAdobeReader.vbs
echo. >> C:\Windows\Temp\downloadAdobeReader.vbs
echo Set objFSO = Createobject("Scripting.FileSystemObject") >> C:\Windows\Temp\downloadAdobeReader.vbs
echo If objFSO.Fileexists(strHDLocation) Then objFSO.DeleteFile strHDLocation >> C:\Windows\Temp\downloadAdobeReader.vbs
echo Set objFSO = Nothing >> C:\Windows\Temp\downloadAdobeReader.vbs
echo. >> C:\Windows\Temp\downloadAdobeReader.vbs
echo objADOStream.SaveToFile strHDLocation >> C:\Windows\Temp\downloadAdobeReader.vbs
echo objADOStream.Close >> C:\Windows\Temp\downloadAdobeReader.vbs
echo Set objADOStream = Nothing >> C:\Windows\Temp\downloadAdobeReader.vbs
echo End if >> C:\Windows\Temp\downloadAdobeReader.vbs
echo. >> C:\Windows\Temp\downloadAdobeReader.vbs
echo Set objXMLHTTP = Nothing >> C:\Windows\Temp\downloadAdobeReader.vbs
cscript.exe C:\Windows\Temp\downloadAdobeReader.vbs
msiexec /i "reader.msi" /q /norestart

echo Now downloading Chrome
echo Determining Processor Architecture
echo ' Set your settings > C:\Windows\Temp\downloadChrome.vbs
wmic path win32_processor where deviceid="cpu0" get Addresswidth | findstr 32
if "%ERRORLEVEL%"=="1" goto :64
echo    strFileURL = "http://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7BC8E80393-F270-CD1B-C64C-3515C3949032%7D%26lang%3Den%26browser%3D4%26usagestats%3D0%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers/dl/chrome/install/googlechromestandaloneenterprise.msi" >> C:\Windows\Temp\downloadChrome.vbs
goto :end64
:64
echo    strFileURL = "http://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7BC8E80393-F270-CD1B-C64C-3515C3949032%7D%26lang%3Den%26browser%3D4%26usagestats%3D0%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers/dl/chrome/install/googlechromestandaloneenterprise64.msi" >> C:\Windows\Temp\downloadChrome.vbs
:end64
echo    strHDLocation = "C:\Windows\Temp\chrome.msi" >> C:\Windows\Temp\downloadChrome.vbs
echo. >> C:\Windows\Temp\downloadChrome.vbs
echo ' Fetch the file >> C:\Windows\Temp\downloadChrome.vbs
echo    Set objXMLHTTP = CreateObject("MSXML2.XMLHTTP") >> C:\Windows\Temp\downloadChrome.vbs
echo. >> C:\Windows\Temp\downloadChrome.vbs
echo    objXMLHTTP.open "GET", strFileURL, false >> C:\Windows\Temp\downloadChrome.vbs
echo    objXMLHTTP.send() >> C:\Windows\Temp\downloadChrome.vbs
echo. >> C:\Windows\Temp\downloadChrome.vbs
echo If objXMLHTTP.Status = 200 Then >> C:\Windows\Temp\downloadChrome.vbs
echo Set objADOStream = CreateObject("ADODB.Stream") >> C:\Windows\Temp\downloadChrome.vbs
echo objADOStream.Open >> C:\Windows\Temp\downloadChrome.vbs
echo objADOStream.Type = 1 'adTypeBinary >> C:\Windows\Temp\downloadChrome.vbs
echo. >> C:\Windows\Temp\downloadChrome.vbs
echo objADOStream.Write objXMLHTTP.ResponseBody >> C:\Windows\Temp\downloadChrome.vbs
echo objADOStream.Position = 0    'Set the stream position to the start >> C:\Windows\Temp\downloadChrome.vbs
echo. >> C:\Windows\Temp\downloadChrome.vbs
echo Set objFSO = Createobject("Scripting.FileSystemObject") >> C:\Windows\Temp\downloadChrome.vbs
echo If objFSO.Fileexists(strHDLocation) Then objFSO.DeleteFile strHDLocation >> C:\Windows\Temp\downloadChrome.vbs
echo Set objFSO = Nothing >> C:\Windows\Temp\downloadChrome.vbs
echo. >> C:\Windows\Temp\downloadChrome.vbs
echo objADOStream.SaveToFile strHDLocation >> C:\Windows\Temp\downloadChrome.vbs
echo objADOStream.Close >> C:\Windows\Temp\downloadChrome.vbs
echo Set objADOStream = Nothing >> C:\Windows\Temp\downloadChrome.vbs
echo End if >> C:\Windows\Temp\downloadChrome.vbs
echo. >> C:\Windows\Temp\downloadChrome.vbs
echo Set objXMLHTTP = Nothing >> C:\Windows\Temp\downloadChrome.vbs
cscript.exe C:\Windows\Temp\downloadChrome.vbs

msiexec /i "chrome.msi" /qn /norestart
echo Downloaded Chrome
echo Locating Chrome Executable
for /f "delims=" %%i in ('dir /b /s C:\ ^| findstr /e chrome.exe') do @set program="%%i"

echo %program%

cd %USERPROFILE%\Desktop
cscript test.vbs /taskbar /item:%program%
cscript test.vbs /item:%program%
echo Pin created
