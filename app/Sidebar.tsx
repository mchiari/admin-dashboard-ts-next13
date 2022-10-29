import React from 'react'

export const Sidebar = () => {
  return (
    <aside className='flex justify-center items-center w-80 min-h-screen bg-slate-800 text-white'>
      <ul>
        <li>Dashboard</li>
        <li>Users</li>
        <li>Finance</li>
        <li>Tasks</li>
        <li>Settings</li>
      </ul>
    </aside>
  )
}
