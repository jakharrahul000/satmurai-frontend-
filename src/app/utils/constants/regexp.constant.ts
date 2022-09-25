export const DELETE_REGEXP = /^DELETE/;

export const DISPLAY_NAME_REGEXP = /^[a-zA-Z0-9 ]*$/;

export const USERNAME_REGEXP = /^([a-zA-Z0-9]){5,}$/;

export const EMAIL_REGEXP =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

export const PHONE_NUMBER_REGEXP = /^\d{10}$/;

export const PASSWORD_REGEXP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

export const USERNAME_EMAIL_PHONE_REGEXP = new RegExp(
    USERNAME_REGEXP.source + '|' + PHONE_NUMBER_REGEXP.source + '|' + EMAIL_REGEXP.source,
);

export const EMAIL_PHONE_REGEXP = new RegExp(
    PHONE_NUMBER_REGEXP.source + '|' + EMAIL_REGEXP.source,
);
