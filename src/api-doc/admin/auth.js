module.exports = () => {
  // AUTH START
  /**
   * @swagger
   * components:
   *  schema:
   *    login:
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
   *        statusCode: 200
   *        data:
   *            email: super@gmail.com
   *            token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVyQGdtYWlsLmNvbSIsImlhdCI6MTY2NDk1NDMzNCwiZXhwIjoxNjY1MDQwNzM0fQ.rHpnBA_MV89Cne24wCVLy70xLmPa0yED0z-iTk5n7so
   *            u_id: DCS1000001
   *        message: Login successfully.
   *    logout:
   *      type: object
   *      properties:
   *        status:
   *          type: string
   *          description: The status of the request.
   *        statusCode:
   *          type: string
   *          description: The status code
   *        data:
   *          type: object
   *          properties:
   *        message:
   *          type: string
   *          description: A feedback message of the request.
   *      example:
   *        status: SUCCESS
   *        statusCode: 200
   *        data: {}
   *        message: Logout successfully
   *    verifyToken:
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
   *        statusCode: 200
   *        data:
   *            token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVyQGdtYWlsLmNvbSIsImlhdCI6MTY2NDk1NDMzNCwiZXhwIjoxNjY1MDQwNzM0fQ.rHpnBA_MV89Cne24wCVLy70xLmPa0yED0z-iTk5n7so
   *        message: token verified successfully.
   */
  /**
   * @swagger
   * /api/logout:
   *    get:
   *      summary: logout admin.
   *      tags: [Auth]
   *      responses:
   *        200:
   *          description: The logout.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/logout"
   */
  /**
   * @swagger
   * /api/login:
   *    post:
   *      summary: Login.
   *      tags: [Auth]
   *      requestBody:
   *        requires: true
   *        content:
   *         application/json:
   *            schema:
   *              type: object
   *              properties:
   *                email:
   *                  type: string
   *                  description: The email of the user.
   *                password:
   *                  type: string
   *                  description: The password of the user.
   *              example:
   *                  email: super@gmail.com
   *                  password: Super@123
   *      responses:
   *        200:
   *          description: The login successfully.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/login"
   *        400:
   *          description: Bad Request.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 401
   *                  data: {}
   *                  message: Body can not be empty!
   *        404:
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 404
   *                  data: {}
   *                  message: No user available
   *        406:
   *          description: Not Acceptable.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 406
   *                  data: {}
   *                  message: Body can not be empty! || Invalid credentials
   */
  /**
   * @swagger
   *  /api/verify-token:
   *    get:
   *      summary: Verify JWT token.
   *      tags: [Auth]
   *      security:
   *        - bearerAuth: []
   *      responses:
   *        200:
   *          description: Check the generated token is valid or not
   *          content:
   *            application/json:
   *                    schema:
   *                          $ref: "#/components/schema/verifyToken"
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
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: Token not match
   */
  // AUTH END
}
