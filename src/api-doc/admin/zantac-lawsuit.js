module.exports = () => {
  // ZANTAC START
  /**
   * @swagger
   * components:
   *  schema:
   *    zantac-lawsuit-list:
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
   *          first_name: ABC
   *          last_name: XYZ
   *          dob: 2023-12-12
   *          email: abcxyz@gmail.com
   *          phone: 1234567890
   *          address: address
   *          city: city
   *          state: state
   *          zip: 000000
   *          message: message
   *          you_or_your_loved_one_used_Zantac_before: true
   *          you_or_a_loved_one_diagnosed_with_Cancer: true
   *          agree_t_and_c: false
   *          ip_address: 255.255.255.255
   *    zantac-lawsuit-view:
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
   *        message: zantac view successfully
   *        data:
   *          id: 123456789012345678901234
   *          first_name: ABC
   *          last_name: XYZ
   *          dob: 2023-12-12
   *          email: abcxyz@gmail.com
   *          phone: 1234567890
   *          address: address
   *          city: city
   *          state: state
   *          zip: 000000
   *          message: message
   *          you_or_your_loved_one_used_Zantac_before: true
   *          you_or_a_loved_one_diagnosed_with_Cancer: true
   *          agree_t_and_c: false
   *          ip_address: 255.255.255.255
   *    zantac-lawsuit-delete:
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
   *        message: zantac deleted Successfully.
   *    zantac-lawsuit-export:
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
   * /api/zantac-lawsuit:
   *    get:
   *      summary: zantac lawsuit List.
   *      tags: [Zantac lawsuit]
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
   *                $ref: "#/components/schema/zantac-lawsuit-list"
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
   *  /api/zantac-lawsuit/{id}:
   *    get:
   *      summary: View zantac detail by id.
   *      tags: [Zantac lawsuit]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The zantac lawsuit id.
   *      responses:
   *        200:
   *          description: Data view successfully.
   *          content:
   *            application/json:
   *                    schema:
   *                          $ref: "#/components/schema/zantac-view"
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
   * /api/zantac-lawsuit/{id}:
   *    delete:
   *      summary: Delete zantac lawsuit by id.
   *      tags: [Zantac lawsuit]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The zantac lawsuit by id.
   *      responses:
   *        200:
   *          description: The zantac lawsuit delete.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/zantac-lawsuit-delete"
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: Error! zantac lawsuit not deleted
   */
  /**
   * @swagger
   * /api/zantac-lawsuit-export:
   *    get:
   *      summary: zantac lawsuit data export with .csv file.
   *      tags: [Zantac lawsuit]
   *      security:
   *        - bearerAuth: []
   *      responses:
   *        200:
   *          description: File generate of zantac lawsuit data
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/zantac-lawsuit-export"
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
  // ZANTAC END
}
