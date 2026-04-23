import express from "express";
import {BLOGS_PATH, POSTS_PATH, TESTING_PATH} from "./core/paths/paths";
import {blogsRouter} from "./routes/blogsRouter/blogs.routes";
import {postsRouter} from "./routes/postsRouter/posts.routes";
import {testingRouter} from "./routes/testingRouter/testing.routes";

// создание приложения
const app = express();
app.use(express.json());
//
app.use(BLOGS_PATH, blogsRouter)
// app.use(POSTS_PATH, postsRouter)
// app.use(TESTING_PATH, testingRouter)

// порт приложения
const PORT = process.env.PORT || 5001;

// запуск приложения
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
