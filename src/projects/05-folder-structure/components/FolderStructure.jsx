import '../styles.css';
import explorer from '../data/folderData';
import Folder from './Folder';

const FolderStructure = () => {
  return (
    <section className="folders">
      <Folder explorer={explorer} />
    </section>
  );
};
export default FolderStructure;
