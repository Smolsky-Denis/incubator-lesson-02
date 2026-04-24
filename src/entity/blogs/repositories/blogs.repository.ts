import {BlogDTO, BlogInputDTO} from "../../../DTO/blog.dto";
import {db} from "../../../db/db";
import {BlogRepository} from "./blolgs.repository.types";

export const blogsRepository: BlogRepository = {
    createBlog(newBlog: BlogDTO): BlogDTO {
        db.blogs.push(newBlog);

        return newBlog;
    },

    getBlogById(id: string): BlogDTO {
        return db.blogs.find((blog) => blog.id === id) as BlogDTO;
    },

    getBlogList(): BlogDTO[] {
        return db.blogs
    },

    updateBlog(id: string, body: BlogInputDTO) {
        const blog = db.blogs.find((blog) => blog.id === id)
        if (blog) {
            blog.name = body.name
            blog.description = body.description
            blog.websiteUrl = body.websiteUrl
        }
        return blog;
    },
    deleteBlog(id: string): boolean {
        const index = db.blogs.findIndex(blog => blog.id === id)
        if (index === -1) {
            return false
        }

       db.blogs.splice(index, 1)
        return true
    }
}
