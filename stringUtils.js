export const checkAtLeastLength = (expression, length) =>
	expression && expression.trim().length >= length;

export const checkIsFilled = (expression) =>
	expression && expression.length > 0;

export const checkIsTrue = (expression) => expression;

export const checkEmailPattern = (mail) => {
	const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(mail);
};

export const parseOnlyLetterAndSpace = (expression) =>
	expression.replace(/[^A-Za-z ]/g, "");

export const parseLength = (expression, length) =>
	expression.substring(0, length);

export const capitalize = (expression) => {
	if (typeof s !== "string") return "";
	return expression.charAt(0).toUpperCase() + expression.slice(1);
};

export const createUrl = (expression) => {
	if (typeof expression !== "string") return null;
	return "/" + expression;
};
