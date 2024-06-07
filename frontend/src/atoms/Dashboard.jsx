import axios from 'axios'
import { atom, atomFamily, selector, selectorFamily } from 'recoil'


export const userAtomFamily = atomFamily({
    key : 'userAtomFamily',
    default : selectorFamily({
        key : 'userSelectorFamily',
        get : (userId) => async () =>{
            const response = await axios.get(`http://localhost:3000/api/v1/user/userId/${userId}`);
            return response.data.user;
        }
    })
});

export const accountSelector = selector({
    key : 'accountSelector',
    get :  async () => {
            console.log(`inside atom family ${localStorage.token}`);
            if( ! localStorage.token ) {
                return null;
            } else {
                const response = await axios.get('http://localhost:3000/api/v1/account/balance', {
                    headers : {
                        "Authorization" : `Bearer ${localStorage.token}`
                    }
                });

                return response.data;
            }
        }

});


// get all users information
export const usersAtom = atom({
    key : 'usersAtom',
    default : selector({
        key : 'usersSelector',
        get : async () => {
            const response = await axios.get('http://localhost:3000/api/v1/user/bulk?filter=', {
                headers :  {
                    "Authorization" : `Bearer ${localStorage.token}`
                }
            });
            console.log(`~~~~~~~~ users ~~~~~~~~~~`)
            console.log(response.data.user);
            console.log(`~~~~~~~~ ***** ~~~~~~~~~~`)
            return response.data.user;
        }
    })
})