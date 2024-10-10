$('#validateLogin').validate({
  rules: {
    userName: {
      required: {
        depends: function () {
          $(this).val($.trim($(this).val()))

          return true
        }
      }
    },
    password: {
      required: {
        depends: function () {
          $(this).val($.trim($(this).val()))

          return true
        }
      },
      minlength: 8,
      maxlength: 15
    }
  },
  messages: {
    userName: {
      required: 'Please enter username'
    },
    password: {
      required: 'Please enter password',
      maxlength: 'Password should be 15 characters long',
      minlength: 'Password should be at least 8 characters long'
    }
  }
})

// Password Icon see and hide
$('.toggle-password').click(function () {
  $(this).toggleClass('fa-eye fa-eye-slash')
  var input = $($(this).attr('toggle'))
  if (input.attr('type') == 'password') {
    input.attr('type', 'text')
  } else {
    input.attr('type', 'password')
  }
})
