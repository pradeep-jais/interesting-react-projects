import { useState } from 'react';

const Folder = ({ explorer }) => {
  const [openFolder, setOpenFolder] = useState(false);

  // console.log(explorer);
  return (
    <>
      {explorer.isFolder ? (
        <div>
          <div
            className="folder"
            onClick={() => {
              setOpenFolder(!openFolder);
            }}
          >
            <span>📁 {explorer.name}</span>
          </div>
          {openFolder && (
            <div className="sub-folders">
              {explorer.items.map((exp) => {
                return <Folder key={exp.id} explorer={exp} />;
              })}
            </div>
          )}
        </div>
      ) : (
        <div className="file">
          <span>📄{explorer.name}</span>
        </div>
      )}
    </>
  );
};
export default Folder;
