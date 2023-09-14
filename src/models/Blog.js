export class Blog {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.imgUrl = data.imgUrl
        this.tags = data.tags
        this.published = data.published || false
        this.creator = data.creator
    }

}