/**
 *
 */
export interface IPerson {
  firstName: string,
  lastName?: string | undefined,
  surName: string,
  dateBird?: string;
  city?: string;
  contacts: {
    phone: string;
    email: string;
  }
}
