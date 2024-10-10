module.exports = () => {
  // SETTINGS START
  /**
   * @swagger
   * components:
   *  schema:
   *    settings-list:
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
   *        message: settings list found
   *        data:
   *          id: 123456789012345678901234
   *          key: ABC
   *          value: XYZ
   */
  /**
   * @swagger
   * /api/get-settings:
   *    get:
   *      summary: settings List.
   *      tags: [Settings]
   *      security:
   *        - bearerAuth: []
   *      responses:
   *        200:
   *          description: List found.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/settings-list"
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
  // SETTINGS END
}
