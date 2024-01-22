# BedrockVRLauncher
### A simple application that allows you to play Minecraft: Bedrock Edition in VR mode easily.
> This project is not affiliated or endorsed by Mojang, Microsoft, or Xbox Game Studios.
> Please be careful using this on servers, possibly even including the Featured Servers (Hive, Cubecraft, etc.) as most anti-cheats are designed for screen users, and VR mode may get you banned in certain cases.

## Requirements
 [x] A VR Ready Windows computer with [SteamVR](https://store.steampowered.com/app/250820/SteamVR/) and [Minecraft: Bedrock Edition](https://www.xbox.com/en-US/games/store/minecraft-for-windows/9NBLGGH2JHXJ) installed
 [x] A VR Headset with 2 Controllers (I use Meta Quest 2 connecting to SteamVR via [Steam Link](https://www.meta.com/en-gb/experiences/5841245619310585/))
 
## Steam Installation Instructions
1. Move only the `BedrockVRLauncher.exe` to a folder somewhere where it wont be deleted, or unavailable for any reason.
2. Hold Shift and press Right-Click on the exe you moved to open the context menu, and click the previously hidden `Copy as path` option. 
![Context Menu](https://cdn.discordapp.com/attachments/901053179712647178/1198945934801895444/image.png)
3. Open **Steam** (non-VR) and go to the **LIBRARY** tab.
4. Click on `Add a Game` > `Add a Non-Steam Game...`, then on the popup that appears, Click `Browse...` in the bottom-left corner.
![Steam Context Menu](https://cdn.discordapp.com/attachments/901053179712647178/1198946579797790771/image.png?ex=65c0c103&is=65ae4c03&hm=33ca4d58b0482dc77616c1b5789c313f9cc181aabc04c072886c856e9fd7620c&)
![Browse...](https://cdn.discordapp.com/attachments/901053179712647178/1198947555959115838/image.png)
5. In the file explorer popup, Click on the bar for `File name:` then paste your path (CTRL+V) and Press the `Open` button.
(my example below, your path will likely not be the same as mine!)
![BedrockVRLauncher](https://cdn.discordapp.com/attachments/901053179712647178/1198951433526071406/image.png?ex=65c0c589&is=65ae5089&hm=1bdd01785b1ca2951b539e7ac4c361e9c4c80ea8b5c7577e1c99e744a8eed3f6&)
6. In the `Add Non-Steam Game Popup` press `Add Selected Programs`.
7. Find the app by searching for `BedrockVRLauncher` in the **LIBRARY** tab.
![10 cents we win these](https://cdn.discordapp.com/attachments/901053179712647178/1198949892249370705/image.png)
8. Click on the Settings Icon > `Properties...`
![Properties...](https://cdn.discordapp.com/attachments/901053179712647178/1198950107975004160/image.png?ex=65c0c44d&is=65ae4f4d&hm=4bdb919ee6b9876660c1bdb75680333d79715c79aa71d74d6a28cf6851f3ab2e&)
9. Switch on `Include in VR Library` and close the `Properties` popup window.
10. Now you can launch it in SteamVR and play Minecraft: Bedrock Edition in VR! 

> Please note: As this is not a mod of the game and only a launcher, I cannot add features like multiplayer hand movements or offhand arm movements. Mojang will have to do this themselves which is very unlikely as VR is definitely not one of their primary platforms other than the PlayStation VR.

## How?
Minecraft: Bedrock Edition has a hidden [VR Mode](https://www.minecraft.net/en-us/vr), which was made for the [PlayStation VR](https://www.minecraft.net/en-us/article/minecraft-gets-playstation-vr) and [Gear VR](https://www.youtube.com/watch?v=_rYfkDmSRKs). However, this can be enabled on Windows by typing this command in a web browser while having an OpenXR server (SteamVR or Oculus Rift) open:
`minecraft://Mode/?OpenXR=true`
By making an application instead of a command to launch Bedrock Edition in this mode, you can add it to Steam or any other VR service.
