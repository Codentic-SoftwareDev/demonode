module.exports = () => {
  // PHILIPS CPAP LAWSUIT START
  /**
   * @swagger
   * components:
   *  schema:
   *    philips-cpap-add:
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
   *        message: philips cpap list found.
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
   *          have_you_suffered_any_of_the_following_injuries_as_a_result_of_using_a_CPAP_BiPAP_or_ventilator_machine: true
   *          did_you_use_a_Philips_brand_machine: false
   *          did_you_seek_medical_treatment_for_your_injury: false
   *          agree_t_and_c: false
   *          ip_address: 255.255.255.255
   */
  /**
   * @swagger
   * /api/philips-cpap-lawsuit:
   *    post:
   *      summary: Add philips cpap detail.
   *      tags: [Philips cpap lawsuit]
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
   *                have_you_suffered_any_of_the_following_injuries_as_a_result_of_using_a_CPAP_BiPAP_or_ventilator_machine:
   *                  type: string
   *                  description: have_you_suffered_any_of_the_following_injuries_as_a_result_of_using_a_CPAP_BiPAP_or_ventilator_machine of person .
   *                did_you_use_a_Philips_brand_machine:
   *                  type: string
   *                  description: did_you_use_a_Philips_brand_machine of person .
   *                did_you_seek_medical_treatment_for_your_injury:
   *                  type: boolean
   *                  description: did_you_seek_medical_treatment_for_your_injury of person .
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
   *                state: gujrat
   *                city: city
   *                zip: 123456
   *                message: message
   *                have_you_suffered_any_of_the_following_injuries_as_a_result_of_using_a_CPAP_BiPAP_or_ventilator_machine: ["Liver, lung, or kidney cancer"]
   *                did_you_use_a_Philips_brand_machine: No
   *                did_you_seek_medical_treatment_for_your_injury: No
   *                agree_t_and_c: false
   *                ip_address: 255.255.255.255
   *      responses:
   *        201:
   *          description: Your data has been added successfully.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/philips-cpap-add"
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
  // philips-cpap LAWSUIT END
}
