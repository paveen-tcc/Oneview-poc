import {useState} from 'react';
import {Alert} from 'react-native';
import RNFetchBlob from 'react-native-blob-util';

export const useFileModule = () => {
  const [accessFilePath, setAccessFilePath] = useState();
  //   const libPath = RNFetchBlob.fs.dirs.LibraryDir;
  const libPath = RNFetchBlob.fs.dirs.LibraryDir;
  
  const createFile = async (type: string) => {
      try {
          let fileName = `Oneview-${Math.floor(Math.random() * 100000)}.pdf`;
          let link = 'https://api.printnode.com/static/test/pdf/multipage.pdf';
          if(type == 'ppt') {
              link = 'https://f.uguu.se/wMjVDjJB.ppt'
              fileName = `Oneview-${Math.floor(Math.random() * 1000)}.ppt`;
            }
      const filePath = `${libPath}/oneview/${fileName}`;
      const response = await RNFetchBlob.fetch('GET', link);
      const pdfData = response.data;
      
      await RNFetchBlob.fs.writeFile(filePath, pdfData, 'base64');
      const result = await RNFetchBlob.fs.ls(libPath + '/oneview');
     return filePath;
//         Alert.alert('File created successfully', `Filename: ${fileName}`);
//         getFilesinDirectory();
    } catch (err) {
      console.log(err);
    }
  };

    // const getFilesInDirectory = async () => {
    //   try {
    //     const result = await RNFetchBlob.fs.ls(libPath + '/oneview');
    //     console.log(result);
    //     setAccessFilePath([...new Set(result)]);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

  return {
    accessFilePath,
    createFile,
    // getFilesInDirectory, ̰
  };
};
