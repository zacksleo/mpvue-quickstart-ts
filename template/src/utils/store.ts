import { wxp as wx } from '@minapp/wx/wxp'

interface storeInterface {
    userInfo: null | any;
    unionid: null | string;
    loggedin: false | boolean;
}

let store: storeInterface = {
    userInfo: null,
    unionid: '',
    loggedin: false,
}

export default store;
