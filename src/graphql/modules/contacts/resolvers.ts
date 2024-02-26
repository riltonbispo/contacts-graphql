export const resolvers = {
  Query: {
    contacts: (_, args, { contactService }) => contactService.getContacts()
  },
  Mutation: {
    createContact: (_, { data }, { contactService }) => contactService.createContact(data),
    updateContact: (_, { id, data }, { contactService }) => contactService.updateContact(id, data),
    deleteContact: (_, { id }, { contactService }) => contactService.deleteContact(id)
  }
}