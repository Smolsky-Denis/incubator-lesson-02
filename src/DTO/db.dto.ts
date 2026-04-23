import {BlogDTO} from "./blog.dto";
import {PostDTO} from "./posts.dto";

export type dbDTO = {
    blogs: BlogDTO[];
    posts: PostDTO[];
}