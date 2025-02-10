const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
  // Cria a janela do navegador
  win = new BrowserWindow({
    width: 310, // Largura da janela (como o celular)
    height: 500, // Altura da janela (como o celular)
    webPreferences: {
      nodeIntegration: true, // Permite integração do Node.js
    },
    frame: false, // Retira a barra de título (como se fosse um celular)
    resizable: false, // Não permite redimensionar
  });

  // Carrega o HTML do site
  win.loadFile('index.html');

  // Fecha o aplicativo quando a janela é fechada
  win.on('closed', () => {
    win = null;
  });
}

// Quando o Electron estiver pronto, cria a janela
app.whenReady().then(createWindow);

// Fecha quando todas as janelas são fechadas (em sistemas operacionais não-Mac)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Cria a janela novamente se o app for ativado no macOS
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
