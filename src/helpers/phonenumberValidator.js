export function phonenumberValidator(num) {
  const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  const isValid = regex.test(num);

  if (!num) return "Phone can't be empty.";
  if (num.length > 10) return 'Ooops! We need a valid phone number.';
//   if (!isValid) return 'Ooops! We need a valid phone number.';
  return '';
}
