module.exports = () => {
  // ELMIRON LAWSUIT START
  /**
   * @swagger
   * components:
   *  schema:
   *    elmiron-add:
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
   *        message: elmiron list found.
   *        data:
   *          id: 123456789012345678901234
   *          first_name: first name
   *          last_name: last name
   *          dob: 2023-12-12
   *          email: email123@gmail.com
   *          phone: 1234567890
   *          address: address
   *          state: state
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
   */
  /**
   * @swagger
   * /api/elmiron-lawsuit:
   *    post:
   *      summary: Add elmiron detail.
   *      tags: [Elmiron lawsuit]
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
   *                last_name:
   *                  type: string
   *                  description: The last name of the person .
   *                dob:
   *                  type: string
   *                  description: The date of birth of the person .
   *                email:
   *                  type: string
   *                  description: The email of the person .
   *                phone:
   *                  type: string
   *                  description: The phone of the person .
   *                address:
   *                  type: string
   *                  description: The address of the person .
   *                state:
   *                  type: string
   *                  description: The state of the person .
   *                city:
   *                  type: string
   *                  description: The city of the person .
   *                zip:
   *                  type: string
   *                  description: Zip of person's city .
   *                message:
   *                  type: string
   *                  description: message of person .
   *                is_the_injured_individual_you_or_a_loved_one:
   *                  type: string
   *                  description: is the injured individual you or a loved one of person .
   *                concerned_about_an_injury_or_a_diagnosis_that_you_believe_resulted_from_taking_Elmiron:
   *                  type: string
   *                  description: concerned about an injury or a diagnosis that you believe resulted from taking Elmiron of person .
   *                have_any_of_these_diagnoses_occurred_from_taking_Elmiron:
   *                  type: string
   *                  description: have any of these diagnoses occurred from taking Elmiron of person .
   *                have_any_of_these_symptoms_occurred_from_taking_Elmiron:
   *                  type: string
   *                  description: have any of these symptoms occurred from taking Elmiron of person .
   *                the_year_that_the_eye_symptom_or_diagnosis_was_first_discovered:
   *                  type: date
   *                  description: the year that the eye symptom or diagnosis was first discovered of person .
   *                the_year_when_the_Elmiron_medication_was_started:
   *                  type: date
   *                  description: the year when the Elmiron medication was started of person .
   *                the_year_when_the_Elmiron_medication_was_stopped:
   *                  type: date
   *                  description: the year when the Elmiron medication was stopped of person .
   *                is_the_medication_currently_being_taken:
   *                  type: string
   *                  description: is the medication currently being taken by person .
   *                have_you_or_your_loved_one_ever_signed_any_documents_retainers_or_agreements_with_an_attorney_or_a_law_firm_about_this_before:
   *                  type: string
   *                  description: have you or your loved one ever signed any documents retainers or agreements with an attorney or a law firm about this before of person .
   *                agree_t_and_c:
   *                  type: boolean
   *                  description: agree t&c of person .
   *                ip_address:
   *                  type: string
   *                  description: the ip address of current user .
   *              example:
   *                first_name: first name
   *                last_name: last name
   *                dob: 2023-12-12
   *                email: email123@gmail.com
   *                phone: 1234567890
   *                address: address
   *                state: state
   *                city: city
   *                zip: 123456
   *                message: message
   *                is_the_injured_individual_you_or_a_loved_one: Myself
   *                concerned_about_an_injury_or_a_diagnosis_that_you_believe_resulted_from_taking_Elmiron: false
   *                have_any_of_these_diagnoses_occurred_from_taking_Elmiron: No Diagnosis
   *                have_any_of_these_symptoms_occurred_from_taking_Elmiron: No symptoms
   *                the_year_that_the_eye_symptom_or_diagnosis_was_first_discovered: 2023-12-12
   *                the_year_when_the_Elmiron_medication_was_started: 2023-12-12
   *                the_year_when_the_Elmiron_medication_was_stopped: 2023-12-12
   *                is_the_medication_currently_being_taken: false
   *                have_you_or_your_loved_one_ever_signed_any_documents_retainers_or_agreements_with_an_attorney_or_a_law_firm_about_this_before: false
   *                agree_t_and_c: false
   *                ip_address: 255.255.255.255
   *      responses:
   *        201:
   *          description: Your data has been added successfully.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/elmiron-add"
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
  // ELMIRON LAWSUIT END
}
