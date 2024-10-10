module.exports = () => {
  // NEWS START
  /**
   * @swagger
   * components:
   *  schema:
   *    news-add:
   *      type: object
   *      properties:
   *        status:
   *          type: string
   *          description: The status of the request.
   *        statusCode:
   *           type: integer
   *           description: The status code.
   *        data:
   *          type: object
   *          properties:
   *        message:
   *          type: string
   *          description: A feedback message of the request.
   *      example:
   *        status: SUCCESS
   *        statusCode: 201
   *        message: news added successfully.
   *        data:
   *          id: 123456789012345678901234
   *          title: ABC
   *          details: ABC
   *          slug: ABC
   *          image: XYZ.png
   *    news-list:
   *      type: object
   *      properties:
   *        status:
   *          type: string
   *          description: The status of the request.
   *        statusCode:
   *          type: string
   *          description: The status code
   *        data:
   *          type: array
   *          properties:
   *        message:
   *          type: string
   *          description: A feedback message of the request.
   *      example:
   *        status: SUCCESS
   *        statusCode: 200
   *        message: news list found
   *        data:
   *          id: 123456789012345678901234
   *          header: ABC
   *          contain: ABC
   *          image: XYZ.png
   *    news-delete:
   *      type: object
   *      properties:
   *        status:
   *          type: string
   *          description: The status of the request.
   *        statusCode:
   *          type: string
   *          description: The status code
   *        data:
   *          type: array
   *          properties:
   *        message:
   *          type: string
   *          description: A feedback message of the request.
   *      example:
   *        status: SUCCESS
   *        statusCode: 200
   *        message: news deleted Successfully
   *        data: {}
   *    news-update:
   *      type: object
   *      properties:
   *        status:
   *          type: string
   *          description: The status of the request.
   *        statusCode:
   *           type: integer
   *           description: The status code.
   *        data:
   *          type: object
   *          properties:
   *        message:
   *          type: string
   *          description: A feedback message of the request.
   *      example:
   *        status: SUCCESS
   *        statusCode: 201
   *        message: news updated successfully.
   *        data:
   *          id: 123456789012345678901234
   *          header: ABC
   *          contain: ABC
   *          image: XYZ
   *    news-view:
   *      type: object
   *      properties:
   *        status:
   *          type: string
   *          description: The status of the request.
   *        statusCode:
   *           type: integer
   *           description: The status code.
   *        data:
   *          type: object
   *          properties:
   *        message:
   *          type: string
   *          description: A feedback message of the request.
   *      example:
   *        status: SUCCESS
   *        statusCode: 201
   *        message: news available.
   *        data:
   *          id: 123456789012345678901234
   *          header: ABC
   *          contain: ABC
   *          image: XYZ
   */
  /**
   * @swagger
   * /api/news:
   *    post:
   *      summary: Add news detail.
   *      tags: [News]
   *      security:
   *        - bearerAuth: []
   *      requestBody:
   *        requires: true
   *        content:
   *         multipart/form-data:
   *            schema:
   *              type: object
   *              properties:
   *                title:
   *                  type: string
   *                  description: title of news .
   *                details:
   *                  type: string
   *                  description: details of news .
   *                slug:
   *                  type: string
   *                  description: slug of news .
   *                image:
   *                  type: file
   *                  description: slug of news .
   *              example:
   *                title: ABC
   *                details: XYZ
   *                slug: XYZ
   *                image: XYZ.png
   *      responses:
   *        201:
   *          description: news added successfully.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/news-add"
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: Error! Data not added
   *        401:
   *          description: Unauthorized.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 401
   *                  data: {}
   *                  message: Access denied
   */
  /**
   * @swagger
   * /api/news:
   *    get:
   *      summary: news List.
   *      tags: [News]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: query
   *          name: page
   *          schema:
   *            type: string
   *            description: The page no
   *        - in: query
   *          name: items_per_page
   *          schema:
   *            type: The number of data on per page
   *      responses:
   *        200:
   *          description: List found.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/news-list"
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: List not found
   */
  /**
   * @swagger
   * /api/news/{id}:
   *    delete:
   *      summary: Delete news by id.
   *      tags: [News]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The news id.
   *      responses:
   *        200:
   *          description: The news delete.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/news-delete"
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: Error! news not deleted
   */
  /**
   * @swagger
   * /api/news/{id}:
   *    put:
   *      summary: Update news by id.
   *      tags: [News]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The news id.
   *      requestBody:
   *       requires: true
   *       content:
   *        application/json:
   *           schema:
   *             type: object
   *             properties:
   *                header:
   *                  type: string
   *                  description: header of news .
   *                contain:
   *                  type: string
   *                  description: contain of news .
   *                image:
   *                  type: string
   *                  description: image of news .
   *           example:
   *            header: Harsh
   *            contain: Patel
   *            image: harsh.png
   *      responses:
   *        201:
   *          description: The news update.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/news-update"
   *        202:
   *          description: Request accepted but processing not completed.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: true
   *                  statusCode: 204
   *                  data: {}
   *                  message: Error! news not found
   *        406:
   *          description: Not Acceptable.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 406
   *                  data: {}
   *                  message: news not updated
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: Error! news not found
   */
  /**
   * @swagger
   *  /api/news/{id}:
   *    get:
   *      summary: View news .
   *      tags: [News]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The news news.
   *      responses:
   *        200:
   *          description: news available.
   *          content:
   *            application/json:
   *                    schema:
   *                          $ref: "#/components/schema/news-view"
   *        202:
   *          description: No Data Found.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: true
   *                  statusCode: 202
   *                  data: {}
   *                  message: Data not found
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: Error! Data not found
   *        401:
   *          description: Unauthorized.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 401
   *                  data: {}
   *                  message: Access denied
   */
  // NEWS END
}
