module.exports = () => {
  // FREE CASE EVOLUTION START
  /**
   * @swagger
   * components:
   *  schema:
   *    contact-us-list:
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
   *        message: list found.
   *        data:
   *          id: 123456789012345678901234
   *          name: name
   *          email: email123@gmail.com
   *          subject: subject
   *          message: message
   *          ip_address: 255.255.255
   *    contact-us-view:
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
   *        message: contact us view successfully
   *        data:
   *          id: 123456789012345678901234
   *          name: name
   *          email: email123@gmail.com
   *          subject: subject
   *          message: message
   *          ip_address: 255.255.255
   *    contact-us-delete:
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
   *        data: {}
   *        message: contact us Successfully.
   *    contact-us-export:
   *      type: object
   *      properties:
   *        status:
   *          type: string
   *          description: The status of the request.
   *        statusCode:
   *          type: string
   *          description: The status code
   *        data:
   *          type: string
   *          properties:
   *        message:
   *          type: string
   *          description: A feedback message of the request.
   *      example:
   *        status: SUCCESS
   *        statusCode: 201
   *        message: File generated successfully
   *        data:
   *          "public/upload/zantac-lawsuit-excel-file/zantac-lawsuit-2186791772.csv"
   */
  /**
   * @swagger
   * /api/contact-us:
   *    get:
   *      summary: List contact us .
   *      tags: [Contact us]
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
   *                $ref: "#/components/schema/contact-us-list"
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
   *  /api/contact-us/{id}:
   *    get:
   *      summary: View contact-us detail by id.
   *      tags: [Contact us]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The contact us by id.
   *      responses:
   *        200:
   *          description: Data view successfully.
   *          content:
   *            application/json:
   *                    schema:
   *                          $ref: "#/components/schema/contact-us-view"
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
   * /api/contact-us/{id}:
   *    delete:
   *      summary: Delete contact us by id.
   *      tags: [Contact us]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: contact us by id.
   *      responses:
   *        200:
   *          description: The contact us delete.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/contact-us-delete"
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: Error! data not deleted
   */
  /**
   * @swagger
   * /api/contact-us-export:
   *    get:
   *      summary: contact us data export with .csv file.
   *      tags: [Contact us]
   *      security:
   *        - bearerAuth: []
   *      responses:
   *        200:
   *          description: File generate of contact us data
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/contact-us-export"
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: Error file not generated
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
  // FREE CASE EVOLUTION END
}
