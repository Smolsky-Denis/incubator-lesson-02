import {BlogDTO, BlogInputDTO} from "../../../DTO/blog.dto";

export type BlogRepository = {
    createBlog: (newBlog: BlogDTO) => BlogDTO,
    getBlogById: (id: string) => BlogDTO,
    getBlogList: (id: string) => BlogDTO[],
    updateBlog: (id: string, body: BlogInputDTO) => BlogDTO | undefined,
    deleteBlog: (id: string) => boolean,
}
