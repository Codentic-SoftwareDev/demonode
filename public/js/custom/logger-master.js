$('#date').change(function () {
  const date = $('#date').val()
  const type = $('#id_type').val()
  $.ajax({
    url: '/get-logger-list',
    type: 'POST',
    data: {
      date: date,
      type: type
    },
    success: function (data) {
      if (data.status === false) {
        document.getElementById('#log')
        $('label[for="log"]').show()
        $('#displayLog').hide()
        $('#display_label').hide()
        $('#btn_log').hide()
      } else {
        $('label[for="log"]').hide()
        // Log Formate New Log start new line
        let dataArray = []
        data.logData.split('31merror').map((i, k) => {
          if (k > 1) {
            dataArray.push(
              data.logData.split('31merror')[k - 1].slice(data.logData.split('31merror')[k - 1].length - 28) +
                data.logData.split('31merror')[k]
            )
          } else {
            dataArray.length === 0 &&
              dataArray.push(data.logData.split('31merror')[0] + data.logData.split('31merror')[1])
          }
        })
        let demoStr = ''
        for (let index = 0; index < dataArray.length; index++) {
          demoStr += dataArray[index].substr(0, dataArray[index].lastIndexOf('}')) + '\n-----------------------------'
        }
        document.getElementById('displayLog').value = demoStr
        $('#displayLog').show()
        $('#display_label').show()
        $('#btn_log').show()
      }
    }
  })
})

// For select Box
$(document).ready(function () {
  $('.js-example-basic-single').select2()
  $('#country_dial_code').select2({
    dropdownCssClass: 'bigdrop'
  })
  $('#home_number_code').select2({
    dropdownCssClass: 'bigdrop'
  })
})

// if select the value than Date option visible
$('#dates').hide()
$('#id_type').on('change', function () {
  if ($(this).val() === 'admin-api' || 'front-end-api') $('#dates').show()
  else $('#dates').hide()
})

$('#btn_log').hide()

$('#id_type').on('change', function () {
  if ($(this).val() === 'admin-api' || 'front-end-api') $('#displayLog').hide()
})

$('#display_label').hide()

$('#dates').on('change', function () {
  $('#display_label').show()
})

// Delete Log
$('#btn_log').on('click', function () {
  let date = $('#date').val()
  const type = $('#id_type').val()
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085D6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(result => {
    if (result.value) {
      $.ajax({
        method: 'POST',
        url: `/delete-logger`,
        data: {
          date: date,
          type: type
        },
        success: function (data) {
          if (data.status === true) {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
            $('#displayLog').hide()
            $('#btn_log').prop('disabled', true)
            $('#dates').on('change', function () {
              $('#btn_log').prop('disabled', false)
            })
          } else {
            Swal.fire('Oops...', 'File Not Deleted!', 'error')
          }
        }
      })
    }
  })
})
