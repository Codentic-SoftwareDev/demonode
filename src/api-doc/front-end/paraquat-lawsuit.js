module.exports = () => {
  // PARAQUAT LAWSUIT START
  /**
   * @swagger
   * components:
   *  schema:
   *    paraquat-lawsuit-add:
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
   *        message: paraquat-lawsuit list found.
   *        data:
   *          id: 123456789012345678901234
   *          first_name: first name
   *          last_name: last name
   *          dob: 2022-12-12
   *          email: email123@gmail.com
   *          phone: 1234567890
   *          address: address
   *          state: state
   *          city: city
   *          zip: 123456
   *          message: message
   *          are_you_liscensed_to_use_Paraquat: true
   *          were_you_given_medication: false
   *          are_you_working_around_commercial_weed_killers_and_pesticides: false
   *          diagnosed_with_Parkinson_disease_with_movement_disorder: false
   *          agree_t_and_c: false
   *          ip_address: 255.255.255.255
   */
  /**
   * @swagger
   * /api/paraquat-lawsuit:
   *    post:
   *      summary: Add paraquat lawsuit detail.
   *      tags: [Paraquat lawsuit]
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
   *                are_you_liscensed_to_use_Paraquat:
   *                  type: string
   *                  description: are you liscensed to use Paraquat of person .
   *                are_you_working_around_commercial_weed_killers_and_pesticides:
   *                  type: string
   *                  description: are you working around commercial weed killers and pesticides of person .
   *                were_you_given_medication:
   *                  type: string
   *                  description: were you given medication of person .
   *                diagnosed_with_Parkinson_disease_with_movement_disorder:
   *                  type: string
   *                  description: diagnosed with Parkinson disease with movement disorder of person .
   *                agree_t_and_c:
   *                  type: boolean
   *                  description: agree t&c of person .
   *                ip_address:
   *                  type: string
   *                  description: the ip address of user.
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
   *                are_you_liscensed_to_use_Paraquat: true
   *                were_you_given_medication: false
   *                are_you_working_around_commercial_weed_killers_and_pesticides: false
   *                diagnosed_with_Parkinson_disease_with_movement_disorder: false
   *                agree_t_and_c: false
   *                ip_address: 255.255.255.255
   *      responses:
   *        201:
   *          description: Your data has been added successfully.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/paraquat-lawsuit-add"
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
  // PARAQUAT LAWSUIT END
}
