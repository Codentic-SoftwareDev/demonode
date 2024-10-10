module.exports = () => {
  // USER START
  /**
   * @swagger
   * components:
   *  schema:
   *    admin-add:
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
   *        message: Admin added successfully.
   *        data:
   *          id: 123456789012345678901234
   *          first_name: ABC
   *          last_name: XYZ
   *          phone: 1234567890
   *          email: abcxyz@gmail.com
   *          password: Admin123
   *          role: Admin
   *          role_id: 2
   *          status: true
   *    admin-list:
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
   *        message: Admin list found
   *        data:
   *          id: 123456798012345678901234
   *          first_name: harsh
   *          last_name: patel
   *          email: abc123@gmail.com
   *          phone: 1234567890
   *          password: abc@123
   *          role: Admin
   *          role_id: 2
   *          status: true
   *    admin-delete:
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
   *        message: Admin deleted Successfully
   *        data: {}
   *    admin-update:
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
   *        message: Admin updated successfully.
   *        data:
   *          id: 1245678901234578901234
   *          first_name: Hello
   *          last_name: World
   *          phone: 1234567890
   *          email: hw123@gmail.com
   *          password: hw@3456
   *          role: Admin
   *          role_id: 2
   *          status: true
   *    admin-view:
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
   *        message: Admin available.
   *        data:
   *          id: 1245789012345678901234
   *          first_name: Hello
   *          last_name: World
   *          phone: 1234567890
   *          email: hw123@gmail.com
   *          password: hw@3456
   *          role: Admin
   *          role_id: 2
   *          status: true
   *    admin-update-password:
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
   *        message: Admin updated successfully.
   *        data:
   *          password: hw@3456
   *    admin-status-update:
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
   *        message: Admin updated successfully.
   *        data:
   *          id: 1245789012345678901234
   *          first_name: Hello
   *          last_name: World
   *          phone: 1234567890
   *          email: hw123@gmail.com
   *          password: hw@3456
   *          role: Admin
   *          role_id: 2
   *          status: true
   */
  /**
   * @swagger
   * /api/admin:
   *    post:
   *      summary: Add Admin detail.
   *      tags: [Admin]
   *      security:
   *        - bearerAuth: []
   *      requestBody:
   *        requires: true
   *        content:
   *         application/json:
   *            schema:
   *              type: object
   *              properties:
   *                first_name:
   *                  type: string
   *                  description: The first name of the person .
   *                last_name:
   *                  type: string
   *                  description: The last name of the person .
   *                phone:
   *                  type: number
   *                  description: The phone of the person .
   *                email:
   *                  type: string
   *                  description: The email of the person .
   *                password:
   *                  type: string
   *                  description: The admin password.
   *                role:
   *                  type: string
   *                  description: Admin Role
   *                role_id:
   *                  type: number
   *                  description: Admin Role id
   *              example:
   *                first_name: ABC
   *                last_name: XYZ
   *                email: abcxyz@gmail.com
   *                phone: 1234567890
   *                password: Admin@123
   *                role: Admin
   *                role_id: 2
   *      responses:
   *        201:
   *          description: Admin added successfully.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/admin-add"
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
   * /api/admin:
   *    get:
   *      summary: Admin List.
   *      tags: [Admin]
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
   *                $ref: "#/components/schema/admin-list"
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
   * /api/admin/{id}:
   *    delete:
   *      summary: Delete admin by id.
   *      tags: [Admin]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The admin id.
   *      responses:
   *        200:
   *          description: The admin delete.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/admin-delete"
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: Error! Admin not deleted
   */
  /**
   * @swagger
   * /api/admin/{id}:
   *    put:
   *      summary: Update admin by id.
   *      tags: [Admin]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The admin id.
   *      requestBody:
   *       requires: true
   *       content:
   *        application/json:
   *           schema:
   *             type: object
   *             properties:
   *                first_name:
   *                  type: string
   *                  description: The first name of the person .
   *                last_name:
   *                  type: string
   *                  description: The last name of the person .
   *                phone:
   *                  type: number
   *                  description: The phone of the person .
   *                email:
   *                  type: string
   *                  description: The email of the person .
   *                password:
   *                  type: string
   *                  description: The admin password.
   *                role:
   *                  type: string
   *                  description: Admin Role
   *                role_id:
   *                  type: string
   *                  description: Admin Role
   *           example:
   *                  first_name: Harsh
   *                  last_name: Patel
   *                  phone: 89756754534
   *                  email: hello123@gmail.com
   *                  password: ytrertgfhgbdrtyuhWRtfkkTFGODFK
   *                  role: Admin
   *                  role_id: 1
   *      responses:
   *        201:
   *          description: The admin update.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/admin-update"
   *        202:
   *          description: Request accepted but processing not completed.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: true
   *                  statusCode: 204
   *                  data: {}
   *                  message: Error! admin not found
   *        406:
   *          description: Not Acceptable.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 406
   *                  data: {}
   *                  message: admin not updated
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: Error! admin not found
   */
  /**
   * @swagger
   *  /api/admin/{id}:
   *    get:
   *      summary: View Admin .
   *      tags: [Admin]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The admin admin.
   *      responses:
   *        200:
   *          description: Admin available.
   *          content:
   *            application/json:
   *                    schema:
   *                          $ref: "#/components/schema/admin-view"
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
  /**
   * @swagger
   * /api/admin/{id}:
   *    patch:
   *      summary: Update admin by id.
   *      tags: [Admin]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The admin id.
   *      requestBody:
   *       requires: true
   *       content:
   *        application/json:
   *           schema:
   *             type: object
   *             properties:
   *                password:
   *                  type: string
   *                  description: The admin password.
   *                role:
   *                  type: string
   *                  description: Admin Role
   *           example:
   *                  password: user@1234
   *      responses:
   *        201:
   *          description: The admin update.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/admin-update-password"
   *        202:
   *          description: Request accepted but processing not completed.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: true
   *                  statusCode: 204
   *                  data: {}
   *                  message: Error! admin not found
   *        406:
   *          description: Not Acceptable.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 406
   *                  data: {}
   *                  message: admin not updated
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: Error! admin not found
   */
  /**
   * @swagger
   * /api/status-update/{id}:
   *    patch:
   *      summary: Update status of admin by id.
   *      tags: [Admin]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The admin id.
   *      requestBody:
   *       requires: true
   *       content:
   *        application/json:
   *           schema:
   *             type: object
   *             properties:
   *                status:
   *                  type: boolean
   *                  description: The status of admin.
   *           example:
   *                  status: true
   *      responses:
   *        201:
   *          description: The admin update.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/admin-update-password"
   *        202:
   *          description: Request accepted but processing not completed.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: true
   *                  statusCode: 204
   *                  data: {}
   *                  message: Error! admin not found
   *        406:
   *          description: Not Acceptable.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 406
   *                  data: {}
   *                  message: admin not updated
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: Error! admin not found
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
  // USER END
}
