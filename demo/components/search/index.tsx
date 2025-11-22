import { useState } from 'react'
import { SearchBar } from "@/design/components/search";

export const SearchCompoenent = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ padding: 20, display: 'flex', gap: '20px' }}>
      <SearchBar value={value} onChange={(e) => setValue(e.target.value)} iconOnStart placeholder='Search' />
      <SearchBar value={value} disabled  onChange={(e) => setValue(e.target.value)} iconOnStart placeholder='Search' />
    </div>
  )
}

