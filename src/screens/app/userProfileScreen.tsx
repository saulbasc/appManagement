import React, { useContext, useEffect, useState } from 'react';
import { Context as UserContext } from '../../context/UserDaoContext';
import { GetID } from '../../core/supabaseActions';
import LoadingIndicator from '../../components/components/common/LoadingIndicator';
import { navigate } from '../../navigationRef';
import UserPanelScreenComponent from '../../components/components/screen_component/UserPanelScreenComponent';

function UserProfileScreen() {
  const { state, select } = useContext(UserContext);
  const { update } = useContext(UserContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const GetId = async () => {
      const id = await GetID();
      if (id) await select(id);
      setLoaded(true);
    };
    GetId();
  }, []);

  if (!loaded) {
    return <LoadingIndicator />;
  }

  return (
    <UserPanelScreenComponent
      user={state.user}
      onPressAdminButton={async () => {
        if (state.user.rol === 'User') {
          state.user.rol = 'Admin';
        } else {
          state.user.rol = 'User';
        }
        await update(state.user);
      }}
      onPressSaveButton={async (nameInput: string) => {
        const newUser = state.user;
        newUser.name = nameInput;
        await update(newUser);
        await select(state.user.id);
      }}
      onPressSuscribedCourses={async () => {
        navigate('SuscribedCourses');
      }}
    />
  );
}

export default UserProfileScreen;
