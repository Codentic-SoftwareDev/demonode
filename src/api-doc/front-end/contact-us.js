module.exports = () => {
  // CONTACT US START
  /**
   * @swagger
   * components:
   *  schema:
   *    contact-us-add:
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
   *        message: free case evolution added.
   *        data:
   *          id: 123456789012345678901234
   *          name: name
   *          email: email123@gmail.com
   *          subject: subject
   *          message: message
   *          ip_address: 255.255.255
   */
  /**
   * @swagger
   * /api/contact-us:
   *    post:
   *      summary: Add contact us detail.
   *      tags: [Contact us]
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
   *                email:
   *                  type: string
   *                  description: The email of the person .
   *                subject:
   *                  type: subject
   *                  description: The subject of the issue .
   *                message:
   *                  type: string
   *                  description: The message of the issue .
   *                ip_address:
   *                  type: string
   *                  description: the ip address of current user .
   *              example:
   *                name: name
   *                email: email123@gmail.com
   *                subject: subject
   *                message: message
   *                ip_address: 255.255.255.255
   *      responses:
   *        201:
   *          description: Your data has been added successfully.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/contact-us-add"
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
  // CONTACT US END
}
