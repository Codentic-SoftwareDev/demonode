module.exports = () => {
  // ROUNDUP KILLER START
  /**
   * @swagger
   * components:
   *  schema:
   *    roundup-killer-list:
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
   *          dob: 2022-12-20
   *          email: email123@gmail.com
   *          phone: 1234567890
   *          address: address
   *          state: state
   *          city: city
   *          zip: 123456
   *          message: message
   *          state_roundup_used: true
   *          where_were_you_exposed_to_Roundup: Home
   *          were_you_or_a_loved_one_diagnosed_with_Non_Hodgkin_Lymphoma: true
   *          have_you_ever_had_an_organ_transplant_that_required_immunosup_pressant_medication_prior_to_NHL_diagnosis: true
   *          have_you_ever_been_diagnosed_with_an_Autoimmune_disorder: true
   *          have_you_ever_been_diagnosed_with_a_viral_infection: true
   *          agree_t_and_c: false
   *          ip_address: 255.255.255.255
   *    roundup-killer-view:
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
   *        message: roundup killer view successfully
   *        data:
   *          id: 123456789012345678901234
   *          first_name: first name
   *          last_name: last name
   *          dob: 2022-12-20
   *          email: email123@gmail.com
   *          phone: 1234567890
   *          address: address
   *          state: state
   *          city: city
   *          zip: 123456
   *          message: message
   *          state_roundup_used: true
   *          where_were_you_exposed_to_Roundup: Home
   *          were_you_or_a_loved_one_diagnosed_with_Non_Hodgkin_Lymphoma: true
   *          have_you_ever_had_an_organ_transplant_that_required_immunosup_pressant_medication_prior_to_NHL_diagnosis: true
   *          have_you_ever_been_diagnosed_with_an_Autoimmune_disorder: true
   *          have_you_ever_been_diagnosed_with_a_viral_infection: true
   *          agree_t_and_c: false
   *          ip_address: 255.255.255.255
   *    roundup-killer-delete:
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
   *        message: roundup killer deleted Successfully.
   */
  /**
   * @swagger
   * /api/roundup-killer:
   *    get:
   *      summary: List roundup killer .
   *      tags: [Roundup killer]
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
   *                $ref: "#/components/schema/roundup-killer-list"
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
   *  /api/roundup-killer/{id}:
   *    get:
   *      summary: View roundup killer detail by id.
   *      tags: [Roundup killer]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The roundup killer lawsuit id.
   *      responses:
   *        200:
   *          description: Data view successfully.
   *          content:
   *            application/json:
   *                    schema:
   *                          $ref: "#/components/schema/roundup-killer-view"
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
   * /api/roundup-killer/{id}:
   *    delete:
   *      summary: Delete roundup killer lawsuit by id.
   *      tags: [Roundup killer]
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
   *                $ref: "#/components/schema/roundup-killer-delete"
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: Error! roundup killer not deleted
   */
  // ROUNDUP KILLER END
}
