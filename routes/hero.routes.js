import express from 'express'
import {
  getHeroesHandler,
  addHeroHandler,
  deleteHeroHandler,
  editHeroHandler,
} from '../controllers/hero.controller.js'

const router = express.Router()

/**
 * @openapi
 * '/blogs':
 *  get:
 *     tags:
 *     - Blog
 *     summary: Get all blogs
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  Title:
 *                    type: string
 *                    default: ALTP 7
 *                  Body:
 *                    type: string
 *                    default: Andela Technical Leadership program
 *                  Date&Time:
 *                    type: Date
 *                    default: date.(now)
 *       400:
 *         description: Bad request
 */

/**
 * @openapi
 * '/blogs/{id}':
 *  get:
 *     tags:
 *     - Blog
 *     summary: Get one specific blog
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  Title:
 *                    type: string
 *                    default: ALTP 7
 *                  Body:
 *                    type: string
 *                    default: Andela Technical Leadership program
 *                  Date&Time:
 *                    type: Date
 *                    default: date.(now)
 *       400:
 *         description: Bad request
 */


router.get('/api/heroes', getHeroesHandler)

/**
 * @openapi
 * '/blogs':
 *  post:
 *     tags:
 *     - Blog
 *     summary: Create a blog (You have to login first and get the JW token)
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - Title
 *              - Body
 *            properties:
 *              Title:
 *                type: String
 *                default: ATLP 7
 *              Body:
 *                type: string
 *                default: Andela Technical leadership program
 *     responses:
 *      200:
 *        description: Good 
 *      401:
 *        description: Access Denied
 *      404:
 *        description: Not Found
 */
router.post('/api/hero', addHeroHandler)

/**
 * @openapi
 * '/blogs/{id}':
 *  patch:
 *     tags:
 *     - Blog
 *     summary: Modify a blog (You have to login first and get the JW token)
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - Title
 *              - Body
 *            properties:
 *              Title:
 *                type: string
 *                default: The previous
 *              Body:
 *                type: string
 *                default: the previous body
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put('/api/hero', editHeroHandler)

/**
 * @openapi
 * '/blogs/{id}':
 *  delete:
 *     tags:
 *     - Blog
 *     summary: Remove blog by id (You have to login first and get the JW token)
 *     parameters:
 *      - blog: id
 *        in: path
 *        description: The id of the blog
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.delete('/api/hero/:id', deleteHeroHandler)

export default router
