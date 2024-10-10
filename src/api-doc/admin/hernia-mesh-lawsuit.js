module.exports = () => {
  // HERNIA MESH START
  /**
   * @swagger
   * components:
   *  schema:
   *    hernia-mesh-lawsuit-list:
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
   *          you_or_your_loved_one_used_hernia-mesh_before: true
   *          you_or_a_loved_one_diagnosed_with_Cancer: true
   *          agree_t_and_c: false
   *          ip_address: 255.255.255.255
   *    hernia-mesh-lawsuit-view:
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
   *        message: hernia-mesh view successfully
   *        data:
   *          id: 123456789012345678901234
   *          first_name: first name
   *          last_name: last name
   *          dob: 2022-12-12
   *          email: email123@gmail.com
   *          phone: 1234567890
   *          address: address
   *          city: city
   *          zip: 123456
   *          message: message
   *          do_you_have_an_attorney_working_on_the_case: true
   *          agree_t_and_c: false
   *          ip_address: 255.255.255.255
   *    hernia-mesh-lawsuit-delete:
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
   *        message: hernia-mesh deleted Successfully.
   *    hernia-mesh-lawsuit-export:
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
   *          "public/upload/hernia-mesh-lawsuit-excel-file/hernia-mesh-lawsuit-2186791772.csv"
   */
  /**
   * @swagger
   * /api/hernia-mesh-lawsuit:
   *    get:
   *      summary: List hernia-mesh .
   *      tags: [Hernia mesh lawsuit]
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
   *                $ref: "#/components/schema/hernia-mesh-lawsuit-list"
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
   *  /api/hernia-mesh-lawsuit/{id}:
   *    get:
   *      summary: View hernia-mesh detail by id.
   *      tags: [Hernia mesh lawsuit]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The hernia mesh lawsuit by id.
   *      responses:
   *        200:
   *          description: Data view successfully.
   *          content:
   *            application/json:
   *                    schema:
   *                          $ref: "#/components/schema/hernia-mesh-lawsuit-view"
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
   * /api/hernia-mesh-lawsuit/{id}:
   *    delete:
   *      summary: Delete hernia mesh lawsuit by id.
   *      tags: [Hernia mesh lawsuit]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The hernia mesh lawsuit by id.
   *      responses:
   *        200:
   *          description: The hernia mesh lawsuit delete.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/hernia-mesh-lawsuit-lawsuit-delete"
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: Error! hernia mesh lawsuit not deleted
   */
  /**
   * @swagger
   * /api/hernia-mesh-lawsuit-export:
   *    get:
   *      summary: hernia mesh lawsuit data export with .csv file.
   *      tags: [Hernia mesh lawsuit]
   *      security:
   *        - bearerAuth: []
   *      responses:
   *        200:
   *          description: File generate of contact us data
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/hernia-mesh-lawsuit-export"
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
  // hernia-mesh END
}
