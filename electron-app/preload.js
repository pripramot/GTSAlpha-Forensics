const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('unicorn', {
  getContent: () => ipcRenderer.invoke('get-unicorn-content'),
  getDocContent: (filename) => ipcRenderer.invoke('get-doc-content', filename),
});
