import fs from 'fs-extra'; 
import { unflatten } from 'flat';  
import { extractSheets } from 'spreadsheet-to-json'; 
import path from 'path';  
import credentials from './meetingsystem-447103-dd54901eba8f.json' assert { type: 'json' };

const fullPath = new URL(import.meta.url).pathname; 
const cleanPath = path.normalize(fullPath.replace(/^file:\/\//, ''));
const relativePath = path.relative(path.resolve('D:/USERS/Desktop/MeetingAdmin'), cleanPath);

extractSheets(
  {
    spreadsheetKey: "*****-******************-**********",
    credentials: credentials,
    sheetsToExtract: ['config','login','header'],
  },
  (err, data) => {
    if (err) throw err;
    const read = [...data['config'],...data['login'],...data['header']];
    const result = {};
    const files = [];
    
    for (const key in read[0]) {
      if (key !== "key") {
        files.push(key);
        result[key] = {};
      }
    }

    // 製作語言檔案
    read.forEach((el) => {
      for (const file of files) {
        result[file][el["key"]] = el[file] ? el[file] : "";
      }
    });

    // 儲存檔案到指定目錄
    for (const fileName of files) {
      const targetDir = path.resolve('D:/USERS/Desktop/MeetingAdmin/src/locales');
      fs.ensureDirSync(targetDir); // 確保目錄存在

      const targetFilePath = path.join(targetDir, `${fileName}.json`);
      fs.writeJSONSync(targetFilePath, unflatten(result[fileName], { object: true }), { spaces: 2 });
    }
  }
);
