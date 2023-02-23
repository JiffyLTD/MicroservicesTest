import React, { useState } from "react";
import Post from "../Components/NewsMain/Post";
import PostMain from "../Components/NewsMain/PostMain";

const Main = () => {
  const postObject = {
    postTitle: "Почему стоит выбрать именно нас?",
    subTitles: ["Комании", "Автомобили", "Время", "Отчеты в личном кабинете"],
    descriptions: [
      "Мы работаем с большим количеством дилеров, которые предоставляют огромный выбор автомобилей.",
      "Все дилеры с которыми мы работаем проводят тщательную проверку перед продажей.",
      "Вы тратите намного меньше времени на подбор вашего авто.",
      "При оформлении сделки все копии документов будут храниться в личном кабинете.",
    ],
  };

  const [posts, setPosts] = useState([
    {
      id: 0,
      title: "Мы начали сотрудничать с BMW",
      desc: "Теперь через нашу компанию вы сможете приобрести автомобили BMW.",
      imageUrl: "https://etimg.etb2bimg.com/photo/78656328.cms",
    },
  ]);

  return (
    <div>
      <PostMain post={postObject} />
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Main;
