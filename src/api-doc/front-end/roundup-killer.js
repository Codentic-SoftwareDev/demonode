module.exports = () => {
  // ROUNDUP KILLER START
  /**
   * @swagger
   * components:
   *  schema:
   *    roundup-killer-add:
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
   *        message: roundup killer list found.
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
   */
  /**
   * @swagger
   * /api/roundup-killer:
   *    post:
   *      summary: Add roundup-killer detail.
   *      tags: [Roundup killer]
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
   *                  type: date
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
   *                state_roundup_used:
   *                  type: boolean
   *                  description: state roundup used of person .
   *                where_were_you_exposed_to_Roundup:
   *                  type: enum
   *                  description: where were you exposed to Roundup of person .
   *                were_you_or_a_loved_one_diagnosed_with_Non_Hodgkin_Lymphoma:
   *                  type: boolean
   *                  description: were you or a loved one diagnosed with Non Hodgkin Lymphoma of person .
   *                have_you_ever_had_an_organ_transplant_that_required_immunosup_pressant_medication_prior_to_NHL_diagnosis:
   *                  type: boolean
   *                  description: have you ever had an organ transplant that required immunosup pressant medication prior to NHL diagnosis of person .
   *                have_you_ever_been_diagnosed_with_an_Autoimmune_disorder:
   *                  type: boolean
   *                  description: have you ever been diagnosed with an Autoimmune disorder of person .
   *                have_you_ever_been_diagnosed_with_a_viral_infection:
   *                  type: boolean
   *                  description: have you ever been diagnosed with a viral infection of person .
   *                agree_t_and_c:
   *                  type: boolean
   *                  description: agree t&c of person .
   *                ip_address:
   *                  type: string
   *                  description: the ip address of user .
   *              example:
   *                first_name: first name
   *                last_name: last name
   *                dob: 2022-12-12
   *                email: email123@gmail.com
   *                phone: 1234567890
   *                address: address
   *                state: state
   *                city: city
   *                zip: 123456
   *                message: message
   *                state_roundup_used: true
   *                where_were_you_exposed_to_Roundup: Home
   *                were_you_or_a_loved_one_diagnosed_with_Non_Hodgkin_Lymphoma: true
   *                have_you_ever_had_an_organ_transplant_that_required_immunosup_pressant_medication_prior_to_NHL_diagnosis: true
   *                have_you_ever_been_diagnosed_with_an_Autoimmune_disorder: true
   *                have_you_ever_been_diagnosed_with_a_viral_infection: true
   *                agree_t_and_c: false
   *                ip_address: 255.255.255.255
   *      responses:
   *        201:
   *          description: Your data has been added successfully.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/roundup-killer-add"
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
  // ROUNDUP KILLER END
}
