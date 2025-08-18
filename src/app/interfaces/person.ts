/**
 * Контакт. Если logo есть, то выводится в виде (logo+value), если нет - то (name+value)
 * @property {string} name - наименование типа контакта ("Телефон")
 * @property {string} value - значение контакта ('79176932484')
 * @property {string} [logo] - ссылка на логотип типа контакта
 */
export interface IContact {
  name: string;
  value: string;
  logo?: string;
}

/**
 * Кандидат
 * @property {string} firstName - имя кандидата
 * @property {string} [lastName] - отчество
 * @property {string} surName - фамилия
 * @property {string} [dateBird] - дата рождения
 * @property {string} [city] - город проживания
 * @property {Object} contacts - контактные данные
 * @property {string} contacts.phone - номер телефона
 * @property {string} contacts.email - email
 * @property {string} contacts.github - github
 * @property {string} contacts.msteams - ms teams
 */
export interface IPerson {
  firstName: string,
  lastName?: string | undefined,
  surName: string,
  dateBird?: string;
  city?: string;
  contacts: IContact[]
}
