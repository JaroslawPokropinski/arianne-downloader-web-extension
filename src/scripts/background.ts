import { downloadFile } from '../utils/fetchUtils';

if (typeof global.browser === 'undefined' && process.env.VENDOR === 'chrome') {
  global.browser = chrome as any;
}

browser.contextMenus.create({
  id: 'fast-download-context-item',
  title: 'Fast download',
  visible: true,
  contexts: ['link'],
});

browser.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId !== 'fast-download-context-item') return;
  if (!info.linkUrl) return;
  if (!info.pageUrl) return;

  downloadFile(info.linkUrl, info.pageUrl);
});
