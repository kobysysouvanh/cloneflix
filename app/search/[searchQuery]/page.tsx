

import getCurrentUser from '@/actions/getCurrentUser'
import Navbar from '@/components/Navbar'
import RowItem from '@/components/RowItem'
import SearchPageClient from '@/components/SearchClient'
import { getMediaBySearch } from '@/utils/themoviedb'
import { redirect, useParams, usePathname } from 'next/navigation'
import { stringify } from 'querystring'
import React, { useEffect } from 'react'

const SearchPage = async () => {
  const currentUser = await getCurrentUser()

  if (currentUser == null) {
    redirect("/login")
  }

  return (
    <SearchPageClient currentUser={currentUser}/>
  )
}

export default SearchPage