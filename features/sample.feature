Feature: Regression

  Order to validate the APIs
  As a tester
  I want to make sure that all the APIs work as expected

  # ----- AUTH -----
  # * POST API FOR LOGIN
  Scenario: GET USER INFORMATION
    When I make a POST request to /login
    And I set body to
      """
      {
      "check_admin": true,
      }
      """
    Then I receive a response
    Then the response should have a status of 200
    Then set authentication token

  # * GET API
  Scenario: VERIFY AUTHENTICATION TOKEN
    When I make a GET request to /verify-token
    Then I receive a response
    Then the response should have a status of 200

  # ---- USER/ADMIN ----
  # * POST API ADD ADMIN
  Scenario: GET ADMIN INFORMATION
    When I make a POST request to /admin
    And I set body to
      """
      {
        "first_name": "harsh",
        "last_name": "patel",
        "phone": 7894561230,
        "email": "harsh@gmail.com",
        "password": "harsh@123"
      }
      """
    Then I receive a response
    Then the response should have a status of 201

  # * GET API ADMIN LIST
  Scenario: GET ADMIN LIST
    When I make a GET request to /admin?page=1&items_per_page=2
    Then I receive a response
    Then the response should have a status of 200

  #   * GET API ADMIN DELETE
  # Scenario: DELETE ADMIN
  #   When I make a DELETE request to /admin/63d764985932df182a7a2399
  #   Then I receive a response
  #   Then the response should have a status of 200


  # * VIEW ADMIN API
  Scenario: ADMIN VIEW
    When I make a GET request to /admin/63e097137ca501db5975a27a
    Then I receive a response
    Then the response should have a status of 200


  # * UPDATE ADMIN BY ID API
  Scenario: UPDATE ADMIN BY ID
    When I make a PUT request to /admin/63e097137ca501db5975a27a
    And I set body to
      """
      {
        "password": "Super@123"
      }
      """
    Then I receive a response
    Then the response should have a status of 201

  # * UPDATE ADMIN STATUS API
  Scenario: UPDATE STATUS INFORMATION
    When I make a PATCH request to /status-update/63e097137ca501db5975a27a
    And I set body to
      """
      {
        "status": false
      }
      """
    Then I receive a response
    Then the response should have a status of 201


  # ------ AUTO VEHICAL ACCIDENT LAWSUIT ------

  # * POST API ADD AUTO VEHICAL ACCIDENT LAWSUIT
  Scenario: GET AUTO VEHICAL ACCIDENT LAWSUIT INFORMATION
    When I make a POST request to /auto-vehicle-accident-lawsuit
    And I set body to
      """
      {
        "first_name": "first name",
        "last_name": "last name",
        "email": "email123@gmail.com",
        "phone": 1234567890,
        "dob": "2023-01-01",
        "address": "address",
        "city": "city",
        "state": "state",
        "zip": 123456,
        "message": "message",
        "was_the_accident_in_the_last_1_years": true,
        "did_you_report_the_accident_to_the_police": false,
        "did_you_seek_medical_attention": false,
        "do_you_have_ongoing_medical_needs": false,
        "agree_t_and_c": false,
        "ip_address": "255.255.255.255."
      }
      """
    Then I receive a response
    Then the response should have a status of 201

  # * GET API AUTO VEHICAL ACCIDENT LAWSUIT LIST
  Scenario:GET AUTO VEHICAL ACCIDENT LAWSUIT LIST
    When I make a GET request to /auto-vehicle-accident-lawsuit?page=1&items_per_page=2
    Then I receive a response
    Then the response should have a status of 200

  # * VIEW AUTO VEHICAL ACCIDENT LAWSUIT API
  Scenario: AUTO VEHICAL ACCIDENT LAWSUIT VIEW
    When I make a GET request to /auto-vehicle-accident-lawsuit/63e07f8746f7dd69ff3340ac
    Then I receive a response
    Then the response should have a status of 200

  # * GET API AUTO VEHICAL ACCIDENT LAWSUIT DELETE
  # Scenario: DELETE AUTO VEHICAL ACCIDENT LAWSUIT
  #   When I make a DELETE request to /auto-vehicle-accident-lawsuit/63d765525932df182a7a23cc
  #   Then I receive a response
  #   Then the response should have a status of 200

  # * GET API AUTO VEHICAL ACCIDENT LAWSUIT DATA EXPORT WITH .CSV FILE
  Scenario: GET AUTO VEHICAL ACCIDENT LAWSUIT DATA EXPORT WITH .CSV FILE
    When I make a GET request to /auto-vehicle-accident-lawsuit-export
    Then I receive a response
    Then the response should have a status of 201


  # ------ BABY FORMULA LAWSUIT ------

  # * POST API ADD BABY FORMULA LAWSUIT
  Scenario: GET BABY FORMULA LAWSUIT INFORMATION
    When I make a POST request to /baby-formula-lawsuit
    And I set body to
      """
      {
        "first_name": "first name",
        "last_name": "last name",
        "dob": "2023-12-12",
        "email": "email123@gmail.com",
        "phone": 1234567890,
        "address": "address",
        "state": "state",
        "city": "city",
        "zip": 123456,
        "message": "message",
        "chid_dob": "2023-12-12",
        "was_the_child_was_born_premature": "Yes",
        "was_the_child_given_formula_or_milk_fortifier": "Yes",
        "was_the_child_diagnosed_with_nec": "Yes",
        "did_the_child_experience_any_of_the_following": [
          "Brain injury",
          "Surgery to remove bowel",
          "Unsure"
        ],
        "agree_t_and_c": true,
        "ip_address": "255.255.255.255"
      }
      """
    Then I receive a response
    Then the response should have a status of 201

  # * GET API BABY FORMULA LAWSUIT LIST
  Scenario: GET BABY FORMULA LAWSUIT LIST
    When I make a GET request to /baby-formula-lawsuit?page=1&items_per_page=2
    Then I receive a response
    Then the response should have a status of 200

  # * VIEW  BABY FORMULA LAWSUIT
  Scenario: VIEW  BABY FORMULA LAWSUIT
    When I make a GET request to /baby-formula-lawsuit/63e07f9446f7dd69ff3340b0
    Then I receive a response
    Then the response should have a status of 200

  # * GET API VIEW  BABY FORMULA LAWSUIT DELETE
  # Scenario: DELETE BABAY FORMULA LAWSUIT
  #   When I make a DELETE request to /baby-formula-lawsuit/63d76e3f5932df182a7a259f
  #   Then I receive a response
  #   Then the response should have a status of 200

  # * GET API BABY FORMULA LAWSUIT DATA EXPORT WITH .CSV FILE
  Scenario:  GET BABY FORMULA LAWSUIT DATA EXPORT WITH .CSV FILE
    When I make a GET request to /baby-formula-lawsuit-export
    Then I receive a response
    Then the response should have a status of 201

  # ------ CAMP LEJEUNE WATER CONRTAMINATION ------

  # * POST API ADD CAMP LEJEUNE WATER CONRTAMINATION
  Scenario: GET CAMP LEJEUNE WATER CONRTAMINATION INFORMATION
    When I make a POST request to /camp-lejeune-water-contamination
    And I set body to
      """
      {
        "first_name": "first name",
        "last_name": "last name",
        "dob": "2022-12-12",
        "email": "email123@gmail.com",
        "phone": 1234567890,
        "address": "address",
        "state": "state",
        "city": "city",
        "zip": 123456,
        "message": "message",
        "agree_t_and_c": true,
        "ip_address": "255.255.255.255"
      }
      """
    Then I receive a response
    Then the response should have a status of 201

  # * GET API CAMP LEJEUNE WATER CONRTAMINATION LIST
  Scenario: GET CAMP LEJEUNE WATER CONRTAMINATION LIST
    When I make a GET request to /camp-lejeune-water-contamination?page=1&items_per_page=2
    Then I receive a response
    Then the response should have a status of 200

  # * VIEW CAMP LEJEUNE WATER CONRTAMINATION API
  Scenario: CAMP LEJEUNE WATER CONRTAMINATION VIEW
    When I make a GET request to /camp-lejeune-water-contamination/63e07fb146f7dd69ff3340b8
    Then I receive a response
    Then the response should have a status of 200

  # * GET API CAMP LEJEUNE WATER CONRTAMINATION DELETE
  # Scenario: DELETE CAMP LEJEUNE WATER CONRTAMINATION
  #   When I make a DELETE request to /camp-lejeune-water-contamination/63d7655e5932df182a7a23d8
  #   Then I receive a response
  #   Then the response should have a status of 200

  # * GET API CAMP LEJEUNE WATER CONRTAMINATION DATA EXPORT WITH .CSV FILE
  Scenario: GET CAMP LEJEUNE WATER CONRTAMINATION DATA EXPORT WITH .CSV FILE
    When I make a GET request to /camp-lejeune-water-contamination-export
    Then I receive a response
    Then the response should have a status of 201


  # ------ CONTACT US ------

  # * POST API CONTACT US
  Scenario: GET CONTACT US INFORMATION
    When I make a POST request to /contact-us
    And I set body to
      """
      {
        "name": "name",
        "email": "email123@gmail.com",
        "subject": "subject",
        "message": "message",
        "ip_address": "255.255.255.255"
      }
      """
    Then I receive a response
    Then the response should have a status of 201

  # * GET API CONTACT US LIST
  Scenario: GET CONTACT US LIST
    When I make a GET request to /contact-us?page=1&items_per_page=2
    Then I receive a response
    Then the response should have a status of 200

  # * VIEW CONTACT US API
  Scenario: CONTACT US VIEW
    When I make a GET request to /contact-us/63e07fba46f7dd69ff3340bc
    Then I receive a response
    Then the response should have a status of 200

  # * GET API CONTACT US DELETE
  # Scenario: DELETE CONTACT US
  #   When I make a DELETE request to /contact-us/63d771ef5932df182a7a25f6
  #   Then I receive a response
  #   Then the response should have a status of 200

  # * GET API CONTACT US DATA EXPORT WITH .CSV FILE
  Scenario: GET Contact us data export with .csv file
    When I make a GET request to /contact-us-export
    Then I receive a response
    Then the response should have a status of 201


  # ------ DASHBORD ------

  # * GET API DASHBORD.
  Scenario: GET DASHBORD FROM COUNTS
    When I make a GET request to /api/dashboard
    Then I receive a response
    Then the response should have a status of 200


  # ------ ELMIRON LAWSUIT ------

  # * POST API ADD ELMIRON LAWSUIT
  Scenario: GET ELMIRON LAWSUIT INFORMATION
    When I make a POST request to /elmiron-lawsuit
    And I set body to
      """
      {
        "first_name": "first name",
        "last_name": "last name",
        "dob": "2023-12-12",
        "email": "email123@gmail.com",
        "phone": 1234567890,
        "address": "address",
        "state": "state",
        "city": "city",
        "zip": 123456,
        "message": "message",
        "is_the_injured_individual_you_or_a_loved_one": "Myself",
        "concerned_about_an_injury_or_a_diagnosis_that_you_believe_resulted_from_taking_Elmiron": false,
        "have_any_of_these_diagnoses_occurred_from_taking_Elmiron": "No Diagnosis",
        "have_any_of_these_symptoms_occurred_from_taking_Elmiron": "No symptoms",
        "the_year_that_the_eye_symptom_or_diagnosis_was_first_discovered": "2023-12-12",
        "the_year_when_the_Elmiron_medication_was_started": "2023-12-12",
        "the_year_when_the_Elmiron_medication_was_stopped": "2023-12-12",
        "is_the_medication_currently_being_taken": false,
        "have_you_or_your_loved_one_ever_signed_any_documents_retainers_or_agreements_with_an_attorney_or_a_law_firm_about_this_before": false,
        "agree_t_and_c": false,
        "ip_address": "255.255.255.255"
      }
      """
    Then I receive a response
    Then the response should have a status of 201

  # * GET API ELMIRON LAWSUIT LIST
  Scenario: GET ELMIRON LAWSUIT LIST
    When I make a GET request to /elmiron-lawsuit?page=1&items_per_page=2
    Then I receive a response
    Then the response should have a status of 200

  # * VIEW ELMIRON LAWSUIT API
  Scenario: ELMIRON LAWSUIT VIEW
    When I make a GET request to /elmiron-lawsuit/63e07fc246f7dd69ff3340c4
    Then I receive a response
    Then the response should have a status of 200

  # * GET API ELMIRON LAWSUIT DELETE
  # Scenario: DELETE ELMIRON LAWSUIT
  #   When I make a DELETE request to /elmiron-lawsuit/63d7731a5932df182a7a267b
  #   Then I receive a response
  #   Then the response should have a status of 200

  # * GET API ELMIRON LAWSUIT DATA EXPORT WITH .CSV FILE
  Scenario: GET ELMIRON LAWSUIT DATA EXPORT WITH .CSV FILE
    When I make a GET request to /elmiron-lawsuit-export
    Then I receive a response
    Then the response should have a status of 201


  # ------ HERNIA MESH LAWSUIT  ------

  # * POST API ADD HERNIA MESH LAWSUIT
  Scenario: GET HERNIA MESH LAWSUIT INFORMATION
    When I make a POST request to /hernia-mesh-lawsuit
    And I set body to
      """
      {
        "first_name": "first name",
        "last_name": "last name",
        "dob": "2023-12-12",
        "email": "email123@gmail.com",
        "phone": 1234567890,
        "address": "address",
        "state": "state",
        "city": "city",
        "zip": 123456,
        "message": "message",
        "do_you_have_an_attorney_working_on_the_case": true,
        "agree_t_and_c": false,
        "ip_address": "255.255.255.255"
      }
      """
    Then I receive a response
    Then the response should have a status of 201

  # * GET API HERNIA MESH LAWSUIT LIST
  Scenario: GET HERNIA MESH LAWSUIT LIST
    When I make a GET request to /hernia-mesh-lawsuit?page=1&items_per_page=2
    Then I receive a response
    Then the response should have a status of 200

  # * VIEW HERNIA MESH LAWSUIT API
  Scenario: Auto HERNIA MESH LAWSUIT view
    When I make a GET request to /hernia-mesh-lawsuit/63e07fc746f7dd69ff3340ca
    Then I receive a response
    Then the response should have a status of 200

  # * GET API HERNIA MESH LAWSUIT DELETE
  # Scenario: DELETE HERNIA MESH LAWSUIT
  #   When I make a DELETE request to /hernia-mesh-lawsuit/63d765765932df182a7a23ea
  #   Then I receive a response
  #   Then the response should have a status of 200

  # * GET API HERNIA MESH LAWSUIT DATA EXPORT WITH .CSV FILE
  Scenario: GET HERNIA MESH LAWSUIT DATA EXPORT WITH .CSV FILE
    When I make a GET request to /hernia-mesh-lawsuit-export
    Then I receive a response
    Then the response should have a status of 201


  # ------ PARAQUAT LAWSUIT ------

  # * POST API ADD PARAQUAT LAWSUIT
  Scenario: GET PARAQUAT LAWSUIT INFORMATION
    When I make a POST request to /paraquat-lawsuit
    And I set body to
      """
      {
        "first_name": "first name",
        "last_name": "last name",
        "dob": "2022-12-12",
        "email": "email123@gmail.com",
        "phone": 1234567890,
        "address": "address",
        "state": "state",
        "city": "city",
        "zip": 123456,
        "message": "message",
        "are_you_liscensed_to_use_Paraquat": true,
        "were_you_given_medication": false,
        "are_you_working_around_commercial_weed_killers_and_pesticides": false,
        "diagnosed_with_Parkinson_disease_with_movement_disorder": false,
        "agree_t_and_c": false,
        "ip_address": "255.255.255.255"
      }
      """
    Then I receive a response
    Then the response should have a status of 201

  # * GET API PARAQUAT LAWSUIT LIST
  Scenario: GET PARAQUAT LAWSUIT LIST
    When I make a GET request to /paraquat-lawsuit?page=1&items_per_page=2
    Then I receive a response
    Then the response should have a status of 200

  # * VIEW PARAQUAT LAWSUIT API
  Scenario: PARAQUAT LAWSUIT VIEW
    When I make a GET request to /paraquat-lawsuit/63e07fd846f7dd69ff3340d4
    Then I receive a response
    Then the response should have a status of 200

  # * GET API PARAQUAT LAWSUIT DELETE
  # Scenario: DELETE PARAQUAT LAWSUIT
  #   When I make a DELETE request to /paraquat-lawsuit/63d765915932df182a7a23f6
  #   Then I receive a response
  #   Then the response should have a status of 200

  # * GET API PARAQUAT LAWSUIT DATA EXPORT WITH .CSV FILE
  Scenario: GET PARAQUAT LAWSUIT DATA EXPORT WITH .CSV FILE
    When I make a GET request to /paraquat-lawsuit-export
    Then I receive a response
    Then the response should have a status of 201


  # ------ ROUNDUP KILLER ------

  # * POST API ADD ROUNDUP KILLER
  Scenario: GET ROUNDUP KILLER INFORMATION
    When I make a POST request to /roundup-killer
    And I set body to
      """
      {
        "first_name": "first name",
        "last_name": "last name",
        "dob": "2022-12-12",
        "email": "email123@gmail.com",
        "phone": 1234567890,
        "address": "address",
        "state": "state",
        "city": "city",
        "zip": 123456,
        "message": "message",
        "state_roundup_used": true,
        "where_were_you_exposed_to_Roundup": "Home",
        "were_you_or_a_loved_one_diagnosed_with_Non_Hodgkin_Lymphoma": true,
        "have_you_ever_had_an_organ_transplant_that_required_immunosup_pressant_medication_prior_to_NHL_diagnosis": true,
        "have_you_ever_been_diagnosed_with_an_Autoimmune_disorder": true,
        "have_you_ever_been_diagnosed_with_a_viral_infection": true,
        "agree_t_and_c": false,
        "ip_address": "255.255.255.255"
      }
      """
    Then I receive a response
    Then the response should have a status of 201

  # * GET API ROUNDUP KILLER LIST
  Scenario: GET ROUNDUP KILLER LIST
    When I make a GET request to /roundup-killer?page=1&items_per_page=2
    Then I receive a response
    Then the response should have a status of 200

  # * VIEW ROUNDUP KILLER API
  Scenario: ROUNDUP KILLER VIEW
    When I make a GET request to /roundup-killer/63e07fec46f7dd69ff3340de
    Then I receive a response
    Then the response should have a status of 200

  # * GET API ROUNDUP KILLER DELETE
  # Scenario: DELETE ROUNDUP KILLER
  #   When I make a DELETE request to /roundup-killer/63d78a695932df182a7a288b
  #   Then I receive a response
  #   Then the response should have a status of 200


  # ------ TALCUM POWDER LAWSUIT ------

  # * POST API ADD TALCUM POWDER LAWSUIT
  Scenario: GET TALCUM POWDER LAWSUIT INFORMATION
    When I make a POST request to /talcum-powder-lawsuit
    And I set body to
      """
      {
        "first_name": "first name",
        "last_name": "last name",
        "dob": "2023-12-12",
        "email": "email123@gmail.com",
        "phone": 1234567890,
        "address": "address",
        "state": "state",
        "city": "city",
        "zip": 123456,
        "message": "message",
        "talc_and_had_a_diagnosis_of_ovarian_cancer_anytime_from_to_current": true,
        "agree_t_and_c": true,
        "ip_address": "255.255.552.255"
      }
      """
    Then I receive a response
    Then the response should have a status of 201

  # * GET API TALCUM POWDER LAWSUIT LIST
  Scenario: GET TALCUM POWDER LAWSUIT LIST
    When I make a GET request to /talcum-powder-lawsuit?page=1&items_per_page=2
    Then I receive a response
    Then the response should have a status of 200

  # * VIEW TALCUM POWDER LAWSUIT API
  Scenario: TALCUM POWDER LAWSUIT VIEW
    When I make a GET request to /talcum-powder-lawsuit/63e07ff346f7dd69ff3340e2
    Then I receive a response
    Then the response should have a status of 200

  # * GET API TALCUM POWDER LAWSUIT DELETE
  # Scenario: DELETE TALCUM POWDER LAWSUIT
  #   When I make a DELETE request to /talcum-powder-lawsuit/63d765915932df182a7a23f6
  #   Then I receive a response
  #   Then the response should have a status of 200

  # * GET API TALCUM POWDER LAWSUIT DATA EXPORT WITH .CSV FILE
  Scenario: GET TALCUM POWDER LAWSUIT DATA EXPORT WITH .CSV FILE
    When I make a GET request to /talcum-powder-lawsuit-export
    Then I receive a response
    Then the response should have a status of 201


  # ------ ZANTAC-LAWSUIT ------

  # * POST API ADD ZANTAC-LAWSUIT
  Scenario: GET ZANTAC-LAWSUIT INFORMATION
    When I make a POST request to /zantac-lawsuit
    And I set body to
      """
      {
        "first_name": "first name",
        "last_name": "last name",
        "dob": "2022-12-12",
        "email": "email123@gmail.com",
        "phone": 1234567890,
        "address": "address",
        "state": "gujarat",
        "city": "city",
        "zip": 123456,
        "message": "message",
        "you_or_your_loved_one_used_Zantac_before": true,
        "you_or_a_loved_one_diagnosed_with_Cancer": false,
        "agree_t_and_c": false,
        "ip_address": "255.255.255.255"
      }
      """
    Then I receive a response
    Then the response should have a status of 201

  # * GET API ZANTAC-LAWSUIT LIST
  Scenario: GET ZANTAC-LAWSUIT LIST
    When I make a GET request to /zantac-lawsuit?page=1&items_per_page=2
    Then I receive a response
    Then the response should have a status of 200

  # * VIEW ZANTAC-LAWSUIT API
  Scenario: ZANTAC-LAWSUIT VIEW
    When I make a GET request to /zantac-lawsuit/63e0803746f7dd69ff3340ea
    Then I receive a response
    Then the response should have a status of 200

  # * GET API ZANTAC-LAWSUIT DELETE
  # Scenario: DELETE ZANTAC-LAWSUIT
  #   When I make a DELETE request to /zantac-lawsuit/63d78f61028f95ec6b93e4c5
  #   Then I receive a response
  #   Then the response should have a status of 200

  # * GET API ZANTAC-LAWSUIT DATA EXPORT WITH .CSV FILE
  Scenario: GET ZANTAC-LAWSUITDATA EXPORT WITH .CSV FILE
    When I make a GET request to /zantac-lawsuit-export
    Then I receive a response
    Then the response should have a status of 201


  # ------ NEWS ------

  # * POST API ADD NEWS
  Scenario: GET NEWS INFORMATION
    When I make a POST request to /news
    And I set body to
      """
      {
        "title": "titlr",
        "details": "details",
        "slug": "slug",
        "image": "news-8999445312.png"
      }
      """
    Then I receive a response
    Then the response should have a status of 201

  # * GET API NEWS LIST
  Scenario: GET NEWS LIST
    When I make a GET request to /news?page=1&items_per_page=2
    Then I receive a response
    Then the response should have a status of 200

  # * GET API NEWS DELETE
  # Scenario: DELETE NEWS
  #   When I make a DELETE request to /news/63d767155932df182a7a246b
  #   Then I receive a response
  #   Then the response should have a status of 200

  # * UPDATE NEWS
  Scenario: UPDATE NEWS INFORMATION
    When I make a PUT request to /news/63e082e91c0a1c2200ca3ea4
    And I set body to
      """
      {
        "header": "Harsh",
        "contain": "Patel",
        "image": "harsh.png"
      }
      """
    Then I receive a response
    Then the response should have a status of 201


  # * VIEW NEWS API
  Scenario:NEWS VIEW
    When I make a GET request to /news/63d767675932df182a7a2474
    Then I receive a response
    Then the response should have a status of 200


  # ------ SETTING ------

  # * POST API ADD SETTING
  Scenario: GET SETTING INFORMATION
    When I make a POST request to /settings
    And I set body to
      """
      {
        "key": "ABC",
        "value": "XYZ"
      }
      """
    Then I receive a response
    Then the response should have a status of 201

  # * GET API SETTING LIST
  Scenario: GET SETTING LIST
    When I make a GET request to /settings?page=1&items_per_page=2
    Then I receive a response
    Then the response should have a status of 200

  # * VIEW SETTING
  Scenario: SETTING VIEW
    When I make a GET request to /settings/63e0adc939d021a12da783c7
    Then I receive a response
    Then the response should have a status of 201

  # * UPDATE SETTING
  Scenario: SETTING UPDATE
    When I make a PUT request to /settings
    Then I receive a response
    Then the response should have a status of 201



  # ------ PARAGARD LAWSUIT ------

  # * POST API ADD PARAGARD LAWSUIT
  Scenario: GET PARAGARD LAWSUIT INFORMATION
    When I make a POST request to /paragard-lawsuit
    And I set body to
      """
      {
        "first_name": "first name",
        "last_name": "last name",
        "dob": "2023-12-12",
        "email": "email123@gmail.com",
        "phone": 1234567890,
        "address": "address",
        "city": "city",
        "zip": 123456,
        "state": "gujrat",
        "message": "message",
        "are_you_concerned_about_an_injury_from_a_paragard_IUD_device_implant": true,
        "is_the_injured_individual_you_or_a_loved_one": false,
        "what_date_was_the_paragard_IUD_implanted": "2023-12-12",
        "was_there_any_other_complications_when_the_IUD_broke": "No Complications",
        "was_surgery_required_to_remove_the_paragard_IUD": "Yes",
        "have_you_or_your_loved_one_ever_signed_any_documents_retainers_or_agreements_with_an_attorney_or_a_law_firm_about_this_before": false,
        "agree_t_and_c": false,
        "ip_address": "255.255.255.255"
      }
      """
    Then I receive a response
    Then the response should have a status of 201

  # * GET API PARAGARD LAWSUIT LIST
  Scenario: GET PARAGARD LAWSUIT LIST
    When I make a GET request to /paragard-lawsuit?page=1&items_per_page=2
    Then I receive a response
    Then the response should have a status of 200

  # * VIEW PARAGARD LAWSUIT API
  Scenario: PARAGARD LAWSUIT VIEW
    When I make a GET request to /paragard-lawsuit/63e07fcf46f7dd69ff3340d0
    Then I receive a response
    Then the response should have a status of 200

  # * GET API TALCUM POWDER LAWSUIT DELETE
  # Scenario: DELETE TALCUM POWDER LAWSUIT
  #   When I make a DELETE request to /talcum-powder-lawsuit/63d765915932df182a7a23f6
  #   Then I receive a response
  #   Then the response should have a status of 200

  # * GET API TALCUM POWDER LAWSUIT DATA EXPORT WITH .CSV FILE
  Scenario: GET TALCUM POWDER LAWSUIT DATA EXPORT WITH .CSV FILE
    When I make a GET request to /paragard-lawsuit-export
    Then I receive a response
    Then the response should have a status of 201


  # ------ PHILIPS LAWSUIT ------

  # * POST API ADD PHILIPS LAWSUIT
  Scenario: GET PHILIPS LAWSUIT INFORMATION
    When I make a POST request to /philips-cpap-lawsuit
    And I set body to
      """
      {
        "first_name": "first name",
        "last_name": "last name",
        "dob": "2023-12-12",
        "email": "email123@gmail.com",
        "phone": 1234567890,
        "address": "address",
        "state": "gujrat",
        "city": "city",
        "zip": 123456,
        "message": "message",
        "have_you_suffered_any_of_the_following_injuries_as_a_result_of_using_a_CPAP_BiPAP_or_ventilator_machine": [
          "Liver, lung, or kidney cancer"
        ],
        "did_you_use_a_Philips_brand_machine": "No",
        "did_you_seek_medical_treatment_for_your_injury": "No",
        "agree_t_and_c": false,
        "ip_address": "255.255.255.255"
      }
      """
    Then I receive a response
    Then the response should have a status of 201

  # * GET API PHILIPS LAWSUIT LIST
  Scenario: GET PHILIPS LAWSUIT LIST
    When I make a GET request to /philips-cpap-lawsuit?page=1&items_per_page=2
    Then I receive a response
    Then the response should have a status of 200

  # * VIEW PHILIPS LAWSUIT API
  Scenario: PHILIPS LAWSUIT VIEW
    When I make a GET request to /philips-cpap-lawsuit/63e088929c8c5bb6f9d2fecd
    Then I receive a response
    Then the response should have a status of 200

  # * GET API PHILIPS LAWSUIT DELETE
  # Scenario: DELETE PHILIPS LAWSUIT
  #   When I make a DELETE request to /talcum-powder-lawsuit/63d765915932df182a7a23f6
  #   Then I receive a response
  #   Then the response should have a status of 200

  # * GET API PHILIPS LAWSUIT EXPORT WITH .CSV FILE
  Scenario: GET PHILIPS LAWSUIT EXPORT WITH .CSV FILE
    When I make a GET request to /philips-cpap-lawsuit-export
    Then I receive a response
    Then the response should have a status of 201
