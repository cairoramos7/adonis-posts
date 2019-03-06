'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
    return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
    Route.post('auth/register', 'AuthController.register')
    Route.post('auth/login', 'AuthController.login')

    Route.get('posts', 'PostsController.index')
    Route.post('posts', 'PostsController.store').middleware('auth')
    Route.get('posts/:id', 'PostsController.get')
    Route.put('posts/:id', 'PostsController.update').middleware('auth')
    Route.delete('posts/:id', 'PostsController.destroy').middleware('auth')
})
    .prefix('api')
