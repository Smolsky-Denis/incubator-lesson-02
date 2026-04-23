export type PostDTO = {
    id: string,
    title: string,
    shortDescription: string,
    blogId: string,
    content: string,
}

export type FullPostDTO = {
    id: string,
    title: string,
    shortDescription: string,
    blogId: string,
    content: string,
    blogName: string,
}

export type PostInputDTO = Omit<PostDTO, "id">
