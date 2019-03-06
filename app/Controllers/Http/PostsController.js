'use strict'

const Database = use('Database')
const Posts = use('App/Models/Post')

class PostsController {
    async index() {
        return await Posts.all()
    }

    async get({ request, auth, params }) {
        return Posts.find(params.id)
    }

    async store({ request, auth }) {
        return Posts.create(request.all())
    }

    async update({ request, params }) {
        try {
            const post = await Posts
            .query()
            .where('id', params.id)
            .update(request.all())

            return post
        } catch (error) {
            console.log(error)
            return response.json(error)
        }
    }

    async destroy({ request, auth, params }) {
        const post = await Posts.find(params.id)
        post.delete()
        return post
    }
}

module.exports = PostsController
