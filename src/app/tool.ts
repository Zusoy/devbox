import React from 'react'

export declare interface Tool {
  title: string
  description: string
  path: string
  icon: React.ReactElement
  sidebarIcon: React.ReactElement
  entrypoint: React.ReactElement
}