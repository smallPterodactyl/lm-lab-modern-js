// Instructions can be found in imperative_vs_declarative.md

export function longPasswords(passwords) {

  //this might change in future
  const PASSWORD_LENGTH = 9;

  return passwords.filter(password => (password.length >= PASSWORD_LENGTH));

}