module.exports = () => {
  // DASHBOARD START
  /**
   * @swagger
   * components:
   *  schema:
   *    from-count:
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
   *        message: news list found
   *        data:
   *          autoVehicleAccidentLawsuitCount: 12
   *          babyFormulaLawsuitCount: 12
   *          campLejeuneWaterContaminationCount: 23
   *          contactUsCount: 45
   *          elmironLawsuitCount: 23
   *          herniaMeshLawsuitCount: 13
   *          paraquatLawsuitCount: 52
   *          roundupKillerCount: 67
   *          talcumPowderLawsuitCount: 79
   *          zanTacCount: 12
   */
  /**
   * @swagger
   * /api/dashboard:
   *    get:
   *      summary: today's and all from counts.
   *      tags: [Dashboard]
   *      security:
   *        - bearerAuth: []
   *      responses:
   *        200:
   *          description: from counting.
   *          content:
   *            application/json:
   *              schema:
   *                $ref: "#/components/schema/from-count"
   *        422:
   *          description: Unprocessable Entity.
   *          content:
   *            application/json:
   *              schema:
   *                example:
   *                  status: false
   *                  statusCode: 422
   *                  data: {}
   *                  message: count not found
   */
  // DASHBOARD END
}
