export type BlogDTO= {
    id: string,
    name: string,
    description: string,
    websiteUrl: string,
}

export type BlogInputDTO = Omit<BlogDTO, "id">