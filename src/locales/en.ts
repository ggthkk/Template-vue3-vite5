export default {
  form: {
    validate: {
      required: "Please fill out this field",
      chooseBank: "Please select a bank account",
      choose: "Please select an option",
    },
    username: {
      title: "Username",
      placeholder: "Enter username",
      validate: {
        minlength:
          "Username must be English letters (lowercase) and numbers between {minLength} and {maxLength} characters",
        invalid:
          "Username must be English letters (lowercase) and numbers between {minLength} and {maxLength} characters",
      },
    },
    phone_number: {
      title: "Phone Number",
      titleConfirm: "Confirm Phone Number",
      placeholder: "Enter phone number",
      validate: {
        onlynumber: "Only numbers can be entered",
        minlength: "Please enter the complete 10-digit phone number",
        invalid: "Please enter the information correctly",
        otpTimeout: "OTP confirmation time has expired, please try again",
      },
      otpEnd: "The system is logging in again",
    },
    password: {
      title: "Password",
      placeholder: "Enter password",
      validate: {
        minlength: "The password must be at least {length} characters long",
        invalid: "Please enter the information correctly",
        invalidCharacter:
          "The password must contain {length} characters, including at least 1 number, 1 lowercase and 1 uppercase English letter",
        samepassword: "Please enter the same password!",
      },
    },
    password_old: {
      title: "Current Password",
      placeholder: "Enter current password",
      validate: {
        minlength: "The password must be at least {length} characters long",
        invalid: "Please enter the information correctly",
        invalidCharacter:
          "The password must contain {length} characters, including at least 1 number, 1 lowercase and 1 uppercase English letter",
        samepassword: "Please enter the same password!",
      },
    },
    password_new: {
      title: "New Password",
      placeholder: "Enter new password",
      validate: {
        minlength: "The password must be at least {length} characters long",
        invalid: "Please enter the information correctly",
        invalidCharacter:
          "The password must contain {length} characters, including at least 1 number, 1 lowercase and 1 uppercase English letter",
        samepassword: "Please enter the same password!",
      },
    },
    password_repeat: {
      title: "Repeat Password",
      placeholder: "Enter password again",
      validate: {
        minlength: "The password must be at least 6 characters long",
        invalid: "Please enter the information correctly",
        invalidCharacter:
          "The password must contain {length} characters, including at least 1 number, 1 lowercase and 1 uppercase English letter",
        samepassword: "Please enter the same password!",
      },
    },
    bank_number: {
      title: "Account Number",
      uidNumber: "UID",
      trueNumber: "Truemoney Wallet number",
      placeholder: "Please enter the account number",
      validate: {
        minlength: "The account number must be at least 10 characters long",
        invalid: "Please enter the information correctly",
      },
      title_truemoney: "Truemoney Account Number",
      placeholder_truemoney: "Please enter the Truemoney account number",
    },
    bank_name: {
      title: "Account Name",
      placeholder: "Please enter the account name",
      validate: {
        minlength: "The account name must be at least {length} characters long",
        invalid: "Please enter the information correctly",
      },
    },
    bank: {
      title: "Select Bank Account",
      placeholder: "Please select a bank account",
      notFound: "No bank information found",
    },
    withdraw: {
      title: "Withdraw",
      titlebank: "Withdraw to bank account",
      placeholder: "Enter the amount you wish to withdraw",
      label: "Amount to Withdraw",
      minimumWithdraw: "Minimum {min} baht",
      canTake: "Amount available for withdrawal",
      time: "withdrawal time",
      validate: {
        empty: "Please enter the amount you wish to withdraw",
        invalid: "Please enter the amount correctly",
        min: "Minimum withdrawal {min} baht",
        overAmount: "You do not have sufficient credit for the transaction",
      },
      all: "Withdraw all",
    },
    amount: {
      min: "Minimum amount {min} baht",
      max: "Amount not to exceed {max} baht",
    },
    wheel: {
      title: "Enter Money",
      placeholder: "Enter the amount you wish to withdraw",
      label: "Amount to Withdraw",
      minimumWithdraw: "Minimum {min} baht",
      validate: {
        empty: "Please enter the amount you wish to withdraw",
        invalid: "Please enter the amount correctly",
        min: "Minimum withdrawal {min} baht",
        overAmount: "You do not have sufficient credit for the transaction",
      },
      deposit: "Withdraw into credit",
      withdraw: "Exchange for cash",
    },
    invalid: "Please enter the information correctly",
    onlyNumber: "Only numbers can be entered",
    onlyChar: "Please enter information in letters only",
    onlyNumberEn: "Please enter information in numbers or English letters only",
    selectData: "Please select information",
  },
  register: {
    title: "Register",
    ruleCondition: "Registration terms",
    ruleConditionCheck: "Please accept the registration terms and conditions",
    titleOtp: "Send OTP",
    haveAccount: "Already have an account",
    titleConfirmOtp: "Confirm OTP Code",
    labelOTP: "Enter the 6-digit OTP",
    labelCountdownOTP: "Send a new OTP code again",
    exOTP: "Time expired for OTP verification. Please try again.",
    titleSetPassword: "Set Password",
    passwordAgain: "Enter the password again",
    requirePasswordInput: "Please enter a password",
    requirePasswordLength: "Please enter a 6-character password",
    requireConfirmPasswordInput: "Please enter and confirm the password",
    requirePasswordMatch: "Please make sure the passwords match",
    requirePasswordRules:
      "The password must be 6 characters long and include at least 1 number, and both lowercase and uppercase English letters",
    titleBankaccount: "Select your bank account",
    signupSuccess: "Registration successful",
    selectAffiliate: "Choose a channel that knows us.",
    cantRegister: "Unable to apply for membership at this time.",
    countTimeOtp: "Please enter the code within time.",
    peer2payOtp: "Verify Peer2Pay account",
    chooseBank: "Select bank account",
  },
  login: {
    title: "Login",
    rememberMe: "Remember Me",
    forgotPassword: "Forgot Password",
    loginVialine: "Login via LINE",
    dontBeMember: "Not a member yet? Sign up now",
    orLogin: "Or login with",
  },
};
