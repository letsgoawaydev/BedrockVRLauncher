@echo off
del BedrockVRLauncher.blob
del BedrockVRLauncher.exe
node --experimental-sea-config sea-config.json 
node -e "require('fs').copyFileSync(process.execPath, 'BedrockVRLauncher.exe')"
npx postject BedrockVRLauncher.exe NODE_SEA_BLOB BedrockVRLauncher.blob ^
    --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2