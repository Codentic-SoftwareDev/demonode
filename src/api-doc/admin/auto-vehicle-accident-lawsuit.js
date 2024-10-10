module.exports = () => {
  // AUTO VEHICLE ACCIDENT LAWSUIT START
  /**
   * @swagger
   * components:
   *  schema:
   *    auto-vehicle-accident-lawsuit-list:
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
   *          was_the_accident_in_the_last_1_years: true
   *          did_you_report_the_accident_to_the_police: true
   *          did_you_seek_medical_attention: true
   *          do_you_have_ongoing_medical_needs: true
   *          agree_t_and_c: false
   *          ip_address: 255.255.255.255
   *    auto-vehicle-accident-lawsuit-view:
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
   *        message: auto-vehicle-accident-lawsuit view successfully
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
   *          was_the_accident_in_the_last_1_years: true
   *          did_you_report_the_accident_to_the_police: true
   *          did_you_seek_medical_attention: true
   *          do_you_have_ongoing_medical_needs: true
   *          agree_t_and_c: false
   *          ip_address: 255.255.255.255
   *    auto-vehicle-accident-lawsuit-delete:
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
   *        message: auto vehicle accident lawsuit deleted Successfully.
   *    auto-vehicle-accident-lawsuit-export:
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
   *          "public/upload/auto-vehicle-accident-lawsuit-excel-file/auto-vehicle-accident-lawsuit-2186791772.csv"
   */
  /**
   * @swagger
   * /api/auto-vehicle-accident-lawsuit:
   *    get:
   *      summary: List auto vehicle accident lawsuit .
   *      tags: [Auto vehicle accident lawsuit]
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
   *                $ref: "#/components/schema/auto-vehicle-accident-lawsuit-list"
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
   *  /api/auto-vehicle-accident-lawsuit/{id}:
   *    get:
   *      summary: View auto-vehicle-accident-lawsuit detail by id.
   *      tags: [Auto vehicle accident lawsuit]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The auto-vehicle-accident-lawsuit lawsuit id.
   *      responses:
   *        200:
   *          description: Data view successfully.
   *          content:
   *            application/json:
   *                    schema:
   *                          $ref: "#/components/schema/auto-vehicle-accident-lawsuit-view"
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
   * /api/auto-vehicle-accident-lawsuit/{id}:
   *    delete:
   *      summary: Delete auto vehicle accident lawsuit by id.
   *      tags: [Auto vehicle accident lawsuit]
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
   *                $ref: "#/components/schema/auto-vehicle-accident-lawsuit-delete"
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: Error! auto vehicle accident lawsuit not deleted
   */
  /**
   * @swagger
   * /api/auto-vehicle-accident-lawsuit-export:
   *    get:
   *      summary: Auto vehicle accident lawsuit data export with .csv file.
   *      tags: [Auto vehicle accident lawsuit]
   *      security:
   *        - bearerAuth: []
   *      responses:
   *        200:
   *          description: File generate of contact us data
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/auto-vehicle-accident-lawsuit-export"
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
  // AUTO VEHICLE ACCIDENT LAWSUITs END
}
