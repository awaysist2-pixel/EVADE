#define MyAppName "EVADE"
#define MyAppVersion "1.0.0"

[Setup]
AppId={{B8F6D3A1-9C42-4E71-A650-2D8C7F3B91E4}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppPublisher=EVADE
DefaultDirName={localappdata}\Programs\EVADE
DefaultGroupName=EVADE
PrivilegesRequired=lowest
OutputDir=dist
OutputBaseFilename=EVADE-Setup
Compression=lzma2
SolidCompression=yes
WizardStyle=modern
UninstallDisplayIcon={app}\EVADE.exe
ArchitecturesInstallIn64BitMode=x64

[Tasks]
Name: "desktopicon"; Description: "Create a desktop shortcut"; GroupDescription: "Additional shortcuts:"; Flags: unchecked

[Files]
Source: "dist\EVADE-win32-x64\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs

[Icons]
Name: "{group}\EVADE"; Filename: "{app}\EVADE.exe"
Name: "{autodesktop}\EVADE"; Filename: "{app}\EVADE.exe"; Tasks: desktopicon
