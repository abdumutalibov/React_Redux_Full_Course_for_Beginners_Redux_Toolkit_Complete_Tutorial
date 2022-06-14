// import Counter from "./features/counter/Counter";
import PostsLists from "./features/posts/PostsLists";
import AddPostForm from "./features/AddPostForm/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import Layout from "./component/Layout";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
<Route index element={<PostsLists/>}/>
<Route path="post">
  <Route index element={<AddPostForm/>}/>
  <Route path=":postId" element={<SinglePostPage/>}/>
</Route>
      </Route>
    </Routes>
  );
}

export default App;
