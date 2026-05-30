import '../styles.css';
import explorer from '../data/folderData';
import Folder from './Folder';

const FolderStructure = () => {
  return <Folder explorer={explorer} />;
};
export default FolderStructure;
