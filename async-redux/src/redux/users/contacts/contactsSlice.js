import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://688380e121fa24876a9e522d.mockapi.io/api/v1/Contacts' }),
  endpoints: (build) => ({
    fetchContacts: build.query({
      query: (name) => `/?name=${name}`,
    }),
  }),
})

export const { useFetchContactsQuery } = contactApi;