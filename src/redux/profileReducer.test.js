import profileReducer, { addPost } from './profileReducer';

let initialState = {
   postData: [
      { message: 'first text', likes: 10, id: 1, key: 1 },
      { message: 'second text', likes: 15, id: 2, key: 2 },
      { message: 'last text', likes: 20, id: 3, key: 3 },
   ],
}

test('length of post should be incremented', () => {
   //1. test data
   let action = addPost('testing text')
   //2. action
   let newState = profileReducer(initialState, action)
   //3. expections
   expect(newState.postData.length).toBe(4);
});
test('messega should be correct', () => {
   //1. test data
   let action = addPost('testing text')
   //2. action
   let newState = profileReducer(initialState, action)
   //3. expections
   expect(newState.postData[3].message).toBe('testing text');
});
