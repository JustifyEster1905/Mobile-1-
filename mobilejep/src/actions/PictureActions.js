import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

import { 
    PICTURE_UPDATE, 
    PICTURE_CREATE, 
    PICTURE_GETLIST_SUCCESS 
} from './types';

export const pictureUpdate = (prop, value) => {
    return {
        type: PICTURE_UPDATE,
        payload: { prop, value }
    };
};

export const pictureCreate = (user, image, caption) => {
    return (dispatch) => {
        firebase.database().ref(`/post`)
        .push({ user, image, caption })
        .then(() => {
            dispatch({ type: PICTURE_CREATE });
        });
    };
};

export const getPictureList = () => {
    return (dispatch) => {
        firebase.database().ref(`/post`)
            .on('value', snapshot => {
                dispatch({ type: PICTURE_GETLIST_SUCCESS, payload: snapshot.val() });
            });
    };
};


