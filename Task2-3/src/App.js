import React, { useState } from 'react';
import PostList from './components/PostList';
import HideButton from './components/HideButton'; // Импорт кнопки
import './App.css';

function App () {
  const [posts, setPosts] = useState([
    {id: 1,url: 'https://kartinki.pics/uploads/posts/2022-08/1661323632_53-kartinkin-net-p-berserk-skandinavskii-voin-oboi-krasivo-63.jpg' ,text: 'Дубровин Степан Николаевич', },
    {id: 2,url: 'https://repository-images.githubusercontent.com/410214337/070f2aba-d9d6-4699-b887-9a0f29015b1b' ,text: 'Работаю на React для проекта института', progress:'70'},
    {id: 3,url: 'https://cdnb.artstation.com/p/assets/covers/images/060/407/559/large/vahid-ghobadi-arfai-vahid-ghobadi-arfai-lo.jpg?1678483232' ,text: 'Базовые знания языка Python', progress:'70'},
    {id: 4,url: 'https://logo-base.com/logo/javascript_js_logo_icon.png' ,text: 'Базовые знания языка JavaScript', progress:'40'},
    {id: 5,url: 'https://cryptapi.io/media/resource_logos/kisspng-c-programming-basics-for-absolute-beginners-comp-5b1061268e45a8.2_nG9eciy.png' ,text: 'Базовые знания языка C#', progress:'60'},
    {id: 7,url: 'https://repository-images.githubusercontent.com/410214337/070f2aba-d9d6-4699-b887-9a0f29015b1b' ,text: 'Я хотел бы улучшить знания React', progress:'60'},
    {id: 8,url: 'https://logo-base.com/logo/javascript_js_logo_icon.png' ,text: 'Я хотел бы поглубже изучть JS', progress:'55'},
    {id: 9,url: 'https://logos-world.net/wp-content/uploads/2021/02/Docker-Symbol.png' ,text: 'Я хотел бы изучить Docker', progress:'5'},
    {id: 10,url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1180px-Node.js_logo.svg.png' ,text: 'Я хотел бы изучить Node.js', progress:'20'},
    {id: 11,url: 'https://media.licdn.com/dms/image/D5612AQHaIJC76buGqw/article-cover_image-shrink_720_1280/0/1685837595125?e=2147483647&v=beta&t=VokwP3KpNKhB5Mxcs6rxt0sQcgLvZwFWgDu_FGg6xOE' ,text: 'Я хотел бы изучить PostgreSQL', progress:'5'},
  ]);
  const [hidePosts, setHidePosts] = useState(false); 
  return (
    <div>
      <HideButton setHidePosts={setHidePosts} hidePosts={hidePosts} posts={posts} /> 
      {!hidePosts && posts.map(post => ( 
        <PostList post={post} key={post.id}/>
      ))}
    </div>
  );
}

export default App;