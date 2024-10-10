module.exports = () => {
  // BABY FORMULA LAWSUIT START
  /**
   * @swagger
   * components:
   *  schema:
   *    baby-formula-lawsuit-list:
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
   *          chid_dob: 2300-12-12
   *          was_the_child_was_born_premature: true
   *          was_the_child_given_formula_or_milk_fortifier: yes
   *          was_the_child_diagnosed_with_nec: yes
   *          did_the_child_experience_any_of_the_following: yes
   *          agree_t_and_c: false
   *          ip_address: 255.255.255.255
   *    baby-formula-lawsuit-view:
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
   *        message: baby formula lawsuit view successfully
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
   *          chid_dob: 2300-12-12
   *          was_the_child_was_born_premature: true
   *          was_the_child_given_formula_or_milk_fortifier: yes
   *          was_the_child_diagnosed_with_nec: yes
   *          did_the_child_experience_any_of_the_following: yes
   *          agree_t_and_c: false
   *          ip_address: 255.255.255.255
   *    baby-formula-lawsuit-delete:
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
   *        message: baby formula lawsuit deleted Successfully.
   *    baby-formula-lawsuit-export:
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
   *          "public/upload/baby-formula-lawsuit-excel-file/baby-formula-lawsuit-2186791772.csv"
   */
  /**
   * @swagger
   * /api/baby-formula-lawsuit:
   *    get:
   *      summary: List baby formula lawsuit .
   *      tags: [Baby formula lawsuit]
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
   *                $ref: "#/components/schema/baby-formula-lawsuit-list"
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
   *  /api/baby-formula-lawsuit/{id}:
   *    get:
   *      summary: View baby formula lawsuit detail by id.
   *      tags: [Baby formula lawsuit]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The baby formula lawsuit id.
   *      responses:
   *        200:
   *          description: Data view successfully.
   *          content:
   *            application/json:
   *                    schema:
   *                          $ref: "#/components/schema/baby-formula-lawsuit-view"
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
   * /api/baby-formula-lawsuit/{id}:
   *    delete:
   *      summary: Delete baby formula lawsuit by id.
   *      tags: [Baby formula lawsuit]
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
   *          description: The delete baby formula lawsuit by delete.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/baby-formula-lawsuit-delete"
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: Error! baby formula lawsuit not deleted
   */
  /**
   * @swagger
   * /api/baby-formula-lawsuit-export:
   *    get:
   *      summary: baby formula lawsuit data export with .csv file.
   *      tags: [Baby formula lawsuit]
   *      security:
   *        - bearerAuth: []
   *      responses:
   *        200:
   *          description: File generate of baby formula lawsuit export data
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/baby-formula-lawsuit-export"
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
  // BABY FORMULA LAWSUIT END
}
