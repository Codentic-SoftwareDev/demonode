module.exports = () => {
  // AUTO VEHICLE ACCIDENT LAWSUIT START
  /**
   * @swagger
   * components:
   *  schema:
   *    auto-vehicle-accident-lawsuit-add:
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
   *        message:  Auto vehicle accident lawsuit list found.
   *        data:
   *          id: 123456789012345678901234
   *          first_name: first name
   *          last_name: last name
   *          email: email123@gmail.com
   *          phone: 1234567890
   *          dob: 2023-01-01
   *          address: address
   *          city: city
   *          state: state
   *          zip: 123456
   *          message: message
   *          was_the_accident_in_the_last_1_years: true
   *          did_you_report_the_accident_to_the_police: true
   *          did_you_seek_medical_attention: true
   *          do_you_have_ongoing_medical_needs: true
   *          agree_t_and_c: true
   *          ip_address: 255.255.255.255.
   */
  /**
   * @swagger
   * /api/auto-vehicle-accident-lawsuit:
   *    post:
   *      summary: Add Auto vehicle accident lawsuit detail.
   *      tags: [Auto vehicle accident lawsuit]
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
   *                email:
   *                  type: string
   *                  description: The email of the person .
   *                phone:
   *                  type: number
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
   *                was_the_accident_in_the_last_1_years:
   *                  type: boolean
   *                  description: was the accident in the last 1 years.
   *                did_you_report_the_accident_to_the_police:
   *                  type: boolean
   *                  description: did you report the accident to the police.
   *                did_you_seek_medical_attention:
   *                  type: boolean
   *                  description: did you seek medical attention.
   *                do_you_have_ongoing_medical_needs:
   *                  type: boolean
   *                  description:  do you have ongoing medical needs.
   *                agree_t_and_c:
   *                  type: boolean
   *                  description: Is agree to terms and condition.
   *                ip_address:
   *                  type: string
   *                  description: the ip address of user.
   *              example:
   *                first_name: first name
   *                last_name: last name
   *                email: email123@gmail.com
   *                phone: 1234567890
   *                dob: 2023-01-01
   *                address: address
   *                city: city
   *                state: state
   *                zip: 123456
   *                message: message
   *                was_the_accident_in_the_last_1_years: true
   *                did_you_report_the_accident_to_the_police: false
   *                did_you_seek_medical_attention: false
   *                do_you_have_ongoing_medical_needs: false
   *                agree_t_and_c: false
   *                ip_address: 255.255.255.255.
   *      responses:
   *        201:
   *          description: Your data has been added successfully.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/auto-vehicle-accident-lawsuit-add"
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
  // AUTO VEHICLE ACCIDENT LAWSUIT START
}
