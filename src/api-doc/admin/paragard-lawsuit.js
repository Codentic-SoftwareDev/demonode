module.exports = () => {
  // PARAGARD START
  /**
   * @swagger
   * components:
   *  schema:
   *    paragard-lawsuit-list:
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
   *          first_name: first name
   *          last_name: last name
   *          dob: 2023-12-12
   *          email: email123@gmail.com
   *          phone: 1234567890
   *          address: address
   *          city: city
   *          zip: 123456
   *          message: message
   *          are_you_concerned_about_an_injury_from_a_paragard_IUD_device_implant: true
   *          is_the_injured_individual_you_or_a_loved_one: false
   *          what_date_was_the_paragard_IUD_implanted: 2023-12-12
   *          was_there_any_other_complications_when_the_IUD_broke: No Complications
   *          was_surgery_required_to_remove_the_paragard_IUD: Yes
   *          have_you_or_your_loved_one_ever_signed_any_documents_retainers_or_agreements_with_an_attorney_or_a_law_firm_about_this_before: false
   *          agree_t_and_c: false
   *          ip_address: 255.255.255.255
   *    paragard-lawsuit-view:
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
   *        message: paragard view successfully
   *        data:
   *          id: 123456789012345678901234
   *          first_name: first name
   *          last_name: last name
   *          dob: 2023-12-12
   *          email: email123@gmail.com
   *          phone: 1234567890
   *          address: address
   *          city: city
   *          zip: 123456
   *          message: message
   *          are_you_concerned_about_an_injury_from_a_paragard_IUD_device_implant: true
   *          is_the_injured_individual_you_or_a_loved_one: false
   *          what_date_was_the_paragard_IUD_implanted: 2023-12-12
   *          was_there_any_other_complications_when_the_IUD_broke: No Complications
   *          was_surgery_required_to_remove_the_paragard_IUD: Yes
   *          have_you_or_your_loved_one_ever_signed_any_documents_retainers_or_agreements_with_an_attorney_or_a_law_firm_about_this_before: false
   *          agree_t_and_c: false
   *          ip_address: 255.255.255.255
   *    paragard-lawsuit-delete:
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
   *        message: paragard deleted Successfully.
   *    paragard-lawsuit-export:
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
   *          "public/upload/paragard-lawsuit-excel-file/paragard-lawsuit-2186791772.csv"
   */
  /**
   * @swagger
   * /api/paragard-lawsuit:
   *    get:
   *      summary: paragard lawsuit List.
   *      tags: [paragard lawsuit]
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
   *                $ref: "#/components/schema/paragard-lawsuit-list"
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
   *  /api/paragard-lawsuit/{id}:
   *    get:
   *      summary: View paragard detail by id.
   *      tags: [paragard lawsuit]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The paragard lawsuit id.
   *      responses:
   *        200:
   *          description: Data view successfully.
   *          content:
   *            application/json:
   *                    schema:
   *                          $ref: "#/components/schema/paragard-view"
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
   * /api/paragard-lawsuit/{id}:
   *    delete:
   *      summary: Delete paragard lawsuit by id.
   *      tags: [paragard lawsuit]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The paragard lawsuit by id.
   *      responses:
   *        200:
   *          description: The paragard lawsuit delete.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/paragard-lawsuit-delete"
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: Error! paragard lawsuit not deleted
   */
  /**
   * @swagger
   * /api/paragard-lawsuit-export:
   *    get:
   *      summary: paragard lawsuit data export with .csv file.
   *      tags: [paragard lawsuit]
   *      security:
   *        - bearerAuth: []
   *      responses:
   *        200:
   *          description: File generate of paragard lawsuit data
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/paragard-lawsuit-export"
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
  // paragard END
}
