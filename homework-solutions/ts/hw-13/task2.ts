/*
Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
если пароль соответствует следующим правилам:
  + Пароль должен содержать хотя бы одну заглавную букву.
  + Пароль должен содержать хотя бы одну букву в нижнем регистре.
  + Пароль должен содержать хотя бы одну цифру.
  + Пароль должен быть не менее 8 символов.
  - Пароль не должен состоять из одних пробелов
Функция должна возвращать false, если хотя бы одно из условий не выполнено.
*/

function validatePassword(password: string): boolean | undefined {
  const passArray = [...password];
  const hasLength: boolean = passArray.length >= 8;
  const hasNumber: boolean = passArray.some((element) => (element ? element >= '0' && element <= '9' : false));
  const hasLower: boolean = passArray.some((element) => (element ? element >= 'a' && element <= 'z' : false));
  const hasUpper: boolean = passArray.some((element) => (element ? element >= 'A' && element <= 'Z' : false));
  const notOnlySpaces = password.trim().length > 0;


  return hasLength&&hasLower&&hasNumber&&hasUpper&&notOnlySpaces;
}
