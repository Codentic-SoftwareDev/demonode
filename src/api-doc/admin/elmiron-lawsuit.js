module.exports = () => {
  // ELMIRON LAWSUIT START
  /**
   * @swagger
   * components:
   *  schema:
   *    elmiron-lawsuit-list:
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
   *          is_the_injured_individual_you_or_a_loved_one: Myself
   *          concerned_about_an_injury_or_a_diagnosis_that_you_believe_resulted_from_taking_Elmiron: false
   *          have_any_of_these_diagnoses_occurred_from_taking_Elmiron: No Diagnosis
   *          have_any_of_these_symptoms_occurred_from_taking_Elmiron: No symptoms
   *          the_year_that_the_eye_symptom_or_diagnosis_was_first_discovered: 2023-12-12
   *          the_year_when_the_Elmiron_medication_was_started: 2023-12-12
   *          the_year_when_the_Elmiron_medication_was_stopped: 2023-12-12
   *          is_the_medication_currently_being_taken: false
   *          have_you_or_your_loved_one_ever_signed_any_documents_retainers_or_agreements_with_an_attorney_or_a_law_firm_about_this_before: false
   *          agree_t_and_c: false
   *          ip_address: 255.255.255.255
   *    elmiron-lawsuit-view:
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
   *        message: elmiron view successfully
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
   *          is_the_injured_individual_you_or_a_loved_one: Myself
   *          concerned_about_an_injury_or_a_diagnosis_that_you_believe_resulted_from_taking_Elmiron: false
   *          have_any_of_these_diagnoses_occurred_from_taking_Elmiron: No Diagnosis
   *          have_any_of_these_symptoms_occurred_from_taking_Elmiron: No symptoms
   *          the_year_that_the_eye_symptom_or_diagnosis_was_first_discovered: 2023-12-12
   *          the_year_when_the_Elmiron_medication_was_started: 2023-12-12
   *          the_year_when_the_Elmiron_medication_was_stopped: 2023-12-12
   *          is_the_medication_currently_being_taken: false
   *          have_you_or_your_loved_one_ever_signed_any_documents_retainers_or_agreements_with_an_attorney_or_a_law_firm_about_this_before: false
   *          agree_t_and_c: false
   *          ip_address: 255.255.255.255
   *    elmiron-lawsuit-delete:
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
   *        message: elmiron deleted Successfully.
   *    elmiron-lawsuit-export:
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
   *          "public/upload/elmiron-lawsuit-excel-file/elmiron-lawsuit-2186791772.csv"
   */
  /**
   * @swagger
   * /api/elmiron-lawsuit:
   *    get:
   *      summary: List elmiron lawsuit.
   *      tags: [Elmiron lawsuit]
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
   *                $ref: "#/components/schema/elmiron-lawsuit-list"
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
   *  /api/elmiron-lawsuit/{id}:
   *    get:
   *      summary: View elmiron detail by id.
   *      tags: [Elmiron lawsuit]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The elmiron lawsuit id.
   *      responses:
   *        200:
   *          description: Data view successfully.
   *          content:
   *            application/json:
   *                    schema:
   *                          $ref: "#/components/schema/elmiron-lawsuit-view"
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
   * /api/elmiron-lawsuit/{id}:
   *    delete:
   *      summary: Delete elmiron lawsuit by id.
   *      tags: [Elmiron lawsuit]
   *      security:
   *        - bearerAuth: []
   *      parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *            required: true
   *            description: The elmiron lawsuit id.
   *      responses:
   *        200:
   *          description: The elmiron lawsuit delete.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/elmiron-lawsuit-delete"
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: Error! elmiron lawsuit not deleted
   */
  /**
   * @swagger
   * /api/elmiron-lawsuit-export:
   *    get:
   *      summary: elmiron lawsuit data export with .csv file.
   *      tags: [Elmiron lawsuit]
   *      security:
   *        - bearerAuth: []
   *      responses:
   *        200:
   *          description: File generate of contact us data
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/elmiron-lawsuit-export"
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
  // ELMIRON LAWSUIT END
}
