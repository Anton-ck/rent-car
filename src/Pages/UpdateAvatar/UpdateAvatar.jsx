import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAvatar } from 'redux/auth/operationsWithUser';

const UpdateAvatar = () => {
  const [file, setFile] = useState(null);

  const dispatch = useDispatch();

  const changeHandler = event => {
    setFile(event.target.files[0]);
  };

  const fileHandler = () => {
    dispatch(updateAvatar(file));
  };

  return (
    <div>
      <input type="file" name="avatar" onChange={changeHandler} />
      <button onClick={fileHandler}>Upload</button>
    </div>
  );
};

export default UpdateAvatar;
