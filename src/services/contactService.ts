import { db } from '../db'
import { Contact, ContactInput } from '../types/contactType'

class userService {
  getContacts = async (): Promise<Contact[]> => await db('contacts')

  createContact = async (data: ContactInput): Promise<Contact> => {
    const newContact = await db('contacts').insert(data).returning('*')

    return await newContact[0]
  }

  updateContact = async (id: number, data: ContactInput): Promise<Contact> => {
    const updatedContact = await db('contacts')
      .where({ id })
      .update(data)
      .returning('*')

    return await updatedContact[0]
  }

  deleteContact = async (id: number): Promise<Boolean> => {
    await db('contacts').where({ id }).del()

    return true
  }
}

export default new userService()