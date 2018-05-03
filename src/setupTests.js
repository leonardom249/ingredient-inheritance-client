import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//to test the auth-reducer:
global.authToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoibGVvbmFyZG9tMjQ5IiwidXNlcklkIjoiNWFlN2EyNWNjZDMyMWQwMDE0OGU0MWNhIiwiZmlyc3ROYW1lIjoiIn0sImlhdCI6MTUyNTM4OTQ5NywiZXhwIjoxNTI1MzkzMDk3LCJzdWIiOiJsZW9uYXJkb20yNDkifQ.43jG_56lzHg_-7X7PuDp3Hu8vhiz52GzQtYorBVR3tM';
global.currentUser='leonardom249';
global.localStorage={
    getItem:()=>{return authToken},
    removeItem:()=>{}
}
console.log('anything')

//setup tests:
Enzyme.configure({adapter: new Adapter()});