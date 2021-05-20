import React from 'react'
import { IndexContainer } from '../components/IndexContainer';

import { MainLayout } from '../components/MainLayout'

const IndexPage = () => {
  return (
    <MainLayout pageTitle="Inicio">
      <IndexContainer />
    </MainLayout>
  )
}

export default IndexPage;