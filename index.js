const { trace } = require('console');

const execFile = require('child_process').execFile;
const exec = require('child_process').exec;

function isRunning(win, mac, linux) {
    return new Promise(function (resolve, reject) {
        const plat = process.platform
        const cmd = plat == 'win32' ? 'tasklist' : (plat == 'darwin' ? 'ps -ax | grep ' + mac : (plat == 'linux' ? 'ps -A' : ''))
        const proc = plat == 'win32' ? win : (plat == 'darwin' ? mac : (plat == 'linux' ? linux : ''))
        if (cmd === '' || proc === '') {
            resolve(false)
        }
        exec(cmd, function (err, stdout, stderr) {
            resolve(stdout.toLowerCase().indexOf(proc.toLowerCase()) > -1)
        })
    })
}

function checkSteam(steamBooted) {
    if (steamBooted == null) {
        steamBooted == false;
    }
    isRunning('vrmonitor.exe', 'vrmonitor', 'vrmonitor').then((running) => {
        if (running) {
            execFile('cmd.exe', ['/c start minecraft://Mode/?OpenXR=true'], function (err, data) {
            });
        }
        else {
            if (!steamBooted) {
                execFile('cmd.exe', ['/c start steam://rungameid/250820'], function (err, data) {
                });
            }
            setTimeout(() => { checkSteam(true) }, 500);
        }
    });
}
execFile('taskkill.exe', ['/F /IM Minecraft.Windows.exe'], function (err, data) {
});
checkSteam();

