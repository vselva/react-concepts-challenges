# React + Redux
## Reading a File in React + Redux

To read a file (such as a text or JSON file) in a React + Redux project, 
you typically use the File API in combination with Redux for state management. 

Here’s a basic example:

1. **Create an action to handle file reading:**

```js
// actions/fileActions.js
export const setFileContent = (content) => ({
    type: 'SET_FILE_CONTENT',
    payload: content,
});
```

2. **Create a reducer to store file content:**

```js
// reducers/fileReducer.js
const initialState = { content: '' };

export default function fileReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_FILE_CONTENT':
            return { ...state, content: action.payload };
        default:
            return state;
    }
}
```

3. **React component to read file and dispatch content:**

```jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFileContent } from './actions/fileActions';

function FileReaderComponent() {
    const dispatch = useDispatch();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            dispatch(setFileContent(event.target.result));
        };
        reader.readAsText(file);
    };

    return <input type="file" onChange={handleFileChange} />;
}

export default FileReaderComponent;
```

4. **Display the file content from Redux state:**

```jsx
import React from 'react';
import { useSelector } from 'react-redux';

function FileContentDisplay() {
    const content = useSelector((state) => state.file.content);
    return <pre>{content}</pre>;
}

export default FileContentDisplay;
```

This setup allows you to read a file in a React component and 
store its content in Redux state for use throughout your application.
