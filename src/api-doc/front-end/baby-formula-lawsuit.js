module.exports = () => {
  // BABY FORMULA LAWSUIT START
  /**
   * @swagger
   * components:
   *  schema:
   *    baby-formula-lawsuit-add:
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
   *        message: baby-formula-lawsuit list found.
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
   *          chid_dob: 2023-12-12
   *          was_the_child_was_born_premature: yes
   *          was_the_child_given_formula_or_milk_fortifier: yes
   *          was_the_child_diagnosed_with_nec: yes
   *          did_the_child_experience_any_of_the_following: [Brain injury,Surgery to remove bowel,Unsure]
   *          agree_t_and_c: true
   *          ip_address: 255.255.255.255
   */
  /**
   * @swagger
   * /api/baby-formula-lawsuit:
   *    post:
   *      summary: Add baby formula lawsuit detail.
   *      tags: [Baby formula lawsuit]
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
   *                chile_dob:
   *                  type: date
   *                  description: chile date of birth .
   *                was_the_child_was_born_premature:
   *                  type: enum
   *                  description: was the child was born premature of person .
   *                was_the_child_given_formula_or_milk_fortifier:
   *                  type: enum
   *                  description: was the child given formula or milk fortifier of person .
   *                was_the_child_diagnosed_with_nec:
   *                  type: enum
   *                  description: was the child diagnosed with nec of person .
   *                did_the_child_experience_any_of_the_following:
   *                  type: string
   *                  description: did the child experience any of the following of person .
   *                agree_t_and_c:
   *                  type: boolean
   *                  description: agree t&c of person .
   *                ip_address:
   *                  type: string
   *                  description: the ip address of person .
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
   *                chid_dob: 2023-12-12
   *                was_the_child_was_born_premature: Yes
   *                was_the_child_given_formula_or_milk_fortifier: Yes
   *                was_the_child_diagnosed_with_nec: Yes
   *                did_the_child_experience_any_of_the_following: [Brain injury,Surgery to remove bowel,Unsure]
   *                agree_t_and_c: true
   *                ip_address: 255.255.255.255
   *      responses:
   *        201:
   *          description: Your data has been added successfully.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/baby-formula-lawsuit-add"
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
  // BABY FORMULA LAWSUIT END
}
