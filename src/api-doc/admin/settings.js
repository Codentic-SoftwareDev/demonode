module.exports = () => {
  // SETTINGS START
  /**
   * @swagger
   * components:
   *  schema:
   *    settings-add:
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
   *        message: settings added successfully.
   *        data:
   *          id: 123456789012345678901234
   *          key: ABC
   *          value: XYZ
   *    settings-delete:
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
   *        message: settings deleted Successfully
   *        data: {}
   *    settings-update:
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
   *        message: settings updated successfully.
   *        data:
   *          id: 123456789012345678901234
   *          key: ABC
   *          value: XYZ
   *    settings-view:
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
   *        message: settings available.
   *        data:
   *          id: 123456789012345678901234
   *          key: ABC
   *          value: XYZ
   */
  /**
   * @swagger
   * /api/settings:
   *    post:
   *      summary: Add settings detail.
   *      tags: [Settings]
   *      security:
   *        - bearerAuth: []
   *      requestBody:
   *        requires: true
   *        content:
   *         application/json:
   *            schema:
   *              type: object
   *              properties:
   *                key:
   *                  type: string
   *                  description: key name of setting .
   *                value:
   *                  type: string
   *                  description: value of key .
   *              example:
   *                key: ABC
   *                value: XYZ
   *      responses:
   *        201:
   *          description: settings added successfully.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/settings-add"
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
   * /api/settings:
   *    get:
   *      summary: settings List.
   *      tags: [Settings]
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
   *                $ref: "#/components/schema/settings-list"
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
   * /api/settings/{id}:
   *    delete:
   *      summary: Delete settings by id.
   *      tags: [Settings]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The settings id.
   *      responses:
   *        200:
   *          description: The settings delete.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/settings-delete"
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: Error! settings not deleted
   */
  /**
   * @swagger
   * /api/settings/{id}:
   *    put:
   *      summary: Update settings by id.
   *      tags: [Settings]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The settings id.
   *      requestBody:
   *       requires: true
   *       content:
   *        application/json:
   *           schema:
   *             type: object
   *             properties:
   *                key:
   *                  type: string
   *                  description: key name of settings .
   *                value:
   *                  type: string
   *                  description: value of key .
   *           example:
   *            key: Harsh
   *            value: Patel
   *      responses:
   *        201:
   *          description: The settings update.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/settings-update"
   *        202:
   *          description: Request accepted but processing not completed.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: true
   *                  statusCode: 204
   *                  data: {}
   *                  message: Error! settings not found
   *        406:
   *          description: Not Acceptable.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 406
   *                  data: {}
   *                  message: settings not updated
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: Error! settings not found
   */
  /**
   * @swagger
   *  /api/settings/{id}:
   *    get:
   *      summary: View settings .
   *      tags: [Settings]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The settings settings.
   *      responses:
   *        200:
   *          description: settings available.
   *          content:
   *            application/json:
   *                    schema:
   *                          $ref: "#/components/schema/settings-view"
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
  // SETTINGS END
}
