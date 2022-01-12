import Post from './Post.js'
import fileService from './fileService'

class PostService {
    async create(post, picture) {
        const fileName = fileService.saveFile(picture)
        const createdPost = await Post.create({...post, picture:fileName});
        return createdPost
    } 

    async getAll() {
        const posts = await Post.find();
        console.log('posts', posts);
        return posts;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID');
        }
        const post = await Post.findById(id);
        return post
    }

    async update(post) {
        if (post._id) {
            throw new Error('не указан ID');
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id)
        return updatedPost
    }
}

export default new PostService();