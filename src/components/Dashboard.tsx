import React from 'react'
import { CenterSide } from './dashboard/CenterSide'
import { LeftSide } from './dashboard/LeftSide'
import { RightSide } from './dashboard/RightSide'

export const Dashboard = () => {
  return (
    <>
        <div className="grid grid-cols-[2fr,5fr,4fr] gap-4 h-screen">
            <LeftSide />
            <CenterSide />
            <RightSide />
        </div>
    </>
  )
}
