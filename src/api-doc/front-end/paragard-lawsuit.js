module.exports = () => {
  // PARAGARD LAWSUIT START
  /**
   * @swagger
   * components:
   *  schema:
   *    paragard-add:
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
   *        message: paragard list found.
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
   */
  /**
   * @swagger
   * /api/paragard-lawsuit:
   *    post:
   *      summary: Add paragard detail.
   *      tags: [Paragard lawsuit]
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
   *                are_you_concerned_about_an_injury_from_a_paragard_IUD_device_implant:
   *                  type: string
   *                  description: are_you_concerned_about_an_injury_from_a_paragard_IUD_device_implant of person .
   *                is_the_injured_individual_you_or_a_loved_one:
   *                  type: string
   *                  description: is_the_injured_individual_you_or_a_loved_one of person .
   *                what_date_was_the_paragard_IUD_implanted:
   *                  type: boolean
   *                  description: what_date_was_the_Paragard_IUD_implanted of person .
   *                was_there_any_other_complications_when_the_IUD_broke:
   *                  type: boolean
   *                  description: was_there_any_other_complications_when_the_IUD_broke of person .
   *                was_surgery_required_to_remove_the_paragard_IUD:
   *                  type: boolean
   *                  description: was_surgery_required_to_remove_the_paragard_IUD of person .
   *                have_you_or_your_loved_one_ever_signed_any_documents_retainers_or_agreements_with_an_attorney_or_a_law_firm_about_this_before:
   *                  type: boolean
   *                  description: have_you_or_your_loved_one_ever_signed_any_documents_retainers_or_agreements_with_an_attorney_or_a_law_firm_about_this_before of person .
   *                agree_t_and_c:
   *                  type: boolean
   *                  description: agree_t_and_c of person .
   *                ip_address:
   *                  type: string
   *                  description: ip address of user .
   *              example:
   *                first_name: first name
   *                last_name: last name
   *                dob: 2023-12-12
   *                email: email123@gmail.com
   *                phone: 1234567890
   *                address: address
   *                city: city
   *                zip: 123456
   *                state: gujrat
   *                message: message
   *                are_you_concerned_about_an_injury_from_a_paragard_IUD_device_implant: true
   *                is_the_injured_individual_you_or_a_loved_one: false
   *                what_date_was_the_paragard_IUD_implanted: 2023-12-12
   *                was_there_any_other_complications_when_the_IUD_broke: No Complications
   *                was_surgery_required_to_remove_the_paragard_IUD: Yes
   *                have_you_or_your_loved_one_ever_signed_any_documents_retainers_or_agreements_with_an_attorney_or_a_law_firm_about_this_before: false
   *                agree_t_and_c: false
   *                ip_address: 255.255.255.255
   *      responses:
   *        201:
   *          description: Your data has been added successfully.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/paragard-add"
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
  // PARAGARD LAWSUIT END
}
