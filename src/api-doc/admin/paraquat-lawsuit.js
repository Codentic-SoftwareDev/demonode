module.exports = () => {
  // PARAQUAT START
  /**
   * @swagger
   * components:
   *  schema:
   *    paraquat-lawsuit-list:
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
   *          you_or_your_loved_one_used_paraquat_before: true
   *          you_or_a_loved_one_diagnosed_with_Cancer: true
   *          agree_t_and_c: false
   *          ip_address: 255.255.255.255
   *    paraquat-lawsuit-view:
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
   *        message: paraquat view successfully
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
   *          you_or_your_loved_one_used_paraquat_before: true
   *          you_or_a_loved_one_diagnosed_with_Cancer: true
   *          agree_t_and_c: false
   *          ip_address: 255.255.255.255
   *    paraquat-lawsuit-delete:
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
   *        message: paraquat deleted Successfully.
   *    paraquat-lawsuit-export:
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
   *          "public/upload/paraquat-lawsuit-excel-file/paraquat-lawsuit-2186791772.csv"
   */
  /**
   * @swagger
   * /api/paraquat-lawsuit:
   *    get:
   *      summary: List paraquat lawsuit.
   *      tags: [Paraquat lawsuit]
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
   *                $ref: "#/components/schema/paraquat-list"
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
   *  /api/paraquat-lawsuit/{id}:
   *    get:
   *      summary: View paraquat lawsuit detail by id.
   *      tags: [Paraquat lawsuit]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The paraquat lawsuit id.
   *      responses:
   *        200:
   *          description: Data view successfully.
   *          content:
   *            application/json:
   *                    schema:
   *                          $ref: "#/components/schema/paraquat-view"
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
   * /api/paraquat-lawsuit/{id}:
   *    delete:
   *      summary: Delete paraquat lawsuit by id.
   *      tags: [Paraquat lawsuit]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The paraquat lawsuit by id.
   *      responses:
   *        200:
   *          description: The paraquat lawsuit delete.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/paraquat-lawsuit-delete"
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: Error! paraquat lawsuit not deleted
   */
  /**
   * @swagger
   * /api/paraquat-lawsuit-export:
   *    get:
   *      summary: paraquat lawsuit data export with .csv file.
   *      tags: [Paraquat lawsuit]
   *      security:
   *        - bearerAuth: []
   *      responses:
   *        200:
   *          description: File generate of paraquat lawsuit data
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/paraquat-lawsuit-export"
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
  // PARAQUAT END
}
