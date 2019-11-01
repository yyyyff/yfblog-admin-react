import React from 'react'
import WebOptions from '@/components/WebOptions'
import "./settings.less"

const Settings = () => {
  return (
    <section className="settings">
      <div className="website"><WebOptions /></div>
      <div className="personal"></div>
    </section>
  )
}

export default Settings